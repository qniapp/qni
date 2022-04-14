var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

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
      function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) {
          throw Fraction["InvalidParameter"];
        }
        return n * s;
      }
      __name(assign, "assign");
      function newFraction(n, d2) {
        if (d2 === 0) {
          throw Fraction["DivisionByZero"];
        }
        var f2 = Object.create(Fraction.prototype);
        f2["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d2);
        f2["n"] = n / a;
        f2["d"] = d2 / a;
        return f2;
      }
      __name(newFraction, "newFraction");
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
        var v = 0, w2 = 0, x = 0, y2 = 1, z2 = 1;
        var A2 = 0, B = 1;
        var C = 1, D2 = 1;
        var N2 = 1e7;
        var M2;
        if (p1 === void 0 || p1 === null) {
        } else if (p2 !== void 0) {
          n = p1;
          d2 = p2;
          s = n * d2;
          if (n % 1 !== 0 || d2 % 1 !== 0) {
            throw Fraction["NonIntegerParameter"];
          }
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
                throw Fraction["InvalidParameter"];
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
                throw Fraction["InvalidParameter"];
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
                  y2 = Math.pow(10, B[A2].length);
                  A2++;
                }
                if (B[A2] === "(" && B[A2 + 2] === ")" || B[A2] === "'" && B[A2 + 2] === "'") {
                  x = assign(B[A2 + 1], s);
                  z2 = Math.pow(10, B[A2 + 1].length) - 1;
                  A2 += 3;
                }
              } else if (B[A2 + 1] === "/" || B[A2 + 1] === ":") {
                w2 = assign(B[A2], s);
                y2 = assign(B[A2 + 2], 1);
                A2 += 3;
              } else if (B[A2 + 3] === "/" && B[A2 + 1] === " ") {
                v = assign(B[A2], s);
                w2 = assign(B[A2 + 2], s);
                y2 = assign(B[A2 + 4], 1);
                A2 += 5;
              }
              if (B.length <= A2) {
                d2 = y2 * z2;
                s = n = x + d2 * v + z2 * w2;
                break;
              }
            }
            default:
              throw Fraction["InvalidParameter"];
          }
        if (d2 === 0) {
          throw Fraction["DivisionByZero"];
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
        parse(a, b);
        if (this instanceof Fraction) {
          a = gcd(P["d"], P["n"]);
          this["s"] = P["s"];
          this["n"] = P["n"] / a;
          this["d"] = P["d"] / a;
        } else {
          return newFraction(P["s"] * P["n"], P["d"]);
        }
      }
      __name(Fraction, "Fraction");
      Fraction["DivisionByZero"] = new Error("Division by Zero");
      Fraction["InvalidParameter"] = new Error("Invalid argument");
      Fraction["NonIntegerParameter"] = new Error("Parameters must be integer");
      Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        "abs": function() {
          return newFraction(this["n"], this["d"]);
        },
        "neg": function() {
          return newFraction(-this["s"] * this["n"], this["d"]);
        },
        "add": function(a, b) {
          parse(a, b);
          return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        "sub": function(a, b) {
          parse(a, b);
          return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        "mul": function(a, b) {
          parse(a, b);
          return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        "div": function(a, b) {
          parse(a, b);
          return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        "clone": function() {
          return newFraction(this["s"] * this["n"], this["d"]);
        },
        "mod": function(a, b) {
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          if (a === void 0) {
            return newFraction(this["s"] * this["n"] % this["d"], 1);
          }
          parse(a, b);
          if (P["n"] === 0 && this["d"] === 0) {
            throw Fraction["DivisionByZero"];
          }
          return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        "gcd": function(a, b) {
          parse(a, b);
          return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        "lcm": function(a, b) {
          parse(a, b);
          if (P["n"] === 0 && this["n"] === 0) {
            return newFraction(0, 1);
          }
          return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        "ceil": function(places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        "floor": function(places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        "round": function(places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        "inverse": function() {
          return newFraction(this["s"] * this["d"], this["n"]);
        },
        "pow": function(a, b) {
          parse(a, b);
          if (P["d"] === 1) {
            if (P["s"] < 0) {
              return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
            } else {
              return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
          }
          if (this["s"] < 0)
            return null;
          var N2 = factorize(this["n"]);
          var D2 = factorize(this["d"]);
          var n = 1;
          var d2 = 1;
          for (var k in N2) {
            if (k === "1")
              continue;
            if (k === "0") {
              n = 0;
              break;
            }
            N2[k] *= P["n"];
            if (N2[k] % P["d"] === 0) {
              N2[k] /= P["d"];
            } else
              return null;
            n *= Math.pow(k, N2[k]);
          }
          for (var k in D2) {
            if (k === "1")
              continue;
            D2[k] *= P["n"];
            if (D2[k] % P["d"] === 0) {
              D2[k] /= P["d"];
            } else
              return null;
            d2 *= Math.pow(k, D2[k]);
          }
          if (P["s"] < 0) {
            return newFraction(d2, n);
          }
          return newFraction(n, d2);
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
          eps = eps || 1e-3;
          var thisABS = this["abs"]();
          var cont = thisABS["toContinued"]();
          for (var i = 1; i < cont.length; i++) {
            var s = newFraction(cont[i - 1], 1);
            for (var k = i - 2; k >= 0; k--) {
              s = s["inverse"]()["add"](cont[k]);
            }
            if (s["sub"](thisABS)["abs"]().valueOf() < eps) {
              return s["mul"](this["s"]);
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
          var N2 = this["n"];
          var D2 = this["d"];
          if (isNaN(N2) || isNaN(D2)) {
            return "NaN";
          }
          dec = dec || 15;
          var cycLen = cycleLen(N2, D2);
          var cycOff = cycleStart(N2, D2, cycLen);
          var str = this["s"] < 0 ? "-" : "";
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
  constructor(r, n) {
    super(r);
    this.detailsObj = n, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), w++;
    try {
      this.details = w === 1 ? c(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (i) {
      console.error(i), this.details = "(failed to describe detailsObj, see the console for details)";
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
var f = u;
f.CONSISTENT = new u(false, 0, 2, ", "), f.EXACT = new u(true, 0, void 0, ", "), f.MINIFIED = new u(true, 0, void 0, ","), f.SIMPLIFIED = new u(true, 5e-4, 3, ", ");
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
    return e = e || f.EXACT, e.allowAbbreviation ? this.toStringAllowSingleValue(e) : this.toStringBothValues(e);
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
var y = o;
y.ZERO = new o(0, 0), y.ONE = new o(1, 0), y.I = new o(0, 1);

// ../../packages/elements/dist/index.js
var yf = Object.create;
var Yo = Object.defineProperty;
var _u = Object.getOwnPropertyDescriptor;
var xf = Object.getOwnPropertyNames;
var wf = Object.getPrototypeOf;
var Ef = Object.prototype.hasOwnProperty;
var c2 = /* @__PURE__ */ __name((t, r) => Yo(t, "name", { value: r, configurable: true }), "c");
var Mu = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "Mu");
var Sf = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of xf(r))
      !Ef.call(t, a) && a !== e && Yo(t, a, { get: () => r[a], enumerable: !(n = _u(r, a)) || n.enumerable });
  return t;
}, "Sf");
var Zo = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? yf(wf(t)) : {}, Sf(r || !t || !t.__esModule ? Yo(e, "default", { value: t, enumerable: true }) : e, t)), "Zo");
var R2 = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var a = n > 1 ? void 0 : n ? _u(r, e) : r, u2 = t.length - 1, d2; u2 >= 0; u2--)
    (d2 = t[u2]) && (a = (n ? d2(r, e, a) : d2(a)) || a);
  return n && a && Yo(r, e, a), a;
}, "R");
var xc = Mu(($s, yc) => {
  (function(t) {
    "use strict";
    var r = 2e3, e = { s: 1, n: 0, d: 1 };
    function n(y2, x) {
      if (isNaN(y2 = parseInt(y2, 10)))
        throw M2.InvalidParameter;
      return y2 * x;
    }
    __name(n, "n");
    c2(n, "assign");
    function a(y2, x) {
      if (x === 0)
        throw M2.DivisionByZero;
      var C = Object.create(M2.prototype);
      C.s = y2 < 0 ? -1 : 1, y2 = y2 < 0 ? -y2 : y2;
      var _ = w2(y2, x);
      return C.n = y2 / _, C.d = x / _, C;
    }
    __name(a, "a");
    c2(a, "newFraction");
    function u2(y2) {
      for (var x = {}, C = y2, _ = 2, D2 = 4; D2 <= C; ) {
        for (; C % _ === 0; )
          C /= _, x[_] = (x[_] || 0) + 1;
        D2 += 1 + 2 * _++;
      }
      return C !== y2 ? C > 1 && (x[C] = (x[C] || 0) + 1) : x[y2] = (x[y2] || 0) + 1, x;
    }
    __name(u2, "u");
    c2(u2, "factorize");
    var d2 = c2(function(y2, x) {
      var C = 0, _ = 1, D2 = 1, j = 0, L = 0, W = 0, O2 = 1, B = 1, P = 0, N2 = 1, F2 = 1, Z = 1, ne = 1e7, re;
      if (y2 != null)
        if (x !== void 0) {
          if (C = y2, _ = x, D2 = C * _, C % 1 !== 0 || _ % 1 !== 0)
            throw M2.NonIntegerParameter;
        } else
          switch (typeof y2) {
            case "object": {
              if ("d" in y2 && "n" in y2)
                C = y2.n, _ = y2.d, "s" in y2 && (C *= y2.s);
              else if (0 in y2)
                C = y2[0], 1 in y2 && (_ = y2[1]);
              else
                throw M2.InvalidParameter;
              D2 = C * _;
              break;
            }
            case "number": {
              if (y2 < 0 && (D2 = y2, y2 = -y2), y2 % 1 === 0)
                C = y2;
              else if (y2 > 0) {
                for (y2 >= 1 && (B = Math.pow(10, Math.floor(1 + Math.log(y2) / Math.LN10)), y2 /= B); N2 <= ne && Z <= ne; )
                  if (re = (P + F2) / (N2 + Z), y2 === re) {
                    N2 + Z <= ne ? (C = P + F2, _ = N2 + Z) : Z > N2 ? (C = F2, _ = Z) : (C = P, _ = N2);
                    break;
                  } else
                    y2 > re ? (P += F2, N2 += Z) : (F2 += P, Z += N2), N2 > ne ? (C = F2, _ = Z) : (C = P, _ = N2);
                C *= B;
              } else
                (isNaN(y2) || isNaN(x)) && (_ = C = NaN);
              break;
            }
            case "string": {
              if (N2 = y2.match(/\d+|./g), N2 === null)
                throw M2.InvalidParameter;
              if (N2[P] === "-" ? (D2 = -1, P++) : N2[P] === "+" && P++, N2.length === P + 1 ? L = n(N2[P++], D2) : N2[P + 1] === "." || N2[P] === "." ? (N2[P] !== "." && (j = n(N2[P++], D2)), P++, (P + 1 === N2.length || N2[P + 1] === "(" && N2[P + 3] === ")" || N2[P + 1] === "'" && N2[P + 3] === "'") && (L = n(N2[P], D2), O2 = Math.pow(10, N2[P].length), P++), (N2[P] === "(" && N2[P + 2] === ")" || N2[P] === "'" && N2[P + 2] === "'") && (W = n(N2[P + 1], D2), B = Math.pow(10, N2[P + 1].length) - 1, P += 3)) : N2[P + 1] === "/" || N2[P + 1] === ":" ? (L = n(N2[P], D2), O2 = n(N2[P + 2], 1), P += 3) : N2[P + 3] === "/" && N2[P + 1] === " " && (j = n(N2[P], D2), L = n(N2[P + 2], D2), O2 = n(N2[P + 4], 1), P += 5), N2.length <= P) {
                _ = O2 * B, D2 = C = W + _ * j + B * L;
                break;
              }
            }
            default:
              throw M2.InvalidParameter;
          }
      if (_ === 0)
        throw M2.DivisionByZero;
      e.s = D2 < 0 ? -1 : 1, e.n = Math.abs(C), e.d = Math.abs(_);
    }, "parse");
    function v(y2, x, C) {
      for (var _ = 1; x > 0; y2 = y2 * y2 % C, x >>= 1)
        x & 1 && (_ = _ * y2 % C);
      return _;
    }
    __name(v, "v");
    c2(v, "modpow");
    function m2(y2, x) {
      for (; x % 2 === 0; x /= 2)
        ;
      for (; x % 5 === 0; x /= 5)
        ;
      if (x === 1)
        return 0;
      for (var C = 10 % x, _ = 1; C !== 1; _++)
        if (C = C * 10 % x, _ > r)
          return 0;
      return _;
    }
    __name(m2, "m");
    c2(m2, "cycleLen");
    function E(y2, x, C) {
      for (var _ = 1, D2 = v(10, C, x), j = 0; j < 300; j++) {
        if (_ === D2)
          return j;
        _ = _ * 10 % x, D2 = D2 * 10 % x;
      }
      return 0;
    }
    __name(E, "E");
    c2(E, "cycleStart");
    function w2(y2, x) {
      if (!y2)
        return x;
      if (!x)
        return y2;
      for (; ; ) {
        if (y2 %= x, !y2)
          return x;
        if (x %= y2, !x)
          return y2;
      }
    }
    __name(w2, "w");
    c2(w2, "gcd");
    function M2(y2, x) {
      if (d2(y2, x), this instanceof M2)
        y2 = w2(e.d, e.n), this.s = e.s, this.n = e.n / y2, this.d = e.d / y2;
      else
        return a(e.s * e.n, e.d);
    }
    __name(M2, "M");
    c2(M2, "Fraction"), M2.DivisionByZero = new Error("Division by Zero"), M2.InvalidParameter = new Error("Invalid argument"), M2.NonIntegerParameter = new Error("Parameters must be integer"), M2.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return a(this.n, this.d);
    }, neg: function() {
      return a(-this.s * this.n, this.d);
    }, add: function(y2, x) {
      return d2(y2, x), a(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(y2, x) {
      return d2(y2, x), a(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(y2, x) {
      return d2(y2, x), a(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(y2, x) {
      return d2(y2, x), a(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return a(this.s * this.n, this.d);
    }, mod: function(y2, x) {
      if (isNaN(this.n) || isNaN(this.d))
        return new M2(NaN);
      if (y2 === void 0)
        return a(this.s * this.n % this.d, 1);
      if (d2(y2, x), e.n === 0 && this.d === 0)
        throw M2.DivisionByZero;
      return a(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(y2, x) {
      return d2(y2, x), a(w2(e.n, this.n) * w2(e.d, this.d), e.d * this.d);
    }, lcm: function(y2, x) {
      return d2(y2, x), e.n === 0 && this.n === 0 ? a(0, 1) : a(e.n * this.n, w2(e.n, this.n) * w2(e.d, this.d));
    }, ceil: function(y2) {
      return y2 = Math.pow(10, y2 || 0), isNaN(this.n) || isNaN(this.d) ? new M2(NaN) : a(Math.ceil(y2 * this.s * this.n / this.d), y2);
    }, floor: function(y2) {
      return y2 = Math.pow(10, y2 || 0), isNaN(this.n) || isNaN(this.d) ? new M2(NaN) : a(Math.floor(y2 * this.s * this.n / this.d), y2);
    }, round: function(y2) {
      return y2 = Math.pow(10, y2 || 0), isNaN(this.n) || isNaN(this.d) ? new M2(NaN) : a(Math.round(y2 * this.s * this.n / this.d), y2);
    }, inverse: function() {
      return a(this.s * this.d, this.n);
    }, pow: function(y2, x) {
      if (d2(y2, x), e.d === 1)
        return e.s < 0 ? a(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : a(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var C = u2(this.n), _ = u2(this.d), D2 = 1, j = 1;
      for (var L in C)
        if (L !== "1") {
          if (L === "0") {
            D2 = 0;
            break;
          }
          if (C[L] *= e.n, C[L] % e.d === 0)
            C[L] /= e.d;
          else
            return null;
          D2 *= Math.pow(L, C[L]);
        }
      for (var L in _)
        if (L !== "1") {
          if (_[L] *= e.n, _[L] % e.d === 0)
            _[L] /= e.d;
          else
            return null;
          j *= Math.pow(L, _[L]);
        }
      return e.s < 0 ? a(j, D2) : a(D2, j);
    }, equals: function(y2, x) {
      return d2(y2, x), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(y2, x) {
      d2(y2, x);
      var C = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < C) - (C < 0);
    }, simplify: function(y2) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      y2 = y2 || 1e-3;
      for (var x = this.abs(), C = x.toContinued(), _ = 1; _ < C.length; _++) {
        for (var D2 = a(C[_ - 1], 1), j = _ - 2; j >= 0; j--)
          D2 = D2.inverse().add(C[j]);
        if (D2.sub(x).abs().valueOf() < y2)
          return D2.mul(this.s);
      }
      return this;
    }, divisible: function(y2, x) {
      return d2(y2, x), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(y2) {
      var x, C = "", _ = this.n, D2 = this.d;
      return this.s < 0 && (C += "-"), D2 === 1 ? C += _ : (y2 && (x = Math.floor(_ / D2)) > 0 && (C += x, C += " ", _ %= D2), C += _, C += "/", C += D2), C;
    }, toLatex: function(y2) {
      var x, C = "", _ = this.n, D2 = this.d;
      return this.s < 0 && (C += "-"), D2 === 1 ? C += _ : (y2 && (x = Math.floor(_ / D2)) > 0 && (C += x, _ %= D2), C += "\\frac{", C += _, C += "}{", C += D2, C += "}"), C;
    }, toContinued: function() {
      var y2, x = this.n, C = this.d, _ = [];
      if (isNaN(x) || isNaN(C))
        return _;
      do
        _.push(Math.floor(x / C)), y2 = x % C, x = C, C = y2;
      while (x !== 1);
      return _;
    }, toString: function(y2) {
      var x = this.n, C = this.d;
      if (isNaN(x) || isNaN(C))
        return "NaN";
      y2 = y2 || 15;
      var _ = m2(x, C), D2 = E(x, C, _), j = this.s < 0 ? "-" : "";
      if (j += x / C | 0, x %= C, x *= 10, x && (j += "."), _) {
        for (var L = D2; L--; )
          j += x / C | 0, x %= C, x *= 10;
        j += "(";
        for (var L = _; L--; )
          j += x / C | 0, x %= C, x *= 10;
        j += ")";
      } else
        for (var L = y2; x && L--; )
          j += x / C | 0, x %= C, x *= 10;
      return j;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return M2;
    }) : typeof $s == "object" ? (Object.defineProperty(M2, "__esModule", { value: true }), M2.default = M2, M2.Fraction = M2, yc.exports = M2) : t.Fraction = M2;
  })($s);
});
var Ca = Mu((Mc, Vs) => {
  (function(t) {
    typeof Mc == "object" && typeof Vs != "undefined" ? Vs.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
  })(function() {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.init = a, r.getWindow = function(i) {
      return (0, t.default)(i) ? i : (i.ownerDocument || i).defaultView || n.window;
    }, r.window = r.realWindow = void 0;
    var e = void 0;
    r.realWindow = e;
    var n = void 0;
    function a(i) {
      r.realWindow = e = i;
      var o2 = i.document.createTextNode("");
      o2.ownerDocument !== i.document && typeof i.wrap == "function" && i.wrap(o2) === o2 && (i = i.wrap(i)), r.window = n = i;
    }
    __name(a, "a");
    c2(a, "o"), r.window = n, typeof window != "undefined" && window && a(window);
    var u2 = {};
    function d2(i) {
      return (d2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(d2, "d");
    c2(d2, "a"), Object.defineProperty(u2, "__esModule", { value: true }), u2.default = void 0;
    var v = c2(function(i) {
      return !!i && d2(i) === "object";
    }, "s"), m2 = c2(function(i) {
      return typeof i == "function";
    }, "l"), E = { window: function(i) {
      return i === r.window || (0, t.default)(i);
    }, docFrag: function(i) {
      return v(i) && i.nodeType === 11;
    }, object: v, func: m2, number: function(i) {
      return typeof i == "number";
    }, bool: function(i) {
      return typeof i == "boolean";
    }, string: function(i) {
      return typeof i == "string";
    }, element: function(i) {
      if (!i || d2(i) !== "object")
        return false;
      var o2 = r.getWindow(i) || r.window;
      return /object|function/.test(d2(o2.Element)) ? i instanceof o2.Element : i.nodeType === 1 && typeof i.nodeName == "string";
    }, plainObject: function(i) {
      return v(i) && !!i.constructor && /function Object\b/.test(i.constructor.toString());
    }, array: function(i) {
      return v(i) && i.length !== void 0 && m2(i.splice);
    } };
    u2.default = E;
    var w2 = {};
    function M2(i) {
      var o2 = i.interaction;
      if (o2.prepared.name === "drag") {
        var s = o2.prepared.axis;
        s === "x" ? (o2.coords.cur.page.y = o2.coords.start.page.y, o2.coords.cur.client.y = o2.coords.start.client.y, o2.coords.velocity.client.y = 0, o2.coords.velocity.page.y = 0) : s === "y" && (o2.coords.cur.page.x = o2.coords.start.page.x, o2.coords.cur.client.x = o2.coords.start.client.x, o2.coords.velocity.client.x = 0, o2.coords.velocity.page.x = 0);
      }
    }
    __name(M2, "M");
    c2(M2, "f");
    function y2(i) {
      var o2 = i.iEvent, s = i.interaction;
      if (s.prepared.name === "drag") {
        var l = s.prepared.axis;
        if (l === "x" || l === "y") {
          var p2 = l === "x" ? "y" : "x";
          o2.page[p2] = s.coords.start.page[p2], o2.client[p2] = s.coords.start.client[p2], o2.delta[p2] = 0;
        }
      }
    }
    __name(y2, "y");
    c2(y2, "d"), Object.defineProperty(w2, "__esModule", { value: true }), w2.default = void 0;
    var x = { id: "actions/drag", install: function(i) {
      var o2 = i.actions, s = i.Interactable, l = i.defaults;
      s.prototype.draggable = x.draggable, o2.map.drag = x, o2.methodDict.drag = "draggable", l.actions.drag = x.defaults;
    }, listeners: { "interactions:before-action-move": M2, "interactions:action-resume": M2, "interactions:action-move": y2, "auto-start:check": function(i) {
      var o2 = i.interaction, s = i.interactable, l = i.buttons, p2 = s.options.drag;
      if (p2 && p2.enabled && (!o2.pointerIsDown || !/mouse|pointer/.test(o2.pointerType) || (l & s.options.drag.mouseButtons) != 0))
        return i.action = { name: "drag", axis: p2.lockAxis === "start" ? p2.startAxis : p2.lockAxis }, false;
    } }, draggable: function(i) {
      return u2.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : u2.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: M2, move: y2, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, C = x;
    w2.default = C;
    var _ = {};
    Object.defineProperty(_, "__esModule", { value: true }), _.default = void 0;
    var D2 = { init: function(i) {
      var o2 = i;
      D2.document = o2.document, D2.DocumentFragment = o2.DocumentFragment || j, D2.SVGElement = o2.SVGElement || j, D2.SVGSVGElement = o2.SVGSVGElement || j, D2.SVGElementInstance = o2.SVGElementInstance || j, D2.Element = o2.Element || j, D2.HTMLElement = o2.HTMLElement || D2.Element, D2.Event = o2.Event, D2.Touch = o2.Touch || j, D2.PointerEvent = o2.PointerEvent || o2.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function j() {
    }
    __name(j, "j");
    c2(j, "y");
    var L = D2;
    _.default = L;
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = void 0;
    var O2 = { init: function(i) {
      var o2 = _.default.Element, s = i.navigator || {};
      O2.supportsTouch = "ontouchstart" in i || u2.default.func(i.DocumentTouch) && _.default.document instanceof i.DocumentTouch, O2.supportsPointerEvent = s.pointerEnabled !== false && !!_.default.PointerEvent, O2.isIOS = /iP(hone|od|ad)/.test(s.platform), O2.isIOS7 = /iP(hone|od|ad)/.test(s.platform) && /OS 7[^\d]/.test(s.appVersion), O2.isIe9 = /MSIE 9/.test(s.userAgent), O2.isOperaMobile = s.appName === "Opera" && O2.supportsTouch && /Presto/.test(s.userAgent), O2.prefixedMatchesSelector = "matches" in o2.prototype ? "matches" : "webkitMatchesSelector" in o2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o2.prototype ? "oMatchesSelector" : "msMatchesSelector", O2.pEventTypes = O2.supportsPointerEvent ? _.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, O2.wheelEvent = _.default.document && "onmousewheel" in _.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = O2;
    W.default = B;
    var P = {};
    function N2(i) {
      var o2 = i.parentNode;
      if (u2.default.docFrag(o2)) {
        for (; (o2 = o2.host) && u2.default.docFrag(o2); )
          ;
        return o2;
      }
      return o2;
    }
    __name(N2, "N");
    c2(N2, "P");
    function F2(i, o2) {
      return r.window !== r.realWindow && (o2 = o2.replace(/\/deep\//g, " ")), i[W.default.prefixedMatchesSelector](o2);
    }
    __name(F2, "F");
    c2(F2, "O"), Object.defineProperty(P, "__esModule", { value: true }), P.nodeContains = function(i, o2) {
      if (i.contains)
        return i.contains(o2);
      for (; o2; ) {
        if (o2 === i)
          return true;
        o2 = o2.parentNode;
      }
      return false;
    }, P.closest = function(i, o2) {
      for (; u2.default.element(i); ) {
        if (F2(i, o2))
          return i;
        i = N2(i);
      }
      return null;
    }, P.parentNode = N2, P.matchesSelector = F2, P.indexOfDeepestElement = function(i) {
      for (var o2, s = [], l = 0; l < i.length; l++) {
        var p2 = i[l], f2 = i[o2];
        if (p2 && l !== o2)
          if (f2) {
            var g = Z(p2), h = Z(f2);
            if (g !== p2.ownerDocument)
              if (h !== p2.ownerDocument)
                if (g !== h) {
                  s = s.length ? s : ne(f2);
                  var b = void 0;
                  if (f2 instanceof _.default.HTMLElement && p2 instanceof _.default.SVGElement && !(p2 instanceof _.default.SVGSVGElement)) {
                    if (p2 === h)
                      continue;
                    b = p2.ownerSVGElement;
                  } else
                    b = p2;
                  for (var S = ne(b, f2.ownerDocument), T = 0; S[T] && S[T] === s[T]; )
                    T++;
                  var A2 = [S[T - 1], S[T], s[T]];
                  if (A2[0])
                    for (var z2 = A2[0].lastChild; z2; ) {
                      if (z2 === A2[1]) {
                        o2 = l, s = S;
                        break;
                      }
                      if (z2 === A2[2])
                        break;
                      z2 = z2.previousSibling;
                    }
                } else
                  k = p2, I2 = f2, (parseInt(r.getWindow(k).getComputedStyle(k).zIndex, 10) || 0) >= (parseInt(r.getWindow(I2).getComputedStyle(I2).zIndex, 10) || 0) && (o2 = l);
              else
                o2 = l;
          } else
            o2 = l;
      }
      var k, I2;
      return o2;
    }, P.matchesUpTo = function(i, o2, s) {
      for (; u2.default.element(i); ) {
        if (F2(i, o2))
          return true;
        if ((i = N2(i)) === s)
          return F2(i, o2);
      }
      return false;
    }, P.getActualElement = function(i) {
      return i.correspondingUseElement || i;
    }, P.getScrollXY = re, P.getElementClientRect = pe, P.getElementRect = function(i) {
      var o2 = pe(i);
      if (!W.default.isIOS7 && o2) {
        var s = re(r.getWindow(i));
        o2.left += s.x, o2.right += s.x, o2.top += s.y, o2.bottom += s.y;
      }
      return o2;
    }, P.getPath = function(i) {
      for (var o2 = []; i; )
        o2.push(i), i = N2(i);
      return o2;
    }, P.trySelector = function(i) {
      return !!u2.default.string(i) && (_.default.document.querySelector(i), true);
    };
    var Z = c2(function(i) {
      return i.parentNode || i.host;
    }, "S");
    function ne(i, o2) {
      for (var s, l = [], p2 = i; (s = Z(p2)) && p2 !== o2 && s !== p2.ownerDocument; )
        l.unshift(p2), p2 = s;
      return l;
    }
    __name(ne, "ne");
    c2(ne, "E");
    function re(i) {
      return { x: (i = i || r.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(re, "re");
    c2(re, "T");
    function pe(i) {
      var o2 = i instanceof _.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
      return o2 && { left: o2.left, right: o2.right, top: o2.top, bottom: o2.bottom, width: o2.width || o2.right - o2.left, height: o2.height || o2.bottom - o2.top };
    }
    __name(pe, "pe");
    c2(pe, "M");
    var U = {};
    Object.defineProperty(U, "__esModule", { value: true }), U.default = function(i, o2) {
      for (var s in o2)
        i[s] = o2[s];
      return i;
    };
    var ue = {};
    function Pe(i, o2) {
      (o2 == null || o2 > i.length) && (o2 = i.length);
      for (var s = 0, l = Array(o2); s < o2; s++)
        l[s] = i[s];
      return l;
    }
    __name(Pe, "Pe");
    c2(Pe, "I");
    function Ue(i, o2, s) {
      return i === "parent" ? (0, P.parentNode)(s) : i === "self" ? o2.getRect(s) : (0, P.closest)(s, i);
    }
    __name(Ue, "Ue");
    c2(Ue, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.getStringOptionResult = Ue, ue.resolveRectLike = function(i, o2, s, l) {
      var p2, f2 = i;
      return u2.default.string(f2) ? f2 = Ue(f2, o2, s) : u2.default.func(f2) && (f2 = f2.apply(void 0, function(g) {
        if (Array.isArray(g))
          return Pe(g);
      }(p2 = l) || function(g) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(g))
          return Array.from(g);
      }(p2) || function(g, h) {
        if (g) {
          if (typeof g == "string")
            return Pe(g, h);
          var b = Object.prototype.toString.call(g).slice(8, -1);
          return b === "Object" && g.constructor && (b = g.constructor.name), b === "Map" || b === "Set" ? Array.from(g) : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? Pe(g, h) : void 0;
        }
      }(p2) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), u2.default.element(f2) && (f2 = (0, P.getElementRect)(f2)), f2;
    }, ue.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, ue.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, U.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    }, ue.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, U.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, ue.addEdges = function(i, o2, s) {
      i.left && (o2.left += s.x), i.right && (o2.right += s.x), i.top && (o2.top += s.y), i.bottom && (o2.bottom += s.y), o2.width = o2.right - o2.left, o2.height = o2.bottom - o2.top;
    };
    var Ge = {};
    Object.defineProperty(Ge, "__esModule", { value: true }), Ge.default = function(i, o2, s) {
      var l = i.options[s], p2 = l && l.origin || i.options.origin, f2 = (0, ue.resolveRectLike)(p2, i, o2, [i && o2]);
      return (0, ue.rectToXY)(f2) || { x: 0, y: 0 };
    };
    var fe = {};
    function Ze(i) {
      return i.trim().split(/ +/);
    }
    __name(Ze, "Ze");
    c2(Ze, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = c2(/* @__PURE__ */ __name(function i(o2, s, l) {
      if (l = l || {}, u2.default.string(o2) && o2.search(" ") !== -1 && (o2 = Ze(o2)), u2.default.array(o2))
        return o2.reduce(function(b, S) {
          return (0, U.default)(b, i(S, s, l));
        }, l);
      if (u2.default.object(o2) && (s = o2, o2 = ""), u2.default.func(s))
        l[o2] = l[o2] || [], l[o2].push(s);
      else if (u2.default.array(s))
        for (var p2 = 0; p2 < s.length; p2++) {
          var f2;
          f2 = s[p2], i(o2, f2, l);
        }
      else if (u2.default.object(s))
        for (var g in s) {
          var h = Ze(g).map(function(b) {
            return "".concat(o2).concat(b);
          });
          i(h, s[g], l);
        }
      return l;
    }, "i"), "t");
    var tt = {};
    Object.defineProperty(tt, "__esModule", { value: true }), tt.default = void 0, tt.default = function(i, o2) {
      return Math.sqrt(i * i + o2 * o2);
    };
    var zt = {};
    function Ct(i, o2) {
      for (var s in o2) {
        var l = Ct.prefixedPropREs, p2 = false;
        for (var f2 in l)
          if (s.indexOf(f2) === 0 && l[f2].test(s)) {
            p2 = true;
            break;
          }
        p2 || typeof o2[s] == "function" || (i[s] = o2[s]);
      }
      return i;
    }
    __name(Ct, "Ct");
    c2(Ct, "X"), Object.defineProperty(zt, "__esModule", { value: true }), zt.default = void 0, Ct.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Mr = Ct;
    zt.default = Mr;
    var K = {};
    function wt(i) {
      return i instanceof _.default.Event || i instanceof _.default.Touch;
    }
    __name(wt, "wt");
    c2(wt, "W");
    function Et(i, o2, s) {
      return i = i || "page", (s = s || {}).x = o2[i + "X"], s.y = o2[i + "Y"], s;
    }
    __name(Et, "Et");
    c2(Et, "L");
    function Ar(i, o2) {
      return o2 = o2 || { x: 0, y: 0 }, W.default.isOperaMobile && wt(i) ? (Et("screen", i, o2), o2.x += window.scrollX, o2.y += window.scrollY) : Et("page", i, o2), o2;
    }
    __name(Ar, "Ar");
    c2(Ar, "U");
    function rr(i, o2) {
      return o2 = o2 || {}, W.default.isOperaMobile && wt(i) ? Et("screen", i, o2) : Et("client", i, o2), o2;
    }
    __name(rr, "rr");
    c2(rr, "V");
    function lr(i) {
      var o2 = [];
      return u2.default.array(i) ? (o2[0] = i[0], o2[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o2[0] = i.touches[0], o2[1] = i.changedTouches[0]) : i.touches.length === 0 && (o2[0] = i.changedTouches[0], o2[1] = i.changedTouches[1]) : (o2[0] = i.touches[0], o2[1] = i.touches[1]), o2;
    }
    __name(lr, "lr");
    c2(lr, "N");
    function ur(i) {
      for (var o2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, s = 0; s < i.length; s++) {
        var l = i[s];
        for (var p2 in o2)
          o2[p2] += l[p2];
      }
      for (var f2 in o2)
        o2[f2] /= i.length;
      return o2;
    }
    __name(ur, "ur");
    c2(ur, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(i, o2) {
      i.page = i.page || {}, i.page.x = o2.page.x, i.page.y = o2.page.y, i.client = i.client || {}, i.client.x = o2.client.x, i.client.y = o2.client.y, i.timeStamp = o2.timeStamp;
    }, K.setCoordDeltas = function(i, o2, s) {
      i.page.x = s.page.x - o2.page.x, i.page.y = s.page.y - o2.page.y, i.client.x = s.client.x - o2.client.x, i.client.y = s.client.y - o2.client.y, i.timeStamp = s.timeStamp - o2.timeStamp;
    }, K.setCoordVelocity = function(i, o2) {
      var s = Math.max(o2.timeStamp / 1e3, 1e-3);
      i.page.x = o2.page.x / s, i.page.y = o2.page.y / s, i.client.x = o2.client.x / s, i.client.y = o2.client.y / s, i.timeStamp = s;
    }, K.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, K.isNativePointer = wt, K.getXY = Et, K.getPageXY = Ar, K.getClientXY = rr, K.getPointerId = function(i) {
      return u2.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, K.setCoords = function(i, o2, s) {
      var l = o2.length > 1 ? ur(o2) : o2[0];
      Ar(l, i.page), rr(l, i.client), i.timeStamp = s;
    }, K.getTouchPair = lr, K.pointerAverage = ur, K.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o2 = lr(i), s = Math.min(o2[0].pageX, o2[1].pageX), l = Math.min(o2[0].pageY, o2[1].pageY), p2 = Math.max(o2[0].pageX, o2[1].pageX), f2 = Math.max(o2[0].pageY, o2[1].pageY);
      return { x: s, y: l, left: s, top: l, right: p2, bottom: f2, width: p2 - s, height: f2 - l };
    }, K.touchDistance = function(i, o2) {
      var s = o2 + "X", l = o2 + "Y", p2 = lr(i), f2 = p2[0][s] - p2[1][s], g = p2[0][l] - p2[1][l];
      return (0, tt.default)(f2, g);
    }, K.touchAngle = function(i, o2) {
      var s = o2 + "X", l = o2 + "Y", p2 = lr(i), f2 = p2[1][s] - p2[0][s], g = p2[1][l] - p2[0][l];
      return 180 * Math.atan2(g, f2) / Math.PI;
    }, K.getPointerType = function(i) {
      return u2.default.string(i.pointerType) ? i.pointerType : u2.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof _.default.Touch ? "touch" : "mouse";
    }, K.getEventTargets = function(i) {
      var o2 = u2.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [P.getActualElement(o2 ? o2[0] : i.target), P.getActualElement(i.currentTarget)];
    }, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.coordsToEvent = function(i) {
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
    }, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return zt.default;
    } });
    var kt = {};
    function Un(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Un, "Un");
    c2(Un, "G");
    function _t(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(_t, "_t");
    c2(_t, "H"), Object.defineProperty(kt, "__esModule", { value: true }), kt.BaseEvent = void 0;
    var cn = function() {
      function i(l) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), _t(this, "type", void 0), _t(this, "target", void 0), _t(this, "currentTarget", void 0), _t(this, "interactable", void 0), _t(this, "_interaction", void 0), _t(this, "timeStamp", void 0), _t(this, "immediatePropagationStopped", false), _t(this, "propagationStopped", false), this._interaction = l;
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Un(o2.prototype, s), i;
    }();
    kt.BaseEvent = cn, Object.defineProperty(cn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(i, o2) {
      return i.indexOf(o2) !== -1;
    }, xe.remove = function(i, o2) {
      return i.splice(i.indexOf(o2), 1);
    };
    var Wr = c2(function(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        i.push(l);
      }
      return i;
    }, "J");
    xe.merge = Wr, xe.from = function(i) {
      return Wr([], i);
    };
    var Vr = c2(function(i, o2) {
      for (var s = 0; s < i.length; s++)
        if (o2(i[s], s, i))
          return s;
      return -1;
    }, "Q");
    xe.findIndex = Vr, xe.find = function(i, o2) {
      return i[Vr(i, o2)];
    };
    var Mt = {};
    function pn(i) {
      return (pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(pn, "pn");
    c2(pn, "et");
    function cr(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(cr, "cr");
    c2(cr, "nt");
    function pr(i, o2) {
      return (pr = Object.setPrototypeOf || function(s, l) {
        return s.__proto__ = l, s;
      })(i, o2);
    }
    __name(pr, "pr");
    c2(pr, "rt");
    function dn(i, o2) {
      return !o2 || pn(o2) !== "object" && typeof o2 != "function" ? ct(i) : o2;
    }
    __name(dn, "dn");
    c2(dn, "ot");
    function ct(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(ct, "ct");
    c2(ct, "it");
    function Pr(i) {
      return (Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(i);
    }
    __name(Pr, "Pr");
    c2(Pr, "at");
    function Nt(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(Nt, "Nt");
    c2(Nt, "st"), Object.defineProperty(Mt, "__esModule", { value: true }), Mt.DropEvent = void 0;
    var Wn = function(i) {
      (function(h, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(b && b.prototype, { constructor: { value: h, writable: true, configurable: true } }), b && pr(h, b);
      })(g, i);
      var o2, s, l, p2, f2 = (l = g, p2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, b = Pr(l);
        if (p2) {
          var S = Pr(this).constructor;
          h = Reflect.construct(b, arguments, S);
        } else
          h = b.apply(this, arguments);
        return dn(this, h);
      });
      function g(h, b, S) {
        var T;
        (function(I2, $) {
          if (!(I2 instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, g), Nt(ct(T = f2.call(this, b._interaction)), "target", void 0), Nt(ct(T), "dropzone", void 0), Nt(ct(T), "dragEvent", void 0), Nt(ct(T), "relatedTarget", void 0), Nt(ct(T), "draggable", void 0), Nt(ct(T), "timeStamp", void 0), Nt(ct(T), "propagationStopped", false), Nt(ct(T), "immediatePropagationStopped", false);
        var A2 = S === "dragleave" ? h.prev : h.cur, z2 = A2.element, k = A2.dropzone;
        return T.type = S, T.target = z2, T.currentTarget = z2, T.dropzone = k, T.dragEvent = b, T.relatedTarget = b.target, T.draggable = b.interactable, T.timeStamp = b.timeStamp, T;
      }
      __name(g, "g");
      return c2(g, "a"), o2 = g, (s = [{ key: "reject", value: function() {
        var h = this, b = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && b.cur.dropzone === this.dropzone && b.cur.element === this.target)
          if (b.prev.dropzone = this.dropzone, b.prev.element = this.target, b.rejected = true, b.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var S = b.activeDrops, T = xe.findIndex(S, function(z2) {
              var k = z2.dropzone, I2 = z2.element;
              return k === h.dropzone && I2 === h.target;
            });
            b.activeDrops.splice(T, 1);
            var A2 = new g(b, this.dragEvent, "dropdeactivate");
            A2.dropzone = this.dropzone, A2.target = this.target, this.dropzone.fire(A2);
          } else
            this.dropzone.fire(new g(b, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && cr(o2.prototype, s), g;
    }(kt.BaseEvent);
    Mt.DropEvent = Wn;
    var Ir = {};
    function fn(i, o2) {
      for (var s = 0; s < i.slice().length; s++) {
        var l = i.slice()[s], p2 = l.dropzone, f2 = l.element;
        o2.dropzone = p2, o2.target = f2, p2.fire(o2), o2.propagationStopped = o2.immediatePropagationStopped = false;
      }
    }
    __name(fn, "fn");
    c2(fn, "ct");
    function wi(i, o2) {
      for (var s = function(f2, g) {
        for (var h = f2.interactables, b = [], S = 0; S < h.list.length; S++) {
          var T = h.list[S];
          if (T.options.drop.enabled) {
            var A2 = T.options.drop.accept;
            if (!(u2.default.element(A2) && A2 !== g || u2.default.string(A2) && !P.matchesSelector(g, A2) || u2.default.func(A2) && !A2({ dropzone: T, draggableElement: g })))
              for (var z2 = u2.default.string(T.target) ? T._context.querySelectorAll(T.target) : u2.default.array(T.target) ? T.target : [T.target], k = 0; k < z2.length; k++) {
                var I2 = z2[k];
                I2 !== g && b.push({ dropzone: T, element: I2, rect: T.getRect(I2) });
              }
          }
        }
        return b;
      }(i, o2), l = 0; l < s.length; l++) {
        var p2 = s[l];
        p2.rect = p2.dropzone.getRect(p2.element);
      }
      return s;
    }
    __name(wi, "wi");
    c2(wi, "ft");
    function wo(i, o2, s) {
      for (var l = i.dropState, p2 = i.interactable, f2 = i.element, g = [], h = 0; h < l.activeDrops.length; h++) {
        var b = l.activeDrops[h], S = b.dropzone, T = b.element, A2 = b.rect;
        g.push(S.dropCheck(o2, s, p2, f2, T, A2) ? T : null);
      }
      var z2 = P.indexOfDeepestElement(g);
      return l.activeDrops[z2] || null;
    }
    __name(wo, "wo");
    c2(wo, "dt");
    function Ei(i, o2, s) {
      var l = i.dropState, p2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return s.type === "dragstart" && (p2.activate = new Mt.DropEvent(l, s, "dropactivate"), p2.activate.target = null, p2.activate.dropzone = null), s.type === "dragend" && (p2.deactivate = new Mt.DropEvent(l, s, "dropdeactivate"), p2.deactivate.target = null, p2.deactivate.dropzone = null), l.rejected || (l.cur.element !== l.prev.element && (l.prev.dropzone && (p2.leave = new Mt.DropEvent(l, s, "dragleave"), s.dragLeave = p2.leave.target = l.prev.element, s.prevDropzone = p2.leave.dropzone = l.prev.dropzone), l.cur.dropzone && (p2.enter = new Mt.DropEvent(l, s, "dragenter"), s.dragEnter = l.cur.element, s.dropzone = l.cur.dropzone)), s.type === "dragend" && l.cur.dropzone && (p2.drop = new Mt.DropEvent(l, s, "drop"), s.dropzone = l.cur.dropzone, s.relatedTarget = l.cur.element), s.type === "dragmove" && l.cur.dropzone && (p2.move = new Mt.DropEvent(l, s, "dropmove"), p2.move.dragmove = s, s.dropzone = l.cur.dropzone)), p2;
    }
    __name(Ei, "Ei");
    c2(Ei, "pt");
    function Si(i, o2) {
      var s = i.dropState, l = s.activeDrops, p2 = s.cur, f2 = s.prev;
      o2.leave && f2.dropzone.fire(o2.leave), o2.enter && p2.dropzone.fire(o2.enter), o2.move && p2.dropzone.fire(o2.move), o2.drop && p2.dropzone.fire(o2.drop), o2.deactivate && fn(l, o2.deactivate), s.prev.dropzone = p2.dropzone, s.prev.element = p2.element;
    }
    __name(Si, "Si");
    c2(Si, "vt");
    function Eo(i, o2) {
      var s = i.interaction, l = i.iEvent, p2 = i.event;
      if (l.type === "dragmove" || l.type === "dragend") {
        var f2 = s.dropState;
        o2.dynamicDrop && (f2.activeDrops = wi(o2, s.element));
        var g = l, h = wo(s, g, p2);
        f2.rejected = f2.rejected && !!h && h.dropzone === f2.cur.dropzone && h.element === f2.cur.element, f2.cur.dropzone = h && h.dropzone, f2.cur.element = h && h.element, f2.events = Ei(s, 0, g);
      }
    }
    __name(Eo, "Eo");
    c2(Eo, "ht"), Object.defineProperty(Ir, "__esModule", { value: true }), Ir.default = void 0;
    var G2 = { id: "actions/drop", install: function(i) {
      var o2 = i.actions, s = i.interactStatic, l = i.Interactable, p2 = i.defaults;
      i.usePlugin(w2.default), l.prototype.dropzone = function(f2) {
        return function(g, h) {
          if (u2.default.object(h)) {
            if (g.options.drop.enabled = h.enabled !== false, h.listeners) {
              var b = (0, fe.default)(h.listeners), S = Object.keys(b).reduce(function(T, A2) {
                return T[/^(enter|leave)/.test(A2) ? "drag".concat(A2) : /^(activate|deactivate|move)/.test(A2) ? "drop".concat(A2) : A2] = b[A2], T;
              }, {});
              g.off(g.options.drop.listeners), g.on(S), g.options.drop.listeners = S;
            }
            return u2.default.func(h.ondrop) && g.on("drop", h.ondrop), u2.default.func(h.ondropactivate) && g.on("dropactivate", h.ondropactivate), u2.default.func(h.ondropdeactivate) && g.on("dropdeactivate", h.ondropdeactivate), u2.default.func(h.ondragenter) && g.on("dragenter", h.ondragenter), u2.default.func(h.ondragleave) && g.on("dragleave", h.ondragleave), u2.default.func(h.ondropmove) && g.on("dropmove", h.ondropmove), /^(pointer|center)$/.test(h.overlap) ? g.options.drop.overlap = h.overlap : u2.default.number(h.overlap) && (g.options.drop.overlap = Math.max(Math.min(1, h.overlap), 0)), "accept" in h && (g.options.drop.accept = h.accept), "checker" in h && (g.options.drop.checker = h.checker), g;
          }
          return u2.default.bool(h) ? (g.options.drop.enabled = h, g) : g.options.drop;
        }(this, f2);
      }, l.prototype.dropCheck = function(f2, g, h, b, S, T) {
        return function(A2, z2, k, I2, $, X, H) {
          var Q = false;
          if (!(H = H || A2.getRect(X)))
            return !!A2.options.drop.checker && A2.options.drop.checker(z2, k, Q, A2, X, I2, $);
          var ae = A2.options.drop.overlap;
          if (ae === "pointer") {
            var ce = (0, Ge.default)(I2, $, "drag"), we = K.getPageXY(z2);
            we.x += ce.x, we.y += ce.y;
            var qe = we.x > H.left && we.x < H.right, be = we.y > H.top && we.y < H.bottom;
            Q = qe && be;
          }
          var De = I2.getRect($);
          if (De && ae === "center") {
            var or = De.left + De.width / 2, kr = De.top + De.height / 2;
            Q = or >= H.left && or <= H.right && kr >= H.top && kr <= H.bottom;
          }
          return De && u2.default.number(ae) && (Q = Math.max(0, Math.min(H.right, De.right) - Math.max(H.left, De.left)) * Math.max(0, Math.min(H.bottom, De.bottom) - Math.max(H.top, De.top)) / (De.width * De.height) >= ae), A2.options.drop.checker && (Q = A2.options.drop.checker(z2, k, Q, A2, X, I2, $)), Q;
        }(this, f2, g, h, b, S, T);
      }, s.dynamicDrop = function(f2) {
        return u2.default.bool(f2) ? (i.dynamicDrop = f2, s) : i.dynamicDrop;
      }, (0, U.default)(o2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o2.methodDict.drop = "dropzone", i.dynamicDrop = false, p2.actions.drop = G2.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o2 = i.interaction;
      o2.prepared.name === "drag" && (o2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o2) {
      var s = i.interaction, l = (i.event, i.iEvent);
      if (s.prepared.name === "drag") {
        var p2 = s.dropState;
        p2.activeDrops = null, p2.events = null, p2.activeDrops = wi(o2, s.element), p2.events = Ei(s, 0, l), p2.events.activate && (fn(p2.activeDrops, p2.events.activate), o2.fire("actions/drop:start", { interaction: s, dragEvent: l }));
      }
    }, "interactions:action-move": Eo, "interactions:after-action-move": function(i, o2) {
      var s = i.interaction, l = i.iEvent;
      s.prepared.name === "drag" && (Si(s, s.dropState.events), o2.fire("actions/drop:move", { interaction: s, dragEvent: l }), s.dropState.events = {});
    }, "interactions:action-end": function(i, o2) {
      if (i.interaction.prepared.name === "drag") {
        var s = i.interaction, l = i.iEvent;
        Eo(i, o2), Si(s, s.dropState.events), o2.fire("actions/drop:end", { interaction: s, dragEvent: l });
      }
    }, "interactions:stop": function(i) {
      var o2 = i.interaction;
      if (o2.prepared.name === "drag") {
        var s = o2.dropState;
        s && (s.activeDrops = null, s.events = null, s.cur.dropzone = null, s.cur.element = null, s.prev.dropzone = null, s.prev.element = null, s.rejected = false);
      }
    } }, getActiveDrops: wi, getDrop: wo, getDropEvents: Ei, fireDropEvents: Si, defaults: { enabled: false, accept: null, overlap: "pointer" } }, J = G2;
    Ir.default = J;
    var ie = {};
    function ye(i) {
      var o2 = i.interaction, s = i.iEvent, l = i.phase;
      if (o2.prepared.name === "gesture") {
        var p2 = o2.pointers.map(function(S) {
          return S.pointer;
        }), f2 = l === "start", g = l === "end", h = o2.interactable.options.deltaSource;
        if (s.touches = [p2[0], p2[1]], f2)
          s.distance = K.touchDistance(p2, h), s.box = K.touchBBox(p2), s.scale = 1, s.ds = 0, s.angle = K.touchAngle(p2, h), s.da = 0, o2.gesture.startDistance = s.distance, o2.gesture.startAngle = s.angle;
        else if (g) {
          var b = o2.prevEvent;
          s.distance = b.distance, s.box = b.box, s.scale = b.scale, s.ds = 0, s.angle = b.angle, s.da = 0;
        } else
          s.distance = K.touchDistance(p2, h), s.box = K.touchBBox(p2), s.scale = s.distance / o2.gesture.startDistance, s.angle = K.touchAngle(p2, h), s.ds = s.scale - o2.gesture.scale, s.da = s.angle - o2.gesture.angle;
        o2.gesture.distance = s.distance, o2.gesture.angle = s.angle, u2.default.number(s.scale) && s.scale !== 1 / 0 && !isNaN(s.scale) && (o2.gesture.scale = s.scale);
      }
    }
    __name(ye, "ye");
    c2(ye, "bt"), Object.defineProperty(ie, "__esModule", { value: true }), ie.default = void 0;
    var he = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o2 = i.actions, s = i.Interactable, l = i.defaults;
      s.prototype.gesturable = function(p2) {
        return u2.default.object(p2) ? (this.options.gesture.enabled = p2.enabled !== false, this.setPerAction("gesture", p2), this.setOnEvents("gesture", p2), this) : u2.default.bool(p2) ? (this.options.gesture.enabled = p2, this) : this.options.gesture;
      }, o2.map.gesture = he, o2.methodDict.gesture = "gesturable", l.actions.gesture = he.defaults;
    }, listeners: { "interactions:action-start": ye, "interactions:action-move": ye, "interactions:action-end": ye, "interactions:new": function(i) {
      i.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(i) {
      if (!(i.interaction.pointers.length < 2)) {
        var o2 = i.interactable.options.gesture;
        if (o2 && o2.enabled)
          return i.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, pt = he;
    ie.default = pt;
    var dt = {};
    function Xr(i, o2, s, l, p2, f2, g) {
      if (!o2)
        return false;
      if (o2 === true) {
        var h = u2.default.number(f2.width) ? f2.width : f2.right - f2.left, b = u2.default.number(f2.height) ? f2.height : f2.bottom - f2.top;
        if (g = Math.min(g, Math.abs((i === "left" || i === "right" ? h : b) / 2)), h < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), b < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left")
          return s.x < (h >= 0 ? f2.left : f2.right) + g;
        if (i === "top")
          return s.y < (b >= 0 ? f2.top : f2.bottom) + g;
        if (i === "right")
          return s.x > (h >= 0 ? f2.right : f2.left) - g;
        if (i === "bottom")
          return s.y > (b >= 0 ? f2.bottom : f2.top) - g;
      }
      return !!u2.default.element(l) && (u2.default.element(o2) ? o2 === l : P.matchesUpTo(l, o2, p2));
    }
    __name(Xr, "Xr");
    c2(Xr, "Pt");
    function Ti(i) {
      var o2 = i.iEvent, s = i.interaction;
      if (s.prepared.name === "resize" && s.resizeAxes) {
        var l = o2;
        s.interactable.options.resize.square ? (s.resizeAxes === "y" ? l.delta.x = l.delta.y : l.delta.y = l.delta.x, l.axes = "xy") : (l.axes = s.resizeAxes, s.resizeAxes === "x" ? l.delta.y = 0 : s.resizeAxes === "y" && (l.delta.x = 0));
      }
    }
    __name(Ti, "Ti");
    c2(Ti, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
    var ft = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o2 = i.actions, s = i.browser, l = i.Interactable, p2 = i.defaults;
      ft.cursors = function(f2) {
        return f2.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(s), ft.defaultMargin = s.supportsTouch || s.supportsPointerEvent ? 20 : 10, l.prototype.resizable = function(f2) {
        return function(g, h, b) {
          return u2.default.object(h) ? (g.options.resize.enabled = h.enabled !== false, g.setPerAction("resize", h), g.setOnEvents("resize", h), u2.default.string(h.axis) && /^x$|^y$|^xy$/.test(h.axis) ? g.options.resize.axis = h.axis : h.axis === null && (g.options.resize.axis = b.defaults.actions.resize.axis), u2.default.bool(h.preserveAspectRatio) ? g.options.resize.preserveAspectRatio = h.preserveAspectRatio : u2.default.bool(h.square) && (g.options.resize.square = h.square), g) : u2.default.bool(h) ? (g.options.resize.enabled = h, g) : g.options.resize;
        }(this, f2, i);
      }, o2.map.resize = ft, o2.methodDict.resize = "resizable", p2.actions.resize = ft.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o2) {
        var s = o2.iEvent, l = o2.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var p2 = s, f2 = l.rect;
          l._rects = { start: (0, U.default)({}, f2), corrected: (0, U.default)({}, f2), previous: (0, U.default)({}, f2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p2.edges = l.prepared.edges, p2.rect = l._rects.corrected, p2.deltaRect = l._rects.delta;
        }
      })(i), Ti(i);
    }, "interactions:action-move": function(i) {
      (function(o2) {
        var s = o2.iEvent, l = o2.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var p2 = s, f2 = l.interactable.options.resize.invert, g = f2 === "reposition" || f2 === "negate", h = l.rect, b = l._rects, S = b.start, T = b.corrected, A2 = b.delta, z2 = b.previous;
          if ((0, U.default)(z2, T), g) {
            if ((0, U.default)(T, h), f2 === "reposition") {
              if (T.top > T.bottom) {
                var k = T.top;
                T.top = T.bottom, T.bottom = k;
              }
              if (T.left > T.right) {
                var I2 = T.left;
                T.left = T.right, T.right = I2;
              }
            }
          } else
            T.top = Math.min(h.top, S.bottom), T.bottom = Math.max(h.bottom, S.top), T.left = Math.min(h.left, S.right), T.right = Math.max(h.right, S.left);
          for (var $ in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            A2[$] = T[$] - z2[$];
          p2.edges = l.prepared.edges, p2.rect = T, p2.deltaRect = A2;
        }
      })(i), Ti(i);
    }, "interactions:action-end": function(i) {
      var o2 = i.iEvent, s = i.interaction;
      if (s.prepared.name === "resize" && s.prepared.edges) {
        var l = o2;
        l.edges = s.prepared.edges, l.rect = s._rects.corrected, l.deltaRect = s._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o2 = i.interaction, s = i.interactable, l = i.element, p2 = i.rect, f2 = i.buttons;
      if (p2) {
        var g = (0, U.default)({}, o2.coords.cur.page), h = s.options.resize;
        if (h && h.enabled && (!o2.pointerIsDown || !/mouse|pointer/.test(o2.pointerType) || (f2 & h.mouseButtons) != 0)) {
          if (u2.default.object(h.edges)) {
            var b = { left: false, right: false, top: false, bottom: false };
            for (var S in b)
              b[S] = Xr(S, h.edges[S], g, o2._latestPointer.eventTarget, l, p2, h.margin || ft.defaultMargin);
            b.left = b.left && !b.right, b.top = b.top && !b.bottom, (b.left || b.right || b.top || b.bottom) && (i.action = { name: "resize", edges: b });
          } else {
            var T = h.axis !== "y" && g.x > p2.right - ft.defaultMargin, A2 = h.axis !== "x" && g.y > p2.bottom - ft.defaultMargin;
            (T || A2) && (i.action = { name: "resize", axes: (T ? "x" : "") + (A2 ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o2 = i.edges, s = i.axis, l = i.name, p2 = ft.cursors, f2 = null;
      if (s)
        f2 = p2[l + s];
      else if (o2) {
        for (var g = "", h = ["top", "bottom", "left", "right"], b = 0; b < h.length; b++) {
          var S = h[b];
          o2[S] && (g += S);
        }
        f2 = p2[g];
      }
      return f2;
    }, defaultMargin: null }, Oi = ft;
    dt.default = Oi;
    var Dr = {};
    Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var Yr = { id: "actions", install: function(i) {
      i.usePlugin(ie.default), i.usePlugin(dt.default), i.usePlugin(w2.default), i.usePlugin(Ir.default);
    } };
    Dr.default = Yr;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0;
    var Lt, nr, Sl = 0, Jp = { request: function(i) {
      return Lt(i);
    }, cancel: function(i) {
      return nr(i);
    }, init: function(i) {
      if (Lt = i.requestAnimationFrame, nr = i.cancelAnimationFrame, !Lt)
        for (var o2 = ["ms", "moz", "webkit", "o"], s = 0; s < o2.length; s++) {
          var l = o2[s];
          Lt = i["".concat(l, "RequestAnimationFrame")], nr = i["".concat(l, "CancelAnimationFrame")] || i["".concat(l, "CancelRequestAnimationFrame")];
        }
      Lt = Lt && Lt.bind(i), nr = nr && nr.bind(i), Lt || (Lt = c2(function(p2) {
        var f2 = Date.now(), g = Math.max(0, 16 - (f2 - Sl)), h = i.setTimeout(function() {
          p2(f2 + g);
        }, g);
        return Sl = f2 + g, h;
      }, "kt"), nr = c2(function(p2) {
        return clearTimeout(p2);
      }, "It"));
    } };
    Gt.default = Jp;
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.getContainer = So, Zr.getScroll = Ci, Zr.getScrollSize = function(i) {
      return u2.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, Zr.getScrollSizeDelta = function(i, o2) {
      var s = i.interaction, l = i.element, p2 = s && s.interactable.options[s.prepared.name].autoScroll;
      if (!p2 || !p2.enabled)
        return o2(), { x: 0, y: 0 };
      var f2 = So(p2.container, s.interactable, l), g = Ci(f2);
      o2();
      var h = Ci(f2);
      return { x: h.x - g.x, y: h.y - g.y };
    }, Zr.default = void 0;
    var se = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      se.isScrolling = true, Gt.default.cancel(se.i), i.autoScroll = se, se.interaction = i, se.prevTime = se.now(), se.i = Gt.default.request(se.scroll);
    }, stop: function() {
      se.isScrolling = false, se.interaction && (se.interaction.autoScroll = null), Gt.default.cancel(se.i);
    }, scroll: function() {
      var i = se.interaction, o2 = i.interactable, s = i.element, l = i.prepared.name, p2 = o2.options[l].autoScroll, f2 = So(p2.container, o2, s), g = se.now(), h = (g - se.prevTime) / 1e3, b = p2.speed * h;
      if (b >= 1) {
        var S = { x: se.x * b, y: se.y * b };
        if (S.x || S.y) {
          var T = Ci(f2);
          u2.default.window(f2) ? f2.scrollBy(S.x, S.y) : f2 && (f2.scrollLeft += S.x, f2.scrollTop += S.y);
          var A2 = Ci(f2), z2 = { x: A2.x - T.x, y: A2.y - T.y };
          (z2.x || z2.y) && o2.fire({ type: "autoscroll", target: s, interactable: o2, delta: z2, interaction: i, container: f2 });
        }
        se.prevTime = g;
      }
      se.isScrolling && (Gt.default.cancel(se.i), se.i = Gt.default.request(se.scroll));
    }, check: function(i, o2) {
      var s;
      return (s = i.options[o2].autoScroll) == null ? void 0 : s.enabled;
    }, onInteractionMove: function(i) {
      var o2 = i.interaction, s = i.pointer;
      if (o2.interacting() && se.check(o2.interactable, o2.prepared.name))
        if (o2.simulation)
          se.x = se.y = 0;
        else {
          var l, p2, f2, g, h = o2.interactable, b = o2.element, S = o2.prepared.name, T = h.options[S].autoScroll, A2 = So(T.container, h, b);
          if (u2.default.window(A2))
            g = s.clientX < se.margin, l = s.clientY < se.margin, p2 = s.clientX > A2.innerWidth - se.margin, f2 = s.clientY > A2.innerHeight - se.margin;
          else {
            var z2 = P.getElementClientRect(A2);
            g = s.clientX < z2.left + se.margin, l = s.clientY < z2.top + se.margin, p2 = s.clientX > z2.right - se.margin, f2 = s.clientY > z2.bottom - se.margin;
          }
          se.x = p2 ? 1 : g ? -1 : 0, se.y = f2 ? 1 : l ? -1 : 0, se.isScrolling || (se.margin = T.margin, se.speed = T.speed, se.start(o2));
        }
    } };
    function So(i, o2, s) {
      return (u2.default.string(i) ? (0, ue.getStringOptionResult)(i, o2, s) : i) || (0, r.getWindow)(s);
    }
    __name(So, "So");
    c2(So, "Ct");
    function Ci(i) {
      return u2.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(Ci, "Ci");
    c2(Ci, "Ft");
    var Qp = { id: "auto-scroll", install: function(i) {
      var o2 = i.defaults, s = i.actions;
      i.autoScroll = se, se.now = function() {
        return i.now();
      }, s.phaselessTypes.autoscroll = true, o2.perAction.autoScroll = se.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoScroll = null;
    }, "interactions:destroy": function(i) {
      i.interaction.autoScroll = null, se.stop(), se.interaction && (se.interaction = null);
    }, "interactions:stop": se.stop, "interactions:action-move": function(i) {
      return se.onInteractionMove(i);
    } } };
    Zr.default = Qp;
    var qt = {};
    Object.defineProperty(qt, "__esModule", { value: true }), qt.warnOnce = function(i, o2) {
      var s = false;
      return function() {
        return s || (r.window.console.warn(o2), s = true), i.apply(this, arguments);
      };
    }, qt.copyAction = function(i, o2) {
      return i.name = o2.name, i.axis = o2.axis, i.edges = o2.edges, i;
    }, qt.sign = void 0, qt.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var To = {};
    function ed(i) {
      return u2.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(ed, "ed");
    c2(ed, "Wt");
    function td(i) {
      return u2.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(td, "td");
    c2(td, "Lt"), Object.defineProperty(To, "__esModule", { value: true }), To.default = void 0;
    var rd = { id: "auto-start/interactableMethods", install: function(i) {
      var o2 = i.Interactable;
      o2.prototype.getAction = function(s, l, p2, f2) {
        var g = function(h, b, S, T, A2) {
          var z2 = h.getRect(T), k = { action: null, interactable: h, interaction: S, element: T, rect: z2, buttons: b.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[b.button] };
          return A2.fire("auto-start:check", k), k.action;
        }(this, l, p2, f2, i);
        return this.options.actionChecker ? this.options.actionChecker(s, l, g, this, f2, p2) : g;
      }, o2.prototype.ignoreFrom = (0, qt.warnOnce)(function(s) {
        return this._backCompatOption("ignoreFrom", s);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o2.prototype.allowFrom = (0, qt.warnOnce)(function(s) {
        return this._backCompatOption("allowFrom", s);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o2.prototype.actionChecker = td, o2.prototype.styleCursor = ed;
    } };
    To.default = rd;
    var Vn = {};
    function Tl(i, o2, s, l, p2) {
      return o2.testIgnoreAllow(o2.options[i.name], s, l) && o2.options[i.name].enabled && Oo(o2, s, i, p2) ? i : null;
    }
    __name(Tl, "Tl");
    c2(Tl, "Nt");
    function nd(i, o2, s, l, p2, f2, g) {
      for (var h = 0, b = l.length; h < b; h++) {
        var S = l[h], T = p2[h], A2 = S.getAction(o2, s, i, T);
        if (A2) {
          var z2 = Tl(A2, S, T, f2, g);
          if (z2)
            return { action: z2, interactable: S, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(nd, "nd");
    c2(nd, "qt");
    function Ol(i, o2, s, l, p2) {
      var f2 = [], g = [], h = l;
      function b(T) {
        f2.push(T), g.push(h);
      }
      __name(b, "b");
      for (c2(b, "u"); u2.default.element(h); ) {
        f2 = [], g = [], p2.interactables.forEachMatch(h, b);
        var S = nd(i, o2, s, f2, g, l, p2);
        if (S.action && !S.interactable.options[S.action.name].manualStart)
          return S;
        h = P.parentNode(h);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ol, "Ol");
    c2(Ol, "$t");
    function Cl(i, o2, s) {
      var l = o2.action, p2 = o2.interactable, f2 = o2.element;
      l = l || { name: null }, i.interactable = p2, i.element = f2, (0, qt.copyAction)(i.prepared, l), i.rect = p2 && l.name ? p2.getRect(f2) : null, Ml(i, s), s.fire("autoStart:prepared", { interaction: i });
    }
    __name(Cl, "Cl");
    c2(Cl, "Gt");
    function Oo(i, o2, s, l) {
      var p2 = i.options, f2 = p2[s.name].max, g = p2[s.name].maxPerElement, h = l.autoStart.maxInteractions, b = 0, S = 0, T = 0;
      if (!(f2 && g && h))
        return false;
      for (var A2 = 0; A2 < l.interactions.list.length; A2++) {
        var z2 = l.interactions.list[A2], k = z2.prepared.name;
        if (z2.interacting() && (++b >= h || z2.interactable === i && ((S += k === s.name ? 1 : 0) >= f2 || z2.element === o2 && (T++, k === s.name && T >= g))))
          return false;
      }
      return h > 0;
    }
    __name(Oo, "Oo");
    c2(Oo, "Ht");
    function _l(i, o2) {
      return u2.default.number(i) ? (o2.autoStart.maxInteractions = i, this) : o2.autoStart.maxInteractions;
    }
    __name(_l, "_l");
    c2(_l, "Kt");
    function Wa(i, o2, s) {
      var l = s.autoStart.cursorElement;
      l && l !== i && (l.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o2, i.style.cursor = o2, s.autoStart.cursorElement = o2 ? i : null;
    }
    __name(Wa, "Wa");
    c2(Wa, "Zt");
    function Ml(i, o2) {
      var s = i.interactable, l = i.element, p2 = i.prepared;
      if (i.pointerType === "mouse" && s && s.options.styleCursor) {
        var f2 = "";
        if (p2.name) {
          var g = s.options[p2.name].cursorChecker;
          f2 = u2.default.func(g) ? g(p2, s, l, i._interacting) : o2.actions.map[p2.name].getCursor(p2);
        }
        Wa(i.element, f2 || "", o2);
      } else
        o2.autoStart.cursorElement && Wa(o2.autoStart.cursorElement, "", o2);
    }
    __name(Ml, "Ml");
    c2(Ml, "Jt"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0;
    var id = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o2 = i.interactStatic, s = i.defaults;
      i.usePlugin(To.default), s.base.actionChecker = null, s.base.styleCursor = true, (0, U.default)(s.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o2.maxInteractions = function(l) {
        return _l(l, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Oo, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o2) {
      var s = i.interaction, l = i.pointer, p2 = i.event, f2 = i.eventTarget;
      s.interacting() || Cl(s, Ol(s, l, p2, f2, o2), o2);
    }, "interactions:move": function(i, o2) {
      (function(s, l) {
        var p2 = s.interaction, f2 = s.pointer, g = s.event, h = s.eventTarget;
        p2.pointerType !== "mouse" || p2.pointerIsDown || p2.interacting() || Cl(p2, Ol(p2, f2, g, h, l), l);
      })(i, o2), function(s, l) {
        var p2 = s.interaction;
        if (p2.pointerIsDown && !p2.interacting() && p2.pointerWasMoved && p2.prepared.name) {
          l.fire("autoStart:before-start", s);
          var f2 = p2.interactable, g = p2.prepared.name;
          g && f2 && (f2.options[g].manualStart || !Oo(f2, p2.element, p2.prepared, l) ? p2.stop() : (p2.start(p2.prepared, f2, p2.element), Ml(p2, l)));
        }
      }(i, o2);
    }, "interactions:stop": function(i, o2) {
      var s = i.interaction, l = s.interactable;
      l && l.options.styleCursor && Wa(s.element, "", o2);
    } }, maxInteractions: _l, withinInteractionLimit: Oo, validateAction: Tl };
    Vn.default = id;
    var Co = {};
    Object.defineProperty(Co, "__esModule", { value: true }), Co.default = void 0;
    var od = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o2) {
      var s = i.interaction, l = i.eventTarget, p2 = i.dx, f2 = i.dy;
      if (s.prepared.name === "drag") {
        var g = Math.abs(p2), h = Math.abs(f2), b = s.interactable.options.drag, S = b.startAxis, T = g > h ? "x" : g < h ? "y" : "xy";
        if (s.prepared.axis = b.lockAxis === "start" ? T[0] : b.lockAxis, T !== "xy" && S !== "xy" && S !== T) {
          s.prepared.name = null;
          for (var A2 = l, z2 = function(I2) {
            if (I2 !== s.interactable) {
              var $ = s.interactable.options.drag;
              if (!$.manualStart && I2.testIgnoreAllow($, A2, l)) {
                var X = I2.getAction(s.downPointer, s.downEvent, s, A2);
                if (X && X.name === "drag" && function(H, Q) {
                  if (!Q)
                    return false;
                  var ae = Q.options.drag.startAxis;
                  return H === "xy" || ae === "xy" || ae === H;
                }(T, I2) && Vn.default.validateAction(X, I2, A2, l, o2))
                  return I2;
              }
            }
          }; u2.default.element(A2); ) {
            var k = o2.interactables.forEachMatch(A2, z2);
            if (k) {
              s.prepared.name = "drag", s.interactable = k, s.element = A2;
              break;
            }
            A2 = (0, P.parentNode)(A2);
          }
        }
      }
    } } };
    Co.default = od;
    var _o = {};
    function Va(i) {
      var o2 = i.prepared && i.prepared.name;
      if (!o2)
        return null;
      var s = i.interactable.options;
      return s[o2].hold || s[o2].delay;
    }
    __name(Va, "Va");
    c2(Va, "re"), Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var ad = { id: "auto-start/hold", install: function(i) {
      var o2 = i.defaults;
      i.usePlugin(Vn.default), o2.perAction.hold = 0, o2.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o2 = i.interaction, s = Va(o2);
      s > 0 && (o2.autoStartHoldTimer = setTimeout(function() {
        o2.start(o2.prepared, o2.interactable, o2.element);
      }, s));
    }, "interactions:move": function(i) {
      var o2 = i.interaction, s = i.duplicate;
      o2.autoStartHoldTimer && o2.pointerWasMoved && !s && (clearTimeout(o2.autoStartHoldTimer), o2.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o2 = i.interaction;
      Va(o2) > 0 && (o2.prepared.name = null);
    } }, getHoldDuration: Va };
    _o.default = ad;
    var Mo = {};
    Object.defineProperty(Mo, "__esModule", { value: true }), Mo.default = void 0;
    var sd = { id: "auto-start", install: function(i) {
      i.usePlugin(Vn.default), i.usePlugin(_o.default), i.usePlugin(Co.default);
    } };
    Mo.default = sd;
    var Xn = {};
    function ld(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : u2.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(ld, "ld");
    c2(ld, "le");
    function ud(i) {
      var o2 = i.interaction, s = i.event;
      o2.interactable && o2.interactable.checkAndPreventDefault(s);
    }
    __name(ud, "ud");
    c2(ud, "ue");
    function Al(i) {
      var o2 = i.Interactable;
      o2.prototype.preventDefault = ld, o2.prototype.checkAndPreventDefault = function(s) {
        return function(l, p2, f2) {
          var g = l.options.preventDefault;
          if (g !== "never")
            if (g !== "always") {
              if (p2.events.supportsPassive && /^touch(start|move)$/.test(f2.type)) {
                var h = (0, r.getWindow)(f2.target).document, b = p2.getDocOptions(h);
                if (!b || !b.events || b.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(f2.type) || u2.default.element(f2.target) && (0, P.matchesSelector)(f2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || f2.preventDefault();
            } else
              f2.preventDefault();
        }(this, i, s);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(s) {
        for (var l = 0; l < i.interactions.list.length; l++) {
          var p2 = i.interactions.list[l];
          if (p2.element && (p2.element === s.target || (0, P.nodeContains)(p2.element, s.target)))
            return void p2.interactable.checkAndPreventDefault(s);
        }
      } });
    }
    __name(Al, "Al");
    c2(Al, "ce"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.install = Al, Xn.default = void 0;
    var cd = { id: "core/interactablePreventDefault", install: Al, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o2) {
      return i["interactions:".concat(o2)] = ud, i;
    }, {}) };
    Xn.default = cd;
    var Xa = {};
    Object.defineProperty(Xa, "__esModule", { value: true }), Xa.default = void 0, Xa.default = {};
    var _i, Ya = {};
    Object.defineProperty(Ya, "__esModule", { value: true }), Ya.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(_i || (_i = {})), _i.touchAction, _i.boxSizing, _i.noListeners;
    var pd = { id: "dev-tools", install: function() {
    } };
    Ya.default = pd;
    var hn = {};
    Object.defineProperty(hn, "__esModule", { value: true }), hn.default = c2(/* @__PURE__ */ __name(function i(o2) {
      var s = {};
      for (var l in o2) {
        var p2 = o2[l];
        u2.default.plainObject(p2) ? s[l] = i(p2) : u2.default.array(p2) ? s[l] = xe.from(p2) : s[l] = p2;
      }
      return s;
    }, "i"), "t");
    var vn = {};
    function Pl(i, o2) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(s)) {
          var p2 = [], f2 = true, g = false, h = void 0;
          try {
            for (var b, S = s[Symbol.iterator](); !(f2 = (b = S.next()).done) && (p2.push(b.value), !l || p2.length !== l); f2 = true)
              ;
          } catch (T) {
            g = true, h = T;
          } finally {
            try {
              f2 || S.return == null || S.return();
            } finally {
              if (g)
                throw h;
            }
          }
          return p2;
        }
      }(i, o2) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Il(s, l);
          var p2 = Object.prototype.toString.call(s).slice(8, -1);
          return p2 === "Object" && s.constructor && (p2 = s.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(s) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? Il(s, l) : void 0;
        }
      }(i, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Pl, "Pl");
    c2(Pl, "me");
    function Il(i, o2) {
      (o2 == null || o2 > i.length) && (o2 = i.length);
      for (var s = 0, l = Array(o2); s < o2; s++)
        l[s] = i[s];
      return l;
    }
    __name(Il, "Il");
    c2(Il, "be");
    function dd(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(dd, "dd");
    c2(dd, "xe");
    function mn(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(mn, "mn");
    c2(mn, "we"), Object.defineProperty(vn, "__esModule", { value: true }), vn.getRectOffset = Dl, vn.default = void 0;
    var fd = function() {
      function i(l) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), mn(this, "states", []), mn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), mn(this, "startDelta", void 0), mn(this, "result", void 0), mn(this, "endResult", void 0), mn(this, "edges", void 0), mn(this, "interaction", void 0), this.interaction = l, this.result = Ao();
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "start", value: function(l, p2) {
        var f2 = l.phase, g = this.interaction, h = function(S) {
          var T = S.interactable.options[S.prepared.name], A2 = T.modifiers;
          return A2 && A2.length ? A2 : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(z2) {
            var k = T[z2];
            return k && k.enabled && { options: k, methods: k._methods };
          }).filter(function(z2) {
            return !!z2;
          });
        }(g);
        this.prepareStates(h), this.edges = (0, U.default)({}, g.edges), this.startOffset = Dl(g.rect, p2), this.startDelta = { x: 0, y: 0 };
        var b = this.fillArg({ phase: f2, pageCoords: p2, preEnd: false });
        return this.result = Ao(), this.startAll(b), this.result = this.setAll(b);
      } }, { key: "fillArg", value: function(l) {
        var p2 = this.interaction;
        return l.interaction = p2, l.interactable = p2.interactable, l.element = p2.element, l.rect = l.rect || p2.rect, l.edges = this.edges, l.startOffset = this.startOffset, l;
      } }, { key: "startAll", value: function(l) {
        for (var p2 = 0; p2 < this.states.length; p2++) {
          var f2 = this.states[p2];
          f2.methods.start && (l.state = f2, f2.methods.start(l));
        }
      } }, { key: "setAll", value: function(l) {
        var p2 = l.phase, f2 = l.preEnd, g = l.skipModifiers, h = l.rect;
        l.coords = (0, U.default)({}, l.pageCoords), l.rect = (0, U.default)({}, h);
        for (var b = g ? this.states.slice(g) : this.states, S = Ao(l.coords, l.rect), T = 0; T < b.length; T++) {
          var A2, z2 = b[T], k = z2.options, I2 = (0, U.default)({}, l.coords), $ = null;
          (A2 = z2.methods) != null && A2.set && this.shouldDo(k, f2, p2) && (l.state = z2, $ = z2.methods.set(l), ue.addEdges(this.interaction.edges, l.rect, { x: l.coords.x - I2.x, y: l.coords.y - I2.y })), S.eventProps.push($);
        }
        S.delta.x = l.coords.x - l.pageCoords.x, S.delta.y = l.coords.y - l.pageCoords.y, S.rectDelta.left = l.rect.left - h.left, S.rectDelta.right = l.rect.right - h.right, S.rectDelta.top = l.rect.top - h.top, S.rectDelta.bottom = l.rect.bottom - h.bottom;
        var X = this.result.coords, H = this.result.rect;
        if (X && H) {
          var Q = S.rect.left !== H.left || S.rect.right !== H.right || S.rect.top !== H.top || S.rect.bottom !== H.bottom;
          S.changed = Q || X.x !== S.coords.x || X.y !== S.coords.y;
        }
        return S;
      } }, { key: "applyToInteraction", value: function(l) {
        var p2 = this.interaction, f2 = l.phase, g = p2.coords.cur, h = p2.coords.start, b = this.result, S = this.startDelta, T = b.delta;
        f2 === "start" && (0, U.default)(this.startDelta, b.delta);
        for (var A2 = 0; A2 < [[h, S], [g, T]].length; A2++) {
          var z2 = Pl([[h, S], [g, T]][A2], 2), k = z2[0], I2 = z2[1];
          k.page.x += I2.x, k.page.y += I2.y, k.client.x += I2.x, k.client.y += I2.y;
        }
        var $ = this.result.rectDelta, X = l.rect || p2.rect;
        X.left += $.left, X.right += $.right, X.top += $.top, X.bottom += $.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(l) {
        var p2 = this.interaction, f2 = l.phase, g = l.preEnd, h = l.skipModifiers, b = this.setAll(this.fillArg({ preEnd: g, phase: f2, pageCoords: l.modifiedCoords || p2.coords.cur.page }));
        if (this.result = b, !b.changed && (!h || h < this.states.length) && p2.interacting())
          return false;
        if (l.modifiedCoords) {
          var S = p2.coords.cur.page, T = { x: l.modifiedCoords.x - S.x, y: l.modifiedCoords.y - S.y };
          b.coords.x += T.x, b.coords.y += T.y, b.delta.x += T.x, b.delta.y += T.y;
        }
        this.applyToInteraction(l);
      } }, { key: "beforeEnd", value: function(l) {
        var p2 = l.interaction, f2 = l.event, g = this.states;
        if (g && g.length) {
          for (var h = false, b = 0; b < g.length; b++) {
            var S = g[b];
            l.state = S;
            var T = S.options, A2 = S.methods, z2 = A2.beforeEnd && A2.beforeEnd(l);
            if (z2)
              return this.endResult = z2, false;
            h = h || !h && this.shouldDo(T, true, l.phase, true);
          }
          h && p2.move({ event: f2, preEnd: true });
        }
      } }, { key: "stop", value: function(l) {
        var p2 = l.interaction;
        if (this.states && this.states.length) {
          var f2 = (0, U.default)({ states: this.states, interactable: p2.interactable, element: p2.element, rect: null }, l);
          this.fillArg(f2);
          for (var g = 0; g < this.states.length; g++) {
            var h = this.states[g];
            f2.state = h, h.methods.stop && h.methods.stop(f2);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(l) {
        this.states = [];
        for (var p2 = 0; p2 < l.length; p2++) {
          var f2 = l[p2], g = f2.options, h = f2.methods, b = f2.name;
          this.states.push({ options: g, methods: h, index: p2, name: b });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(l) {
        var p2 = l.interaction, f2 = p2.coords, g = p2.rect, h = p2.modification;
        if (h.result) {
          for (var b = h.startDelta, S = h.result, T = S.delta, A2 = S.rectDelta, z2 = [[f2.start, b], [f2.cur, T]], k = 0; k < z2.length; k++) {
            var I2 = Pl(z2[k], 2), $ = I2[0], X = I2[1];
            $.page.x -= X.x, $.page.y -= X.y, $.client.x -= X.x, $.client.y -= X.y;
          }
          g.left -= A2.left, g.right -= A2.right, g.top -= A2.top, g.bottom -= A2.bottom;
        }
      } }, { key: "shouldDo", value: function(l, p2, f2, g) {
        return !(!l || l.enabled === false || g && !l.endOnly || l.endOnly && !p2 || f2 === "start" && !l.setStart);
      } }, { key: "copyFrom", value: function(l) {
        this.startOffset = l.startOffset, this.startDelta = l.startDelta, this.edges = l.edges, this.states = l.states.map(function(p2) {
          return (0, hn.default)(p2);
        }), this.result = Ao((0, U.default)({}, l.result.coords), (0, U.default)({}, l.result.rect));
      } }, { key: "destroy", value: function() {
        for (var l in this)
          this[l] = null;
      } }]) && dd(o2.prototype, s), i;
    }();
    function Ao(i, o2) {
      return { rect: o2, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Ao, "Ao");
    c2(Ao, "Pe");
    function Dl(i, o2) {
      return i ? { left: o2.x - i.left, top: o2.y - i.top, right: i.right - o2.x, bottom: i.bottom - o2.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Dl, "Dl");
    c2(Dl, "Oe"), vn.default = fd;
    var ht = {};
    function Po(i) {
      var o2 = i.iEvent, s = i.interaction.modification.result;
      s && (o2.modifiers = s.eventProps);
    }
    __name(Po, "Po");
    c2(Po, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(i, o2) {
      var s = i.defaults, l = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, p2 = c2(function(f2) {
        var g = f2 || {};
        for (var h in g.enabled = g.enabled !== false, s)
          h in g || (g[h] = s[h]);
        var b = { options: g, methods: l, name: o2, enable: function() {
          return g.enabled = true, b;
        }, disable: function() {
          return g.enabled = false, b;
        } };
        return b;
      }, "o");
      return o2 && typeof o2 == "string" && (p2._defaults = s, p2._methods = l), p2;
    }, ht.addEventModifiers = Po, ht.default = void 0;
    var hd = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var o2 = i.interaction;
      o2.modification = new vn.default(o2);
    }, "interactions:before-action-start": function(i) {
      var o2 = i.interaction.modification;
      o2.start(i, i.interaction.coords.start.page), i.interaction.edges = o2.edges, o2.applyToInteraction(i);
    }, "interactions:before-action-move": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:before-action-end": function(i) {
      return i.interaction.modification.beforeEnd(i);
    }, "interactions:action-start": Po, "interactions:action-move": Po, "interactions:action-end": Po, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } };
    ht.default = hd;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.defaults = void 0, Mi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ai = {};
    function Rl(i) {
      return (Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(Rl, "Rl");
    c2(Rl, "ke");
    function vd(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(vd, "vd");
    c2(vd, "Ie");
    function zl(i, o2) {
      return (zl = Object.setPrototypeOf || function(s, l) {
        return s.__proto__ = l, s;
      })(i, o2);
    }
    __name(zl, "zl");
    c2(zl, "De");
    function md(i, o2) {
      return !o2 || Rl(o2) !== "object" && typeof o2 != "function" ? Te(i) : o2;
    }
    __name(md, "md");
    c2(md, "Ae");
    function Te(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Te, "Te");
    c2(Te, "Re");
    function Za(i) {
      return (Za = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(i);
    }
    __name(Za, "Za");
    c2(Za, "ze");
    function Ie(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(Ie, "Ie");
    c2(Ie, "Ce"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.InteractEvent = void 0;
    var kl = function(i) {
      (function(h, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(b && b.prototype, { constructor: { value: h, writable: true, configurable: true } }), b && zl(h, b);
      })(g, i);
      var o2, s, l, p2, f2 = (l = g, p2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, b = Za(l);
        if (p2) {
          var S = Za(this).constructor;
          h = Reflect.construct(b, arguments, S);
        } else
          h = b.apply(this, arguments);
        return md(this, h);
      });
      function g(h, b, S, T, A2, z2, k) {
        var I2;
        (function(qe, be) {
          if (!(qe instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, g), Ie(Te(I2 = f2.call(this, h)), "target", void 0), Ie(Te(I2), "currentTarget", void 0), Ie(Te(I2), "relatedTarget", null), Ie(Te(I2), "screenX", void 0), Ie(Te(I2), "screenY", void 0), Ie(Te(I2), "button", void 0), Ie(Te(I2), "buttons", void 0), Ie(Te(I2), "ctrlKey", void 0), Ie(Te(I2), "shiftKey", void 0), Ie(Te(I2), "altKey", void 0), Ie(Te(I2), "metaKey", void 0), Ie(Te(I2), "page", void 0), Ie(Te(I2), "client", void 0), Ie(Te(I2), "delta", void 0), Ie(Te(I2), "rect", void 0), Ie(Te(I2), "x0", void 0), Ie(Te(I2), "y0", void 0), Ie(Te(I2), "t0", void 0), Ie(Te(I2), "dt", void 0), Ie(Te(I2), "duration", void 0), Ie(Te(I2), "clientX0", void 0), Ie(Te(I2), "clientY0", void 0), Ie(Te(I2), "velocity", void 0), Ie(Te(I2), "speed", void 0), Ie(Te(I2), "swipe", void 0), Ie(Te(I2), "timeStamp", void 0), Ie(Te(I2), "axes", void 0), Ie(Te(I2), "preEnd", void 0), A2 = A2 || h.element;
        var $ = h.interactable, X = ($ && $.options || Mi.defaults).deltaSource, H = (0, Ge.default)($, A2, S), Q = T === "start", ae = T === "end", ce = Q ? Te(I2) : h.prevEvent, we = Q ? h.coords.start : ae ? { page: ce.page, client: ce.client, timeStamp: h.coords.cur.timeStamp } : h.coords.cur;
        return I2.page = (0, U.default)({}, we.page), I2.client = (0, U.default)({}, we.client), I2.rect = (0, U.default)({}, h.rect), I2.timeStamp = we.timeStamp, ae || (I2.page.x -= H.x, I2.page.y -= H.y, I2.client.x -= H.x, I2.client.y -= H.y), I2.ctrlKey = b.ctrlKey, I2.altKey = b.altKey, I2.shiftKey = b.shiftKey, I2.metaKey = b.metaKey, I2.button = b.button, I2.buttons = b.buttons, I2.target = A2, I2.currentTarget = A2, I2.preEnd = z2, I2.type = k || S + (T || ""), I2.interactable = $, I2.t0 = Q ? h.pointers[h.pointers.length - 1].downTime : ce.t0, I2.x0 = h.coords.start.page.x - H.x, I2.y0 = h.coords.start.page.y - H.y, I2.clientX0 = h.coords.start.client.x - H.x, I2.clientY0 = h.coords.start.client.y - H.y, I2.delta = Q || ae ? { x: 0, y: 0 } : { x: I2[X].x - ce[X].x, y: I2[X].y - ce[X].y }, I2.dt = h.coords.delta.timeStamp, I2.duration = I2.timeStamp - I2.t0, I2.velocity = (0, U.default)({}, h.coords.velocity[X]), I2.speed = (0, tt.default)(I2.velocity.x, I2.velocity.y), I2.swipe = ae || T === "inertiastart" ? I2.getSwipe() : null, I2;
      }
      __name(g, "g");
      return c2(g, "a"), o2 = g, (s = [{ key: "getSwipe", value: function() {
        var h = this._interaction;
        if (h.prevEvent.speed < 600 || this.timeStamp - h.prevEvent.timeStamp > 150)
          return null;
        var b = 180 * Math.atan2(h.prevEvent.velocityY, h.prevEvent.velocityX) / Math.PI;
        b < 0 && (b += 360);
        var S = 112.5 <= b && b < 247.5, T = 202.5 <= b && b < 337.5;
        return { up: T, down: !T && 22.5 <= b && b < 157.5, left: S, right: !S && (292.5 <= b || b < 67.5), angle: b, speed: h.prevEvent.speed, velocity: { x: h.prevEvent.velocityX, y: h.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && vd(o2.prototype, s), g;
    }(kt.BaseEvent);
    Ai.InteractEvent = kl, Object.defineProperties(kl.prototype, { pageX: { get: function() {
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
    var Pi = {};
    function Ii(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(Ii, "Ii");
    c2(Ii, "Ye"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.PointerInfo = void 0, Pi.PointerInfo = c2(/* @__PURE__ */ __name(function i(o2, s, l, p2, f2) {
      (function(g, h) {
        if (!(g instanceof h))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), Ii(this, "id", void 0), Ii(this, "pointer", void 0), Ii(this, "event", void 0), Ii(this, "downTime", void 0), Ii(this, "downTarget", void 0), this.id = o2, this.pointer = s, this.event = l, this.downTime = p2, this.downTarget = f2;
    }, "i"), "t");
    var Io, Do, At = {};
    function gd(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(gd, "gd");
    c2(gd, "Ue");
    function $e(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name($e, "$e");
    c2($e, "Ve"), Object.defineProperty(At, "__esModule", { value: true }), Object.defineProperty(At, "PointerInfo", { enumerable: true, get: function() {
      return Pi.PointerInfo;
    } }), At.default = At.Interaction = At._ProxyMethods = At._ProxyValues = void 0, At._ProxyValues = Io, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(Io || (At._ProxyValues = Io = {})), At._ProxyMethods = Do, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Do || (At._ProxyMethods = Do = {}));
    var bd = 0, Nl = function() {
      function i(l) {
        var p2 = this, f2 = l.pointerType, g = l.scopeFire;
        (function(z2, k) {
          if (!(z2 instanceof k))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), $e(this, "interactable", null), $e(this, "element", null), $e(this, "rect", void 0), $e(this, "_rects", void 0), $e(this, "edges", void 0), $e(this, "_scopeFire", void 0), $e(this, "prepared", { name: null, axis: null, edges: null }), $e(this, "pointerType", void 0), $e(this, "pointers", []), $e(this, "downEvent", null), $e(this, "downPointer", {}), $e(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), $e(this, "prevEvent", null), $e(this, "pointerIsDown", false), $e(this, "pointerWasMoved", false), $e(this, "_interacting", false), $e(this, "_ending", false), $e(this, "_stopped", true), $e(this, "_proxy", null), $e(this, "simulation", null), $e(this, "doMove", (0, qt.warnOnce)(function(z2) {
          this.move(z2);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), $e(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), $e(this, "_id", bd++), this._scopeFire = g, this.pointerType = f2;
        var h = this;
        this._proxy = {};
        var b = c2(function(z2) {
          Object.defineProperty(p2._proxy, z2, { get: function() {
            return h[z2];
          } });
        }, "a");
        for (var S in Io)
          b(S);
        var T = c2(function(z2) {
          Object.defineProperty(p2._proxy, z2, { value: function() {
            return h[z2].apply(h, arguments);
          } });
        }, "l");
        for (var A2 in Do)
          T(A2);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(l, p2, f2) {
        var g = this.updatePointer(l, p2, f2, true), h = this.pointers[g];
        this._scopeFire("interactions:down", { pointer: l, event: p2, eventTarget: f2, pointerIndex: g, pointerInfo: h, type: "down", interaction: this });
      } }, { key: "start", value: function(l, p2, f2) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (l.name === "gesture" ? 2 : 1) || !p2.options[l.name].enabled) && ((0, qt.copyAction)(this.prepared, l), this.interactable = p2, this.element = f2, this.rect = p2.getRect(f2), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(l, p2, f2) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(l, p2, f2, false);
        var g, h, b = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (g = this.coords.cur.client.x - this.coords.start.client.x, h = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, tt.default)(g, h) > this.pointerMoveTolerance);
        var S = this.getPointerIndex(l), T = { pointer: l, pointerIndex: S, pointerInfo: this.pointers[S], event: p2, type: "move", eventTarget: f2, dx: g, dy: h, duplicate: b, interaction: this };
        b || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), b || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(l) {
        l && l.event || K.setZeroCoords(this.coords.delta), (l = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, l || {})).phase = "move", this._doPhase(l);
      } }, { key: "pointerUp", value: function(l, p2, f2, g) {
        var h = this.getPointerIndex(l);
        h === -1 && (h = this.updatePointer(l, p2, f2, false));
        var b = /cancel$/i.test(p2.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(b), { pointer: l, pointerIndex: h, pointerInfo: this.pointers[h], event: p2, eventTarget: f2, type: b, curEventTarget: g, interaction: this }), this.simulation || this.end(p2), this.removePointer(l, p2);
      } }, { key: "documentBlur", value: function(l) {
        this.end(l), this._scopeFire("interactions:blur", { event: l, type: "blur", interaction: this });
      } }, { key: "end", value: function(l) {
        var p2;
        this._ending = true, l = l || this._latestPointer.event, this.interacting() && (p2 = this._doPhase({ event: l, interaction: this, phase: "end" })), this._ending = false, p2 === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(l) {
        var p2 = K.getPointerId(l);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : xe.findIndex(this.pointers, function(f2) {
          return f2.id === p2;
        });
      } }, { key: "getPointerInfo", value: function(l) {
        return this.pointers[this.getPointerIndex(l)];
      } }, { key: "updatePointer", value: function(l, p2, f2, g) {
        var h = K.getPointerId(l), b = this.getPointerIndex(l), S = this.pointers[b];
        return g = g !== false && (g || /(down|start)$/i.test(p2.type)), S ? S.pointer = l : (S = new Pi.PointerInfo(h, l, p2, null, null), b = this.pointers.length, this.pointers.push(S)), K.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), g && (this.pointerIsDown = true, S.downTime = this.coords.cur.timeStamp, S.downTarget = f2, K.pointerExtend(this.downPointer, l), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p2, this.pointerWasMoved = false)), this._updateLatestPointer(l, p2, f2), this._scopeFire("interactions:update-pointer", { pointer: l, event: p2, eventTarget: f2, down: g, pointerInfo: S, pointerIndex: b, interaction: this }), b;
      } }, { key: "removePointer", value: function(l, p2) {
        var f2 = this.getPointerIndex(l);
        if (f2 !== -1) {
          var g = this.pointers[f2];
          this._scopeFire("interactions:remove-pointer", { pointer: l, event: p2, eventTarget: null, pointerIndex: f2, pointerInfo: g, interaction: this }), this.pointers.splice(f2, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(l, p2, f2) {
        this._latestPointer.pointer = l, this._latestPointer.event = p2, this._latestPointer.eventTarget = f2;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(l, p2, f2, g) {
        return new Ai.InteractEvent(this, l, this.prepared.name, p2, this.element, f2, g);
      } }, { key: "_fireEvent", value: function(l) {
        this.interactable.fire(l), (!this.prevEvent || l.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = l);
      } }, { key: "_doPhase", value: function(l) {
        var p2 = l.event, f2 = l.phase, g = l.preEnd, h = l.type, b = this.rect;
        if (b && f2 === "move" && (ue.addEdges(this.edges, b, this.coords.delta[this.interactable.options.deltaSource]), b.width = b.right - b.left, b.height = b.bottom - b.top), this._scopeFire("interactions:before-action-".concat(f2), l) === false)
          return false;
        var S = l.iEvent = this._createPreparedEvent(p2, f2, g, h);
        return this._scopeFire("interactions:action-".concat(f2), l), f2 === "start" && (this.prevEvent = S), this._fireEvent(S), this._scopeFire("interactions:after-action-".concat(f2), l), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && gd(o2.prototype, s), i;
    }();
    At.Interaction = Nl;
    var yd = Nl;
    At.default = yd;
    var gn = {};
    function Gl(i) {
      i.pointerIsDown && (Ja(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(Gl, "Gl");
    c2(Gl, "He");
    function Ll(i) {
      Ka(i.interaction);
    }
    __name(Ll, "Ll");
    c2(Ll, "Ke");
    function Ka(i) {
      if (!function(s) {
        return !(!s.offset.pending.x && !s.offset.pending.y);
      }(i))
        return false;
      var o2 = i.offset.pending;
      return Ja(i.coords.cur, o2), Ja(i.coords.delta, o2), ue.addEdges(i.edges, i.rect, o2), o2.x = 0, o2.y = 0, true;
    }
    __name(Ka, "Ka");
    c2(Ka, "Ze");
    function xd(i) {
      var o2 = i.x, s = i.y;
      this.offset.pending.x += o2, this.offset.pending.y += s, this.offset.total.x += o2, this.offset.total.y += s;
    }
    __name(xd, "xd");
    c2(xd, "Je");
    function Ja(i, o2) {
      var s = i.page, l = i.client, p2 = o2.x, f2 = o2.y;
      s.x += p2, s.y += f2, l.x += p2, l.y += f2;
    }
    __name(Ja, "Ja");
    c2(Ja, "Qe"), Object.defineProperty(gn, "__esModule", { value: true }), gn.addTotal = Gl, gn.applyPending = Ka, gn.default = void 0, At._ProxyMethods.offsetBy = "";
    var wd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = xd;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return Gl(i.interaction);
    }, "interactions:before-action-start": Ll, "interactions:before-action-move": Ll, "interactions:before-action-end": function(i) {
      var o2 = i.interaction;
      if (Ka(o2))
        return o2.move({ offset: true }), o2.end(), false;
    }, "interactions:stop": function(i) {
      var o2 = i.interaction;
      o2.offset.total.x = 0, o2.offset.total.y = 0, o2.offset.pending.x = 0, o2.offset.pending.y = 0;
    } } };
    gn.default = wd;
    var Yn = {};
    function Ed(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Ed, "Ed");
    c2(Ed, "nn");
    function st(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(st, "st");
    c2(st, "rn"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = Yn.InertiaState = void 0;
    var ql = function() {
      function i(l) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), st(this, "active", false), st(this, "isModified", false), st(this, "smoothEnd", false), st(this, "allowResume", false), st(this, "modification", void 0), st(this, "modifierCount", 0), st(this, "modifierArg", void 0), st(this, "startCoords", void 0), st(this, "t0", 0), st(this, "v0", 0), st(this, "te", 0), st(this, "targetOffset", void 0), st(this, "modifiedOffset", void 0), st(this, "currentOffset", void 0), st(this, "lambda_v0", 0), st(this, "one_ve_v0", 0), st(this, "timeout", void 0), st(this, "interaction", void 0), this.interaction = l;
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "start", value: function(l) {
        var p2 = this.interaction, f2 = Ro(p2);
        if (!f2 || !f2.enabled)
          return false;
        var g = p2.coords.velocity.client, h = (0, tt.default)(g.x, g.y), b = this.modification || (this.modification = new vn.default(p2));
        if (b.copyFrom(p2.modification), this.t0 = p2._now(), this.allowResume = f2.allowResume, this.v0 = h, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p2.coords.cur.page, this.modifierArg = b.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p2.coords.cur.timeStamp < 50 && h > f2.minSpeed && h > f2.endSpeed)
          this.startInertia();
        else {
          if (b.result = b.setAll(this.modifierArg), !b.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p2.modification.result.rect = null, p2.offsetBy(this.targetOffset), p2._doPhase({ interaction: p2, event: l, phase: "inertiastart" }), p2.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p2.modification.result.rect = null, this.active = true, p2.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var l = this, p2 = this.interaction.coords.velocity.client, f2 = Ro(this.interaction), g = f2.resistance, h = -Math.log(f2.endSpeed / this.v0) / g;
        this.targetOffset = { x: (p2.x - h) / g, y: (p2.y - h) / g }, this.te = h, this.lambda_v0 = g / this.v0, this.one_ve_v0 = 1 - f2.endSpeed / this.v0;
        var b = this.modification, S = this.modifierArg;
        S.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, b.result = b.setAll(S), b.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + b.result.delta.x, y: this.targetOffset.y + b.result.delta.y }), this.onNextFrame(function() {
          return l.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var l = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return l.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(l) {
        var p2 = this;
        this.timeout = Gt.default.request(function() {
          p2.active && l();
        });
      } }, { key: "inertiaTick", value: function() {
        var l, p2, f2, g, h, b = this, S = this.interaction, T = Ro(S).resistance, A2 = (S._now() - this.t0) / 1e3;
        if (A2 < this.te) {
          var z2, k = 1 - (Math.exp(-T * A2) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (l = this.targetOffset.x, p2 = this.targetOffset.y, f2 = this.modifiedOffset.x, g = this.modifiedOffset.y, z2 = { x: jl(h = k, 0, l, f2), y: jl(h, 0, p2, g) }) : z2 = { x: this.targetOffset.x * k, y: this.targetOffset.y * k };
          var I2 = { x: z2.x - this.currentOffset.x, y: z2.y - this.currentOffset.y };
          this.currentOffset.x += I2.x, this.currentOffset.y += I2.y, S.offsetBy(I2), S.move(), this.onNextFrame(function() {
            return b.inertiaTick();
          });
        } else
          S.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var l = this, p2 = this.interaction, f2 = p2._now() - this.t0, g = Ro(p2).smoothEndDuration;
        if (f2 < g) {
          var h = { x: Bl(f2, 0, this.targetOffset.x, g), y: Bl(f2, 0, this.targetOffset.y, g) }, b = { x: h.x - this.currentOffset.x, y: h.y - this.currentOffset.y };
          this.currentOffset.x += b.x, this.currentOffset.y += b.y, p2.offsetBy(b), p2.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return l.smoothEndTick();
          });
        } else
          p2.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(l) {
        var p2 = l.pointer, f2 = l.event, g = l.eventTarget, h = this.interaction;
        h.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), h.updatePointer(p2, f2, g, true), h._doPhase({ interaction: h, event: f2, phase: "resume" }), (0, K.copyCoords)(h.coords.prev, h.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Gt.default.cancel(this.timeout);
      } }]) && Ed(o2.prototype, s), i;
    }();
    function Ro(i) {
      var o2 = i.interactable, s = i.prepared;
      return o2 && o2.options && s.name && o2.options[s.name].inertia;
    }
    __name(Ro, "Ro");
    c2(Ro, "an");
    function jl(i, o2, s, l) {
      var p2 = 1 - i;
      return p2 * p2 * o2 + 2 * p2 * i * s + i * i * l;
    }
    __name(jl, "jl");
    c2(jl, "sn");
    function Bl(i, o2, s, l) {
      return -s * (i /= l) * (i - 2) + o2;
    }
    __name(Bl, "Bl");
    c2(Bl, "ln"), Yn.InertiaState = ql;
    var Sd = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o2 = i.defaults;
      i.usePlugin(gn.default), i.usePlugin(ht.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o2 = i.interaction;
      o2.inertia = new ql(o2);
    }, "interactions:before-action-end": function(i) {
      var o2 = i.interaction, s = i.event;
      return (!o2._interacting || o2.simulation || !o2.inertia.start(s)) && null;
    }, "interactions:down": function(i) {
      var o2 = i.interaction, s = i.eventTarget, l = o2.inertia;
      if (l.active)
        for (var p2 = s; u2.default.element(p2); ) {
          if (p2 === o2.element) {
            l.resume(i);
            break;
          }
          p2 = P.parentNode(p2);
        }
    }, "interactions:stop": function(i) {
      var o2 = i.interaction.inertia;
      o2.active && o2.stop();
    }, "interactions:before-action-resume": function(i) {
      var o2 = i.interaction.modification;
      o2.stop(i), o2.start(i, i.interaction.coords.cur.page), o2.applyToInteraction(i);
    }, "interactions:before-action-inertiastart": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:action-resume": ht.addEventModifiers, "interactions:action-inertiastart": ht.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    Yn.default = Sd;
    var Di = {};
    function Td(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Td, "Td");
    c2(Td, "fn");
    function Ri(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(Ri, "Ri");
    c2(Ri, "dn");
    function $l(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        if (i.immediatePropagationStopped)
          break;
        l(i);
      }
    }
    __name($l, "$l");
    c2($l, "pn"), Object.defineProperty(Di, "__esModule", { value: true }), Di.Eventable = void 0;
    var Od = function() {
      function i(l) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ri(this, "options", void 0), Ri(this, "types", {}), Ri(this, "propagationStopped", false), Ri(this, "immediatePropagationStopped", false), Ri(this, "global", void 0), this.options = (0, U.default)({}, l || {});
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "fire", value: function(l) {
        var p2, f2 = this.global;
        (p2 = this.types[l.type]) && $l(l, p2), !l.propagationStopped && f2 && (p2 = f2[l.type]) && $l(l, p2);
      } }, { key: "on", value: function(l, p2) {
        var f2 = (0, fe.default)(l, p2);
        for (l in f2)
          this.types[l] = xe.merge(this.types[l] || [], f2[l]);
      } }, { key: "off", value: function(l, p2) {
        var f2 = (0, fe.default)(l, p2);
        for (l in f2) {
          var g = this.types[l];
          if (g && g.length)
            for (var h = 0; h < f2[l].length; h++) {
              var b = f2[l][h], S = g.indexOf(b);
              S !== -1 && g.splice(S, 1);
            }
        }
      } }, { key: "getRect", value: function(l) {
        return null;
      } }]) && Td(o2.prototype, s), i;
    }();
    Di.Eventable = Od;
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), zi.default = function(i, o2) {
      if (o2.phaselessTypes[i])
        return true;
      for (var s in o2.map)
        if (i.indexOf(s) === 0 && i.substr(s.length) in o2.phases)
          return true;
      return false;
    };
    var Qa = {};
    Object.defineProperty(Qa, "__esModule", { value: true }), Qa.createInteractStatic = function(i) {
      var o2 = c2(/* @__PURE__ */ __name(function s(l, p2) {
        var f2 = i.interactables.get(l, p2);
        return f2 || ((f2 = i.interactables.new(l, p2)).events.global = s.globalEvents), f2;
      }, "s"), "e");
      return o2.getPointerAverage = K.pointerAverage, o2.getTouchBBox = K.touchBBox, o2.getTouchDistance = K.touchDistance, o2.getTouchAngle = K.touchAngle, o2.getElementRect = P.getElementRect, o2.getElementClientRect = P.getElementClientRect, o2.matchesSelector = P.matchesSelector, o2.closest = P.closest, o2.globalEvents = {}, o2.version = "1.10.11", o2.scope = i, o2.use = function(s, l) {
        return this.scope.usePlugin(s, l), this;
      }, o2.isSet = function(s, l) {
        return !!this.scope.interactables.get(s, l && l.context);
      }, o2.on = (0, qt.warnOnce)(function(s, l, p2) {
        if (u2.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u2.default.array(s)) {
          for (var f2 = 0; f2 < s.length; f2++) {
            var g = s[f2];
            this.on(g, l, p2);
          }
          return this;
        }
        if (u2.default.object(s)) {
          for (var h in s)
            this.on(h, s[h], l);
          return this;
        }
        return (0, zi.default)(s, this.scope.actions) ? this.globalEvents[s] ? this.globalEvents[s].push(l) : this.globalEvents[s] = [l] : this.scope.events.add(this.scope.document, s, l, { options: p2 }), this;
      }, "The interact.on() method is being deprecated"), o2.off = (0, qt.warnOnce)(function(s, l, p2) {
        if (u2.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u2.default.array(s)) {
          for (var f2 = 0; f2 < s.length; f2++) {
            var g = s[f2];
            this.off(g, l, p2);
          }
          return this;
        }
        if (u2.default.object(s)) {
          for (var h in s)
            this.off(h, s[h], l);
          return this;
        }
        var b;
        return (0, zi.default)(s, this.scope.actions) ? s in this.globalEvents && (b = this.globalEvents[s].indexOf(l)) !== -1 && this.globalEvents[s].splice(b, 1) : this.scope.events.remove(this.scope.document, s, l, p2), this;
      }, "The interact.off() method is being deprecated"), o2.debug = function() {
        return this.scope;
      }, o2.supportsTouch = function() {
        return W.default.supportsTouch;
      }, o2.supportsPointerEvent = function() {
        return W.default.supportsPointerEvent;
      }, o2.stop = function() {
        for (var s = 0; s < this.scope.interactions.list.length; s++)
          this.scope.interactions.list[s].stop();
        return this;
      }, o2.pointerMoveTolerance = function(s) {
        return u2.default.number(s) ? (this.scope.interactions.pointerMoveTolerance = s, this) : this.scope.interactions.pointerMoveTolerance;
      }, o2.addDocument = function(s, l) {
        this.scope.addDocument(s, l);
      }, o2.removeDocument = function(s) {
        this.scope.removeDocument(s);
      }, o2;
    };
    var zo = {};
    function Cd(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Cd, "Cd");
    c2(Cd, "mn");
    function Rr(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(Rr, "Rr");
    c2(Rr, "bn"), Object.defineProperty(zo, "__esModule", { value: true }), zo.Interactable = void 0;
    var _d = function() {
      function i(l, p2, f2, g) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Rr(this, "options", void 0), Rr(this, "_actions", void 0), Rr(this, "target", void 0), Rr(this, "events", new Di.Eventable()), Rr(this, "_context", void 0), Rr(this, "_win", void 0), Rr(this, "_doc", void 0), Rr(this, "_scopeEvents", void 0), Rr(this, "_rectChecker", void 0), this._actions = p2.actions, this.target = l, this._context = p2.context || f2, this._win = (0, r.getWindow)((0, P.trySelector)(l) ? this._context : l), this._doc = this._win.document, this._scopeEvents = g, this.set(p2);
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(l, p2) {
        return u2.default.func(p2.onstart) && this.on("".concat(l, "start"), p2.onstart), u2.default.func(p2.onmove) && this.on("".concat(l, "move"), p2.onmove), u2.default.func(p2.onend) && this.on("".concat(l, "end"), p2.onend), u2.default.func(p2.oninertiastart) && this.on("".concat(l, "inertiastart"), p2.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(l, p2, f2) {
        (u2.default.array(p2) || u2.default.object(p2)) && this.off(l, p2), (u2.default.array(f2) || u2.default.object(f2)) && this.on(l, f2);
      } }, { key: "setPerAction", value: function(l, p2) {
        var f2 = this._defaults;
        for (var g in p2) {
          var h = g, b = this.options[l], S = p2[h];
          h === "listeners" && this.updatePerActionListeners(l, b.listeners, S), u2.default.array(S) ? b[h] = xe.from(S) : u2.default.plainObject(S) ? (b[h] = (0, U.default)(b[h] || {}, (0, hn.default)(S)), u2.default.object(f2.perAction[h]) && "enabled" in f2.perAction[h] && (b[h].enabled = S.enabled !== false)) : u2.default.bool(S) && u2.default.object(f2.perAction[h]) ? b[h].enabled = S : b[h] = S;
        }
      } }, { key: "getRect", value: function(l) {
        return l = l || (u2.default.element(this.target) ? this.target : null), u2.default.string(this.target) && (l = l || this._context.querySelector(this.target)), (0, P.getElementRect)(l);
      } }, { key: "rectChecker", value: function(l) {
        var p2 = this;
        return u2.default.func(l) ? (this._rectChecker = l, this.getRect = function(f2) {
          var g = (0, U.default)({}, p2._rectChecker(f2));
          return "width" in g || (g.width = g.right - g.left, g.height = g.bottom - g.top), g;
        }, this) : l === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(l, p2) {
        if ((0, P.trySelector)(p2) || u2.default.object(p2)) {
          for (var f2 in this.options[l] = p2, this._actions.map)
            this.options[f2][l] = p2;
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
        return this._context === l.ownerDocument || (0, P.nodeContains)(this._context, l);
      } }, { key: "testIgnoreAllow", value: function(l, p2, f2) {
        return !this.testIgnore(l.ignoreFrom, p2, f2) && this.testAllow(l.allowFrom, p2, f2);
      } }, { key: "testAllow", value: function(l, p2, f2) {
        return !l || !!u2.default.element(f2) && (u2.default.string(l) ? (0, P.matchesUpTo)(f2, l, p2) : !!u2.default.element(l) && (0, P.nodeContains)(l, f2));
      } }, { key: "testIgnore", value: function(l, p2, f2) {
        return !(!l || !u2.default.element(f2)) && (u2.default.string(l) ? (0, P.matchesUpTo)(f2, l, p2) : !!u2.default.element(l) && (0, P.nodeContains)(l, f2));
      } }, { key: "fire", value: function(l) {
        return this.events.fire(l), this;
      } }, { key: "_onOff", value: function(l, p2, f2, g) {
        u2.default.object(p2) && !u2.default.array(p2) && (g = f2, f2 = null);
        var h = l === "on" ? "add" : "remove", b = (0, fe.default)(p2, f2);
        for (var S in b) {
          S === "wheel" && (S = W.default.wheelEvent);
          for (var T = 0; T < b[S].length; T++) {
            var A2 = b[S][T];
            (0, zi.default)(S, this._actions) ? this.events[l](S, A2) : u2.default.string(this.target) ? this._scopeEvents["".concat(h, "Delegate")](this.target, this._context, S, A2, g) : this._scopeEvents[h](this.target, S, A2, g);
          }
        }
        return this;
      } }, { key: "on", value: function(l, p2, f2) {
        return this._onOff("on", l, p2, f2);
      } }, { key: "off", value: function(l, p2, f2) {
        return this._onOff("off", l, p2, f2);
      } }, { key: "set", value: function(l) {
        var p2 = this._defaults;
        for (var f2 in u2.default.object(l) || (l = {}), this.options = (0, hn.default)(p2.base), this._actions.methodDict) {
          var g = f2, h = this._actions.methodDict[g];
          this.options[g] = {}, this.setPerAction(g, (0, U.default)((0, U.default)({}, p2.perAction), p2.actions[g])), this[h](l[g]);
        }
        for (var b in l)
          u2.default.func(this[b]) && this[b](l[b]);
        return this;
      } }, { key: "unset", value: function() {
        if (u2.default.string(this.target))
          for (var l in this._scopeEvents.delegatedEvents)
            for (var p2 = this._scopeEvents.delegatedEvents[l], f2 = p2.length - 1; f2 >= 0; f2--) {
              var g = p2[f2], h = g.selector, b = g.context, S = g.listeners;
              h === this.target && b === this._context && p2.splice(f2, 1);
              for (var T = S.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, l, S[T][0], S[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Cd(o2.prototype, s), i;
    }();
    zo.Interactable = _d;
    var ko = {};
    function Md(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Md, "Md");
    c2(Md, "_n");
    function es(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(es, "es");
    c2(es, "Pn"), Object.defineProperty(ko, "__esModule", { value: true }), ko.InteractableSet = void 0;
    var Ad = function() {
      function i(l) {
        var p2 = this;
        (function(f2, g) {
          if (!(f2 instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), es(this, "list", []), es(this, "selectorMap", {}), es(this, "scope", void 0), this.scope = l, l.addListeners({ "interactable:unset": function(f2) {
          var g = f2.interactable, h = g.target, b = g._context, S = u2.default.string(h) ? p2.selectorMap[h] : h[p2.scope.id], T = xe.findIndex(S, function(A2) {
            return A2.context === b;
          });
          S[T] && (S[T].context = null, S[T].interactable = null), S.splice(T, 1);
        } });
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "new", value: function(l, p2) {
        p2 = (0, U.default)(p2 || {}, { actions: this.scope.actions });
        var f2 = new this.scope.Interactable(l, p2, this.scope.document, this.scope.events), g = { context: f2._context, interactable: f2 };
        return this.scope.addDocument(f2._doc), this.list.push(f2), u2.default.string(l) ? (this.selectorMap[l] || (this.selectorMap[l] = []), this.selectorMap[l].push(g)) : (f2.target[this.scope.id] || Object.defineProperty(l, this.scope.id, { value: [], configurable: true }), l[this.scope.id].push(g)), this.scope.fire("interactable:new", { target: l, options: p2, interactable: f2, win: this.scope._win }), f2;
      } }, { key: "get", value: function(l, p2) {
        var f2 = p2 && p2.context || this.scope.document, g = u2.default.string(l), h = g ? this.selectorMap[l] : l[this.scope.id];
        if (!h)
          return null;
        var b = xe.find(h, function(S) {
          return S.context === f2 && (g || S.interactable.inContext(l));
        });
        return b && b.interactable;
      } }, { key: "forEachMatch", value: function(l, p2) {
        for (var f2 = 0; f2 < this.list.length; f2++) {
          var g = this.list[f2], h = void 0;
          if ((u2.default.string(g.target) ? u2.default.element(l) && P.matchesSelector(l, g.target) : l === g.target) && g.inContext(l) && (h = p2(g)), h !== void 0)
            return h;
        }
      } }]) && Md(o2.prototype, s), i;
    }();
    ko.InteractableSet = Ad;
    var No = {};
    function Pd(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Pd, "Pd");
    c2(Pd, "En");
    function ts(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(ts, "ts");
    c2(ts, "Tn");
    function rs(i, o2) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(s)) {
          var p2 = [], f2 = true, g = false, h = void 0;
          try {
            for (var b, S = s[Symbol.iterator](); !(f2 = (b = S.next()).done) && (p2.push(b.value), !l || p2.length !== l); f2 = true)
              ;
          } catch (T) {
            g = true, h = T;
          } finally {
            try {
              f2 || S.return == null || S.return();
            } finally {
              if (g)
                throw h;
            }
          }
          return p2;
        }
      }(i, o2) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Hl(s, l);
          var p2 = Object.prototype.toString.call(s).slice(8, -1);
          return p2 === "Object" && s.constructor && (p2 = s.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(s) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? Hl(s, l) : void 0;
        }
      }(i, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(rs, "rs");
    c2(rs, "Mn");
    function Hl(i, o2) {
      (o2 == null || o2 > i.length) && (o2 = i.length);
      for (var s = 0, l = Array(o2); s < o2; s++)
        l[s] = i[s];
      return l;
    }
    __name(Hl, "Hl");
    c2(Hl, "jn"), Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Id = function() {
      function i(l) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), ts(this, "currentTarget", void 0), ts(this, "originalEvent", void 0), ts(this, "type", void 0), this.originalEvent = l, (0, zt.default)(this, l);
      }
      __name(i, "i");
      c2(i, "t");
      var o2, s;
      return o2 = i, (s = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Pd(o2.prototype, s), i;
    }();
    function ki(i) {
      if (!u2.default.object(i))
        return { capture: !!i, passive: false };
      var o2 = (0, U.default)({}, i);
      return o2.capture = !!i.capture, o2.passive = !!i.passive, o2;
    }
    __name(ki, "ki");
    c2(ki, "In");
    var Dd = { id: "events", install: function(i) {
      var o2, s = [], l = {}, p2 = [], f2 = { add: g, remove: h, addDelegate: function(T, A2, z2, k, I2) {
        var $ = ki(I2);
        if (!l[z2]) {
          l[z2] = [];
          for (var X = 0; X < p2.length; X++) {
            var H = p2[X];
            g(H, z2, b), g(H, z2, S, true);
          }
        }
        var Q = l[z2], ae = xe.find(Q, function(ce) {
          return ce.selector === T && ce.context === A2;
        });
        ae || (ae = { selector: T, context: A2, listeners: [] }, Q.push(ae)), ae.listeners.push([k, $]);
      }, removeDelegate: function(T, A2, z2, k, I2) {
        var $, X = ki(I2), H = l[z2], Q = false;
        if (H)
          for ($ = H.length - 1; $ >= 0; $--) {
            var ae = H[$];
            if (ae.selector === T && ae.context === A2) {
              for (var ce = ae.listeners, we = ce.length - 1; we >= 0; we--) {
                var qe = rs(ce[we], 2), be = qe[0], De = qe[1], or = De.capture, kr = De.passive;
                if (be === k && or === X.capture && kr === X.passive) {
                  ce.splice(we, 1), ce.length || (H.splice($, 1), h(A2, z2, b), h(A2, z2, S, true)), Q = true;
                  break;
                }
              }
              if (Q)
                break;
            }
          }
      }, delegateListener: b, delegateUseCapture: S, delegatedEvents: l, documents: p2, targets: s, supportsOptions: false, supportsPassive: false };
      function g(T, A2, z2, k) {
        var I2 = ki(k), $ = xe.find(s, function(X) {
          return X.eventTarget === T;
        });
        $ || ($ = { eventTarget: T, events: {} }, s.push($)), $.events[A2] || ($.events[A2] = []), T.addEventListener && !xe.contains($.events[A2], z2) && (T.addEventListener(A2, z2, f2.supportsOptions ? I2 : I2.capture), $.events[A2].push(z2));
      }
      __name(g, "g");
      c2(g, "s");
      function h(T, A2, z2, k) {
        var I2 = ki(k), $ = xe.findIndex(s, function(we) {
          return we.eventTarget === T;
        }), X = s[$];
        if (X && X.events)
          if (A2 !== "all") {
            var H = false, Q = X.events[A2];
            if (Q) {
              if (z2 === "all") {
                for (var ae = Q.length - 1; ae >= 0; ae--)
                  h(T, A2, Q[ae], I2);
                return;
              }
              for (var ce = 0; ce < Q.length; ce++)
                if (Q[ce] === z2) {
                  T.removeEventListener(A2, z2, f2.supportsOptions ? I2 : I2.capture), Q.splice(ce, 1), Q.length === 0 && (delete X.events[A2], H = true);
                  break;
                }
            }
            H && !Object.keys(X.events).length && s.splice($, 1);
          } else
            for (A2 in X.events)
              X.events.hasOwnProperty(A2) && h(T, A2, "all");
      }
      __name(h, "h");
      c2(h, "l");
      function b(T, A2) {
        for (var z2 = ki(A2), k = new Id(T), I2 = l[T.type], $ = rs(K.getEventTargets(T), 1)[0], X = $; u2.default.element(X); ) {
          for (var H = 0; H < I2.length; H++) {
            var Q = I2[H], ae = Q.selector, ce = Q.context;
            if (P.matchesSelector(X, ae) && P.nodeContains(ce, $) && P.nodeContains(ce, X)) {
              var we = Q.listeners;
              k.currentTarget = X;
              for (var qe = 0; qe < we.length; qe++) {
                var be = rs(we[qe], 2), De = be[0], or = be[1], kr = or.capture, vs = or.passive;
                kr === z2.capture && vs === z2.passive && De(k);
              }
            }
          }
          X = P.parentNode(X);
        }
      }
      __name(b, "b");
      c2(b, "u");
      function S(T) {
        return b(T, true);
      }
      __name(S, "S");
      return c2(S, "c"), (o2 = i.document) == null || o2.createElement("div").addEventListener("test", null, { get capture() {
        return f2.supportsOptions = true;
      }, get passive() {
        return f2.supportsPassive = true;
      } }), i.events = f2, f2;
    } };
    No.default = Dd;
    var Go = {};
    Object.defineProperty(Go, "__esModule", { value: true }), Go.default = void 0;
    var Lo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var o2 = 0; o2 < Lo.methodOrder.length; o2++) {
        var s;
        s = Lo.methodOrder[o2];
        var l = Lo[s](i);
        if (l)
          return l;
      }
      return null;
    }, simulationResume: function(i) {
      var o2 = i.pointerType, s = i.eventType, l = i.eventTarget, p2 = i.scope;
      if (!/down|start/i.test(s))
        return null;
      for (var f2 = 0; f2 < p2.interactions.list.length; f2++) {
        var g = p2.interactions.list[f2], h = l;
        if (g.simulation && g.simulation.allowResume && g.pointerType === o2)
          for (; h; ) {
            if (h === g.element)
              return g;
            h = P.parentNode(h);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o2, s = i.pointerId, l = i.pointerType, p2 = i.eventType, f2 = i.scope;
      if (l !== "mouse" && l !== "pen")
        return null;
      for (var g = 0; g < f2.interactions.list.length; g++) {
        var h = f2.interactions.list[g];
        if (h.pointerType === l) {
          if (h.simulation && !Fl(h, s))
            continue;
          if (h.interacting())
            return h;
          o2 || (o2 = h);
        }
      }
      if (o2)
        return o2;
      for (var b = 0; b < f2.interactions.list.length; b++) {
        var S = f2.interactions.list[b];
        if (!(S.pointerType !== l || /down/i.test(p2) && S.simulation))
          return S;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o2 = i.pointerId, s = i.scope, l = 0; l < s.interactions.list.length; l++) {
        var p2 = s.interactions.list[l];
        if (Fl(p2, o2))
          return p2;
      }
      return null;
    }, idle: function(i) {
      for (var o2 = i.pointerType, s = i.scope, l = 0; l < s.interactions.list.length; l++) {
        var p2 = s.interactions.list[l];
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
    function Fl(i, o2) {
      return i.pointers.some(function(s) {
        return s.id === o2;
      });
    }
    __name(Fl, "Fl");
    c2(Fl, "zn");
    var Rd = Lo;
    Go.default = Rd;
    var qo = {};
    function Ul(i) {
      return (Ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(Ul, "Ul");
    c2(Ul, "Xn");
    function Wl(i, o2) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(s)) {
          var p2 = [], f2 = true, g = false, h = void 0;
          try {
            for (var b, S = s[Symbol.iterator](); !(f2 = (b = S.next()).done) && (p2.push(b.value), !l || p2.length !== l); f2 = true)
              ;
          } catch (T) {
            g = true, h = T;
          } finally {
            try {
              f2 || S.return == null || S.return();
            } finally {
              if (g)
                throw h;
            }
          }
          return p2;
        }
      }(i, o2) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Vl(s, l);
          var p2 = Object.prototype.toString.call(s).slice(8, -1);
          return p2 === "Object" && s.constructor && (p2 = s.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(s) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? Vl(s, l) : void 0;
        }
      }(i, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Wl, "Wl");
    c2(Wl, "Yn");
    function Vl(i, o2) {
      (o2 == null || o2 > i.length) && (o2 = i.length);
      for (var s = 0, l = Array(o2); s < o2; s++)
        l[s] = i[s];
      return l;
    }
    __name(Vl, "Vl");
    c2(Vl, "Bn");
    function zd(i, o2) {
      if (!(i instanceof o2))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(zd, "zd");
    c2(zd, "Wn");
    function kd(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(kd, "kd");
    c2(kd, "Ln");
    function Xl(i, o2) {
      return (Xl = Object.setPrototypeOf || function(s, l) {
        return s.__proto__ = l, s;
      })(i, o2);
    }
    __name(Xl, "Xl");
    c2(Xl, "Un");
    function Nd(i, o2) {
      return !o2 || Ul(o2) !== "object" && typeof o2 != "function" ? function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(i) : o2;
    }
    __name(Nd, "Nd");
    c2(Nd, "Vn");
    function ns(i) {
      return (ns = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(i);
    }
    __name(ns, "ns");
    c2(ns, "Nn"), Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0;
    var is = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Yl(i, o2) {
      return function(s) {
        var l = o2.interactions.list, p2 = K.getPointerType(s), f2 = Wl(K.getEventTargets(s), 2), g = f2[0], h = f2[1], b = [];
        if (/^touch/.test(s.type)) {
          o2.prevTouchTime = o2.now();
          for (var S = 0; S < s.changedTouches.length; S++) {
            var T = s.changedTouches[S], A2 = { pointer: T, pointerId: K.getPointerId(T), pointerType: p2, eventType: s.type, eventTarget: g, curEventTarget: h, scope: o2 }, z2 = Zl(A2);
            b.push([A2.pointer, A2.eventTarget, A2.curEventTarget, z2]);
          }
        } else {
          var k = false;
          if (!W.default.supportsPointerEvent && /mouse/.test(s.type)) {
            for (var I2 = 0; I2 < l.length && !k; I2++)
              k = l[I2].pointerType !== "mouse" && l[I2].pointerIsDown;
            k = k || o2.now() - o2.prevTouchTime < 500 || s.timeStamp === 0;
          }
          if (!k) {
            var $ = { pointer: s, pointerId: K.getPointerId(s), pointerType: p2, eventType: s.type, curEventTarget: h, eventTarget: g, scope: o2 }, X = Zl($);
            b.push([$.pointer, $.eventTarget, $.curEventTarget, X]);
          }
        }
        for (var H = 0; H < b.length; H++) {
          var Q = Wl(b[H], 4), ae = Q[0], ce = Q[1], we = Q[2];
          Q[3][i](ae, s, ce, we);
        }
      };
    }
    __name(Yl, "Yl");
    c2(Yl, "$n");
    function Zl(i) {
      var o2 = i.pointerType, s = i.scope, l = { interaction: Go.default.search(i), searchDetails: i };
      return s.fire("interactions:find", l), l.interaction || s.interactions.new({ pointerType: o2 });
    }
    __name(Zl, "Zl");
    c2(Zl, "Gn");
    function os(i, o2) {
      var s = i.doc, l = i.scope, p2 = i.options, f2 = l.interactions.docEvents, g = l.events, h = g[o2];
      for (var b in l.browser.isIOS && !p2.events && (p2.events = { passive: false }), g.delegatedEvents)
        h(s, b, g.delegateListener), h(s, b, g.delegateUseCapture, true);
      for (var S = p2 && p2.events, T = 0; T < f2.length; T++) {
        var A2 = f2[T];
        h(s, A2.type, A2.listener, S);
      }
    }
    __name(os, "os");
    c2(os, "Hn");
    var Gd = { id: "core/interactions", install: function(i) {
      for (var o2 = {}, s = 0; s < is.length; s++) {
        var l = is[s];
        o2[l] = Yl(l, i);
      }
      var p2, f2 = W.default.pEventTypes;
      function g() {
        for (var h = 0; h < i.interactions.list.length; h++) {
          var b = i.interactions.list[h];
          if (b.pointerIsDown && b.pointerType === "touch" && !b._interacting)
            for (var S = function() {
              var A2 = b.pointers[T];
              i.documents.some(function(z2) {
                var k = z2.doc;
                return (0, P.nodeContains)(k, A2.downTarget);
              }) || b.removePointer(A2.pointer, A2.event);
            }, T = 0; T < b.pointers.length; T++)
              S();
        }
      }
      __name(g, "g");
      c2(g, "a"), (p2 = _.default.PointerEvent ? [{ type: f2.down, listener: g }, { type: f2.down, listener: o2.pointerDown }, { type: f2.move, listener: o2.pointerMove }, { type: f2.up, listener: o2.pointerUp }, { type: f2.cancel, listener: o2.pointerUp }] : [{ type: "mousedown", listener: o2.pointerDown }, { type: "mousemove", listener: o2.pointerMove }, { type: "mouseup", listener: o2.pointerUp }, { type: "touchstart", listener: g }, { type: "touchstart", listener: o2.pointerDown }, { type: "touchmove", listener: o2.pointerMove }, { type: "touchend", listener: o2.pointerUp }, { type: "touchcancel", listener: o2.pointerUp }]).push({ type: "blur", listener: function(h) {
        for (var b = 0; b < i.interactions.list.length; b++)
          i.interactions.list[b].documentBlur(h);
      } }), i.prevTouchTime = 0, i.Interaction = function(h) {
        (function(I2, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          I2.prototype = Object.create($ && $.prototype, { constructor: { value: I2, writable: true, configurable: true } }), $ && Xl(I2, $);
        })(k, h);
        var b, S, T, A2, z2 = (T = k, A2 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (I2) {
            return false;
          }
        }(), function() {
          var I2, $ = ns(T);
          if (A2) {
            var X = ns(this).constructor;
            I2 = Reflect.construct($, arguments, X);
          } else
            I2 = $.apply(this, arguments);
          return Nd(this, I2);
        });
        function k() {
          return zd(this, k), z2.apply(this, arguments);
        }
        __name(k, "k");
        return c2(k, "s"), b = k, (S = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(I2) {
          i.interactions.pointerMoveTolerance = I2;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && kd(b.prototype, S), k;
      }(At.default), i.interactions = { list: [], new: function(h) {
        h.scopeFire = function(S, T) {
          return i.fire(S, T);
        };
        var b = new i.Interaction(h);
        return i.interactions.list.push(b), b;
      }, listeners: o2, docEvents: p2, pointerMoveTolerance: 1 }, i.usePlugin(Xn.default);
    }, listeners: { "scope:add-document": function(i) {
      return os(i, "add");
    }, "scope:remove-document": function(i) {
      return os(i, "remove");
    }, "interactable:unset": function(i, o2) {
      for (var s = i.interactable, l = o2.interactions.list.length - 1; l >= 0; l--) {
        var p2 = o2.interactions.list[l];
        p2.interactable === s && (p2.stop(), o2.fire("interactions:destroy", { interaction: p2 }), p2.destroy(), o2.interactions.list.length > 2 && o2.interactions.list.splice(l, 1));
      }
    } }, onDocSignal: os, doOnInteractions: Yl, methodNames: is };
    qo.default = Gd;
    var Ni = {};
    function Kl(i) {
      return (Kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(Kl, "Kl");
    c2(Kl, "Jn");
    function as(i, o2, s) {
      return (as = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(l, p2, f2) {
        var g = function(b, S) {
          for (; !Object.prototype.hasOwnProperty.call(b, S) && (b = Zn(b)) !== null; )
            ;
          return b;
        }(l, p2);
        if (g) {
          var h = Object.getOwnPropertyDescriptor(g, p2);
          return h.get ? h.get.call(f2) : h.value;
        }
      })(i, o2, s || i);
    }
    __name(as, "as");
    c2(as, "Qn");
    function Jl(i, o2) {
      return (Jl = Object.setPrototypeOf || function(s, l) {
        return s.__proto__ = l, s;
      })(i, o2);
    }
    __name(Jl, "Jl");
    c2(Jl, "tr");
    function Ld(i, o2) {
      return !o2 || Kl(o2) !== "object" && typeof o2 != "function" ? function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(i) : o2;
    }
    __name(Ld, "Ld");
    c2(Ld, "er");
    function Zn(i) {
      return (Zn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(i);
    }
    __name(Zn, "Zn");
    c2(Zn, "nr");
    function Ql(i, o2) {
      if (!(i instanceof o2))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Ql, "Ql");
    c2(Ql, "rr");
    function eu(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(eu, "eu");
    c2(eu, "or");
    function tu(i, o2, s) {
      return o2 && eu(i.prototype, o2), s && eu(i, s), i;
    }
    __name(tu, "tu");
    c2(tu, "ir");
    function vt(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(vt, "vt");
    c2(vt, "ar"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.initScope = ru, Ni.Scope = void 0;
    var qd = function() {
      function i() {
        var o2 = this;
        Ql(this, i), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", W.default), vt(this, "defaults", (0, hn.default)(Mi.defaults)), vt(this, "Eventable", Di.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, Qa.createInteractStatic)(this)), vt(this, "InteractEvent", Ai.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new ko.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(l) {
          return o2.removeDocument(l.target);
        });
        var s = this;
        this.Interactable = function(l) {
          (function(b, S) {
            if (typeof S != "function" && S !== null)
              throw new TypeError("Super expression must either be null or a function");
            b.prototype = Object.create(S && S.prototype, { constructor: { value: b, writable: true, configurable: true } }), S && Jl(b, S);
          })(h, l);
          var p2, f2, g = (p2 = h, f2 = function() {
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
            var b, S = Zn(p2);
            if (f2) {
              var T = Zn(this).constructor;
              b = Reflect.construct(S, arguments, T);
            } else
              b = S.apply(this, arguments);
            return Ld(this, b);
          });
          function h() {
            return Ql(this, h), g.apply(this, arguments);
          }
          __name(h, "h");
          return c2(h, "i"), tu(h, [{ key: "_defaults", get: function() {
            return s.defaults;
          } }, { key: "set", value: function(b) {
            return as(Zn(h.prototype), "set", this).call(this, b), s.fire("interactable:set", { options: b, interactable: this }), this;
          } }, { key: "unset", value: function() {
            as(Zn(h.prototype), "unset", this).call(this), s.interactables.list.splice(s.interactables.list.indexOf(this), 1), s.fire("interactable:unset", { interactable: this });
          } }]), h;
        }(zo.Interactable);
      }
      __name(i, "i");
      return c2(i, "t"), tu(i, [{ key: "addListeners", value: function(o2, s) {
        this.listenerMaps.push({ id: s, map: o2 });
      } }, { key: "fire", value: function(o2, s) {
        for (var l = 0; l < this.listenerMaps.length; l++) {
          var p2 = this.listenerMaps[l].map[o2];
          if (p2 && p2(s, this, o2) === false)
            return false;
        }
      } }, { key: "init", value: function(o2) {
        return this.isInitialized ? this : ru(this, o2);
      } }, { key: "pluginIsInstalled", value: function(o2) {
        return this._plugins.map[o2.id] || this._plugins.list.indexOf(o2) !== -1;
      } }, { key: "usePlugin", value: function(o2, s) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o2))
          return this;
        if (o2.id && (this._plugins.map[o2.id] = o2), this._plugins.list.push(o2), o2.install && o2.install(this, s), o2.listeners && o2.before) {
          for (var l = 0, p2 = this.listenerMaps.length, f2 = o2.before.reduce(function(h, b) {
            return h[b] = true, h[nu(b)] = true, h;
          }, {}); l < p2; l++) {
            var g = this.listenerMaps[l].id;
            if (f2[g] || f2[nu(g)])
              break;
          }
          this.listenerMaps.splice(l, 0, { id: o2.id, map: o2.listeners });
        } else
          o2.listeners && this.listenerMaps.push({ id: o2.id, map: o2.listeners });
        return this;
      } }, { key: "addDocument", value: function(o2, s) {
        if (this.getDocIndex(o2) !== -1)
          return false;
        var l = r.getWindow(o2);
        s = s ? (0, U.default)({}, s) : {}, this.documents.push({ doc: o2, options: s }), this.events.documents.push(o2), o2 !== this.document && this.events.add(l, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o2, window: l, scope: this, options: s });
      } }, { key: "removeDocument", value: function(o2) {
        var s = this.getDocIndex(o2), l = r.getWindow(o2), p2 = this.documents[s].options;
        this.events.remove(l, "unload", this.onWindowUnload), this.documents.splice(s, 1), this.events.documents.splice(s, 1), this.fire("scope:remove-document", { doc: o2, window: l, scope: this, options: p2 });
      } }, { key: "getDocIndex", value: function(o2) {
        for (var s = 0; s < this.documents.length; s++)
          if (this.documents[s].doc === o2)
            return s;
        return -1;
      } }, { key: "getDocOptions", value: function(o2) {
        var s = this.getDocIndex(o2);
        return s === -1 ? null : this.documents[s].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), i;
    }();
    function ru(i, o2) {
      return i.isInitialized = true, u2.default.window(o2) && r.init(o2), _.default.init(o2), W.default.init(o2), Gt.default.init(o2), i.window = o2, i.document = o2.document, i.usePlugin(qo.default), i.usePlugin(No.default), i;
    }
    __name(ru, "ru");
    c2(ru, "lr");
    function nu(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(nu, "nu");
    c2(nu, "ur"), Ni.Scope = qd;
    var bt = {};
    Object.defineProperty(bt, "__esModule", { value: true }), bt.default = void 0;
    var iu = new Ni.Scope(), jd = iu.interactStatic;
    bt.default = jd;
    var Bd = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    iu.init(Bd);
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0, jo.default = function() {
    };
    var Bo = {};
    Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0, Bo.default = function() {
    };
    var $o = {};
    function ou(i, o2) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(s)) {
          var p2 = [], f2 = true, g = false, h = void 0;
          try {
            for (var b, S = s[Symbol.iterator](); !(f2 = (b = S.next()).done) && (p2.push(b.value), !l || p2.length !== l); f2 = true)
              ;
          } catch (T) {
            g = true, h = T;
          } finally {
            try {
              f2 || S.return == null || S.return();
            } finally {
              if (g)
                throw h;
            }
          }
          return p2;
        }
      }(i, o2) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return au(s, l);
          var p2 = Object.prototype.toString.call(s).slice(8, -1);
          return p2 === "Object" && s.constructor && (p2 = s.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(s) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? au(s, l) : void 0;
        }
      }(i, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ou, "ou");
    c2(ou, "yr");
    function au(i, o2) {
      (o2 == null || o2 > i.length) && (o2 = i.length);
      for (var s = 0, l = Array(o2); s < o2; s++)
        l[s] = i[s];
      return l;
    }
    __name(au, "au");
    c2(au, "mr"), Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0, $o.default = function(i) {
      var o2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(l) {
        var p2 = ou(l, 2), f2 = p2[0], g = p2[1];
        return f2 in i || g in i;
      }), s = c2(function(l, p2) {
        for (var f2 = i.range, g = i.limits, h = g === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : g, b = i.offset, S = b === void 0 ? { x: 0, y: 0 } : b, T = { range: f2, grid: i, x: null, y: null }, A2 = 0; A2 < o2.length; A2++) {
          var z2 = ou(o2[A2], 2), k = z2[0], I2 = z2[1], $ = Math.round((l - S.x) / i[k]), X = Math.round((p2 - S.y) / i[I2]);
          T[k] = Math.max(h.left, Math.min(h.right, $ * i[k] + S.x)), T[I2] = Math.max(h.top, Math.min(h.bottom, X * i[I2] + S.y));
        }
        return T;
      }, "n");
      return s.grid = i, s.coordFields = o2, s;
    };
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: true }), Object.defineProperty(Gi, "edgeTarget", { enumerable: true, get: function() {
      return jo.default;
    } }), Object.defineProperty(Gi, "elements", { enumerable: true, get: function() {
      return Bo.default;
    } }), Object.defineProperty(Gi, "grid", { enumerable: true, get: function() {
      return $o.default;
    } });
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var $d = { id: "snappers", install: function(i) {
      var o2 = i.interactStatic;
      o2.snappers = (0, U.default)(o2.snappers || {}, Gi), o2.createSnapGrid = o2.snappers.grid;
    } };
    Ho.default = $d;
    var Kn = {};
    function su(i, o2) {
      var s = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(i);
        o2 && (l = l.filter(function(p2) {
          return Object.getOwnPropertyDescriptor(i, p2).enumerable;
        })), s.push.apply(s, l);
      }
      return s;
    }
    __name(su, "su");
    c2(su, "Pr");
    function ss(i) {
      for (var o2 = 1; o2 < arguments.length; o2++) {
        var s = arguments[o2] != null ? arguments[o2] : {};
        o2 % 2 ? su(Object(s), true).forEach(function(l) {
          Hd(i, l, s[l]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : su(Object(s)).forEach(function(l) {
          Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(s, l));
        });
      }
      return i;
    }
    __name(ss, "ss");
    c2(ss, "Or");
    function Hd(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(Hd, "Hd");
    c2(Hd, "Sr"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.aspectRatio = Kn.default = void 0;
    var lu = { start: function(i) {
      var o2 = i.state, s = i.rect, l = i.edges, p2 = i.pageCoords, f2 = o2.options.ratio, g = o2.options, h = g.equalDelta, b = g.modifiers;
      f2 === "preserve" && (f2 = s.width / s.height), o2.startCoords = (0, U.default)({}, p2), o2.startRect = (0, U.default)({}, s), o2.ratio = f2, o2.equalDelta = h;
      var S = o2.linkedEdges = { top: l.top || l.left && !l.bottom, left: l.left || l.top && !l.right, bottom: l.bottom || l.right && !l.top, right: l.right || l.bottom && !l.left };
      if (o2.xIsPrimaryAxis = !(!l.left && !l.right), o2.equalDelta)
        o2.edgeSign = (S.left ? 1 : -1) * (S.top ? 1 : -1);
      else {
        var T = o2.xIsPrimaryAxis ? S.top : S.left;
        o2.edgeSign = T ? -1 : 1;
      }
      if ((0, U.default)(i.edges, S), b && b.length) {
        var A2 = new vn.default(i.interaction);
        A2.copyFrom(i.interaction.modification), A2.prepareStates(b), o2.subModification = A2, A2.startAll(ss({}, i));
      }
    }, set: function(i) {
      var o2 = i.state, s = i.rect, l = i.coords, p2 = (0, U.default)({}, l), f2 = o2.equalDelta ? Fd : Ud;
      if (f2(o2, o2.xIsPrimaryAxis, l, s), !o2.subModification)
        return null;
      var g = (0, U.default)({}, s);
      (0, ue.addEdges)(o2.linkedEdges, g, { x: l.x - p2.x, y: l.y - p2.y });
      var h = o2.subModification.setAll(ss(ss({}, i), {}, { rect: g, edges: o2.linkedEdges, pageCoords: l, prevCoords: l, prevRect: g })), b = h.delta;
      return h.changed && (f2(o2, Math.abs(b.x) > Math.abs(b.y), h.coords, h.rect), (0, U.default)(l, h.coords)), h.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Fd(i, o2, s) {
      var l = i.startCoords, p2 = i.edgeSign;
      o2 ? s.y = l.y + (s.x - l.x) * p2 : s.x = l.x + (s.y - l.y) * p2;
    }
    __name(Fd, "Fd");
    c2(Fd, "Tr");
    function Ud(i, o2, s, l) {
      var p2 = i.startRect, f2 = i.startCoords, g = i.ratio, h = i.edgeSign;
      if (o2) {
        var b = l.width / g;
        s.y = f2.y + (b - p2.height) * h;
      } else {
        var S = l.height * g;
        s.x = f2.x + (S - p2.width) * h;
      }
    }
    __name(Ud, "Ud");
    c2(Ud, "Mr"), Kn.aspectRatio = lu;
    var Wd = (0, ht.makeModifier)(lu, "aspectRatio");
    Kn.default = Wd;
    var bn = {};
    Object.defineProperty(bn, "__esModule", { value: true }), bn.default = void 0;
    var uu = c2(function() {
    }, "Ir");
    uu._defaults = {};
    var Vd = uu;
    bn.default = Vd;
    var ls = {};
    Object.defineProperty(ls, "__esModule", { value: true }), Object.defineProperty(ls, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var St = {};
    function us(i, o2, s) {
      return u2.default.func(i) ? ue.resolveRectLike(i, o2.interactable, o2.element, [s.x, s.y, o2]) : ue.resolveRectLike(i, o2.interactable, o2.element);
    }
    __name(us, "us");
    c2(us, "zr"), Object.defineProperty(St, "__esModule", { value: true }), St.getRestrictionRect = us, St.restrict = St.default = void 0;
    var cu = { start: function(i) {
      var o2 = i.rect, s = i.startOffset, l = i.state, p2 = i.interaction, f2 = i.pageCoords, g = l.options, h = g.elementRect, b = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, g.offset || {});
      if (o2 && h) {
        var S = us(g.restriction, p2, f2);
        if (S) {
          var T = S.right - S.left - o2.width, A2 = S.bottom - S.top - o2.height;
          T < 0 && (b.left += T, b.right += T), A2 < 0 && (b.top += A2, b.bottom += A2);
        }
        b.left += s.left - o2.width * h.left, b.top += s.top - o2.height * h.top, b.right += s.right - o2.width * (1 - h.right), b.bottom += s.bottom - o2.height * (1 - h.bottom);
      }
      l.offset = b;
    }, set: function(i) {
      var o2 = i.coords, s = i.interaction, l = i.state, p2 = l.options, f2 = l.offset, g = us(p2.restriction, s, o2);
      if (g) {
        var h = ue.xywhToTlbr(g);
        o2.x = Math.max(Math.min(h.right - f2.right, o2.x), h.left + f2.left), o2.y = Math.max(Math.min(h.bottom - f2.bottom, o2.y), h.top + f2.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    St.restrict = cu;
    var Xd = (0, ht.makeModifier)(cu, "restrict");
    St.default = Xd;
    var yr = {};
    Object.defineProperty(yr, "__esModule", { value: true }), yr.restrictEdges = yr.default = void 0;
    var pu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, du = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function fu(i, o2) {
      for (var s = ["top", "left", "bottom", "right"], l = 0; l < s.length; l++) {
        var p2 = s[l];
        p2 in i || (i[p2] = o2[p2]);
      }
      return i;
    }
    __name(fu, "fu");
    c2(fu, "Wr");
    var hu = { noInner: pu, noOuter: du, start: function(i) {
      var o2, s = i.interaction, l = i.startOffset, p2 = i.state, f2 = p2.options;
      if (f2) {
        var g = (0, St.getRestrictionRect)(f2.offset, s, s.coords.start.page);
        o2 = ue.rectToXY(g);
      }
      o2 = o2 || { x: 0, y: 0 }, p2.offset = { top: o2.y + l.top, left: o2.x + l.left, bottom: o2.y - l.bottom, right: o2.x - l.right };
    }, set: function(i) {
      var o2 = i.coords, s = i.edges, l = i.interaction, p2 = i.state, f2 = p2.offset, g = p2.options;
      if (s) {
        var h = (0, U.default)({}, o2), b = (0, St.getRestrictionRect)(g.inner, l, h) || {}, S = (0, St.getRestrictionRect)(g.outer, l, h) || {};
        fu(b, pu), fu(S, du), s.top ? o2.y = Math.min(Math.max(S.top + f2.top, h.y), b.top + f2.top) : s.bottom && (o2.y = Math.max(Math.min(S.bottom + f2.bottom, h.y), b.bottom + f2.bottom)), s.left ? o2.x = Math.min(Math.max(S.left + f2.left, h.x), b.left + f2.left) : s.right && (o2.x = Math.max(Math.min(S.right + f2.right, h.x), b.right + f2.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    yr.restrictEdges = hu;
    var Yd = (0, ht.makeModifier)(hu, "restrictEdges");
    yr.default = Yd;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.restrictRect = Jn.default = void 0;
    var Zd = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, St.restrict.defaults), vu = { start: St.restrict.start, set: St.restrict.set, defaults: Zd };
    Jn.restrictRect = vu;
    var Kd = (0, ht.makeModifier)(vu, "restrictRect");
    Jn.default = Kd;
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.restrictSize = Qn.default = void 0;
    var Jd = { width: -1 / 0, height: -1 / 0 }, Qd = { width: 1 / 0, height: 1 / 0 }, mu = { start: function(i) {
      return yr.restrictEdges.start(i);
    }, set: function(i) {
      var o2 = i.interaction, s = i.state, l = i.rect, p2 = i.edges, f2 = s.options;
      if (p2) {
        var g = ue.tlbrToXywh((0, St.getRestrictionRect)(f2.min, o2, i.coords)) || Jd, h = ue.tlbrToXywh((0, St.getRestrictionRect)(f2.max, o2, i.coords)) || Qd;
        s.options = { endOnly: f2.endOnly, inner: (0, U.default)({}, yr.restrictEdges.noInner), outer: (0, U.default)({}, yr.restrictEdges.noOuter) }, p2.top ? (s.options.inner.top = l.bottom - g.height, s.options.outer.top = l.bottom - h.height) : p2.bottom && (s.options.inner.bottom = l.top + g.height, s.options.outer.bottom = l.top + h.height), p2.left ? (s.options.inner.left = l.right - g.width, s.options.outer.left = l.right - h.width) : p2.right && (s.options.inner.right = l.left + g.width, s.options.outer.right = l.left + h.width), yr.restrictEdges.set(i), s.options = f2;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Qn.restrictSize = mu;
    var ef = (0, ht.makeModifier)(mu, "restrictSize");
    Qn.default = ef;
    var cs = {};
    Object.defineProperty(cs, "__esModule", { value: true }), Object.defineProperty(cs, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snap = Kr.default = void 0;
    var gu = { start: function(i) {
      var o2, s = i.interaction, l = i.interactable, p2 = i.element, f2 = i.rect, g = i.state, h = i.startOffset, b = g.options, S = b.offsetWithOrigin ? function(z2) {
        var k = z2.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(z2.state.options.origin, null, null, [k])) || (0, Ge.default)(z2.interactable, k, z2.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (b.offset === "startCoords")
        o2 = { x: s.coords.start.page.x, y: s.coords.start.page.y };
      else {
        var T = (0, ue.resolveRectLike)(b.offset, l, p2, [s]);
        (o2 = (0, ue.rectToXY)(T) || { x: 0, y: 0 }).x += S.x, o2.y += S.y;
      }
      var A2 = b.relativePoints;
      g.offsets = f2 && A2 && A2.length ? A2.map(function(z2, k) {
        return { index: k, relativePoint: z2, x: h.left - f2.width * z2.x + o2.x, y: h.top - f2.height * z2.y + o2.y };
      }) : [{ index: 0, relativePoint: null, x: o2.x, y: o2.y }];
    }, set: function(i) {
      var o2 = i.interaction, s = i.coords, l = i.state, p2 = l.options, f2 = l.offsets, g = (0, Ge.default)(o2.interactable, o2.element, o2.prepared.name), h = (0, U.default)({}, s), b = [];
      p2.offsetWithOrigin || (h.x -= g.x, h.y -= g.y);
      for (var S = 0; S < f2.length; S++)
        for (var T = f2[S], A2 = h.x - T.x, z2 = h.y - T.y, k = 0, I2 = p2.targets.length; k < I2; k++) {
          var $, X = p2.targets[k];
          ($ = u2.default.func(X) ? X(A2, z2, o2._proxy, T, k) : X) && b.push({ x: (u2.default.number($.x) ? $.x : A2) + T.x, y: (u2.default.number($.y) ? $.y : z2) + T.y, range: u2.default.number($.range) ? $.range : p2.range, source: X, index: k, offset: T });
        }
      for (var H = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, Q = 0; Q < b.length; Q++) {
        var ae = b[Q], ce = ae.range, we = ae.x - h.x, qe = ae.y - h.y, be = (0, tt.default)(we, qe), De = be <= ce;
        ce === 1 / 0 && H.inRange && H.range !== 1 / 0 && (De = false), H.target && !(De ? H.inRange && ce !== 1 / 0 ? be / ce < H.distance / H.range : ce === 1 / 0 && H.range !== 1 / 0 || be < H.distance : !H.inRange && be < H.distance) || (H.target = ae, H.distance = be, H.range = ce, H.inRange = De, H.delta.x = we, H.delta.y = qe);
      }
      return H.inRange && (s.x = H.target.x, s.y = H.target.y), l.closest = H, H;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Kr.snap = gu;
    var tf = (0, ht.makeModifier)(gu, "snap");
    Kr.default = tf;
    var zr = {};
    function bu(i, o2) {
      (o2 == null || o2 > i.length) && (o2 = i.length);
      for (var s = 0, l = Array(o2); s < o2; s++)
        l[s] = i[s];
      return l;
    }
    __name(bu, "bu");
    c2(bu, "oo"), Object.defineProperty(zr, "__esModule", { value: true }), zr.snapSize = zr.default = void 0;
    var yu = { start: function(i) {
      var o2 = i.state, s = i.edges, l = o2.options;
      if (!s)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: s.left ? 0 : 1, y: s.top ? 0 : 1 }], offset: l.offset || "self", origin: { x: 0, y: 0 }, range: l.range } }, o2.targetFields = o2.targetFields || [["width", "height"], ["x", "y"]], Kr.snap.start(i), o2.offsets = i.state.offsets, i.state = o2;
    }, set: function(i) {
      var o2, s, l = i.interaction, p2 = i.state, f2 = i.coords, g = p2.options, h = p2.offsets, b = { x: f2.x - h[0].x, y: f2.y - h[0].y };
      p2.options = (0, U.default)({}, g), p2.options.targets = [];
      for (var S = 0; S < (g.targets || []).length; S++) {
        var T = (g.targets || [])[S], A2 = void 0;
        if (A2 = u2.default.func(T) ? T(b.x, b.y, l) : T) {
          for (var z2 = 0; z2 < p2.targetFields.length; z2++) {
            var k = (o2 = p2.targetFields[z2], s = 2, function(H) {
              if (Array.isArray(H))
                return H;
            }(o2) || function(H, Q) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(H)) {
                var ae = [], ce = true, we = false, qe = void 0;
                try {
                  for (var be, De = H[Symbol.iterator](); !(ce = (be = De.next()).done) && (ae.push(be.value), !Q || ae.length !== Q); ce = true)
                    ;
                } catch (or) {
                  we = true, qe = or;
                } finally {
                  try {
                    ce || De.return == null || De.return();
                  } finally {
                    if (we)
                      throw qe;
                  }
                }
                return ae;
              }
            }(o2, s) || function(H, Q) {
              if (H) {
                if (typeof H == "string")
                  return bu(H, Q);
                var ae = Object.prototype.toString.call(H).slice(8, -1);
                return ae === "Object" && H.constructor && (ae = H.constructor.name), ae === "Map" || ae === "Set" ? Array.from(H) : ae === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? bu(H, Q) : void 0;
              }
            }(o2, s) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), I2 = k[0], $ = k[1];
            if (I2 in A2 || $ in A2) {
              A2.x = A2[I2], A2.y = A2[$];
              break;
            }
          }
          p2.options.targets.push(A2);
        }
      }
      var X = Kr.snap.set(i);
      return p2.options = g, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    zr.snapSize = yu;
    var rf = (0, ht.makeModifier)(yu, "snapSize");
    zr.default = rf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.snapEdges = ei.default = void 0;
    var xu = { start: function(i) {
      var o2 = i.edges;
      return o2 ? (i.state.targetFields = i.state.targetFields || [[o2.left ? "left" : "right", o2.top ? "top" : "bottom"]], zr.snapSize.start(i)) : null;
    }, set: zr.snapSize.set, defaults: (0, U.default)((0, hn.default)(zr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ei.snapEdges = xu;
    var nf = (0, ht.makeModifier)(xu, "snapEdges");
    ei.default = nf;
    var ps = {};
    Object.defineProperty(ps, "__esModule", { value: true }), Object.defineProperty(ps, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var ds = {};
    Object.defineProperty(ds, "__esModule", { value: true }), Object.defineProperty(ds, "default", { enumerable: true, get: function() {
      return bn.default;
    } });
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.default = void 0;
    var of = { aspectRatio: Kn.default, restrictEdges: yr.default, restrict: St.default, restrictRect: Jn.default, restrictSize: Qn.default, snapEdges: ei.default, snap: Kr.default, snapSize: zr.default, spring: ps.default, avoid: ls.default, transform: ds.default, rubberband: cs.default };
    ti.default = of;
    var Fo = {};
    Object.defineProperty(Fo, "__esModule", { value: true }), Fo.default = void 0;
    var af = { id: "modifiers", install: function(i) {
      var o2 = i.interactStatic;
      for (var s in i.usePlugin(ht.default), i.usePlugin(Ho.default), o2.modifiers = ti.default, ti.default) {
        var l = ti.default[s], p2 = l._defaults, f2 = l._methods;
        p2._methods = f2, i.defaults.perAction[s] = p2;
      }
    } };
    Fo.default = af;
    var yn = {};
    function wu(i) {
      return (wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(wu, "wu");
    c2(wu, "mo");
    function sf(i, o2) {
      for (var s = 0; s < o2.length; s++) {
        var l = o2[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(sf, "sf");
    c2(sf, "bo");
    function Eu(i, o2) {
      return (Eu = Object.setPrototypeOf || function(s, l) {
        return s.__proto__ = l, s;
      })(i, o2);
    }
    __name(Eu, "Eu");
    c2(Eu, "xo");
    function lf(i, o2) {
      return !o2 || wu(o2) !== "object" && typeof o2 != "function" ? Pt(i) : o2;
    }
    __name(lf, "lf");
    c2(lf, "wo");
    function Pt(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Pt, "Pt");
    c2(Pt, "_o");
    function fs(i) {
      return (fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(i);
    }
    __name(fs, "fs");
    c2(fs, "Po");
    function dr(i, o2, s) {
      return o2 in i ? Object.defineProperty(i, o2, { value: s, enumerable: true, configurable: true, writable: true }) : i[o2] = s, i;
    }
    __name(dr, "dr");
    c2(dr, "Oo"), Object.defineProperty(yn, "__esModule", { value: true }), yn.PointerEvent = yn.default = void 0;
    var uf = function(i) {
      (function(h, b) {
        if (typeof b != "function" && b !== null)
          throw new TypeError("Super expression must either be null or a function");
        h.prototype = Object.create(b && b.prototype, { constructor: { value: h, writable: true, configurable: true } }), b && Eu(h, b);
      })(g, i);
      var o2, s, l, p2, f2 = (l = g, p2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h) {
          return false;
        }
      }(), function() {
        var h, b = fs(l);
        if (p2) {
          var S = fs(this).constructor;
          h = Reflect.construct(b, arguments, S);
        } else
          h = b.apply(this, arguments);
        return lf(this, h);
      });
      function g(h, b, S, T, A2, z2) {
        var k;
        if (function(X, H) {
          if (!(X instanceof H))
            throw new TypeError("Cannot call a class as a function");
        }(this, g), dr(Pt(k = f2.call(this, A2)), "type", void 0), dr(Pt(k), "originalEvent", void 0), dr(Pt(k), "pointerId", void 0), dr(Pt(k), "pointerType", void 0), dr(Pt(k), "double", void 0), dr(Pt(k), "pageX", void 0), dr(Pt(k), "pageY", void 0), dr(Pt(k), "clientX", void 0), dr(Pt(k), "clientY", void 0), dr(Pt(k), "dt", void 0), dr(Pt(k), "eventable", void 0), K.pointerExtend(Pt(k), S), S !== b && K.pointerExtend(Pt(k), b), k.timeStamp = z2, k.originalEvent = S, k.type = h, k.pointerId = K.getPointerId(b), k.pointerType = K.getPointerType(b), k.target = T, k.currentTarget = null, h === "tap") {
          var I2 = A2.getPointerIndex(b);
          k.dt = k.timeStamp - A2.pointers[I2].downTime;
          var $ = k.timeStamp - A2.tapTime;
          k.double = !!(A2.prevTap && A2.prevTap.type !== "doubletap" && A2.prevTap.target === k.target && $ < 500);
        } else
          h === "doubletap" && (k.dt = b.timeStamp - A2.tapTime);
        return k;
      }
      __name(g, "g");
      return c2(g, "a"), o2 = g, (s = [{ key: "_subtractOrigin", value: function(h) {
        var b = h.x, S = h.y;
        return this.pageX -= b, this.pageY -= S, this.clientX -= b, this.clientY -= S, this;
      } }, { key: "_addOrigin", value: function(h) {
        var b = h.x, S = h.y;
        return this.pageX += b, this.pageY += S, this.clientX += b, this.clientY += S, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && sf(o2.prototype, s), g;
    }(kt.BaseEvent);
    yn.PointerEvent = yn.default = uf;
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Li.default = void 0;
    var Uo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = Uo, i.defaults.actions.pointerEvents = Uo.defaults, (0, U.default)(i.actions.phaselessTypes, Uo.types);
    }, listeners: { "interactions:new": function(i) {
      var o2 = i.interaction;
      o2.prevTap = null, o2.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o2 = i.down, s = i.pointerInfo;
      !o2 && s.hold || (s.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o2) {
      var s = i.interaction, l = i.pointer, p2 = i.event, f2 = i.eventTarget;
      i.duplicate || s.pointerIsDown && !s.pointerWasMoved || (s.pointerIsDown && hs(i), Jr({ interaction: s, pointer: l, event: p2, eventTarget: f2, type: "move" }, o2));
    }, "interactions:down": function(i, o2) {
      (function(s, l) {
        for (var p2 = s.interaction, f2 = s.pointer, g = s.event, h = s.eventTarget, b = s.pointerIndex, S = p2.pointers[b].hold, T = P.getPath(h), A2 = { interaction: p2, pointer: f2, event: g, eventTarget: h, type: "hold", targets: [], path: T, node: null }, z2 = 0; z2 < T.length; z2++) {
          var k = T[z2];
          A2.node = k, l.fire("pointerEvents:collect-targets", A2);
        }
        if (A2.targets.length) {
          for (var I2 = 1 / 0, $ = 0; $ < A2.targets.length; $++) {
            var X = A2.targets[$].eventable.options.holdDuration;
            X < I2 && (I2 = X);
          }
          S.duration = I2, S.timeout = setTimeout(function() {
            Jr({ interaction: p2, eventTarget: h, pointer: f2, event: g, type: "hold" }, l);
          }, I2);
        }
      })(i, o2), Jr(i, o2);
    }, "interactions:up": function(i, o2) {
      hs(i), Jr(i, o2), function(s, l) {
        var p2 = s.interaction, f2 = s.pointer, g = s.event, h = s.eventTarget;
        p2.pointerWasMoved || Jr({ interaction: p2, eventTarget: h, pointer: f2, event: g, type: "tap" }, l);
      }(i, o2);
    }, "interactions:cancel": function(i, o2) {
      hs(i), Jr(i, o2);
    } }, PointerEvent: yn.PointerEvent, fire: Jr, collectEventTargets: Su, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Jr(i, o2) {
      var s = i.interaction, l = i.pointer, p2 = i.event, f2 = i.eventTarget, g = i.type, h = i.targets, b = h === void 0 ? Su(i, o2) : h, S = new yn.PointerEvent(g, l, p2, f2, s, o2.now());
      o2.fire("pointerEvents:new", { pointerEvent: S });
      for (var T = { interaction: s, pointer: l, event: p2, eventTarget: f2, targets: b, type: g, pointerEvent: S }, A2 = 0; A2 < b.length; A2++) {
        var z2 = b[A2];
        for (var k in z2.props || {})
          S[k] = z2.props[k];
        var I2 = (0, Ge.default)(z2.eventable, z2.node);
        if (S._subtractOrigin(I2), S.eventable = z2.eventable, S.currentTarget = z2.node, z2.eventable.fire(S), S._addOrigin(I2), S.immediatePropagationStopped || S.propagationStopped && A2 + 1 < b.length && b[A2 + 1].node !== S.currentTarget)
          break;
      }
      if (o2.fire("pointerEvents:fired", T), g === "tap") {
        var $ = S.double ? Jr({ interaction: s, pointer: l, event: p2, eventTarget: f2, type: "doubletap" }, o2) : S;
        s.prevTap = $, s.tapTime = $.timeStamp;
      }
      return S;
    }
    __name(Jr, "Jr");
    c2(Jr, "Mo");
    function Su(i, o2) {
      var s = i.interaction, l = i.pointer, p2 = i.event, f2 = i.eventTarget, g = i.type, h = s.getPointerIndex(l), b = s.pointers[h];
      if (g === "tap" && (s.pointerWasMoved || !b || b.downTarget !== f2))
        return [];
      for (var S = P.getPath(f2), T = { interaction: s, pointer: l, event: p2, eventTarget: f2, type: g, path: S, targets: [], node: null }, A2 = 0; A2 < S.length; A2++) {
        var z2 = S[A2];
        T.node = z2, o2.fire("pointerEvents:collect-targets", T);
      }
      return g === "hold" && (T.targets = T.targets.filter(function(k) {
        var I2;
        return k.eventable.options.holdDuration === ((I2 = s.pointers[h]) == null ? void 0 : I2.hold.duration);
      })), T.targets;
    }
    __name(Su, "Su");
    c2(Su, "jo");
    function hs(i) {
      var o2 = i.interaction, s = i.pointerIndex, l = o2.pointers[s].hold;
      l && l.timeout && (clearTimeout(l.timeout), l.timeout = null);
    }
    __name(hs, "hs");
    c2(hs, "ko");
    var cf = Uo;
    Li.default = cf;
    var Wo = {};
    function pf(i) {
      var o2 = i.interaction;
      o2.holdIntervalHandle && (clearInterval(o2.holdIntervalHandle), o2.holdIntervalHandle = null);
    }
    __name(pf, "pf");
    c2(pf, "Ao"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var df = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(Li.default);
      var o2 = i.pointerEvents;
      o2.defaults.holdRepeatInterval = 0, o2.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o2) {
      return i["pointerEvents:".concat(o2)] = pf, i;
    }, { "pointerEvents:new": function(i) {
      var o2 = i.pointerEvent;
      o2.type === "hold" && (o2.count = (o2.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o2) {
      var s = i.interaction, l = i.pointerEvent, p2 = i.eventTarget, f2 = i.targets;
      if (l.type === "hold" && f2.length) {
        var g = f2[0].eventable.options.holdRepeatInterval;
        g <= 0 || (s.holdIntervalHandle = setTimeout(function() {
          o2.pointerEvents.fire({ interaction: s, eventTarget: p2, type: "hold", pointer: l, event: l }, o2);
        }, g));
      }
    } }) };
    Wo.default = df;
    var Vo = {};
    function ff(i) {
      return (0, U.default)(this.events.options, i), this;
    }
    __name(ff, "ff");
    c2(ff, "Co"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var hf = { id: "pointer-events/interactableTargets", install: function(i) {
      var o2 = i.Interactable;
      o2.prototype.pointerEvents = ff;
      var s = o2.prototype._backCompatOption;
      o2.prototype._backCompatOption = function(l, p2) {
        var f2 = s.call(this, l, p2);
        return f2 === this && (this.events.options[l] = p2), f2;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o2) {
      var s = i.targets, l = i.node, p2 = i.type, f2 = i.eventTarget;
      o2.interactables.forEachMatch(l, function(g) {
        var h = g.events, b = h.options;
        h.types[p2] && h.types[p2].length && g.testIgnoreAllow(b, l, f2) && s.push({ node: l, eventable: h, props: { interactable: g } });
      });
    }, "interactable:new": function(i) {
      var o2 = i.interactable;
      o2.events.getRect = function(s) {
        return o2.getRect(s);
      };
    }, "interactable:set": function(i, o2) {
      var s = i.interactable, l = i.options;
      (0, U.default)(s.events.options, o2.pointerEvents.defaults), (0, U.default)(s.events.options, l.pointerEvents || {});
    } } };
    Vo.default = hf;
    var Xo = {};
    Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var vf = { id: "pointer-events", install: function(i) {
      i.usePlugin(Li), i.usePlugin(Wo.default), i.usePlugin(Vo.default);
    } };
    Xo.default = vf;
    var qi = {};
    function Tu(i) {
      var o2 = i.Interactable;
      i.actions.phases.reflow = true, o2.prototype.reflow = function(s) {
        return function(l, p2, f2) {
          for (var g = u2.default.string(l.target) ? xe.from(l._context.querySelectorAll(l.target)) : [l.target], h = f2.window.Promise, b = h ? [] : null, S = function() {
            var A2 = g[T], z2 = l.getRect(A2);
            if (!z2)
              return "break";
            var k = xe.find(f2.interactions.list, function(Q) {
              return Q.interacting() && Q.interactable === l && Q.element === A2 && Q.prepared.name === p2.name;
            }), I2 = void 0;
            if (k)
              k.move(), b && (I2 = k._reflowPromise || new h(function(Q) {
                k._reflowResolve = Q;
              }));
            else {
              var $ = (0, ue.tlbrToXywh)(z2), X = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: f2.now() }, H = K.coordsToEvent(X);
              I2 = function(Q, ae, ce, we, qe) {
                var be = Q.interactions.new({ pointerType: "reflow" }), De = { interaction: be, event: qe, pointer: qe, eventTarget: ce, phase: "reflow" };
                be.interactable = ae, be.element = ce, be.prevEvent = qe, be.updatePointer(qe, qe, ce, true), K.setZeroCoords(be.coords.delta), (0, qt.copyAction)(be.prepared, we), be._doPhase(De);
                var or = Q.window.Promise, kr = or ? new or(function(vs) {
                  be._reflowResolve = vs;
                }) : void 0;
                return be._reflowPromise = kr, be.start(we, ae, ce), be._interacting ? (be.move(De), be.end(qe)) : (be.stop(), be._reflowResolve()), be.removePointer(qe, qe), kr;
              }(f2, l, A2, p2, H);
            }
            b && b.push(I2);
          }, T = 0; T < g.length && S() !== "break"; T++)
            ;
          return b && h.all(b).then(function() {
            return l;
          });
        }(this, s, i);
      };
    }
    __name(Tu, "Tu");
    c2(Tu, "Wo"), Object.defineProperty(qi, "__esModule", { value: true }), qi.install = Tu, qi.default = void 0;
    var mf = { id: "reflow", install: Tu, listeners: { "interactions:stop": function(i, o2) {
      var s = i.interaction;
      s.pointerType === "reflow" && (s._reflowResolve && s._reflowResolve(), xe.remove(o2.interactions.list, s));
    } } };
    qi.default = mf;
    var ir = { exports: {} };
    function Ou(i) {
      return (Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(Ou, "Ou");
    c2(Ou, "Vo"), Object.defineProperty(ir.exports, "__esModule", { value: true }), ir.exports.default = void 0, bt.default.use(Xn.default), bt.default.use(gn.default), bt.default.use(Xo.default), bt.default.use(Yn.default), bt.default.use(Fo.default), bt.default.use(Mo.default), bt.default.use(Dr.default), bt.default.use(Zr.default), bt.default.use(qi.default);
    var gf = bt.default;
    if (ir.exports.default = gf, Ou(ir) === "object" && ir)
      try {
        ir.exports = bt.default;
      } catch (i) {
      }
    bt.default.default = bt.default, ir = ir.exports;
    var xn = { exports: {} };
    function Cu(i) {
      return (Cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(i);
    }
    __name(Cu, "Cu");
    c2(Cu, "$o"), Object.defineProperty(xn.exports, "__esModule", { value: true }), xn.exports.default = void 0;
    var bf = ir.default;
    if (xn.exports.default = bf, Cu(xn) === "object" && xn)
      try {
        xn.exports = ir.default;
      } catch (i) {
      }
    return ir.default.default = ir.default, xn.exports;
  });
});
function Oe(t) {
  class r extends t {
    get active() {
      return this.hasAttribute("data-active");
    }
    set active(n) {
      n ? this.activate() : this.deactivate();
    }
    activate() {
      this.setAttribute("data-active", ""), this.dispatchEvent(new Event("operation-active", { bubbles: true }));
    }
    deactivate() {
      this.removeAttribute("data-active");
    }
  }
  __name(r, "r");
  return c2(r, "ActivateableMixinClass"), r;
}
__name(Oe, "Oe");
c2(Oe, "ActivateableMixin");
var ms = /* @__PURE__ */ new WeakSet();
function bs(t) {
  ms.add(t), t.shadowRoot && ys(t.shadowRoot), ws(t), xs(t.ownerDocument);
}
__name(bs, "bs");
c2(bs, "bind");
function ys(t) {
  ws(t), xs(t);
}
__name(ys, "ys");
c2(ys, "bindShadow");
var Ko = /* @__PURE__ */ new WeakMap();
function xs(t = document) {
  if (Ko.has(t))
    return Ko.get(t);
  let r = false, e = new MutationObserver((a) => {
    for (let u2 of a)
      if (u2.type === "attributes" && u2.target instanceof Element)
        gs(u2.target);
      else if (u2.type === "childList" && u2.addedNodes.length)
        for (let d2 of u2.addedNodes)
          d2 instanceof Element && ws(d2);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, Ko.delete(t), e.disconnect();
  } };
  return Ko.set(t, n), n;
}
__name(xs, "xs");
c2(xs, "listenForBind");
function ws(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    gs(r);
  t instanceof Element && t.hasAttribute("data-action") && gs(t);
}
__name(ws, "ws");
c2(ws, "bindElements");
function Tf(t) {
  let r = t.currentTarget;
  for (let e of Au(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      ms.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let a = r.getRootNode();
      if (a instanceof ShadowRoot && ms.has(a.host) && a.host.matches(e.tag)) {
        let u2 = a.host;
        typeof u2[e.method] == "function" && u2[e.method](t);
      }
    }
}
__name(Tf, "Tf");
c2(Tf, "handleEvent");
function* Au(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(Au, "Au");
c2(Au, "bindings");
function gs(t) {
  for (let r of Au(t))
    t.addEventListener(r.type, Tf);
}
__name(gs, "gs");
c2(gs, "bindActions");
function Es(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(Es, "Es");
c2(Es, "register");
function Ss(t, r) {
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
__name(Ss, "Ss");
c2(Ss, "findTarget");
function Ts(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let a of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      a.closest(e) || n.push(a);
  for (let a of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    a.closest(e) === t && n.push(a);
  return n;
}
__name(Ts, "Ts");
c2(Ts, "findTargets");
function je(t, r) {
  Object.defineProperty(t, r, { configurable: true, get() {
    return Ss(this, r);
  } });
}
__name(je, "je");
c2(je, "target");
function fr(t, r) {
  Object.defineProperty(t, r, { configurable: true, get() {
    return Ts(this, r);
  } });
}
__name(fr, "fr");
c2(fr, "targets");
function Os(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(Os, "Os");
c2(Os, "autoShadowRoot");
var Jo = /* @__PURE__ */ new WeakMap();
function q2(t, r) {
  Jo.has(t) || Jo.set(t, []), Jo.get(t).push(r);
}
__name(q2, "q");
c2(q2, "attr");
var Pu = /* @__PURE__ */ new WeakSet();
function Qo(t, r) {
  if (!Pu.has(t)) {
    Pu.add(t), r || (r = Iu(Object.getPrototypeOf(t)));
    for (let e of r) {
      let n = t[e], a = Du(e), u2 = { configurable: true, get() {
        return this.getAttribute(a) || "";
      }, set(d2) {
        this.setAttribute(a, d2 || "");
      } };
      typeof n == "number" ? u2 = { configurable: true, get() {
        return Number(this.getAttribute(a) || 0);
      }, set(d2) {
        this.setAttribute(a, d2);
      } } : typeof n == "boolean" && (u2 = { configurable: true, get() {
        return this.hasAttribute(a);
      }, set(d2) {
        this.toggleAttribute(a, d2);
      } }), Object.defineProperty(t, e, u2), e in t && !t.hasAttribute(a) && u2.set.call(t, n);
    }
  }
}
__name(Qo, "Qo");
c2(Qo, "initializeAttrs");
function Iu(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = Jo.get(e) || [];
    for (let a of n)
      r.add(a);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(Iu, "Iu");
c2(Iu, "getAttrNames");
function Du(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Du, "Du");
c2(Du, "attrToAttributeName");
function Cs(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...Iu(t.prototype)].map(Du).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(Cs, "Cs");
c2(Cs, "defineObservedAttributes");
var Of = /* @__PURE__ */ new WeakSet();
function Ru(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), Of.add(t), Os(t), Qo(t), bs(t), r && r.call(t), t.shadowRoot && ys(t.shadowRoot);
}
__name(Ru, "Ru");
c2(Ru, "initializeInstance");
function zu(t, r, e, n, a) {
  Qo(t), r !== "data-catalyst" && a && a.call(t, r, e, n);
}
__name(zu, "zu");
c2(zu, "initializeAttributeChanged");
function ku(t) {
  Cs(t), Es(t);
}
__name(ku, "ku");
c2(ku, "initializeClass");
function te(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    Ru(this, r);
  };
  let e = t.prototype.attributeChangedCallback;
  t.prototype.attributeChangedCallback = function(n, a, u2) {
    zu(this, n, a, u2, e);
  }, ku(t);
}
__name(te, "te");
c2(te, "controller");
var wn = c2((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function Qr(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(r, "r");
  return c2(r, "AngleableMixinClass"), R2([q2], r.prototype, "angle", 2), R2([q2], r.prototype, "reducedAngle", 2), r;
}
__name(Qr, "Qr");
c2(Qr, "AngleableMixin");
var En = c2((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function He(t) {
  class r extends t {
    set controls(n) {
      this.setAttribute("data-controls", n.sort().join());
    }
    get controls() {
      let n = this.getAttribute("data-controls");
      return n === null ? [] : n === "" ? [] : n.split(",").map((a) => parseInt(a)).sort();
    }
    get isControlled() {
      return this.controls.length > 0;
    }
  }
  __name(r, "r");
  return c2(r, "ControllableMixinClass"), r;
}
__name(He, "He");
c2(He, "ControllableMixin");
function Be(t) {
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
  return c2(r, "DisableableMixinClass"), R2([q2], r.prototype, "disabled", 2), r;
}
__name(Be, "Be");
c2(Be, "DisableableMixin");
var V = c2(function() {
  return V = Object.assign || c2(function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var u2 in e)
        Object.prototype.hasOwnProperty.call(e, u2) && (r[u2] = e[u2]);
    }
    return r;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function ri(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}
__name(ri, "ri");
c2(ri, "__rest");
function ve(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return { next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    } };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(ve, "ve");
c2(ve, "__values");
function me(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), a, u2 = [], d2;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = n.next()).done; )
      u2.push(a.value);
  } catch (v) {
    d2 = { error: v };
  } finally {
    try {
      a && !a.done && (e = n.return) && e.call(n);
    } finally {
      if (d2)
        throw d2.error;
    }
  }
  return u2;
}
__name(me, "me");
c2(me, "__read");
function Re(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, a = r.length, u2; n < a; n++)
      (u2 || !(n in r)) && (u2 || (u2 = Array.prototype.slice.call(r, 0, n)), u2[n] = r[n]);
  return t.concat(u2 || Array.prototype.slice.call(r));
}
__name(Re, "Re");
c2(Re, "__spreadArray");
var Ee;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(Ee || (Ee = {}));
var en;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(en || (en = {}));
var ji = Ee.Start;
var ni = Ee.Stop;
var ii = Ee.Raise;
var Sn = Ee.Send;
var ea = Ee.Cancel;
var Nu = Ee.NullEvent;
var _s = Ee.Assign;
var om = Ee.After;
var am = Ee.DoneState;
var ta = Ee.Log;
var Gu = Ee.Init;
var Bi = Ee.Invoke;
var sm = Ee.ErrorExecution;
var Ms = Ee.ErrorPlatform;
var As = Ee.ErrorCustom;
var $i = Ee.Update;
var Lu = Ee.Choose;
var qu = Ee.Pure;
var ra = ".";
var Ps = {};
var na = "xstate.guard";
var ju = "";
var Le = true;
var ia;
function Fi(t, r, e) {
  e === void 0 && (e = ra);
  var n = oi(t, e), a = oi(r, e);
  return ge(a) ? ge(n) ? a === n : false : ge(n) ? n in a : Object.keys(n).every(function(u2) {
    return u2 in a ? Fi(n[u2], a[u2]) : false;
  });
}
__name(Fi, "Fi");
c2(Fi, "matchesState");
function oa(t) {
  try {
    return ge(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(oa, "oa");
c2(oa, "getEventType");
function aa(t, r) {
  try {
    return Nr(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(aa, "aa");
c2(aa, "toStatePath");
function Cf(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(Cf, "Cf");
c2(Cf, "isStateLike");
function oi(t, r) {
  if (Cf(t))
    return t.value;
  if (Nr(t))
    return Hi(t);
  if (typeof t != "string")
    return t;
  var e = aa(t, r);
  return Hi(e);
}
__name(oi, "oi");
c2(oi, "toStateValue");
function Hi(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(Hi, "Hi");
c2(Hi, "pathToStateValue");
function ai(t, r) {
  for (var e = {}, n = Object.keys(t), a = 0; a < n.length; a++) {
    var u2 = n[a];
    e[u2] = r(t[u2], u2, t, a);
  }
  return e;
}
__name(ai, "ai");
c2(ai, "mapValues");
function Is(t, r, e) {
  var n, a, u2 = {};
  try {
    for (var d2 = ve(Object.keys(t)), v = d2.next(); !v.done; v = d2.next()) {
      var m2 = v.value, E = t[m2];
      !e(E) || (u2[m2] = r(E, m2, t));
    }
  } catch (w2) {
    n = { error: w2 };
  } finally {
    try {
      v && !v.done && (a = d2.return) && a.call(d2);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return u2;
}
__name(Is, "Is");
c2(Is, "mapFilterValues");
var Bu = c2(function(t) {
  return function(r) {
    var e, n, a = r;
    try {
      for (var u2 = ve(t), d2 = u2.next(); !d2.done; d2 = u2.next()) {
        var v = d2.value;
        a = a[v];
      }
    } catch (m2) {
      e = { error: m2 };
    } finally {
      try {
        d2 && !d2.done && (n = u2.return) && n.call(u2);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return a;
  };
}, "path");
function $u(t, r) {
  return function(e) {
    var n, a, u2 = e;
    try {
      for (var d2 = ve(t), v = d2.next(); !v.done; v = d2.next()) {
        var m2 = v.value;
        u2 = u2[r][m2];
      }
    } catch (E) {
      n = { error: E };
    } finally {
      try {
        v && !v.done && (a = d2.return) && a.call(d2);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return u2;
  };
}
__name($u, "$u");
c2($u, "nestedPath");
function Ui(t) {
  if (!t)
    return [[]];
  if (ge(t))
    return [[t]];
  var r = ke(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : Ui(t[e]).map(function(a) {
      return [e].concat(a);
    });
  }));
  return r;
}
__name(Ui, "Ui");
c2(Ui, "toStatePaths");
function ke(t) {
  var r;
  return (r = []).concat.apply(r, Re([], me(t), false));
}
__name(ke, "ke");
c2(ke, "flatten");
function Hu(t) {
  return Nr(t) ? t : [t];
}
__name(Hu, "Hu");
c2(Hu, "toArrayStrict");
function jt(t) {
  return t === void 0 ? [] : Hu(t);
}
__name(jt, "jt");
c2(jt, "toArray");
function Tn(t, r, e) {
  var n, a;
  if (Se(t))
    return t(r, e.data);
  var u2 = {};
  try {
    for (var d2 = ve(Object.keys(t)), v = d2.next(); !v.done; v = d2.next()) {
      var m2 = v.value, E = t[m2];
      Se(E) ? u2[m2] = E(r, e.data) : u2[m2] = E;
    }
  } catch (w2) {
    n = { error: w2 };
  } finally {
    try {
      v && !v.done && (a = d2.return) && a.call(d2);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return u2;
}
__name(Tn, "Tn");
c2(Tn, "mapContext");
function Fu(t) {
  return /^(done|error)\./.test(t);
}
__name(Fu, "Fu");
c2(Fu, "isBuiltInEvent");
function Ds(t) {
  return !!(t instanceof Promise || t !== null && (Se(t) || typeof t == "object") && Se(t.then));
}
__name(Ds, "Ds");
c2(Ds, "isPromiseLike");
function Uu(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(Uu, "Uu");
c2(Uu, "isBehavior");
function sa(t, r) {
  var e, n, a = me([[], []], 2), u2 = a[0], d2 = a[1];
  try {
    for (var v = ve(t), m2 = v.next(); !m2.done; m2 = v.next()) {
      var E = m2.value;
      r(E) ? u2.push(E) : d2.push(E);
    }
  } catch (w2) {
    e = { error: w2 };
  } finally {
    try {
      m2 && !m2.done && (n = v.return) && n.call(v);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [u2, d2];
}
__name(sa, "sa");
c2(sa, "partition");
function Wu(t, r) {
  return ai(t.states, function(e, n) {
    if (!!e) {
      var a = (ge(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (!!a)
        return { current: a, states: Wu(e, a) };
    }
  });
}
__name(Wu, "Wu");
c2(Wu, "updateHistoryStates");
function Vu(t, r) {
  return { current: r, states: Wu(t, r) };
}
__name(Vu, "Vu");
c2(Vu, "updateHistoryValue");
function Rs(t, r, e, n) {
  Le || We(!!t, "Attempting to update undefined context");
  var a = t && e.reduce(function(u2, d2) {
    var v, m2, E = d2.assignment, w2 = { state: n, action: d2, _event: r }, M2 = {};
    if (Se(E))
      M2 = E(u2, r.data, w2);
    else
      try {
        for (var y2 = ve(Object.keys(E)), x = y2.next(); !x.done; x = y2.next()) {
          var C = x.value, _ = E[C];
          M2[C] = Se(_) ? _(u2, r.data, w2) : _;
        }
      } catch (D2) {
        v = { error: D2 };
      } finally {
        try {
          x && !x.done && (m2 = y2.return) && m2.call(y2);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, u2, M2);
  }, t);
  return a;
}
__name(Rs, "Rs");
c2(Rs, "updateContext");
var We = c2(function() {
}, "warn");
Le || (We = c2(function(t, r) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    e && n.push(e), console.warn.apply(console, n);
  }
}, "warn"));
function Nr(t) {
  return Array.isArray(t);
}
__name(Nr, "Nr");
c2(Nr, "isArray");
function Se(t) {
  return typeof t == "function";
}
__name(Se, "Se");
c2(Se, "isFunction");
function ge(t) {
  return typeof t == "string";
}
__name(ge, "ge");
c2(ge, "isString");
function la(t, r) {
  if (!!t)
    return ge(t) ? { type: na, name: t, predicate: r ? r[t] : void 0 } : Se(t) ? { type: na, name: t.name, predicate: t } : t;
}
__name(la, "la");
c2(la, "toGuard");
function Xu(t) {
  try {
    return "subscribe" in t && Se(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(Xu, "Xu");
c2(Xu, "isObservable");
var xr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var hm = (ia = {}, ia[xr] = function() {
  return this;
}, ia[Symbol.observable] = function() {
  return this;
}, ia);
function wr(t) {
  return !!t && "__xstatenode" in t;
}
__name(wr, "wr");
c2(wr, "isMachine");
function Yu(t) {
  return !!t && typeof t.send == "function";
}
__name(Yu, "Yu");
c2(Yu, "isActor");
function Wi(t, r) {
  return ge(t) || typeof t == "number" ? V({ type: t }, r) : t;
}
__name(Wi, "Wi");
c2(Wi, "toEventObject");
function rt(t, r) {
  if (!ge(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = Wi(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(rt, "rt");
c2(rt, "toSCXMLEvent");
function On(t, r) {
  var e = Hu(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || wr(n) ? { target: n, event: t } : V(V({}, n), { event: t });
  });
  return e;
}
__name(On, "On");
c2(On, "toTransitionConfigArray");
function Zu(t) {
  if (!(t === void 0 || t === ju))
    return jt(t);
}
__name(Zu, "Zu");
c2(Zu, "normalizeTarget");
function Ku(t, r, e) {
  if (!Le) {
    var n = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === r)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(n));
    else {
      var a = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(a));
    }
  }
}
__name(Ku, "Ku");
c2(Ku, "reportUnhandledExceptionOnInvocation");
function ua(t, r, e, n, a) {
  var u2 = t.options.guards, d2 = { state: a, cond: r, _event: n };
  if (r.type === na)
    return ((u2 == null ? void 0 : u2[r.name]) || r.predicate)(e, n.data, d2);
  var v = u2 == null ? void 0 : u2[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return v(e, n.data, d2);
}
__name(ua, "ua");
c2(ua, "evaluateGuard");
function ca(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(ca, "ca");
c2(ca, "toInvokeSource");
function Vi(t, r, e) {
  if (typeof t == "object")
    return t;
  var n = c2(function() {
  }, "noop");
  return { next: t, error: r || n, complete: e || n };
}
__name(Vi, "Vi");
c2(Vi, "toObserver");
function Xi(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(Xi, "Xi");
c2(Xi, "createInvokeId");
var Cn = rt({ type: Gu });
function pa(t, r) {
  return r && r[t] || void 0;
}
__name(pa, "pa");
c2(pa, "getActionFunction");
function si(t, r) {
  var e;
  if (ge(t) || typeof t == "number") {
    var n = pa(t, r);
    Se(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (Se(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = pa(t.type, r);
    if (Se(n))
      e = V(V({}, t), { exec: n });
    else if (n) {
      var a = n.type || t.type;
      e = V(V(V({}, n), t), { type: a });
    } else
      e = t;
  }
  return e;
}
__name(si, "si");
c2(si, "toActionObject");
var Yi = c2(function(t, r) {
  if (!t)
    return [];
  var e = Nr(t) ? t : [t];
  return e.map(function(n) {
    return si(n, r);
  });
}, "toActionObjects");
function fa(t) {
  var r = si(t);
  return V(V({ id: ge(t) ? t : r.id }, r), { type: r.type });
}
__name(fa, "fa");
c2(fa, "toActivityDefinition");
function Ju(t) {
  return ge(t) ? { type: ii, event: t } : zs(t, { to: en.Internal });
}
__name(Ju, "Ju");
c2(Ju, "raise");
function _f(t) {
  return { type: ii, _event: rt(t.event) };
}
__name(_f, "_f");
c2(_f, "resolveRaise");
function zs(t, r) {
  return { to: r ? r.to : void 0, type: Sn, event: Se(t) ? t : Wi(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Se(t) ? t.name : oa(t) };
}
__name(zs, "zs");
c2(zs, "send");
function Mf(t, r, e, n) {
  var a = { _event: e }, u2 = rt(Se(t.event) ? t.event(r, e.data, a) : t.event), d2;
  if (ge(t.delay)) {
    var v = n && n[t.delay];
    d2 = Se(v) ? v(r, e.data, a) : v;
  } else
    d2 = Se(t.delay) ? t.delay(r, e.data, a) : t.delay;
  var m2 = Se(t.to) ? t.to(r, e.data, a) : t.to;
  return V(V({}, t), { to: m2, _event: u2, event: u2.data, delay: d2 });
}
__name(Mf, "Mf");
c2(Mf, "resolveSend");
var Af = c2(function(t, r, e) {
  return V(V({}, t), { value: ge(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var Qu = c2(function(t) {
  return { type: ea, sendId: t };
}, "cancel");
function ec(t) {
  var r = fa(t);
  return { type: Ee.Start, activity: r, exec: void 0 };
}
__name(ec, "ec");
c2(ec, "start");
function tc(t) {
  var r = Se(t) ? t : fa(t);
  return { type: Ee.Stop, activity: r, exec: void 0 };
}
__name(tc, "tc");
c2(tc, "stop");
function Pf(t, r, e) {
  var n = Se(t.activity) ? t.activity(r, e.data) : t.activity, a = typeof n == "string" ? { id: n } : n, u2 = { type: Ee.Stop, activity: a };
  return u2;
}
__name(Pf, "Pf");
c2(Pf, "resolveStop");
function rc(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(Ee.After, "(").concat(t, ")").concat(e);
}
__name(rc, "rc");
c2(rc, "after");
function Zi(t, r) {
  var e = "".concat(Ee.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(Zi, "Zi");
c2(Zi, "done");
function li(t, r) {
  var e = "".concat(Ee.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(li, "li");
c2(li, "doneInvoke");
function _n(t, r) {
  var e = "".concat(Ee.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(_n, "_n");
c2(_n, "error");
function da(t, r, e, n, a, u2) {
  u2 === void 0 && (u2 = false);
  var d2 = me(u2 ? [[], a] : sa(a, function(y2) {
    return y2.type === _s;
  }), 2), v = d2[0], m2 = d2[1], E = v.length ? Rs(e, n, v, r) : e, w2 = u2 ? [e] : void 0, M2 = ke(m2.map(function(y2) {
    var x;
    switch (y2.type) {
      case ii:
        return _f(y2);
      case Sn:
        var C = Mf(y2, E, n, t.options.delays);
        return Le || We(!ge(y2.delay) || typeof C.delay == "number", "No delay reference for delay expression '".concat(y2.delay, "' was found on machine '").concat(t.id, "'")), C;
      case ta:
        return Af(y2, E, n);
      case Lu: {
        var _ = y2, D2 = (x = _.conds.find(function(ne) {
          var re = la(ne.cond, t.options.guards);
          return !re || ua(t, re, E, n, r);
        })) === null || x === void 0 ? void 0 : x.actions;
        if (!D2)
          return [];
        var j = me(da(t, r, E, n, Yi(jt(D2), t.options.actions), u2), 2), L = j[0], W = j[1];
        return E = W, w2 == null || w2.push(E), L;
      }
      case qu: {
        var D2 = y2.get(E, n.data);
        if (!D2)
          return [];
        var O2 = me(da(t, r, E, n, Yi(jt(D2), t.options.actions), u2), 2), B = O2[0], P = O2[1];
        return E = P, w2 == null || w2.push(E), B;
      }
      case ni:
        return Pf(y2, E, n);
      case _s: {
        E = Rs(E, n, [y2], r), w2 == null || w2.push(E);
        break;
      }
      default:
        var N2 = si(y2, t.options.actions), F2 = N2.exec;
        if (F2 && w2) {
          var Z = w2.length - 1;
          N2 = V(V({}, N2), { exec: function(ne) {
            for (var re = [], pe = 1; pe < arguments.length; pe++)
              re[pe - 1] = arguments[pe];
            F2.apply(void 0, Re([w2[Z]], me(re), false));
          } });
        }
        return N2;
    }
  }).filter(function(y2) {
    return !!y2;
  }));
  return [M2, E];
}
__name(da, "da");
c2(da, "resolveActions");
var nc = [];
var Mn = c2(function(t, r) {
  nc.push(t);
  var e = r(t);
  return nc.pop(), e;
}, "provide");
function ic(t) {
  var r;
  return r = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, r[xr] = function() {
    return this;
  }, r;
}
__name(ic, "ic");
c2(ic, "createNullActor");
function oc(t, r, e, n) {
  var a, u2 = ca(t.src), d2 = (a = r == null ? void 0 : r.options.services) === null || a === void 0 ? void 0 : a[u2.type], v = t.data ? Tn(t.data, e, n) : void 0, m2 = d2 ? ac(d2, t.id, v) : ic(t.id);
  return m2.meta = t, m2;
}
__name(oc, "oc");
c2(oc, "createInvocableActor");
function ac(t, r, e) {
  var n = ic(r);
  if (n.deferred = true, wr(t)) {
    var a = n.state = Mn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return a;
    };
  }
  return n;
}
__name(ac, "ac");
c2(ac, "createDeferredActor");
function If(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name(If, "If");
c2(If, "isActor");
function sc(t) {
  return If(t) && "id" in t;
}
__name(sc, "sc");
c2(sc, "isSpawnedActor");
function lc(t) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[xr] = function() {
    return this;
  }, r), t);
}
__name(lc, "lc");
c2(lc, "toActorRef");
var Ki = c2(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function An(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  });
}
__name(An, "An");
c2(An, "getChildren");
function Ns(t) {
  var r = [t];
  return Ki(t) ? r : r.concat(ke(An(t).map(Ns)));
}
__name(Ns, "Ns");
c2(Ns, "getAllStateNodes");
function Pn(t, r) {
  var e, n, a, u2, d2, v, m2, E, w2 = new Set(t), M2 = ks(w2), y2 = new Set(r);
  try {
    for (var x = ve(y2), C = x.next(); !C.done; C = x.next())
      for (var _ = C.value, D2 = _.parent; D2 && !y2.has(D2); )
        y2.add(D2), D2 = D2.parent;
  } catch (Z) {
    e = { error: Z };
  } finally {
    try {
      C && !C.done && (n = x.return) && n.call(x);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var j = ks(y2);
  try {
    for (var L = ve(y2), W = L.next(); !W.done; W = L.next()) {
      var _ = W.value;
      if (_.type === "compound" && (!j.get(_) || !j.get(_).length))
        M2.get(_) ? M2.get(_).forEach(function(ne) {
          return y2.add(ne);
        }) : _.initialStateNodes.forEach(function(ne) {
          return y2.add(ne);
        });
      else if (_.type === "parallel")
        try {
          for (var O2 = (d2 = void 0, ve(An(_))), B = O2.next(); !B.done; B = O2.next()) {
            var P = B.value;
            P.type !== "history" && (y2.has(P) || (y2.add(P), M2.get(P) ? M2.get(P).forEach(function(ne) {
              return y2.add(ne);
            }) : P.initialStateNodes.forEach(function(ne) {
              return y2.add(ne);
            })));
          }
        } catch (ne) {
          d2 = { error: ne };
        } finally {
          try {
            B && !B.done && (v = O2.return) && v.call(O2);
          } finally {
            if (d2)
              throw d2.error;
          }
        }
    }
  } catch (Z) {
    a = { error: Z };
  } finally {
    try {
      W && !W.done && (u2 = L.return) && u2.call(L);
    } finally {
      if (a)
        throw a.error;
    }
  }
  try {
    for (var N2 = ve(y2), F2 = N2.next(); !F2.done; F2 = N2.next())
      for (var _ = F2.value, D2 = _.parent; D2 && !y2.has(D2); )
        y2.add(D2), D2 = D2.parent;
  } catch (Z) {
    m2 = { error: Z };
  } finally {
    try {
      F2 && !F2.done && (E = N2.return) && E.call(N2);
    } finally {
      if (m2)
        throw m2.error;
    }
  }
  return y2;
}
__name(Pn, "Pn");
c2(Pn, "getConfiguration");
function uc(t, r) {
  var e = r.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var n = e[0];
    if (n) {
      if (Ki(n))
        return n.key;
    } else
      return {};
  }
  var a = {};
  return e.forEach(function(u2) {
    a[u2.key] = uc(u2, r);
  }), a;
}
__name(uc, "uc");
c2(uc, "getValueFromAdj");
function ks(t) {
  var r, e, n = /* @__PURE__ */ new Map();
  try {
    for (var a = ve(t), u2 = a.next(); !u2.done; u2 = a.next()) {
      var d2 = u2.value;
      n.has(d2) || n.set(d2, []), d2.parent && (n.has(d2.parent) || n.set(d2.parent, []), n.get(d2.parent).push(d2));
    }
  } catch (v) {
    r = { error: v };
  } finally {
    try {
      u2 && !u2.done && (e = a.return) && e.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(ks, "ks");
c2(ks, "getAdjList");
function cc(t, r) {
  var e = Pn([t], r);
  return uc(t, ks(e));
}
__name(cc, "cc");
c2(cc, "getValue");
function Ji(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(Ji, "Ji");
c2(Ji, "has");
function pc(t) {
  return Re([], me(new Set(ke(Re([], me(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(pc, "pc");
c2(pc, "nextEvents");
function In(t, r) {
  return r.type === "compound" ? An(r).some(function(e) {
    return e.type === "final" && Ji(t, e);
  }) : r.type === "parallel" ? An(r).every(function(e) {
    return In(t, e);
  }) : false;
}
__name(In, "In");
c2(In, "isInFinalState");
function dc(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(dc, "dc");
c2(dc, "getMeta");
function Gs(t) {
  return new Set(ke(t.map(function(r) {
    return r.tags;
  })));
}
__name(Gs, "Gs");
c2(Gs, "getTagsFromConfiguration");
function Ls(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (ge(t) || ge(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(a) {
    return Ls(t[a], r[a]);
  });
}
__name(Ls, "Ls");
c2(Ls, "stateValuesEqual");
function fc(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(fc, "fc");
c2(fc, "isStateConfig");
function hc(t, r) {
  var e = t.exec, n = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(hc, "hc");
c2(hc, "bindActionToState");
var hr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = Ps, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || Ps, this.meta = dc(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return pc(e.configuration);
    } });
  }
  __name(t, "t");
  return c2(t, "State"), t.from = function(r, e) {
    if (r instanceof t)
      return r.context !== e ? new t({ value: r.value, context: e, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = Cn;
    return new t({ value: r, context: e, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(r) {
    return new t(r);
  }, t.inert = function(r, e) {
    if (r instanceof t) {
      if (!r.actions.length)
        return r;
      var n = Cn;
      return new t({ value: r.value, context: e, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return t.from(r, e);
  }, t.prototype.toStrings = function(r, e) {
    var n = this;
    if (r === void 0 && (r = this.value), e === void 0 && (e = "."), ge(r))
      return [r];
    var a = Object.keys(r);
    return a.concat.apply(a, Re([], me(a.map(function(u2) {
      return n.toStrings(r[u2], e).map(function(d2) {
        return u2 + e + d2;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var e = r.tags;
    r.machine;
    var n = ri(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return Fi(r, this.value);
  }, t.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, t.prototype.can = function(r) {
    var e;
    Le && We(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(a) {
      return a.target !== void 0 || a.actions.length;
    });
  }, t;
}();
var Df = { deferEvents: false };
var qs = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Df), r);
  }
  __name(t, "t");
  return c2(t, "Scheduler"), t.prototype.initialize = function(r) {
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
var js = /* @__PURE__ */ new Map();
var Rf = 0;
var Qi = { bookId: function() {
  return "x:".concat(Rf++);
}, register: function(t, r) {
  return js.set(t, r), t;
}, get: function(t) {
  return js.get(t);
}, free: function(t) {
  js.delete(t);
} };
function ha() {
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
__name(ha, "ha");
c2(ha, "getGlobal");
function zf() {
  var t = ha();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(zf, "zf");
c2(zf, "getDevTools");
function vc(t) {
  if (!!ha()) {
    var r = zf();
    r && r.register(t);
  }
}
__name(vc, "vc");
c2(vc, "registerService");
function mc(t, r) {
  r === void 0 && (r = {});
  var e = t.initialState, n = /* @__PURE__ */ new Set(), a = [], u2 = false, d2 = c2(function() {
    if (!u2) {
      for (u2 = true; a.length > 0; ) {
        var E = a.shift();
        e = t.transition(e, E, m2), n.forEach(function(w2) {
          return w2.next(e);
        });
      }
      u2 = false;
    }
  }, "flush"), v = lc({ id: r.id, send: function(E) {
    a.push(E), d2();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(E, w2, M2) {
    var y2 = Vi(E, w2, M2);
    return n.add(y2), y2.next(e), { unsubscribe: function() {
      n.delete(y2);
    } };
  } }), m2 = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(m2) : e, v;
}
__name(mc, "mc");
c2(mc, "spawnBehavior");
var kf = { sync: false, autoForward: false };
var yt;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(yt || (yt = {}));
var gc = function() {
  function t(r, e) {
    var n = this;
    e === void 0 && (e = t.defaultOptions), this.machine = r, this.scheduler = new qs(), this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = yt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(w2, M2) {
      if (Nr(w2))
        return n.batch(w2), n.state;
      var y2 = rt(Wi(w2, M2));
      if (n.status === yt.Stopped)
        return Le || We(false, 'Event "'.concat(y2.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(y2.data))), n.state;
      if (n.status !== yt.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(y2.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(y2.data)));
      return n.scheduler.schedule(function() {
        n.forward(y2);
        var x = n.nextState(y2);
        n.update(x, y2);
      }), n._state;
    }, this.sendTo = function(w2, M2) {
      var y2 = n.parent && (M2 === en.Parent || n.parent.id === M2), x = y2 ? n.parent : ge(M2) ? n.children.get(M2) || Qi.get(M2) : Yu(M2) ? M2 : void 0;
      if (!x) {
        if (!y2)
          throw new Error("Unable to send event to child '".concat(M2, "' from service '").concat(n.id, "'."));
        Le || We(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(w2.type));
        return;
      }
      "machine" in x ? x.send(V(V({}, w2), { name: w2.name === As ? "".concat(_n(n.id)) : w2.name, origin: n.sessionId })) : x.send(w2.data);
    };
    var a = V(V({}, t.defaultOptions), e), u2 = a.clock, d2 = a.logger, v = a.parent, m2 = a.id, E = m2 !== void 0 ? m2 : r.id;
    this.id = E, this.logger = d2, this.clock = u2, this.parent = v, this.options = a, this.scheduler = new qs({ deferEvents: this.options.deferEvents }), this.sessionId = Qi.bookId();
  }
  __name(t, "t");
  return c2(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : Mn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return Le || We(this.status !== yt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(r, e) {
    var n, a;
    try {
      for (var u2 = ve(r.actions), d2 = u2.next(); !d2.done; d2 = u2.next()) {
        var v = d2.value;
        this.exec(v, r, e);
      }
    } catch (m2) {
      n = { error: m2 };
    } finally {
      try {
        d2 && !d2.done && (a = u2.return) && a.call(u2);
      } finally {
        if (n)
          throw n.error;
      }
    }
  }, t.prototype.update = function(r, e) {
    var n, a, u2, d2, v, m2, E, w2, M2 = this;
    if (r._sessionid = this.sessionId, this._state = r, this.options.execute && this.execute(this.state), this.children.forEach(function(Z) {
      M2.state.children[Z.id] = Z;
    }), this.devTools && this.devTools.send(e.data, r), r.event)
      try {
        for (var y2 = ve(this.eventListeners), x = y2.next(); !x.done; x = y2.next()) {
          var C = x.value;
          C(r.event);
        }
      } catch (Z) {
        n = { error: Z };
      } finally {
        try {
          x && !x.done && (a = y2.return) && a.call(y2);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var _ = ve(this.listeners), D2 = _.next(); !D2.done; D2 = _.next()) {
        var C = D2.value;
        C(r, r.event);
      }
    } catch (Z) {
      u2 = { error: Z };
    } finally {
      try {
        D2 && !D2.done && (d2 = _.return) && d2.call(_);
      } finally {
        if (u2)
          throw u2.error;
      }
    }
    try {
      for (var j = ve(this.contextListeners), L = j.next(); !L.done; L = j.next()) {
        var W = L.value;
        W(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (Z) {
      v = { error: Z };
    } finally {
      try {
        L && !L.done && (m2 = j.return) && m2.call(j);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var O2 = In(r.configuration || [], this.machine);
    if (this.state.configuration && O2) {
      var B = r.configuration.find(function(Z) {
        return Z.type === "final" && Z.parent === M2.machine;
      }), P = B && B.doneData ? Tn(B.doneData, r.context, e) : void 0;
      try {
        for (var N2 = ve(this.doneListeners), F2 = N2.next(); !F2.done; F2 = N2.next()) {
          var C = F2.value;
          C(li(this.id, P));
        }
      } catch (Z) {
        E = { error: Z };
      } finally {
        try {
          F2 && !F2.done && (w2 = N2.return) && w2.call(N2);
        } finally {
          if (E)
            throw E.error;
        }
      }
      this.stop();
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === yt.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var a = this;
    if (!r)
      return { unsubscribe: function() {
      } };
    var u2, d2 = n;
    return typeof r == "function" ? u2 = r : (u2 = r.next.bind(r), d2 = r.complete.bind(r)), this.listeners.add(u2), this.status === yt.Running && u2(this.state), d2 && this.onDone(d2), { unsubscribe: function() {
      u2 && a.listeners.delete(u2), d2 && a.doneListeners.delete(d2);
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
    if (this.status === yt.Running)
      return this;
    this.machine._init(), Qi.register(this.sessionId, this), this.initialized = true, this.status = yt.Running;
    var n = r === void 0 ? this.initialState : Mn(this, function() {
      return fc(r) ? e.machine.resolveState(r) : e.machine.resolveState(hr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, Cn);
    }), this;
  }, t.prototype.stop = function() {
    var r, e, n, a, u2, d2, v, m2, E, w2, M2 = this;
    try {
      for (var y2 = ve(this.listeners), x = y2.next(); !x.done; x = y2.next()) {
        var C = x.value;
        this.listeners.delete(C);
      }
    } catch (F2) {
      r = { error: F2 };
    } finally {
      try {
        x && !x.done && (e = y2.return) && e.call(y2);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var _ = ve(this.stopListeners), D2 = _.next(); !D2.done; D2 = _.next()) {
        var C = D2.value;
        C(), this.stopListeners.delete(C);
      }
    } catch (F2) {
      n = { error: F2 };
    } finally {
      try {
        D2 && !D2.done && (a = _.return) && a.call(_);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var j = ve(this.contextListeners), L = j.next(); !L.done; L = j.next()) {
        var C = L.value;
        this.contextListeners.delete(C);
      }
    } catch (F2) {
      u2 = { error: F2 };
    } finally {
      try {
        L && !L.done && (d2 = j.return) && d2.call(j);
      } finally {
        if (u2)
          throw u2.error;
      }
    }
    try {
      for (var W = ve(this.doneListeners), O2 = W.next(); !O2.done; O2 = W.next()) {
        var C = O2.value;
        this.doneListeners.delete(C);
      }
    } catch (F2) {
      v = { error: F2 };
    } finally {
      try {
        O2 && !O2.done && (m2 = W.return) && m2.call(W);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    Re([], me(this.state.configuration), false).sort(function(F2, Z) {
      return Z.order - F2.order;
    }).forEach(function(F2) {
      var Z, ne;
      try {
        for (var re = ve(F2.definition.exit), pe = re.next(); !pe.done; pe = re.next()) {
          var U = pe.value;
          M2.exec(U, M2.state);
        }
      } catch (ue) {
        Z = { error: ue };
      } finally {
        try {
          pe && !pe.done && (ne = re.return) && ne.call(re);
        } finally {
          if (Z)
            throw Z.error;
        }
      }
    }), this.children.forEach(function(F2) {
      Se(F2.stop) && F2.stop();
    });
    try {
      for (var B = ve(Object.keys(this.delayedEventsMap)), P = B.next(); !P.done; P = B.next()) {
        var N2 = P.value;
        this.clock.clearTimeout(this.delayedEventsMap[N2]);
      }
    } catch (F2) {
      E = { error: F2 };
    } finally {
      try {
        P && !P.done && (w2 = B.return) && w2.call(B);
      } finally {
        if (E)
          throw E.error;
      }
    }
    return this.scheduler.clear(), this.initialized = false, this.status = yt.Stopped, Qi.free(this.sessionId), this;
  }, t.prototype.batch = function(r) {
    var e = this;
    if (this.status === yt.NotStarted && this.options.deferEvents)
      Le || We(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== yt.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var n, a, u2 = e.state, d2 = false, v = [], m2 = c2(function(y2) {
        var x = rt(y2);
        e.forward(x), u2 = Mn(e, function() {
          return e.machine.transition(u2, x);
        }), v.push.apply(v, Re([], me(u2.actions.map(function(C) {
          return hc(C, u2);
        })), false)), d2 = d2 || !!u2.changed;
      }, "_loop_1");
      try {
        for (var E = ve(r), w2 = E.next(); !w2.done; w2 = E.next()) {
          var M2 = w2.value;
          m2(M2);
        }
      } catch (y2) {
        n = { error: y2 };
      } finally {
        try {
          w2 && !w2.done && (a = E.return) && a.call(E);
        } finally {
          if (n)
            throw n.error;
        }
      }
      u2.changed = d2, u2.actions = v, e.update(u2, rt(r[r.length - 1]));
    });
  }, t.prototype.sender = function(r) {
    return this.send.bind(this, r);
  }, t.prototype.nextState = function(r) {
    var e = this, n = rt(r);
    if (n.name.indexOf(Ms) === 0 && !this.state.nextEvents.some(function(u2) {
      return u2.indexOf(Ms) === 0;
    }))
      throw n.data.data;
    var a = Mn(this, function() {
      return e.machine.transition(e.state, n);
    });
    return a;
  }, t.prototype.forward = function(r) {
    var e, n;
    try {
      for (var a = ve(this.forwardTo), u2 = a.next(); !u2.done; u2 = a.next()) {
        var d2 = u2.value, v = this.children.get(d2);
        if (!v)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d2, "'."));
        v.send(r);
      }
    } catch (m2) {
      e = { error: m2 };
    } finally {
      try {
        u2 && !u2.done && (n = a.return) && n.call(a);
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
    var a = e.context, u2 = e._event, d2 = r.exec || pa(r.type, n), v = Se(d2) ? d2 : d2 ? d2.exec : r.exec;
    if (v)
      try {
        return v(a, u2.data, { action: r, state: this.state, _event: u2 });
      } catch (O2) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: O2 }), O2;
      }
    switch (r.type) {
      case Sn:
        var m2 = r;
        if (typeof m2.delay == "number") {
          this.defer(m2);
          return;
        } else
          m2.to ? this.sendTo(m2._event, m2.to) : this.send(m2._event);
        break;
      case ea:
        this.cancel(r.sendId);
        break;
      case ji: {
        if (this.status !== yt.Running)
          return;
        var E = r.activity;
        if (!this.state.activities[E.id || E.type])
          break;
        if (E.type === Ee.Invoke) {
          var w2 = ca(E.src), M2 = this.machine.options.services ? this.machine.options.services[w2.type] : void 0, y2 = E.id, x = E.data;
          Le || We(!("forward" in E), "`forward` property is deprecated (found in invocation of '".concat(E.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var C = "autoForward" in E ? E.autoForward : !!E.forward;
          if (!M2) {
            Le || We(false, "No service found for invocation '".concat(E.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var _ = x ? Tn(x, a, u2) : void 0;
          if (typeof M2 == "string")
            return;
          var D2 = Se(M2) ? M2(a, u2.data, { data: _, src: w2, meta: E.meta }) : M2;
          if (!D2)
            return;
          var j = void 0;
          wr(D2) && (D2 = _ ? D2.withContext(_) : D2, j = { autoForward: C }), this.spawn(D2, y2, j);
        } else
          this.spawnActivity(E);
        break;
      }
      case ni: {
        this.stopChild(r.activity.id);
        break;
      }
      case ta:
        var L = r.label, W = r.value;
        L ? this.logger(L, W) : this.logger(W);
        break;
      default:
        Le || We(false, "No implementation found for action type '".concat(r.type, "'"));
        break;
    }
  }, t.prototype.removeChild = function(r) {
    var e;
    this.children.delete(r), this.forwardTo.delete(r), (e = this.state) === null || e === void 0 || delete e.children[r];
  }, t.prototype.stopChild = function(r) {
    var e = this.children.get(r);
    !e || (this.removeChild(r), Se(e.stop) && e.stop());
  }, t.prototype.spawn = function(r, e, n) {
    if (Ds(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (Se(r))
      return this.spawnCallback(r, e);
    if (sc(r))
      return this.spawnActor(r, e);
    if (Xu(r))
      return this.spawnObservable(r, e);
    if (wr(r))
      return this.spawnMachine(r, V(V({}, n), { id: e }));
    if (Uu(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var a = new t(r, V(V({}, this.options), { parent: this, id: e.id || r.id })), u2 = V(V({}, kf), e);
    u2.sync && a.onTransition(function(v) {
      n.send($i, { state: v, id: a.id });
    });
    var d2 = a;
    return this.children.set(a.id, d2), u2.autoForward && this.forwardTo.add(a.id), a.onDone(function(v) {
      n.removeChild(a.id), n.send(rt(v, { origin: a.id }));
    }).start(), d2;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = mc(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, a = this, u2 = false, d2;
    r.then(function(m2) {
      u2 || (d2 = m2, a.removeChild(e), a.send(rt(li(e, m2), { origin: e })));
    }, function(m2) {
      if (!u2) {
        a.removeChild(e);
        var E = _n(e, m2);
        try {
          a.send(rt(E, { origin: e }));
        } catch (w2) {
          Ku(m2, w2, e), a.devTools && a.devTools.send(E, a.state), a.machine.strict && a.stop();
        }
      }
    });
    var v = (n = { id: e, send: function() {
    }, subscribe: function(m2, E, w2) {
      var M2 = Vi(m2, E, w2), y2 = false;
      return r.then(function(x) {
        y2 || (M2.next(x), !y2 && M2.complete());
      }, function(x) {
        y2 || M2.error(x);
      }), { unsubscribe: function() {
        return y2 = true;
      } };
    }, stop: function() {
      u2 = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return d2;
    } }, n[xr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnCallback = function(r, e) {
    var n, a = this, u2 = false, d2 = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m2, E = c2(function(y2) {
      m2 = y2, v.forEach(function(x) {
        return x(y2);
      }), !u2 && a.send(rt(y2, { origin: e }));
    }, "receive"), w2;
    try {
      w2 = r(E, function(y2) {
        d2.add(y2);
      });
    } catch (y2) {
      this.send(_n(e, y2));
    }
    if (Ds(w2))
      return this.spawnPromise(w2, e);
    var M2 = (n = { id: e, send: function(y2) {
      return d2.forEach(function(x) {
        return x(y2);
      });
    }, subscribe: function(y2) {
      var x = Vi(y2);
      return v.add(x.next), { unsubscribe: function() {
        v.delete(x.next);
      } };
    }, stop: function() {
      u2 = true, Se(w2) && w2();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return m2;
    } }, n[xr] = function() {
      return this;
    }, n);
    return this.children.set(e, M2), M2;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, a = this, u2, d2 = r.subscribe(function(m2) {
      u2 = m2, a.send(rt(m2, { origin: e }));
    }, function(m2) {
      a.removeChild(e), a.send(rt(_n(e, m2), { origin: e }));
    }, function() {
      a.removeChild(e), a.send(rt(li(e), { origin: e }));
    }), v = (n = { id: e, send: function() {
    }, subscribe: function(m2, E, w2) {
      return r.subscribe(m2, E, w2);
    }, stop: function() {
      return d2.unsubscribe();
    }, getSnapshot: function() {
      return u2;
    }, toJSON: function() {
      return { id: e };
    } }, n[xr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnActor = function(r, e) {
    return this.children.set(e, r), r;
  }, t.prototype.spawnActivity = function(r) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!e) {
      Le || We(false, "No implementation found for activity '".concat(r.type, "'"));
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
    } }, n[xr] = function() {
      return this;
    }, n));
  }, t.prototype.attachDev = function() {
    var r = ha();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      vc(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[xr] = function() {
    return this;
  }, t.prototype.getSnapshot = function() {
    return this.status === yt.NotStarted ? this.initialState : this._state;
  }, t.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, e) {
    return setTimeout(r, e);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, t.interpret = Ke, t;
}();
function Ke(t, r) {
  var e = new gc(t, r);
  return e;
}
__name(Ke, "Ke");
c2(Ke, "interpret");
function Nf(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(Nf, "Nf");
c2(Nf, "toInvokeSource");
function eo(t) {
  return V(V({ type: Bi }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = ri(t, ["onDone", "onError"]);
    return V(V({}, r), { type: Bi, src: Nf(t.src) });
  } });
}
__name(eo, "eo");
c2(eo, "toInvokeDefinition");
var pi = "";
var Bs = "#";
var to = "*";
var ui = {};
var ci = c2(function(t) {
  return t[0] === Bs;
}, "isStateId");
var Gf = c2(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Lf = c2(function(t, r, e) {
  var n = e.slice(0, -1).some(function(u2) {
    return !("cond" in u2) && !("in" in u2) && (ge(u2.target) || wr(u2.target));
  }), a = r === pi ? "the transient event" : "event '".concat(r, "'");
  We(!n, "One or more transitions for ".concat(a, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var bc = function() {
  function t(r, e, n, a) {
    var u2 = this;
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var d2;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Gf(), e), this.parent = a == null ? void 0 : a.parent, this.key = this.config.key || (a == null ? void 0 : a.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ra), this.id = this.config.id || Re([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d2 = this.config.schema) !== null && d2 !== void 0 ? d2 : {}, this.description = this.config.description, Le || We(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ai(this.config.states, function(E, w2) {
      var M2, y2 = new t(E, {}, void 0, { parent: u2, key: w2 });
      return Object.assign(u2.idMap, V((M2 = {}, M2[y2.id] = y2, M2), y2.idMap)), y2;
    }) : ui;
    var v = 0;
    function m2(E) {
      var w2, M2;
      E.order = v++;
      try {
        for (var y2 = ve(An(E)), x = y2.next(); !x.done; x = y2.next()) {
          var C = x.value;
          m2(C);
        }
      } catch (_) {
        w2 = { error: _ };
      } finally {
        try {
          x && !x.done && (M2 = y2.return) && M2.call(y2);
        } finally {
          if (w2)
            throw w2.error;
        }
      }
    }
    __name(m2, "m");
    c2(m2, "dfs"), m2(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(E) {
      var w2 = E.event;
      return w2 === pi;
    }) : pi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = jt(this.config.entry || this.config.onEntry).map(function(E) {
      return si(E);
    }), this.onExit = jt(this.config.exit || this.config.onExit).map(function(E) {
      return si(E);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = jt(this.config.invoke).map(function(E, w2) {
      var M2, y2;
      if (wr(E)) {
        var x = Xi(u2.id, w2);
        return u2.machine.options.services = V((M2 = {}, M2[x] = E, M2), u2.machine.options.services), eo({ src: x, id: x });
      } else if (ge(E.src)) {
        var x = E.id || Xi(u2.id, w2);
        return eo(V(V({}, E), { id: x, src: E.src }));
      } else if (wr(E.src) || Se(E.src)) {
        var x = E.id || Xi(u2.id, w2);
        return u2.machine.options.services = V((y2 = {}, y2[x] = E.src, y2), u2.machine.options.services), eo(V(V({ id: x }, E), { src: x }));
      } else {
        var C = E.src;
        return eo(V(V({ id: Xi(u2.id, w2) }, E), { src: C }));
      }
    }), this.activities = jt(this.config.activities).concat(this.invoke).map(function(E) {
      return fa(E);
    }), this.transition = this.transition.bind(this), this.tags = jt(this.config.tags);
  }
  __name(t, "t");
  return c2(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Ns(this).forEach(function(r) {
      return r.on;
    });
  }, t.prototype.withConfig = function(r, e) {
    var n = this.options, a = n.actions, u2 = n.activities, d2 = n.guards, v = n.services, m2 = n.delays;
    return new t(this.config, { actions: V(V({}, a), r.actions), activities: V(V({}, u2), r.activities), guards: V(V({}, d2), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m2), r.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(r) {
    return new t(this.config, this.options, r);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return Se(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ai(this.states, function(r) {
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
    var e = r === pi, n = this.transitions.filter(function(a) {
      var u2 = a.eventType === r;
      return e ? u2 : u2 || a.eventType === to;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = c2(function(u2, d2) {
      var v = Se(u2) ? "".concat(r.id, ":delay[").concat(d2, "]") : u2, m2 = rc(v, r.id);
      return r.onEntry.push(zs(m2, { delay: u2 })), r.onExit.push(Qu(m2)), m2;
    }, "mutateEntryExit"), a = Nr(e) ? e.map(function(u2, d2) {
      var v = n(u2.delay, d2);
      return V(V({}, u2), { event: v });
    }) : ke(Object.keys(e).map(function(u2, d2) {
      var v = e[u2], m2 = ge(v) ? { target: v } : v, E = isNaN(+u2) ? u2 : +u2, w2 = n(E, d2);
      return jt(m2).map(function(M2) {
        return V(V({}, M2), { event: w2, delay: E });
      });
    }));
    return a.map(function(u2) {
      var d2 = u2.delay;
      return V(V({}, r.formatTransition(u2)), { delay: d2 });
    });
  }, t.prototype.getStateNodes = function(r) {
    var e, n = this;
    if (!r)
      return [];
    var a = r instanceof hr ? r.value : oi(r, this.delimiter);
    if (ge(a)) {
      var u2 = this.getStateNode(a).initial;
      return u2 !== void 0 ? this.getStateNodes((e = {}, e[a] = u2, e)) : [this, this.states[a]];
    }
    var d2 = Object.keys(a), v = [this];
    return v.push.apply(v, Re([], me(ke(d2.map(function(m2) {
      return n.getStateNode(m2).getStateNodes(a[m2]);
    }))), false)), v;
  }, t.prototype.handles = function(r) {
    var e = oa(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof hr ? r : hr.create(r), n = Array.from(Pn([], this.getStateNodes(e.value)));
    return new hr(V(V({}, e), { value: this.resolve(e.value), configuration: n, done: In(n, this), tags: Gs(n), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(r, e, n) {
    var a = this.getStateNode(r), u2 = a.next(e, n);
    return !u2 || !u2.transitions.length ? this.next(e, n) : u2;
  }, t.prototype.transitionCompoundNode = function(r, e, n) {
    var a = Object.keys(r), u2 = this.getStateNode(a[0]), d2 = u2._transition(r[a[0]], e, n);
    return !d2 || !d2.transitions.length ? this.next(e, n) : d2;
  }, t.prototype.transitionParallelNode = function(r, e, n) {
    var a, u2, d2 = {};
    try {
      for (var v = ve(Object.keys(r)), m2 = v.next(); !m2.done; m2 = v.next()) {
        var E = m2.value, w2 = r[E];
        if (!!w2) {
          var M2 = this.getStateNode(E), y2 = M2._transition(w2, e, n);
          y2 && (d2[E] = y2);
        }
      }
    } catch (L) {
      a = { error: L };
    } finally {
      try {
        m2 && !m2.done && (u2 = v.return) && u2.call(v);
      } finally {
        if (a)
          throw a.error;
      }
    }
    var x = Object.keys(d2).map(function(L) {
      return d2[L];
    }), C = ke(x.map(function(L) {
      return L.transitions;
    })), _ = x.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!_)
      return this.next(e, n);
    var D2 = ke(x.map(function(L) {
      return L.entrySet;
    })), j = ke(Object.keys(d2).map(function(L) {
      return d2[L].configuration;
    }));
    return { transitions: C, entrySet: D2, exitSet: ke(x.map(function(L) {
      return L.exitSet;
    })), configuration: j, source: e, actions: ke(Object.keys(d2).map(function(L) {
      return d2[L].actions;
    })) };
  }, t.prototype._transition = function(r, e, n) {
    return ge(r) ? this.transitionLeafNode(r, e, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, e, n) : this.transitionParallelNode(r, e, n);
  }, t.prototype.getTransitionData = function(r, e) {
    return this._transition(r.value, r, rt(e));
  }, t.prototype.next = function(r, e) {
    var n, a, u2 = this, d2 = e.name, v = [], m2 = [], E;
    try {
      for (var w2 = ve(this.getCandidates(d2)), M2 = w2.next(); !M2.done; M2 = w2.next()) {
        var y2 = M2.value, x = y2.cond, C = y2.in, _ = r.context, D2 = C ? ge(C) && ci(C) ? r.matches(oi(this.getStateNodeById(C).path, this.delimiter)) : Fi(oi(C, this.delimiter), Bu(this.path.slice(0, -2))(r.value)) : true, j = false;
        try {
          j = !x || ua(this.machine, x, _, e, r);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(x.name || x.type, "' in transition for event '").concat(d2, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (j && D2) {
          y2.target !== void 0 && (m2 = y2.target), v.push.apply(v, Re([], me(y2.actions), false)), E = y2;
          break;
        }
      }
    } catch (B) {
      n = { error: B };
    } finally {
      try {
        M2 && !M2.done && (a = w2.return) && a.call(w2);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (!!E) {
      if (!m2.length)
        return { transitions: [E], entrySet: [], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: v };
      var L = ke(m2.map(function(B) {
        return u2.getRelativeStateNodes(B, r.historyValue);
      })), W = !!E.internal, O2 = W ? [] : ke(L.map(function(B) {
        return u2.nodesFromChild(B);
      }));
      return { transitions: [E], entrySet: O2, exitSet: W ? [] : [this], configuration: L, source: r, actions: v };
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
    var u2, d2, v, m2, E = Pn([], a ? this.getStateNodes(a.value) : [this]), w2 = r.configuration.length ? Pn(E, r.configuration) : E;
    try {
      for (var M2 = ve(w2), y2 = M2.next(); !y2.done; y2 = M2.next()) {
        var x = y2.value;
        Ji(E, x) || r.entrySet.push(x);
      }
    } catch (N2) {
      u2 = { error: N2 };
    } finally {
      try {
        y2 && !y2.done && (d2 = M2.return) && d2.call(M2);
      } finally {
        if (u2)
          throw u2.error;
      }
    }
    try {
      for (var C = ve(E), _ = C.next(); !_.done; _ = C.next()) {
        var x = _.value;
        (!Ji(w2, x) || Ji(r.exitSet, x.parent)) && r.exitSet.push(x);
      }
    } catch (N2) {
      v = { error: N2 };
    } finally {
      try {
        _ && !_.done && (m2 = C.return) && m2.call(C);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var D2 = ke(r.entrySet.map(function(N2) {
      var F2 = [];
      if (N2.type !== "final")
        return F2;
      var Z = N2.parent;
      if (!Z.parent)
        return F2;
      F2.push(Zi(N2.id, N2.doneData), Zi(Z.id, N2.doneData ? Tn(N2.doneData, e, n) : void 0));
      var ne = Z.parent;
      return ne.type === "parallel" && An(ne).every(function(re) {
        return In(r.configuration, re);
      }) && F2.push(Zi(ne.id)), F2;
    }));
    r.exitSet.sort(function(N2, F2) {
      return F2.order - N2.order;
    }), r.entrySet.sort(function(N2, F2) {
      return N2.order - F2.order;
    });
    var j = new Set(r.entrySet), L = new Set(r.exitSet), W = me([ke(Array.from(j).map(function(N2) {
      return Re(Re([], me(N2.activities.map(function(F2) {
        return ec(F2);
      })), false), me(N2.onEntry), false);
    })).concat(D2.map(Ju)), ke(Array.from(L).map(function(N2) {
      return Re(Re([], me(N2.onExit), false), me(N2.activities.map(function(F2) {
        return tc(F2);
      })), false);
    }))], 2), O2 = W[0], B = W[1], P = Yi(B.concat(r.actions).concat(O2), this.machine.options.actions);
    return P;
  }, t.prototype.transition = function(r, e, n) {
    r === void 0 && (r = this.initialState);
    var a = rt(e), u2;
    if (r instanceof hr)
      u2 = n === void 0 ? r : this.resolveState(hr.from(r, n));
    else {
      var d2 = ge(r) ? this.resolve(Hi(this.getResolvedPath(r))) : this.resolve(r), v = n != null ? n : this.machine.context;
      u2 = this.resolveState(hr.from(d2, v));
    }
    if (!Le && a.name === to)
      throw new Error("An event cannot have the wildcard type ('".concat(to, "')"));
    if (this.strict && !this.events.includes(a.name) && !Fu(a.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
    var m2 = this._transition(u2.value, u2, a) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: u2, actions: [] }, E = Pn([], this.getStateNodes(u2.value)), w2 = m2.configuration.length ? Pn(E, m2.configuration) : E;
    return m2.configuration = Re([], me(w2), false), this.resolveTransition(m2, u2, u2.context, a);
  }, t.prototype.resolveRaisedTransition = function(r, e, n) {
    var a, u2 = r.actions;
    return r = this.transition(r, e), r._event = n, r.event = n.data, (a = r.actions).unshift.apply(a, Re([], me(u2), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, a) {
    var u2, d2, v = this;
    a === void 0 && (a = Cn);
    var m2 = r.configuration, E = !e || r.transitions.length > 0, w2 = E ? cc(this.machine, m2) : void 0, M2 = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, y2 = this.getActions(r, n, a, e), x = e ? V({}, e.activities) : {};
    try {
      for (var C = ve(y2), _ = C.next(); !_.done; _ = C.next()) {
        var D2 = _.value;
        D2.type === ji ? x[D2.activity.id || D2.activity.type] = D2 : D2.type === ni && (x[D2.activity.id || D2.activity.type] = false);
      }
    } catch (fe) {
      u2 = { error: fe };
    } finally {
      try {
        _ && !_.done && (d2 = C.return) && d2.call(C);
      } finally {
        if (u2)
          throw u2.error;
      }
    }
    var j = me(da(this, e, n, a, y2, this.machine.config.preserveActionOrder), 2), L = j[0], W = j[1], O2 = me(sa(L, function(fe) {
      return fe.type === ii || fe.type === Sn && fe.to === en.Internal;
    }), 2), B = O2[0], P = O2[1], N2 = L.filter(function(fe) {
      var Ze;
      return fe.type === ji && ((Ze = fe.activity) === null || Ze === void 0 ? void 0 : Ze.type) === Bi;
    }), F2 = N2.reduce(function(fe, Ze) {
      return fe[Ze.activity.id] = oc(Ze.activity, v.machine, W, a), fe;
    }, e ? V({}, e.children) : {}), Z = E ? r.configuration : e ? e.configuration : [], ne = In(Z, this), re = new hr({ value: w2 || e.value, context: W, _event: a, _sessionid: e ? e._sessionid : null, historyValue: w2 ? M2 ? Vu(M2, w2) : void 0 : e ? e.historyValue : void 0, history: !w2 || r.source ? e : void 0, actions: w2 ? P : [], activities: w2 ? x : e ? e.activities : {}, events: [], configuration: Z, transitions: r.transitions, children: F2, done: ne, tags: e == null ? void 0 : e.tags, machine: this }), pe = n !== W;
    re.changed = a.name === $i || pe;
    var U = re.history;
    U && delete U.history;
    var ue = !ne && (this._transient || m2.some(function(fe) {
      return fe._transient;
    }));
    if (!E && (!ue || a.name === pi))
      return re;
    var Pe = re;
    if (!ne)
      for (ue && (Pe = this.resolveRaisedTransition(Pe, { type: Nu }, a)); B.length; ) {
        var Ue = B.shift();
        Pe = this.resolveRaisedTransition(Pe, Ue._event, a);
      }
    var Ge = Pe.changed || (U ? !!Pe.actions.length || pe || typeof U.value != typeof Pe.value || !Ls(Pe.value, U.value) : void 0);
    return Pe.changed = Ge, Pe.history = U, Pe.tags = Gs(Pe.configuration), Pe;
  }, t.prototype.getStateNode = function(r) {
    if (ci(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[r];
    if (!e)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(r) {
    var e = ci(r) ? r.slice(Bs.length) : r;
    if (e === this.id)
      return this;
    var n = this.machine.idMap[e];
    if (!n)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, t.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && ci(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (u2) {
      }
    for (var e = aa(r, this.delimiter).slice(), n = this; e.length; ) {
      var a = e.shift();
      if (!a.length)
        break;
      n = n.getStateNode(a);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || ui;
    switch (this.type) {
      case "parallel":
        return ai(this.initialStateValue, function(u2, d2) {
          return u2 ? n.getStateNode(d2).resolve(r[d2] || u2) : ui;
        });
      case "compound":
        if (ge(r)) {
          var a = this.getStateNode(r);
          return a.type === "parallel" || a.type === "compound" ? (e = {}, e[r] = a.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? ai(r, function(u2, d2) {
          return u2 ? n.getStateNode(d2).resolve(u2) : ui;
        }) : this.initialStateValue || {};
      default:
        return r || ui;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (ci(r)) {
      var e = this.machine.idMap[r.slice(Bs.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return aa(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = Is(this.states, function(n) {
        return n.initialStateValue || ui;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = Ki(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
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
      ge(e.target) ? r = ci(e.target) ? Hi(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (Ki(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || We(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = Ui(this.initialStateValue);
    return ke(e.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var e = me(r), n = e[0], a = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var u2 = this.getStateNode(n);
    if (u2.type === "history")
      return u2.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(a);
  }, t.prototype.historyValue = function(r) {
    if (!!Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: Is(this.states, function(e, n) {
        if (!r)
          return e.historyValue();
        var a = ge(r) ? void 0 : r[n];
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
      return a ? ke(Ui(a).map(function(d2) {
        return n.getFromRelativePath(d2);
      })) : n.initialStateNodes;
    }
    var u2 = $u(n.path, "states")(r).current;
    return ge(u2) ? [n.getStateNode(u2)] : ke(Ui(u2).map(function(d2) {
      return e.history === "deep" ? n.getFromRelativePath(d2) : [n.states[d2[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var r = this, e = ke(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "events", { get: function() {
    var r, e, n, a;
    if (this.__cache.events)
      return this.__cache.events;
    var u2 = this.states, d2 = new Set(this.ownEvents);
    if (u2)
      try {
        for (var v = ve(Object.keys(u2)), m2 = v.next(); !m2.done; m2 = v.next()) {
          var E = m2.value, w2 = u2[E];
          if (w2.states)
            try {
              for (var M2 = (n = void 0, ve(w2.events)), y2 = M2.next(); !y2.done; y2 = M2.next()) {
                var x = y2.value;
                d2.add("".concat(x));
              }
            } catch (C) {
              n = { error: C };
            } finally {
              try {
                y2 && !y2.done && (a = M2.return) && a.call(M2);
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
          m2 && !m2.done && (e = v.return) && e.call(v);
        } finally {
          if (r)
            throw r.error;
        }
      }
    return this.__cache.events = Array.from(d2);
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
        if (!ge(n))
          return n;
        var a = n[0] === e.delimiter;
        if (a && !e.parent)
          return e.getStateNodeByPath(n.slice(1));
        var u2 = a ? e.key + n : n;
        if (e.parent)
          try {
            var d2 = e.parent.getStateNodeByPath(u2);
            return d2;
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(v.message));
          }
        else
          return e.getStateNodeByPath(u2);
      });
  }, t.prototype.formatTransition = function(r) {
    var e = this, n = Zu(r.target), a = "internal" in r ? r.internal : n ? n.some(function(m2) {
      return ge(m2) && m2[0] === e.delimiter;
    }) : true, u2 = this.machine.options.guards, d2 = this.resolveTarget(n), v = V(V({}, r), { actions: Yi(jt(r.actions)), cond: la(r.cond, u2), target: d2, source: this, internal: a, eventType: r.event, toJSON: function() {
      return V(V({}, v), { target: v.target ? v.target.map(function(m2) {
        return "#".concat(m2.id);
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
      var u2 = this.config.on, d2 = to, v = u2[d2], m2 = v === void 0 ? [] : v, E = ri(u2, [typeof d2 == "symbol" ? d2 : d2 + ""]);
      a = ke(Object.keys(E).map(function(L) {
        !Le && L === pi && We(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var W = On(L, E[L]);
        return Le || Lf(n, L, W), W;
      }).concat(On(to, m2)));
    }
    var w2 = this.config.always ? On("", this.config.always) : [], M2 = this.config.onDone ? On(String(Zi(this.id)), this.config.onDone) : [];
    Le || We(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var y2 = ke(this.invoke.map(function(L) {
      var W = [];
      return L.onDone && W.push.apply(W, Re([], me(On(String(li(L.id)), L.onDone)), false)), L.onError && W.push.apply(W, Re([], me(On(String(_n(L.id)), L.onError)), false)), W;
    })), x = this.after, C = ke(Re(Re(Re(Re([], me(M2), false), me(y2), false), me(a), false), me(w2), false).map(function(L) {
      return jt(L).map(function(W) {
        return n.formatTransition(W);
      });
    }));
    try {
      for (var _ = ve(x), D2 = _.next(); !D2.done; D2 = _.next()) {
        var j = D2.value;
        C.push(j);
      }
    } catch (L) {
      r = { error: L };
    } finally {
      try {
        D2 && !D2.done && (e = _.return) && e.call(_);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return C;
  }, t;
}();
function nt(t, r) {
  return new bc(t, r);
}
__name(nt, "nt");
c2(nt, "createMachine");
var tn = Zo(xc());
function wc(t) {
  let r = rn(t);
  return new tn.default(r).valueOf() * Math.PI;
}
__name(wc, "wc");
c2(wc, "V");
function no(t) {
  let r = rn(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(no, "no");
c2(no, "X");
function Ec(t, r) {
  return new tn.default(rn(t)).valueOf() < new tn.default(rn(r)).valueOf();
}
__name(Ec, "Ec");
c2(Ec, "W");
function Sc(t, r) {
  return new tn.default(rn(t)).valueOf() > new tn.default(rn(r)).valueOf();
}
__name(Sc, "Sc");
c2(Sc, "H");
function Tc(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let r = rn(t);
    return new tn.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(Tc, "Tc");
c2(Tc, "Q");
function rn(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(rn, "rn");
c2(rn, "l");
function Oc(t) {
  try {
    let r = rn(t), e = new tn.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(Oc, "Oc");
c2(Oc, "J");
var qf = Object.prototype.toString.call({});
var jf = "!recursion-limit!";
var Bf = 10;
function it(t, r = Bf) {
  return $f(t) || Hf(t, r) || Ff(t, r);
}
__name(it, "it");
c2(it, "c");
function $f(t) {
  if (t === null)
    return "null";
  if (t === void 0)
    return "undefined";
  if (typeof t == "string")
    return `"${t}"`;
  if (typeof t == "number")
    return String(t);
}
__name($f, "$f");
c2($f, "M");
function Hf(t, r) {
  if (r === 0)
    return jf;
  if (t instanceof Map)
    return Uf(t, r);
  if (t instanceof Set)
    return Wf(t, r);
  if (((e) => e[Symbol.iterator] !== void 0)(t))
    return Vf(t, r);
}
__name(Hf, "Hf");
c2(Hf, "O");
function Ff(t, r) {
  let e = String(t);
  return e !== qf ? e : Xf(t, r);
}
__name(Ff, "Ff");
c2(Ff, "F");
function Uf(t, r) {
  let e = [];
  for (let [n, a] of t.entries()) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let u2 = it(n, r - 1), d2 = it(a, r - 1);
    e.push(`${u2}: ${d2}`);
  }
  return `Map{${e.join(", ")}}`;
}
__name(Uf, "Uf");
c2(Uf, "G");
function Wf(t, r) {
  let e = [];
  for (let n of t) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(it(n, r - 1));
  }
  return `Set{${e.join(", ")}}`;
}
__name(Wf, "Wf");
c2(Wf, "R");
function Vf(t, r) {
  let e = [];
  for (let n of t) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(it(n, r - 1));
  }
  return `${Array.isArray(t) ? "" : t.constructor.name}[${e.join(", ")}]`;
}
__name(Vf, "Vf");
c2(Vf, "N");
function Xf(t, r) {
  let e = [];
  for (let a in t) {
    if (!Object.prototype.hasOwnProperty.call(t, a))
      continue;
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let u2 = t[a], d2 = it(a, r - 1), v = it(u2, r - 1);
    e.push(`${d2}: ${v}`);
  }
  let n = t.constructor.name;
  return `${n === {}.constructor.name ? "" : `(Type: ${n})`}{${e.join(", ")}}`;
}
__name(Xf, "Xf");
c2(Xf, "q");
var Hs = 0;
var Gr = c2(class extends Error {
  constructor(t, r) {
    super(t), this.detailsObj = r, this.name = "Error", this.message = t, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Hs++;
    try {
      this.details = Hs === 1 ? it(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Hs--;
    }
  }
}, "d");
var Yf = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var Bt = c2(class {
  static parseFloat(t) {
    if (t.length === 0)
      throw new Error(`Not a number: '${t}'`);
    if (t[0] === "-")
      return -Bt.parseFloat(t.substr(1));
    if (t[0] === "\u221A")
      return Math.sqrt(Bt.parseFloat(t.substr(1)));
    let r = Bt.matchUnicodeFraction((n) => n.character === t);
    if (r !== void 0)
      return r.value;
    let e = parseFloat(t);
    if (isNaN(e))
      throw new Error(`Not a number: '${t}'`);
    return e;
  }
  static simplifyByRounding(t, r) {
    if (t < 0)
      return -Bt.simplifyByRounding(-t, r);
    let e = t % 1;
    if (e <= r || 1 - e <= r)
      return Math.round(t);
    let n = Bt.matchUnicodeFraction((u2) => Math.abs(u2.value - t) <= r);
    if (n !== void 0)
      return n.value;
    let a = Bt.matchUnicodeFraction((u2) => Math.abs(Math.sqrt(u2.value) - t) <= r);
    return a !== void 0 ? Math.sqrt(a.value) : t;
  }
  static matchUnicodeFraction(t) {
    for (let r of Yf)
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
    let n = Bt.matchUnicodeFraction((u2) => Math.abs(u2.value - t) <= r);
    if (n !== void 0)
      return n.character;
    let a = Bt.matchUnicodeFraction((u2) => Math.abs(Math.sqrt(u2.value) - t) <= r);
    return a !== void 0 ? `\u221A${a.character}` : t % 1 !== 0 && e !== void 0 ? t.toFixed(e) : t.toString();
  }
}, "u");
var ro = Bt;
ro.CONSISTENT = new Bt(false, 0, 2, ", "), ro.EXACT = new Bt(true, 0, void 0, ", "), ro.MINIFIED = new Bt(true, 0, void 0, ","), ro.SIMPLIFIED = new Bt(true, 5e-4, 3, ", ");
var le = c2(class {
  static need(t, r, e) {
    if (t !== true) {
      let n = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, a = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${n}`;
      throw new Error(a);
    }
  }
  static notNull(t) {
    le.need(t != null, "notNull");
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
var de = c2(class {
  static from(t) {
    if (t instanceof de)
      return t;
    if (typeof t == "number")
      return new de(t, 0);
    throw new Gr("Unrecognized value type.", { v: t });
  }
  static polar(t, r) {
    let [e, n] = le.snappedCosSin(r);
    return new de(t * e, t * n);
  }
  static realPartOf(t) {
    if (t instanceof de)
      return t.real;
    if (typeof t == "number")
      return t;
    throw new Gr("Unrecognized value type.", { v: t });
  }
  static imagPartOf(t) {
    if (t instanceof de)
      return t.imag;
    if (typeof t == "number")
      return 0;
    throw new Gr("Unrecognized value type.", { v: t });
  }
  constructor(t, r) {
    this.real = t, this.imag = r;
  }
  static rootsOfQuadratic(t, r, e) {
    if (t = de.from(t), r = de.from(r), e = de.from(e), t.isEqualTo(0)) {
      if (!r.isEqualTo(0))
        return [e.times(-1).dividedBy(r)];
      if (!e.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let n = r.times(r).minus(t.times(e).times(4)).sqrts(), a = r.times(-1), u2 = t.times(2);
    return n.map((d2) => a.minus(d2).dividedBy(u2));
  }
  isEqualTo(t) {
    return t instanceof de ? this.real === t.real && this.imag === t.imag : typeof t == "number" ? this.real === t && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(t, r) {
    if (t instanceof de || typeof t == "number") {
      let e = this.minus(de.from(t));
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
    return t < 1e-5 ? de.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t));
  }
  plus(t) {
    let r = de.from(t);
    return new de(this.real + r.real, this.imag + r.imag);
  }
  minus(t) {
    let r = de.from(t);
    return new de(this.real - r.real, this.imag - r.imag);
  }
  times(t) {
    let r = de.from(t);
    return new de(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(t) {
    let r = de.from(t), e = r.norm2();
    if (e === 0)
      throw new Error("Division by Zero");
    let n = this.times(r.conjugate());
    return new de(n.real / e, n.imag / e);
  }
  sqrts() {
    let [t, r] = [this.real, this.imag], e = Math.sqrt(Math.sqrt(t * t + r * r));
    if (e === 0)
      return [de.ZERO];
    if (r === 0 && t < 0)
      return [new de(0, e), new de(0, -e)];
    let n = this.phase() / 2, a = de.polar(e, n);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new de(this.real, -this.imag);
  }
  toString(t) {
    return t = t || ro.EXACT, t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t);
  }
  neg() {
    return new de(-this.real, -this.imag);
  }
  raisedTo(t) {
    return t === 0.5 && this.imag === 0 && this.real >= 0 ? new de(Math.sqrt(this.real), 0) : de.ZERO.isEqualTo(t) ? de.ONE : this.isEqualTo(de.ZERO) ? de.ZERO : this.ln().times(de.from(t)).exp();
  }
  exp() {
    return de.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let t = this.times(de.I);
    return t.exp().plus(t.neg().exp()).times(0.5);
  }
  sin() {
    let t = this.times(de.I);
    return t.exp().minus(t.neg().exp()).dividedBy(new de(0, 2));
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
  toStringAllowSingleValue(t) {
    return Math.abs(this.imag) <= t.maxAbbreviationError ? t.formatFloat(this.real) : Math.abs(this.real) <= t.maxAbbreviationError ? Math.abs(this.imag - 1) <= t.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= t.maxAbbreviationError ? "-i" : `${t.formatFloat(this.imag)}i` : this.toStringBothValues(t);
  }
  toStringBothValues(t) {
    let r = this.imag >= 0 ? "+" : "-", e = t.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= t.maxAbbreviationError ? "" : t.formatFloat(Math.abs(this.imag));
    return `${(t.allowAbbreviation || t.fixedDigits === void 0 || this.real < 0 ? "" : "+") + t.formatFloat(this.real) + r + e}i`;
  }
}, "o");
var Lr = de;
Lr.ZERO = new de(0, 0), Lr.ONE = new de(1, 0), Lr.I = new de(0, 1);
var va = "H";
var ma = "X";
var ga = "Y";
var ba = "Z";
var ya = "P";
var xa = "T";
var wa = "X^\xBD";
var Ea = "Rx";
var Sa = "Ry";
var Ta = "Rz";
var Fs = "Swap";
var Us = "\u2022";
var Ws = "Bloch";
var Cc = "|0>";
var _c = "|1>";
var Oa = "Measure";
var io = Zo(Ca(), 1);
var _a = c2((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Xs = c2((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Ce(t) {
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
      this.draggableMachine = nt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { always: [{ target: "dragging", cond: "isOnCircuitDropzone" }], on: { START_DRAGGING: { target: "dragging" }, UNGRAB: [{ target: "deleted", actions: ["unGrab"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { entry: ["startDragging"], always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let a = (0, io.default)(this);
        a.styleCursor(false), a.on("down", this.grab.bind(this)), a.on("up", this.unGrab.bind(this)), a.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let u2 = this.dropzone;
        _a(u2) ? this.snappedDropzone = u2 : this.snappedDropzone = null;
      }, grab: (a, u2) => {
        u2.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), Xs(this.dropzone) && (this.snapped = false, this.moveByOffset(u2.x, u2.y)));
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
        (0, io.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => _a(this.dropzone), isOnPaletteDropzone: () => Xs(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && _a(this.dropzone), isTrashed: () => !this.snapped } });
    }
    get draggable() {
      return this.draggableService !== void 0;
    }
    set draggable(a) {
      this.maybeInitStateMachine(), a ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    get dropzone() {
      let a = this.parentElement;
      return le.notNull(a), !Xs(a) && !_a(a) ? null : a;
    }
    maybeInitStateMachine() {
      this.draggableService === void 0 && (this.draggableService = Ke(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${it(a.value)}`);
      }).start());
    }
    set snapTargets(a) {
      (0, io.default)(this).draggable({ modifiers: [io.default.modifiers.snap({ targets: a, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return this.offsetWidth;
    }
    moveEventListener(a) {
      let u2 = a.modifiers[0];
      if (u2.inRange) {
        let d2 = u2.target.source;
        this.dispatchEvent(new CustomEvent("operation-in-snap-range", { detail: { snapTargetInfo: d2 }, bubbles: true })), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(a) {
      this.draggableService.send({ type: "GRAB", x: a.offsetX, y: a.offsetY });
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
    dragMove(a) {
      this.move(a.dx, a.dy);
    }
    move(a, u2) {
      let d2 = this.operationX + a, v = this.operationY + u2;
      this.moveTo(d2, v);
    }
    moveTo(a, u2) {
      this.operationX = a, this.operationY = u2, this.style.transform = `translate(${a}px, ${u2}px)`;
    }
    moveByOffset(a, u2) {
      let d2 = a - this.clientWidth / 2, v = u2 - this.clientHeight / 2;
      this.move(d2, v);
    }
  }
  __name(r, "r");
  return c2(r, "DraggableMixinClass"), R2([q2], r.prototype, "operationX", 2), R2([q2], r.prototype, "operationY", 2), R2([q2], r.prototype, "grabbed", 2), R2([q2], r.prototype, "dragging", 2), R2([q2], r.prototype, "snapped", 2), R2([q2], r.prototype, "bit", 2), R2([q2], r.prototype, "debugDraggable", 2), r;
}
__name(Ce, "Ce");
c2(Ce, "DraggableMixin");
var Dn = c2((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function Ac(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(r, "r");
  return c2(r, "FlaggableMixinClass"), R2([q2], r.prototype, "flag", 2), r;
}
__name(Ac, "Ac");
c2(Ac, "FlaggableMixin");
var Fe = "top";
var ot = "bottom";
var Je = "right";
var Ve = "left";
var Ma = "auto";
var nn = [Fe, ot, Je, Ve];
var qr = "start";
var Rn = "end";
var Pc = "clippingParents";
var Aa = "viewport";
var di = "popper";
var Ic = "reference";
var Ys = nn.reduce(function(t, r) {
  return t.concat([r + "-" + qr, r + "-" + Rn]);
}, []);
var Pa = [].concat(nn, [Ma]).reduce(function(t, r) {
  return t.concat([r, r + "-" + qr, r + "-" + Rn]);
}, []);
var Zf = "beforeRead";
var Kf = "read";
var Jf = "afterRead";
var Qf = "beforeMain";
var eh = "main";
var th = "afterMain";
var rh = "beforeWrite";
var nh = "write";
var ih = "afterWrite";
var Dc = [Zf, Kf, Jf, Qf, eh, th, rh, nh, ih];
function lt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(lt, "lt");
c2(lt, "getNodeName");
function Xe(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var r = t.ownerDocument;
    return r && r.defaultView || window;
  }
  return t;
}
__name(Xe, "Xe");
c2(Xe, "getWindow");
function Er(t) {
  var r = Xe(t).Element;
  return t instanceof r || t instanceof Element;
}
__name(Er, "Er");
c2(Er, "isElement");
function at(t) {
  var r = Xe(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
__name(at, "at");
c2(at, "isHTMLElement");
function fi(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = Xe(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(fi, "fi");
c2(fi, "isShadowRoot");
function oh(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, a = r.attributes[e] || {}, u2 = r.elements[e];
    !at(u2) || !lt(u2) || (Object.assign(u2.style, n), Object.keys(a).forEach(function(d2) {
      var v = a[d2];
      v === false ? u2.removeAttribute(d2) : u2.setAttribute(d2, v === true ? "" : v);
    }));
  });
}
__name(oh, "oh");
c2(oh, "applyStyles");
function ah(t) {
  var r = t.state, e = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, e.popper), r.styles = e, r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var a = r.elements[n], u2 = r.attributes[n] || {}, d2 = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : e[n]), v = d2.reduce(function(m2, E) {
        return m2[E] = "", m2;
      }, {});
      !at(a) || !lt(a) || (Object.assign(a.style, v), Object.keys(u2).forEach(function(m2) {
        a.removeAttribute(m2);
      }));
    });
  };
}
__name(ah, "ah");
c2(ah, "effect");
var oo = { name: "applyStyles", enabled: true, phase: "write", fn: oh, effect: ah, requires: ["computeStyles"] };
function ut(t) {
  return t.split("-")[0];
}
__name(ut, "ut");
c2(ut, "getBasePlacement");
var vr = Math.max;
var zn = Math.min;
var jr = Math.round;
function ar(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, a = 1;
  if (at(t) && r) {
    var u2 = t.offsetHeight, d2 = t.offsetWidth;
    d2 > 0 && (n = jr(e.width) / d2 || 1), u2 > 0 && (a = jr(e.height) / u2 || 1);
  }
  return { width: e.width / n, height: e.height / a, top: e.top / a, right: e.right / n, bottom: e.bottom / a, left: e.left / n, x: e.left / n, y: e.top / a };
}
__name(ar, "ar");
c2(ar, "getBoundingClientRect");
function kn(t) {
  var r = ar(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name(kn, "kn");
c2(kn, "getLayoutRect");
function ao(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && fi(e)) {
    var n = r;
    do {
      if (n && t.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(ao, "ao");
c2(ao, "contains");
function Tt(t) {
  return Xe(t).getComputedStyle(t);
}
__name(Tt, "Tt");
c2(Tt, "getComputedStyle");
function Zs(t) {
  return ["table", "td", "th"].indexOf(lt(t)) >= 0;
}
__name(Zs, "Zs");
c2(Zs, "isTableElement");
function mt(t) {
  return ((Er(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(mt, "mt");
c2(mt, "getDocumentElement");
function Br(t) {
  return lt(t) === "html" ? t : t.assignedSlot || t.parentNode || (fi(t) ? t.host : null) || mt(t);
}
__name(Br, "Br");
c2(Br, "getParentNode");
function Rc(t) {
  return !at(t) || Tt(t).position === "fixed" ? null : t.offsetParent;
}
__name(Rc, "Rc");
c2(Rc, "getTrueOffsetParent");
function sh(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && at(t)) {
    var n = Tt(t);
    if (n.position === "fixed")
      return null;
  }
  var a = Br(t);
  for (fi(a) && (a = a.host); at(a) && ["html", "body"].indexOf(lt(a)) < 0; ) {
    var u2 = Tt(a);
    if (u2.transform !== "none" || u2.perspective !== "none" || u2.contain === "paint" || ["transform", "perspective"].indexOf(u2.willChange) !== -1 || r && u2.willChange === "filter" || r && u2.filter && u2.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
__name(sh, "sh");
c2(sh, "getContainingBlock");
function mr(t) {
  for (var r = Xe(t), e = Rc(t); e && Zs(e) && Tt(e).position === "static"; )
    e = Rc(e);
  return e && (lt(e) === "html" || lt(e) === "body" && Tt(e).position === "static") ? r : e || sh(t) || r;
}
__name(mr, "mr");
c2(mr, "getOffsetParent");
function Nn(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name(Nn, "Nn");
c2(Nn, "getMainAxisFromPlacement");
function Gn(t, r, e) {
  return vr(t, zn(r, e));
}
__name(Gn, "Gn");
c2(Gn, "within");
function zc(t, r, e) {
  var n = Gn(t, r, e);
  return n > e ? e : n;
}
__name(zc, "zc");
c2(zc, "withinMaxClamp");
function so() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(so, "so");
c2(so, "getFreshSideObject");
function lo(t) {
  return Object.assign({}, so(), t);
}
__name(lo, "lo");
c2(lo, "mergePaddingObject");
function uo(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(uo, "uo");
c2(uo, "expandToHashMap");
var lh = c2(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, lo(typeof r != "number" ? r : uo(r, nn));
}, "toPaddingObject");
function uh(t) {
  var r, e = t.state, n = t.name, a = t.options, u2 = e.elements.arrow, d2 = e.modifiersData.popperOffsets, v = ut(e.placement), m2 = Nn(v), E = [Ve, Je].indexOf(v) >= 0, w2 = E ? "height" : "width";
  if (!(!u2 || !d2)) {
    var M2 = lh(a.padding, e), y2 = kn(u2), x = m2 === "y" ? Fe : Ve, C = m2 === "y" ? ot : Je, _ = e.rects.reference[w2] + e.rects.reference[m2] - d2[m2] - e.rects.popper[w2], D2 = d2[m2] - e.rects.reference[m2], j = mr(u2), L = j ? m2 === "y" ? j.clientHeight || 0 : j.clientWidth || 0 : 0, W = _ / 2 - D2 / 2, O2 = M2[x], B = L - y2[w2] - M2[C], P = L / 2 - y2[w2] / 2 + W, N2 = Gn(O2, P, B), F2 = m2;
    e.modifiersData[n] = (r = {}, r[F2] = N2, r.centerOffset = N2 - P, r);
  }
}
__name(uh, "uh");
c2(uh, "arrow");
function ch(t) {
  var r = t.state, e = t.options, n = e.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = r.elements.popper.querySelector(a), !a) || !ao(r.elements.popper, a) || (r.elements.arrow = a));
}
__name(ch, "ch");
c2(ch, "effect");
var kc = { name: "arrow", enabled: true, phase: "main", fn: uh, effect: ch, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function sr(t) {
  return t.split("-")[1];
}
__name(sr, "sr");
c2(sr, "getVariation");
var ph = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function dh(t) {
  var r = t.x, e = t.y, n = window, a = n.devicePixelRatio || 1;
  return { x: jr(r * a) / a || 0, y: jr(e * a) / a || 0 };
}
__name(dh, "dh");
c2(dh, "roundOffsetsByDPR");
function Nc(t) {
  var r, e = t.popper, n = t.popperRect, a = t.placement, u2 = t.variation, d2 = t.offsets, v = t.position, m2 = t.gpuAcceleration, E = t.adaptive, w2 = t.roundOffsets, M2 = t.isFixed, y2 = d2.x, x = y2 === void 0 ? 0 : y2, C = d2.y, _ = C === void 0 ? 0 : C, D2 = typeof w2 == "function" ? w2({ x, y: _ }) : { x, y: _ };
  x = D2.x, _ = D2.y;
  var j = d2.hasOwnProperty("x"), L = d2.hasOwnProperty("y"), W = Ve, O2 = Fe, B = window;
  if (E) {
    var P = mr(e), N2 = "clientHeight", F2 = "clientWidth";
    if (P === Xe(e) && (P = mt(e), Tt(P).position !== "static" && v === "absolute" && (N2 = "scrollHeight", F2 = "scrollWidth")), P = P, a === Fe || (a === Ve || a === Je) && u2 === Rn) {
      O2 = ot;
      var Z = M2 && P === B && B.visualViewport ? B.visualViewport.height : P[N2];
      _ -= Z - n.height, _ *= m2 ? 1 : -1;
    }
    if (a === Ve || (a === Fe || a === ot) && u2 === Rn) {
      W = Je;
      var ne = M2 && P === B && B.visualViewport ? B.visualViewport.width : P[F2];
      x -= ne - n.width, x *= m2 ? 1 : -1;
    }
  }
  var re = Object.assign({ position: v }, E && ph), pe = w2 === true ? dh({ x, y: _ }) : { x, y: _ };
  if (x = pe.x, _ = pe.y, m2) {
    var U;
    return Object.assign({}, re, (U = {}, U[O2] = L ? "0" : "", U[W] = j ? "0" : "", U.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + _ + "px)" : "translate3d(" + x + "px, " + _ + "px, 0)", U));
  }
  return Object.assign({}, re, (r = {}, r[O2] = L ? _ + "px" : "", r[W] = j ? x + "px" : "", r.transform = "", r));
}
__name(Nc, "Nc");
c2(Nc, "mapToStyles");
function fh(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, a = n === void 0 ? true : n, u2 = e.adaptive, d2 = u2 === void 0 ? true : u2, v = e.roundOffsets, m2 = v === void 0 ? true : v;
  if (false)
    var E;
  var w2 = { placement: ut(r.placement), variation: sr(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: a, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Nc(Object.assign({}, w2, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: d2, roundOffsets: m2 })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Nc(Object.assign({}, w2, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m2 })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(fh, "fh");
c2(fh, "computeStyles");
var Gc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: fh, data: {} };
var Ia = { passive: true };
function hh(t) {
  var r = t.state, e = t.instance, n = t.options, a = n.scroll, u2 = a === void 0 ? true : a, d2 = n.resize, v = d2 === void 0 ? true : d2, m2 = Xe(r.elements.popper), E = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return u2 && E.forEach(function(w2) {
    w2.addEventListener("scroll", e.update, Ia);
  }), v && m2.addEventListener("resize", e.update, Ia), function() {
    u2 && E.forEach(function(w2) {
      w2.removeEventListener("scroll", e.update, Ia);
    }), v && m2.removeEventListener("resize", e.update, Ia);
  };
}
__name(hh, "hh");
c2(hh, "effect");
var Lc = { name: "eventListeners", enabled: true, phase: "write", fn: c2(function() {
}, "fn"), effect: hh, data: {} };
var vh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hi(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return vh[r];
  });
}
__name(hi, "hi");
c2(hi, "getOppositePlacement");
var mh = { start: "end", end: "start" };
function Da(t) {
  return t.replace(/start|end/g, function(r) {
    return mh[r];
  });
}
__name(Da, "Da");
c2(Da, "getOppositeVariationPlacement");
function Ln(t) {
  var r = Xe(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(Ln, "Ln");
c2(Ln, "getWindowScroll");
function qn(t) {
  return ar(mt(t)).left + Ln(t).scrollLeft;
}
__name(qn, "qn");
c2(qn, "getWindowScrollBarX");
function Ks(t) {
  var r = Xe(t), e = mt(t), n = r.visualViewport, a = e.clientWidth, u2 = e.clientHeight, d2 = 0, v = 0;
  return n && (a = n.width, u2 = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d2 = n.offsetLeft, v = n.offsetTop)), { width: a, height: u2, x: d2 + qn(t), y: v };
}
__name(Ks, "Ks");
c2(Ks, "getViewportRect");
function Js(t) {
  var r, e = mt(t), n = Ln(t), a = (r = t.ownerDocument) == null ? void 0 : r.body, u2 = vr(e.scrollWidth, e.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), d2 = vr(e.scrollHeight, e.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), v = -n.scrollLeft + qn(t), m2 = -n.scrollTop;
  return Tt(a || e).direction === "rtl" && (v += vr(e.clientWidth, a ? a.clientWidth : 0) - u2), { width: u2, height: d2, x: v, y: m2 };
}
__name(Js, "Js");
c2(Js, "getDocumentRect");
function jn(t) {
  var r = Tt(t), e = r.overflow, n = r.overflowX, a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + a + n);
}
__name(jn, "jn");
c2(jn, "isScrollParent");
function Ra(t) {
  return ["html", "body", "#document"].indexOf(lt(t)) >= 0 ? t.ownerDocument.body : at(t) && jn(t) ? t : Ra(Br(t));
}
__name(Ra, "Ra");
c2(Ra, "getScrollParent");
function on(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = Ra(t), a = n === ((e = t.ownerDocument) == null ? void 0 : e.body), u2 = Xe(n), d2 = a ? [u2].concat(u2.visualViewport || [], jn(n) ? n : []) : n, v = r.concat(d2);
  return a ? v : v.concat(on(Br(d2)));
}
__name(on, "on");
c2(on, "listScrollParents");
function vi(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(vi, "vi");
c2(vi, "rectToClientRect");
function gh(t) {
  var r = ar(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(gh, "gh");
c2(gh, "getInnerBoundingClientRect");
function qc(t, r) {
  return r === Aa ? vi(Ks(t)) : Er(r) ? gh(r) : vi(Js(mt(t)));
}
__name(qc, "qc");
c2(qc, "getClientRectFromMixedType");
function bh(t) {
  var r = on(Br(t)), e = ["absolute", "fixed"].indexOf(Tt(t).position) >= 0, n = e && at(t) ? mr(t) : t;
  return Er(n) ? r.filter(function(a) {
    return Er(a) && ao(a, n) && lt(a) !== "body";
  }) : [];
}
__name(bh, "bh");
c2(bh, "getClippingParents");
function Qs(t, r, e) {
  var n = r === "clippingParents" ? bh(t) : [].concat(r), a = [].concat(n, [e]), u2 = a[0], d2 = a.reduce(function(v, m2) {
    var E = qc(t, m2);
    return v.top = vr(E.top, v.top), v.right = zn(E.right, v.right), v.bottom = zn(E.bottom, v.bottom), v.left = vr(E.left, v.left), v;
  }, qc(t, u2));
  return d2.width = d2.right - d2.left, d2.height = d2.bottom - d2.top, d2.x = d2.left, d2.y = d2.top, d2;
}
__name(Qs, "Qs");
c2(Qs, "getClippingRect");
function co(t) {
  var r = t.reference, e = t.element, n = t.placement, a = n ? ut(n) : null, u2 = n ? sr(n) : null, d2 = r.x + r.width / 2 - e.width / 2, v = r.y + r.height / 2 - e.height / 2, m2;
  switch (a) {
    case Fe:
      m2 = { x: d2, y: r.y - e.height };
      break;
    case ot:
      m2 = { x: d2, y: r.y + r.height };
      break;
    case Je:
      m2 = { x: r.x + r.width, y: v };
      break;
    case Ve:
      m2 = { x: r.x - e.width, y: v };
      break;
    default:
      m2 = { x: r.x, y: r.y };
  }
  var E = a ? Nn(a) : null;
  if (E != null) {
    var w2 = E === "y" ? "height" : "width";
    switch (u2) {
      case qr:
        m2[E] = m2[E] - (r[w2] / 2 - e[w2] / 2);
        break;
      case Rn:
        m2[E] = m2[E] + (r[w2] / 2 - e[w2] / 2);
        break;
      default:
    }
  }
  return m2;
}
__name(co, "co");
c2(co, "computeOffsets");
function gr(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, a = n === void 0 ? t.placement : n, u2 = e.boundary, d2 = u2 === void 0 ? Pc : u2, v = e.rootBoundary, m2 = v === void 0 ? Aa : v, E = e.elementContext, w2 = E === void 0 ? di : E, M2 = e.altBoundary, y2 = M2 === void 0 ? false : M2, x = e.padding, C = x === void 0 ? 0 : x, _ = lo(typeof C != "number" ? C : uo(C, nn)), D2 = w2 === di ? Ic : di, j = t.rects.popper, L = t.elements[y2 ? D2 : w2], W = Qs(Er(L) ? L : L.contextElement || mt(t.elements.popper), d2, m2), O2 = ar(t.elements.reference), B = co({ reference: O2, element: j, strategy: "absolute", placement: a }), P = vi(Object.assign({}, j, B)), N2 = w2 === di ? P : O2, F2 = { top: W.top - N2.top + _.top, bottom: N2.bottom - W.bottom + _.bottom, left: W.left - N2.left + _.left, right: N2.right - W.right + _.right }, Z = t.modifiersData.offset;
  if (w2 === di && Z) {
    var ne = Z[a];
    Object.keys(F2).forEach(function(re) {
      var pe = [Je, ot].indexOf(re) >= 0 ? 1 : -1, U = [Fe, ot].indexOf(re) >= 0 ? "y" : "x";
      F2[re] += ne[U] * pe;
    });
  }
  return F2;
}
__name(gr, "gr");
c2(gr, "detectOverflow");
function el(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, a = e.boundary, u2 = e.rootBoundary, d2 = e.padding, v = e.flipVariations, m2 = e.allowedAutoPlacements, E = m2 === void 0 ? Pa : m2, w2 = sr(n), M2 = w2 ? v ? Ys : Ys.filter(function(C) {
    return sr(C) === w2;
  }) : nn, y2 = M2.filter(function(C) {
    return E.indexOf(C) >= 0;
  });
  y2.length === 0 && (y2 = M2);
  var x = y2.reduce(function(C, _) {
    return C[_] = gr(t, { placement: _, boundary: a, rootBoundary: u2, padding: d2 })[ut(_)], C;
  }, {});
  return Object.keys(x).sort(function(C, _) {
    return x[C] - x[_];
  });
}
__name(el, "el");
c2(el, "computeAutoPlacement");
function yh(t) {
  if (ut(t) === Ma)
    return [];
  var r = hi(t);
  return [Da(t), r, Da(r)];
}
__name(yh, "yh");
c2(yh, "getExpandedFallbackPlacements");
function xh(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var a = e.mainAxis, u2 = a === void 0 ? true : a, d2 = e.altAxis, v = d2 === void 0 ? true : d2, m2 = e.fallbackPlacements, E = e.padding, w2 = e.boundary, M2 = e.rootBoundary, y2 = e.altBoundary, x = e.flipVariations, C = x === void 0 ? true : x, _ = e.allowedAutoPlacements, D2 = r.options.placement, j = ut(D2), L = j === D2, W = m2 || (L || !C ? [hi(D2)] : yh(D2)), O2 = [D2].concat(W).reduce(function(K, wt) {
      return K.concat(ut(wt) === Ma ? el(r, { placement: wt, boundary: w2, rootBoundary: M2, padding: E, flipVariations: C, allowedAutoPlacements: _ }) : wt);
    }, []), B = r.rects.reference, P = r.rects.popper, N2 = /* @__PURE__ */ new Map(), F2 = true, Z = O2[0], ne = 0; ne < O2.length; ne++) {
      var re = O2[ne], pe = ut(re), U = sr(re) === qr, ue = [Fe, ot].indexOf(pe) >= 0, Pe = ue ? "width" : "height", Ue = gr(r, { placement: re, boundary: w2, rootBoundary: M2, altBoundary: y2, padding: E }), Ge = ue ? U ? Je : Ve : U ? ot : Fe;
      B[Pe] > P[Pe] && (Ge = hi(Ge));
      var fe = hi(Ge), Ze = [];
      if (u2 && Ze.push(Ue[pe] <= 0), v && Ze.push(Ue[Ge] <= 0, Ue[fe] <= 0), Ze.every(function(K) {
        return K;
      })) {
        Z = re, F2 = false;
        break;
      }
      N2.set(re, Ze);
    }
    if (F2)
      for (var tt = C ? 3 : 1, zt = c2(function(wt) {
        var Et = O2.find(function(Ar) {
          var rr = N2.get(Ar);
          if (rr)
            return rr.slice(0, wt).every(function(lr) {
              return lr;
            });
        });
        if (Et)
          return Z = Et, "break";
      }, "_loop"), Ct = tt; Ct > 0; Ct--) {
        var Mr = zt(Ct);
        if (Mr === "break")
          break;
      }
    r.placement !== Z && (r.modifiersData[n]._skip = true, r.placement = Z, r.reset = true);
  }
}
__name(xh, "xh");
c2(xh, "flip");
var jc = { name: "flip", enabled: true, phase: "main", fn: xh, requiresIfExists: ["offset"], data: { _skip: false } };
function Bc(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(Bc, "Bc");
c2(Bc, "getSideOffsets");
function $c(t) {
  return [Fe, Je, ot, Ve].some(function(r) {
    return t[r] >= 0;
  });
}
__name($c, "$c");
c2($c, "isAnySideFullyClipped");
function wh(t) {
  var r = t.state, e = t.name, n = r.rects.reference, a = r.rects.popper, u2 = r.modifiersData.preventOverflow, d2 = gr(r, { elementContext: "reference" }), v = gr(r, { altBoundary: true }), m2 = Bc(d2, n), E = Bc(v, a, u2), w2 = $c(m2), M2 = $c(E);
  r.modifiersData[e] = { referenceClippingOffsets: m2, popperEscapeOffsets: E, isReferenceHidden: w2, hasPopperEscaped: M2 }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": w2, "data-popper-escaped": M2 });
}
__name(wh, "wh");
c2(wh, "hide");
var Hc = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: wh };
function Eh(t, r, e) {
  var n = ut(t), a = [Ve, Fe].indexOf(n) >= 0 ? -1 : 1, u2 = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, d2 = u2[0], v = u2[1];
  return d2 = d2 || 0, v = (v || 0) * a, [Ve, Je].indexOf(n) >= 0 ? { x: v, y: d2 } : { x: d2, y: v };
}
__name(Eh, "Eh");
c2(Eh, "distanceAndSkiddingToXY");
function Sh(t) {
  var r = t.state, e = t.options, n = t.name, a = e.offset, u2 = a === void 0 ? [0, 0] : a, d2 = Pa.reduce(function(w2, M2) {
    return w2[M2] = Eh(M2, r.rects, u2), w2;
  }, {}), v = d2[r.placement], m2 = v.x, E = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m2, r.modifiersData.popperOffsets.y += E), r.modifiersData[n] = d2;
}
__name(Sh, "Sh");
c2(Sh, "offset");
var Fc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Sh };
function Th(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = co({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(Th, "Th");
c2(Th, "popperOffsets");
var Uc = { name: "popperOffsets", enabled: true, phase: "read", fn: Th, data: {} };
function tl(t) {
  return t === "x" ? "y" : "x";
}
__name(tl, "tl");
c2(tl, "getAltAxis");
function Oh(t) {
  var r = t.state, e = t.options, n = t.name, a = e.mainAxis, u2 = a === void 0 ? true : a, d2 = e.altAxis, v = d2 === void 0 ? false : d2, m2 = e.boundary, E = e.rootBoundary, w2 = e.altBoundary, M2 = e.padding, y2 = e.tether, x = y2 === void 0 ? true : y2, C = e.tetherOffset, _ = C === void 0 ? 0 : C, D2 = gr(r, { boundary: m2, rootBoundary: E, padding: M2, altBoundary: w2 }), j = ut(r.placement), L = sr(r.placement), W = !L, O2 = Nn(j), B = tl(O2), P = r.modifiersData.popperOffsets, N2 = r.rects.reference, F2 = r.rects.popper, Z = typeof _ == "function" ? _(Object.assign({}, r.rects, { placement: r.placement })) : _, ne = typeof Z == "number" ? { mainAxis: Z, altAxis: Z } : Object.assign({ mainAxis: 0, altAxis: 0 }, Z), re = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, pe = { x: 0, y: 0 };
  if (!!P) {
    if (u2) {
      var U, ue = O2 === "y" ? Fe : Ve, Pe = O2 === "y" ? ot : Je, Ue = O2 === "y" ? "height" : "width", Ge = P[O2], fe = Ge + D2[ue], Ze = Ge - D2[Pe], tt = x ? -F2[Ue] / 2 : 0, zt = L === qr ? N2[Ue] : F2[Ue], Ct = L === qr ? -F2[Ue] : -N2[Ue], Mr = r.elements.arrow, K = x && Mr ? kn(Mr) : { width: 0, height: 0 }, wt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : so(), Et = wt[ue], Ar = wt[Pe], rr = Gn(0, N2[Ue], K[Ue]), lr = W ? N2[Ue] / 2 - tt - rr - Et - ne.mainAxis : zt - rr - Et - ne.mainAxis, ur = W ? -N2[Ue] / 2 + tt + rr + Ar + ne.mainAxis : Ct + rr + Ar + ne.mainAxis, kt = r.elements.arrow && mr(r.elements.arrow), Un = kt ? O2 === "y" ? kt.clientTop || 0 : kt.clientLeft || 0 : 0, _t = (U = re == null ? void 0 : re[O2]) != null ? U : 0, cn = Ge + lr - _t - Un, xe = Ge + ur - _t, Wr = Gn(x ? zn(fe, cn) : fe, Ge, x ? vr(Ze, xe) : Ze);
      P[O2] = Wr, pe[O2] = Wr - Ge;
    }
    if (v) {
      var Vr, Mt = O2 === "x" ? Fe : Ve, pn = O2 === "x" ? ot : Je, cr = P[B], pr = B === "y" ? "height" : "width", dn = cr + D2[Mt], ct = cr - D2[pn], Pr = [Fe, Ve].indexOf(j) !== -1, Nt = (Vr = re == null ? void 0 : re[B]) != null ? Vr : 0, Wn = Pr ? dn : cr - N2[pr] - F2[pr] - Nt + ne.altAxis, Ir = Pr ? cr + N2[pr] + F2[pr] - Nt - ne.altAxis : ct, fn = x && Pr ? zc(Wn, cr, Ir) : Gn(x ? Wn : dn, cr, x ? Ir : ct);
      P[B] = fn, pe[B] = fn - cr;
    }
    r.modifiersData[n] = pe;
  }
}
__name(Oh, "Oh");
c2(Oh, "preventOverflow");
var Wc = { name: "preventOverflow", enabled: true, phase: "main", fn: Oh, requiresIfExists: ["offset"] };
function rl(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(rl, "rl");
c2(rl, "getHTMLElementScroll");
function nl(t) {
  return t === Xe(t) || !at(t) ? Ln(t) : rl(t);
}
__name(nl, "nl");
c2(nl, "getNodeScroll");
function Ch(t) {
  var r = t.getBoundingClientRect(), e = jr(r.width) / t.offsetWidth || 1, n = jr(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(Ch, "Ch");
c2(Ch, "isElementScaled");
function il(t, r, e) {
  e === void 0 && (e = false);
  var n = at(r), a = at(r) && Ch(r), u2 = mt(r), d2 = ar(t, a), v = { scrollLeft: 0, scrollTop: 0 }, m2 = { x: 0, y: 0 };
  return (n || !n && !e) && ((lt(r) !== "body" || jn(u2)) && (v = nl(r)), at(r) ? (m2 = ar(r, true), m2.x += r.clientLeft, m2.y += r.clientTop) : u2 && (m2.x = qn(u2))), { x: d2.left + v.scrollLeft - m2.x, y: d2.top + v.scrollTop - m2.y, width: d2.width, height: d2.height };
}
__name(il, "il");
c2(il, "getCompositeRect");
function _h(t) {
  var r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(u2) {
    r.set(u2.name, u2);
  });
  function a(u2) {
    e.add(u2.name);
    var d2 = [].concat(u2.requires || [], u2.requiresIfExists || []);
    d2.forEach(function(v) {
      if (!e.has(v)) {
        var m2 = r.get(v);
        m2 && a(m2);
      }
    }), n.push(u2);
  }
  __name(a, "a");
  return c2(a, "sort"), t.forEach(function(u2) {
    e.has(u2.name) || a(u2);
  }), n;
}
__name(_h, "_h");
c2(_h, "order");
function ol(t) {
  var r = _h(t);
  return Dc.reduce(function(e, n) {
    return e.concat(r.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
__name(ol, "ol");
c2(ol, "orderModifiers");
function al(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name(al, "al");
c2(al, "debounce");
function sl(t) {
  var r = t.reduce(function(e, n) {
    var a = e[n.name];
    return e[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(sl, "sl");
c2(sl, "mergeByName");
var Vc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xc() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(Xc, "Xc");
c2(Xc, "areValidElements");
function Yc(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, a = r.defaultOptions, u2 = a === void 0 ? Vc : a;
  return c2(function(v, m2, E) {
    E === void 0 && (E = u2);
    var w2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Vc, u2), modifiersData: {}, elements: { reference: v, popper: m2 }, attributes: {}, styles: {} }, M2 = [], y2 = false, x = { state: w2, setOptions: c2(function(j) {
      var L = typeof j == "function" ? j(w2.options) : j;
      _(), w2.options = Object.assign({}, u2, w2.options, L), w2.scrollParents = { reference: Er(v) ? on(v) : v.contextElement ? on(v.contextElement) : [], popper: on(m2) };
      var W = ol(sl([].concat(n, w2.options.modifiers)));
      if (w2.orderedModifiers = W.filter(function(re) {
        return re.enabled;
      }), false) {
        var O2;
        if (getBasePlacement(w2.options.placement) === auto)
          var B;
        var P, N2, F2, Z, ne;
      }
      return C(), x.update();
    }, "setOptions"), forceUpdate: c2(function() {
      if (!y2) {
        var j = w2.elements, L = j.reference, W = j.popper;
        if (!!Xc(L, W)) {
          w2.rects = { reference: il(L, mr(W), w2.options.strategy === "fixed"), popper: kn(W) }, w2.reset = false, w2.placement = w2.options.placement, w2.orderedModifiers.forEach(function(re) {
            return w2.modifiersData[re.name] = Object.assign({}, re.data);
          });
          for (var O2 = 0, B = 0; B < w2.orderedModifiers.length; B++) {
            if (w2.reset === true) {
              w2.reset = false, B = -1;
              continue;
            }
            var P = w2.orderedModifiers[B], N2 = P.fn, F2 = P.options, Z = F2 === void 0 ? {} : F2, ne = P.name;
            typeof N2 == "function" && (w2 = N2({ state: w2, options: Z, name: ne, instance: x }) || w2);
          }
        }
      }
    }, "forceUpdate"), update: al(function() {
      return new Promise(function(D2) {
        x.forceUpdate(), D2(w2);
      });
    }), destroy: c2(function() {
      _(), y2 = true;
    }, "destroy") };
    if (!Xc(v, m2))
      return x;
    x.setOptions(E).then(function(D2) {
      !y2 && E.onFirstUpdate && E.onFirstUpdate(D2);
    });
    function C() {
      w2.orderedModifiers.forEach(function(D2) {
        var j = D2.name, L = D2.options, W = L === void 0 ? {} : L, O2 = D2.effect;
        if (typeof O2 == "function") {
          var B = O2({ state: w2, name: j, instance: x, options: W }), P = c2(function() {
          }, "noopFn");
          M2.push(B || P);
        }
      });
    }
    __name(C, "C");
    c2(C, "runModifierEffects");
    function _() {
      M2.forEach(function(D2) {
        return D2();
      }), M2 = [];
    }
    __name(_, "_");
    return c2(_, "cleanupModifierEffects"), x;
  }, "createPopper");
}
__name(Yc, "Yc");
c2(Yc, "popperGenerator");
var Mh = [Lc, Uc, Gc, oo, Fc, jc, Wc, kc, Hc];
var ll = Yc({ defaultModifiers: Mh });
var $r = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Ah = "tippy-box";
var op = "tippy-content";
var Ph = "tippy-backdrop";
var ap = "tippy-arrow";
var sp = "tippy-svg-arrow";
var Bn = { passive: true, capture: true };
var lp = c2(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function ul(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(ul, "ul");
c2(ul, "getValueAtIndexOrReturn");
function vl(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(vl, "vl");
c2(vl, "isType");
function up(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(up, "up");
c2(up, "invokeWithArgsOrReturn");
function Zc(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(Zc, "Zc");
c2(Zc, "debounce");
function Ih(t, r) {
  var e = Object.assign({}, t);
  return r.forEach(function(n) {
    delete e[n];
  }), e;
}
__name(Ih, "Ih");
c2(Ih, "removeProperties");
function Dh(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(Dh, "Dh");
c2(Dh, "splitBySpaces");
function $n(t) {
  return [].concat(t);
}
__name($n, "$n");
c2($n, "normalizeToArray");
function Kc(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(Kc, "Kc");
c2(Kc, "pushIfUnique");
function Rh(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name(Rh, "Rh");
c2(Rh, "unique");
function zh(t) {
  return t.split("-")[0];
}
__name(zh, "zh");
c2(zh, "getBasePlacement");
function ka(t) {
  return [].slice.call(t);
}
__name(ka, "ka");
c2(ka, "arrayFrom");
function Jc(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(Jc, "Jc");
c2(Jc, "removeUndefinedProps");
function mi() {
  return document.createElement("div");
}
__name(mi, "mi");
c2(mi, "div");
function Na(t) {
  return ["Element", "Fragment"].some(function(r) {
    return vl(t, r);
  });
}
__name(Na, "Na");
c2(Na, "isElement");
function kh(t) {
  return vl(t, "NodeList");
}
__name(kh, "kh");
c2(kh, "isNodeList");
function Nh(t) {
  return vl(t, "MouseEvent");
}
__name(Nh, "Nh");
c2(Nh, "isMouseEvent");
function Gh(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(Gh, "Gh");
c2(Gh, "isReferenceElement");
function Lh(t) {
  return Na(t) ? [t] : kh(t) ? ka(t) : Array.isArray(t) ? t : ka(document.querySelectorAll(t));
}
__name(Lh, "Lh");
c2(Lh, "getArrayOfElements");
function cl(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(cl, "cl");
c2(cl, "setTransitionDuration");
function Qc(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(Qc, "Qc");
c2(Qc, "setVisibilityState");
function qh(t) {
  var r, e = $n(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(qh, "qh");
c2(qh, "getOwnerDocument");
function jh(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(a) {
    var u2 = a.popperRect, d2 = a.popperState, v = a.props, m2 = v.interactiveBorder, E = zh(d2.placement), w2 = d2.modifiersData.offset;
    if (!w2)
      return true;
    var M2 = E === "bottom" ? w2.top.y : 0, y2 = E === "top" ? w2.bottom.y : 0, x = E === "right" ? w2.left.x : 0, C = E === "left" ? w2.right.x : 0, _ = u2.top - n + M2 > m2, D2 = n - u2.bottom - y2 > m2, j = u2.left - e + x > m2, L = e - u2.right - C > m2;
    return _ || D2 || j || L;
  });
}
__name(jh, "jh");
c2(jh, "isCursorOutsideInteractiveBorder");
function pl(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    t[n](a, e);
  });
}
__name(pl, "pl");
c2(pl, "updateTransitionEndListener");
function ep(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(ep, "ep");
c2(ep, "actualContains");
var Sr = { isTouch: false };
var tp = 0;
function Bh() {
  Sr.isTouch || (Sr.isTouch = true, window.performance && document.addEventListener("mousemove", cp));
}
__name(Bh, "Bh");
c2(Bh, "onDocumentTouchStart");
function cp() {
  var t = performance.now();
  t - tp < 20 && (Sr.isTouch = false, document.removeEventListener("mousemove", cp)), tp = t;
}
__name(cp, "cp");
c2(cp, "onDocumentMouseMove");
function $h() {
  var t = document.activeElement;
  if (Gh(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name($h, "$h");
c2($h, "onWindowBlur");
function Hh() {
  document.addEventListener("touchstart", Bh, Bn), window.addEventListener("blur", $h);
}
__name(Hh, "Hh");
c2(Hh, "bindGlobalEventListeners");
var Fh = typeof window != "undefined" && typeof document != "undefined";
var Uh = Fh ? !!window.msCrypto : false;
var Wh = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Vh = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var br = Object.assign({ appendTo: lp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: c2(function() {
}, "onAfterUpdate"), onBeforeUpdate: c2(function() {
}, "onBeforeUpdate"), onCreate: c2(function() {
}, "onCreate"), onDestroy: c2(function() {
}, "onDestroy"), onHidden: c2(function() {
}, "onHidden"), onHide: c2(function() {
}, "onHide"), onMount: c2(function() {
}, "onMount"), onShow: c2(function() {
}, "onShow"), onShown: c2(function() {
}, "onShown"), onTrigger: c2(function() {
}, "onTrigger"), onUntrigger: c2(function() {
}, "onUntrigger"), onClickOutside: c2(function() {
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Wh, Vh);
var Xh = Object.keys(br);
var Yh = c2(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    br[n] = r[n];
  });
}, "setDefaultProps");
function pp(t) {
  var r = t.plugins || [], e = r.reduce(function(n, a) {
    var u2 = a.name, d2 = a.defaultValue;
    if (u2) {
      var v;
      n[u2] = t[u2] !== void 0 ? t[u2] : (v = br[u2]) != null ? v : d2;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(pp, "pp");
c2(pp, "getExtendedPassedProps");
function Zh(t, r) {
  var e = r ? Object.keys(pp(Object.assign({}, br, { plugins: r }))) : Xh, n = e.reduce(function(a, u2) {
    var d2 = (t.getAttribute("data-tippy-" + u2) || "").trim();
    if (!d2)
      return a;
    if (u2 === "content")
      a[u2] = d2;
    else
      try {
        a[u2] = JSON.parse(d2);
      } catch (v) {
        a[u2] = d2;
      }
    return a;
  }, {});
  return n;
}
__name(Zh, "Zh");
c2(Zh, "getDataAttributeProps");
function rp(t, r) {
  var e = Object.assign({}, r, { content: up(r.content, [t]) }, r.ignoreAttributes ? {} : Zh(t, r.plugins));
  return e.aria = Object.assign({}, br.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(rp, "rp");
c2(rp, "evaluateProps");
var Kh = c2(function() {
  return "innerHTML";
}, "innerHTML");
function fl(t, r) {
  t[Kh()] = r;
}
__name(fl, "fl");
c2(fl, "dangerouslySetInnerHTML");
function np(t) {
  var r = mi();
  return t === true ? r.className = ap : (r.className = sp, Na(t) ? r.appendChild(t) : fl(r, t)), r;
}
__name(np, "np");
c2(np, "createArrowElement");
function ip(t, r) {
  Na(r.content) ? (fl(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? fl(t, r.content) : t.textContent = r.content);
}
__name(ip, "ip");
c2(ip, "setContent");
function hl(t) {
  var r = t.firstElementChild, e = ka(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains(op);
  }), arrow: e.find(function(n) {
    return n.classList.contains(ap) || n.classList.contains(sp);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(Ph);
  }) };
}
__name(hl, "hl");
c2(hl, "getChildren");
function dp(t) {
  var r = mi(), e = mi();
  e.className = Ah, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = mi();
  n.className = op, n.setAttribute("data-state", "hidden"), ip(n, t.props), r.appendChild(e), e.appendChild(n), a(t.props, t.props);
  function a(u2, d2) {
    var v = hl(r), m2 = v.box, E = v.content, w2 = v.arrow;
    d2.theme ? m2.setAttribute("data-theme", d2.theme) : m2.removeAttribute("data-theme"), typeof d2.animation == "string" ? m2.setAttribute("data-animation", d2.animation) : m2.removeAttribute("data-animation"), d2.inertia ? m2.setAttribute("data-inertia", "") : m2.removeAttribute("data-inertia"), m2.style.maxWidth = typeof d2.maxWidth == "number" ? d2.maxWidth + "px" : d2.maxWidth, d2.role ? m2.setAttribute("role", d2.role) : m2.removeAttribute("role"), (u2.content !== d2.content || u2.allowHTML !== d2.allowHTML) && ip(E, t.props), d2.arrow ? w2 ? u2.arrow !== d2.arrow && (m2.removeChild(w2), m2.appendChild(np(d2.arrow))) : m2.appendChild(np(d2.arrow)) : w2 && m2.removeChild(w2);
  }
  __name(a, "a");
  return c2(a, "onUpdate"), { popper: r, onUpdate: a };
}
__name(dp, "dp");
c2(dp, "render");
dp.$$tippy = true;
var Jh = 1;
var za = [];
var dl = [];
function Qh(t, r) {
  var e = rp(t, Object.assign({}, br, pp(Jc(r)))), n, a, u2, d2 = false, v = false, m2 = false, E = false, w2, M2, y2, x = [], C = Zc(cn, e.interactiveDebounce), _, D2 = Jh++, j = null, L = Rh(e.plugins), W = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, O2 = { id: D2, reference: t, popper: mi(), popperInstance: j, props: e, state: W, plugins: L, clearDelayTimeouts: Wn, setProps: Ir, setContent: fn, show: wi, hide: wo, hideWithInteractivity: Ei, enable: Pr, disable: Nt, unmount: Si, destroy: Eo };
  if (!e.render)
    return O2;
  var B = e.render(O2), P = B.popper, N2 = B.onUpdate;
  P.setAttribute("data-tippy-root", ""), P.id = "tippy-" + O2.id, O2.popper = P, t._tippy = O2, P._tippy = O2;
  var F2 = L.map(function(G2) {
    return G2.fn(O2);
  }), Z = t.hasAttribute("aria-expanded");
  return kt(), tt(), Ge(), fe("onCreate", [O2]), e.showOnCreate && dn(), P.addEventListener("mouseenter", function() {
    O2.props.interactive && O2.state.isVisible && O2.clearDelayTimeouts();
  }), P.addEventListener("mouseleave", function() {
    O2.props.interactive && O2.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", C);
  }), O2;
  function ne() {
    var G2 = O2.props.touch;
    return Array.isArray(G2) ? G2 : [G2, 0];
  }
  __name(ne, "ne");
  c2(ne, "getNormalizedTouchSettings");
  function re() {
    return ne()[0] === "hold";
  }
  __name(re, "re");
  c2(re, "getIsCustomTouchBehavior");
  function pe() {
    var G2;
    return !!((G2 = O2.props.render) != null && G2.$$tippy);
  }
  __name(pe, "pe");
  c2(pe, "getIsDefaultRenderFn");
  function U() {
    return _ || t;
  }
  __name(U, "U");
  c2(U, "getCurrentTarget");
  function ue() {
    var G2 = U().parentNode;
    return G2 ? qh(G2) : document;
  }
  __name(ue, "ue");
  c2(ue, "getDocument");
  function Pe() {
    return hl(P);
  }
  __name(Pe, "Pe");
  c2(Pe, "getDefaultTemplateChildren");
  function Ue(G2) {
    return O2.state.isMounted && !O2.state.isVisible || Sr.isTouch || w2 && w2.type === "focus" ? 0 : ul(O2.props.delay, G2 ? 0 : 1, br.delay);
  }
  __name(Ue, "Ue");
  c2(Ue, "getDelay");
  function Ge(G2) {
    G2 === void 0 && (G2 = false), P.style.pointerEvents = O2.props.interactive && !G2 ? "" : "none", P.style.zIndex = "" + O2.props.zIndex;
  }
  __name(Ge, "Ge");
  c2(Ge, "handleStyles");
  function fe(G2, J, ie) {
    if (ie === void 0 && (ie = true), F2.forEach(function(he) {
      he[G2] && he[G2].apply(he, J);
    }), ie) {
      var ye;
      (ye = O2.props)[G2].apply(ye, J);
    }
  }
  __name(fe, "fe");
  c2(fe, "invokeHook");
  function Ze() {
    var G2 = O2.props.aria;
    if (!!G2.content) {
      var J = "aria-" + G2.content, ie = P.id, ye = $n(O2.props.triggerTarget || t);
      ye.forEach(function(he) {
        var pt = he.getAttribute(J);
        if (O2.state.isVisible)
          he.setAttribute(J, pt ? pt + " " + ie : ie);
        else {
          var dt = pt && pt.replace(ie, "").trim();
          dt ? he.setAttribute(J, dt) : he.removeAttribute(J);
        }
      });
    }
  }
  __name(Ze, "Ze");
  c2(Ze, "handleAriaContentAttribute");
  function tt() {
    if (!(Z || !O2.props.aria.expanded)) {
      var G2 = $n(O2.props.triggerTarget || t);
      G2.forEach(function(J) {
        O2.props.interactive ? J.setAttribute("aria-expanded", O2.state.isVisible && J === U() ? "true" : "false") : J.removeAttribute("aria-expanded");
      });
    }
  }
  __name(tt, "tt");
  c2(tt, "handleAriaExpandedAttribute");
  function zt() {
    ue().removeEventListener("mousemove", C), za = za.filter(function(G2) {
      return G2 !== C;
    });
  }
  __name(zt, "zt");
  c2(zt, "cleanupInteractiveMouseListeners");
  function Ct(G2) {
    if (!(Sr.isTouch && (m2 || G2.type === "mousedown"))) {
      var J = G2.composedPath && G2.composedPath()[0] || G2.target;
      if (!(O2.props.interactive && ep(P, J))) {
        if ($n(O2.props.triggerTarget || t).some(function(ie) {
          return ep(ie, J);
        })) {
          if (Sr.isTouch || O2.state.isVisible && O2.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [O2, G2]);
        O2.props.hideOnClick === true && (O2.clearDelayTimeouts(), O2.hide(), v = true, setTimeout(function() {
          v = false;
        }), O2.state.isMounted || Et());
      }
    }
  }
  __name(Ct, "Ct");
  c2(Ct, "onDocumentPress");
  function Mr() {
    m2 = true;
  }
  __name(Mr, "Mr");
  c2(Mr, "onTouchMove");
  function K() {
    m2 = false;
  }
  __name(K, "K");
  c2(K, "onTouchStart");
  function wt() {
    var G2 = ue();
    G2.addEventListener("mousedown", Ct, true), G2.addEventListener("touchend", Ct, Bn), G2.addEventListener("touchstart", K, Bn), G2.addEventListener("touchmove", Mr, Bn);
  }
  __name(wt, "wt");
  c2(wt, "addDocumentPress");
  function Et() {
    var G2 = ue();
    G2.removeEventListener("mousedown", Ct, true), G2.removeEventListener("touchend", Ct, Bn), G2.removeEventListener("touchstart", K, Bn), G2.removeEventListener("touchmove", Mr, Bn);
  }
  __name(Et, "Et");
  c2(Et, "removeDocumentPress");
  function Ar(G2, J) {
    lr(G2, function() {
      !O2.state.isVisible && P.parentNode && P.parentNode.contains(P) && J();
    });
  }
  __name(Ar, "Ar");
  c2(Ar, "onTransitionedOut");
  function rr(G2, J) {
    lr(G2, J);
  }
  __name(rr, "rr");
  c2(rr, "onTransitionedIn");
  function lr(G2, J) {
    var ie = Pe().box;
    function ye(he) {
      he.target === ie && (pl(ie, "remove", ye), J());
    }
    __name(ye, "ye");
    if (c2(ye, "listener"), G2 === 0)
      return J();
    pl(ie, "remove", M2), pl(ie, "add", ye), M2 = ye;
  }
  __name(lr, "lr");
  c2(lr, "onTransitionEnd");
  function ur(G2, J, ie) {
    ie === void 0 && (ie = false);
    var ye = $n(O2.props.triggerTarget || t);
    ye.forEach(function(he) {
      he.addEventListener(G2, J, ie), x.push({ node: he, eventType: G2, handler: J, options: ie });
    });
  }
  __name(ur, "ur");
  c2(ur, "on");
  function kt() {
    re() && (ur("touchstart", _t, { passive: true }), ur("touchend", xe, { passive: true })), Dh(O2.props.trigger).forEach(function(G2) {
      if (G2 !== "manual")
        switch (ur(G2, _t), G2) {
          case "mouseenter":
            ur("mouseleave", xe);
            break;
          case "focus":
            ur(Uh ? "focusout" : "blur", Wr);
            break;
          case "focusin":
            ur("focusout", Wr);
            break;
        }
    });
  }
  __name(kt, "kt");
  c2(kt, "addListeners");
  function Un() {
    x.forEach(function(G2) {
      var J = G2.node, ie = G2.eventType, ye = G2.handler, he = G2.options;
      J.removeEventListener(ie, ye, he);
    }), x = [];
  }
  __name(Un, "Un");
  c2(Un, "removeListeners");
  function _t(G2) {
    var J, ie = false;
    if (!(!O2.state.isEnabled || Vr(G2) || v)) {
      var ye = ((J = w2) == null ? void 0 : J.type) === "focus";
      w2 = G2, _ = G2.currentTarget, tt(), !O2.state.isVisible && Nh(G2) && za.forEach(function(he) {
        return he(G2);
      }), G2.type === "click" && (O2.props.trigger.indexOf("mouseenter") < 0 || d2) && O2.props.hideOnClick !== false && O2.state.isVisible ? ie = true : dn(G2), G2.type === "click" && (d2 = !ie), ie && !ye && ct(G2);
    }
  }
  __name(_t, "_t");
  c2(_t, "onTrigger");
  function cn(G2) {
    var J = G2.target, ie = U().contains(J) || P.contains(J);
    if (!(G2.type === "mousemove" && ie)) {
      var ye = pr().concat(P).map(function(he) {
        var pt, dt = he._tippy, Xr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Xr ? { popperRect: he.getBoundingClientRect(), popperState: Xr, props: e } : null;
      }).filter(Boolean);
      jh(ye, G2) && (zt(), ct(G2));
    }
  }
  __name(cn, "cn");
  c2(cn, "onMouseMove");
  function xe(G2) {
    var J = Vr(G2) || O2.props.trigger.indexOf("click") >= 0 && d2;
    if (!J) {
      if (O2.props.interactive) {
        O2.hideWithInteractivity(G2);
        return;
      }
      ct(G2);
    }
  }
  __name(xe, "xe");
  c2(xe, "onMouseLeave");
  function Wr(G2) {
    O2.props.trigger.indexOf("focusin") < 0 && G2.target !== U() || O2.props.interactive && G2.relatedTarget && P.contains(G2.relatedTarget) || ct(G2);
  }
  __name(Wr, "Wr");
  c2(Wr, "onBlurOrFocusOut");
  function Vr(G2) {
    return Sr.isTouch ? re() !== G2.type.indexOf("touch") >= 0 : false;
  }
  __name(Vr, "Vr");
  c2(Vr, "isEventListenerStopped");
  function Mt() {
    pn();
    var G2 = O2.props, J = G2.popperOptions, ie = G2.placement, ye = G2.offset, he = G2.getReferenceClientRect, pt = G2.moveTransition, dt = pe() ? hl(P).arrow : null, Xr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || U() } : t, Ti = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: c2(function(Dr) {
      var Yr = Dr.state;
      if (pe()) {
        var Gt = Pe(), Lt = Gt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(nr) {
          nr === "placement" ? Lt.setAttribute("data-placement", Yr.placement) : Yr.attributes.popper["data-popper-" + nr] ? Lt.setAttribute("data-" + nr, "") : Lt.removeAttribute("data-" + nr);
        }), Yr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, Ti];
    pe() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (J == null ? void 0 : J.modifiers) || []), O2.popperInstance = ll(Xr, P, Object.assign({}, J, { placement: ie, onFirstUpdate: y2, modifiers: ft }));
  }
  __name(Mt, "Mt");
  c2(Mt, "createPopperInstance");
  function pn() {
    O2.popperInstance && (O2.popperInstance.destroy(), O2.popperInstance = null);
  }
  __name(pn, "pn");
  c2(pn, "destroyPopperInstance");
  function cr() {
    var G2 = O2.props.appendTo, J, ie = U();
    O2.props.interactive && G2 === lp || G2 === "parent" ? J = ie.parentNode : J = up(G2, [ie]), J.contains(P) || J.appendChild(P), O2.state.isMounted = true, Mt();
  }
  __name(cr, "cr");
  c2(cr, "mount");
  function pr() {
    return ka(P.querySelectorAll("[data-tippy-root]"));
  }
  __name(pr, "pr");
  c2(pr, "getNestedPopperTree");
  function dn(G2) {
    O2.clearDelayTimeouts(), G2 && fe("onTrigger", [O2, G2]), wt();
    var J = Ue(true), ie = ne(), ye = ie[0], he = ie[1];
    Sr.isTouch && ye === "hold" && he && (J = he), J ? n = setTimeout(function() {
      O2.show();
    }, J) : O2.show();
  }
  __name(dn, "dn");
  c2(dn, "scheduleShow");
  function ct(G2) {
    if (O2.clearDelayTimeouts(), fe("onUntrigger", [O2, G2]), !O2.state.isVisible) {
      Et();
      return;
    }
    if (!(O2.props.trigger.indexOf("mouseenter") >= 0 && O2.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(G2.type) >= 0 && d2)) {
      var J = Ue(false);
      J ? a = setTimeout(function() {
        O2.state.isVisible && O2.hide();
      }, J) : u2 = requestAnimationFrame(function() {
        O2.hide();
      });
    }
  }
  __name(ct, "ct");
  c2(ct, "scheduleHide");
  function Pr() {
    O2.state.isEnabled = true;
  }
  __name(Pr, "Pr");
  c2(Pr, "enable");
  function Nt() {
    O2.hide(), O2.state.isEnabled = false;
  }
  __name(Nt, "Nt");
  c2(Nt, "disable");
  function Wn() {
    clearTimeout(n), clearTimeout(a), cancelAnimationFrame(u2);
  }
  __name(Wn, "Wn");
  c2(Wn, "clearDelayTimeouts");
  function Ir(G2) {
    if (!O2.state.isDestroyed) {
      fe("onBeforeUpdate", [O2, G2]), Un();
      var J = O2.props, ie = rp(t, Object.assign({}, J, Jc(G2), { ignoreAttributes: true }));
      O2.props = ie, kt(), J.interactiveDebounce !== ie.interactiveDebounce && (zt(), C = Zc(cn, ie.interactiveDebounce)), J.triggerTarget && !ie.triggerTarget ? $n(J.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : ie.triggerTarget && t.removeAttribute("aria-expanded"), tt(), Ge(), N2 && N2(J, ie), O2.popperInstance && (Mt(), pr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [O2, G2]);
    }
  }
  __name(Ir, "Ir");
  c2(Ir, "setProps");
  function fn(G2) {
    O2.setProps({ content: G2 });
  }
  __name(fn, "fn");
  c2(fn, "setContent");
  function wi() {
    var G2 = O2.state.isVisible, J = O2.state.isDestroyed, ie = !O2.state.isEnabled, ye = Sr.isTouch && !O2.props.touch, he = ul(O2.props.duration, 0, br.duration);
    if (!(G2 || J || ie || ye) && !U().hasAttribute("disabled") && (fe("onShow", [O2], false), O2.props.onShow(O2) !== false)) {
      if (O2.state.isVisible = true, pe() && (P.style.visibility = "visible"), Ge(), wt(), O2.state.isMounted || (P.style.transition = "none"), pe()) {
        var pt = Pe(), dt = pt.box, Xr = pt.content;
        cl([dt, Xr], 0);
      }
      y2 = c2(function() {
        var ft;
        if (!(!O2.state.isVisible || E)) {
          if (E = true, P.offsetHeight, P.style.transition = O2.props.moveTransition, pe() && O2.props.animation) {
            var Oi = Pe(), Dr = Oi.box, Yr = Oi.content;
            cl([Dr, Yr], he), Qc([Dr, Yr], "visible");
          }
          Ze(), tt(), Kc(dl, O2), (ft = O2.popperInstance) == null || ft.forceUpdate(), fe("onMount", [O2]), O2.props.animation && pe() && rr(he, function() {
            O2.state.isShown = true, fe("onShown", [O2]);
          });
        }
      }, "onFirstUpdate"), cr();
    }
  }
  __name(wi, "wi");
  c2(wi, "show");
  function wo() {
    var G2 = !O2.state.isVisible, J = O2.state.isDestroyed, ie = !O2.state.isEnabled, ye = ul(O2.props.duration, 1, br.duration);
    if (!(G2 || J || ie) && (fe("onHide", [O2], false), O2.props.onHide(O2) !== false)) {
      if (O2.state.isVisible = false, O2.state.isShown = false, E = false, d2 = false, pe() && (P.style.visibility = "hidden"), zt(), Et(), Ge(true), pe()) {
        var he = Pe(), pt = he.box, dt = he.content;
        O2.props.animation && (cl([pt, dt], ye), Qc([pt, dt], "hidden"));
      }
      Ze(), tt(), O2.props.animation ? pe() && Ar(ye, O2.unmount) : O2.unmount();
    }
  }
  __name(wo, "wo");
  c2(wo, "hide");
  function Ei(G2) {
    ue().addEventListener("mousemove", C), Kc(za, C), C(G2);
  }
  __name(Ei, "Ei");
  c2(Ei, "hideWithInteractivity");
  function Si() {
    O2.state.isVisible && O2.hide(), O2.state.isMounted && (pn(), pr().forEach(function(G2) {
      G2._tippy.unmount();
    }), P.parentNode && P.parentNode.removeChild(P), dl = dl.filter(function(G2) {
      return G2 !== O2;
    }), O2.state.isMounted = false, fe("onHidden", [O2]));
  }
  __name(Si, "Si");
  c2(Si, "unmount");
  function Eo() {
    O2.state.isDestroyed || (O2.clearDelayTimeouts(), O2.unmount(), Un(), delete t._tippy, O2.state.isDestroyed = true, fe("onDestroy", [O2]));
  }
  __name(Eo, "Eo");
  c2(Eo, "destroy");
}
__name(Qh, "Qh");
c2(Qh, "createTippy");
function gi(t, r) {
  r === void 0 && (r = {});
  var e = br.plugins.concat(r.plugins || []);
  Hh();
  var n = Object.assign({}, r, { plugins: e }), a = Lh(t);
  if (false)
    var u2, d2;
  var v = a.reduce(function(m2, E) {
    var w2 = E && Qh(E, n);
    return w2 && m2.push(w2), m2;
  }, []);
  return Na(t) ? v[0] : v;
}
__name(gi, "gi");
c2(gi, "tippy");
gi.defaultProps = br;
gi.setDefaultProps = Yh;
gi.currentInput = Sr;
var ev = Object.assign({}, oo, { effect: c2(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
var fp = c2(function(r, e) {
  var n;
  e === void 0 && (e = {});
  var a = r, u2 = [], d2 = [], v, m2 = e.overrides, E = [], w2 = false;
  function M2() {
    d2 = a.map(function(O2) {
      return $n(O2.props.triggerTarget || O2.reference);
    }).reduce(function(O2, B) {
      return O2.concat(B);
    }, []);
  }
  __name(M2, "M");
  c2(M2, "setTriggerTargets");
  function y2() {
    u2 = a.map(function(O2) {
      return O2.reference;
    });
  }
  __name(y2, "y");
  c2(y2, "setReferences");
  function x(O2) {
    a.forEach(function(B) {
      O2 ? B.enable() : B.disable();
    });
  }
  __name(x, "x");
  c2(x, "enableInstances");
  function C(O2) {
    return a.map(function(B) {
      var P = B.setProps;
      return B.setProps = function(N2) {
        P(N2), B.reference === v && O2.setProps(N2);
      }, function() {
        B.setProps = P;
      };
    });
  }
  __name(C, "C");
  c2(C, "interceptSetProps");
  function _(O2, B) {
    var P = d2.indexOf(B);
    if (B !== v) {
      v = B;
      var N2 = (m2 || []).concat("content").reduce(function(F2, Z) {
        return F2[Z] = a[P].props[Z], F2;
      }, {});
      O2.setProps(Object.assign({}, N2, { getReferenceClientRect: typeof N2.getReferenceClientRect == "function" ? N2.getReferenceClientRect : function() {
        var F2;
        return (F2 = u2[P]) == null ? void 0 : F2.getBoundingClientRect();
      } }));
    }
  }
  __name(_, "_");
  c2(_, "prepareInstance"), x(false), y2(), M2();
  var D2 = { fn: c2(function() {
    return { onDestroy: c2(function() {
      x(true);
    }, "onDestroy"), onHidden: c2(function() {
      v = null;
    }, "onHidden"), onClickOutside: c2(function(P) {
      P.props.showOnCreate && !w2 && (w2 = true, v = null);
    }, "onClickOutside"), onShow: c2(function(P) {
      P.props.showOnCreate && !w2 && (w2 = true, _(P, u2[0]));
    }, "onShow"), onTrigger: c2(function(P, N2) {
      _(P, N2.currentTarget);
    }, "onTrigger") };
  }, "fn") }, j = gi(mi(), Object.assign({}, Ih(e, ["overrides"]), { plugins: [D2].concat(e.plugins || []), triggerTarget: d2, popperOptions: Object.assign({}, e.popperOptions, { modifiers: [].concat(((n = e.popperOptions) == null ? void 0 : n.modifiers) || [], [ev]) }) })), L = j.show;
  j.show = function(O2) {
    if (L(), !v && O2 == null)
      return _(j, u2[0]);
    if (!(v && O2 == null)) {
      if (typeof O2 == "number")
        return u2[O2] && _(j, u2[O2]);
      if (a.indexOf(O2) >= 0) {
        var B = O2.reference;
        return _(j, B);
      }
      if (u2.indexOf(O2) >= 0)
        return _(j, O2);
    }
  }, j.showNext = function() {
    var O2 = u2[0];
    if (!v)
      return j.show(0);
    var B = u2.indexOf(v);
    j.show(u2[B + 1] || O2);
  }, j.showPrevious = function() {
    var O2 = u2[u2.length - 1];
    if (!v)
      return j.show(O2);
    var B = u2.indexOf(v), P = u2[B - 1] || O2;
    j.show(P);
  };
  var W = j.setProps;
  return j.setProps = function(O2) {
    m2 = O2.overrides || m2, W(O2);
  }, j.setInstances = function(O2) {
    x(true), E.forEach(function(B) {
      return B();
    }), a = O2, x(false), y2(), M2(), E = C(j), j.setProps({ triggerTarget: d2 });
  }, E = C(j), j;
}, "createSingleton");
gi.setDefaultProps({ render: dp });
var It = gi;
var ml = c2((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
function _e(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = nt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let a = this.helpContent;
        a !== null && (this.popup = It(this, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, placement: "auto", theme: "qni", onShow(u2) {
          u2.setContent(a);
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
    }
    initHelp() {
      this.helpableService = Ke(this.helpableMachine).onTransition((a) => {
        this.debugHelpable && console.log(`helpable: ${it(a.value)}`);
      }).start(), this.helpableService.send("INIT");
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
      let u2 = document.getElementById(a);
      return u2 === null ? null : u2.content.cloneNode(true);
    }
  }
  __name(r, "r");
  return c2(r, "HelpableMixinClass"), R2([q2], r.prototype, "help", 2), R2([q2], r.prototype, "helpId", 2), R2([q2], r.prototype, "debugHelpable", 2), r;
}
__name(_e, "_e");
c2(_e, "HelpableMixin");
function Me(t) {
  class r extends t {
    get hoverable() {
      return this.hasAttribute("data-hoverable");
    }
    set hoverable(n) {
      n ? this.setAttribute("data-hoverable", "") : this.removeAttribute("data-hoverable");
    }
  }
  __name(r, "r");
  return c2(r, "HoverableMixinClass"), r;
}
__name(Me, "Me");
c2(Me, "HoverableMixin");
function* Ga(t) {
  let r = "", e = 0, n = false;
  for (let a = 0; a < t.length; a += 1)
    t[a] === "{" && t[a + 1] === "{" && t[a - 1] !== "\\" && !n ? (n = true, r && (yield { type: "string", start: e, end: a, value: r }), r = "{{", e = a, a += 2) : t[a] === "}" && t[a + 1] === "}" && t[a - 1] !== "\\" && n && (n = false, yield { type: "part", start: e, end: a + 2, value: r.slice(2).trim() }, r = "", a += 2, e = a), r += t[a] || "";
  r && (yield { type: "string", start: e, end: t.length, value: r });
}
__name(Ga, "Ga");
c2(Ga, "parse");
var hp = /* @__PURE__ */ __name(function(t, r, e, n, a) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !a)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? t !== r || !a : !r.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(t, e) : a ? a.value = e : r.set(t, e), e;
}, "hp");
var an = /* @__PURE__ */ __name(function(t, r, e, n) {
  if (e === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? t !== r || !n : !r.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(t) : n ? n.value : r.get(t);
}, "an");
var Tr;
var La;
var Or = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.expression = e, Tr.set(this, void 0), La.set(this, ""), hp(this, Tr, r, "f"), an(this, Tr, "f").updateParent("");
  }
  get attributeName() {
    return an(this, Tr, "f").attr.name;
  }
  get attributeNamespace() {
    return an(this, Tr, "f").attr.namespaceURI;
  }
  get value() {
    return an(this, La, "f");
  }
  set value(r) {
    hp(this, La, r || "", "f"), an(this, Tr, "f").updateParent(r);
  }
  get element() {
    return an(this, Tr, "f").element;
  }
  get booleanValue() {
    return an(this, Tr, "f").booleanValue;
  }
  set booleanValue(r) {
    an(this, Tr, "f").booleanValue = r;
  }
}, "Or");
c2(Or, "AttributeTemplatePart");
Tr = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap();
var bi = /* @__PURE__ */ __name(class {
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
}, "bi");
c2(bi, "AttributeValueSetter");
var vp = /* @__PURE__ */ __name(function(t, r, e, n, a) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !a)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? t !== r || !a : !r.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(t, e) : a ? a.value = e : r.set(t, e), e;
}, "vp");
var yi = /* @__PURE__ */ __name(function(t, r, e, n) {
  if (e === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? t !== r || !n : !r.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(t) : n ? n.value : r.get(t);
}, "yi");
var Cr;
var $t = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.expression = e, Cr.set(this, void 0), vp(this, Cr, [r], "f"), r.textContent = "";
  }
  get value() {
    return yi(this, Cr, "f").map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return yi(this, Cr, "f")[0].previousSibling;
  }
  get nextSibling() {
    return yi(this, Cr, "f")[yi(this, Cr, "f").length - 1].nextSibling;
  }
  replace(...r) {
    let e = r.map((n) => typeof n == "string" ? new Text(n) : n);
    e.length || e.push(new Text("")), yi(this, Cr, "f")[0].before(...e);
    for (let n of yi(this, Cr, "f"))
      n.remove();
    vp(this, Cr, e, "f");
  }
}, "$t");
c2($t, "NodeTemplatePart");
Cr = /* @__PURE__ */ new WeakMap();
function po(t) {
  return { createCallback(r, e, n) {
    this.processCallback(r, e, n);
  }, processCallback(r, e, n) {
    var a;
    if (!(typeof n != "object" || !n)) {
      for (let u2 of e)
        if (u2.expression in n) {
          let d2 = (a = n[u2.expression]) !== null && a !== void 0 ? a : "";
          t(u2, d2);
        }
    }
  } };
}
__name(po, "po");
c2(po, "createProcessor");
function fo(t, r) {
  t.value = String(r);
}
__name(fo, "fo");
c2(fo, "processPropertyIdentity");
function qa(t, r) {
  return typeof r == "boolean" && t instanceof Or && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(qa, "qa");
c2(qa, "processBooleanAttribute");
var gl = po(fo);
var tv = po((t, r) => {
  qa(t, r) || fo(t, r);
});
var mp = /* @__PURE__ */ __name(function(t, r, e, n, a) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !a)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof r == "function" ? t !== r || !a : !r.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? a.call(t, e) : a ? a.value = e : r.set(t, e), e;
}, "mp");
var ja = /* @__PURE__ */ __name(function(t, r, e, n) {
  if (e === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof r == "function" ? t !== r || !n : !r.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? n : e === "a" ? n.call(t) : n ? n.value : r.get(t);
}, "ja");
var ho;
var vo;
function* rv(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let a = e.attributes.item(n);
        if (a && a.value.includes("{{")) {
          let u2 = new bi(e, a);
          for (let d2 of Ga(a.value))
            if (d2.type === "string")
              u2.append(d2.value);
            else {
              let v = new Or(u2, d2.value);
              u2.append(v), yield v;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{"))
      for (let n of Ga(e.textContent)) {
        n.end < e.textContent.length && e.splitText(n.end), n.type === "part" && (yield new $t(e, n.value));
        break;
      }
}
__name(rv, "rv");
c2(rv, "collectParts");
var Hr = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(r, e, n = gl) {
    var a, u2;
    super(), ho.set(this, void 0), vo.set(this, void 0), Object.getPrototypeOf(this) !== Hr.prototype && Object.setPrototypeOf(this, Hr.prototype), this.appendChild(r.content.cloneNode(true)), mp(this, vo, Array.from(rv(this)), "f"), mp(this, ho, n, "f"), (u2 = (a = ja(this, ho, "f")).createCallback) === null || u2 === void 0 || u2.call(a, this, ja(this, vo, "f"), e);
  }
  update(r) {
    ja(this, ho, "f").processCallback(this, ja(this, vo, "f"), r);
  }
}, "Hr");
c2(Hr, "TemplateInstance");
ho = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap();
var gp = /* @__PURE__ */ new WeakSet();
function bp(t) {
  return gp.has(t);
}
__name(bp, "bp");
c2(bp, "isDirective");
function yp(t, r) {
  return bp(r) ? (r(t), true) : false;
}
__name(yp, "yp");
c2(yp, "processDirective");
function mo(t) {
  return (...r) => {
    let e = t(...r);
    return gp.add(e), e;
  };
}
__name(mo, "mo");
c2(mo, "directive");
var go = /* @__PURE__ */ new WeakMap();
var xi = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), go.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), go.get(this.element).delete(this.type));
  }
  static for(r) {
    go.has(r.element) || go.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = go.get(r.element);
    return n.has(e) ? n.get(e) : new xi(r.element, e);
  }
}, "xi");
c2(xi, "EventHandler");
function xp(t, r) {
  return t instanceof Or && t.attributeName.startsWith("on") ? (xi.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(xp, "xp");
c2(xp, "processEvent");
function nv(t, r) {
  return r instanceof Hn && t instanceof $t ? (r.renderInto(t), true) : false;
}
__name(nv, "nv");
c2(nv, "processSubTemplate");
function iv(t, r) {
  return r instanceof DocumentFragment && t instanceof $t ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(iv, "iv");
c2(iv, "processDocumentFragment");
function ov(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(ov, "ov");
c2(ov, "isIterable");
function av(t, r) {
  if (!ov(r))
    return false;
  if (t instanceof $t) {
    let e = [];
    for (let n of r)
      if (n instanceof Hn) {
        let a = document.createDocumentFragment();
        n.renderInto(a), e.push(...a.childNodes);
      } else
        n instanceof DocumentFragment ? e.push(...n.childNodes) : e.push(String(n));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(r).join(" "), true;
}
__name(av, "av");
c2(av, "processIterable");
function Ba(t, r) {
  yp(t, r) || qa(t, r) || xp(t, r) || nv(t, r) || iv(t, r) || av(t, r) || fo(t, r);
}
__name(Ba, "Ba");
c2(Ba, "processPart");
var bl = /* @__PURE__ */ new WeakMap();
var wp = /* @__PURE__ */ new WeakMap();
var Ep = /* @__PURE__ */ new WeakMap();
var Hn = /* @__PURE__ */ __name(class {
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  get template() {
    if (bl.has(this.strings))
      return bl.get(this.strings);
    {
      let r = document.createElement("template"), e = this.strings.length - 1;
      return r.innerHTML = this.strings.reduce((n, a, u2) => n + a + (u2 < e ? `{{ ${u2} }}` : ""), ""), bl.set(this.strings, r), r;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (wp.get(r) !== e) {
      wp.set(r, e);
      let n = new Hr(e, this.values, this.processor);
      Ep.set(r, n), r instanceof $t ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    Ep.get(r).update(this.values);
  }
}, "Hn");
c2(Hn, "TemplateResult");
var sv = po(Ba);
function Y(t, ...r) {
  return new Hn(t, r, sv);
}
__name(Y, "Y");
c2(Y, "html");
function ee(t, r) {
  t.renderInto(r);
}
__name(ee, "ee");
c2(ee, "render");
var yl = /* @__PURE__ */ new WeakMap();
var lv = mo((...t) => (r) => {
  yl.has(r) || yl.set(r, { i: t.length });
  let e = yl.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((a) => {
      n < e.i && (e.i = n, Ba(r, a));
    }) : n <= e.i && (e.i = n, Ba(r, t[n]));
});
var uv = mo((t) => (r) => {
  if (!(r instanceof $t))
    return;
  let e = document.createElement("template");
  e.innerHTML = t;
  let n = document.importNode(e.content, true);
  r.replace(...n.childNodes);
});
function ze(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.icon = "";
    }
    iconHtml(a) {
      return Y`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(a)}</div>`;
    }
    iconSvg(a) {
      if (this.icon === "")
        return Y([a]);
      let u2 = document.getElementById(this.icon);
      return u2 === null ? null : u2.content.cloneNode(true);
    }
    get iconStyle() {
      return Y`<style>
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
  return c2(r, "IconableMixinClass"), R2([q2], r.prototype, "icon", 2), r;
}
__name(ze, "ze");
c2(ze, "IconableMixin");
var Fr = c2((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
function Qe(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(r, "r");
  return c2(r, "IfableMixinClass"), R2([q2], r.prototype, "if", 2), r;
}
__name(Qe, "Qe");
c2(Qe, "IfableMixin");
var Sp = c2((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function Ae(t) {
  class r extends t {
    initMenu() {
      this._tippy || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = It(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var u2, d2, v, m2;
        (u2 = this.ifTooltip) == null || u2.hide(), (d2 = this.angleTooltip) == null || d2.hide(), (v = this.flagTooltip) == null || v.hide(), (m2 = this.deleteTooltip) == null || m2.hide();
      } }));
    }
    showMenu() {
      this.menu.show();
    }
    hideMenu() {
      this.menu.hide();
    }
    destroyMenu() {
      let a = this._tippy;
      a == null || a.destroy();
    }
    dispatchShowMenuEvent() {
      this.dispatchEvent(new Event("operation-show-menu", { bubbles: true }));
    }
    get menuContent() {
      let a = document.getElementById("operation-menu");
      if (a === null || a.content === void 0)
        return null;
      let u2 = a.content.cloneNode(true), d2 = document.createDocumentFragment();
      return ee(Y`${u2}`, d2), d2;
    }
    initMenuItems(a) {
      if (Fr(a.reference)) {
        let d2 = a.popper.querySelector("button[data-operation-menu-if]");
        le.notNull(d2), d2.disabled = false, this.ifTooltip = d2._tippy, this.ifTooltip === void 0 && (this.ifTooltip = It(d2, { animation: false, content: "Set `if' Conditional" }), d2.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (wn(a.reference)) {
        let d2 = a.popper.querySelector("button[data-operation-menu-angle]");
        le.notNull(d2), d2.disabled = false, this.angleTooltip = d2._tippy, this.angleTooltip === void 0 && (this.angleTooltip = It(d2, { animation: false, content: "Change Angle" }), d2.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Dn(a.reference)) {
        let d2 = a.popper.querySelector("button[data-operation-menu-flag]");
        le.notNull(d2), d2.disabled = false, this.flagTooltip = d2._tippy, this.flagTooltip === void 0 && (this.flagTooltip = It(d2, { animation: false, content: "Set Condifitonal Flag" }), d2.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let u2 = a.popper.querySelector("[data-operation-menu-delete]");
      le.notNull(u2), this.deleteTooltip = u2._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = It(u2, { animation: false, content: "Delete" })), u2.addEventListener("mousedown", this.destroyMenu.bind(this)), u2.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  __name(r, "r");
  return c2(r, "MenuableMixinClass"), r;
}
__name(Ae, "Ae");
c2(Ae, "MenuableMixin");
var et = /* @__PURE__ */ __name(class extends Ae(_e(Ce(Oe(Me(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Ws;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (le.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let n = this.blochInspectorPopupContent();
    It(this, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, placement: "auto", theme: "qni", onShow(u2) {
      u2.setContent(n);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return ee(Y`
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
  attributeChangedCallback(e, n, a) {
    !this.body || n !== a && a !== null && (e === "data-x" && (this.x = parseFloat(a)), e === "data-y" && (this.y = parseFloat(a)), e === "data-z" && (this.z = parseFloat(a)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = c2((a) => Y`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${a}deg)"></div>`, "vectorLineRect"), n = c2((a, u2) => Y`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${u2}(${a}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    ee(Y`<style>
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
                  ${n(0, "Y")} ${n(20, "Y")} ${n(40, "Y")}
                  ${n(60, "Y")} ${n(80, "Y")} ${n(100, "Y")}
                  ${n(120, "Y")} ${n(140, "Y")} ${n(160, "Y")}
                  ${n(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ws}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let n = this._tippy;
    n == null || n.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return le.notNull(e), parseFloat(e);
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
    return le.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return le.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
  forceSigned(e, n = 4) {
    return (e >= 0 ? "+" : "") + e.toFixed(n);
  }
}, "et");
c2(et, "BlochDisplayElement"), R2([je], et.prototype, "body", 2), R2([je], et.prototype, "vectorLine", 2), R2([je], et.prototype, "vectorEnd", 2), R2([je], et.prototype, "vector", 2), R2([fr], et.prototype, "vectorEndCircles", 2), R2([q2], et.prototype, "x", 2), R2([q2], et.prototype, "y", 2), R2([q2], et.prototype, "z", 2);
te(et);
var Tp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Dt = /* @__PURE__ */ __name(class extends Ae(_e(Ce(Be(ze(Oe(Me(HTMLElement))))))) {
  get operationType() {
    return Us;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Tp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Us}"`;
  }
}, "Dt");
c2(Dt, "ControlGateElement");
te(Dt);
var Op = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Ht = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Op)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${va}<${this.if}"` : `"${va}"`;
  }
}, "Ht");
c2(Ht, "HGateElement");
te(Ht);
var Cp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends Ae(_e(Ac(Ce(ze(Oe(Me(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return Oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">
        ${this.iconHtml(Cp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${Oa}"` : `"${Oa}>${this.flag}"`;
  }
}, "Ft");
c2(Ft, "MeasurementGateElement"), R2([q2], Ft.prototype, "value", 2);
te(Ft);
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
var Ut = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Qr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(_p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ya}"` : `"${ya}(${this.angle.replace("/", "_")})"`;
  }
}, "Ut");
c2(Ut, "PhaseGateElement");
te(Ut);
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
var Wt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Mp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${wa}<${this.if}"` : `"${wa}"`;
  }
}, "Wt");
c2(Wt, "RnotGateElement");
te(Wt);
var Ap = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Qr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Ap)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ea}"` : `"${Ea}(${this.angle.replace("/", "_")})"`;
  }
}, "Vt");
c2(Vt, "RxGateElement");
te(Vt);
var Pp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Xt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Qr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Pp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Sa}"` : `"${Sa}(${this.angle.replace("/", "_")})"`;
  }
}, "Xt");
c2(Xt, "RyGateElement");
te(Xt);
var Ip = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Qr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return Ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Ip)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ta}"` : `"${Ta}(${this.angle.replace("/", "_")})"`;
  }
}, "Yt");
c2(Yt, "RzGateElement");
te(Yt);
var Dp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends Ae(_e(He(Ce(Be(ze(Oe(Me(HTMLElement)))))))) {
  get operationType() {
    return Fs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Dp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Fs}"`;
  }
}, "Zt");
c2(Zt, "SwapGateElement");
te(Zt);
var Rp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${xa}<${this.if}"` : `"${xa}"`;
  }
}, "Kt");
c2(Kt, "TGateElement");
te(Kt);
var zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Rt = /* @__PURE__ */ __name(class extends Ae(_e(Ce(ze(Oe(Me(HTMLElement)))))) {
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
    ee(Y`<div part="body">
        ${this.iconHtml(zp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Rt");
c2(Rt, "WriteGateElement"), R2([q2], Rt.prototype, "value", 2);
te(Rt);
var kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ma}<${this.if}"` : `"${ma}"`;
  }
}, "Jt");
c2(Jt, "XGateElement");
te(Jt);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ga}<${this.if}"` : `"${ga}"`;
  }
}, "Qt");
c2(Qt, "YGateElement");
te(Qt);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    ee(Y`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ba}<${this.if}"` : `"${ba}"`;
  }
}, "er");
c2(er, "ZGateElement");
te(er);
var Ye = c2((t) => t instanceof Ht || t instanceof Jt || t instanceof Qt || t instanceof er || t instanceof Ut || t instanceof Kt || t instanceof Wt || t instanceof Vt || t instanceof Xt || t instanceof Yt || t instanceof Zt || t instanceof Dt || t instanceof et || t instanceof Rt || t instanceof Ft, "isOperation");
var Lp = c2((t) => t != null && t instanceof Ht, "isHGateElement");
var qp = c2((t) => t != null && t instanceof Jt, "isXGateElement");
var jp = c2((t) => t != null && t instanceof Qt, "isYGateElement");
var Bp = c2((t) => t != null && t instanceof er, "isZGateElement");
var bo = c2((t) => t != null && t instanceof Ut, "isPhaseGateElement");
var $p = c2((t) => t != null && t instanceof Kt, "isTGateElement");
var Hp = c2((t) => t != null && t instanceof Wt, "isRnotGateElement");
var $a = c2((t) => t != null && t instanceof Vt, "isRxGateElement");
var Ha = c2((t) => t != null && t instanceof Xt, "isRyGateElement");
var Fa = c2((t) => t != null && t instanceof Yt, "isRzGateElement");
var Fp = c2((t) => t != null && t instanceof Zt, "isSwapGateElement");
var xl = c2((t) => t != null && t instanceof Dt, "isControlGateElement");
var Up = c2((t) => t != null && t instanceof et, "isBlochDisplayElement");
var bT = c2((t) => t != null && t instanceof Rt, "isWriteGateElement");
var Wp = c2((t) => t != null && t instanceof Ft, "isMeasurementGateElement");
function Vp(t) {
  return /^-?\d+$/.test(t);
}
__name(Vp, "Vp");
c2(Vp, "isNumeric");
var Ua = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    ee(Y`<slot></slot>`, this.shadowRoot);
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
    return le.notNull(e), e;
  }
  initPopup() {
    this.popup = It(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let n = e.target;
    !this.popup.popper.contains(n) && !this.popup.reference.contains(n) && !Ye(n) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    le.notNull(e);
    let n = e.content.cloneNode(true), a = document.createDocumentFragment();
    return ee(Y`${n}`, a), a;
  }
}, "Ua");
c2(Ua, "InspectorButtonElement");
te(Ua);
var yo = Zo(Ca(), 1);
var wl = c2((t) => t !== null && t instanceof _r, "isAngleSliderElement");
var _r = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = nt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new Gr("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = no(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, a] = this.findSnapAngle(this.radian);
      this.angle = a;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [a] = this.findSnapAngle(wc(this.angle));
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
  }
  attributeChangedCallback(e, n, a) {
    n !== a && a !== null && (e === "data-angle" && a !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.angleSliderService !== void 0 && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.angleSliderService = Ke(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${it(e.value)}`);
    }).start(), this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, yo.default)(this).unset();
  }
  update() {
    ee(Y`<style>
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
    let n = yo.default.getElementRect(e.target).width, a = e.pageX / n;
    this.left = a;
    let u2 = this.proportionToRadian(a);
    this.setAttribute("data-radian", u2.toString());
    let [, d2] = this.findSnapAngle(u2);
    this.angle !== d2 && (this.angle = d2);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, n = 2 * this.denominator, a = new Array(n - e + 1).fill(null).map((u2, d2) => d2 + e);
    this.snapAngles = {};
    for (let u2 of a)
      this.denominator === 1 ? u2 === 0 ? this.snapAngles[0] = "0" : u2 === 1 ? this.snapAngles[Math.PI] = "\u03C0" : u2 === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[u2 * Math.PI] = `${u2}\u03C0` : u2 === 0 ? this.snapAngles[0] = "0" : u2 === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : u2 === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[u2 * Math.PI / this.denominator] = `${u2}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let n = null, a = null, u2 = null;
    for (let d2 in this.snapAngles) {
      let v = Math.abs(parseFloat(d2) - e);
      (n === null || v < n) && (n = v, a = parseFloat(d2), u2 = this.snapAngles[d2]);
    }
    return le.notNull(a), le.notNull(u2), [a, u2];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "_r");
c2(_r, "AngleSliderElement"), R2([q2], _r.prototype, "angle", 2), R2([q2], _r.prototype, "radian", 2), R2([q2], _r.prototype, "denominator", 2), R2([q2], _r.prototype, "disabled", 2), R2([q2], _r.prototype, "debug", 2);
te(_r);
var xt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    if (this.clear(), this.disableAllPanes(), Fr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), wn(e)) {
      let n = no(e.angle);
      bo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : ($a(e) || Ha(e) || Fa(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Dn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    ee(Y`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let n = e.target;
    if (!wl(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!wl(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    le.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Tc(e)) {
      let n, a = no(e);
      this.denominatorInput.value = a.toString(), this.denominatorLabel.textContent = a.toString(), this.backupCurrentDenominator(), Ec(e, "-2\u03C0") ? (n = `-${a * 2}\u03C0/${a}`, this.angleInput.value = n) : Sc(e, "2\u03C0") ? (n = `${a * 2}\u03C0/${a}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    le.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Vp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "xt");
c2(xt, "OperationInspectorElement"), R2([je], xt.prototype, "ifInput", 2), R2([je], xt.prototype, "angleInputLabel", 2), R2([je], xt.prototype, "angleInput", 2), R2([je], xt.prototype, "angleSlider", 2), R2([je], xt.prototype, "denominatorInput", 2), R2([je], xt.prototype, "denominatorVariableLabel", 2), R2([je], xt.prototype, "denominatorLabel", 2), R2([je], xt.prototype, "reduceAngleFractionCheckbox", 2), R2([je], xt.prototype, "flagInput", 2), R2([q2], xt.prototype, "conditionalGatePaneDisabled", 2), R2([q2], xt.prototype, "anglePaneDisabled", 2), R2([q2], xt.prototype, "conditionalFlagPaneDisabled", 2);
te(xt);
var tr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let n = this.qubitCircles;
    for (let [a, u2] of Object.entries(e)) {
      let d2 = n[parseInt(a)];
      le.notNull(d2);
      let v = Lr.from(u2);
      d2.setAttribute("data-amplitude-real", v.real.toString()), d2.setAttribute("data-amplitude-imag", v.imag.toString());
      let m2 = v.abs();
      if (this.setRoundedMagnitude(d2, m2), m2 === 0)
        continue;
      let E = v.phase() / Math.PI * 180;
      this.setRoundedPhase(d2, E);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initQubitCirclePopup(this.qubitCircles), this.hasAttribute("data-multi-qubits") && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()));
  }
  dispatchLoadEvent() {
    this.dispatchEvent(new Event("circle-notation.load", { bubbles: true }));
  }
  attributeChangedCallback(e, n, a) {
    this.shadowRoot !== null && n !== a && e === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let e = { root: this, threshold: [0, 0.2] }, n = c2((u2) => {
      for (let d2 of u2) {
        let v = d2.target;
        d2.intersectionRatio >= 0.2 ? (v.setAttribute("data-targets", "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : d2.intersectionRatio === 0 && v.setAttribute("data-targets", "circle-notation.qubitCircleGroups");
      }
    }, "callback"), a = new IntersectionObserver(n, e);
    for (let u2 of this.qubitCircleGroups)
      a.observe(u2);
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  get visibleQubitCircleKets() {
    let e = 2 ** this.qubitCount;
    return this.visibleQubitCircles.map((n) => parseInt(n.getAttribute("data-ket"))).filter((n) => n < e);
  }
  get visibleQubitCircles() {
    let e = this.visibleQubitCircleGroups.map((n) => Array.from(n.querySelectorAll(".qubit-circle")));
    return [].concat(...e);
  }
  update() {
    ee(Y`<style>
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
    for (let [e, n] of (this.getAttribute("data-magnitudes") || "1.0").split(",").entries())
      this.setRoundedMagnitude(this.qubitCircles[e], parseFloat(n));
    for (let [e, n] of (this.getAttribute("data-phases") || "").split(",").entries()) {
      let a = this.qubitCircles[e], u2 = n ? parseFloat(n) : 0;
      this.setRoundedPhase(a, u2);
      let d2 = a.querySelector(".qubit-circle__phase");
      d2.style.transform = `rotate(${-u2}deg)`;
    }
  }
  setRoundedMagnitude(e, n) {
    if (e === null || e === void 0)
      return;
    let a = Math.round(n * 100);
    a = a < 10 ? a === 0 ? 0 : 10 : Math.round(a / 10) * 10, a = a / 100, e.setAttribute("data-magnitude", n.toString()), e.setAttribute("data-rounded-magnitude", a.toString());
  }
  setRoundedPhase(e, n) {
    if (e === null || e === void 0)
      return;
    let a = Math.round(n / 10) * 10;
    a < 0 && (a = 360 + a), e.setAttribute("data-phase", n.toString()), e.setAttribute("data-rounded-phase", a.toString());
  }
  get qubitCirclesHtml() {
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : Y`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(e) {
    return Y`<div
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
    let n = Y``, a = this.qubitCircleGroup([...Array(2 ** e).keys()], (u2) => this.qubitCircleGroup(u2, (d2) => this.qubitCircleGroup(d2, (v) => this.qubitCircleGroup(v, (m2) => this.qubitCircleGroup(m2, (E) => this.qubitCircleGroup(E, (w2) => this.qubitCircleGroup(w2)))))), 256);
    for (let u2 of a)
      n = Y`${n} ${u2}`;
    return n;
  }
  qubitCircleGroup(e, n, a = e.length / 2) {
    return c2((d2, v = 1) => d2.reduce((m2, E, w2) => w2 % v ? m2 : [...m2, d2.slice(w2, w2 + v)], []), "arrayChunk")(e, a).map((d2) => {
      let v = Y``;
      if (n)
        for (let m2 of n(d2))
          v = Y`${v} ${m2}`;
      else
        for (let m2 of d2)
          v = Y`${v} ${this.qubitCircleHtml(m2)}`;
      return a === 64 ? Y`<div class="qubit-circle-group--size${a}" data-targets="circle-notation.qubitCircleGroups">
          ${v}
        </div>` : Y`<div class="qubit-circle-group--size${a}">${v}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let n = It(e);
    fp(n, { allowHTML: true, animation: false, arrow: $r + $r, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let n = e.target, a = this.ketDecimal(n), u2 = n.getAttribute("data-amplitude-real"), d2 = n.getAttribute("data-amplitude-imag"), v = n.getAttribute("data-magnitude"), m2 = n.getAttribute("data-phase"), E;
    u2 === null || d2 === null ? E = Lr.ZERO : E = new Lr(parseFloat(u2), parseFloat(d2));
    let w2;
    v && parseFloat(v) === 0 ? w2 = 0 : w2 = m2 ? parseFloat(m2) : 0, this.setQubitCirclePopupContent(this.popupEl.content, n, a, E, v ? parseFloat(v) : 0, w2, this.qubitCount);
  }
  setQubitCirclePopupContent(e, n, a, u2, d2, v, m2) {
    n._tippy.setContent(this.popupContent(e, a, u2, d2, v, m2));
  }
  popupContent(e, n, a, u2, d2, v) {
    let m2 = e.querySelector(".circle-notation-popup__ket-binary"), E = e.querySelector(".circle-notation-popup__ket-decimal"), w2 = e.querySelector(".circle-notation-popup__amplitude-real"), M2 = e.querySelector(".circle-notation-popup__amplitude-imag"), y2 = e.querySelector(".circle-notation-popup__probability"), x = e.querySelector(".circle-notation-popup__phase");
    m2 && (m2.textContent = n.toString(2).padStart(v, "0")), E && (E.textContent = n.toString()), w2 && (w2.textContent = this.forceSigned(a.real, 5)), M2 && (M2.textContent = `${this.forceSigned(a.imag, 5)}i`), y2 && (y2.textContent = `${this.forceSigned(u2 * u2 * 100, 4)}%`), x && (x.textContent = `${this.forceSigned(d2, 2)}\xB0`);
    let C = document.createElement("div");
    return C.appendChild(e.cloneNode(true)), C.innerHTML;
  }
  get popupEl() {
    return document.getElementById("circle-notation-popup");
  }
  forceSigned(e, n) {
    return (e >= 0 ? "+" : "") + e.toFixed(n);
  }
  ketDecimal(e) {
    let n = e.getAttribute("data-ket");
    return parseInt(n);
  }
}, "tr");
c2(tr, "CircleNotationElement"), R2([q2], tr.prototype, "qubitCount", 2), R2([q2], tr.prototype, "size", 2), R2([q2], tr.prototype, "magnitudes", 2), R2([q2], tr.prototype, "phases", 2), R2([q2], tr.prototype, "multiQubits", 2), R2([q2], tr.prototype, "showKets", 2), R2([fr], tr.prototype, "qubitCircles", 2), R2([fr], tr.prototype, "qubitCircleGroups", 2), R2([fr], tr.prototype, "visibleQubitCircleGroups", 2);
te(tr);
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
var sn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = nt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, n) => {
      if (n.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let a = document.createElement("span");
      a.id = "ripple";
      let u2 = Math.max(this.clientWidth, this.clientHeight), d2 = u2 / 2, v = this.getBoundingClientRect(), m2 = v.left + window.pageXOffset, E = v.top + window.pageYOffset;
      a.setAttribute("part", "ripple"), a.setAttribute("data-target", "run-circuit-button.ripple"), a.style.width = a.style.height = `${u2}px`, a.style.left = `${n.clientX - (m2 + d2)}px`, a.style.top = `${n.clientY - (E + d2)}px`, this.body.appendChild(a);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService = Ke(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${it(e.value)}`);
    }).start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, n, a) {
    n !== a && e === "data-running" && a !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    ee(Y`<style>
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
    return Y([Xp]);
  }
  get tailSpinIcon() {
    return Y([Yp]);
  }
}, "sn");
c2(sn, "RunCircuitButtonElement"), R2([q2], sn.prototype, "running", 2), R2([q2], sn.prototype, "debug", 2), R2([je], sn.prototype, "body", 2), R2([je], sn.prototype, "ripple", 2);
te(sn);
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
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
    ee(Y`<style>
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
}, "Ur");
c2(Ur, "CircuitBlockElement"), R2([q2], Ur.prototype, "comment", 2), R2([q2], Ur.prototype, "finalized", 2), Ur = R2([te], Ur);
var Kp = Zo(Ca(), 1);
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
var El = c2((t) => t != null && t instanceof gt, "isCircuitDropzoneElement");
var gt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = nt({ id: "circuit-dropzone", initial: "empty", states: { empty: { on: { INIT_OPERATION: { target: "occupied", actions: ["initOperation"] }, SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { snapOperation: () => {
      le.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (e, n) => {
      n.type === "PUT_OPERATION" && (this.append(n.operation), this.operationName = n.operation.tagName.toLocaleLowerCase(), n.operation.snapped = true);
    }, initOperation: (e, n) => {
      n.type === "INIT_OPERATION" && (n.operation.snapped = true);
    }, deleteOperation: (e, n) => {
      n.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(n.operation));
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
    let n = Array.from(this.children).filter((a) => Ye(a));
    switch (n.length) {
      case 0:
        return null;
      case 1:
        return n[0];
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
    this.circuitDropzoneService = Ke(this.circuitDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`circuit-dropzone: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.operation !== null && this.initOperation(this.operation), this.initDropzone(), this.addEventListener("operation-snap", this.snapOperation), this.addEventListener("operation-unsnap", this.unsnapOperation), this.addEventListener("operation-end-dragging", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    ee(Y`<style>
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
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, Kp.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: n });
  }
  get wireSvg() {
    return Y([Zp]);
  }
}, "gt");
c2(gt, "CircuitDropzoneElement"), R2([q2], gt.prototype, "operationName", 2), R2([q2], gt.prototype, "inputWireQuantum", 2), R2([q2], gt.prototype, "outputWireQuantum", 2), R2([q2], gt.prototype, "connectTop", 2), R2([q2], gt.prototype, "connectBottom", 2), R2([q2], gt.prototype, "shadow", 2), R2([q2], gt.prototype, "debug", 2);
te(gt);
var ln = c2((t) => t != null && t instanceof Ot, "isCircuitStepElement");
var Ne = c2((t, r) => Array.from(t.reduce((e, n, a, u2) => {
  let d2 = r(n, a, u2), v = e.get(d2);
  return v ? v.push(n) : e.set(d2, [n]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var Ot = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = nt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, n) => {
      if (n.type !== "SNAP_DROPZONE" && n.type !== "OCCUPY_DROPZONE")
        return;
      let a = n.dropzone, u2 = this.bit(a);
      le.notNull(a.operation), a.operation.bit = u2;
    }, dispatchSnapEvent: (e, n) => {
      n.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: n.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, n) => {
      n.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: n.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, n) => {
      n.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: n.dropzone }, bubbles: true }));
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
    this.circuitStepService = Ke(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${it(e.value)}`);
    }).start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone-snap", this.snapDropzone), this.addEventListener("circuit-dropzone-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone-drop", this.unshadow), this.addEventListener("circuit-dropzone-occupy", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(e, n, a) {
    if (n !== a && (e === "data-active" && (a !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (a !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let u2 of this.dropzones)
        a !== null ? u2.shadow = true : u2.shadow = false;
  }
  update() {
    ee(Y`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let u2 of this.dropzones)
      u2.connectTop = false, u2.connectBottom = false;
    let n = this.controlGateDropzones, a = this.controllableDropzones(e);
    for (let u2 of a)
      En(u2.operation) && (u2.operation.controls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), n.length !== 0) {
      if (n.length === 1 && a.length === 0) {
        n[0].operation.disable();
        return;
      }
      a.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e);
    }
  }
  updateSwapConnections(e) {
    let n = e == null ? void 0 : e.disableSwap, a = this.swapGateDropzones;
    if (a.length !== 2 || n)
      for (let u2 of a)
        u2.operation.disable();
    else {
      for (let d2 of a)
        d2.operation.enable(), d2.connectTop = a.some((m2) => this.bit(m2) < this.bit(d2)), d2.connectBottom = a.some((m2) => this.bit(m2) > this.bit(d2));
      let u2 = a.map((d2) => this.bit(d2));
      for (let d2 of this.freeDropzones) {
        let v = Math.min(...u2), m2 = Math.max(...u2);
        v < this.bit(d2) && this.bit(d2) < m2 && (d2.connectTop = true, d2.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e != null && e.disablePhasePhase)
      return;
    let n = this.phaseGateDropzones;
    for (let a of n) {
      let u2 = a.operation;
      if (u2.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let d2 = n.filter((v) => {
        if (!bo(v.operation))
          throw new Error(`${v.operation} isn't a phase-gate element.`);
        return u2.angle === v.operation.angle;
      }).map((v) => this.bit(v));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (d2 = d2.slice(0, e.maxPhasePhaseTargetGates)), d2.includes(this.bit(a)) && (a.connectTop = d2.some((v) => v < this.bit(a)), a.connectBottom = d2.some((v) => v > this.bit(a)));
    }
    for (let a of this.freeDropzones) {
      let d2 = this.phaseGateDropzones.filter((E) => E.connectTop || E.connectBottom).map((E) => this.bit(E)), v = Math.min(...d2), m2 = Math.max(...d2);
      v < this.bit(a) && this.bit(a) < m2 && (a.connectTop = true, a.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let n = this.controlGateDropzones, a = n.map((d2) => this.bit(d2)), u2 = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? a = [] : e.maxControlControlTargetGates > 1 && (a = a.slice(0, e.maxControlControlTargetGates)));
    for (let d2 of n) {
      u2 += 1;
      let v = d2.operation;
      e != null && e.disableControlControl || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && u2 > e.maxControlControlTargetGates) ? v.disable() : (v.enable(), d2.connectTop = a.some((m2) => this.bit(d2) > m2), d2.connectBottom = a.some((m2) => this.bit(d2) < m2));
    }
  }
  updateControlledUConnections(e) {
    let n = this.controllableDropzones(e), a = this.controlGateDropzones, u2 = [...new Set(n.map((M2) => M2.operationName))], d2 = this.numControlGateDropzones(e, u2), v = a.map((M2) => this.bit(M2)), m2 = d2 === null ? v : v.slice(0, d2), E = n.map((M2) => this.bit(M2)), w2 = m2.concat(E);
    for (let [M2, y2] of Object.entries(a)) {
      let x = y2.operation;
      y2.connectBottom = w2.some((C) => this.bit(y2) < C), y2.connectTop = w2.some((C) => this.bit(y2) > C), d2 === null || d2 !== null && parseInt(M2) < d2 ? x.enable() : (y2.connectTop = Math.max(...w2) > this.bit(y2), x.disable());
    }
    for (let M2 of n) {
      if (!En(M2.operation))
        throw new Error(`${M2.operation} isn't controllable.`);
      M2.operation.controls = this.controlBits(M2, v, e), M2.connectTop = w2.some((y2) => y2 < this.bit(M2)), M2.connectBottom = w2.some((y2) => y2 > this.bit(M2));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), a = this.controlGateDropzones.filter((E) => xl(E.operation) && !E.operation.disabled).map((E) => this.bit(E)), u2 = n.map((E) => this.bit(E)), d2 = a.concat(u2), v = Math.min(...d2), m2 = Math.max(...d2);
    for (let E of this.freeDropzones)
      v < this.bit(E) && this.bit(E) < m2 && (E.connectTop = true, E.connectBottom = true);
  }
  controlBits(e, n, a) {
    let u2 = n;
    return a && (a.maxChControlGates > 0 && e.operationName === "h-gate" ? u2 = n.slice(0, a.maxChControlGates) : a.maxCnotControlGates > 0 && e.operationName === "x-gate" ? u2 = n.slice(0, a.maxCnotControlGates) : a.maxCyControlGates > 0 && e.operationName === "y-gate" ? u2 = n.slice(0, a.maxCyControlGates) : a.maxCzControlGates > 0 && e.operationName === "z-gate" ? u2 = n.slice(0, a.maxCzControlGates) : a.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? u2 = n.slice(0, a.maxCphaseControlGates) : a.maxCtControlGates > 0 && e.operationName === "t-gate" ? u2 = n.slice(0, a.maxCtControlGates) : a.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? u2 = n.slice(0, a.maxCrnotControlGates) : a.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? u2 = n.slice(0, a.maxCrxControlGates) : a.maxCryControlGates > 0 && e.operationName === "ry-gate" ? u2 = n.slice(0, a.maxCryControlGates) : a.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? u2 = n.slice(0, a.maxCrzControlGates) : a.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (u2 = n.slice(0, a.maxCswapControlGates))), u2;
  }
  bit(e) {
    let n = this.dropzones.indexOf(e);
    return le.need(n !== -1, "circuit-dropzone not found."), n;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let n = this.dropzones[e];
    return le.notNull(n), n;
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
    let e = new gt();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let n = new gt();
    this.append(n), n.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && xl(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let a = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > a && (a = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > a && (a = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > a && (a = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > a && (a = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > a && (a = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > a && (a = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > a && (a = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > a && (a = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > a && (a = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > a && (a = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > a && (a = e.maxCswapControlGates), a === 0 ? null : a;
  }
  controllableDropzones(e) {
    let n = 0, a = 0, u2 = 0, d2 = 0, v = 0, m2 = 0, E = 0, w2 = 0, M2 = 0, y2 = 0;
    return this.dropzones.filter((x) => x.occupied).filter((x) => En(x.operation)).filter((x) => e === void 0 ? true : Lp(x.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : qp(x.operation) ? (a += 1, e.maxCnotTargetGates !== 0 && a > e.maxCnotTargetGates ? false : !e.disableCnot) : jp(x.operation) ? (u2 += 1, e.maxCyTargetGates !== 0 && u2 > e.maxCyTargetGates ? false : !e.disableCy) : Bp(x.operation) ? (d2 += 1, e.maxCzTargetGates !== 0 && d2 > e.maxCzTargetGates ? false : !e.disableCz) : bo(x.operation) ? (v += 1, e.maxCphaseTargetGates !== 0 && v > e.maxCphaseTargetGates ? false : !e.disableCphase) : $p(x.operation) ? (m2 += 1, e.maxCtTargetGates !== 0 && m2 > e.maxCtTargetGates ? false : !e.disableCt) : Hp(x.operation) ? (E += 1, e.maxCrnotTargetGates !== 0 && E > e.maxCrnotTargetGates ? false : !e.disableCrnot) : $a(x.operation) ? (w2 += 1, e.maxCrxTargetGates !== 0 && w2 > e.maxCrxTargetGates ? false : !e.disableCrx) : Ha(x.operation) ? (M2 += 1, e.maxCryTargetGates !== 0 && M2 > e.maxCryTargetGates ? false : !e.disableCry) : Fa(x.operation) ? (y2 += 1, e.maxCrzTargetGates !== 0 && y2 > e.maxCrzTargetGates ? false : !e.disableCrz) : Fp(x.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    this.dispatchEvent(new Event("circuit-step-update", { bubbles: true }));
  }
  deleteOperation(e) {
    let n = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: n });
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
    for (let [n, a] of Ne(this.operations, (u2) => u2.constructor))
      switch (n) {
        case Ht: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.if))
            for (let [m2, E] of Ne(v, (w2) => w2.controls.toString())) {
              let w2 = E[0], M2 = w2.operationType, y2 = E.map((C) => C.bit), x = { type: M2, targets: y2 };
              d2 !== "" && (x.if = d2), m2 !== "" && (x.controls = w2.controls), e.push(x);
            }
          break;
        }
        case Jt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.if))
            for (let [m2, E] of Ne(v, (w2) => w2.controls.toString())) {
              let w2 = E[0], M2 = w2.operationType, y2 = E.map((C) => C.bit), x = { type: M2, targets: y2 };
              d2 !== "" && (x.if = d2), m2 !== "" && (x.controls = w2.controls), e.push(x);
            }
          break;
        }
        case Qt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.if))
            for (let [m2, E] of Ne(v, (w2) => w2.controls.toString())) {
              let w2 = E[0], M2 = w2.operationType, y2 = E.map((C) => C.bit), x = { type: M2, targets: y2 };
              d2 !== "" && (x.if = d2), m2 !== "" && (x.controls = w2.controls), e.push(x);
            }
          break;
        }
        case er: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.if))
            for (let [m2, E] of Ne(v, (w2) => w2.controls.toString())) {
              let w2 = E[0], M2 = w2.operationType, y2 = E.map((C) => C.bit), x = { type: M2, targets: y2 };
              d2 !== "" && (x.if = d2), m2 !== "" && (x.controls = w2.controls), e.push(x);
            }
          break;
        }
        case Ut: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.angle))
            for (let [m2, E] of Ne(v, (w2) => w2.if))
              for (let [w2, M2] of Ne(E, (y2) => y2.controls.toString())) {
                let y2 = M2[0], x = y2.operationType, C = M2.map((D2) => D2.bit), _ = { type: x, targets: C };
                m2 !== "" && (_.if = m2), d2 !== "" && (_.angle = d2), w2 !== "" && (_.controls = y2.controls), e.push(_);
              }
          break;
        }
        case Kt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.if))
            for (let [m2, E] of Ne(v, (w2) => w2.controls.toString())) {
              let w2 = E[0], M2 = w2.operationType, y2 = E.map((C) => C.bit), x = { type: M2, targets: y2 };
              d2 !== "" && (x.if = d2), m2 !== "" && (x.controls = w2.controls), e.push(x);
            }
          break;
        }
        case Wt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.if))
            for (let [m2, E] of Ne(v, (w2) => w2.controls.toString())) {
              let w2 = E[0], M2 = w2.operationType, y2 = E.map((C) => C.bit), x = { type: M2, targets: y2 };
              d2 !== "" && (x.if = d2), m2 !== "" && (x.controls = w2.controls), e.push(x);
            }
          break;
        }
        case Vt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.angle))
            for (let [m2, E] of Ne(v, (w2) => w2.if))
              for (let [w2, M2] of Ne(E, (y2) => y2.controls.toString())) {
                let y2 = M2[0], x = y2.operationType, C = M2.map((D2) => D2.bit), _ = { type: x, targets: C };
                m2 !== "" && (_.if = m2), d2 !== "" && (_.angle = d2), w2 !== "" && (_.controls = y2.controls), e.push(_);
              }
          break;
        }
        case Xt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.angle))
            for (let [m2, E] of Ne(v, (w2) => w2.if))
              for (let [w2, M2] of Ne(E, (y2) => y2.controls.toString())) {
                let y2 = M2[0], x = y2.operationType, C = M2.map((D2) => D2.bit), _ = { type: x, targets: C };
                m2 !== "" && (_.if = m2), d2 !== "" && (_.angle = d2), w2 !== "" && (_.controls = y2.controls), e.push(_);
              }
          break;
        }
        case Yt: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.angle))
            for (let [m2, E] of Ne(v, (w2) => w2.if))
              for (let [w2, M2] of Ne(E, (y2) => y2.controls.toString())) {
                let y2 = M2[0], x = y2.operationType, C = M2.map((D2) => D2.bit), _ = { type: x, targets: C };
                m2 !== "" && (_.if = m2), d2 !== "" && (_.angle = d2), w2 !== "" && (_.controls = y2.controls), e.push(_);
              }
          break;
        }
        case Zt: {
          let u2 = a.filter((E) => !E.disabled);
          if (u2.length !== 2)
            break;
          let d2 = u2[0].operationType, v = u2[0].controls, m2 = { type: d2, targets: [u2[0].bit, u2[1].bit] };
          v !== void 0 && v.length > 0 && (m2.controls = v), e.push(m2);
          break;
        }
        case Dt: {
          let u2 = a.filter((v) => !v.disabled);
          if (u2.length < 2 || this.operations.some((v) => En(v) && v.controls.length > 0))
            break;
          let d2 = u2.map((v) => v.bit);
          e.push({ type: u2[0].operationType, targets: d2 });
          break;
        }
        case et: {
          let u2 = a, d2 = a.map((v) => v.bit);
          e.push({ type: u2[0].operationType, targets: d2 });
          break;
        }
        case Rt: {
          let u2 = a;
          for (let [, d2] of Ne(u2, (v) => v.value)) {
            let v = d2.map((m2) => m2.bit);
            e.push({ type: d2[0].operationType, targets: v });
          }
          break;
        }
        case Ft: {
          let u2 = a;
          for (let [d2, v] of Ne(u2, (m2) => m2.flag)) {
            let m2 = v.map((M2) => M2.bit), w2 = { type: v[0].operationType, targets: m2 };
            d2 !== "" && (w2.flag = d2), e.push(w2);
          }
          break;
        }
        default:
          throw new Gr("Unrecognized operation", { klass: n });
      }
    return e;
  }
  get operations() {
    return this.dropzones.filter((e) => e.occupied).map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((n) => n.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
}, "Ot");
c2(Ot, "CircuitStepElement"), R2([q2], Ot.prototype, "active", 2), R2([q2], Ot.prototype, "breakpoint", 2), R2([q2], Ot.prototype, "shadow", 2), R2([q2], Ot.prototype, "keep", 2), R2([q2], Ot.prototype, "debug", 2);
te(Ot);
var Fn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = nt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, UNGRAB_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
      this.circuit.draggable = true;
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, n) => {
      n.type === "GRAB_OPERATION" && this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (e, n) => {
      if (n.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let a = n.operation, u2 = this.circuit.snapTargetAt(n.x, n.y);
      if (a.snapped = true, u2.dropzone === null) {
        let d2 = u2.stepIndex;
        le.notNull(d2);
        let v = this.circuit.addShadowStepAfter(d2), m2 = v.dropzones[u2.wireIndex];
        le.notNull(m2), m2.append(a), m2.operationName = a.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(v.dropzones);
      } else
        u2.dropzone.append(a);
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
    }, setSnapTargets: (e, n) => {
      n.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(n.operation);
    }, setBreakpoint: (e, n) => {
      n.type === "CLICK_STEP" && this.circuit.setBreakpoint(n.step);
    }, activateStep: (e, n) => {
      n.type !== "MOUSE_ENTER_STEP" && n.type !== "SNAP_STEP" || (n.step.active = true);
    }, deactivateStep: (e, n) => {
      n.type !== "MOUSE_LEAVE_STEP" && n.type !== "UNSNAP_STEP" || (n.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (e, n) => {
      n.type !== "END_DRAGGING_OPERATION" || n.operation.snapped || this.inspectorButton !== void 0 && (!this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes());
    }, initOperationMenu: (e, n) => {
      if (n.type !== "DROP_OPERATION")
        return;
      let a = n.operation;
      Sp(a) && a.initMenu();
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
  }
  connectedCallback() {
    this.circuitEditorService = Ke(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${it(e.value)}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-ungrab", this.ungrabOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", () => {
      for (let e of this.circuit.operations)
        e.initMenu();
    });
  }
  update() {
    ee(Y`<slot></slot>`, this.shadowRoot);
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  maybeDeactivateOperation(e) {
    let n = e.target;
    !Ye(n) && !this.inspectorButton.popup.popper.contains(n) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: n });
  }
  showOperationMenu(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: n });
  }
  showOperationInspectorIf(e) {
    let n = e.target;
    if (!Fr(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(e) {
    let n = e.target;
    if (!wn(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(e) {
    let n = e.target;
    if (!Dn(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(e) {
    let n = e.target, a = this.activeOperation;
    if (!Fr(a))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: a, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, a = this.activeOperation;
    if (le.notNull(a), !wn(a))
      throw new Error(`${a.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: a, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, a = this.activeOperation;
    if (!Dn(a))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: a, flag: n.flag });
  }
  grabOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: n });
  }
  ungrabOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "UNGRAB_OPERATION", operation: n });
  }
  endDraggingOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: n });
  }
  dropOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: n });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let n = e.target;
    if (!ln(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(e) {
    let n = e.target;
    if (!ln(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(e) {
    let n = e.target;
    if (!ln(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: n });
  }
  operationInSnapRange(e) {
    let n = e.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    let u2 = e.detail.snapTargetInfo, d2 = u2.x, v = u2.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: d2, y: v });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!ln(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!ln(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "Fn");
c2(Fn, "CircuitEditorElement"), R2([q2], Fn.prototype, "debug", 2), R2([je], Fn.prototype, "circuit", 2), R2([je], Fn.prototype, "inspectorButton", 2);
te(Fn);
var xo = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.paletteDropzoneMachine = nt({ id: "palette-dropzone", initial: "idle", states: { idle: { on: { GRAB_OPERATION: { target: "idle", actions: ["newOperation"] }, DELETE_OPERATION: { target: "idle", actions: ["deleteOperation"] } } } } }, { actions: { newOperation: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let a = n.operation, u2 = a.cloneNode(false);
      if (!Ye(u2))
        throw new TypeError(`${u2} isn't an operation.`);
      ml(a) && a.disableHelp(), this.prepend(u2), this.initOperation(u2);
    }, deleteOperation: (e, n) => {
      n.type === "DELETE_OPERATION" && this.removeChild(n.operation);
    } } });
  }
  connectedCallback() {
    this.paletteDropzoneService = Ke(this.paletteDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`palette-dropzone: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    ee(Y`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, ml(e) && e.initHelp();
  }
  get operation() {
    let n = Array.from(this.children).filter((a) => Ye(a));
    if (n.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (n.length === 1)
      return n[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  grabOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new TypeError(`${n} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "GRAB_OPERATION", operation: n });
  }
  deleteOperation(e) {
    let n = e.target;
    if (!Ye(n))
      throw new TypeError(`${n} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "DELETE_OPERATION", operation: n });
  }
}, "xo");
c2(xo, "PaletteDropzoneElement"), R2([q2], xo.prototype, "debug", 2);
te(xo);
var oe = /* @__PURE__ */ __name(class extends HTMLElement {
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
    this.quantumCircuitMachine = nt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
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
    return le.need(n !== -1, `circuit-step index of ${e} not found.`), n;
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
      this.append(new Ot());
  }
  stepAt(e) {
    let n = this.steps[e];
    return le.notNull(n), n;
  }
  addShadowStepAfter(e) {
    let n = new Ot();
    n.shadow = true;
    for (let a = 0; a < this.wireCount; a++)
      n.appendDropzone();
    if (e === -1)
      this.prepend(n);
    else {
      let a = this.steps[e];
      le.notNull(a.parentElement), a.parentElement.insertBefore(n, a.nextSibling);
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
    if (this.quantumCircuitService = Ke(this.quantumCircuitMachine).onTransition((e) => {
      this.debug && console.log(`quantum-circuit: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.hasAttribute("data-update-url")) {
      let e = this.urlJson;
      this.loadFromJson(e);
    }
    this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(e, n, a) {
    n !== a && (e === "data-editing" && (a !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-json" && a !== "" && this.loadFromJson(a));
  }
  update() {
    ee(Y`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let n = e.target;
    this.updateStepOperationAttributes(n);
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
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Ht();
      return a && u2.disable(), u2;
    }, ...n), this.resize(), this;
  }
  x(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Jt();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  y(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Qt();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  z(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new er();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  phase(...e) {
    let n = "", a, u2;
    if (typeof e[0] == "number")
      a = e;
    else if (typeof e[0] == "string")
      n = e[0], a = e.slice(1);
    else {
      let v = e[0];
      a = v.targets, u2 = v.disabled;
    }
    let d2 = this.applyOperationToTargets(() => {
      let v = new Ut();
      return v.angle = n, u2 && v.disable(), v;
    }, ...a);
    return a.length > 1 && this.updateStepOperationAttributes(d2), this;
  }
  t(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Kt();
      return a && u2.disable(), u2;
    }, ...n), this.resize(), this;
  }
  rnot(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Wt();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  rx(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Vt();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  ry(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Xt();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  rz(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u2 = e[0];
      n = u2.targets, a = u2.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u2 = new Yt();
      return a && u2.disable(), u2;
    }, ...n), this;
  }
  swap(...e) {
    let n = this.applyOperationToTargets(() => new Zt(), ...e);
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
      let a = new Rt();
      return a.value = e, a;
    }, ...n), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Ft(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...n) {
    let a = Math.max(...n) + 1, u2 = this.appendStepWithDropzones(a);
    for (let d2 of n) {
      let v = e();
      u2.dropzoneAt(d2).put(v);
    }
    return u2;
  }
  ch(e, n) {
    return this.controlledU(Ht, e, n), this;
  }
  cnot(e, n) {
    return this.controlledU(Jt, e, n), this.resize(), this;
  }
  cy(e, n) {
    return this.controlledU(Qt, e, n), this;
  }
  cz(e, n) {
    return this.controlledU(er, e, n), this;
  }
  cphase(e, n) {
    return this.controlledU(Ut, e, n), this;
  }
  ct(e, n) {
    return this.controlledU(Kt, e, n), this;
  }
  crnot(e, n) {
    return this.controlledU(Wt, e, n), this;
  }
  crx(e, n) {
    return this.controlledU(Vt, e, n), this;
  }
  cry(e, n) {
    return this.controlledU(Xt, e, n), this;
  }
  crz(e, n) {
    return this.controlledU(Yt, e, n), this;
  }
  cswap(e, n) {
    return this.controlledU(Zt, e, n), this;
  }
  cc(...e) {
    let n = Math.max(...e) + 1, a = this.appendStepWithDropzones(n);
    for (let u2 of e)
      a.dropzoneAt(u2).put(new Dt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(a), this;
  }
  controlledU(e, n, a) {
    let u2 = [].concat(n), d2 = [].concat(a), v = u2.concat(d2), m2 = Math.max(...v) + 1, E = this.appendStepWithDropzones(m2);
    for (let w2 of u2)
      E.dropzoneAt(w2).put(new Dt());
    for (let w2 of d2)
      E.dropzoneAt(w2).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(E);
  }
  appendStep() {
    let e = new Ot(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(e) : n.append(e), e;
  }
  appendStepWithDropzones(e) {
    let n = new Ot();
    this.append(n);
    for (let a = 0; a < e; a++) {
      let u2 = new gt();
      n.append(u2);
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
    for (; this.steps.every((e) => e.wireCount > this.minWireCount && !e.lastDropzone.occupied); )
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
    for (let u2 of a.cols) {
      let d2 = this.appendStep();
      for (let v of u2) {
        switch (true) {
          case /^\|0>$/.test(v): {
            let m2 = new Rt();
            m2.hoverable = true, m2.value = "0", d2.appendOperation(m2);
            break;
          }
          case /^\|1>$/.test(v): {
            let m2 = new Rt();
            m2.hoverable = true, m2.value = "1", d2.appendOperation(m2);
            break;
          }
          case /^H/.test(v): {
            let m2 = new Ht();
            m2.hoverable = true, m2.if = this.ifVariable(v.slice(1)), d2.appendOperation(m2);
            break;
          }
          case (/^X$/.test(v) || /^X<(.+)$/.test(v)): {
            let m2 = new Jt();
            m2.hoverable = true, m2.if = v.slice(2).trim(), d2.appendOperation(m2);
            break;
          }
          case /^Y/.test(v): {
            let m2 = new Qt();
            m2.hoverable = true, m2.if = this.ifVariable(v.slice(1)), d2.appendOperation(m2);
            break;
          }
          case /^Z/.test(v): {
            let m2 = new er();
            m2.hoverable = true, m2.if = this.ifVariable(v.slice(1)), d2.appendOperation(m2);
            break;
          }
          case /^P/.test(v): {
            let m2 = new Ut();
            m2.hoverable = true, m2.angle = this.angleParameter(v.slice(1)), d2.appendOperation(m2);
            break;
          }
          case /^T/.test(v): {
            let m2 = new Kt();
            m2.hoverable = true, m2.if = this.ifVariable(v.slice(1)), d2.appendOperation(m2);
            break;
          }
          case /^X\^½/.test(v): {
            let m2 = new Wt();
            m2.hoverable = true, m2.if = this.ifVariable(v.slice(3)), d2.appendOperation(m2);
            break;
          }
          case /^Rx/.test(v): {
            let m2 = new Vt();
            m2.hoverable = true, m2.angle = this.angleParameter(v.slice(2)), d2.appendOperation(m2);
            break;
          }
          case /^Ry/.test(v): {
            let m2 = new Xt();
            m2.hoverable = true, m2.angle = this.angleParameter(v.slice(2)), d2.appendOperation(m2);
            break;
          }
          case /^Rz/.test(v): {
            let m2 = new Yt();
            m2.hoverable = true, m2.angle = this.angleParameter(v.slice(2)), d2.appendOperation(m2);
            break;
          }
          case /^Swap$/.test(v): {
            let m2 = new Zt();
            m2.hoverable = true, d2.appendOperation(m2);
            break;
          }
          case /^•$/.test(v): {
            let m2 = new Dt();
            m2.hoverable = true, d2.appendOperation(m2);
            break;
          }
          case /^Bloch$/.test(v): {
            let m2 = new et();
            m2.hoverable = true, d2.appendOperation(m2);
            break;
          }
          case /^Measure/.test(v): {
            let m2 = new Ft(), E = ((/^>(.+)$/.exec(v.slice(7)) || [])[1] || "").trim();
            m2.hoverable = true, m2.flag = E, d2.appendOperation(m2);
            break;
          }
          case /^[[{](.+)$/.test(v): {
            let m2 = v.slice(1);
            d2.remove(), n = new Ur(), n.comment = m2, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
            break;
          }
          case /^[\]}]$/.test(v): {
            d2.remove(), n.finalize();
            break;
          }
          default: {
            if (v === 1)
              d2.dropzones.length === d2.freeDropzones.length ? d2.keep = true : d2.keep = false;
            else
              throw new Error(`Unknown operation: ${v}`);
            d2.appendDropzone();
          }
        }
        d2.updateOperationAttributes();
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
      let u2 = n - a.wireCount;
      for (let d2 = 0; d2 < u2; d2++)
        a.appendDropzone();
    }
  }
  updateWire(e) {
    let n = false;
    for (let a of this.steps) {
      let u2 = a.dropzoneAt(e);
      if (u2.inputWireQuantum = n, u2.operationName === "write-gate")
        u2.inputWireQuantum = n, u2.outputWireQuantum = true, n = true;
      else if (u2.operationName === "measurement-gate")
        u2.inputWireQuantum = n, u2.outputWireQuantum = false, n = false;
      else if (u2.operationName === "swap-gate") {
        let d2 = a.dropzones.filter((v) => v.operationName === "swap-gate");
        if (d2.length === 2) {
          let v = d2.map((M2) => a.bit(M2)), m2 = a.bit(u2), E = v[0] === m2 ? v[1] : v[0], w2 = a.dropzoneAt(E);
          u2.inputWireQuantum = n, u2.outputWireQuantum = w2.inputWireQuantum, n = w2.inputWireQuantum;
        } else
          u2.inputWireQuantum = n, u2.outputWireQuantum = n;
      } else
        u2.inputWireQuantum = n, u2.outputWireQuantum = n;
    }
  }
  updateChangedWire(e) {
    let n = e.target;
    if (!ln(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let a = e.detail.dropzone;
    if (!El(a))
      throw new Error(`${a} isn't a circuit-dropzone.`);
    let u2 = n.dropzones.indexOf(a);
    le.need(u2 !== -1, "circuit-dropzone not found."), this.updateWire(u2);
  }
  set draggable(e) {
    for (let n of this.operations)
      n.draggable = e;
  }
  snapTargetAt(e, n) {
    return this.isVertical ? this.snapTargets[n][e] : this.snapTargets[e][n];
  }
  setSnapTargets(e) {
    let n = this.dropzones.filter((d2) => !d2.occupied), a = [];
    this.snapTargets = {};
    let u2 = e.dropzone;
    El(u2) && n.push(u2);
    for (let [d2, v] of Object.entries(this.dropzones)) {
      let m2 = v.snapTarget, E = this.isVertical ? m2.y : m2.x, w2 = this.isVertical ? m2.x : m2.y, M2 = parseInt(d2) % this.wireCount, y2 = E - e.snapRange * 0.75, x = E + e.snapRange * 0.75;
      parseInt(d2) < this.wireCount && (this.isVertical ? a.push({ x: w2, y: y2 }) : a.push({ x: y2, y: w2 }), this.snapTargets[y2] === void 0 && (this.snapTargets[y2] = {}), this.snapTargets[y2][w2] === void 0 && (this.snapTargets[y2][w2] = { dropzone: null, stepIndex: -1, wireIndex: M2 })), this.isVertical ? a.push({ x: w2, y: x }) : a.push({ x, y: w2 }), this.snapTargets[x] === void 0 && (this.snapTargets[x] = {}), this.snapTargets[x][w2] === void 0 && (this.snapTargets[x][w2] = { dropzone: null, stepIndex: Math.floor(parseInt(d2) / this.wireCount), wireIndex: M2 }), (!v.occupied || v === u2) && a.push(m2), this.snapTargets[E] === void 0 && (this.snapTargets[E] = {}), this.snapTargets[E][w2] === void 0 && (this.snapTargets[E][w2] = { dropzone: v, stepIndex: null, wireIndex: M2 });
    }
    e.snapTargets = a;
  }
  updateSnapTargets(e) {
    let n = e[0];
    le.notNull(n);
    let a = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [u2, d2] of Object.entries(this.snapTargets))
      if (!(parseInt(u2) <= a))
        for (let v in d2) {
          let m2 = d2[v];
          m2.stepIndex !== null && (m2.stepIndex += 1);
        }
    for (let [u2, d2] of Object.entries(e)) {
      let v = d2.snapTarget, m2 = this.isVertical ? v.y : v.x, E = this.isVertical ? v.x : v.y;
      le.notNull(this.snapTargets[m2]), this.snapTargets[m2][E] = { dropzone: d2, stepIndex: null, wireIndex: parseInt(u2) };
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
          let u2 = a.block;
          n.push(`["[${u2.comment}"]`), e = true;
        }
      } else
        e && (n.push('["]"]'), e = false);
      n.push(a.toJson());
    }
    return e && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
}, "oe");
c2(oe, "QuantumCircuitElement"), R2([q2], oe.prototype, "minStepCount", 2), R2([q2], oe.prototype, "minWireCount", 2), R2([q2], oe.prototype, "maxWireCount", 2), R2([q2], oe.prototype, "editing", 2), R2([q2], oe.prototype, "updateUrl", 2), R2([q2], oe.prototype, "json", 2), R2([q2], oe.prototype, "circuitTitle", 2), R2([q2], oe.prototype, "debug", 2), R2([q2], oe.prototype, "chDisabled", 2), R2([q2], oe.prototype, "chMaxControlGates", 2), R2([q2], oe.prototype, "chMaxTargetGates", 2), R2([q2], oe.prototype, "cnotDisabled", 2), R2([q2], oe.prototype, "cnotMaxControlGates", 2), R2([q2], oe.prototype, "cnotMaxTargetGates", 2), R2([q2], oe.prototype, "cyDisabled", 2), R2([q2], oe.prototype, "cyMaxControlGates", 2), R2([q2], oe.prototype, "cyMaxTargetGates", 2), R2([q2], oe.prototype, "czDisabled", 2), R2([q2], oe.prototype, "czMaxControlGates", 2), R2([q2], oe.prototype, "czMaxTargetGates", 2), R2([q2], oe.prototype, "cphaseDisabled", 2), R2([q2], oe.prototype, "cphaseMaxControlGates", 2), R2([q2], oe.prototype, "cphaseMaxTargetGates", 2), R2([q2], oe.prototype, "ctDisabled", 2), R2([q2], oe.prototype, "ctMaxControlGates", 2), R2([q2], oe.prototype, "ctMaxTargetGates", 2), R2([q2], oe.prototype, "crnotDisabled", 2), R2([q2], oe.prototype, "crnotMaxControlGates", 2), R2([q2], oe.prototype, "crnotMaxTargetGates", 2), R2([q2], oe.prototype, "crxDisabled", 2), R2([q2], oe.prototype, "crxMaxControlGates", 2), R2([q2], oe.prototype, "crxMaxTargetGates", 2), R2([q2], oe.prototype, "cryDisabled", 2), R2([q2], oe.prototype, "cryMaxControlGates", 2), R2([q2], oe.prototype, "cryMaxTargetGates", 2), R2([q2], oe.prototype, "crzDisabled", 2), R2([q2], oe.prototype, "crzMaxControlGates", 2), R2([q2], oe.prototype, "crzMaxTargetGates", 2), R2([q2], oe.prototype, "cswapDisabled", 2), R2([q2], oe.prototype, "cswapMaxControlGates", 2), R2([q2], oe.prototype, "swapDisabled", 2), R2([q2], oe.prototype, "controlControlDisabled", 2), R2([q2], oe.prototype, "controlControlMaxTargetGates", 2), R2([q2], oe.prototype, "phasePhaseDisabled", 2), R2([q2], oe.prototype, "phasePhaseMaxTargetGates", 2), R2([fr], oe.prototype, "blocks", 2);
te(oe);
var un = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.visibleQubitCircleKets = [], this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-visibility-change", this.updateVisibleQubitCircleKets), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    ee(Y`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var u2;
    let n = e.data, a = this.activeStepIndex;
    switch (n.type) {
      case "step": {
        let d2 = this.circuit.stepAt(n.step);
        for (let v in n.blochVectors) {
          let m2 = parseInt(v), E = d2.dropzoneAt(m2).operation;
          if (Up(E)) {
            let w2 = n.blochVectors[m2];
            E.x = w2[0], E.y = w2[1], E.z = w2[2];
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m2 in v) {
            let E = parseInt(m2), w2 = d2.dropzoneAt(E).operation;
            Wp(w2) && (w2.value = v[E].toString());
          }
        }
        for (let v of d2.dropzones) {
          let m2 = v.operation;
          !Fr(m2) || m2.if !== "" && (m2.disabled = !n.flags[m2.if]);
        }
        if (a === n.step) {
          let v = {};
          for (let m2 in n.amplitudes) {
            let E = n.amplitudes[m2];
            v[m2] = new Lr(E[0], E[1]);
          }
          (u2 = this.circleNotation) == null || u2.setAmplitudes(v);
        }
        break;
      }
      case "finish": {
        for (let d2 of this.runCircuitButtons)
          d2.running = false;
        break;
      }
      default:
        throw new Gr("Unknown service worker message", { data: n });
    }
  }
  run() {
    if (this.circleNotation === null)
      return;
    let e = this.activeStepIndex, n = this.circuit.serialize();
    le.need(n.length > 0, "non-zero step length");
    let a = Math.max(...n.map((d2) => Math.max(...d2.map((v) => {
      let m2 = [];
      return En(v) && (m2 = v.controls), Math.max(...v.targets.concat(m2));
    })))), u2 = a >= 0 ? a + 1 : 1;
    this.circleNotation.qubitCount = u2, this.worker.postMessage({ qubitCount: u2, stepIndex: e, steps: n, targets: this.visibleQubitCircleKets });
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, n = this.circuit.breakpoint, a = e || n;
    return a === null && (a = this.circuit.stepAt(0), this.circuit.setBreakpoint(a)), this.circuit.fetchStepIndex(a);
  }
  updateVisibleQubitCircleKets(e) {
    let n = e.detail;
    le.notNull(n), this.visibleQubitCircleKets = n;
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    le.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "un");
c2(un, "QuantumSimulatorElement"), R2([q2], un.prototype, "updateUrl", 2), R2([je], un.prototype, "circuit", 2), R2([je], un.prototype, "circleNotation", 2), R2([fr], un.prototype, "runCircuitButtons", 2);
te(un);

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
  y as Complex
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
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=application.js.map
