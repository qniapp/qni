var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target2) => __defProp(target2, "__esModule", { value: true });
var __name = (target2, value) => __defProp(target2, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target2, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target2, key) && (copyDefault || key !== "default"))
        __defProp(target2, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target2;
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
      var P2 = {
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
      function assign2(n, s) {
        if (isNaN(n = parseInt(n, 10))) {
          throwInvalidParam();
        }
        return n * s;
      }
      __name(assign2, "assign");
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
      var parse2 = /* @__PURE__ */ __name(function(p1, p22) {
        var n = 0, d2 = 1, s = 1;
        var v2 = 0, w2 = 0, x2 = 0, y2 = 1, z2 = 1;
        var A3 = 0, B2 = 1;
        var C2 = 1, D3 = 1;
        var N3 = 1e7;
        var M3;
        if (p1 === void 0 || p1 === null) {
        } else if (p22 !== void 0) {
          n = p1;
          d2 = p22;
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
                while (B2 <= N3 && D3 <= N3) {
                  M3 = (A3 + C2) / (B2 + D3);
                  if (p1 === M3) {
                    if (B2 + D3 <= N3) {
                      n = A3 + C2;
                      d2 = B2 + D3;
                    } else if (D3 > B2) {
                      n = C2;
                      d2 = D3;
                    } else {
                      n = A3;
                      d2 = B2;
                    }
                    break;
                  } else {
                    if (p1 > M3) {
                      A3 += C2;
                      B2 += D3;
                    } else {
                      C2 += A3;
                      D3 += B2;
                    }
                    if (B2 > N3) {
                      n = C2;
                      d2 = D3;
                    } else {
                      n = A3;
                      d2 = B2;
                    }
                  }
                }
                n *= z2;
              } else if (isNaN(p1) || isNaN(p22)) {
                d2 = n = NaN;
              }
              break;
            }
            case "string": {
              B2 = p1.match(/\d+|./g);
              if (B2 === null)
                throwInvalidParam();
              if (B2[A3] === "-") {
                s = -1;
                A3++;
              } else if (B2[A3] === "+") {
                A3++;
              }
              if (B2.length === A3 + 1) {
                w2 = assign2(B2[A3++], s);
              } else if (B2[A3 + 1] === "." || B2[A3] === ".") {
                if (B2[A3] !== ".") {
                  v2 = assign2(B2[A3++], s);
                }
                A3++;
                if (A3 + 1 === B2.length || B2[A3 + 1] === "(" && B2[A3 + 3] === ")" || B2[A3 + 1] === "'" && B2[A3 + 3] === "'") {
                  w2 = assign2(B2[A3], s);
                  y2 = Math.pow(10, B2[A3].length);
                  A3++;
                }
                if (B2[A3] === "(" && B2[A3 + 2] === ")" || B2[A3] === "'" && B2[A3 + 2] === "'") {
                  x2 = assign2(B2[A3 + 1], s);
                  z2 = Math.pow(10, B2[A3 + 1].length) - 1;
                  A3 += 3;
                }
              } else if (B2[A3 + 1] === "/" || B2[A3 + 1] === ":") {
                w2 = assign2(B2[A3], s);
                y2 = assign2(B2[A3 + 2], 1);
                A3 += 3;
              } else if (B2[A3 + 3] === "/" && B2[A3 + 1] === " ") {
                v2 = assign2(B2[A3], s);
                w2 = assign2(B2[A3 + 2], s);
                y2 = assign2(B2[A3 + 4], 1);
                A3 += 5;
              }
              if (B2.length <= A3) {
                d2 = y2 * z2;
                s = n = x2 + d2 * v2 + z2 * w2;
                break;
              }
            }
            default:
              throwInvalidParam();
          }
        if (d2 === 0) {
          throw new DivisionByZero();
        }
        P2["s"] = s < 0 ? -1 : 1;
        P2["n"] = Math.abs(n);
        P2["d"] = Math.abs(d2);
      }, "parse");
      function modpow(b2, e, m2) {
        var r = 1;
        for (; e > 0; b2 = b2 * b2 % m2, e >>= 1) {
          if (e & 1) {
            r = r * b2 % m2;
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
      function gcd(a, b2) {
        if (!a)
          return b2;
        if (!b2)
          return a;
        while (1) {
          a %= b2;
          if (!a)
            return b2;
          b2 %= a;
          if (!b2)
            return a;
        }
      }
      __name(gcd, "gcd");
      ;
      function Fraction(a, b2) {
        if (!(this instanceof Fraction)) {
          return new Fraction(a, b2);
        }
        parse2(a, b2);
        a = gcd(P2["d"], P2["n"]);
        this["s"] = P2["s"];
        this["n"] = P2["n"] / a;
        this["d"] = P2["d"] / a;
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
        "add": function(a, b2) {
          parse2(a, b2);
          return new Fraction(this["s"] * this["n"] * P2["d"] + P2["s"] * this["d"] * P2["n"], this["d"] * P2["d"]);
        },
        "sub": function(a, b2) {
          parse2(a, b2);
          return new Fraction(this["s"] * this["n"] * P2["d"] - P2["s"] * this["d"] * P2["n"], this["d"] * P2["d"]);
        },
        "mul": function(a, b2) {
          parse2(a, b2);
          return new Fraction(this["s"] * P2["s"] * this["n"] * P2["n"], this["d"] * P2["d"]);
        },
        "div": function(a, b2) {
          parse2(a, b2);
          return new Fraction(this["s"] * P2["s"] * this["n"] * P2["d"], this["d"] * P2["n"]);
        },
        "clone": function() {
          return new Fraction(this);
        },
        "mod": function(a, b2) {
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          if (a === void 0) {
            return new Fraction(this["s"] * this["n"] % this["d"], 1);
          }
          parse2(a, b2);
          if (P2["n"] === 0 && this["d"] === 0) {
            Fraction(0, 0);
          }
          return new Fraction(this["s"] * (P2["d"] * this["n"]) % (P2["n"] * this["d"]), P2["d"] * this["d"]);
        },
        "gcd": function(a, b2) {
          parse2(a, b2);
          return new Fraction(gcd(P2["n"], this["n"]) * gcd(P2["d"], this["d"]), P2["d"] * this["d"]);
        },
        "lcm": function(a, b2) {
          parse2(a, b2);
          if (P2["n"] === 0 && this["n"] === 0) {
            return new Fraction();
          }
          return new Fraction(P2["n"] * this["n"], gcd(P2["n"], this["n"]) * gcd(P2["d"], this["d"]));
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
        "pow": function(a, b2) {
          parse2(a, b2);
          if (P2["d"] === 1) {
            if (P2["s"] < 0) {
              return new Fraction(Math.pow(this["s"] * this["d"], P2["n"]), Math.pow(this["n"], P2["n"]));
            } else {
              return new Fraction(Math.pow(this["s"] * this["n"], P2["n"]), Math.pow(this["d"], P2["n"]));
            }
          }
          if (this["s"] < 0)
            return null;
          var N3 = factorize(this["n"]);
          var D3 = factorize(this["d"]);
          var n = 1;
          var d2 = 1;
          for (var k2 in N3) {
            if (k2 === "1")
              continue;
            if (k2 === "0") {
              n = 0;
              break;
            }
            N3[k2] *= P2["n"];
            if (N3[k2] % P2["d"] === 0) {
              N3[k2] /= P2["d"];
            } else
              return null;
            n *= Math.pow(k2, N3[k2]);
          }
          for (var k2 in D3) {
            if (k2 === "1")
              continue;
            D3[k2] *= P2["n"];
            if (D3[k2] % P2["d"] === 0) {
              D3[k2] /= P2["d"];
            } else
              return null;
            d2 *= Math.pow(k2, D3[k2]);
          }
          if (P2["s"] < 0) {
            return new Fraction(d2, n);
          }
          return new Fraction(n, d2);
        },
        "equals": function(a, b2) {
          parse2(a, b2);
          return this["s"] * this["n"] * P2["d"] === P2["s"] * P2["n"] * this["d"];
        },
        "compare": function(a, b2) {
          parse2(a, b2);
          var t = this["s"] * this["n"] * P2["d"] - P2["s"] * P2["n"] * this["d"];
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
        "divisible": function(a, b2) {
          parse2(a, b2);
          return !(!(P2["n"] * this["d"]) || this["n"] * P2["d"] % (P2["n"] * this["d"]));
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
          var b2 = this["d"];
          var res = [];
          if (isNaN(a) || isNaN(b2)) {
            return res;
          }
          do {
            res.push(Math.floor(a / b2));
            t = a % b2;
            a = b2;
            b2 = t;
          } while (a !== 1);
          return res;
        },
        "toString": function(dec) {
          var g2;
          var N3 = this["n"];
          var D3 = this["d"];
          if (isNaN(N3) || isNaN(D3)) {
            return "NaN";
          }
          dec = dec || 15;
          var cycLen = cycleLen(N3, D3);
          var cycOff = cycleStart(N3, D3, cycLen);
          var str = this["s"] === -1 ? "-" : "";
          str += N3 / D3 | 0;
          N3 %= D3;
          N3 *= 10;
          if (N3)
            str += ".";
          if (cycLen) {
            for (var i = cycOff; i--; ) {
              str += N3 / D3 | 0;
              N3 %= D3;
              N3 *= 10;
            }
            str += "(";
            for (var i = cycLen; i--; ) {
              str += N3 / D3 | 0;
              N3 %= D3;
              N3 *= 10;
            }
            str += ")";
          } else {
            for (var i = dec; N3 && i--; ) {
              str += N3 / D3 | 0;
              N3 %= D3;
              N3 *= 10;
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

// ../../node_modules/interactjs/dist/interact.min.js
var require_interact_min = __commonJS({
  "../../node_modules/interactjs/dist/interact.min.js"(exports, module) {
    !function(t) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
    }(function() {
      var t = {};
      Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(t2) {
        return !(!t2 || !t2.Window) && t2 instanceof t2.Window;
      };
      var e = {};
      Object.defineProperty(e, "__esModule", { value: true }), e.init = o2, e.getWindow = function(e2) {
        return (0, t.default)(e2) ? e2 : (e2.ownerDocument || e2).defaultView || r.window;
      }, e.window = e.realWindow = void 0;
      var n = void 0;
      e.realWindow = n;
      var r = void 0;
      function o2(t2) {
        e.realWindow = n = t2;
        var o3 = t2.document.createTextNode("");
        o3.ownerDocument !== t2.document && typeof t2.wrap == "function" && t2.wrap(o3) === o3 && (t2 = t2.wrap(t2)), e.window = r = t2;
      }
      __name(o2, "o");
      e.window = r, typeof window != "undefined" && window && o2(window);
      var i = {};
      function a(t2) {
        return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(a, "a");
      Object.defineProperty(i, "__esModule", { value: true }), i.default = void 0;
      var s = /* @__PURE__ */ __name(function(t2) {
        return !!t2 && a(t2) === "object";
      }, "s"), l3 = /* @__PURE__ */ __name(function(t2) {
        return typeof t2 == "function";
      }, "l"), u2 = { window: function(n2) {
        return n2 === e.window || (0, t.default)(n2);
      }, docFrag: function(t2) {
        return s(t2) && t2.nodeType === 11;
      }, object: s, func: l3, number: function(t2) {
        return typeof t2 == "number";
      }, bool: function(t2) {
        return typeof t2 == "boolean";
      }, string: function(t2) {
        return typeof t2 == "string";
      }, element: function(t2) {
        if (!t2 || a(t2) !== "object")
          return false;
        var n2 = e.getWindow(t2) || e.window;
        return /object|function/.test(a(n2.Element)) ? t2 instanceof n2.Element : t2.nodeType === 1 && typeof t2.nodeName == "string";
      }, plainObject: function(t2) {
        return s(t2) && !!t2.constructor && /function Object\b/.test(t2.constructor.toString());
      }, array: function(t2) {
        return s(t2) && t2.length !== void 0 && l3(t2.splice);
      } };
      i.default = u2;
      var c2 = {};
      function f2(t2) {
        var e2 = t2.interaction;
        if (e2.prepared.name === "drag") {
          var n2 = e2.prepared.axis;
          n2 === "x" ? (e2.coords.cur.page.y = e2.coords.start.page.y, e2.coords.cur.client.y = e2.coords.start.client.y, e2.coords.velocity.client.y = 0, e2.coords.velocity.page.y = 0) : n2 === "y" && (e2.coords.cur.page.x = e2.coords.start.page.x, e2.coords.cur.client.x = e2.coords.start.client.x, e2.coords.velocity.client.x = 0, e2.coords.velocity.page.x = 0);
        }
      }
      __name(f2, "f");
      function d2(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction;
        if (n2.prepared.name === "drag") {
          var r2 = n2.prepared.axis;
          if (r2 === "x" || r2 === "y") {
            var o3 = r2 === "x" ? "y" : "x";
            e2.page[o3] = n2.coords.start.page[o3], e2.client[o3] = n2.coords.start.client[o3], e2.delta[o3] = 0;
          }
        }
      }
      __name(d2, "d");
      Object.defineProperty(c2, "__esModule", { value: true }), c2.default = void 0;
      var p3 = { id: "actions/drag", install: function(t2) {
        var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
        n2.prototype.draggable = p3.draggable, e2.map.drag = p3, e2.methodDict.drag = "draggable", r2.actions.drag = p3.defaults;
      }, listeners: { "interactions:before-action-move": f2, "interactions:action-resume": f2, "interactions:action-move": d2, "auto-start:check": function(t2) {
        var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.buttons, o3 = n2.options.drag;
        if (o3 && o3.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (r2 & n2.options.drag.mouseButtons) != 0))
          return t2.action = { name: "drag", axis: o3.lockAxis === "start" ? o3.startAxis : o3.lockAxis }, false;
      } }, draggable: function(t2) {
        return i.default.object(t2) ? (this.options.drag.enabled = t2.enabled !== false, this.setPerAction("drag", t2), this.setOnEvents("drag", t2), /^(xy|x|y|start)$/.test(t2.lockAxis) && (this.options.drag.lockAxis = t2.lockAxis), /^(xy|x|y)$/.test(t2.startAxis) && (this.options.drag.startAxis = t2.startAxis), this) : i.default.bool(t2) ? (this.options.drag.enabled = t2, this) : this.options.drag;
      }, beforeMove: f2, move: d2, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      } }, v2 = p3;
      c2.default = v2;
      var h2 = {};
      Object.defineProperty(h2, "__esModule", { value: true }), h2.default = void 0;
      var g2 = { init: function(t2) {
        var e2 = t2;
        g2.document = e2.document, g2.DocumentFragment = e2.DocumentFragment || y2, g2.SVGElement = e2.SVGElement || y2, g2.SVGSVGElement = e2.SVGSVGElement || y2, g2.SVGElementInstance = e2.SVGElementInstance || y2, g2.Element = e2.Element || y2, g2.HTMLElement = e2.HTMLElement || g2.Element, g2.Event = e2.Event, g2.Touch = e2.Touch || y2, g2.PointerEvent = e2.PointerEvent || e2.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function y2() {
      }
      __name(y2, "y");
      var m2 = g2;
      h2.default = m2;
      var b2 = {};
      Object.defineProperty(b2, "__esModule", { value: true }), b2.default = void 0;
      var x2 = { init: function(t2) {
        var e2 = h2.default.Element, n2 = t2.navigator || {};
        x2.supportsTouch = "ontouchstart" in t2 || i.default.func(t2.DocumentTouch) && h2.default.document instanceof t2.DocumentTouch, x2.supportsPointerEvent = n2.pointerEnabled !== false && !!h2.default.PointerEvent, x2.isIOS = /iP(hone|od|ad)/.test(n2.platform), x2.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), x2.isIe9 = /MSIE 9/.test(n2.userAgent), x2.isOperaMobile = n2.appName === "Opera" && x2.supportsTouch && /Presto/.test(n2.userAgent), x2.prefixedMatchesSelector = "matches" in e2.prototype ? "matches" : "webkitMatchesSelector" in e2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e2.prototype ? "oMatchesSelector" : "msMatchesSelector", x2.pEventTypes = x2.supportsPointerEvent ? h2.default.PointerEvent === t2.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, x2.wheelEvent = h2.default.document && "onmousewheel" in h2.default.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, w2 = x2;
      b2.default = w2;
      var _2 = {};
      function P2(t2) {
        var e2 = t2.parentNode;
        if (i.default.docFrag(e2)) {
          for (; (e2 = e2.host) && i.default.docFrag(e2); )
            ;
          return e2;
        }
        return e2;
      }
      __name(P2, "P");
      function O3(t2, n2) {
        return e.window !== e.realWindow && (n2 = n2.replace(/\/deep\//g, " ")), t2[b2.default.prefixedMatchesSelector](n2);
      }
      __name(O3, "O");
      Object.defineProperty(_2, "__esModule", { value: true }), _2.nodeContains = function(t2, e2) {
        if (t2.contains)
          return t2.contains(e2);
        for (; e2; ) {
          if (e2 === t2)
            return true;
          e2 = e2.parentNode;
        }
        return false;
      }, _2.closest = function(t2, e2) {
        for (; i.default.element(t2); ) {
          if (O3(t2, e2))
            return t2;
          t2 = P2(t2);
        }
        return null;
      }, _2.parentNode = P2, _2.matchesSelector = O3, _2.indexOfDeepestElement = function(t2) {
        for (var n2, r2 = [], o3 = 0; o3 < t2.length; o3++) {
          var i2 = t2[o3], a2 = t2[n2];
          if (i2 && o3 !== n2)
            if (a2) {
              var s2 = S2(i2), l4 = S2(a2);
              if (s2 !== i2.ownerDocument)
                if (l4 !== i2.ownerDocument)
                  if (s2 !== l4) {
                    r2 = r2.length ? r2 : E2(a2);
                    var u3 = void 0;
                    if (a2 instanceof h2.default.HTMLElement && i2 instanceof h2.default.SVGElement && !(i2 instanceof h2.default.SVGSVGElement)) {
                      if (i2 === l4)
                        continue;
                      u3 = i2.ownerSVGElement;
                    } else
                      u3 = i2;
                    for (var c3 = E2(u3, a2.ownerDocument), f3 = 0; c3[f3] && c3[f3] === r2[f3]; )
                      f3++;
                    var d3 = [c3[f3 - 1], c3[f3], r2[f3]];
                    if (d3[0])
                      for (var p4 = d3[0].lastChild; p4; ) {
                        if (p4 === d3[1]) {
                          n2 = o3, r2 = c3;
                          break;
                        }
                        if (p4 === d3[2])
                          break;
                        p4 = p4.previousSibling;
                      }
                  } else
                    v3 = i2, g3 = a2, void 0, void 0, (parseInt(e.getWindow(v3).getComputedStyle(v3).zIndex, 10) || 0) >= (parseInt(e.getWindow(g3).getComputedStyle(g3).zIndex, 10) || 0) && (n2 = o3);
                else
                  n2 = o3;
            } else
              n2 = o3;
        }
        var v3, g3;
        return n2;
      }, _2.matchesUpTo = function(t2, e2, n2) {
        for (; i.default.element(t2); ) {
          if (O3(t2, e2))
            return true;
          if ((t2 = P2(t2)) === n2)
            return O3(t2, e2);
        }
        return false;
      }, _2.getActualElement = function(t2) {
        return t2.correspondingUseElement || t2;
      }, _2.getScrollXY = T2, _2.getElementClientRect = M3, _2.getElementRect = function(t2) {
        var n2 = M3(t2);
        if (!b2.default.isIOS7 && n2) {
          var r2 = T2(e.getWindow(t2));
          n2.left += r2.x, n2.right += r2.x, n2.top += r2.y, n2.bottom += r2.y;
        }
        return n2;
      }, _2.getPath = function(t2) {
        for (var e2 = []; t2; )
          e2.push(t2), t2 = P2(t2);
        return e2;
      }, _2.trySelector = function(t2) {
        return !!i.default.string(t2) && (h2.default.document.querySelector(t2), true);
      };
      var S2 = /* @__PURE__ */ __name(function(t2) {
        return t2.parentNode || t2.host;
      }, "S");
      function E2(t2, e2) {
        for (var n2, r2 = [], o3 = t2; (n2 = S2(o3)) && o3 !== e2 && n2 !== o3.ownerDocument; )
          r2.unshift(o3), o3 = n2;
        return r2;
      }
      __name(E2, "E");
      function T2(t2) {
        return { x: (t2 = t2 || e.window).scrollX || t2.document.documentElement.scrollLeft, y: t2.scrollY || t2.document.documentElement.scrollTop };
      }
      __name(T2, "T");
      function M3(t2) {
        var e2 = t2 instanceof h2.default.SVGElement ? t2.getBoundingClientRect() : t2.getClientRects()[0];
        return e2 && { left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, width: e2.width || e2.right - e2.left, height: e2.height || e2.bottom - e2.top };
      }
      __name(M3, "M");
      var j2 = {};
      Object.defineProperty(j2, "__esModule", { value: true }), j2.default = function(t2, e2) {
        for (var n2 in e2)
          t2[n2] = e2[n2];
        return t2;
      };
      var k2 = {};
      function I3(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
          r2[n2] = t2[n2];
        return r2;
      }
      __name(I3, "I");
      function D3(t2, e2, n2) {
        return t2 === "parent" ? (0, _2.parentNode)(n2) : t2 === "self" ? e2.getRect(n2) : (0, _2.closest)(n2, t2);
      }
      __name(D3, "D");
      Object.defineProperty(k2, "__esModule", { value: true }), k2.getStringOptionResult = D3, k2.resolveRectLike = function(t2, e2, n2, r2) {
        var o3, a2 = t2;
        return i.default.string(a2) ? a2 = D3(a2, e2, n2) : i.default.func(a2) && (a2 = a2.apply(void 0, function(t3) {
          if (Array.isArray(t3))
            return I3(t3);
        }(o3 = r2) || function(t3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3))
            return Array.from(t3);
        }(o3) || function(t3, e3) {
          if (t3) {
            if (typeof t3 == "string")
              return I3(t3, e3);
            var n3 = Object.prototype.toString.call(t3).slice(8, -1);
            return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? I3(t3, e3) : void 0;
          }
        }(o3) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }())), i.default.element(a2) && (a2 = (0, _2.getElementRect)(a2)), a2;
      }, k2.rectToXY = function(t2) {
        return t2 && { x: "x" in t2 ? t2.x : t2.left, y: "y" in t2 ? t2.y : t2.top };
      }, k2.xywhToTlbr = function(t2) {
        return !t2 || "left" in t2 && "top" in t2 || ((t2 = (0, j2.default)({}, t2)).left = t2.x || 0, t2.top = t2.y || 0, t2.right = t2.right || t2.left + t2.width, t2.bottom = t2.bottom || t2.top + t2.height), t2;
      }, k2.tlbrToXywh = function(t2) {
        return !t2 || "x" in t2 && "y" in t2 || ((t2 = (0, j2.default)({}, t2)).x = t2.left || 0, t2.y = t2.top || 0, t2.width = t2.width || (t2.right || 0) - t2.x, t2.height = t2.height || (t2.bottom || 0) - t2.y), t2;
      }, k2.addEdges = function(t2, e2, n2) {
        t2.left && (e2.left += n2.x), t2.right && (e2.right += n2.x), t2.top && (e2.top += n2.y), t2.bottom && (e2.bottom += n2.y), e2.width = e2.right - e2.left, e2.height = e2.bottom - e2.top;
      };
      var A3 = {};
      Object.defineProperty(A3, "__esModule", { value: true }), A3.default = function(t2, e2, n2) {
        var r2 = t2.options[n2], o3 = r2 && r2.origin || t2.options.origin, i2 = (0, k2.resolveRectLike)(o3, t2, e2, [t2 && e2]);
        return (0, k2.rectToXY)(i2) || { x: 0, y: 0 };
      };
      var R3 = {};
      function z2(t2) {
        return t2.trim().split(/ +/);
      }
      __name(z2, "z");
      Object.defineProperty(R3, "__esModule", { value: true }), R3.default = /* @__PURE__ */ __name(function t2(e2, n2, r2) {
        if (r2 = r2 || {}, i.default.string(e2) && e2.search(" ") !== -1 && (e2 = z2(e2)), i.default.array(e2))
          return e2.reduce(function(e3, o4) {
            return (0, j2.default)(e3, t2(o4, n2, r2));
          }, r2);
        if (i.default.object(e2) && (n2 = e2, e2 = ""), i.default.func(n2))
          r2[e2] = r2[e2] || [], r2[e2].push(n2);
        else if (i.default.array(n2))
          for (var o3 = 0; o3 < n2.length; o3++) {
            var a2;
            a2 = n2[o3], t2(e2, a2, r2);
          }
        else if (i.default.object(n2))
          for (var s2 in n2) {
            var l4 = z2(s2).map(function(t3) {
              return "".concat(e2).concat(t3);
            });
            t2(l4, n2[s2], r2);
          }
        return r2;
      }, "t");
      var C2 = {};
      Object.defineProperty(C2, "__esModule", { value: true }), C2.default = void 0, C2.default = function(t2, e2) {
        return Math.sqrt(t2 * t2 + e2 * e2);
      };
      var F3 = {};
      function X2(t2, e2) {
        for (var n2 in e2) {
          var r2 = X2.prefixedPropREs, o3 = false;
          for (var i2 in r2)
            if (n2.indexOf(i2) === 0 && r2[i2].test(n2)) {
              o3 = true;
              break;
            }
          o3 || typeof e2[n2] == "function" || (t2[n2] = e2[n2]);
        }
        return t2;
      }
      __name(X2, "X");
      Object.defineProperty(F3, "__esModule", { value: true }), F3.default = void 0, X2.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
      var Y2 = X2;
      F3.default = Y2;
      var B2 = {};
      function W3(t2) {
        return t2 instanceof h2.default.Event || t2 instanceof h2.default.Touch;
      }
      __name(W3, "W");
      function L2(t2, e2, n2) {
        return t2 = t2 || "page", (n2 = n2 || {}).x = e2[t2 + "X"], n2.y = e2[t2 + "Y"], n2;
      }
      __name(L2, "L");
      function U2(t2, e2) {
        return e2 = e2 || { x: 0, y: 0 }, b2.default.isOperaMobile && W3(t2) ? (L2("screen", t2, e2), e2.x += window.scrollX, e2.y += window.scrollY) : L2("page", t2, e2), e2;
      }
      __name(U2, "U");
      function V3(t2, e2) {
        return e2 = e2 || {}, b2.default.isOperaMobile && W3(t2) ? L2("screen", t2, e2) : L2("client", t2, e2), e2;
      }
      __name(V3, "V");
      function N3(t2) {
        var e2 = [];
        return i.default.array(t2) ? (e2[0] = t2[0], e2[1] = t2[1]) : t2.type === "touchend" ? t2.touches.length === 1 ? (e2[0] = t2.touches[0], e2[1] = t2.changedTouches[0]) : t2.touches.length === 0 && (e2[0] = t2.changedTouches[0], e2[1] = t2.changedTouches[1]) : (e2[0] = t2.touches[0], e2[1] = t2.touches[1]), e2;
      }
      __name(N3, "N");
      function q3(t2) {
        for (var e2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          for (var o3 in e2)
            e2[o3] += r2[o3];
        }
        for (var i2 in e2)
          e2[i2] /= t2.length;
        return e2;
      }
      __name(q3, "q");
      Object.defineProperty(B2, "__esModule", { value: true }), B2.copyCoords = function(t2, e2) {
        t2.page = t2.page || {}, t2.page.x = e2.page.x, t2.page.y = e2.page.y, t2.client = t2.client || {}, t2.client.x = e2.client.x, t2.client.y = e2.client.y, t2.timeStamp = e2.timeStamp;
      }, B2.setCoordDeltas = function(t2, e2, n2) {
        t2.page.x = n2.page.x - e2.page.x, t2.page.y = n2.page.y - e2.page.y, t2.client.x = n2.client.x - e2.client.x, t2.client.y = n2.client.y - e2.client.y, t2.timeStamp = n2.timeStamp - e2.timeStamp;
      }, B2.setCoordVelocity = function(t2, e2) {
        var n2 = Math.max(e2.timeStamp / 1e3, 1e-3);
        t2.page.x = e2.page.x / n2, t2.page.y = e2.page.y / n2, t2.client.x = e2.client.x / n2, t2.client.y = e2.client.y / n2, t2.timeStamp = n2;
      }, B2.setZeroCoords = function(t2) {
        t2.page.x = 0, t2.page.y = 0, t2.client.x = 0, t2.client.y = 0;
      }, B2.isNativePointer = W3, B2.getXY = L2, B2.getPageXY = U2, B2.getClientXY = V3, B2.getPointerId = function(t2) {
        return i.default.number(t2.pointerId) ? t2.pointerId : t2.identifier;
      }, B2.setCoords = function(t2, e2, n2) {
        var r2 = e2.length > 1 ? q3(e2) : e2[0];
        U2(r2, t2.page), V3(r2, t2.client), t2.timeStamp = n2;
      }, B2.getTouchPair = N3, B2.pointerAverage = q3, B2.touchBBox = function(t2) {
        if (!t2.length)
          return null;
        var e2 = N3(t2), n2 = Math.min(e2[0].pageX, e2[1].pageX), r2 = Math.min(e2[0].pageY, e2[1].pageY), o3 = Math.max(e2[0].pageX, e2[1].pageX), i2 = Math.max(e2[0].pageY, e2[1].pageY);
        return { x: n2, y: r2, left: n2, top: r2, right: o3, bottom: i2, width: o3 - n2, height: i2 - r2 };
      }, B2.touchDistance = function(t2, e2) {
        var n2 = e2 + "X", r2 = e2 + "Y", o3 = N3(t2), i2 = o3[0][n2] - o3[1][n2], a2 = o3[0][r2] - o3[1][r2];
        return (0, C2.default)(i2, a2);
      }, B2.touchAngle = function(t2, e2) {
        var n2 = e2 + "X", r2 = e2 + "Y", o3 = N3(t2), i2 = o3[1][n2] - o3[0][n2], a2 = o3[1][r2] - o3[0][r2];
        return 180 * Math.atan2(a2, i2) / Math.PI;
      }, B2.getPointerType = function(t2) {
        return i.default.string(t2.pointerType) ? t2.pointerType : i.default.number(t2.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t2.pointerType] : /touch/.test(t2.type || "") || t2 instanceof h2.default.Touch ? "touch" : "mouse";
      }, B2.getEventTargets = function(t2) {
        var e2 = i.default.func(t2.composedPath) ? t2.composedPath() : t2.path;
        return [_2.getActualElement(e2 ? e2[0] : t2.target), _2.getActualElement(t2.currentTarget)];
      }, B2.newCoords = function() {
        return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
      }, B2.coordsToEvent = function(t2) {
        return { coords: t2, get page() {
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
      }, Object.defineProperty(B2, "pointerExtend", { enumerable: true, get: function() {
        return F3.default;
      } });
      var $2 = {};
      function G3(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(G3, "G");
      function H3(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(H3, "H");
      Object.defineProperty($2, "__esModule", { value: true }), $2.BaseEvent = void 0;
      var K2 = function() {
        function t2(e3) {
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), H3(this, "type", void 0), H3(this, "target", void 0), H3(this, "currentTarget", void 0), H3(this, "interactable", void 0), H3(this, "_interaction", void 0), H3(this, "timeStamp", void 0), H3(this, "immediatePropagationStopped", false), H3(this, "propagationStopped", false), this._interaction = e3;
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]) && G3(e2.prototype, n2), t2;
      }();
      $2.BaseEvent = K2, Object.defineProperty(K2.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var Z2 = {};
      Object.defineProperty(Z2, "__esModule", { value: true }), Z2.find = Z2.findIndex = Z2.from = Z2.merge = Z2.remove = Z2.contains = void 0, Z2.contains = function(t2, e2) {
        return t2.indexOf(e2) !== -1;
      }, Z2.remove = function(t2, e2) {
        return t2.splice(t2.indexOf(e2), 1);
      };
      var J2 = /* @__PURE__ */ __name(function(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          t2.push(r2);
        }
        return t2;
      }, "J");
      Z2.merge = J2, Z2.from = function(t2) {
        return J2([], t2);
      };
      var Q3 = /* @__PURE__ */ __name(function(t2, e2) {
        for (var n2 = 0; n2 < t2.length; n2++)
          if (e2(t2[n2], n2, t2))
            return n2;
        return -1;
      }, "Q");
      Z2.findIndex = Q3, Z2.find = function(t2, e2) {
        return t2[Q3(t2, e2)];
      };
      var tt2 = {};
      function et2(t2) {
        return (et2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(et2, "et");
      function nt2(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(nt2, "nt");
      function rt2(t2, e2) {
        return (rt2 = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        })(t2, e2);
      }
      __name(rt2, "rt");
      function ot(t2, e2) {
        return !e2 || et2(e2) !== "object" && typeof e2 != "function" ? it(t2) : e2;
      }
      __name(ot, "ot");
      function it(t2) {
        if (t2 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      __name(it, "it");
      function at2(t2) {
        return (at2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      __name(at2, "at");
      function st2(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(st2, "st");
      Object.defineProperty(tt2, "__esModule", { value: true }), tt2.DropEvent = void 0;
      var lt = function(t2) {
        !function(t3, e3) {
          if (typeof e3 != "function" && e3 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && rt2(t3, e3);
        }(a2, t2);
        var e2, n2, r2, o3, i2 = (r2 = a2, o3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }(), function() {
          var t3, e3 = at2(r2);
          if (o3) {
            var n3 = at2(this).constructor;
            t3 = Reflect.construct(e3, arguments, n3);
          } else
            t3 = e3.apply(this, arguments);
          return ot(this, t3);
        });
        function a2(t3, e3, n3) {
          var r3;
          !function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, a2), st2(it(r3 = i2.call(this, e3._interaction)), "target", void 0), st2(it(r3), "dropzone", void 0), st2(it(r3), "dragEvent", void 0), st2(it(r3), "relatedTarget", void 0), st2(it(r3), "draggable", void 0), st2(it(r3), "timeStamp", void 0), st2(it(r3), "propagationStopped", false), st2(it(r3), "immediatePropagationStopped", false);
          var o4 = n3 === "dragleave" ? t3.prev : t3.cur, s2 = o4.element, l4 = o4.dropzone;
          return r3.type = n3, r3.target = s2, r3.currentTarget = s2, r3.dropzone = l4, r3.dragEvent = e3, r3.relatedTarget = e3.target, r3.draggable = e3.interactable, r3.timeStamp = e3.timeStamp, r3;
        }
        __name(a2, "a");
        return e2 = a2, (n2 = [{ key: "reject", value: function() {
          var t3 = this, e3 = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && e3.cur.dropzone === this.dropzone && e3.cur.element === this.target)
            if (e3.prev.dropzone = this.dropzone, e3.prev.element = this.target, e3.rejected = true, e3.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
              var n3 = e3.activeDrops, r3 = Z2.findIndex(n3, function(e4) {
                var n4 = e4.dropzone, r4 = e4.element;
                return n4 === t3.dropzone && r4 === t3.target;
              });
              e3.activeDrops.splice(r3, 1);
              var o4 = new a2(e3, this.dragEvent, "dropdeactivate");
              o4.dropzone = this.dropzone, o4.target = this.target, this.dropzone.fire(o4);
            } else
              this.dropzone.fire(new a2(e3, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]) && nt2(e2.prototype, n2), a2;
      }($2.BaseEvent);
      tt2.DropEvent = lt;
      var ut = {};
      function ct(t2, e2) {
        for (var n2 = 0; n2 < t2.slice().length; n2++) {
          var r2 = t2.slice()[n2], o3 = r2.dropzone, i2 = r2.element;
          e2.dropzone = o3, e2.target = i2, o3.fire(e2), e2.propagationStopped = e2.immediatePropagationStopped = false;
        }
      }
      __name(ct, "ct");
      function ft(t2, e2) {
        for (var n2 = function(t3, e3) {
          for (var n3 = t3.interactables, r3 = [], o4 = 0; o4 < n3.list.length; o4++) {
            var a2 = n3.list[o4];
            if (a2.options.drop.enabled) {
              var s2 = a2.options.drop.accept;
              if (!(i.default.element(s2) && s2 !== e3 || i.default.string(s2) && !_2.matchesSelector(e3, s2) || i.default.func(s2) && !s2({ dropzone: a2, draggableElement: e3 })))
                for (var l4 = i.default.string(a2.target) ? a2._context.querySelectorAll(a2.target) : i.default.array(a2.target) ? a2.target : [a2.target], u3 = 0; u3 < l4.length; u3++) {
                  var c3 = l4[u3];
                  c3 !== e3 && r3.push({ dropzone: a2, element: c3, rect: a2.getRect(c3) });
                }
            }
          }
          return r3;
        }(t2, e2), r2 = 0; r2 < n2.length; r2++) {
          var o3 = n2[r2];
          o3.rect = o3.dropzone.getRect(o3.element);
        }
        return n2;
      }
      __name(ft, "ft");
      function dt2(t2, e2, n2) {
        for (var r2 = t2.dropState, o3 = t2.interactable, i2 = t2.element, a2 = [], s2 = 0; s2 < r2.activeDrops.length; s2++) {
          var l4 = r2.activeDrops[s2], u3 = l4.dropzone, c3 = l4.element, f3 = l4.rect;
          a2.push(u3.dropCheck(e2, n2, o3, i2, c3, f3) ? c3 : null);
        }
        var d3 = _2.indexOfDeepestElement(a2);
        return r2.activeDrops[d3] || null;
      }
      __name(dt2, "dt");
      function pt2(t2, e2, n2) {
        var r2 = t2.dropState, o3 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n2.type === "dragstart" && (o3.activate = new tt2.DropEvent(r2, n2, "dropactivate"), o3.activate.target = null, o3.activate.dropzone = null), n2.type === "dragend" && (o3.deactivate = new tt2.DropEvent(r2, n2, "dropdeactivate"), o3.deactivate.target = null, o3.deactivate.dropzone = null), r2.rejected || (r2.cur.element !== r2.prev.element && (r2.prev.dropzone && (o3.leave = new tt2.DropEvent(r2, n2, "dragleave"), n2.dragLeave = o3.leave.target = r2.prev.element, n2.prevDropzone = o3.leave.dropzone = r2.prev.dropzone), r2.cur.dropzone && (o3.enter = new tt2.DropEvent(r2, n2, "dragenter"), n2.dragEnter = r2.cur.element, n2.dropzone = r2.cur.dropzone)), n2.type === "dragend" && r2.cur.dropzone && (o3.drop = new tt2.DropEvent(r2, n2, "drop"), n2.dropzone = r2.cur.dropzone, n2.relatedTarget = r2.cur.element), n2.type === "dragmove" && r2.cur.dropzone && (o3.move = new tt2.DropEvent(r2, n2, "dropmove"), o3.move.dragmove = n2, n2.dropzone = r2.cur.dropzone)), o3;
      }
      __name(pt2, "pt");
      function vt2(t2, e2) {
        var n2 = t2.dropState, r2 = n2.activeDrops, o3 = n2.cur, i2 = n2.prev;
        e2.leave && i2.dropzone.fire(e2.leave), e2.enter && o3.dropzone.fire(e2.enter), e2.move && o3.dropzone.fire(e2.move), e2.drop && o3.dropzone.fire(e2.drop), e2.deactivate && ct(r2, e2.deactivate), n2.prev.dropzone = o3.dropzone, n2.prev.element = o3.element;
      }
      __name(vt2, "vt");
      function ht(t2, e2) {
        var n2 = t2.interaction, r2 = t2.iEvent, o3 = t2.event;
        if (r2.type === "dragmove" || r2.type === "dragend") {
          var i2 = n2.dropState;
          e2.dynamicDrop && (i2.activeDrops = ft(e2, n2.element));
          var a2 = r2, s2 = dt2(n2, a2, o3);
          i2.rejected = i2.rejected && !!s2 && s2.dropzone === i2.cur.dropzone && s2.element === i2.cur.element, i2.cur.dropzone = s2 && s2.dropzone, i2.cur.element = s2 && s2.element, i2.events = pt2(n2, 0, a2);
        }
      }
      __name(ht, "ht");
      Object.defineProperty(ut, "__esModule", { value: true }), ut.default = void 0;
      var gt = { id: "actions/drop", install: function(t2) {
        var e2 = t2.actions, n2 = t2.interactStatic, r2 = t2.Interactable, o3 = t2.defaults;
        t2.usePlugin(c2.default), r2.prototype.dropzone = function(t3) {
          return function(t4, e3) {
            if (i.default.object(e3)) {
              if (t4.options.drop.enabled = e3.enabled !== false, e3.listeners) {
                var n3 = (0, R3.default)(e3.listeners), r3 = Object.keys(n3).reduce(function(t5, e4) {
                  return t5[/^(enter|leave)/.test(e4) ? "drag".concat(e4) : /^(activate|deactivate|move)/.test(e4) ? "drop".concat(e4) : e4] = n3[e4], t5;
                }, {});
                t4.off(t4.options.drop.listeners), t4.on(r3), t4.options.drop.listeners = r3;
              }
              return i.default.func(e3.ondrop) && t4.on("drop", e3.ondrop), i.default.func(e3.ondropactivate) && t4.on("dropactivate", e3.ondropactivate), i.default.func(e3.ondropdeactivate) && t4.on("dropdeactivate", e3.ondropdeactivate), i.default.func(e3.ondragenter) && t4.on("dragenter", e3.ondragenter), i.default.func(e3.ondragleave) && t4.on("dragleave", e3.ondragleave), i.default.func(e3.ondropmove) && t4.on("dropmove", e3.ondropmove), /^(pointer|center)$/.test(e3.overlap) ? t4.options.drop.overlap = e3.overlap : i.default.number(e3.overlap) && (t4.options.drop.overlap = Math.max(Math.min(1, e3.overlap), 0)), "accept" in e3 && (t4.options.drop.accept = e3.accept), "checker" in e3 && (t4.options.drop.checker = e3.checker), t4;
            }
            return i.default.bool(e3) ? (t4.options.drop.enabled = e3, t4) : t4.options.drop;
          }(this, t3);
        }, r2.prototype.dropCheck = function(t3, e3, n3, r3, o4, a2) {
          return function(t4, e4, n4, r4, o5, a3, s2) {
            var l4 = false;
            if (!(s2 = s2 || t4.getRect(a3)))
              return !!t4.options.drop.checker && t4.options.drop.checker(e4, n4, l4, t4, a3, r4, o5);
            var u3 = t4.options.drop.overlap;
            if (u3 === "pointer") {
              var c3 = (0, A3.default)(r4, o5, "drag"), f3 = B2.getPageXY(e4);
              f3.x += c3.x, f3.y += c3.y;
              var d3 = f3.x > s2.left && f3.x < s2.right, p4 = f3.y > s2.top && f3.y < s2.bottom;
              l4 = d3 && p4;
            }
            var v3 = r4.getRect(o5);
            if (v3 && u3 === "center") {
              var h3 = v3.left + v3.width / 2, g3 = v3.top + v3.height / 2;
              l4 = h3 >= s2.left && h3 <= s2.right && g3 >= s2.top && g3 <= s2.bottom;
            }
            return v3 && i.default.number(u3) && (l4 = Math.max(0, Math.min(s2.right, v3.right) - Math.max(s2.left, v3.left)) * Math.max(0, Math.min(s2.bottom, v3.bottom) - Math.max(s2.top, v3.top)) / (v3.width * v3.height) >= u3), t4.options.drop.checker && (l4 = t4.options.drop.checker(e4, n4, l4, t4, a3, r4, o5)), l4;
          }(this, t3, e3, n3, r3, o4, a2);
        }, n2.dynamicDrop = function(e3) {
          return i.default.bool(e3) ? (t2.dynamicDrop = e3, n2) : t2.dynamicDrop;
        }, (0, j2.default)(e2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e2.methodDict.drop = "dropzone", t2.dynamicDrop = false, o3.actions.drop = gt.defaults;
      }, listeners: { "interactions:before-action-start": function(t2) {
        var e2 = t2.interaction;
        e2.prepared.name === "drag" && (e2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t2, e2) {
        var n2 = t2.interaction, r2 = (t2.event, t2.iEvent);
        if (n2.prepared.name === "drag") {
          var o3 = n2.dropState;
          o3.activeDrops = null, o3.events = null, o3.activeDrops = ft(e2, n2.element), o3.events = pt2(n2, 0, r2), o3.events.activate && (ct(o3.activeDrops, o3.events.activate), e2.fire("actions/drop:start", { interaction: n2, dragEvent: r2 }));
        }
      }, "interactions:action-move": ht, "interactions:after-action-move": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.iEvent;
        n2.prepared.name === "drag" && (vt2(n2, n2.dropState.events), e2.fire("actions/drop:move", { interaction: n2, dragEvent: r2 }), n2.dropState.events = {});
      }, "interactions:action-end": function(t2, e2) {
        if (t2.interaction.prepared.name === "drag") {
          var n2 = t2.interaction, r2 = t2.iEvent;
          ht(t2, e2), vt2(n2, n2.dropState.events), e2.fire("actions/drop:end", { interaction: n2, dragEvent: r2 });
        }
      }, "interactions:stop": function(t2) {
        var e2 = t2.interaction;
        if (e2.prepared.name === "drag") {
          var n2 = e2.dropState;
          n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
        }
      } }, getActiveDrops: ft, getDrop: dt2, getDropEvents: pt2, fireDropEvents: vt2, defaults: { enabled: false, accept: null, overlap: "pointer" } }, yt = gt;
      ut.default = yt;
      var mt = {};
      function bt2(t2) {
        var e2 = t2.interaction, n2 = t2.iEvent, r2 = t2.phase;
        if (e2.prepared.name === "gesture") {
          var o3 = e2.pointers.map(function(t3) {
            return t3.pointer;
          }), a2 = r2 === "start", s2 = r2 === "end", l4 = e2.interactable.options.deltaSource;
          if (n2.touches = [o3[0], o3[1]], a2)
            n2.distance = B2.touchDistance(o3, l4), n2.box = B2.touchBBox(o3), n2.scale = 1, n2.ds = 0, n2.angle = B2.touchAngle(o3, l4), n2.da = 0, e2.gesture.startDistance = n2.distance, e2.gesture.startAngle = n2.angle;
          else if (s2) {
            var u3 = e2.prevEvent;
            n2.distance = u3.distance, n2.box = u3.box, n2.scale = u3.scale, n2.ds = 0, n2.angle = u3.angle, n2.da = 0;
          } else
            n2.distance = B2.touchDistance(o3, l4), n2.box = B2.touchBBox(o3), n2.scale = n2.distance / e2.gesture.startDistance, n2.angle = B2.touchAngle(o3, l4), n2.ds = n2.scale - e2.gesture.scale, n2.da = n2.angle - e2.gesture.angle;
          e2.gesture.distance = n2.distance, e2.gesture.angle = n2.angle, i.default.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e2.gesture.scale = n2.scale);
        }
      }
      __name(bt2, "bt");
      Object.defineProperty(mt, "__esModule", { value: true }), mt.default = void 0;
      var xt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t2) {
        var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
        n2.prototype.gesturable = function(t3) {
          return i.default.object(t3) ? (this.options.gesture.enabled = t3.enabled !== false, this.setPerAction("gesture", t3), this.setOnEvents("gesture", t3), this) : i.default.bool(t3) ? (this.options.gesture.enabled = t3, this) : this.options.gesture;
        }, e2.map.gesture = xt, e2.methodDict.gesture = "gesturable", r2.actions.gesture = xt.defaults;
      }, listeners: { "interactions:action-start": bt2, "interactions:action-move": bt2, "interactions:action-end": bt2, "interactions:new": function(t2) {
        t2.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t2) {
        if (!(t2.interaction.pointers.length < 2)) {
          var e2 = t2.interactable.options.gesture;
          if (e2 && e2.enabled)
            return t2.action = { name: "gesture" }, false;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      } }, wt2 = xt;
      mt.default = wt2;
      var _t = {};
      function Pt(t2, e2, n2, r2, o3, a2, s2) {
        if (!e2)
          return false;
        if (e2 === true) {
          var l4 = i.default.number(a2.width) ? a2.width : a2.right - a2.left, u3 = i.default.number(a2.height) ? a2.height : a2.bottom - a2.top;
          if (s2 = Math.min(s2, Math.abs((t2 === "left" || t2 === "right" ? l4 : u3) / 2)), l4 < 0 && (t2 === "left" ? t2 = "right" : t2 === "right" && (t2 = "left")), u3 < 0 && (t2 === "top" ? t2 = "bottom" : t2 === "bottom" && (t2 = "top")), t2 === "left")
            return n2.x < (l4 >= 0 ? a2.left : a2.right) + s2;
          if (t2 === "top")
            return n2.y < (u3 >= 0 ? a2.top : a2.bottom) + s2;
          if (t2 === "right")
            return n2.x > (l4 >= 0 ? a2.right : a2.left) - s2;
          if (t2 === "bottom")
            return n2.y > (u3 >= 0 ? a2.bottom : a2.top) - s2;
        }
        return !!i.default.element(r2) && (i.default.element(e2) ? e2 === r2 : _2.matchesUpTo(r2, e2, o3));
      }
      __name(Pt, "Pt");
      function Ot2(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction;
        if (n2.prepared.name === "resize" && n2.resizeAxes) {
          var r2 = e2;
          n2.interactable.options.resize.square ? (n2.resizeAxes === "y" ? r2.delta.x = r2.delta.y : r2.delta.y = r2.delta.x, r2.axes = "xy") : (r2.axes = n2.resizeAxes, n2.resizeAxes === "x" ? r2.delta.y = 0 : n2.resizeAxes === "y" && (r2.delta.x = 0));
        }
      }
      __name(Ot2, "Ot");
      Object.defineProperty(_t, "__esModule", { value: true }), _t.default = void 0;
      var St2 = { id: "actions/resize", before: ["actions/drag"], install: function(t2) {
        var e2 = t2.actions, n2 = t2.browser, r2 = t2.Interactable, o3 = t2.defaults;
        St2.cursors = function(t3) {
          return t3.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n2), St2.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r2.prototype.resizable = function(e3) {
          return function(t3, e4, n3) {
            return i.default.object(e4) ? (t3.options.resize.enabled = e4.enabled !== false, t3.setPerAction("resize", e4), t3.setOnEvents("resize", e4), i.default.string(e4.axis) && /^x$|^y$|^xy$/.test(e4.axis) ? t3.options.resize.axis = e4.axis : e4.axis === null && (t3.options.resize.axis = n3.defaults.actions.resize.axis), i.default.bool(e4.preserveAspectRatio) ? t3.options.resize.preserveAspectRatio = e4.preserveAspectRatio : i.default.bool(e4.square) && (t3.options.resize.square = e4.square), t3) : i.default.bool(e4) ? (t3.options.resize.enabled = e4, t3) : t3.options.resize;
          }(this, e3, t2);
        }, e2.map.resize = St2, e2.methodDict.resize = "resizable", o3.actions.resize = St2.defaults;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t2) {
        !function(t3) {
          var e2 = t3.iEvent, n2 = t3.interaction;
          if (n2.prepared.name === "resize" && n2.prepared.edges) {
            var r2 = e2, o3 = n2.rect;
            n2._rects = { start: (0, j2.default)({}, o3), corrected: (0, j2.default)({}, o3), previous: (0, j2.default)({}, o3), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
          }
        }(t2), Ot2(t2);
      }, "interactions:action-move": function(t2) {
        !function(t3) {
          var e2 = t3.iEvent, n2 = t3.interaction;
          if (n2.prepared.name === "resize" && n2.prepared.edges) {
            var r2 = e2, o3 = n2.interactable.options.resize.invert, i2 = o3 === "reposition" || o3 === "negate", a2 = n2.rect, s2 = n2._rects, l4 = s2.start, u3 = s2.corrected, c3 = s2.delta, f3 = s2.previous;
            if ((0, j2.default)(f3, u3), i2) {
              if ((0, j2.default)(u3, a2), o3 === "reposition") {
                if (u3.top > u3.bottom) {
                  var d3 = u3.top;
                  u3.top = u3.bottom, u3.bottom = d3;
                }
                if (u3.left > u3.right) {
                  var p4 = u3.left;
                  u3.left = u3.right, u3.right = p4;
                }
              }
            } else
              u3.top = Math.min(a2.top, l4.bottom), u3.bottom = Math.max(a2.bottom, l4.top), u3.left = Math.min(a2.left, l4.right), u3.right = Math.max(a2.right, l4.left);
            for (var v3 in u3.width = u3.right - u3.left, u3.height = u3.bottom - u3.top, u3)
              c3[v3] = u3[v3] - f3[v3];
            r2.edges = n2.prepared.edges, r2.rect = u3, r2.deltaRect = c3;
          }
        }(t2), Ot2(t2);
      }, "interactions:action-end": function(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction;
        if (n2.prepared.name === "resize" && n2.prepared.edges) {
          var r2 = e2;
          r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
        }
      }, "auto-start:check": function(t2) {
        var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.element, o3 = t2.rect, a2 = t2.buttons;
        if (o3) {
          var s2 = (0, j2.default)({}, e2.coords.cur.page), l4 = n2.options.resize;
          if (l4 && l4.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (a2 & l4.mouseButtons) != 0)) {
            if (i.default.object(l4.edges)) {
              var u3 = { left: false, right: false, top: false, bottom: false };
              for (var c3 in u3)
                u3[c3] = Pt(c3, l4.edges[c3], s2, e2._latestPointer.eventTarget, r2, o3, l4.margin || St2.defaultMargin);
              u3.left = u3.left && !u3.right, u3.top = u3.top && !u3.bottom, (u3.left || u3.right || u3.top || u3.bottom) && (t2.action = { name: "resize", edges: u3 });
            } else {
              var f3 = l4.axis !== "y" && s2.x > o3.right - St2.defaultMargin, d3 = l4.axis !== "x" && s2.y > o3.bottom - St2.defaultMargin;
              (f3 || d3) && (t2.action = { name: "resize", axes: (f3 ? "x" : "") + (d3 ? "y" : "") });
            }
            return !t2.action && void 0;
          }
        }
      } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t2) {
        var e2 = t2.edges, n2 = t2.axis, r2 = t2.name, o3 = St2.cursors, i2 = null;
        if (n2)
          i2 = o3[r2 + n2];
        else if (e2) {
          for (var a2 = "", s2 = ["top", "bottom", "left", "right"], l4 = 0; l4 < s2.length; l4++) {
            var u3 = s2[l4];
            e2[u3] && (a2 += u3);
          }
          i2 = o3[a2];
        }
        return i2;
      }, defaultMargin: null }, Et2 = St2;
      _t.default = Et2;
      var Tt2 = {};
      Object.defineProperty(Tt2, "__esModule", { value: true }), Tt2.default = void 0;
      var Mt = { id: "actions", install: function(t2) {
        t2.usePlugin(mt.default), t2.usePlugin(_t.default), t2.usePlugin(c2.default), t2.usePlugin(ut.default);
      } };
      Tt2.default = Mt;
      var jt = {};
      Object.defineProperty(jt, "__esModule", { value: true }), jt.default = void 0;
      var kt, It2, Dt = 0, At2 = { request: function(t2) {
        return kt(t2);
      }, cancel: function(t2) {
        return It2(t2);
      }, init: function(t2) {
        if (kt = t2.requestAnimationFrame, It2 = t2.cancelAnimationFrame, !kt)
          for (var e2 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            kt = t2["".concat(r2, "RequestAnimationFrame")], It2 = t2["".concat(r2, "CancelAnimationFrame")] || t2["".concat(r2, "CancelRequestAnimationFrame")];
          }
        kt = kt && kt.bind(t2), It2 = It2 && It2.bind(t2), kt || (kt = /* @__PURE__ */ __name(function(e3) {
          var n3 = Date.now(), r3 = Math.max(0, 16 - (n3 - Dt)), o3 = t2.setTimeout(function() {
            e3(n3 + r3);
          }, r3);
          return Dt = n3 + r3, o3;
        }, "kt"), It2 = /* @__PURE__ */ __name(function(t3) {
          return clearTimeout(t3);
        }, "It"));
      } };
      jt.default = At2;
      var Rt = {};
      Object.defineProperty(Rt, "__esModule", { value: true }), Rt.getContainer = Ct, Rt.getScroll = Ft2, Rt.getScrollSize = function(t2) {
        return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollWidth, y: t2.scrollHeight };
      }, Rt.getScrollSizeDelta = function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.element, o3 = n2 && n2.interactable.options[n2.prepared.name].autoScroll;
        if (!o3 || !o3.enabled)
          return e2(), { x: 0, y: 0 };
        var i2 = Ct(o3.container, n2.interactable, r2), a2 = Ft2(i2);
        e2();
        var s2 = Ft2(i2);
        return { x: s2.x - a2.x, y: s2.y - a2.y };
      }, Rt.default = void 0;
      var zt = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t2) {
        zt.isScrolling = true, jt.default.cancel(zt.i), t2.autoScroll = zt, zt.interaction = t2, zt.prevTime = zt.now(), zt.i = jt.default.request(zt.scroll);
      }, stop: function() {
        zt.isScrolling = false, zt.interaction && (zt.interaction.autoScroll = null), jt.default.cancel(zt.i);
      }, scroll: function() {
        var t2 = zt.interaction, e2 = t2.interactable, n2 = t2.element, r2 = t2.prepared.name, o3 = e2.options[r2].autoScroll, a2 = Ct(o3.container, e2, n2), s2 = zt.now(), l4 = (s2 - zt.prevTime) / 1e3, u3 = o3.speed * l4;
        if (u3 >= 1) {
          var c3 = { x: zt.x * u3, y: zt.y * u3 };
          if (c3.x || c3.y) {
            var f3 = Ft2(a2);
            i.default.window(a2) ? a2.scrollBy(c3.x, c3.y) : a2 && (a2.scrollLeft += c3.x, a2.scrollTop += c3.y);
            var d3 = Ft2(a2), p4 = { x: d3.x - f3.x, y: d3.y - f3.y };
            (p4.x || p4.y) && e2.fire({ type: "autoscroll", target: n2, interactable: e2, delta: p4, interaction: t2, container: a2 });
          }
          zt.prevTime = s2;
        }
        zt.isScrolling && (jt.default.cancel(zt.i), zt.i = jt.default.request(zt.scroll));
      }, check: function(t2, e2) {
        var n2;
        return (n2 = t2.options[e2].autoScroll) == null ? void 0 : n2.enabled;
      }, onInteractionMove: function(t2) {
        var e2 = t2.interaction, n2 = t2.pointer;
        if (e2.interacting() && zt.check(e2.interactable, e2.prepared.name))
          if (e2.simulation)
            zt.x = zt.y = 0;
          else {
            var r2, o3, a2, s2, l4 = e2.interactable, u3 = e2.element, c3 = e2.prepared.name, f3 = l4.options[c3].autoScroll, d3 = Ct(f3.container, l4, u3);
            if (i.default.window(d3))
              s2 = n2.clientX < zt.margin, r2 = n2.clientY < zt.margin, o3 = n2.clientX > d3.innerWidth - zt.margin, a2 = n2.clientY > d3.innerHeight - zt.margin;
            else {
              var p4 = _2.getElementClientRect(d3);
              s2 = n2.clientX < p4.left + zt.margin, r2 = n2.clientY < p4.top + zt.margin, o3 = n2.clientX > p4.right - zt.margin, a2 = n2.clientY > p4.bottom - zt.margin;
            }
            zt.x = o3 ? 1 : s2 ? -1 : 0, zt.y = a2 ? 1 : r2 ? -1 : 0, zt.isScrolling || (zt.margin = f3.margin, zt.speed = f3.speed, zt.start(e2));
          }
      } };
      function Ct(t2, n2, r2) {
        return (i.default.string(t2) ? (0, k2.getStringOptionResult)(t2, n2, r2) : t2) || (0, e.getWindow)(r2);
      }
      __name(Ct, "Ct");
      function Ft2(t2) {
        return i.default.window(t2) && (t2 = window.document.body), { x: t2.scrollLeft, y: t2.scrollTop };
      }
      __name(Ft2, "Ft");
      var Xt = { id: "auto-scroll", install: function(t2) {
        var e2 = t2.defaults, n2 = t2.actions;
        t2.autoScroll = zt, zt.now = function() {
          return t2.now();
        }, n2.phaselessTypes.autoscroll = true, e2.perAction.autoScroll = zt.defaults;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.autoScroll = null;
      }, "interactions:destroy": function(t2) {
        t2.interaction.autoScroll = null, zt.stop(), zt.interaction && (zt.interaction = null);
      }, "interactions:stop": zt.stop, "interactions:action-move": function(t2) {
        return zt.onInteractionMove(t2);
      } } };
      Rt.default = Xt;
      var Yt = {};
      Object.defineProperty(Yt, "__esModule", { value: true }), Yt.warnOnce = function(t2, n2) {
        var r2 = false;
        return function() {
          return r2 || (e.window.console.warn(n2), r2 = true), t2.apply(this, arguments);
        };
      }, Yt.copyAction = function(t2, e2) {
        return t2.name = e2.name, t2.axis = e2.axis, t2.edges = e2.edges, t2;
      }, Yt.sign = void 0, Yt.sign = function(t2) {
        return t2 >= 0 ? 1 : -1;
      };
      var Bt = {};
      function Wt2(t2) {
        return i.default.bool(t2) ? (this.options.styleCursor = t2, this) : t2 === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      __name(Wt2, "Wt");
      function Lt(t2) {
        return i.default.func(t2) ? (this.options.actionChecker = t2, this) : t2 === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      __name(Lt, "Lt");
      Object.defineProperty(Bt, "__esModule", { value: true }), Bt.default = void 0;
      var Ut = { id: "auto-start/interactableMethods", install: function(t2) {
        var e2 = t2.Interactable;
        e2.prototype.getAction = function(e3, n2, r2, o3) {
          var i2 = function(t3, e4, n3, r3, o4) {
            var i3 = t3.getRect(r3), a2 = { action: null, interactable: t3, interaction: n3, element: r3, rect: i3, buttons: e4.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e4.button] };
            return o4.fire("auto-start:check", a2), a2.action;
          }(this, n2, r2, o3, t2);
          return this.options.actionChecker ? this.options.actionChecker(e3, n2, i2, this, o3, r2) : i2;
        }, e2.prototype.ignoreFrom = (0, Yt.warnOnce)(function(t3) {
          return this._backCompatOption("ignoreFrom", t3);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e2.prototype.allowFrom = (0, Yt.warnOnce)(function(t3) {
          return this._backCompatOption("allowFrom", t3);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e2.prototype.actionChecker = Lt, e2.prototype.styleCursor = Wt2;
      } };
      Bt.default = Ut;
      var Vt2 = {};
      function Nt(t2, e2, n2, r2, o3) {
        return e2.testIgnoreAllow(e2.options[t2.name], n2, r2) && e2.options[t2.name].enabled && Ht(e2, n2, t2, o3) ? t2 : null;
      }
      __name(Nt, "Nt");
      function qt(t2, e2, n2, r2, o3, i2, a2) {
        for (var s2 = 0, l4 = r2.length; s2 < l4; s2++) {
          var u3 = r2[s2], c3 = o3[s2], f3 = u3.getAction(e2, n2, t2, c3);
          if (f3) {
            var d3 = Nt(f3, u3, c3, i2, a2);
            if (d3)
              return { action: d3, interactable: u3, element: c3 };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      __name(qt, "qt");
      function $t(t2, e2, n2, r2, o3) {
        var a2 = [], s2 = [], l4 = r2;
        function u3(t3) {
          a2.push(t3), s2.push(l4);
        }
        __name(u3, "u");
        for (; i.default.element(l4); ) {
          a2 = [], s2 = [], o3.interactables.forEachMatch(l4, u3);
          var c3 = qt(t2, e2, n2, a2, s2, r2, o3);
          if (c3.action && !c3.interactable.options[c3.action.name].manualStart)
            return c3;
          l4 = _2.parentNode(l4);
        }
        return { action: null, interactable: null, element: null };
      }
      __name($t, "$t");
      function Gt2(t2, e2, n2) {
        var r2 = e2.action, o3 = e2.interactable, i2 = e2.element;
        r2 = r2 || { name: null }, t2.interactable = o3, t2.element = i2, (0, Yt.copyAction)(t2.prepared, r2), t2.rect = o3 && r2.name ? o3.getRect(i2) : null, Jt(t2, n2), n2.fire("autoStart:prepared", { interaction: t2 });
      }
      __name(Gt2, "Gt");
      function Ht(t2, e2, n2, r2) {
        var o3 = t2.options, i2 = o3[n2.name].max, a2 = o3[n2.name].maxPerElement, s2 = r2.autoStart.maxInteractions, l4 = 0, u3 = 0, c3 = 0;
        if (!(i2 && a2 && s2))
          return false;
        for (var f3 = 0; f3 < r2.interactions.list.length; f3++) {
          var d3 = r2.interactions.list[f3], p4 = d3.prepared.name;
          if (d3.interacting()) {
            if (++l4 >= s2)
              return false;
            if (d3.interactable === t2) {
              if ((u3 += p4 === n2.name ? 1 : 0) >= i2)
                return false;
              if (d3.element === e2 && (c3++, p4 === n2.name && c3 >= a2))
                return false;
            }
          }
        }
        return s2 > 0;
      }
      __name(Ht, "Ht");
      function Kt2(t2, e2) {
        return i.default.number(t2) ? (e2.autoStart.maxInteractions = t2, this) : e2.autoStart.maxInteractions;
      }
      __name(Kt2, "Kt");
      function Zt(t2, e2, n2) {
        var r2 = n2.autoStart.cursorElement;
        r2 && r2 !== t2 && (r2.style.cursor = ""), t2.ownerDocument.documentElement.style.cursor = e2, t2.style.cursor = e2, n2.autoStart.cursorElement = e2 ? t2 : null;
      }
      __name(Zt, "Zt");
      function Jt(t2, e2) {
        var n2 = t2.interactable, r2 = t2.element, o3 = t2.prepared;
        if (t2.pointerType === "mouse" && n2 && n2.options.styleCursor) {
          var a2 = "";
          if (o3.name) {
            var s2 = n2.options[o3.name].cursorChecker;
            a2 = i.default.func(s2) ? s2(o3, n2, r2, t2._interacting) : e2.actions.map[o3.name].getCursor(o3);
          }
          Zt(t2.element, a2 || "", e2);
        } else
          e2.autoStart.cursorElement && Zt(e2.autoStart.cursorElement, "", e2);
      }
      __name(Jt, "Jt");
      Object.defineProperty(Vt2, "__esModule", { value: true }), Vt2.default = void 0;
      var Qt = { id: "auto-start/base", before: ["actions"], install: function(t2) {
        var e2 = t2.interactStatic, n2 = t2.defaults;
        t2.usePlugin(Bt.default), n2.base.actionChecker = null, n2.base.styleCursor = true, (0, j2.default)(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e2.maxInteractions = function(e3) {
          return Kt2(e3, t2);
        }, t2.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ht, cursorElement: null };
      }, listeners: { "interactions:down": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, o3 = t2.event, i2 = t2.eventTarget;
        n2.interacting() || Gt2(n2, $t(n2, r2, o3, i2, e2), e2);
      }, "interactions:move": function(t2, e2) {
        !function(t3, e3) {
          var n2 = t3.interaction, r2 = t3.pointer, o3 = t3.event, i2 = t3.eventTarget;
          n2.pointerType !== "mouse" || n2.pointerIsDown || n2.interacting() || Gt2(n2, $t(n2, r2, o3, i2, e3), e3);
        }(t2, e2), function(t3, e3) {
          var n2 = t3.interaction;
          if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
            e3.fire("autoStart:before-start", t3);
            var r2 = n2.interactable, o3 = n2.prepared.name;
            o3 && r2 && (r2.options[o3].manualStart || !Ht(r2, n2.element, n2.prepared, e3) ? n2.stop() : (n2.start(n2.prepared, r2, n2.element), Jt(n2, e3)));
          }
        }(t2, e2);
      }, "interactions:stop": function(t2, e2) {
        var n2 = t2.interaction, r2 = n2.interactable;
        r2 && r2.options.styleCursor && Zt(n2.element, "", e2);
      } }, maxInteractions: Kt2, withinInteractionLimit: Ht, validateAction: Nt };
      Vt2.default = Qt;
      var te = {};
      Object.defineProperty(te, "__esModule", { value: true }), te.default = void 0;
      var ee2 = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.eventTarget, o3 = t2.dx, a2 = t2.dy;
        if (n2.prepared.name === "drag") {
          var s2 = Math.abs(o3), l4 = Math.abs(a2), u3 = n2.interactable.options.drag, c3 = u3.startAxis, f3 = s2 > l4 ? "x" : s2 < l4 ? "y" : "xy";
          if (n2.prepared.axis = u3.lockAxis === "start" ? f3[0] : u3.lockAxis, f3 !== "xy" && c3 !== "xy" && c3 !== f3) {
            n2.prepared.name = null;
            for (var d3 = r2, p4 = function(t3) {
              if (t3 !== n2.interactable) {
                var o4 = n2.interactable.options.drag;
                if (!o4.manualStart && t3.testIgnoreAllow(o4, d3, r2)) {
                  var i2 = t3.getAction(n2.downPointer, n2.downEvent, n2, d3);
                  if (i2 && i2.name === "drag" && function(t4, e3) {
                    if (!e3)
                      return false;
                    var n3 = e3.options.drag.startAxis;
                    return t4 === "xy" || n3 === "xy" || n3 === t4;
                  }(f3, t3) && Vt2.default.validateAction(i2, t3, d3, r2, e2))
                    return t3;
                }
              }
            }; i.default.element(d3); ) {
              var v3 = e2.interactables.forEachMatch(d3, p4);
              if (v3) {
                n2.prepared.name = "drag", n2.interactable = v3, n2.element = d3;
                break;
              }
              d3 = (0, _2.parentNode)(d3);
            }
          }
        }
      } } };
      te.default = ee2;
      var ne2 = {};
      function re(t2) {
        var e2 = t2.prepared && t2.prepared.name;
        if (!e2)
          return null;
        var n2 = t2.interactable.options;
        return n2[e2].hold || n2[e2].delay;
      }
      __name(re, "re");
      Object.defineProperty(ne2, "__esModule", { value: true }), ne2.default = void 0;
      var oe2 = { id: "auto-start/hold", install: function(t2) {
        var e2 = t2.defaults;
        t2.usePlugin(Vt2.default), e2.perAction.hold = 0, e2.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t2) {
        var e2 = t2.interaction, n2 = re(e2);
        n2 > 0 && (e2.autoStartHoldTimer = setTimeout(function() {
          e2.start(e2.prepared, e2.interactable, e2.element);
        }, n2));
      }, "interactions:move": function(t2) {
        var e2 = t2.interaction, n2 = t2.duplicate;
        e2.autoStartHoldTimer && e2.pointerWasMoved && !n2 && (clearTimeout(e2.autoStartHoldTimer), e2.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t2) {
        var e2 = t2.interaction;
        re(e2) > 0 && (e2.prepared.name = null);
      } }, getHoldDuration: re };
      ne2.default = oe2;
      var ie = {};
      Object.defineProperty(ie, "__esModule", { value: true }), ie.default = void 0;
      var ae = { id: "auto-start", install: function(t2) {
        t2.usePlugin(Vt2.default), t2.usePlugin(ne2.default), t2.usePlugin(te.default);
      } };
      ie.default = ae;
      var se = {};
      function le2(t2) {
        return /^(always|never|auto)$/.test(t2) ? (this.options.preventDefault = t2, this) : i.default.bool(t2) ? (this.options.preventDefault = t2 ? "always" : "never", this) : this.options.preventDefault;
      }
      __name(le2, "le");
      function ue2(t2) {
        var e2 = t2.interaction, n2 = t2.event;
        e2.interactable && e2.interactable.checkAndPreventDefault(n2);
      }
      __name(ue2, "ue");
      function ce(t2) {
        var n2 = t2.Interactable;
        n2.prototype.preventDefault = le2, n2.prototype.checkAndPreventDefault = function(n3) {
          return function(t3, n4, r2) {
            var o3 = t3.options.preventDefault;
            if (o3 !== "never")
              if (o3 !== "always") {
                if (n4.events.supportsPassive && /^touch(start|move)$/.test(r2.type)) {
                  var a2 = (0, e.getWindow)(r2.target).document, s2 = n4.getDocOptions(a2);
                  if (!s2 || !s2.events || s2.events.passive !== false)
                    return;
                }
                /^(mouse|pointer|touch)*(down|start)/i.test(r2.type) || i.default.element(r2.target) && (0, _2.matchesSelector)(r2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || r2.preventDefault();
              } else
                r2.preventDefault();
          }(this, t2, n3);
        }, t2.interactions.docEvents.push({ type: "dragstart", listener: function(e2) {
          for (var n3 = 0; n3 < t2.interactions.list.length; n3++) {
            var r2 = t2.interactions.list[n3];
            if (r2.element && (r2.element === e2.target || (0, _2.nodeContains)(r2.element, e2.target)))
              return void r2.interactable.checkAndPreventDefault(e2);
          }
        } });
      }
      __name(ce, "ce");
      Object.defineProperty(se, "__esModule", { value: true }), se.install = ce, se.default = void 0;
      var fe3 = { id: "core/interactablePreventDefault", install: ce, listeners: ["down", "move", "up", "cancel"].reduce(function(t2, e2) {
        return t2["interactions:".concat(e2)] = ue2, t2;
      }, {}) };
      se.default = fe3;
      var de3 = {};
      Object.defineProperty(de3, "__esModule", { value: true }), de3.default = void 0, de3.default = {};
      var pe2, ve3 = {};
      Object.defineProperty(ve3, "__esModule", { value: true }), ve3.default = void 0, function(t2) {
        t2.touchAction = "touchAction", t2.boxSizing = "boxSizing", t2.noListeners = "noListeners";
      }(pe2 || (pe2 = {}));
      pe2.touchAction, pe2.boxSizing, pe2.noListeners;
      var he2 = { id: "dev-tools", install: function() {
      } };
      ve3.default = he2;
      var ge2 = {};
      Object.defineProperty(ge2, "__esModule", { value: true }), ge2.default = /* @__PURE__ */ __name(function t2(e2) {
        var n2 = {};
        for (var r2 in e2) {
          var o3 = e2[r2];
          i.default.plainObject(o3) ? n2[r2] = t2(o3) : i.default.array(o3) ? n2[r2] = Z2.from(o3) : n2[r2] = o3;
        }
        return n2;
      }, "t");
      var ye3 = {};
      function me2(t2, e2) {
        return function(t3) {
          if (Array.isArray(t3))
            return t3;
        }(t2) || function(t3, e3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
            var n2 = [], r2 = true, o3 = false, i2 = void 0;
            try {
              for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
                ;
            } catch (t4) {
              o3 = true, i2 = t4;
            } finally {
              try {
                r2 || s2.return == null || s2.return();
              } finally {
                if (o3)
                  throw i2;
              }
            }
            return n2;
          }
        }(t2, e2) || function(t3, e3) {
          if (t3) {
            if (typeof t3 == "string")
              return be3(t3, e3);
            var n2 = Object.prototype.toString.call(t3).slice(8, -1);
            return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? be3(t3, e3) : void 0;
          }
        }(t2, e2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      __name(me2, "me");
      function be3(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
          r2[n2] = t2[n2];
        return r2;
      }
      __name(be3, "be");
      function xe3(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(xe3, "xe");
      function we2(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(we2, "we");
      Object.defineProperty(ye3, "__esModule", { value: true }), ye3.getRectOffset = Oe2, ye3.default = void 0;
      var _e2 = function() {
        function t2(e3) {
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), we2(this, "states", []), we2(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), we2(this, "startDelta", void 0), we2(this, "result", void 0), we2(this, "endResult", void 0), we2(this, "edges", void 0), we2(this, "interaction", void 0), this.interaction = e3, this.result = Pe();
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "start", value: function(t3, e3) {
          var n3 = t3.phase, r2 = this.interaction, o3 = function(t4) {
            var e4 = t4.interactable.options[t4.prepared.name], n4 = e4.modifiers;
            return n4 && n4.length ? n4 : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(t5) {
              var n5 = e4[t5];
              return n5 && n5.enabled && { options: n5, methods: n5._methods };
            }).filter(function(t5) {
              return !!t5;
            });
          }(r2);
          this.prepareStates(o3), this.edges = (0, j2.default)({}, r2.edges), this.startOffset = Oe2(r2.rect, e3), this.startDelta = { x: 0, y: 0 };
          var i2 = this.fillArg({ phase: n3, pageCoords: e3, preEnd: false });
          return this.result = Pe(), this.startAll(i2), this.result = this.setAll(i2);
        } }, { key: "fillArg", value: function(t3) {
          var e3 = this.interaction;
          return t3.interaction = e3, t3.interactable = e3.interactable, t3.element = e3.element, t3.rect = t3.rect || e3.rect, t3.edges = this.edges, t3.startOffset = this.startOffset, t3;
        } }, { key: "startAll", value: function(t3) {
          for (var e3 = 0; e3 < this.states.length; e3++) {
            var n3 = this.states[e3];
            n3.methods.start && (t3.state = n3, n3.methods.start(t3));
          }
        } }, { key: "setAll", value: function(t3) {
          var e3 = t3.phase, n3 = t3.preEnd, r2 = t3.skipModifiers, o3 = t3.rect;
          t3.coords = (0, j2.default)({}, t3.pageCoords), t3.rect = (0, j2.default)({}, o3);
          for (var i2 = r2 ? this.states.slice(r2) : this.states, a2 = Pe(t3.coords, t3.rect), s2 = 0; s2 < i2.length; s2++) {
            var l4, u3 = i2[s2], c3 = u3.options, f3 = (0, j2.default)({}, t3.coords), d3 = null;
            (l4 = u3.methods) != null && l4.set && this.shouldDo(c3, n3, e3) && (t3.state = u3, d3 = u3.methods.set(t3), k2.addEdges(this.interaction.edges, t3.rect, { x: t3.coords.x - f3.x, y: t3.coords.y - f3.y })), a2.eventProps.push(d3);
          }
          a2.delta.x = t3.coords.x - t3.pageCoords.x, a2.delta.y = t3.coords.y - t3.pageCoords.y, a2.rectDelta.left = t3.rect.left - o3.left, a2.rectDelta.right = t3.rect.right - o3.right, a2.rectDelta.top = t3.rect.top - o3.top, a2.rectDelta.bottom = t3.rect.bottom - o3.bottom;
          var p4 = this.result.coords, v3 = this.result.rect;
          if (p4 && v3) {
            var h3 = a2.rect.left !== v3.left || a2.rect.right !== v3.right || a2.rect.top !== v3.top || a2.rect.bottom !== v3.bottom;
            a2.changed = h3 || p4.x !== a2.coords.x || p4.y !== a2.coords.y;
          }
          return a2;
        } }, { key: "applyToInteraction", value: function(t3) {
          var e3 = this.interaction, n3 = t3.phase, r2 = e3.coords.cur, o3 = e3.coords.start, i2 = this.result, a2 = this.startDelta, s2 = i2.delta;
          n3 === "start" && (0, j2.default)(this.startDelta, i2.delta);
          for (var l4 = 0; l4 < [[o3, a2], [r2, s2]].length; l4++) {
            var u3 = me2([[o3, a2], [r2, s2]][l4], 2), c3 = u3[0], f3 = u3[1];
            c3.page.x += f3.x, c3.page.y += f3.y, c3.client.x += f3.x, c3.client.y += f3.y;
          }
          var d3 = this.result.rectDelta, p4 = t3.rect || e3.rect;
          p4.left += d3.left, p4.right += d3.right, p4.top += d3.top, p4.bottom += d3.bottom, p4.width = p4.right - p4.left, p4.height = p4.bottom - p4.top;
        } }, { key: "setAndApply", value: function(t3) {
          var e3 = this.interaction, n3 = t3.phase, r2 = t3.preEnd, o3 = t3.skipModifiers, i2 = this.setAll(this.fillArg({ preEnd: r2, phase: n3, pageCoords: t3.modifiedCoords || e3.coords.cur.page }));
          if (this.result = i2, !i2.changed && (!o3 || o3 < this.states.length) && e3.interacting())
            return false;
          if (t3.modifiedCoords) {
            var a2 = e3.coords.cur.page, s2 = { x: t3.modifiedCoords.x - a2.x, y: t3.modifiedCoords.y - a2.y };
            i2.coords.x += s2.x, i2.coords.y += s2.y, i2.delta.x += s2.x, i2.delta.y += s2.y;
          }
          this.applyToInteraction(t3);
        } }, { key: "beforeEnd", value: function(t3) {
          var e3 = t3.interaction, n3 = t3.event, r2 = this.states;
          if (r2 && r2.length) {
            for (var o3 = false, i2 = 0; i2 < r2.length; i2++) {
              var a2 = r2[i2];
              t3.state = a2;
              var s2 = a2.options, l4 = a2.methods, u3 = l4.beforeEnd && l4.beforeEnd(t3);
              if (u3)
                return this.endResult = u3, false;
              o3 = o3 || !o3 && this.shouldDo(s2, true, t3.phase, true);
            }
            o3 && e3.move({ event: n3, preEnd: true });
          }
        } }, { key: "stop", value: function(t3) {
          var e3 = t3.interaction;
          if (this.states && this.states.length) {
            var n3 = (0, j2.default)({ states: this.states, interactable: e3.interactable, element: e3.element, rect: null }, t3);
            this.fillArg(n3);
            for (var r2 = 0; r2 < this.states.length; r2++) {
              var o3 = this.states[r2];
              n3.state = o3, o3.methods.stop && o3.methods.stop(n3);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(t3) {
          this.states = [];
          for (var e3 = 0; e3 < t3.length; e3++) {
            var n3 = t3[e3], r2 = n3.options, o3 = n3.methods, i2 = n3.name;
            this.states.push({ options: r2, methods: o3, index: e3, name: i2 });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(t3) {
          var e3 = t3.interaction, n3 = e3.coords, r2 = e3.rect, o3 = e3.modification;
          if (o3.result) {
            for (var i2 = o3.startDelta, a2 = o3.result, s2 = a2.delta, l4 = a2.rectDelta, u3 = [[n3.start, i2], [n3.cur, s2]], c3 = 0; c3 < u3.length; c3++) {
              var f3 = me2(u3[c3], 2), d3 = f3[0], p4 = f3[1];
              d3.page.x -= p4.x, d3.page.y -= p4.y, d3.client.x -= p4.x, d3.client.y -= p4.y;
            }
            r2.left -= l4.left, r2.right -= l4.right, r2.top -= l4.top, r2.bottom -= l4.bottom;
          }
        } }, { key: "shouldDo", value: function(t3, e3, n3, r2) {
          return !(!t3 || t3.enabled === false || r2 && !t3.endOnly || t3.endOnly && !e3 || n3 === "start" && !t3.setStart);
        } }, { key: "copyFrom", value: function(t3) {
          this.startOffset = t3.startOffset, this.startDelta = t3.startDelta, this.edges = t3.edges, this.states = t3.states.map(function(t4) {
            return (0, ge2.default)(t4);
          }), this.result = Pe((0, j2.default)({}, t3.result.coords), (0, j2.default)({}, t3.result.rect));
        } }, { key: "destroy", value: function() {
          for (var t3 in this)
            this[t3] = null;
        } }]) && xe3(e2.prototype, n2), t2;
      }();
      function Pe(t2, e2) {
        return { rect: e2, coords: t2, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
      }
      __name(Pe, "Pe");
      function Oe2(t2, e2) {
        return t2 ? { left: e2.x - t2.left, top: e2.y - t2.top, right: t2.right - e2.x, bottom: t2.bottom - e2.y } : { left: 0, top: 0, right: 0, bottom: 0 };
      }
      __name(Oe2, "Oe");
      ye3.default = _e2;
      var Se3 = {};
      function Ee(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction.modification.result;
        n2 && (e2.modifiers = n2.eventProps);
      }
      __name(Ee, "Ee");
      Object.defineProperty(Se3, "__esModule", { value: true }), Se3.makeModifier = function(t2, e2) {
        var n2 = t2.defaults, r2 = { start: t2.start, set: t2.set, beforeEnd: t2.beforeEnd, stop: t2.stop }, o3 = /* @__PURE__ */ __name(function(t3) {
          var o4 = t3 || {};
          for (var i2 in o4.enabled = o4.enabled !== false, n2)
            i2 in o4 || (o4[i2] = n2[i2]);
          var a2 = { options: o4, methods: r2, name: e2, enable: function() {
            return o4.enabled = true, a2;
          }, disable: function() {
            return o4.enabled = false, a2;
          } };
          return a2;
        }, "o");
        return e2 && typeof e2 == "string" && (o3._defaults = n2, o3._methods = r2), o3;
      }, Se3.addEventModifiers = Ee, Se3.default = void 0;
      var Te2 = { id: "modifiers/base", before: ["actions"], install: function(t2) {
        t2.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t2) {
        var e2 = t2.interaction;
        e2.modification = new ye3.default(e2);
      }, "interactions:before-action-start": function(t2) {
        var e2 = t2.interaction.modification;
        e2.start(t2, t2.interaction.coords.start.page), t2.interaction.edges = e2.edges, e2.applyToInteraction(t2);
      }, "interactions:before-action-move": function(t2) {
        return t2.interaction.modification.setAndApply(t2);
      }, "interactions:before-action-end": function(t2) {
        return t2.interaction.modification.beforeEnd(t2);
      }, "interactions:action-start": Ee, "interactions:action-move": Ee, "interactions:action-end": Ee, "interactions:after-action-start": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      }, "interactions:after-action-move": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      }, "interactions:stop": function(t2) {
        return t2.interaction.modification.stop(t2);
      } } };
      Se3.default = Te2;
      var Me3 = {};
      Object.defineProperty(Me3, "__esModule", { value: true }), Me3.defaults = void 0, Me3.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
      var je = {};
      function ke2(t2) {
        return (ke2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(ke2, "ke");
      function Ie3(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(Ie3, "Ie");
      function De2(t2, e2) {
        return (De2 = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        })(t2, e2);
      }
      __name(De2, "De");
      function Ae2(t2, e2) {
        return !e2 || ke2(e2) !== "object" && typeof e2 != "function" ? Re3(t2) : e2;
      }
      __name(Ae2, "Ae");
      function Re3(t2) {
        if (t2 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      __name(Re3, "Re");
      function ze2(t2) {
        return (ze2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      __name(ze2, "ze");
      function Ce3(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Ce3, "Ce");
      Object.defineProperty(je, "__esModule", { value: true }), je.InteractEvent = void 0;
      var Fe2 = function(t2) {
        !function(t3, e3) {
          if (typeof e3 != "function" && e3 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && De2(t3, e3);
        }(a2, t2);
        var e2, n2, r2, o3, i2 = (r2 = a2, o3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }(), function() {
          var t3, e3 = ze2(r2);
          if (o3) {
            var n3 = ze2(this).constructor;
            t3 = Reflect.construct(e3, arguments, n3);
          } else
            t3 = e3.apply(this, arguments);
          return Ae2(this, t3);
        });
        function a2(t3, e3, n3, r3, o4, s2, l4) {
          var u3;
          !function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, a2), Ce3(Re3(u3 = i2.call(this, t3)), "target", void 0), Ce3(Re3(u3), "currentTarget", void 0), Ce3(Re3(u3), "relatedTarget", null), Ce3(Re3(u3), "screenX", void 0), Ce3(Re3(u3), "screenY", void 0), Ce3(Re3(u3), "button", void 0), Ce3(Re3(u3), "buttons", void 0), Ce3(Re3(u3), "ctrlKey", void 0), Ce3(Re3(u3), "shiftKey", void 0), Ce3(Re3(u3), "altKey", void 0), Ce3(Re3(u3), "metaKey", void 0), Ce3(Re3(u3), "page", void 0), Ce3(Re3(u3), "client", void 0), Ce3(Re3(u3), "delta", void 0), Ce3(Re3(u3), "rect", void 0), Ce3(Re3(u3), "x0", void 0), Ce3(Re3(u3), "y0", void 0), Ce3(Re3(u3), "t0", void 0), Ce3(Re3(u3), "dt", void 0), Ce3(Re3(u3), "duration", void 0), Ce3(Re3(u3), "clientX0", void 0), Ce3(Re3(u3), "clientY0", void 0), Ce3(Re3(u3), "velocity", void 0), Ce3(Re3(u3), "speed", void 0), Ce3(Re3(u3), "swipe", void 0), Ce3(Re3(u3), "timeStamp", void 0), Ce3(Re3(u3), "axes", void 0), Ce3(Re3(u3), "preEnd", void 0), o4 = o4 || t3.element;
          var c3 = t3.interactable, f3 = (c3 && c3.options || Me3.defaults).deltaSource, d3 = (0, A3.default)(c3, o4, n3), p4 = r3 === "start", v3 = r3 === "end", h3 = p4 ? Re3(u3) : t3.prevEvent, g3 = p4 ? t3.coords.start : v3 ? { page: h3.page, client: h3.client, timeStamp: t3.coords.cur.timeStamp } : t3.coords.cur;
          return u3.page = (0, j2.default)({}, g3.page), u3.client = (0, j2.default)({}, g3.client), u3.rect = (0, j2.default)({}, t3.rect), u3.timeStamp = g3.timeStamp, v3 || (u3.page.x -= d3.x, u3.page.y -= d3.y, u3.client.x -= d3.x, u3.client.y -= d3.y), u3.ctrlKey = e3.ctrlKey, u3.altKey = e3.altKey, u3.shiftKey = e3.shiftKey, u3.metaKey = e3.metaKey, u3.button = e3.button, u3.buttons = e3.buttons, u3.target = o4, u3.currentTarget = o4, u3.preEnd = s2, u3.type = l4 || n3 + (r3 || ""), u3.interactable = c3, u3.t0 = p4 ? t3.pointers[t3.pointers.length - 1].downTime : h3.t0, u3.x0 = t3.coords.start.page.x - d3.x, u3.y0 = t3.coords.start.page.y - d3.y, u3.clientX0 = t3.coords.start.client.x - d3.x, u3.clientY0 = t3.coords.start.client.y - d3.y, u3.delta = p4 || v3 ? { x: 0, y: 0 } : { x: u3[f3].x - h3[f3].x, y: u3[f3].y - h3[f3].y }, u3.dt = t3.coords.delta.timeStamp, u3.duration = u3.timeStamp - u3.t0, u3.velocity = (0, j2.default)({}, t3.coords.velocity[f3]), u3.speed = (0, C2.default)(u3.velocity.x, u3.velocity.y), u3.swipe = v3 || r3 === "inertiastart" ? u3.getSwipe() : null, u3;
        }
        __name(a2, "a");
        return e2 = a2, (n2 = [{ key: "getSwipe", value: function() {
          var t3 = this._interaction;
          if (t3.prevEvent.speed < 600 || this.timeStamp - t3.prevEvent.timeStamp > 150)
            return null;
          var e3 = 180 * Math.atan2(t3.prevEvent.velocityY, t3.prevEvent.velocityX) / Math.PI;
          e3 < 0 && (e3 += 360);
          var n3 = 112.5 <= e3 && e3 < 247.5, r3 = 202.5 <= e3 && e3 < 337.5;
          return { up: r3, down: !r3 && 22.5 <= e3 && e3 < 157.5, left: n3, right: !n3 && (292.5 <= e3 || e3 < 67.5), angle: e3, speed: t3.prevEvent.speed, velocity: { x: t3.prevEvent.velocityX, y: t3.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }]) && Ie3(e2.prototype, n2), a2;
      }($2.BaseEvent);
      je.InteractEvent = Fe2, Object.defineProperties(Fe2.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t2) {
        this.page.x = t2;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t2) {
        this.page.y = t2;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t2) {
        this.client.x = t2;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t2) {
        this.client.y = t2;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t2) {
        this.delta.x = t2;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t2) {
        this.delta.y = t2;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t2) {
        this.velocity.x = t2;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t2) {
        this.velocity.y = t2;
      } } });
      var Xe = {};
      function Ye2(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Ye2, "Ye");
      Object.defineProperty(Xe, "__esModule", { value: true }), Xe.PointerInfo = void 0, Xe.PointerInfo = /* @__PURE__ */ __name(function t2(e2, n2, r2, o3, i2) {
        !function(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }(this, t2), Ye2(this, "id", void 0), Ye2(this, "pointer", void 0), Ye2(this, "event", void 0), Ye2(this, "downTime", void 0), Ye2(this, "downTarget", void 0), this.id = e2, this.pointer = n2, this.event = r2, this.downTime = o3, this.downTarget = i2;
      }, "t");
      var Be, We, Le = {};
      function Ue2(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(Ue2, "Ue");
      function Ve(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Ve, "Ve");
      Object.defineProperty(Le, "__esModule", { value: true }), Object.defineProperty(Le, "PointerInfo", { enumerable: true, get: function() {
        return Xe.PointerInfo;
      } }), Le.default = Le.Interaction = Le._ProxyMethods = Le._ProxyValues = void 0, Le._ProxyValues = Be, function(t2) {
        t2.interactable = "", t2.element = "", t2.prepared = "", t2.pointerIsDown = "", t2.pointerWasMoved = "", t2._proxy = "";
      }(Be || (Le._ProxyValues = Be = {})), Le._ProxyMethods = We, function(t2) {
        t2.start = "", t2.move = "", t2.end = "", t2.stop = "", t2.interacting = "";
      }(We || (Le._ProxyMethods = We = {}));
      var Ne = 0, qe3 = function() {
        function t2(e3) {
          var n3 = this, r2 = e3.pointerType, o3 = e3.scopeFire;
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), Ve(this, "interactable", null), Ve(this, "element", null), Ve(this, "rect", void 0), Ve(this, "_rects", void 0), Ve(this, "edges", void 0), Ve(this, "_scopeFire", void 0), Ve(this, "prepared", { name: null, axis: null, edges: null }), Ve(this, "pointerType", void 0), Ve(this, "pointers", []), Ve(this, "downEvent", null), Ve(this, "downPointer", {}), Ve(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ve(this, "prevEvent", null), Ve(this, "pointerIsDown", false), Ve(this, "pointerWasMoved", false), Ve(this, "_interacting", false), Ve(this, "_ending", false), Ve(this, "_stopped", true), Ve(this, "_proxy", null), Ve(this, "simulation", null), Ve(this, "doMove", (0, Yt.warnOnce)(function(t3) {
            this.move(t3);
          }, "The interaction.doMove() method has been renamed to interaction.move()")), Ve(this, "coords", { start: B2.newCoords(), prev: B2.newCoords(), cur: B2.newCoords(), delta: B2.newCoords(), velocity: B2.newCoords() }), Ve(this, "_id", Ne++), this._scopeFire = o3, this.pointerType = r2;
          var i2 = this;
          this._proxy = {};
          var a2 = /* @__PURE__ */ __name(function(t3) {
            Object.defineProperty(n3._proxy, t3, { get: function() {
              return i2[t3];
            } });
          }, "a");
          for (var s2 in Be)
            a2(s2);
          var l4 = /* @__PURE__ */ __name(function(t3) {
            Object.defineProperty(n3._proxy, t3, { value: function() {
              return i2[t3].apply(i2, arguments);
            } });
          }, "l");
          for (var u3 in We)
            l4(u3);
          this._scopeFire("interactions:new", { interaction: this });
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(t3, e3, n3) {
          var r2 = this.updatePointer(t3, e3, n3, true), o3 = this.pointers[r2];
          this._scopeFire("interactions:down", { pointer: t3, event: e3, eventTarget: n3, pointerIndex: r2, pointerInfo: o3, type: "down", interaction: this });
        } }, { key: "start", value: function(t3, e3, n3) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (t3.name === "gesture" ? 2 : 1) || !e3.options[t3.name].enabled) && ((0, Yt.copyAction)(this.prepared, t3), this.interactable = e3, this.element = n3, this.rect = e3.getRect(n3), this.edges = this.prepared.edges ? (0, j2.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(t3, e3, n3) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(t3, e3, n3, false);
          var r2, o3, i2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (r2 = this.coords.cur.client.x - this.coords.start.client.x, o3 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, C2.default)(r2, o3) > this.pointerMoveTolerance);
          var a2 = this.getPointerIndex(t3), s2 = { pointer: t3, pointerIndex: a2, pointerInfo: this.pointers[a2], event: e3, type: "move", eventTarget: n3, dx: r2, dy: o3, duplicate: i2, interaction: this };
          i2 || B2.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", s2), i2 || this.simulation || (this.interacting() && (s2.type = null, this.move(s2)), this.pointerWasMoved && B2.copyCoords(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(t3) {
          t3 && t3.event || B2.setZeroCoords(this.coords.delta), (t3 = (0, j2.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t3 || {})).phase = "move", this._doPhase(t3);
        } }, { key: "pointerUp", value: function(t3, e3, n3, r2) {
          var o3 = this.getPointerIndex(t3);
          o3 === -1 && (o3 = this.updatePointer(t3, e3, n3, false));
          var i2 = /cancel$/i.test(e3.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(i2), { pointer: t3, pointerIndex: o3, pointerInfo: this.pointers[o3], event: e3, eventTarget: n3, type: i2, curEventTarget: r2, interaction: this }), this.simulation || this.end(e3), this.removePointer(t3, e3);
        } }, { key: "documentBlur", value: function(t3) {
          this.end(t3), this._scopeFire("interactions:blur", { event: t3, type: "blur", interaction: this });
        } }, { key: "end", value: function(t3) {
          var e3;
          this._ending = true, t3 = t3 || this._latestPointer.event, this.interacting() && (e3 = this._doPhase({ event: t3, interaction: this, phase: "end" })), this._ending = false, e3 === true && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(t3) {
          var e3 = B2.getPointerId(t3);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Z2.findIndex(this.pointers, function(t4) {
            return t4.id === e3;
          });
        } }, { key: "getPointerInfo", value: function(t3) {
          return this.pointers[this.getPointerIndex(t3)];
        } }, { key: "updatePointer", value: function(t3, e3, n3, r2) {
          var o3 = B2.getPointerId(t3), i2 = this.getPointerIndex(t3), a2 = this.pointers[i2];
          return r2 = r2 !== false && (r2 || /(down|start)$/i.test(e3.type)), a2 ? a2.pointer = t3 : (a2 = new Xe.PointerInfo(o3, t3, e3, null, null), i2 = this.pointers.length, this.pointers.push(a2)), B2.setCoords(this.coords.cur, this.pointers.map(function(t4) {
            return t4.pointer;
          }), this._now()), B2.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), r2 && (this.pointerIsDown = true, a2.downTime = this.coords.cur.timeStamp, a2.downTarget = n3, B2.pointerExtend(this.downPointer, t3), this.interacting() || (B2.copyCoords(this.coords.start, this.coords.cur), B2.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = e3, this.pointerWasMoved = false)), this._updateLatestPointer(t3, e3, n3), this._scopeFire("interactions:update-pointer", { pointer: t3, event: e3, eventTarget: n3, down: r2, pointerInfo: a2, pointerIndex: i2, interaction: this }), i2;
        } }, { key: "removePointer", value: function(t3, e3) {
          var n3 = this.getPointerIndex(t3);
          if (n3 !== -1) {
            var r2 = this.pointers[n3];
            this._scopeFire("interactions:remove-pointer", { pointer: t3, event: e3, eventTarget: null, pointerIndex: n3, pointerInfo: r2, interaction: this }), this.pointers.splice(n3, 1), this.pointerIsDown = false;
          }
        } }, { key: "_updateLatestPointer", value: function(t3, e3, n3) {
          this._latestPointer.pointer = t3, this._latestPointer.event = e3, this._latestPointer.eventTarget = n3;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(t3, e3, n3, r2) {
          return new je.InteractEvent(this, t3, this.prepared.name, e3, this.element, n3, r2);
        } }, { key: "_fireEvent", value: function(t3) {
          this.interactable.fire(t3), (!this.prevEvent || t3.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t3);
        } }, { key: "_doPhase", value: function(t3) {
          var e3 = t3.event, n3 = t3.phase, r2 = t3.preEnd, o3 = t3.type, i2 = this.rect;
          if (i2 && n3 === "move" && (k2.addEdges(this.edges, i2, this.coords.delta[this.interactable.options.deltaSource]), i2.width = i2.right - i2.left, i2.height = i2.bottom - i2.top), this._scopeFire("interactions:before-action-".concat(n3), t3) === false)
            return false;
          var a2 = t3.iEvent = this._createPreparedEvent(e3, n3, r2, o3);
          return this._scopeFire("interactions:action-".concat(n3), t3), n3 === "start" && (this.prevEvent = a2), this._fireEvent(a2), this._scopeFire("interactions:after-action-".concat(n3), t3), true;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]) && Ue2(e2.prototype, n2), t2;
      }();
      Le.Interaction = qe3;
      var $e2 = qe3;
      Le.default = $e2;
      var Ge2 = {};
      function He(t2) {
        t2.pointerIsDown && (Qe(t2.coords.cur, t2.offset.total), t2.offset.pending.x = 0, t2.offset.pending.y = 0);
      }
      __name(He, "He");
      function Ke2(t2) {
        Ze(t2.interaction);
      }
      __name(Ke2, "Ke");
      function Ze(t2) {
        if (!function(t3) {
          return !(!t3.offset.pending.x && !t3.offset.pending.y);
        }(t2))
          return false;
        var e2 = t2.offset.pending;
        return Qe(t2.coords.cur, e2), Qe(t2.coords.delta, e2), k2.addEdges(t2.edges, t2.rect, e2), e2.x = 0, e2.y = 0, true;
      }
      __name(Ze, "Ze");
      function Je(t2) {
        var e2 = t2.x, n2 = t2.y;
        this.offset.pending.x += e2, this.offset.pending.y += n2, this.offset.total.x += e2, this.offset.total.y += n2;
      }
      __name(Je, "Je");
      function Qe(t2, e2) {
        var n2 = t2.page, r2 = t2.client, o3 = e2.x, i2 = e2.y;
        n2.x += o3, n2.y += i2, r2.x += o3, r2.y += i2;
      }
      __name(Qe, "Qe");
      Object.defineProperty(Ge2, "__esModule", { value: true }), Ge2.addTotal = He, Ge2.applyPending = Ze, Ge2.default = void 0, Le._ProxyMethods.offsetBy = "";
      var tn = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t2) {
        t2.Interaction.prototype.offsetBy = Je;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t2) {
        return He(t2.interaction);
      }, "interactions:before-action-start": Ke2, "interactions:before-action-move": Ke2, "interactions:before-action-end": function(t2) {
        var e2 = t2.interaction;
        if (Ze(e2))
          return e2.move({ offset: true }), e2.end(), false;
      }, "interactions:stop": function(t2) {
        var e2 = t2.interaction;
        e2.offset.total.x = 0, e2.offset.total.y = 0, e2.offset.pending.x = 0, e2.offset.pending.y = 0;
      } } };
      Ge2.default = tn;
      var en = {};
      function nn(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(nn, "nn");
      function rn(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(rn, "rn");
      Object.defineProperty(en, "__esModule", { value: true }), en.default = en.InertiaState = void 0;
      var on = function() {
        function t2(e3) {
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), rn(this, "active", false), rn(this, "isModified", false), rn(this, "smoothEnd", false), rn(this, "allowResume", false), rn(this, "modification", void 0), rn(this, "modifierCount", 0), rn(this, "modifierArg", void 0), rn(this, "startCoords", void 0), rn(this, "t0", 0), rn(this, "v0", 0), rn(this, "te", 0), rn(this, "targetOffset", void 0), rn(this, "modifiedOffset", void 0), rn(this, "currentOffset", void 0), rn(this, "lambda_v0", 0), rn(this, "one_ve_v0", 0), rn(this, "timeout", void 0), rn(this, "interaction", void 0), this.interaction = e3;
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "start", value: function(t3) {
          var e3 = this.interaction, n3 = an(e3);
          if (!n3 || !n3.enabled)
            return false;
          var r2 = e3.coords.velocity.client, o3 = (0, C2.default)(r2.x, r2.y), i2 = this.modification || (this.modification = new ye3.default(e3));
          if (i2.copyFrom(e3.modification), this.t0 = e3._now(), this.allowResume = n3.allowResume, this.v0 = o3, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e3.coords.cur.page, this.modifierArg = i2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e3.coords.cur.timeStamp < 50 && o3 > n3.minSpeed && o3 > n3.endSpeed)
            this.startInertia();
          else {
            if (i2.result = i2.setAll(this.modifierArg), !i2.result.changed)
              return false;
            this.startSmoothEnd();
          }
          return e3.modification.result.rect = null, e3.offsetBy(this.targetOffset), e3._doPhase({ interaction: e3, event: t3, phase: "inertiastart" }), e3.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e3.modification.result.rect = null, this.active = true, e3.simulation = this, true;
        } }, { key: "startInertia", value: function() {
          var t3 = this, e3 = this.interaction.coords.velocity.client, n3 = an(this.interaction), r2 = n3.resistance, o3 = -Math.log(n3.endSpeed / this.v0) / r2;
          this.targetOffset = { x: (e3.x - o3) / r2, y: (e3.y - o3) / r2 }, this.te = o3, this.lambda_v0 = r2 / this.v0, this.one_ve_v0 = 1 - n3.endSpeed / this.v0;
          var i2 = this.modification, a2 = this.modifierArg;
          a2.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, i2.result = i2.setAll(a2), i2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + i2.result.delta.x, y: this.targetOffset.y + i2.result.delta.y }), this.onNextFrame(function() {
            return t3.inertiaTick();
          });
        } }, { key: "startSmoothEnd", value: function() {
          var t3 = this;
          this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
            return t3.smoothEndTick();
          });
        } }, { key: "onNextFrame", value: function(t3) {
          var e3 = this;
          this.timeout = jt.default.request(function() {
            e3.active && t3();
          });
        } }, { key: "inertiaTick", value: function() {
          var t3, e3, n3, r2, o3, i2 = this, a2 = this.interaction, s2 = an(a2).resistance, l4 = (a2._now() - this.t0) / 1e3;
          if (l4 < this.te) {
            var u3, c3 = 1 - (Math.exp(-s2 * l4) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (0, 0, t3 = this.targetOffset.x, e3 = this.targetOffset.y, n3 = this.modifiedOffset.x, r2 = this.modifiedOffset.y, u3 = { x: sn(o3 = c3, 0, t3, n3), y: sn(o3, 0, e3, r2) }) : u3 = { x: this.targetOffset.x * c3, y: this.targetOffset.y * c3 };
            var f3 = { x: u3.x - this.currentOffset.x, y: u3.y - this.currentOffset.y };
            this.currentOffset.x += f3.x, this.currentOffset.y += f3.y, a2.offsetBy(f3), a2.move(), this.onNextFrame(function() {
              return i2.inertiaTick();
            });
          } else
            a2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var t3 = this, e3 = this.interaction, n3 = e3._now() - this.t0, r2 = an(e3).smoothEndDuration;
          if (n3 < r2) {
            var o3 = { x: ln(n3, 0, this.targetOffset.x, r2), y: ln(n3, 0, this.targetOffset.y, r2) }, i2 = { x: o3.x - this.currentOffset.x, y: o3.y - this.currentOffset.y };
            this.currentOffset.x += i2.x, this.currentOffset.y += i2.y, e3.offsetBy(i2), e3.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return t3.smoothEndTick();
            });
          } else
            e3.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(t3) {
          var e3 = t3.pointer, n3 = t3.event, r2 = t3.eventTarget, o3 = this.interaction;
          o3.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o3.updatePointer(e3, n3, r2, true), o3._doPhase({ interaction: o3, event: n3, phase: "resume" }), (0, B2.copyCoords)(o3.coords.prev, o3.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = false, this.interaction.simulation = null, jt.default.cancel(this.timeout);
        } }]) && nn(e2.prototype, n2), t2;
      }();
      function an(t2) {
        var e2 = t2.interactable, n2 = t2.prepared;
        return e2 && e2.options && n2.name && e2.options[n2.name].inertia;
      }
      __name(an, "an");
      function sn(t2, e2, n2, r2) {
        var o3 = 1 - t2;
        return o3 * o3 * e2 + 2 * o3 * t2 * n2 + t2 * t2 * r2;
      }
      __name(sn, "sn");
      function ln(t2, e2, n2, r2) {
        return -n2 * (t2 /= r2) * (t2 - 2) + e2;
      }
      __name(ln, "ln");
      en.InertiaState = on;
      var un = { id: "inertia", before: ["modifiers", "actions"], install: function(t2) {
        var e2 = t2.defaults;
        t2.usePlugin(Ge2.default), t2.usePlugin(Se3.default), t2.actions.phases.inertiastart = true, t2.actions.phases.resume = true, e2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t2) {
        var e2 = t2.interaction;
        e2.inertia = new on(e2);
      }, "interactions:before-action-end": function(t2) {
        var e2 = t2.interaction, n2 = t2.event;
        return (!e2._interacting || e2.simulation || !e2.inertia.start(n2)) && null;
      }, "interactions:down": function(t2) {
        var e2 = t2.interaction, n2 = t2.eventTarget, r2 = e2.inertia;
        if (r2.active)
          for (var o3 = n2; i.default.element(o3); ) {
            if (o3 === e2.element) {
              r2.resume(t2);
              break;
            }
            o3 = _2.parentNode(o3);
          }
      }, "interactions:stop": function(t2) {
        var e2 = t2.interaction.inertia;
        e2.active && e2.stop();
      }, "interactions:before-action-resume": function(t2) {
        var e2 = t2.interaction.modification;
        e2.stop(t2), e2.start(t2, t2.interaction.coords.cur.page), e2.applyToInteraction(t2);
      }, "interactions:before-action-inertiastart": function(t2) {
        return t2.interaction.modification.setAndApply(t2);
      }, "interactions:action-resume": Se3.addEventModifiers, "interactions:action-inertiastart": Se3.addEventModifiers, "interactions:after-action-inertiastart": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      }, "interactions:after-action-resume": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      } } };
      en.default = un;
      var cn = {};
      function fn2(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(fn2, "fn");
      function dn(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(dn, "dn");
      function pn(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          if (t2.immediatePropagationStopped)
            break;
          r2(t2);
        }
      }
      __name(pn, "pn");
      Object.defineProperty(cn, "__esModule", { value: true }), cn.Eventable = void 0;
      var vn = function() {
        function t2(e3) {
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), dn(this, "options", void 0), dn(this, "types", {}), dn(this, "propagationStopped", false), dn(this, "immediatePropagationStopped", false), dn(this, "global", void 0), this.options = (0, j2.default)({}, e3 || {});
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "fire", value: function(t3) {
          var e3, n3 = this.global;
          (e3 = this.types[t3.type]) && pn(t3, e3), !t3.propagationStopped && n3 && (e3 = n3[t3.type]) && pn(t3, e3);
        } }, { key: "on", value: function(t3, e3) {
          var n3 = (0, R3.default)(t3, e3);
          for (t3 in n3)
            this.types[t3] = Z2.merge(this.types[t3] || [], n3[t3]);
        } }, { key: "off", value: function(t3, e3) {
          var n3 = (0, R3.default)(t3, e3);
          for (t3 in n3) {
            var r2 = this.types[t3];
            if (r2 && r2.length)
              for (var o3 = 0; o3 < n3[t3].length; o3++) {
                var i2 = n3[t3][o3], a2 = r2.indexOf(i2);
                a2 !== -1 && r2.splice(a2, 1);
              }
          }
        } }, { key: "getRect", value: function(t3) {
          return null;
        } }]) && fn2(e2.prototype, n2), t2;
      }();
      cn.Eventable = vn;
      var hn = {};
      Object.defineProperty(hn, "__esModule", { value: true }), hn.default = function(t2, e2) {
        if (e2.phaselessTypes[t2])
          return true;
        for (var n2 in e2.map)
          if (t2.indexOf(n2) === 0 && t2.substr(n2.length) in e2.phases)
            return true;
        return false;
      };
      var gn = {};
      Object.defineProperty(gn, "__esModule", { value: true }), gn.createInteractStatic = function(t2) {
        var e2 = /* @__PURE__ */ __name(function e3(n2, r2) {
          var o3 = t2.interactables.get(n2, r2);
          return o3 || ((o3 = t2.interactables.new(n2, r2)).events.global = e3.globalEvents), o3;
        }, "e");
        return e2.getPointerAverage = B2.pointerAverage, e2.getTouchBBox = B2.touchBBox, e2.getTouchDistance = B2.touchDistance, e2.getTouchAngle = B2.touchAngle, e2.getElementRect = _2.getElementRect, e2.getElementClientRect = _2.getElementClientRect, e2.matchesSelector = _2.matchesSelector, e2.closest = _2.closest, e2.globalEvents = {}, e2.version = "1.10.11", e2.scope = t2, e2.use = function(t3, e3) {
          return this.scope.usePlugin(t3, e3), this;
        }, e2.isSet = function(t3, e3) {
          return !!this.scope.interactables.get(t3, e3 && e3.context);
        }, e2.on = (0, Yt.warnOnce)(function(t3, e3, n2) {
          if (i.default.string(t3) && t3.search(" ") !== -1 && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
            for (var r2 = 0; r2 < t3.length; r2++) {
              var o3 = t3[r2];
              this.on(o3, e3, n2);
            }
            return this;
          }
          if (i.default.object(t3)) {
            for (var a2 in t3)
              this.on(a2, t3[a2], e3);
            return this;
          }
          return (0, hn.default)(t3, this.scope.actions) ? this.globalEvents[t3] ? this.globalEvents[t3].push(e3) : this.globalEvents[t3] = [e3] : this.scope.events.add(this.scope.document, t3, e3, { options: n2 }), this;
        }, "The interact.on() method is being deprecated"), e2.off = (0, Yt.warnOnce)(function(t3, e3, n2) {
          if (i.default.string(t3) && t3.search(" ") !== -1 && (t3 = t3.trim().split(/ +/)), i.default.array(t3)) {
            for (var r2 = 0; r2 < t3.length; r2++) {
              var o3 = t3[r2];
              this.off(o3, e3, n2);
            }
            return this;
          }
          if (i.default.object(t3)) {
            for (var a2 in t3)
              this.off(a2, t3[a2], e3);
            return this;
          }
          var s2;
          return (0, hn.default)(t3, this.scope.actions) ? t3 in this.globalEvents && (s2 = this.globalEvents[t3].indexOf(e3)) !== -1 && this.globalEvents[t3].splice(s2, 1) : this.scope.events.remove(this.scope.document, t3, e3, n2), this;
        }, "The interact.off() method is being deprecated"), e2.debug = function() {
          return this.scope;
        }, e2.supportsTouch = function() {
          return b2.default.supportsTouch;
        }, e2.supportsPointerEvent = function() {
          return b2.default.supportsPointerEvent;
        }, e2.stop = function() {
          for (var t3 = 0; t3 < this.scope.interactions.list.length; t3++)
            this.scope.interactions.list[t3].stop();
          return this;
        }, e2.pointerMoveTolerance = function(t3) {
          return i.default.number(t3) ? (this.scope.interactions.pointerMoveTolerance = t3, this) : this.scope.interactions.pointerMoveTolerance;
        }, e2.addDocument = function(t3, e3) {
          this.scope.addDocument(t3, e3);
        }, e2.removeDocument = function(t3) {
          this.scope.removeDocument(t3);
        }, e2;
      };
      var yn = {};
      function mn(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(mn, "mn");
      function bn(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(bn, "bn");
      Object.defineProperty(yn, "__esModule", { value: true }), yn.Interactable = void 0;
      var xn = function() {
        function t2(n3, r3, o3, i2) {
          !function(t3, e2) {
            if (!(t3 instanceof e2))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), bn(this, "options", void 0), bn(this, "_actions", void 0), bn(this, "target", void 0), bn(this, "events", new cn.Eventable()), bn(this, "_context", void 0), bn(this, "_win", void 0), bn(this, "_doc", void 0), bn(this, "_scopeEvents", void 0), bn(this, "_rectChecker", void 0), this._actions = r3.actions, this.target = n3, this._context = r3.context || o3, this._win = (0, e.getWindow)((0, _2.trySelector)(n3) ? this._context : n3), this._doc = this._win.document, this._scopeEvents = i2, this.set(r3);
        }
        __name(t2, "t");
        var n2, r2;
        return n2 = t2, (r2 = [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(t3, e2) {
          return i.default.func(e2.onstart) && this.on("".concat(t3, "start"), e2.onstart), i.default.func(e2.onmove) && this.on("".concat(t3, "move"), e2.onmove), i.default.func(e2.onend) && this.on("".concat(t3, "end"), e2.onend), i.default.func(e2.oninertiastart) && this.on("".concat(t3, "inertiastart"), e2.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(t3, e2, n3) {
          (i.default.array(e2) || i.default.object(e2)) && this.off(t3, e2), (i.default.array(n3) || i.default.object(n3)) && this.on(t3, n3);
        } }, { key: "setPerAction", value: function(t3, e2) {
          var n3 = this._defaults;
          for (var r3 in e2) {
            var o3 = r3, a2 = this.options[t3], s2 = e2[o3];
            o3 === "listeners" && this.updatePerActionListeners(t3, a2.listeners, s2), i.default.array(s2) ? a2[o3] = Z2.from(s2) : i.default.plainObject(s2) ? (a2[o3] = (0, j2.default)(a2[o3] || {}, (0, ge2.default)(s2)), i.default.object(n3.perAction[o3]) && "enabled" in n3.perAction[o3] && (a2[o3].enabled = s2.enabled !== false)) : i.default.bool(s2) && i.default.object(n3.perAction[o3]) ? a2[o3].enabled = s2 : a2[o3] = s2;
          }
        } }, { key: "getRect", value: function(t3) {
          return t3 = t3 || (i.default.element(this.target) ? this.target : null), i.default.string(this.target) && (t3 = t3 || this._context.querySelector(this.target)), (0, _2.getElementRect)(t3);
        } }, { key: "rectChecker", value: function(t3) {
          var e2 = this;
          return i.default.func(t3) ? (this._rectChecker = t3, this.getRect = function(t4) {
            var n3 = (0, j2.default)({}, e2._rectChecker(t4));
            return "width" in n3 || (n3.width = n3.right - n3.left, n3.height = n3.bottom - n3.top), n3;
          }, this) : t3 === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(t3, e2) {
          if ((0, _2.trySelector)(e2) || i.default.object(e2)) {
            for (var n3 in this.options[t3] = e2, this._actions.map)
              this.options[n3][t3] = e2;
            return this;
          }
          return this.options[t3];
        } }, { key: "origin", value: function(t3) {
          return this._backCompatOption("origin", t3);
        } }, { key: "deltaSource", value: function(t3) {
          return t3 === "page" || t3 === "client" ? (this.options.deltaSource = t3, this) : this.options.deltaSource;
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(t3) {
          return this._context === t3.ownerDocument || (0, _2.nodeContains)(this._context, t3);
        } }, { key: "testIgnoreAllow", value: function(t3, e2, n3) {
          return !this.testIgnore(t3.ignoreFrom, e2, n3) && this.testAllow(t3.allowFrom, e2, n3);
        } }, { key: "testAllow", value: function(t3, e2, n3) {
          return !t3 || !!i.default.element(n3) && (i.default.string(t3) ? (0, _2.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _2.nodeContains)(t3, n3));
        } }, { key: "testIgnore", value: function(t3, e2, n3) {
          return !(!t3 || !i.default.element(n3)) && (i.default.string(t3) ? (0, _2.matchesUpTo)(n3, t3, e2) : !!i.default.element(t3) && (0, _2.nodeContains)(t3, n3));
        } }, { key: "fire", value: function(t3) {
          return this.events.fire(t3), this;
        } }, { key: "_onOff", value: function(t3, e2, n3, r3) {
          i.default.object(e2) && !i.default.array(e2) && (r3 = n3, n3 = null);
          var o3 = t3 === "on" ? "add" : "remove", a2 = (0, R3.default)(e2, n3);
          for (var s2 in a2) {
            s2 === "wheel" && (s2 = b2.default.wheelEvent);
            for (var l4 = 0; l4 < a2[s2].length; l4++) {
              var u3 = a2[s2][l4];
              (0, hn.default)(s2, this._actions) ? this.events[t3](s2, u3) : i.default.string(this.target) ? this._scopeEvents["".concat(o3, "Delegate")](this.target, this._context, s2, u3, r3) : this._scopeEvents[o3](this.target, s2, u3, r3);
            }
          }
          return this;
        } }, { key: "on", value: function(t3, e2, n3) {
          return this._onOff("on", t3, e2, n3);
        } }, { key: "off", value: function(t3, e2, n3) {
          return this._onOff("off", t3, e2, n3);
        } }, { key: "set", value: function(t3) {
          var e2 = this._defaults;
          for (var n3 in i.default.object(t3) || (t3 = {}), this.options = (0, ge2.default)(e2.base), this._actions.methodDict) {
            var r3 = n3, o3 = this._actions.methodDict[r3];
            this.options[r3] = {}, this.setPerAction(r3, (0, j2.default)((0, j2.default)({}, e2.perAction), e2.actions[r3])), this[o3](t3[r3]);
          }
          for (var a2 in t3)
            i.default.func(this[a2]) && this[a2](t3[a2]);
          return this;
        } }, { key: "unset", value: function() {
          if (i.default.string(this.target))
            for (var t3 in this._scopeEvents.delegatedEvents)
              for (var e2 = this._scopeEvents.delegatedEvents[t3], n3 = e2.length - 1; n3 >= 0; n3--) {
                var r3 = e2[n3], o3 = r3.selector, a2 = r3.context, s2 = r3.listeners;
                o3 === this.target && a2 === this._context && e2.splice(n3, 1);
                for (var l4 = s2.length - 1; l4 >= 0; l4--)
                  this._scopeEvents.removeDelegate(this.target, this._context, t3, s2[l4][0], s2[l4][1]);
              }
          else
            this._scopeEvents.remove(this.target, "all");
        } }]) && mn(n2.prototype, r2), t2;
      }();
      yn.Interactable = xn;
      var wn = {};
      function _n(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(_n, "_n");
      function Pn(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Pn, "Pn");
      Object.defineProperty(wn, "__esModule", { value: true }), wn.InteractableSet = void 0;
      var On = function() {
        function t2(e3) {
          var n3 = this;
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), Pn(this, "list", []), Pn(this, "selectorMap", {}), Pn(this, "scope", void 0), this.scope = e3, e3.addListeners({ "interactable:unset": function(t3) {
            var e4 = t3.interactable, r2 = e4.target, o3 = e4._context, a2 = i.default.string(r2) ? n3.selectorMap[r2] : r2[n3.scope.id], s2 = Z2.findIndex(a2, function(t4) {
              return t4.context === o3;
            });
            a2[s2] && (a2[s2].context = null, a2[s2].interactable = null), a2.splice(s2, 1);
          } });
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "new", value: function(t3, e3) {
          e3 = (0, j2.default)(e3 || {}, { actions: this.scope.actions });
          var n3 = new this.scope.Interactable(t3, e3, this.scope.document, this.scope.events), r2 = { context: n3._context, interactable: n3 };
          return this.scope.addDocument(n3._doc), this.list.push(n3), i.default.string(t3) ? (this.selectorMap[t3] || (this.selectorMap[t3] = []), this.selectorMap[t3].push(r2)) : (n3.target[this.scope.id] || Object.defineProperty(t3, this.scope.id, { value: [], configurable: true }), t3[this.scope.id].push(r2)), this.scope.fire("interactable:new", { target: t3, options: e3, interactable: n3, win: this.scope._win }), n3;
        } }, { key: "get", value: function(t3, e3) {
          var n3 = e3 && e3.context || this.scope.document, r2 = i.default.string(t3), o3 = r2 ? this.selectorMap[t3] : t3[this.scope.id];
          if (!o3)
            return null;
          var a2 = Z2.find(o3, function(e4) {
            return e4.context === n3 && (r2 || e4.interactable.inContext(t3));
          });
          return a2 && a2.interactable;
        } }, { key: "forEachMatch", value: function(t3, e3) {
          for (var n3 = 0; n3 < this.list.length; n3++) {
            var r2 = this.list[n3], o3 = void 0;
            if ((i.default.string(r2.target) ? i.default.element(t3) && _2.matchesSelector(t3, r2.target) : t3 === r2.target) && r2.inContext(t3) && (o3 = e3(r2)), o3 !== void 0)
              return o3;
          }
        } }]) && _n(e2.prototype, n2), t2;
      }();
      wn.InteractableSet = On;
      var Sn = {};
      function En(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(En, "En");
      function Tn(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Tn, "Tn");
      function Mn(t2, e2) {
        return function(t3) {
          if (Array.isArray(t3))
            return t3;
        }(t2) || function(t3, e3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
            var n2 = [], r2 = true, o3 = false, i2 = void 0;
            try {
              for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
                ;
            } catch (t4) {
              o3 = true, i2 = t4;
            } finally {
              try {
                r2 || s2.return == null || s2.return();
              } finally {
                if (o3)
                  throw i2;
              }
            }
            return n2;
          }
        }(t2, e2) || function(t3, e3) {
          if (t3) {
            if (typeof t3 == "string")
              return jn(t3, e3);
            var n2 = Object.prototype.toString.call(t3).slice(8, -1);
            return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? jn(t3, e3) : void 0;
          }
        }(t2, e2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      __name(Mn, "Mn");
      function jn(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
          r2[n2] = t2[n2];
        return r2;
      }
      __name(jn, "jn");
      Object.defineProperty(Sn, "__esModule", { value: true }), Sn.default = void 0;
      var kn = function() {
        function t2(e3) {
          !function(t3, e4) {
            if (!(t3 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, t2), Tn(this, "currentTarget", void 0), Tn(this, "originalEvent", void 0), Tn(this, "type", void 0), this.originalEvent = e3, (0, F3.default)(this, e3);
        }
        __name(t2, "t");
        var e2, n2;
        return e2 = t2, (n2 = [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]) && En(e2.prototype, n2), t2;
      }();
      function In(t2) {
        if (!i.default.object(t2))
          return { capture: !!t2, passive: false };
        var e2 = (0, j2.default)({}, t2);
        return e2.capture = !!t2.capture, e2.passive = !!t2.passive, e2;
      }
      __name(In, "In");
      var Dn = { id: "events", install: function(t2) {
        var e2, n2 = [], r2 = {}, o3 = [], a2 = { add: s2, remove: l4, addDelegate: function(t3, e3, n3, i2, a3) {
          var l5 = In(a3);
          if (!r2[n3]) {
            r2[n3] = [];
            for (var f3 = 0; f3 < o3.length; f3++) {
              var d3 = o3[f3];
              s2(d3, n3, u3), s2(d3, n3, c3, true);
            }
          }
          var p4 = r2[n3], v3 = Z2.find(p4, function(n4) {
            return n4.selector === t3 && n4.context === e3;
          });
          v3 || (v3 = { selector: t3, context: e3, listeners: [] }, p4.push(v3)), v3.listeners.push([i2, l5]);
        }, removeDelegate: function(t3, e3, n3, o4, i2) {
          var a3, s3 = In(i2), f3 = r2[n3], d3 = false;
          if (f3)
            for (a3 = f3.length - 1; a3 >= 0; a3--) {
              var p4 = f3[a3];
              if (p4.selector === t3 && p4.context === e3) {
                for (var v3 = p4.listeners, h3 = v3.length - 1; h3 >= 0; h3--) {
                  var g3 = Mn(v3[h3], 2), y3 = g3[0], m3 = g3[1], b3 = m3.capture, x3 = m3.passive;
                  if (y3 === o4 && b3 === s3.capture && x3 === s3.passive) {
                    v3.splice(h3, 1), v3.length || (f3.splice(a3, 1), l4(e3, n3, u3), l4(e3, n3, c3, true)), d3 = true;
                    break;
                  }
                }
                if (d3)
                  break;
              }
            }
        }, delegateListener: u3, delegateUseCapture: c3, delegatedEvents: r2, documents: o3, targets: n2, supportsOptions: false, supportsPassive: false };
        function s2(t3, e3, r3, o4) {
          var i2 = In(o4), s3 = Z2.find(n2, function(e4) {
            return e4.eventTarget === t3;
          });
          s3 || (s3 = { eventTarget: t3, events: {} }, n2.push(s3)), s3.events[e3] || (s3.events[e3] = []), t3.addEventListener && !Z2.contains(s3.events[e3], r3) && (t3.addEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), s3.events[e3].push(r3));
        }
        __name(s2, "s");
        function l4(t3, e3, r3, o4) {
          var i2 = In(o4), s3 = Z2.findIndex(n2, function(e4) {
            return e4.eventTarget === t3;
          }), u4 = n2[s3];
          if (u4 && u4.events)
            if (e3 !== "all") {
              var c4 = false, f3 = u4.events[e3];
              if (f3) {
                if (r3 === "all") {
                  for (var d3 = f3.length - 1; d3 >= 0; d3--)
                    l4(t3, e3, f3[d3], i2);
                  return;
                }
                for (var p4 = 0; p4 < f3.length; p4++)
                  if (f3[p4] === r3) {
                    t3.removeEventListener(e3, r3, a2.supportsOptions ? i2 : i2.capture), f3.splice(p4, 1), f3.length === 0 && (delete u4.events[e3], c4 = true);
                    break;
                  }
              }
              c4 && !Object.keys(u4.events).length && n2.splice(s3, 1);
            } else
              for (e3 in u4.events)
                u4.events.hasOwnProperty(e3) && l4(t3, e3, "all");
        }
        __name(l4, "l");
        function u3(t3, e3) {
          for (var n3 = In(e3), o4 = new kn(t3), a3 = r2[t3.type], s3 = Mn(B2.getEventTargets(t3), 1)[0], l5 = s3; i.default.element(l5); ) {
            for (var u4 = 0; u4 < a3.length; u4++) {
              var c4 = a3[u4], f3 = c4.selector, d3 = c4.context;
              if (_2.matchesSelector(l5, f3) && _2.nodeContains(d3, s3) && _2.nodeContains(d3, l5)) {
                var p4 = c4.listeners;
                o4.currentTarget = l5;
                for (var v3 = 0; v3 < p4.length; v3++) {
                  var h3 = Mn(p4[v3], 2), g3 = h3[0], y3 = h3[1], m3 = y3.capture, b3 = y3.passive;
                  m3 === n3.capture && b3 === n3.passive && g3(o4);
                }
              }
            }
            l5 = _2.parentNode(l5);
          }
        }
        __name(u3, "u");
        function c3(t3) {
          return u3(t3, true);
        }
        __name(c3, "c");
        return (e2 = t2.document) == null || e2.createElement("div").addEventListener("test", null, { get capture() {
          return a2.supportsOptions = true;
        }, get passive() {
          return a2.supportsPassive = true;
        } }), t2.events = a2, a2;
      } };
      Sn.default = Dn;
      var An = {};
      Object.defineProperty(An, "__esModule", { value: true }), An.default = void 0;
      var Rn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t2) {
        for (var e2 = 0; e2 < Rn.methodOrder.length; e2++) {
          var n2;
          n2 = Rn.methodOrder[e2];
          var r2 = Rn[n2](t2);
          if (r2)
            return r2;
        }
        return null;
      }, simulationResume: function(t2) {
        var e2 = t2.pointerType, n2 = t2.eventType, r2 = t2.eventTarget, o3 = t2.scope;
        if (!/down|start/i.test(n2))
          return null;
        for (var i2 = 0; i2 < o3.interactions.list.length; i2++) {
          var a2 = o3.interactions.list[i2], s2 = r2;
          if (a2.simulation && a2.simulation.allowResume && a2.pointerType === e2)
            for (; s2; ) {
              if (s2 === a2.element)
                return a2;
              s2 = _2.parentNode(s2);
            }
        }
        return null;
      }, mouseOrPen: function(t2) {
        var e2, n2 = t2.pointerId, r2 = t2.pointerType, o3 = t2.eventType, i2 = t2.scope;
        if (r2 !== "mouse" && r2 !== "pen")
          return null;
        for (var a2 = 0; a2 < i2.interactions.list.length; a2++) {
          var s2 = i2.interactions.list[a2];
          if (s2.pointerType === r2) {
            if (s2.simulation && !zn(s2, n2))
              continue;
            if (s2.interacting())
              return s2;
            e2 || (e2 = s2);
          }
        }
        if (e2)
          return e2;
        for (var l4 = 0; l4 < i2.interactions.list.length; l4++) {
          var u3 = i2.interactions.list[l4];
          if (!(u3.pointerType !== r2 || /down/i.test(o3) && u3.simulation))
            return u3;
        }
        return null;
      }, hasPointer: function(t2) {
        for (var e2 = t2.pointerId, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
          var o3 = n2.interactions.list[r2];
          if (zn(o3, e2))
            return o3;
        }
        return null;
      }, idle: function(t2) {
        for (var e2 = t2.pointerType, n2 = t2.scope, r2 = 0; r2 < n2.interactions.list.length; r2++) {
          var o3 = n2.interactions.list[r2];
          if (o3.pointers.length === 1) {
            var i2 = o3.interactable;
            if (i2 && (!i2.options.gesture || !i2.options.gesture.enabled))
              continue;
          } else if (o3.pointers.length >= 2)
            continue;
          if (!o3.interacting() && e2 === o3.pointerType)
            return o3;
        }
        return null;
      } };
      function zn(t2, e2) {
        return t2.pointers.some(function(t3) {
          return t3.id === e2;
        });
      }
      __name(zn, "zn");
      var Cn = Rn;
      An.default = Cn;
      var Fn = {};
      function Xn(t2) {
        return (Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(Xn, "Xn");
      function Yn(t2, e2) {
        return function(t3) {
          if (Array.isArray(t3))
            return t3;
        }(t2) || function(t3, e3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
            var n2 = [], r2 = true, o3 = false, i2 = void 0;
            try {
              for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
                ;
            } catch (t4) {
              o3 = true, i2 = t4;
            } finally {
              try {
                r2 || s2.return == null || s2.return();
              } finally {
                if (o3)
                  throw i2;
              }
            }
            return n2;
          }
        }(t2, e2) || function(t3, e3) {
          if (t3) {
            if (typeof t3 == "string")
              return Bn(t3, e3);
            var n2 = Object.prototype.toString.call(t3).slice(8, -1);
            return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Bn(t3, e3) : void 0;
          }
        }(t2, e2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      __name(Yn, "Yn");
      function Bn(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
          r2[n2] = t2[n2];
        return r2;
      }
      __name(Bn, "Bn");
      function Wn(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      __name(Wn, "Wn");
      function Ln(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(Ln, "Ln");
      function Un(t2, e2) {
        return (Un = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        })(t2, e2);
      }
      __name(Un, "Un");
      function Vn(t2, e2) {
        return !e2 || Xn(e2) !== "object" && typeof e2 != "function" ? function(t3) {
          if (t3 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }(t2) : e2;
      }
      __name(Vn, "Vn");
      function Nn(t2) {
        return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      __name(Nn, "Nn");
      Object.defineProperty(Fn, "__esModule", { value: true }), Fn.default = void 0;
      var qn = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function $n(t2, e2) {
        return function(n2) {
          var r2 = e2.interactions.list, o3 = B2.getPointerType(n2), i2 = Yn(B2.getEventTargets(n2), 2), a2 = i2[0], s2 = i2[1], l4 = [];
          if (/^touch/.test(n2.type)) {
            e2.prevTouchTime = e2.now();
            for (var u3 = 0; u3 < n2.changedTouches.length; u3++) {
              var c3 = n2.changedTouches[u3], f3 = { pointer: c3, pointerId: B2.getPointerId(c3), pointerType: o3, eventType: n2.type, eventTarget: a2, curEventTarget: s2, scope: e2 }, d3 = Gn(f3);
              l4.push([f3.pointer, f3.eventTarget, f3.curEventTarget, d3]);
            }
          } else {
            var p4 = false;
            if (!b2.default.supportsPointerEvent && /mouse/.test(n2.type)) {
              for (var v3 = 0; v3 < r2.length && !p4; v3++)
                p4 = r2[v3].pointerType !== "mouse" && r2[v3].pointerIsDown;
              p4 = p4 || e2.now() - e2.prevTouchTime < 500 || n2.timeStamp === 0;
            }
            if (!p4) {
              var h3 = { pointer: n2, pointerId: B2.getPointerId(n2), pointerType: o3, eventType: n2.type, curEventTarget: s2, eventTarget: a2, scope: e2 }, g3 = Gn(h3);
              l4.push([h3.pointer, h3.eventTarget, h3.curEventTarget, g3]);
            }
          }
          for (var y3 = 0; y3 < l4.length; y3++) {
            var m3 = Yn(l4[y3], 4), x3 = m3[0], w3 = m3[1], _3 = m3[2];
            m3[3][t2](x3, n2, w3, _3);
          }
        };
      }
      __name($n, "$n");
      function Gn(t2) {
        var e2 = t2.pointerType, n2 = t2.scope, r2 = { interaction: An.default.search(t2), searchDetails: t2 };
        return n2.fire("interactions:find", r2), r2.interaction || n2.interactions.new({ pointerType: e2 });
      }
      __name(Gn, "Gn");
      function Hn(t2, e2) {
        var n2 = t2.doc, r2 = t2.scope, o3 = t2.options, i2 = r2.interactions.docEvents, a2 = r2.events, s2 = a2[e2];
        for (var l4 in r2.browser.isIOS && !o3.events && (o3.events = { passive: false }), a2.delegatedEvents)
          s2(n2, l4, a2.delegateListener), s2(n2, l4, a2.delegateUseCapture, true);
        for (var u3 = o3 && o3.events, c3 = 0; c3 < i2.length; c3++) {
          var f3 = i2[c3];
          s2(n2, f3.type, f3.listener, u3);
        }
      }
      __name(Hn, "Hn");
      var Kn = { id: "core/interactions", install: function(t2) {
        for (var e2 = {}, n2 = 0; n2 < qn.length; n2++) {
          var r2 = qn[n2];
          e2[r2] = $n(r2, t2);
        }
        var o3, i2 = b2.default.pEventTypes;
        function a2() {
          for (var e3 = 0; e3 < t2.interactions.list.length; e3++) {
            var n3 = t2.interactions.list[e3];
            if (n3.pointerIsDown && n3.pointerType === "touch" && !n3._interacting)
              for (var r3 = function() {
                var e4 = n3.pointers[o4];
                t2.documents.some(function(t3) {
                  var n4 = t3.doc;
                  return (0, _2.nodeContains)(n4, e4.downTarget);
                }) || n3.removePointer(e4.pointer, e4.event);
              }, o4 = 0; o4 < n3.pointers.length; o4++)
                r3();
          }
        }
        __name(a2, "a");
        (o3 = h2.default.PointerEvent ? [{ type: i2.down, listener: a2 }, { type: i2.down, listener: e2.pointerDown }, { type: i2.move, listener: e2.pointerMove }, { type: i2.up, listener: e2.pointerUp }, { type: i2.cancel, listener: e2.pointerUp }] : [{ type: "mousedown", listener: e2.pointerDown }, { type: "mousemove", listener: e2.pointerMove }, { type: "mouseup", listener: e2.pointerUp }, { type: "touchstart", listener: a2 }, { type: "touchstart", listener: e2.pointerDown }, { type: "touchmove", listener: e2.pointerMove }, { type: "touchend", listener: e2.pointerUp }, { type: "touchcancel", listener: e2.pointerUp }]).push({ type: "blur", listener: function(e3) {
          for (var n3 = 0; n3 < t2.interactions.list.length; n3++)
            t2.interactions.list[n3].documentBlur(e3);
        } }), t2.prevTouchTime = 0, t2.Interaction = function(e3) {
          !function(t3, e4) {
            if (typeof e4 != "function" && e4 !== null)
              throw new TypeError("Super expression must either be null or a function");
            t3.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e4 && Un(t3, e4);
          }(s2, e3);
          var n3, r3, o4, i3, a3 = (o4 = s2, i3 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }(), function() {
            var t3, e4 = Nn(o4);
            if (i3) {
              var n4 = Nn(this).constructor;
              t3 = Reflect.construct(e4, arguments, n4);
            } else
              t3 = e4.apply(this, arguments);
            return Vn(this, t3);
          });
          function s2() {
            return Wn(this, s2), a3.apply(this, arguments);
          }
          __name(s2, "s");
          return n3 = s2, (r3 = [{ key: "pointerMoveTolerance", get: function() {
            return t2.interactions.pointerMoveTolerance;
          }, set: function(e4) {
            t2.interactions.pointerMoveTolerance = e4;
          } }, { key: "_now", value: function() {
            return t2.now();
          } }]) && Ln(n3.prototype, r3), s2;
        }(Le.default), t2.interactions = { list: [], new: function(e3) {
          e3.scopeFire = function(e4, n4) {
            return t2.fire(e4, n4);
          };
          var n3 = new t2.Interaction(e3);
          return t2.interactions.list.push(n3), n3;
        }, listeners: e2, docEvents: o3, pointerMoveTolerance: 1 }, t2.usePlugin(se.default);
      }, listeners: { "scope:add-document": function(t2) {
        return Hn(t2, "add");
      }, "scope:remove-document": function(t2) {
        return Hn(t2, "remove");
      }, "interactable:unset": function(t2, e2) {
        for (var n2 = t2.interactable, r2 = e2.interactions.list.length - 1; r2 >= 0; r2--) {
          var o3 = e2.interactions.list[r2];
          o3.interactable === n2 && (o3.stop(), e2.fire("interactions:destroy", { interaction: o3 }), o3.destroy(), e2.interactions.list.length > 2 && e2.interactions.list.splice(r2, 1));
        }
      } }, onDocSignal: Hn, doOnInteractions: $n, methodNames: qn };
      Fn.default = Kn;
      var Zn = {};
      function Jn(t2) {
        return (Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(Jn, "Jn");
      function Qn(t2, e2, n2) {
        return (Qn = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t3, e3, n3) {
          var r2 = function(t4, e4) {
            for (; !Object.prototype.hasOwnProperty.call(t4, e4) && (t4 = nr(t4)) !== null; )
              ;
            return t4;
          }(t3, e3);
          if (r2) {
            var o3 = Object.getOwnPropertyDescriptor(r2, e3);
            return o3.get ? o3.get.call(n3) : o3.value;
          }
        })(t2, e2, n2 || t2);
      }
      __name(Qn, "Qn");
      function tr(t2, e2) {
        return (tr = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        })(t2, e2);
      }
      __name(tr, "tr");
      function er(t2, e2) {
        return !e2 || Jn(e2) !== "object" && typeof e2 != "function" ? function(t3) {
          if (t3 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }(t2) : e2;
      }
      __name(er, "er");
      function nr(t2) {
        return (nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      __name(nr, "nr");
      function rr(t2, e2) {
        if (!(t2 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      __name(rr, "rr");
      function or(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(or, "or");
      function ir(t2, e2, n2) {
        return e2 && or(t2.prototype, e2), n2 && or(t2, n2), t2;
      }
      __name(ir, "ir");
      function ar(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(ar, "ar");
      Object.defineProperty(Zn, "__esModule", { value: true }), Zn.initScope = lr, Zn.Scope = void 0;
      var sr2 = function() {
        function t2() {
          var e2 = this;
          rr(this, t2), ar(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), ar(this, "isInitialized", false), ar(this, "listenerMaps", []), ar(this, "browser", b2.default), ar(this, "defaults", (0, ge2.default)(Me3.defaults)), ar(this, "Eventable", cn.Eventable), ar(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), ar(this, "interactStatic", (0, gn.createInteractStatic)(this)), ar(this, "InteractEvent", je.InteractEvent), ar(this, "Interactable", void 0), ar(this, "interactables", new wn.InteractableSet(this)), ar(this, "_win", void 0), ar(this, "document", void 0), ar(this, "window", void 0), ar(this, "documents", []), ar(this, "_plugins", { list: [], map: {} }), ar(this, "onWindowUnload", function(t3) {
            return e2.removeDocument(t3.target);
          });
          var n2 = this;
          this.Interactable = function(t3) {
            !function(t4, e4) {
              if (typeof e4 != "function" && e4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, writable: true, configurable: true } }), e4 && tr(t4, e4);
            }(i2, t3);
            var e3, r2, o3 = (e3 = i2, r2 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (t4) {
                return false;
              }
            }(), function() {
              var t4, n3 = nr(e3);
              if (r2) {
                var o4 = nr(this).constructor;
                t4 = Reflect.construct(n3, arguments, o4);
              } else
                t4 = n3.apply(this, arguments);
              return er(this, t4);
            });
            function i2() {
              return rr(this, i2), o3.apply(this, arguments);
            }
            __name(i2, "i");
            return ir(i2, [{ key: "_defaults", get: function() {
              return n2.defaults;
            } }, { key: "set", value: function(t4) {
              return Qn(nr(i2.prototype), "set", this).call(this, t4), n2.fire("interactable:set", { options: t4, interactable: this }), this;
            } }, { key: "unset", value: function() {
              Qn(nr(i2.prototype), "unset", this).call(this), n2.interactables.list.splice(n2.interactables.list.indexOf(this), 1), n2.fire("interactable:unset", { interactable: this });
            } }]), i2;
          }(yn.Interactable);
        }
        __name(t2, "t");
        return ir(t2, [{ key: "addListeners", value: function(t3, e2) {
          this.listenerMaps.push({ id: e2, map: t3 });
        } }, { key: "fire", value: function(t3, e2) {
          for (var n2 = 0; n2 < this.listenerMaps.length; n2++) {
            var r2 = this.listenerMaps[n2].map[t3];
            if (r2 && r2(e2, this, t3) === false)
              return false;
          }
        } }, { key: "init", value: function(t3) {
          return this.isInitialized ? this : lr(this, t3);
        } }, { key: "pluginIsInstalled", value: function(t3) {
          return this._plugins.map[t3.id] || this._plugins.list.indexOf(t3) !== -1;
        } }, { key: "usePlugin", value: function(t3, e2) {
          if (!this.isInitialized)
            return this;
          if (this.pluginIsInstalled(t3))
            return this;
          if (t3.id && (this._plugins.map[t3.id] = t3), this._plugins.list.push(t3), t3.install && t3.install(this, e2), t3.listeners && t3.before) {
            for (var n2 = 0, r2 = this.listenerMaps.length, o3 = t3.before.reduce(function(t4, e3) {
              return t4[e3] = true, t4[ur(e3)] = true, t4;
            }, {}); n2 < r2; n2++) {
              var i2 = this.listenerMaps[n2].id;
              if (o3[i2] || o3[ur(i2)])
                break;
            }
            this.listenerMaps.splice(n2, 0, { id: t3.id, map: t3.listeners });
          } else
            t3.listeners && this.listenerMaps.push({ id: t3.id, map: t3.listeners });
          return this;
        } }, { key: "addDocument", value: function(t3, n2) {
          if (this.getDocIndex(t3) !== -1)
            return false;
          var r2 = e.getWindow(t3);
          n2 = n2 ? (0, j2.default)({}, n2) : {}, this.documents.push({ doc: t3, options: n2 }), this.events.documents.push(t3), t3 !== this.document && this.events.add(r2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t3, window: r2, scope: this, options: n2 });
        } }, { key: "removeDocument", value: function(t3) {
          var n2 = this.getDocIndex(t3), r2 = e.getWindow(t3), o3 = this.documents[n2].options;
          this.events.remove(r2, "unload", this.onWindowUnload), this.documents.splice(n2, 1), this.events.documents.splice(n2, 1), this.fire("scope:remove-document", { doc: t3, window: r2, scope: this, options: o3 });
        } }, { key: "getDocIndex", value: function(t3) {
          for (var e2 = 0; e2 < this.documents.length; e2++)
            if (this.documents[e2].doc === t3)
              return e2;
          return -1;
        } }, { key: "getDocOptions", value: function(t3) {
          var e2 = this.getDocIndex(t3);
          return e2 === -1 ? null : this.documents[e2].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t2;
      }();
      function lr(t2, n2) {
        return t2.isInitialized = true, i.default.window(n2) && e.init(n2), h2.default.init(n2), b2.default.init(n2), jt.default.init(n2), t2.window = n2, t2.document = n2.document, t2.usePlugin(Fn.default), t2.usePlugin(Sn.default), t2;
      }
      __name(lr, "lr");
      function ur(t2) {
        return t2 && t2.replace(/\/.*$/, "");
      }
      __name(ur, "ur");
      Zn.Scope = sr2;
      var cr = {};
      Object.defineProperty(cr, "__esModule", { value: true }), cr.default = void 0;
      var fr = new Zn.Scope(), dr = fr.interactStatic;
      cr.default = dr;
      var pr = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
      fr.init(pr);
      var vr = {};
      Object.defineProperty(vr, "__esModule", { value: true }), vr.default = void 0, vr.default = function() {
      };
      var hr = {};
      Object.defineProperty(hr, "__esModule", { value: true }), hr.default = void 0, hr.default = function() {
      };
      var gr = {};
      function yr(t2, e2) {
        return function(t3) {
          if (Array.isArray(t3))
            return t3;
        }(t2) || function(t3, e3) {
          if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
            var n2 = [], r2 = true, o3 = false, i2 = void 0;
            try {
              for (var a2, s2 = t3[Symbol.iterator](); !(r2 = (a2 = s2.next()).done) && (n2.push(a2.value), !e3 || n2.length !== e3); r2 = true)
                ;
            } catch (t4) {
              o3 = true, i2 = t4;
            } finally {
              try {
                r2 || s2.return == null || s2.return();
              } finally {
                if (o3)
                  throw i2;
              }
            }
            return n2;
          }
        }(t2, e2) || function(t3, e3) {
          if (t3) {
            if (typeof t3 == "string")
              return mr(t3, e3);
            var n2 = Object.prototype.toString.call(t3).slice(8, -1);
            return n2 === "Object" && t3.constructor && (n2 = t3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(t3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? mr(t3, e3) : void 0;
          }
        }(t2, e2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      __name(yr, "yr");
      function mr(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
          r2[n2] = t2[n2];
        return r2;
      }
      __name(mr, "mr");
      Object.defineProperty(gr, "__esModule", { value: true }), gr.default = void 0, gr.default = function(t2) {
        var e2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(e3) {
          var n3 = yr(e3, 2), r2 = n3[0], o3 = n3[1];
          return r2 in t2 || o3 in t2;
        }), n2 = /* @__PURE__ */ __name(function(n3, r2) {
          for (var o3 = t2.range, i2 = t2.limits, a2 = i2 === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : i2, s2 = t2.offset, l4 = s2 === void 0 ? { x: 0, y: 0 } : s2, u3 = { range: o3, grid: t2, x: null, y: null }, c3 = 0; c3 < e2.length; c3++) {
            var f3 = yr(e2[c3], 2), d3 = f3[0], p4 = f3[1], v3 = Math.round((n3 - l4.x) / t2[d3]), h3 = Math.round((r2 - l4.y) / t2[p4]);
            u3[d3] = Math.max(a2.left, Math.min(a2.right, v3 * t2[d3] + l4.x)), u3[p4] = Math.max(a2.top, Math.min(a2.bottom, h3 * t2[p4] + l4.y));
          }
          return u3;
        }, "n");
        return n2.grid = t2, n2.coordFields = e2, n2;
      };
      var br = {};
      Object.defineProperty(br, "__esModule", { value: true }), Object.defineProperty(br, "edgeTarget", { enumerable: true, get: function() {
        return vr.default;
      } }), Object.defineProperty(br, "elements", { enumerable: true, get: function() {
        return hr.default;
      } }), Object.defineProperty(br, "grid", { enumerable: true, get: function() {
        return gr.default;
      } });
      var xr = {};
      Object.defineProperty(xr, "__esModule", { value: true }), xr.default = void 0;
      var wr = { id: "snappers", install: function(t2) {
        var e2 = t2.interactStatic;
        e2.snappers = (0, j2.default)(e2.snappers || {}, br), e2.createSnapGrid = e2.snappers.grid;
      } };
      xr.default = wr;
      var _r = {};
      function Pr(t2, e2) {
        var n2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(t2);
          e2 && (r2 = r2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      __name(Pr, "Pr");
      function Or(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var n2 = arguments[e2] != null ? arguments[e2] : {};
          e2 % 2 ? Pr(Object(n2), true).forEach(function(e3) {
            Sr(t2, e3, n2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : Pr(Object(n2)).forEach(function(e3) {
            Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
          });
        }
        return t2;
      }
      __name(Or, "Or");
      function Sr(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Sr, "Sr");
      Object.defineProperty(_r, "__esModule", { value: true }), _r.aspectRatio = _r.default = void 0;
      var Er = { start: function(t2) {
        var e2 = t2.state, n2 = t2.rect, r2 = t2.edges, o3 = t2.pageCoords, i2 = e2.options.ratio, a2 = e2.options, s2 = a2.equalDelta, l4 = a2.modifiers;
        i2 === "preserve" && (i2 = n2.width / n2.height), e2.startCoords = (0, j2.default)({}, o3), e2.startRect = (0, j2.default)({}, n2), e2.ratio = i2, e2.equalDelta = s2;
        var u3 = e2.linkedEdges = { top: r2.top || r2.left && !r2.bottom, left: r2.left || r2.top && !r2.right, bottom: r2.bottom || r2.right && !r2.top, right: r2.right || r2.bottom && !r2.left };
        if (e2.xIsPrimaryAxis = !(!r2.left && !r2.right), e2.equalDelta)
          e2.edgeSign = (u3.left ? 1 : -1) * (u3.top ? 1 : -1);
        else {
          var c3 = e2.xIsPrimaryAxis ? u3.top : u3.left;
          e2.edgeSign = c3 ? -1 : 1;
        }
        if ((0, j2.default)(t2.edges, u3), l4 && l4.length) {
          var f3 = new ye3.default(t2.interaction);
          f3.copyFrom(t2.interaction.modification), f3.prepareStates(l4), e2.subModification = f3, f3.startAll(Or({}, t2));
        }
      }, set: function(t2) {
        var e2 = t2.state, n2 = t2.rect, r2 = t2.coords, o3 = (0, j2.default)({}, r2), i2 = e2.equalDelta ? Tr : Mr;
        if (i2(e2, e2.xIsPrimaryAxis, r2, n2), !e2.subModification)
          return null;
        var a2 = (0, j2.default)({}, n2);
        (0, k2.addEdges)(e2.linkedEdges, a2, { x: r2.x - o3.x, y: r2.y - o3.y });
        var s2 = e2.subModification.setAll(Or(Or({}, t2), {}, { rect: a2, edges: e2.linkedEdges, pageCoords: r2, prevCoords: r2, prevRect: a2 })), l4 = s2.delta;
        return s2.changed && (i2(e2, Math.abs(l4.x) > Math.abs(l4.y), s2.coords, s2.rect), (0, j2.default)(r2, s2.coords)), s2.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
      function Tr(t2, e2, n2) {
        var r2 = t2.startCoords, o3 = t2.edgeSign;
        e2 ? n2.y = r2.y + (n2.x - r2.x) * o3 : n2.x = r2.x + (n2.y - r2.y) * o3;
      }
      __name(Tr, "Tr");
      function Mr(t2, e2, n2, r2) {
        var o3 = t2.startRect, i2 = t2.startCoords, a2 = t2.ratio, s2 = t2.edgeSign;
        if (e2) {
          var l4 = r2.width / a2;
          n2.y = i2.y + (l4 - o3.height) * s2;
        } else {
          var u3 = r2.height * a2;
          n2.x = i2.x + (u3 - o3.width) * s2;
        }
      }
      __name(Mr, "Mr");
      _r.aspectRatio = Er;
      var jr = (0, Se3.makeModifier)(Er, "aspectRatio");
      _r.default = jr;
      var kr = {};
      Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
      var Ir = /* @__PURE__ */ __name(function() {
      }, "Ir");
      Ir._defaults = {};
      var Dr = Ir;
      kr.default = Dr;
      var Ar = {};
      Object.defineProperty(Ar, "__esModule", { value: true }), Object.defineProperty(Ar, "default", { enumerable: true, get: function() {
        return kr.default;
      } });
      var Rr = {};
      function zr(t2, e2, n2) {
        return i.default.func(t2) ? k2.resolveRectLike(t2, e2.interactable, e2.element, [n2.x, n2.y, e2]) : k2.resolveRectLike(t2, e2.interactable, e2.element);
      }
      __name(zr, "zr");
      Object.defineProperty(Rr, "__esModule", { value: true }), Rr.getRestrictionRect = zr, Rr.restrict = Rr.default = void 0;
      var Cr = { start: function(t2) {
        var e2 = t2.rect, n2 = t2.startOffset, r2 = t2.state, o3 = t2.interaction, i2 = t2.pageCoords, a2 = r2.options, s2 = a2.elementRect, l4 = (0, j2.default)({ left: 0, top: 0, right: 0, bottom: 0 }, a2.offset || {});
        if (e2 && s2) {
          var u3 = zr(a2.restriction, o3, i2);
          if (u3) {
            var c3 = u3.right - u3.left - e2.width, f3 = u3.bottom - u3.top - e2.height;
            c3 < 0 && (l4.left += c3, l4.right += c3), f3 < 0 && (l4.top += f3, l4.bottom += f3);
          }
          l4.left += n2.left - e2.width * s2.left, l4.top += n2.top - e2.height * s2.top, l4.right += n2.right - e2.width * (1 - s2.right), l4.bottom += n2.bottom - e2.height * (1 - s2.bottom);
        }
        r2.offset = l4;
      }, set: function(t2) {
        var e2 = t2.coords, n2 = t2.interaction, r2 = t2.state, o3 = r2.options, i2 = r2.offset, a2 = zr(o3.restriction, n2, e2);
        if (a2) {
          var s2 = k2.xywhToTlbr(a2);
          e2.x = Math.max(Math.min(s2.right - i2.right, e2.x), s2.left + i2.left), e2.y = Math.max(Math.min(s2.bottom - i2.bottom, e2.y), s2.top + i2.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
      Rr.restrict = Cr;
      var Fr = (0, Se3.makeModifier)(Cr, "restrict");
      Rr.default = Fr;
      var Xr = {};
      Object.defineProperty(Xr, "__esModule", { value: true }), Xr.restrictEdges = Xr.default = void 0;
      var Yr = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Br = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Wr(t2, e2) {
        for (var n2 = ["top", "left", "bottom", "right"], r2 = 0; r2 < n2.length; r2++) {
          var o3 = n2[r2];
          o3 in t2 || (t2[o3] = e2[o3]);
        }
        return t2;
      }
      __name(Wr, "Wr");
      var Lr = { noInner: Yr, noOuter: Br, start: function(t2) {
        var e2, n2 = t2.interaction, r2 = t2.startOffset, o3 = t2.state, i2 = o3.options;
        if (i2) {
          var a2 = (0, Rr.getRestrictionRect)(i2.offset, n2, n2.coords.start.page);
          e2 = k2.rectToXY(a2);
        }
        e2 = e2 || { x: 0, y: 0 }, o3.offset = { top: e2.y + r2.top, left: e2.x + r2.left, bottom: e2.y - r2.bottom, right: e2.x - r2.right };
      }, set: function(t2) {
        var e2 = t2.coords, n2 = t2.edges, r2 = t2.interaction, o3 = t2.state, i2 = o3.offset, a2 = o3.options;
        if (n2) {
          var s2 = (0, j2.default)({}, e2), l4 = (0, Rr.getRestrictionRect)(a2.inner, r2, s2) || {}, u3 = (0, Rr.getRestrictionRect)(a2.outer, r2, s2) || {};
          Wr(l4, Yr), Wr(u3, Br), n2.top ? e2.y = Math.min(Math.max(u3.top + i2.top, s2.y), l4.top + i2.top) : n2.bottom && (e2.y = Math.max(Math.min(u3.bottom + i2.bottom, s2.y), l4.bottom + i2.bottom)), n2.left ? e2.x = Math.min(Math.max(u3.left + i2.left, s2.x), l4.left + i2.left) : n2.right && (e2.x = Math.max(Math.min(u3.right + i2.right, s2.x), l4.right + i2.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
      Xr.restrictEdges = Lr;
      var Ur = (0, Se3.makeModifier)(Lr, "restrictEdges");
      Xr.default = Ur;
      var Vr = {};
      Object.defineProperty(Vr, "__esModule", { value: true }), Vr.restrictRect = Vr.default = void 0;
      var Nr = (0, j2.default)({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t2) {
      } }, Rr.restrict.defaults), qr = { start: Rr.restrict.start, set: Rr.restrict.set, defaults: Nr };
      Vr.restrictRect = qr;
      var $r = (0, Se3.makeModifier)(qr, "restrictRect");
      Vr.default = $r;
      var Gr = {};
      Object.defineProperty(Gr, "__esModule", { value: true }), Gr.restrictSize = Gr.default = void 0;
      var Hr = { width: -1 / 0, height: -1 / 0 }, Kr = { width: 1 / 0, height: 1 / 0 }, Zr = { start: function(t2) {
        return Xr.restrictEdges.start(t2);
      }, set: function(t2) {
        var e2 = t2.interaction, n2 = t2.state, r2 = t2.rect, o3 = t2.edges, i2 = n2.options;
        if (o3) {
          var a2 = k2.tlbrToXywh((0, Rr.getRestrictionRect)(i2.min, e2, t2.coords)) || Hr, s2 = k2.tlbrToXywh((0, Rr.getRestrictionRect)(i2.max, e2, t2.coords)) || Kr;
          n2.options = { endOnly: i2.endOnly, inner: (0, j2.default)({}, Xr.restrictEdges.noInner), outer: (0, j2.default)({}, Xr.restrictEdges.noOuter) }, o3.top ? (n2.options.inner.top = r2.bottom - a2.height, n2.options.outer.top = r2.bottom - s2.height) : o3.bottom && (n2.options.inner.bottom = r2.top + a2.height, n2.options.outer.bottom = r2.top + s2.height), o3.left ? (n2.options.inner.left = r2.right - a2.width, n2.options.outer.left = r2.right - s2.width) : o3.right && (n2.options.inner.right = r2.left + a2.width, n2.options.outer.right = r2.left + s2.width), Xr.restrictEdges.set(t2), n2.options = i2;
        }
      }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
      Gr.restrictSize = Zr;
      var Jr = (0, Se3.makeModifier)(Zr, "restrictSize");
      Gr.default = Jr;
      var Qr = {};
      Object.defineProperty(Qr, "__esModule", { value: true }), Object.defineProperty(Qr, "default", { enumerable: true, get: function() {
        return kr.default;
      } });
      var to = {};
      Object.defineProperty(to, "__esModule", { value: true }), to.snap = to.default = void 0;
      var eo = { start: function(t2) {
        var e2, n2 = t2.interaction, r2 = t2.interactable, o3 = t2.element, i2 = t2.rect, a2 = t2.state, s2 = t2.startOffset, l4 = a2.options, u3 = l4.offsetWithOrigin ? function(t3) {
          var e3 = t3.interaction.element;
          return (0, k2.rectToXY)((0, k2.resolveRectLike)(t3.state.options.origin, null, null, [e3])) || (0, A3.default)(t3.interactable, e3, t3.interaction.prepared.name);
        }(t2) : { x: 0, y: 0 };
        if (l4.offset === "startCoords")
          e2 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
        else {
          var c3 = (0, k2.resolveRectLike)(l4.offset, r2, o3, [n2]);
          (e2 = (0, k2.rectToXY)(c3) || { x: 0, y: 0 }).x += u3.x, e2.y += u3.y;
        }
        var f3 = l4.relativePoints;
        a2.offsets = i2 && f3 && f3.length ? f3.map(function(t3, n3) {
          return { index: n3, relativePoint: t3, x: s2.left - i2.width * t3.x + e2.x, y: s2.top - i2.height * t3.y + e2.y };
        }) : [{ index: 0, relativePoint: null, x: e2.x, y: e2.y }];
      }, set: function(t2) {
        var e2 = t2.interaction, n2 = t2.coords, r2 = t2.state, o3 = r2.options, a2 = r2.offsets, s2 = (0, A3.default)(e2.interactable, e2.element, e2.prepared.name), l4 = (0, j2.default)({}, n2), u3 = [];
        o3.offsetWithOrigin || (l4.x -= s2.x, l4.y -= s2.y);
        for (var c3 = 0; c3 < a2.length; c3++)
          for (var f3 = a2[c3], d3 = l4.x - f3.x, p4 = l4.y - f3.y, v3 = 0, h3 = o3.targets.length; v3 < h3; v3++) {
            var g3, y3 = o3.targets[v3];
            (g3 = i.default.func(y3) ? y3(d3, p4, e2._proxy, f3, v3) : y3) && u3.push({ x: (i.default.number(g3.x) ? g3.x : d3) + f3.x, y: (i.default.number(g3.y) ? g3.y : p4) + f3.y, range: i.default.number(g3.range) ? g3.range : o3.range, source: y3, index: v3, offset: f3 });
          }
        for (var m3 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b3 = 0; b3 < u3.length; b3++) {
          var x3 = u3[b3], w3 = x3.range, _3 = x3.x - l4.x, P3 = x3.y - l4.y, O4 = (0, C2.default)(_3, P3), S3 = O4 <= w3;
          w3 === 1 / 0 && m3.inRange && m3.range !== 1 / 0 && (S3 = false), m3.target && !(S3 ? m3.inRange && w3 !== 1 / 0 ? O4 / w3 < m3.distance / m3.range : w3 === 1 / 0 && m3.range !== 1 / 0 || O4 < m3.distance : !m3.inRange && O4 < m3.distance) || (m3.target = x3, m3.distance = O4, m3.range = w3, m3.inRange = S3, m3.delta.x = _3, m3.delta.y = P3);
        }
        return m3.inRange && (n2.x = m3.target.x, n2.y = m3.target.y), r2.closest = m3, m3;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
      to.snap = eo;
      var no = (0, Se3.makeModifier)(eo, "snap");
      to.default = no;
      var ro = {};
      function oo(t2, e2) {
        (e2 == null || e2 > t2.length) && (e2 = t2.length);
        for (var n2 = 0, r2 = Array(e2); n2 < e2; n2++)
          r2[n2] = t2[n2];
        return r2;
      }
      __name(oo, "oo");
      Object.defineProperty(ro, "__esModule", { value: true }), ro.snapSize = ro.default = void 0;
      var io = { start: function(t2) {
        var e2 = t2.state, n2 = t2.edges, r2 = e2.options;
        if (!n2)
          return null;
        t2.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r2.offset || "self", origin: { x: 0, y: 0 }, range: r2.range } }, e2.targetFields = e2.targetFields || [["width", "height"], ["x", "y"]], to.snap.start(t2), e2.offsets = t2.state.offsets, t2.state = e2;
      }, set: function(t2) {
        var e2, n2, r2 = t2.interaction, o3 = t2.state, a2 = t2.coords, s2 = o3.options, l4 = o3.offsets, u3 = { x: a2.x - l4[0].x, y: a2.y - l4[0].y };
        o3.options = (0, j2.default)({}, s2), o3.options.targets = [];
        for (var c3 = 0; c3 < (s2.targets || []).length; c3++) {
          var f3 = (s2.targets || [])[c3], d3 = void 0;
          if (d3 = i.default.func(f3) ? f3(u3.x, u3.y, r2) : f3) {
            for (var p4 = 0; p4 < o3.targetFields.length; p4++) {
              var v3 = (e2 = o3.targetFields[p4], n2 = 2, function(t3) {
                if (Array.isArray(t3))
                  return t3;
              }(e2) || function(t3, e3) {
                if (typeof Symbol != "undefined" && Symbol.iterator in Object(t3)) {
                  var n3 = [], r3 = true, o4 = false, i2 = void 0;
                  try {
                    for (var a3, s3 = t3[Symbol.iterator](); !(r3 = (a3 = s3.next()).done) && (n3.push(a3.value), !e3 || n3.length !== e3); r3 = true)
                      ;
                  } catch (t4) {
                    o4 = true, i2 = t4;
                  } finally {
                    try {
                      r3 || s3.return == null || s3.return();
                    } finally {
                      if (o4)
                        throw i2;
                    }
                  }
                  return n3;
                }
              }(e2, n2) || function(t3, e3) {
                if (t3) {
                  if (typeof t3 == "string")
                    return oo(t3, e3);
                  var n3 = Object.prototype.toString.call(t3).slice(8, -1);
                  return n3 === "Object" && t3.constructor && (n3 = t3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(t3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? oo(t3, e3) : void 0;
                }
              }(e2, n2) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }()), h3 = v3[0], g3 = v3[1];
              if (h3 in d3 || g3 in d3) {
                d3.x = d3[h3], d3.y = d3[g3];
                break;
              }
            }
            o3.options.targets.push(d3);
          }
        }
        var y3 = to.snap.set(t2);
        return o3.options = s2, y3;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
      ro.snapSize = io;
      var ao = (0, Se3.makeModifier)(io, "snapSize");
      ro.default = ao;
      var so = {};
      Object.defineProperty(so, "__esModule", { value: true }), so.snapEdges = so.default = void 0;
      var lo = { start: function(t2) {
        var e2 = t2.edges;
        return e2 ? (t2.state.targetFields = t2.state.targetFields || [[e2.left ? "left" : "right", e2.top ? "top" : "bottom"]], ro.snapSize.start(t2)) : null;
      }, set: ro.snapSize.set, defaults: (0, j2.default)((0, ge2.default)(ro.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
      so.snapEdges = lo;
      var uo = (0, Se3.makeModifier)(lo, "snapEdges");
      so.default = uo;
      var co = {};
      Object.defineProperty(co, "__esModule", { value: true }), Object.defineProperty(co, "default", { enumerable: true, get: function() {
        return kr.default;
      } });
      var fo = {};
      Object.defineProperty(fo, "__esModule", { value: true }), Object.defineProperty(fo, "default", { enumerable: true, get: function() {
        return kr.default;
      } });
      var po = {};
      Object.defineProperty(po, "__esModule", { value: true }), po.default = void 0;
      var vo = { aspectRatio: _r.default, restrictEdges: Xr.default, restrict: Rr.default, restrictRect: Vr.default, restrictSize: Gr.default, snapEdges: so.default, snap: to.default, snapSize: ro.default, spring: co.default, avoid: Ar.default, transform: fo.default, rubberband: Qr.default };
      po.default = vo;
      var ho = {};
      Object.defineProperty(ho, "__esModule", { value: true }), ho.default = void 0;
      var go = { id: "modifiers", install: function(t2) {
        var e2 = t2.interactStatic;
        for (var n2 in t2.usePlugin(Se3.default), t2.usePlugin(xr.default), e2.modifiers = po.default, po.default) {
          var r2 = po.default[n2], o3 = r2._defaults, i2 = r2._methods;
          o3._methods = i2, t2.defaults.perAction[n2] = o3;
        }
      } };
      ho.default = go;
      var yo = {};
      function mo(t2) {
        return (mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(mo, "mo");
      function bo(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
        }
      }
      __name(bo, "bo");
      function xo(t2, e2) {
        return (xo = Object.setPrototypeOf || function(t3, e3) {
          return t3.__proto__ = e3, t3;
        })(t2, e2);
      }
      __name(xo, "xo");
      function wo(t2, e2) {
        return !e2 || mo(e2) !== "object" && typeof e2 != "function" ? _o(t2) : e2;
      }
      __name(wo, "wo");
      function _o(t2) {
        if (t2 === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      __name(_o, "_o");
      function Po(t2) {
        return (Po = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        })(t2);
      }
      __name(Po, "Po");
      function Oo(t2, e2, n2) {
        return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      __name(Oo, "Oo");
      Object.defineProperty(yo, "__esModule", { value: true }), yo.PointerEvent = yo.default = void 0;
      var So = function(t2) {
        !function(t3, e3) {
          if (typeof e3 != "function" && e3 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e3 && xo(t3, e3);
        }(a2, t2);
        var e2, n2, r2, o3, i2 = (r2 = a2, o3 = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }(), function() {
          var t3, e3 = Po(r2);
          if (o3) {
            var n3 = Po(this).constructor;
            t3 = Reflect.construct(e3, arguments, n3);
          } else
            t3 = e3.apply(this, arguments);
          return wo(this, t3);
        });
        function a2(t3, e3, n3, r3, o4, s2) {
          var l4;
          if (function(t4, e4) {
            if (!(t4 instanceof e4))
              throw new TypeError("Cannot call a class as a function");
          }(this, a2), Oo(_o(l4 = i2.call(this, o4)), "type", void 0), Oo(_o(l4), "originalEvent", void 0), Oo(_o(l4), "pointerId", void 0), Oo(_o(l4), "pointerType", void 0), Oo(_o(l4), "double", void 0), Oo(_o(l4), "pageX", void 0), Oo(_o(l4), "pageY", void 0), Oo(_o(l4), "clientX", void 0), Oo(_o(l4), "clientY", void 0), Oo(_o(l4), "dt", void 0), Oo(_o(l4), "eventable", void 0), B2.pointerExtend(_o(l4), n3), n3 !== e3 && B2.pointerExtend(_o(l4), e3), l4.timeStamp = s2, l4.originalEvent = n3, l4.type = t3, l4.pointerId = B2.getPointerId(e3), l4.pointerType = B2.getPointerType(e3), l4.target = r3, l4.currentTarget = null, t3 === "tap") {
            var u3 = o4.getPointerIndex(e3);
            l4.dt = l4.timeStamp - o4.pointers[u3].downTime;
            var c3 = l4.timeStamp - o4.tapTime;
            l4.double = !!(o4.prevTap && o4.prevTap.type !== "doubletap" && o4.prevTap.target === l4.target && c3 < 500);
          } else
            t3 === "doubletap" && (l4.dt = e3.timeStamp - o4.tapTime);
          return l4;
        }
        __name(a2, "a");
        return e2 = a2, (n2 = [{ key: "_subtractOrigin", value: function(t3) {
          var e3 = t3.x, n3 = t3.y;
          return this.pageX -= e3, this.pageY -= n3, this.clientX -= e3, this.clientY -= n3, this;
        } }, { key: "_addOrigin", value: function(t3) {
          var e3 = t3.x, n3 = t3.y;
          return this.pageX += e3, this.pageY += n3, this.clientX += e3, this.clientY += n3, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]) && bo(e2.prototype, n2), a2;
      }($2.BaseEvent);
      yo.PointerEvent = yo.default = So;
      var Eo = {};
      Object.defineProperty(Eo, "__esModule", { value: true }), Eo.default = void 0;
      var To = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t2) {
        t2.pointerEvents = To, t2.defaults.actions.pointerEvents = To.defaults, (0, j2.default)(t2.actions.phaselessTypes, To.types);
      }, listeners: { "interactions:new": function(t2) {
        var e2 = t2.interaction;
        e2.prevTap = null, e2.tapTime = 0;
      }, "interactions:update-pointer": function(t2) {
        var e2 = t2.down, n2 = t2.pointerInfo;
        !e2 && n2.hold || (n2.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, o3 = t2.event, i2 = t2.eventTarget;
        t2.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && ko(t2), Mo({ interaction: n2, pointer: r2, event: o3, eventTarget: i2, type: "move" }, e2));
      }, "interactions:down": function(t2, e2) {
        !function(t3, e3) {
          for (var n2 = t3.interaction, r2 = t3.pointer, o3 = t3.event, i2 = t3.eventTarget, a2 = t3.pointerIndex, s2 = n2.pointers[a2].hold, l4 = _2.getPath(i2), u3 = { interaction: n2, pointer: r2, event: o3, eventTarget: i2, type: "hold", targets: [], path: l4, node: null }, c3 = 0; c3 < l4.length; c3++) {
            var f3 = l4[c3];
            u3.node = f3, e3.fire("pointerEvents:collect-targets", u3);
          }
          if (u3.targets.length) {
            for (var d3 = 1 / 0, p4 = 0; p4 < u3.targets.length; p4++) {
              var v3 = u3.targets[p4].eventable.options.holdDuration;
              v3 < d3 && (d3 = v3);
            }
            s2.duration = d3, s2.timeout = setTimeout(function() {
              Mo({ interaction: n2, eventTarget: i2, pointer: r2, event: o3, type: "hold" }, e3);
            }, d3);
          }
        }(t2, e2), Mo(t2, e2);
      }, "interactions:up": function(t2, e2) {
        ko(t2), Mo(t2, e2), function(t3, e3) {
          var n2 = t3.interaction, r2 = t3.pointer, o3 = t3.event, i2 = t3.eventTarget;
          n2.pointerWasMoved || Mo({ interaction: n2, eventTarget: i2, pointer: r2, event: o3, type: "tap" }, e3);
        }(t2, e2);
      }, "interactions:cancel": function(t2, e2) {
        ko(t2), Mo(t2, e2);
      } }, PointerEvent: yo.PointerEvent, fire: Mo, collectEventTargets: jo, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
      function Mo(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, o3 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = t2.targets, l4 = s2 === void 0 ? jo(t2, e2) : s2, u3 = new yo.PointerEvent(a2, r2, o3, i2, n2, e2.now());
        e2.fire("pointerEvents:new", { pointerEvent: u3 });
        for (var c3 = { interaction: n2, pointer: r2, event: o3, eventTarget: i2, targets: l4, type: a2, pointerEvent: u3 }, f3 = 0; f3 < l4.length; f3++) {
          var d3 = l4[f3];
          for (var p4 in d3.props || {})
            u3[p4] = d3.props[p4];
          var v3 = (0, A3.default)(d3.eventable, d3.node);
          if (u3._subtractOrigin(v3), u3.eventable = d3.eventable, u3.currentTarget = d3.node, d3.eventable.fire(u3), u3._addOrigin(v3), u3.immediatePropagationStopped || u3.propagationStopped && f3 + 1 < l4.length && l4[f3 + 1].node !== u3.currentTarget)
            break;
        }
        if (e2.fire("pointerEvents:fired", c3), a2 === "tap") {
          var h3 = u3.double ? Mo({ interaction: n2, pointer: r2, event: o3, eventTarget: i2, type: "doubletap" }, e2) : u3;
          n2.prevTap = h3, n2.tapTime = h3.timeStamp;
        }
        return u3;
      }
      __name(Mo, "Mo");
      function jo(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, o3 = t2.event, i2 = t2.eventTarget, a2 = t2.type, s2 = n2.getPointerIndex(r2), l4 = n2.pointers[s2];
        if (a2 === "tap" && (n2.pointerWasMoved || !l4 || l4.downTarget !== i2))
          return [];
        for (var u3 = _2.getPath(i2), c3 = { interaction: n2, pointer: r2, event: o3, eventTarget: i2, type: a2, path: u3, targets: [], node: null }, f3 = 0; f3 < u3.length; f3++) {
          var d3 = u3[f3];
          c3.node = d3, e2.fire("pointerEvents:collect-targets", c3);
        }
        return a2 === "hold" && (c3.targets = c3.targets.filter(function(t3) {
          var e3;
          return t3.eventable.options.holdDuration === ((e3 = n2.pointers[s2]) == null ? void 0 : e3.hold.duration);
        })), c3.targets;
      }
      __name(jo, "jo");
      function ko(t2) {
        var e2 = t2.interaction, n2 = t2.pointerIndex, r2 = e2.pointers[n2].hold;
        r2 && r2.timeout && (clearTimeout(r2.timeout), r2.timeout = null);
      }
      __name(ko, "ko");
      var Io = To;
      Eo.default = Io;
      var Do = {};
      function Ao(t2) {
        var e2 = t2.interaction;
        e2.holdIntervalHandle && (clearInterval(e2.holdIntervalHandle), e2.holdIntervalHandle = null);
      }
      __name(Ao, "Ao");
      Object.defineProperty(Do, "__esModule", { value: true }), Do.default = void 0;
      var Ro = { id: "pointer-events/holdRepeat", install: function(t2) {
        t2.usePlugin(Eo.default);
        var e2 = t2.pointerEvents;
        e2.defaults.holdRepeatInterval = 0, e2.types.holdrepeat = t2.actions.phaselessTypes.holdrepeat = true;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t2, e2) {
        return t2["pointerEvents:".concat(e2)] = Ao, t2;
      }, { "pointerEvents:new": function(t2) {
        var e2 = t2.pointerEvent;
        e2.type === "hold" && (e2.count = (e2.count || 0) + 1);
      }, "pointerEvents:fired": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointerEvent, o3 = t2.eventTarget, i2 = t2.targets;
        if (r2.type === "hold" && i2.length) {
          var a2 = i2[0].eventable.options.holdRepeatInterval;
          a2 <= 0 || (n2.holdIntervalHandle = setTimeout(function() {
            e2.pointerEvents.fire({ interaction: n2, eventTarget: o3, type: "hold", pointer: r2, event: r2 }, e2);
          }, a2));
        }
      } }) };
      Do.default = Ro;
      var zo = {};
      function Co(t2) {
        return (0, j2.default)(this.events.options, t2), this;
      }
      __name(Co, "Co");
      Object.defineProperty(zo, "__esModule", { value: true }), zo.default = void 0;
      var Fo = { id: "pointer-events/interactableTargets", install: function(t2) {
        var e2 = t2.Interactable;
        e2.prototype.pointerEvents = Co;
        var n2 = e2.prototype._backCompatOption;
        e2.prototype._backCompatOption = function(t3, e3) {
          var r2 = n2.call(this, t3, e3);
          return r2 === this && (this.events.options[t3] = e3), r2;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t2, e2) {
        var n2 = t2.targets, r2 = t2.node, o3 = t2.type, i2 = t2.eventTarget;
        e2.interactables.forEachMatch(r2, function(t3) {
          var e3 = t3.events, a2 = e3.options;
          e3.types[o3] && e3.types[o3].length && t3.testIgnoreAllow(a2, r2, i2) && n2.push({ node: r2, eventable: e3, props: { interactable: t3 } });
        });
      }, "interactable:new": function(t2) {
        var e2 = t2.interactable;
        e2.events.getRect = function(t3) {
          return e2.getRect(t3);
        };
      }, "interactable:set": function(t2, e2) {
        var n2 = t2.interactable, r2 = t2.options;
        (0, j2.default)(n2.events.options, e2.pointerEvents.defaults), (0, j2.default)(n2.events.options, r2.pointerEvents || {});
      } } };
      zo.default = Fo;
      var Xo = {};
      Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
      var Yo = { id: "pointer-events", install: function(t2) {
        t2.usePlugin(Eo), t2.usePlugin(Do.default), t2.usePlugin(zo.default);
      } };
      Xo.default = Yo;
      var Bo = {};
      function Wo(t2) {
        var e2 = t2.Interactable;
        t2.actions.phases.reflow = true, e2.prototype.reflow = function(e3) {
          return function(t3, e4, n2) {
            for (var r2 = i.default.string(t3.target) ? Z2.from(t3._context.querySelectorAll(t3.target)) : [t3.target], o3 = n2.window.Promise, a2 = o3 ? [] : null, s2 = function() {
              var i2 = r2[l4], s3 = t3.getRect(i2);
              if (!s3)
                return "break";
              var u3 = Z2.find(n2.interactions.list, function(n3) {
                return n3.interacting() && n3.interactable === t3 && n3.element === i2 && n3.prepared.name === e4.name;
              }), c3 = void 0;
              if (u3)
                u3.move(), a2 && (c3 = u3._reflowPromise || new o3(function(t4) {
                  u3._reflowResolve = t4;
                }));
              else {
                var f3 = (0, k2.tlbrToXywh)(s3), d3 = { page: { x: f3.x, y: f3.y }, client: { x: f3.x, y: f3.y }, timeStamp: n2.now() }, p4 = B2.coordsToEvent(d3);
                c3 = function(t4, e5, n3, r3, o4) {
                  var i3 = t4.interactions.new({ pointerType: "reflow" }), a3 = { interaction: i3, event: o4, pointer: o4, eventTarget: n3, phase: "reflow" };
                  i3.interactable = e5, i3.element = n3, i3.prevEvent = o4, i3.updatePointer(o4, o4, n3, true), B2.setZeroCoords(i3.coords.delta), (0, Yt.copyAction)(i3.prepared, r3), i3._doPhase(a3);
                  var s4 = t4.window.Promise, l5 = s4 ? new s4(function(t5) {
                    i3._reflowResolve = t5;
                  }) : void 0;
                  return i3._reflowPromise = l5, i3.start(r3, e5, n3), i3._interacting ? (i3.move(a3), i3.end(o4)) : (i3.stop(), i3._reflowResolve()), i3.removePointer(o4, o4), l5;
                }(n2, t3, i2, e4, p4);
              }
              a2 && a2.push(c3);
            }, l4 = 0; l4 < r2.length && s2() !== "break"; l4++)
              ;
            return a2 && o3.all(a2).then(function() {
              return t3;
            });
          }(this, e3, t2);
        };
      }
      __name(Wo, "Wo");
      Object.defineProperty(Bo, "__esModule", { value: true }), Bo.install = Wo, Bo.default = void 0;
      var Lo = { id: "reflow", install: Wo, listeners: { "interactions:stop": function(t2, e2) {
        var n2 = t2.interaction;
        n2.pointerType === "reflow" && (n2._reflowResolve && n2._reflowResolve(), Z2.remove(e2.interactions.list, n2));
      } } };
      Bo.default = Lo;
      var Uo = { exports: {} };
      function Vo(t2) {
        return (Vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name(Vo, "Vo");
      Object.defineProperty(Uo.exports, "__esModule", { value: true }), Uo.exports.default = void 0, cr.default.use(se.default), cr.default.use(Ge2.default), cr.default.use(Xo.default), cr.default.use(en.default), cr.default.use(ho.default), cr.default.use(ie.default), cr.default.use(Tt2.default), cr.default.use(Rt.default), cr.default.use(Bo.default);
      var No = cr.default;
      if (Uo.exports.default = No, Vo(Uo) === "object" && Uo)
        try {
          Uo.exports = cr.default;
        } catch (t2) {
        }
      cr.default.default = cr.default, Uo = Uo.exports;
      var qo = { exports: {} };
      function $o(t2) {
        return ($o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      __name($o, "$o");
      Object.defineProperty(qo.exports, "__esModule", { value: true }), qo.exports.default = void 0;
      var Go = Uo.default;
      if (qo.exports.default = Go, $o(qo) === "object" && qo)
        try {
          qo.exports = Uo.default;
        } catch (t2) {
        }
      return Uo.default.default = Uo.default, qo.exports;
    });
  }
});

// ../../packages/common/dist/index.js
var import_fraction = __toESM(require_fraction());
function V(t) {
  let e = l(t);
  return new import_fraction.default(e).valueOf() * Math.PI;
}
__name(V, "V");
function X(t) {
  let r = l(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(X, "X");
function W(t, e) {
  return new import_fraction.default(l(t)).valueOf() < new import_fraction.default(l(e)).valueOf();
}
__name(W, "W");
function H(t, e) {
  return new import_fraction.default(l(t)).valueOf() > new import_fraction.default(l(e)).valueOf();
}
__name(H, "H");
function Q(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let e = l(t);
    return new import_fraction.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(Q, "Q");
function l(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(l, "l");
function J(t) {
  try {
    let e = l(t), n = new import_fraction.default(e).toFraction().split("/"), i;
    return n[0] === "0" ? i = "0" : n[0] === "1" ? i = "\u03C0" : n[0] === "-1" ? i = "-\u03C0" : i = `${n[0]}\u03C0`, n.length === 1 ? i : `${i}/${n[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(J, "J");
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
    let s = t[a], x2 = c(a, e - 1), C2 = c(s, e - 1);
    r.push(`${x2}: ${C2}`);
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
    return i.map((x2) => a.minus(x2).dividedBy(s));
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
var le = "H";
var fe = "X";
var de = "Y";
var ye = "Z";
var be = "P";
var xe = "T";
var Se = "X^\xBD";
var ke = "Rx";
var Ce = "Ry";
var Ie = "Rz";
var Me = "Swap";
var Fe = "\u2022";
var Re = "Bloch";
var qe = "|0>";
var De = "|1>";
var ve = "Measure";

// ../../node_modules/@github/catalyst/lib/bind.js
var controllers = /* @__PURE__ */ new WeakSet();
function bind(controller2) {
  controllers.add(controller2);
  if (controller2.shadowRoot)
    bindShadow(controller2.shadowRoot);
  bindElements(controller2);
  listenForBind(controller2.ownerDocument);
}
__name(bind, "bind");
function bindShadow(root) {
  bindElements(root);
  listenForBind(root);
}
__name(bindShadow, "bindShadow");
var observers = /* @__PURE__ */ new WeakMap();
function listenForBind(el = document) {
  if (observers.has(el))
    return observers.get(el);
  let closed = false;
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "attributes" && mutation.target instanceof Element) {
        bindActions(mutation.target);
      } else if (mutation.type === "childList" && mutation.addedNodes.length) {
        for (const node of mutation.addedNodes) {
          if (node instanceof Element) {
            bindElements(node);
          }
        }
      }
    }
  });
  observer.observe(el, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  const subscription = {
    get closed() {
      return closed;
    },
    unsubscribe() {
      closed = true;
      observers.delete(el);
      observer.disconnect();
    }
  };
  observers.set(el, subscription);
  return subscription;
}
__name(listenForBind, "listenForBind");
function bindElements(root) {
  for (const el of root.querySelectorAll("[data-action]")) {
    bindActions(el);
  }
  if (root instanceof Element && root.hasAttribute("data-action")) {
    bindActions(root);
  }
}
__name(bindElements, "bindElements");
function handleEvent(event2) {
  const el = event2.currentTarget;
  for (const binding of bindings(el)) {
    if (event2.type === binding.type) {
      const controller2 = el.closest(binding.tag);
      if (controllers.has(controller2) && typeof controller2[binding.method] === "function") {
        controller2[binding.method](event2);
      }
      const root = el.getRootNode();
      if (root instanceof ShadowRoot && controllers.has(root.host) && root.host.matches(binding.tag)) {
        const shadowController = root.host;
        if (typeof shadowController[binding.method] === "function") {
          shadowController[binding.method](event2);
        }
      }
    }
  }
}
__name(handleEvent, "handleEvent");
function* bindings(el) {
  for (const action of (el.getAttribute("data-action") || "").trim().split(/\s+/)) {
    const eventSep = action.lastIndexOf(":");
    const methodSep = Math.max(0, action.lastIndexOf("#")) || action.length;
    yield {
      type: action.slice(0, eventSep),
      tag: action.slice(eventSep + 1, methodSep),
      method: action.slice(methodSep + 1) || "handleEvent"
    };
  }
}
__name(bindings, "bindings");
function bindActions(el) {
  for (const binding of bindings(el)) {
    el.addEventListener(binding.type, handleEvent);
  }
}
__name(bindActions, "bindActions");

// ../../node_modules/@github/catalyst/lib/register.js
function register(classObject) {
  const name = classObject.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  if (!window.customElements.get(name)) {
    window[classObject.name] = classObject;
    window.customElements.define(name, classObject);
  }
}
__name(register, "register");

// ../../node_modules/@github/catalyst/lib/findtarget.js
function findTarget(controller2, name) {
  const tag = controller2.tagName.toLowerCase();
  if (controller2.shadowRoot) {
    for (const el of controller2.shadowRoot.querySelectorAll(`[data-target~="${tag}.${name}"]`)) {
      if (!el.closest(tag))
        return el;
    }
  }
  for (const el of controller2.querySelectorAll(`[data-target~="${tag}.${name}"]`)) {
    if (el.closest(tag) === controller2)
      return el;
  }
}
__name(findTarget, "findTarget");
function findTargets(controller2, name) {
  const tag = controller2.tagName.toLowerCase();
  const targets2 = [];
  if (controller2.shadowRoot) {
    for (const el of controller2.shadowRoot.querySelectorAll(`[data-targets~="${tag}.${name}"]`)) {
      if (!el.closest(tag))
        targets2.push(el);
    }
  }
  for (const el of controller2.querySelectorAll(`[data-targets~="${tag}.${name}"]`)) {
    if (el.closest(tag) === controller2)
      targets2.push(el);
  }
  return targets2;
}
__name(findTargets, "findTargets");

// ../../node_modules/@github/catalyst/lib/target.js
function target(proto, key) {
  return Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return findTarget(this, key);
    }
  });
}
__name(target, "target");
function targets(proto, key) {
  return Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return findTargets(this, key);
    }
  });
}
__name(targets, "targets");

// ../../node_modules/@github/catalyst/lib/auto-shadow-root.js
function autoShadowRoot(element) {
  for (const template of element.querySelectorAll("template[data-shadowroot]")) {
    if (template.parentElement === element) {
      element.attachShadow({
        mode: template.getAttribute("data-shadowroot") === "closed" ? "closed" : "open"
      }).append(template.content.cloneNode(true));
    }
  }
}
__name(autoShadowRoot, "autoShadowRoot");

// ../../node_modules/@github/catalyst/lib/attr.js
var attrs = /* @__PURE__ */ new WeakMap();
function attr(proto, key) {
  if (!attrs.has(proto))
    attrs.set(proto, []);
  attrs.get(proto).push(key);
}
__name(attr, "attr");
var initialized = /* @__PURE__ */ new WeakSet();
function initializeAttrs(instance, names) {
  if (initialized.has(instance))
    return;
  initialized.add(instance);
  if (!names)
    names = getAttrNames(Object.getPrototypeOf(instance));
  for (const key of names) {
    const value = instance[key];
    const name = attrToAttributeName(key);
    let descriptor = {
      configurable: true,
      get() {
        return this.getAttribute(name) || "";
      },
      set(newValue) {
        this.setAttribute(name, newValue || "");
      }
    };
    if (typeof value === "number") {
      descriptor = {
        configurable: true,
        get() {
          return Number(this.getAttribute(name) || 0);
        },
        set(newValue) {
          this.setAttribute(name, newValue);
        }
      };
    } else if (typeof value === "boolean") {
      descriptor = {
        configurable: true,
        get() {
          return this.hasAttribute(name);
        },
        set(newValue) {
          this.toggleAttribute(name, newValue);
        }
      };
    }
    Object.defineProperty(instance, key, descriptor);
    if (key in instance && !instance.hasAttribute(name)) {
      descriptor.set.call(instance, value);
    }
  }
}
__name(initializeAttrs, "initializeAttrs");
function getAttrNames(classObjectProto) {
  const names = /* @__PURE__ */ new Set();
  let proto = classObjectProto;
  while (proto && proto !== HTMLElement) {
    const attrNames = attrs.get(proto) || [];
    for (const name of attrNames)
      names.add(name);
    proto = Object.getPrototypeOf(proto);
  }
  return names;
}
__name(getAttrNames, "getAttrNames");
function attrToAttributeName(name) {
  return `data-${name.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(attrToAttributeName, "attrToAttributeName");
function defineObservedAttributes(classObject) {
  let observed = classObject.observedAttributes || [];
  Object.defineProperty(classObject, "observedAttributes", {
    configurable: true,
    get() {
      const attrMap = getAttrNames(classObject.prototype);
      return [...attrMap].map(attrToAttributeName).concat(observed);
    },
    set(attributes) {
      observed = attributes;
    }
  });
}
__name(defineObservedAttributes, "defineObservedAttributes");

// ../../node_modules/@github/catalyst/lib/core.js
var instances = /* @__PURE__ */ new WeakSet();
function initializeInstance(instance, connect) {
  instance.toggleAttribute("data-catalyst", true);
  customElements.upgrade(instance);
  instances.add(instance);
  autoShadowRoot(instance);
  initializeAttrs(instance);
  bind(instance);
  if (connect)
    connect.call(instance);
  if (instance.shadowRoot)
    bindShadow(instance.shadowRoot);
}
__name(initializeInstance, "initializeInstance");
function initializeAttributeChanged(instance, name, oldValue, newValue, attributeChangedCallback) {
  initializeAttrs(instance);
  if (name !== "data-catalyst" && attributeChangedCallback) {
    attributeChangedCallback.call(instance, name, oldValue, newValue);
  }
}
__name(initializeAttributeChanged, "initializeAttributeChanged");
function initializeClass(classObject) {
  defineObservedAttributes(classObject);
  register(classObject);
}
__name(initializeClass, "initializeClass");

// ../../node_modules/@github/catalyst/lib/controller.js
function controller(classObject) {
  const connect = classObject.prototype.connectedCallback;
  classObject.prototype.connectedCallback = function() {
    initializeInstance(this, connect);
  };
  const attributeChanged = classObject.prototype.attributeChangedCallback;
  classObject.prototype.attributeChangedCallback = function(name, oldValue, newValue) {
    initializeAttributeChanged(this, name, oldValue, newValue, attributeChanged);
  };
  initializeClass(classObject);
}
__name(controller, "controller");

// ../../node_modules/xstate/es/_virtual/_tslib.js
var __assign = /* @__PURE__ */ __name(function() {
  __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p3 in s)
        if (Object.prototype.hasOwnProperty.call(s, p3))
          t[p3] = s[p3];
    }
    return t;
  }, "__assign");
  return __assign.apply(this, arguments);
}, "__assign");
function __rest(s, e) {
  var t = {};
  for (var p3 in s)
    if (Object.prototype.hasOwnProperty.call(s, p3) && e.indexOf(p3) < 0)
      t[p3] = s[p3];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p3 = Object.getOwnPropertySymbols(s); i < p3.length; i++) {
      if (e.indexOf(p3[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p3[i]))
        t[p3[i]] = s[p3[i]];
    }
  return t;
}
__name(__rest, "__rest");
function __values(o2) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o2[s], i = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i++], done: !o2 };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(__values, "__values");
function __read(o2, n) {
  var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
  if (!m2)
    return o2;
  var i = m2.call(o2), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error3) {
    e = { error: error3 };
  } finally {
    try {
      if (r && !r.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
__name(__read, "__read");
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l3 = from.length, ar; i < l3; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
__name(__spreadArray, "__spreadArray");

// ../../node_modules/xstate/es/constants.js
var STATE_DELIMITER = ".";
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = "xstate.guard";
var TARGETLESS_KEY = "";

// ../../node_modules/xstate/es/environment.js
var IS_PRODUCTION = false;

// ../../node_modules/xstate/es/utils.js
var _a;
function keys(value) {
  return Object.keys(value);
}
__name(keys, "keys");
function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = STATE_DELIMITER;
  }
  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);
  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    }
    return false;
  }
  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }
  return keys(parentStateValue).every(function(key) {
    if (!(key in childStateValue)) {
      return false;
    }
    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}
__name(matchesState, "matchesState");
function getEventType(event2) {
  try {
    return isString(event2) || typeof event2 === "number" ? "".concat(event2) : event2.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(getEventType, "getEventType");
function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }
    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'".concat(stateId, "' is not a valid state path."));
  }
}
__name(toStatePath, "toStatePath");
function isStateLike(state) {
  return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
}
__name(isStateLike, "isStateLike");
function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }
  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }
  if (typeof stateValue !== "string") {
    return stateValue;
  }
  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}
__name(toStateValue, "toStateValue");
function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }
  var value = {};
  var marker = value;
  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }
  return value;
}
__name(pathToStateValue, "pathToStateValue");
function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = keys(collection);
  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }
  return result;
}
__name(mapValues, "mapValues");
function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a2;
  var result = {};
  try {
    for (var _b = __values(keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];
      if (!predicate(item)) {
        continue;
      }
      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a2 = _b.return))
        _a2.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return result;
}
__name(mapFilterValues, "mapFilterValues");
var path = /* @__PURE__ */ __name(function(props) {
  return function(object) {
    var e_2, _a2;
    var result = object;
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
          _a2.call(props_1);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return result;
  };
}, "path");
function nestedPath(props, accessorProp) {
  return function(object) {
    var e_3, _a2;
    var result = object;
    try {
      for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a2 = props_2.return))
          _a2.call(props_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    return result;
  };
}
__name(nestedPath, "nestedPath");
function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }
  if (isString(stateValue)) {
    return [[stateValue]];
  }
  var result = flatten(keys(stateValue).map(function(key) {
    var subStateValue = stateValue[key];
    if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }
    return toStatePaths(stateValue[key]).map(function(subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}
__name(toStatePaths, "toStatePaths");
function flatten(array) {
  var _a2;
  return (_a2 = []).concat.apply(_a2, __spreadArray([], __read(array), false));
}
__name(flatten, "flatten");
function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }
  return [value];
}
__name(toArrayStrict, "toArrayStrict");
function toArray(value) {
  if (value === void 0) {
    return [];
  }
  return toArrayStrict(value);
}
__name(toArray, "toArray");
function mapContext(mapper, context, _event) {
  var e_5, _a2;
  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }
  var result = {};
  try {
    for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];
      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a2 = _b.return))
        _a2.call(_b);
    } finally {
      if (e_5)
        throw e_5.error;
    }
  }
  return result;
}
__name(mapContext, "mapContext");
function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}
__name(isBuiltInEvent, "isBuiltInEvent");
function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  }
  if (value !== null && (isFunction(value) || typeof value === "object") && isFunction(value.then)) {
    return true;
  }
  return false;
}
__name(isPromiseLike, "isPromiseLike");
function isBehavior(value) {
  return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
}
__name(isBehavior, "isBehavior");
function partition(items, predicate) {
  var e_6, _a2;
  var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;
      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a2 = items_1.return))
        _a2.call(items_1);
    } finally {
      if (e_6)
        throw e_6.error;
    }
  }
  return [truthy, falsy];
}
__name(partition, "partition");
function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function(subHist, key) {
    if (!subHist) {
      return void 0;
    }
    var subStateValue = (isString(stateValue) ? void 0 : stateValue[key]) || (subHist ? subHist.current : void 0);
    if (!subStateValue) {
      return void 0;
    }
    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}
__name(updateHistoryStates, "updateHistoryStates");
function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}
__name(updateHistoryValue, "updateHistoryValue");
function updateContext(context, _event, assignActions, state) {
  if (!IS_PRODUCTION) {
    warn(!!context, "Attempting to update undefined context");
  }
  var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
    var e_7, _a2;
    var assignment = assignAction.assignment;
    var meta = {
      state,
      action: assignAction,
      _event
    };
    var partialUpdate = {};
    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = __values(keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_7)
            throw e_7.error;
        }
      }
    }
    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
}
__name(updateContext, "updateContext");
var warn = /* @__PURE__ */ __name(function() {
}, "warn");
if (!IS_PRODUCTION) {
  warn = /* @__PURE__ */ __name(function(condition, message) {
    var error3 = condition instanceof Error ? condition : void 0;
    if (!error3 && condition) {
      return;
    }
    if (console !== void 0) {
      var args = ["Warning: ".concat(message)];
      if (error3) {
        args.push(error3);
      }
      console.warn.apply(console, args);
    }
  }, "warn");
}
function isArray(value) {
  return Array.isArray(value);
}
__name(isArray, "isArray");
function isFunction(value) {
  return typeof value === "function";
}
__name(isFunction, "isFunction");
function isString(value) {
  return typeof value === "string";
}
__name(isString, "isString");
function toGuard(condition, guardMap) {
  if (!condition) {
    return void 0;
  }
  if (isString(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition,
      predicate: guardMap ? guardMap[condition] : void 0
    };
  }
  if (isFunction(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition.name,
      predicate: condition
    };
  }
  return condition;
}
__name(toGuard, "toGuard");
function isObservable(value) {
  try {
    return "subscribe" in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}
__name(isObservable, "isObservable");
var symbolObservable = /* @__PURE__ */ function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var interopSymbols = (_a = {}, _a[symbolObservable] = function() {
  return this;
}, _a);
function isMachine(value) {
  try {
    return "__xstatenode" in value;
  } catch (e) {
    return false;
  }
}
__name(isMachine, "isMachine");
function isActor(value) {
  return !!value && typeof value.send === "function";
}
__name(isActor, "isActor");
function toEventObject(event2, payload) {
  if (isString(event2) || typeof event2 === "number") {
    return __assign({
      type: event2
    }, payload);
  }
  return event2;
}
__name(toEventObject, "toEventObject");
function toSCXMLEvent(event2, scxmlEvent) {
  if (!isString(event2) && "$$type" in event2 && event2.$$type === "scxml") {
    return event2;
  }
  var eventObject = toEventObject(event2);
  return __assign({
    name: eventObject.type,
    data: eventObject,
    $$type: "scxml",
    type: "external"
  }, scxmlEvent);
}
__name(toSCXMLEvent, "toSCXMLEvent");
function toTransitionConfigArray(event2, configLike) {
  var transitions = toArrayStrict(configLike).map(function(transitionLike) {
    if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event: event2
      };
    }
    return __assign(__assign({}, transitionLike), {
      event: event2
    });
  });
  return transitions;
}
__name(toTransitionConfigArray, "toTransitionConfigArray");
function normalizeTarget(target2) {
  if (target2 === void 0 || target2 === TARGETLESS_KEY) {
    return void 0;
  }
  return toArray(target2);
}
__name(normalizeTarget, "normalizeTarget");
function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!IS_PRODUCTION) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : "";
    if (originalError === currentError) {
      console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
    }
  }
}
__name(reportUnhandledExceptionOnInvocation, "reportUnhandledExceptionOnInvocation");
function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state,
    cond: guard,
    _event
  };
  if (guard.type === DEFAULT_GUARD_TYPE) {
    return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
  }
  var condFn = guards[guard.type];
  if (!condFn) {
    throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
  }
  return condFn(context, _event.data, guardMeta);
}
__name(evaluateGuard, "evaluateGuard");
function toInvokeSource(src) {
  if (typeof src === "string") {
    return {
      type: src
    };
  }
  return src;
}
__name(toInvokeSource, "toInvokeSource");
function toObserver(nextHandler, errorHandler, completionHandler) {
  if (typeof nextHandler === "object") {
    return nextHandler;
  }
  var noop = /* @__PURE__ */ __name(function() {
    return void 0;
  }, "noop");
  return {
    next: nextHandler,
    error: errorHandler || noop,
    complete: completionHandler || noop
  };
}
__name(toObserver, "toObserver");
function createInvokeId(stateNodeId, index) {
  return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}
__name(createInvokeId, "createInvokeId");

// ../../node_modules/xstate/es/types.js
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2["Start"] = "xstate.start";
  ActionTypes2["Stop"] = "xstate.stop";
  ActionTypes2["Raise"] = "xstate.raise";
  ActionTypes2["Send"] = "xstate.send";
  ActionTypes2["Cancel"] = "xstate.cancel";
  ActionTypes2["NullEvent"] = "";
  ActionTypes2["Assign"] = "xstate.assign";
  ActionTypes2["After"] = "xstate.after";
  ActionTypes2["DoneState"] = "done.state";
  ActionTypes2["DoneInvoke"] = "done.invoke";
  ActionTypes2["Log"] = "xstate.log";
  ActionTypes2["Init"] = "xstate.init";
  ActionTypes2["Invoke"] = "xstate.invoke";
  ActionTypes2["ErrorExecution"] = "error.execution";
  ActionTypes2["ErrorCommunication"] = "error.communication";
  ActionTypes2["ErrorPlatform"] = "error.platform";
  ActionTypes2["ErrorCustom"] = "xstate.error";
  ActionTypes2["Update"] = "xstate.update";
  ActionTypes2["Pure"] = "xstate.pure";
  ActionTypes2["Choose"] = "xstate.choose";
})(ActionTypes || (ActionTypes = {}));
var SpecialTargets;
(function(SpecialTargets2) {
  SpecialTargets2["Parent"] = "#_parent";
  SpecialTargets2["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));

// ../../node_modules/xstate/es/actionTypes.js
var start = ActionTypes.Start;
var stop = ActionTypes.Stop;
var raise = ActionTypes.Raise;
var send = ActionTypes.Send;
var cancel = ActionTypes.Cancel;
var nullEvent = ActionTypes.NullEvent;
var assign = ActionTypes.Assign;
var after = ActionTypes.After;
var doneState = ActionTypes.DoneState;
var log = ActionTypes.Log;
var init = ActionTypes.Init;
var invoke = ActionTypes.Invoke;
var errorExecution = ActionTypes.ErrorExecution;
var errorPlatform = ActionTypes.ErrorPlatform;
var error = ActionTypes.ErrorCustom;
var update = ActionTypes.Update;
var choose = ActionTypes.Choose;
var pure = ActionTypes.Pure;

// ../../node_modules/xstate/es/actions.js
var initEvent = /* @__PURE__ */ toSCXMLEvent({
  type: init
});
function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || void 0 : void 0;
}
__name(getActionFunction, "getActionFunction");
function toActionObject(action, actionFunctionMap) {
  var actionObject;
  if (isString(action) || typeof action === "number") {
    var exec = getActionFunction(action, actionFunctionMap);
    if (isFunction(exec)) {
      actionObject = {
        type: action,
        exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: void 0
      };
    }
  } else if (isFunction(action)) {
    actionObject = {
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);
    if (isFunction(exec)) {
      actionObject = __assign(__assign({}, action), {
        exec
      });
    } else if (exec) {
      var actionType = exec.type || action.type;
      actionObject = __assign(__assign(__assign({}, exec), action), {
        type: actionType
      });
    } else {
      actionObject = action;
    }
  }
  return actionObject;
}
__name(toActionObject, "toActionObject");
var toActionObjects = /* @__PURE__ */ __name(function(action, actionFunctionMap) {
  if (!action) {
    return [];
  }
  var actions = isArray(action) ? action : [action];
  return actions.map(function(subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
}, "toActionObjects");
function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return __assign(__assign({
    id: isString(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
__name(toActivityDefinition, "toActivityDefinition");
function raise2(event2) {
  if (!isString(event2)) {
    return send2(event2, {
      to: SpecialTargets.Internal
    });
  }
  return {
    type: raise,
    event: event2
  };
}
__name(raise2, "raise");
function resolveRaise(action) {
  return {
    type: raise,
    _event: toSCXMLEvent(action.event)
  };
}
__name(resolveRaise, "resolveRaise");
function send2(event2, options) {
  return {
    to: options ? options.to : void 0,
    type: send,
    event: isFunction(event2) ? event2 : toEventObject(event2),
    delay: options ? options.delay : void 0,
    id: options && options.id !== void 0 ? options.id : isFunction(event2) ? event2.name : getEventType(event2)
  };
}
__name(send2, "send");
function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event
  };
  var resolvedEvent = toSCXMLEvent(isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;
  if (isString(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }
  var resolvedTarget = isFunction(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return __assign(__assign({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
__name(resolveSend, "resolveSend");
var resolveLog = /* @__PURE__ */ __name(function(action, ctx, _event) {
  return __assign(__assign({}, action), {
    value: isString(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event
    })
  });
}, "resolveLog");
var cancel2 = /* @__PURE__ */ __name(function(sendId) {
  return {
    type: cancel,
    sendId
  };
}, "cancel");
function start2(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: ActionTypes.Start,
    activity: activityDef,
    exec: void 0
  };
}
__name(start2, "start");
function stop2(actorRef) {
  var activity = isFunction(actorRef) ? actorRef : toActivityDefinition(actorRef);
  return {
    type: ActionTypes.Stop,
    activity,
    exec: void 0
  };
}
__name(stop2, "stop");
function resolveStop(action, context, _event) {
  var actorRefOrString = isFunction(action.activity) ? action.activity(context, _event.data) : action.activity;
  var resolvedActorRef = typeof actorRefOrString === "string" ? {
    id: actorRefOrString
  } : actorRefOrString;
  var actionObject = {
    type: ActionTypes.Stop,
    activity: resolvedActorRef
  };
  return actionObject;
}
__name(resolveStop, "resolveStop");
function after2(delayRef, id) {
  var idSuffix = id ? "#".concat(id) : "";
  return "".concat(ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
}
__name(after2, "after");
function done(id, data) {
  var type = "".concat(ActionTypes.DoneState, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
__name(done, "done");
function doneInvoke(id, data) {
  var type = "".concat(ActionTypes.DoneInvoke, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
__name(doneInvoke, "doneInvoke");
function error2(id, data) {
  var type = "".concat(ActionTypes.ErrorPlatform, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
__name(error2, "error");
function resolveActions(machine, currentState, currentContext, _event, actions, preserveActionOrder) {
  if (preserveActionOrder === void 0) {
    preserveActionOrder = false;
  }
  var _a2 = __read(preserveActionOrder ? [[], actions] : partition(actions, function(action) {
    return action.type === assign;
  }), 2), assignActions = _a2[0], otherActions = _a2[1];
  var updatedContext = assignActions.length ? updateContext(currentContext, _event, assignActions, currentState) : currentContext;
  var preservedContexts = preserveActionOrder ? [currentContext] : void 0;
  var resolvedActions = flatten(otherActions.map(function(actionObject) {
    var _a3;
    switch (actionObject.type) {
      case raise:
        return resolveRaise(actionObject);
      case send:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays);
        if (!IS_PRODUCTION) {
          warn(!isString(actionObject.delay) || typeof sendAction.delay === "number", "No delay reference for delay expression '".concat(actionObject.delay, "' was found on machine '").concat(machine.id, "'"));
        }
        return sendAction;
      case log:
        return resolveLog(actionObject, updatedContext, _event);
      case choose: {
        var chooseAction = actionObject;
        var matchedActions = (_a3 = chooseAction.conds.find(function(condition) {
          var guard = toGuard(condition.cond, machine.options.guards);
          return !guard || evaluateGuard(machine, guard, updatedContext, _event, currentState);
        })) === null || _a3 === void 0 ? void 0 : _a3.actions;
        if (!matchedActions) {
          return [];
        }
        var _b = __read(resolveActions(machine, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine.options.actions), preserveActionOrder), 2), resolvedActionsFromChoose = _b[0], resolvedContextFromChoose = _b[1];
        updatedContext = resolvedContextFromChoose;
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        return resolvedActionsFromChoose;
      }
      case pure: {
        var matchedActions = actionObject.get(updatedContext, _event.data);
        if (!matchedActions) {
          return [];
        }
        var _c = __read(resolveActions(machine, currentState, updatedContext, _event, toActionObjects(toArray(matchedActions), machine.options.actions), preserveActionOrder), 2), resolvedActionsFromPure = _c[0], resolvedContext = _c[1];
        updatedContext = resolvedContext;
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        return resolvedActionsFromPure;
      }
      case stop: {
        return resolveStop(actionObject, updatedContext, _event);
      }
      case assign: {
        updatedContext = updateContext(updatedContext, _event, [actionObject], currentState);
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        break;
      }
      default:
        var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
        var exec_1 = resolvedActionObject.exec;
        if (exec_1 && preservedContexts) {
          var contextIndex_1 = preservedContexts.length - 1;
          resolvedActionObject = __assign(__assign({}, resolvedActionObject), {
            exec: function(_ctx) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }
              exec_1.apply(void 0, __spreadArray([preservedContexts[contextIndex_1]], __read(args), false));
            }
          });
        }
        return resolvedActionObject;
    }
  }).filter(function(a) {
    return !!a;
  }));
  return [resolvedActions, updatedContext];
}
__name(resolveActions, "resolveActions");

// ../../node_modules/xstate/es/stateUtils.js
var isLeafNode = /* @__PURE__ */ __name(function(stateNode) {
  return stateNode.type === "atomic" || stateNode.type === "final";
}, "isLeafNode");
function getChildren(stateNode) {
  return keys(stateNode.states).map(function(key) {
    return stateNode.states[key];
  });
}
__name(getChildren, "getChildren");
function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];
  if (isLeafNode(stateNode)) {
    return stateNodes;
  }
  return stateNodes.concat(flatten(getChildren(stateNode).map(getAllStateNodes)));
}
__name(getAllStateNodes, "getAllStateNodes");
function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a2, e_2, _b, e_3, _c, e_4, _d;
  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);
  try {
    for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m2 = s.parent;
      while (m2 && !configuration.has(m2)) {
        configuration.add(m2);
        m2 = m2.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a2 = configuration_1.return))
        _a2.call(configuration_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  var adjList = getAdjList(configuration);
  try {
    for (var configuration_2 = __values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value;
      if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function(sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function(sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === "parallel") {
          try {
            for (var _e2 = (e_3 = void 0, __values(getChildren(s))), _f = _e2.next(); !_f.done; _f = _e2.next()) {
              var child = _f.value;
              if (child.type === "history") {
                continue;
              }
              if (!configuration.has(child)) {
                configuration.add(child);
                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function(sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function(sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e2.return))
                _c.call(_e2);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return))
        _b.call(configuration_2);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  try {
    for (var configuration_3 = __values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m2 = s.parent;
      while (m2 && !configuration.has(m2)) {
        configuration.add(m2);
        m2 = m2.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return))
        _d.call(configuration_3);
    } finally {
      if (e_4)
        throw e_4.error;
    }
  }
  return configuration;
}
__name(getConfiguration, "getConfiguration");
function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);
  if (!childStateNodes) {
    return {};
  }
  if (baseNode.type === "compound") {
    var childStateNode = childStateNodes[0];
    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }
  var stateValue = {};
  childStateNodes.forEach(function(csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}
__name(getValueFromAdj, "getValueFromAdj");
function getAdjList(configuration) {
  var e_5, _a2;
  var adjList = /* @__PURE__ */ new Map();
  try {
    for (var configuration_4 = __values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;
      if (!adjList.has(s)) {
        adjList.set(s, []);
      }
      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }
        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a2 = configuration_4.return))
        _a2.call(configuration_4);
    } finally {
      if (e_5)
        throw e_5.error;
    }
  }
  return adjList;
}
__name(getAdjList, "getAdjList");
function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}
__name(getValue, "getValue");
function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function(member) {
      return member === item;
    });
  }
  if (iterable instanceof Set) {
    return iterable.has(item);
  }
  return false;
}
__name(has, "has");
function nextEvents(configuration) {
  return __spreadArray([], __read(new Set(flatten(__spreadArray([], __read(configuration.map(function(sn) {
    return sn.ownEvents;
  })), false)))), false);
}
__name(nextEvents, "nextEvents");
function isInFinalState(configuration, stateNode) {
  if (stateNode.type === "compound") {
    return getChildren(stateNode).some(function(s) {
      return s.type === "final" && has(configuration, s);
    });
  }
  if (stateNode.type === "parallel") {
    return getChildren(stateNode).every(function(sn) {
      return isInFinalState(configuration, sn);
    });
  }
  return false;
}
__name(isInFinalState, "isInFinalState");
function getMeta(configuration) {
  if (configuration === void 0) {
    configuration = [];
  }
  return configuration.reduce(function(acc, stateNode) {
    if (stateNode.meta !== void 0) {
      acc[stateNode.id] = stateNode.meta;
    }
    return acc;
  }, {});
}
__name(getMeta, "getMeta");
function getTagsFromConfiguration(configuration) {
  return new Set(flatten(configuration.map(function(sn) {
    return sn.tags;
  })));
}
__name(getTagsFromConfiguration, "getTagsFromConfiguration");

// ../../node_modules/xstate/es/State.js
function stateValuesEqual(a, b2) {
  if (a === b2) {
    return true;
  }
  if (a === void 0 || b2 === void 0) {
    return false;
  }
  if (isString(a) || isString(b2)) {
    return a === b2;
  }
  var aKeys = keys(a);
  var bKeys = keys(b2);
  return aKeys.length === bKeys.length && aKeys.every(function(key) {
    return stateValuesEqual(a[key], b2[key]);
  });
}
__name(stateValuesEqual, "stateValuesEqual");
function isState(state) {
  if (isString(state)) {
    return false;
  }
  return "value" in state && "history" in state;
}
__name(isState, "isState");
function bindActionToState(action, state) {
  var exec = action.exec;
  var boundAction = __assign(__assign({}, action), {
    exec: exec !== void 0 ? function() {
      return exec(state.context, state.event, {
        action,
        state,
        _event: state._event
      });
    } : void 0
  });
  return boundAction;
}
__name(bindActionToState, "bindActionToState");
var State = /* @__PURE__ */ function() {
  function State2(config) {
    var _this = this;
    var _a2;
    this.actions = [];
    this.activities = EMPTY_ACTIVITY_MAP;
    this.meta = {};
    this.events = [];
    this.value = config.value;
    this.context = config.context;
    this._event = config._event;
    this._sessionid = config._sessionid;
    this.event = this._event.data;
    this.historyValue = config.historyValue;
    this.history = config.history;
    this.actions = config.actions || [];
    this.activities = config.activities || EMPTY_ACTIVITY_MAP;
    this.meta = getMeta(config.configuration);
    this.events = config.events || [];
    this.matches = this.matches.bind(this);
    this.toStrings = this.toStrings.bind(this);
    this.configuration = config.configuration;
    this.transitions = config.transitions;
    this.children = config.children;
    this.done = !!config.done;
    this.tags = (_a2 = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ new Set();
    this.machine = config.machine;
    Object.defineProperty(this, "nextEvents", {
      get: function() {
        return nextEvents(_this.configuration);
      }
    });
  }
  __name(State2, "State");
  State2.from = function(stateValue, context) {
    if (stateValue instanceof State2) {
      if (stateValue.context !== context) {
        return new State2({
          value: stateValue.value,
          context,
          _event: stateValue._event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          actions: [],
          activities: stateValue.activities,
          meta: {},
          events: [],
          configuration: [],
          transitions: [],
          children: {}
        });
      }
      return stateValue;
    }
    var _event = initEvent;
    return new State2({
      value: stateValue,
      context,
      _event,
      _sessionid: null,
      historyValue: void 0,
      history: void 0,
      actions: [],
      activities: void 0,
      meta: void 0,
      events: [],
      configuration: [],
      transitions: [],
      children: {}
    });
  };
  State2.create = function(config) {
    return new State2(config);
  };
  State2.inert = function(stateValue, context) {
    if (stateValue instanceof State2) {
      if (!stateValue.actions.length) {
        return stateValue;
      }
      var _event = initEvent;
      return new State2({
        value: stateValue.value,
        context,
        _event,
        _sessionid: null,
        historyValue: stateValue.historyValue,
        history: stateValue.history,
        activities: stateValue.activities,
        configuration: stateValue.configuration,
        transitions: [],
        children: {}
      });
    }
    return State2.from(stateValue, context);
  };
  State2.prototype.toStrings = function(stateValue, delimiter) {
    var _this = this;
    if (stateValue === void 0) {
      stateValue = this.value;
    }
    if (delimiter === void 0) {
      delimiter = ".";
    }
    if (isString(stateValue)) {
      return [stateValue];
    }
    var valueKeys = keys(stateValue);
    return valueKeys.concat.apply(valueKeys, __spreadArray([], __read(valueKeys.map(function(key) {
      return _this.toStrings(stateValue[key], delimiter).map(function(s) {
        return key + delimiter + s;
      });
    })), false));
  };
  State2.prototype.toJSON = function() {
    var _a2 = this, configuration = _a2.configuration, transitions = _a2.transitions, tags = _a2.tags, machine = _a2.machine, jsonValues = __rest(_a2, ["configuration", "transitions", "tags", "machine"]);
    return __assign(__assign({}, jsonValues), {
      tags: Array.from(tags)
    });
  };
  State2.prototype.matches = function(parentStateValue) {
    return matchesState(parentStateValue, this.value);
  };
  State2.prototype.hasTag = function(tag) {
    return this.tags.has(tag);
  };
  State2.prototype.can = function(event2) {
    var _a2;
    if (IS_PRODUCTION) {
      warn(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    }
    var transitionData = (_a2 = this.machine) === null || _a2 === void 0 ? void 0 : _a2.getTransitionData(this, event2);
    return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && transitionData.transitions.some(function(t) {
      return t.target !== void 0 || t.actions.length;
    });
  };
  return State2;
}();

// ../../node_modules/xstate/es/serviceScope.js
var serviceStack = [];
var provide = /* @__PURE__ */ __name(function(service, fn2) {
  serviceStack.push(service);
  var result = fn2(service);
  serviceStack.pop();
  return result;
}, "provide");

// ../../node_modules/xstate/es/Actor.js
function createNullActor(id) {
  return __assign({
    id,
    send: function() {
      return void 0;
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    },
    getSnapshot: function() {
      return void 0;
    },
    toJSON: function() {
      return {
        id
      };
    }
  }, interopSymbols);
}
__name(createNullActor, "createNullActor");
function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a2;
  var invokeSrc = toInvokeSource(invokeDefinition.src);
  var serviceCreator = (_a2 = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a2 === void 0 ? void 0 : _a2[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? mapContext(invokeDefinition.data, context, _event) : void 0;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id);
  tempActor.meta = invokeDefinition;
  return tempActor;
}
__name(createInvocableActor, "createInvocableActor");
function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id);
  tempActor.deferred = true;
  if (isMachine(entity)) {
    var initialState_1 = tempActor.state = provide(void 0, function() {
      return (data ? entity.withContext(data) : entity).initialState;
    });
    tempActor.getSnapshot = function() {
      return initialState_1;
    };
  }
  return tempActor;
}
__name(createDeferredActor, "createDeferredActor");
function isActor2(item) {
  try {
    return typeof item.send === "function";
  } catch (e) {
    return false;
  }
}
__name(isActor2, "isActor");
function isSpawnedActor(item) {
  return isActor2(item) && "id" in item;
}
__name(isSpawnedActor, "isSpawnedActor");
function toActorRef(actorRefLike) {
  return __assign(__assign({
    subscribe: function() {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
      return void 0;
    }
  }, interopSymbols), actorRefLike);
}
__name(toActorRef, "toActorRef");

// ../../node_modules/xstate/es/invokeUtils.js
function toInvokeSource2(src) {
  if (typeof src === "string") {
    var simpleSrc = {
      type: src
    };
    simpleSrc.toString = function() {
      return src;
    };
    return simpleSrc;
  }
  return src;
}
__name(toInvokeSource2, "toInvokeSource");
function toInvokeDefinition(invokeConfig) {
  return __assign(__assign({
    type: invoke
  }, invokeConfig), {
    toJSON: function() {
      var onDone = invokeConfig.onDone, onError = invokeConfig.onError, invokeDef = __rest(invokeConfig, ["onDone", "onError"]);
      return __assign(__assign({}, invokeDef), {
        type: invoke,
        src: toInvokeSource2(invokeConfig.src)
      });
    }
  });
}
__name(toInvokeDefinition, "toInvokeDefinition");

// ../../node_modules/xstate/es/StateNode.js
var NULL_EVENT = "";
var STATE_IDENTIFIER = "#";
var WILDCARD = "*";
var EMPTY_OBJECT = {};
var isStateId = /* @__PURE__ */ __name(function(str) {
  return str[0] === STATE_IDENTIFIER;
}, "isStateId");
var createDefaultOptions = /* @__PURE__ */ __name(function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
}, "createDefaultOptions");
var validateArrayifiedTransitions = /* @__PURE__ */ __name(function(stateNode, event2, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function(transition) {
    return !("cond" in transition) && !("in" in transition) && (isString(transition.target) || isMachine(transition.target));
  });
  var eventText = event2 === NULL_EVENT ? "the transient event" : "event '".concat(event2, "'");
  warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var StateNode = /* @__PURE__ */ function() {
  function StateNode2(config, options, _context) {
    var _this = this;
    if (_context === void 0) {
      _context = "context" in config ? config.context : void 0;
    }
    var _a2;
    this.config = config;
    this._context = _context;
    this.order = -1;
    this.__xstatenode = true;
    this.__cache = {
      events: void 0,
      relativeValue: /* @__PURE__ */ new Map(),
      initialStateValue: void 0,
      initialState: void 0,
      on: void 0,
      transitions: void 0,
      candidates: {},
      delayedTransitions: void 0
    };
    this.idMap = {};
    this.tags = [];
    this.options = Object.assign(createDefaultOptions(), options);
    this.parent = this.options._parent;
    this.key = this.config.key || this.options._key || this.config.id || "(machine)";
    this.machine = this.parent ? this.parent.machine : this;
    this.path = this.parent ? this.parent.path.concat(this.key) : [];
    this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : STATE_DELIMITER);
    this.id = this.config.id || __spreadArray([this.machine.key], __read(this.path), false).join(this.delimiter);
    this.version = this.parent ? this.parent.version : this.config.version;
    this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
    this.schema = this.parent ? this.machine.schema : (_a2 = this.config.schema) !== null && _a2 !== void 0 ? _a2 : {};
    this.description = this.config.description;
    if (!IS_PRODUCTION) {
      warn(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
    }
    this.initial = this.config.initial;
    this.states = this.config.states ? mapValues(this.config.states, function(stateConfig, key) {
      var _a3;
      var stateNode = new StateNode2(stateConfig, {
        _parent: _this,
        _key: key
      });
      Object.assign(_this.idMap, __assign((_a3 = {}, _a3[stateNode.id] = stateNode, _a3), stateNode.idMap));
      return stateNode;
    }) : EMPTY_OBJECT;
    var order2 = 0;
    function dfs(stateNode) {
      var e_1, _a3;
      stateNode.order = order2++;
      try {
        for (var _b = __values(getChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var child = _c.value;
          dfs(child);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a3 = _b.return))
            _a3.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    __name(dfs, "dfs");
    dfs(this);
    this.history = this.config.history === true ? "shallow" : this.config.history || false;
    this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function(_a3) {
      var event2 = _a3.event;
      return event2 === NULL_EVENT;
    }) : NULL_EVENT in this.config.on);
    this.strict = !!this.config.strict;
    this.onEntry = toArray(this.config.entry || this.config.onEntry).map(function(action) {
      return toActionObject(action);
    });
    this.onExit = toArray(this.config.exit || this.config.onExit).map(function(action) {
      return toActionObject(action);
    });
    this.meta = this.config.meta;
    this.doneData = this.type === "final" ? this.config.data : void 0;
    this.invoke = toArray(this.config.invoke).map(function(invokeConfig, i) {
      var _a3, _b;
      if (isMachine(invokeConfig)) {
        var invokeId = createInvokeId(_this.id, i);
        _this.machine.options.services = __assign((_a3 = {}, _a3[invokeId] = invokeConfig, _a3), _this.machine.options.services);
        return toInvokeDefinition({
          src: invokeId,
          id: invokeId
        });
      } else if (isString(invokeConfig.src)) {
        var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
        return toInvokeDefinition(__assign(__assign({}, invokeConfig), {
          id: invokeId,
          src: invokeConfig.src
        }));
      } else if (isMachine(invokeConfig.src) || isFunction(invokeConfig.src)) {
        var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
        _this.machine.options.services = __assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
        return toInvokeDefinition(__assign(__assign({
          id: invokeId
        }, invokeConfig), {
          src: invokeId
        }));
      } else {
        var invokeSource = invokeConfig.src;
        return toInvokeDefinition(__assign(__assign({
          id: createInvokeId(_this.id, i)
        }, invokeConfig), {
          src: invokeSource
        }));
      }
    });
    this.activities = toArray(this.config.activities).concat(this.invoke).map(function(activity) {
      return toActivityDefinition(activity);
    });
    this.transition = this.transition.bind(this);
    this.tags = toArray(this.config.tags);
  }
  __name(StateNode2, "StateNode");
  StateNode2.prototype._init = function() {
    if (this.__cache.transitions) {
      return;
    }
    getAllStateNodes(this).forEach(function(stateNode) {
      return stateNode.on;
    });
  };
  StateNode2.prototype.withConfig = function(options, context) {
    var _a2 = this.options, actions = _a2.actions, activities = _a2.activities, guards = _a2.guards, services = _a2.services, delays = _a2.delays;
    return new StateNode2(this.config, {
      actions: __assign(__assign({}, actions), options.actions),
      activities: __assign(__assign({}, activities), options.activities),
      guards: __assign(__assign({}, guards), options.guards),
      services: __assign(__assign({}, services), options.services),
      delays: __assign(__assign({}, delays), options.delays)
    }, context !== null && context !== void 0 ? context : this.context);
  };
  StateNode2.prototype.withContext = function(context) {
    return new StateNode2(this.config, this.options, context);
  };
  Object.defineProperty(StateNode2.prototype, "context", {
    get: function() {
      return isFunction(this._context) ? this._context() : this._context;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode2.prototype, "definition", {
    get: function() {
      return {
        id: this.id,
        key: this.key,
        version: this.version,
        context: this.context,
        type: this.type,
        initial: this.initial,
        history: this.history,
        states: mapValues(this.states, function(state) {
          return state.definition;
        }),
        on: this.on,
        transitions: this.transitions,
        entry: this.onEntry,
        exit: this.onExit,
        activities: this.activities || [],
        meta: this.meta,
        order: this.order || -1,
        data: this.doneData,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    },
    enumerable: false,
    configurable: true
  });
  StateNode2.prototype.toJSON = function() {
    return this.definition;
  };
  Object.defineProperty(StateNode2.prototype, "on", {
    get: function() {
      if (this.__cache.on) {
        return this.__cache.on;
      }
      var transitions = this.transitions;
      return this.__cache.on = transitions.reduce(function(map, transition) {
        map[transition.eventType] = map[transition.eventType] || [];
        map[transition.eventType].push(transition);
        return map;
      }, {});
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode2.prototype, "after", {
    get: function() {
      return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode2.prototype, "transitions", {
    get: function() {
      return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
    },
    enumerable: false,
    configurable: true
  });
  StateNode2.prototype.getCandidates = function(eventName) {
    if (this.__cache.candidates[eventName]) {
      return this.__cache.candidates[eventName];
    }
    var transient = eventName === NULL_EVENT;
    var candidates = this.transitions.filter(function(transition) {
      var sameEventType = transition.eventType === eventName;
      return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
    });
    this.__cache.candidates[eventName] = candidates;
    return candidates;
  };
  StateNode2.prototype.getDelayedTransitions = function() {
    var _this = this;
    var afterConfig = this.config.after;
    if (!afterConfig) {
      return [];
    }
    var mutateEntryExit = /* @__PURE__ */ __name(function(delay, i) {
      var delayRef = isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
      var eventType = after2(delayRef, _this.id);
      _this.onEntry.push(send2(eventType, {
        delay
      }));
      _this.onExit.push(cancel2(eventType));
      return eventType;
    }, "mutateEntryExit");
    var delayedTransitions = isArray(afterConfig) ? afterConfig.map(function(transition, i) {
      var eventType = mutateEntryExit(transition.delay, i);
      return __assign(__assign({}, transition), {
        event: eventType
      });
    }) : flatten(keys(afterConfig).map(function(delay, i) {
      var configTransition = afterConfig[delay];
      var resolvedTransition = isString(configTransition) ? {
        target: configTransition
      } : configTransition;
      var resolvedDelay = !isNaN(+delay) ? +delay : delay;
      var eventType = mutateEntryExit(resolvedDelay, i);
      return toArray(resolvedTransition).map(function(transition) {
        return __assign(__assign({}, transition), {
          event: eventType,
          delay: resolvedDelay
        });
      });
    }));
    return delayedTransitions.map(function(delayedTransition) {
      var delay = delayedTransition.delay;
      return __assign(__assign({}, _this.formatTransition(delayedTransition)), {
        delay
      });
    });
  };
  StateNode2.prototype.getStateNodes = function(state) {
    var _a2;
    var _this = this;
    if (!state) {
      return [];
    }
    var stateValue = state instanceof State ? state.value : toStateValue(state, this.delimiter);
    if (isString(stateValue)) {
      var initialStateValue = this.getStateNode(stateValue).initial;
      return initialStateValue !== void 0 ? this.getStateNodes((_a2 = {}, _a2[stateValue] = initialStateValue, _a2)) : [this, this.states[stateValue]];
    }
    var subStateKeys = keys(stateValue);
    var subStateNodes = [this];
    subStateNodes.push.apply(subStateNodes, __spreadArray([], __read(flatten(subStateKeys.map(function(subStateKey) {
      return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
    }))), false));
    return subStateNodes;
  };
  StateNode2.prototype.handles = function(event2) {
    var eventType = getEventType(event2);
    return this.events.includes(eventType);
  };
  StateNode2.prototype.resolveState = function(state) {
    var configuration = Array.from(getConfiguration([], this.getStateNodes(state.value)));
    return new State(__assign(__assign({}, state), {
      value: this.resolve(state.value),
      configuration,
      done: isInFinalState(configuration, this),
      tags: getTagsFromConfiguration(configuration)
    }));
  };
  StateNode2.prototype.transitionLeafNode = function(stateValue, state, _event) {
    var stateNode = this.getStateNode(stateValue);
    var next = stateNode.next(state, _event);
    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }
    return next;
  };
  StateNode2.prototype.transitionCompoundNode = function(stateValue, state, _event) {
    var subStateKeys = keys(stateValue);
    var stateNode = this.getStateNode(subStateKeys[0]);
    var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);
    if (!next || !next.transitions.length) {
      return this.next(state, _event);
    }
    return next;
  };
  StateNode2.prototype.transitionParallelNode = function(stateValue, state, _event) {
    var e_2, _a2;
    var transitionMap = {};
    try {
      for (var _b = __values(keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var subStateKey = _c.value;
        var subStateValue = stateValue[subStateKey];
        if (!subStateValue) {
          continue;
        }
        var subStateNode = this.getStateNode(subStateKey);
        var next = subStateNode._transition(subStateValue, state, _event);
        if (next) {
          transitionMap[subStateKey] = next;
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    var stateTransitions = keys(transitionMap).map(function(key) {
      return transitionMap[key];
    });
    var enabledTransitions = flatten(stateTransitions.map(function(st2) {
      return st2.transitions;
    }));
    var willTransition = stateTransitions.some(function(st2) {
      return st2.transitions.length > 0;
    });
    if (!willTransition) {
      return this.next(state, _event);
    }
    var entryNodes = flatten(stateTransitions.map(function(t) {
      return t.entrySet;
    }));
    var configuration = flatten(keys(transitionMap).map(function(key) {
      return transitionMap[key].configuration;
    }));
    return {
      transitions: enabledTransitions,
      entrySet: entryNodes,
      exitSet: flatten(stateTransitions.map(function(t) {
        return t.exitSet;
      })),
      configuration,
      source: state,
      actions: flatten(keys(transitionMap).map(function(key) {
        return transitionMap[key].actions;
      }))
    };
  };
  StateNode2.prototype._transition = function(stateValue, state, _event) {
    if (isString(stateValue)) {
      return this.transitionLeafNode(stateValue, state, _event);
    }
    if (keys(stateValue).length === 1) {
      return this.transitionCompoundNode(stateValue, state, _event);
    }
    return this.transitionParallelNode(stateValue, state, _event);
  };
  StateNode2.prototype.getTransitionData = function(state, event2) {
    return this._transition(state.value, state, toSCXMLEvent(event2));
  };
  StateNode2.prototype.next = function(state, _event) {
    var e_3, _a2;
    var _this = this;
    var eventName = _event.name;
    var actions = [];
    var nextStateNodes = [];
    var selectedTransition;
    try {
      for (var _b = __values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var candidate = _c.value;
        var cond = candidate.cond, stateIn = candidate.in;
        var resolvedContext = state.context;
        var isInState = stateIn ? isString(stateIn) && isStateId(stateIn) ? state.matches(toStateValue(this.getStateNodeById(stateIn).path, this.delimiter)) : matchesState(toStateValue(stateIn, this.delimiter), path(this.path.slice(0, -2))(state.value)) : true;
        var guardPassed = false;
        try {
          guardPassed = !cond || evaluateGuard(this.machine, cond, resolvedContext, _event, state);
        } catch (err) {
          throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
        }
        if (guardPassed && isInState) {
          if (candidate.target !== void 0) {
            nextStateNodes = candidate.target;
          }
          actions.push.apply(actions, __spreadArray([], __read(candidate.actions), false));
          selectedTransition = candidate;
          break;
        }
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    if (!selectedTransition) {
      return void 0;
    }
    if (!nextStateNodes.length) {
      return {
        transitions: [selectedTransition],
        entrySet: [],
        exitSet: [],
        configuration: state.value ? [this] : [],
        source: state,
        actions
      };
    }
    var allNextStateNodes = flatten(nextStateNodes.map(function(stateNode) {
      return _this.getRelativeStateNodes(stateNode, state.historyValue);
    }));
    var isInternal = !!selectedTransition.internal;
    var reentryNodes = isInternal ? [] : flatten(allNextStateNodes.map(function(n) {
      return _this.nodesFromChild(n);
    }));
    return {
      transitions: [selectedTransition],
      entrySet: reentryNodes,
      exitSet: isInternal ? [] : [this],
      configuration: allNextStateNodes,
      source: state,
      actions
    };
  };
  StateNode2.prototype.nodesFromChild = function(childStateNode) {
    if (childStateNode.escapes(this)) {
      return [];
    }
    var nodes = [];
    var marker = childStateNode;
    while (marker && marker !== this) {
      nodes.push(marker);
      marker = marker.parent;
    }
    nodes.push(this);
    return nodes;
  };
  StateNode2.prototype.escapes = function(stateNode) {
    if (this === stateNode) {
      return false;
    }
    var parent = this.parent;
    while (parent) {
      if (parent === stateNode) {
        return false;
      }
      parent = parent.parent;
    }
    return true;
  };
  StateNode2.prototype.getActions = function(transition, currentContext, _event, prevState) {
    var e_4, _a2, e_5, _b;
    var prevConfig = getConfiguration([], prevState ? this.getStateNodes(prevState.value) : [this]);
    var resolvedConfig = transition.configuration.length ? getConfiguration(prevConfig, transition.configuration) : prevConfig;
    try {
      for (var resolvedConfig_1 = __values(resolvedConfig), resolvedConfig_1_1 = resolvedConfig_1.next(); !resolvedConfig_1_1.done; resolvedConfig_1_1 = resolvedConfig_1.next()) {
        var sn = resolvedConfig_1_1.value;
        if (!has(prevConfig, sn)) {
          transition.entrySet.push(sn);
        }
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (resolvedConfig_1_1 && !resolvedConfig_1_1.done && (_a2 = resolvedConfig_1.return))
          _a2.call(resolvedConfig_1);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    try {
      for (var prevConfig_1 = __values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
        var sn = prevConfig_1_1.value;
        if (!has(resolvedConfig, sn) || has(transition.exitSet, sn.parent)) {
          transition.exitSet.push(sn);
        }
      }
    } catch (e_5_1) {
      e_5 = {
        error: e_5_1
      };
    } finally {
      try {
        if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return))
          _b.call(prevConfig_1);
      } finally {
        if (e_5)
          throw e_5.error;
      }
    }
    var doneEvents = flatten(transition.entrySet.map(function(sn2) {
      var events = [];
      if (sn2.type !== "final") {
        return events;
      }
      var parent = sn2.parent;
      if (!parent.parent) {
        return events;
      }
      events.push(done(sn2.id, sn2.doneData), done(parent.id, sn2.doneData ? mapContext(sn2.doneData, currentContext, _event) : void 0));
      var grandparent = parent.parent;
      if (grandparent.type === "parallel") {
        if (getChildren(grandparent).every(function(parentNode) {
          return isInFinalState(transition.configuration, parentNode);
        })) {
          events.push(done(grandparent.id));
        }
      }
      return events;
    }));
    transition.exitSet.sort(function(a, b2) {
      return b2.order - a.order;
    });
    transition.entrySet.sort(function(a, b2) {
      return a.order - b2.order;
    });
    var entryStates = new Set(transition.entrySet);
    var exitStates = new Set(transition.exitSet);
    var _c = __read([flatten(Array.from(entryStates).map(function(stateNode) {
      return __spreadArray(__spreadArray([], __read(stateNode.activities.map(function(activity) {
        return start2(activity);
      })), false), __read(stateNode.onEntry), false);
    })).concat(doneEvents.map(raise2)), flatten(Array.from(exitStates).map(function(stateNode) {
      return __spreadArray(__spreadArray([], __read(stateNode.onExit), false), __read(stateNode.activities.map(function(activity) {
        return stop2(activity);
      })), false);
    }))], 2), entryActions = _c[0], exitActions = _c[1];
    var actions = toActionObjects(exitActions.concat(transition.actions).concat(entryActions), this.machine.options.actions);
    return actions;
  };
  StateNode2.prototype.transition = function(state, event2, context) {
    if (state === void 0) {
      state = this.initialState;
    }
    var _event = toSCXMLEvent(event2);
    var currentState;
    if (state instanceof State) {
      currentState = context === void 0 ? state : this.resolveState(State.from(state, context));
    } else {
      var resolvedStateValue = isString(state) ? this.resolve(pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
      var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
      currentState = this.resolveState(State.from(resolvedStateValue, resolvedContext));
    }
    if (!IS_PRODUCTION && _event.name === WILDCARD) {
      throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
    }
    if (this.strict) {
      if (!this.events.includes(_event.name) && !isBuiltInEvent(_event.name)) {
        throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
      }
    }
    var stateTransition = this._transition(currentState.value, currentState, _event) || {
      transitions: [],
      configuration: [],
      entrySet: [],
      exitSet: [],
      source: currentState,
      actions: []
    };
    var prevConfig = getConfiguration([], this.getStateNodes(currentState.value));
    var resolvedConfig = stateTransition.configuration.length ? getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
    stateTransition.configuration = __spreadArray([], __read(resolvedConfig), false);
    return this.resolveTransition(stateTransition, currentState, currentState.context, _event);
  };
  StateNode2.prototype.resolveRaisedTransition = function(state, _event, originalEvent) {
    var _a2;
    var currentActions = state.actions;
    state = this.transition(state, _event);
    state._event = originalEvent;
    state.event = originalEvent.data;
    (_a2 = state.actions).unshift.apply(_a2, __spreadArray([], __read(currentActions), false));
    return state;
  };
  StateNode2.prototype.resolveTransition = function(stateTransition, currentState, context, _event) {
    var e_6, _a2;
    var _this = this;
    if (_event === void 0) {
      _event = initEvent;
    }
    var configuration = stateTransition.configuration;
    var willTransition = !currentState || stateTransition.transitions.length > 0;
    var resolvedStateValue = willTransition ? getValue(this.machine, configuration) : void 0;
    var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : void 0 : void 0;
    var actions = this.getActions(stateTransition, context, _event, currentState);
    var activities = currentState ? __assign({}, currentState.activities) : {};
    try {
      for (var actions_1 = __values(actions), actions_1_1 = actions_1.next(); !actions_1_1.done; actions_1_1 = actions_1.next()) {
        var action = actions_1_1.value;
        if (action.type === start) {
          activities[action.activity.id || action.activity.type] = action;
        } else if (action.type === stop) {
          activities[action.activity.id || action.activity.type] = false;
        }
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (actions_1_1 && !actions_1_1.done && (_a2 = actions_1.return))
          _a2.call(actions_1);
      } finally {
        if (e_6)
          throw e_6.error;
      }
    }
    var _b = __read(resolveActions(this, currentState, context, _event, actions, this.machine.config.preserveActionOrder), 2), resolvedActions = _b[0], updatedContext = _b[1];
    var _c = __read(partition(resolvedActions, function(action2) {
      return action2.type === raise || action2.type === send && action2.to === SpecialTargets.Internal;
    }), 2), raisedEvents = _c[0], nonRaisedActions = _c[1];
    var invokeActions = resolvedActions.filter(function(action2) {
      var _a3;
      return action2.type === start && ((_a3 = action2.activity) === null || _a3 === void 0 ? void 0 : _a3.type) === invoke;
    });
    var children2 = invokeActions.reduce(function(acc, action2) {
      acc[action2.activity.id] = createInvocableActor(action2.activity, _this.machine, updatedContext, _event);
      return acc;
    }, currentState ? __assign({}, currentState.children) : {});
    var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
    var isDone = isInFinalState(resolvedConfiguration, this);
    var nextState = new State({
      value: resolvedStateValue || currentState.value,
      context: updatedContext,
      _event,
      _sessionid: currentState ? currentState._sessionid : null,
      historyValue: resolvedStateValue ? historyValue ? updateHistoryValue(historyValue, resolvedStateValue) : void 0 : currentState ? currentState.historyValue : void 0,
      history: !resolvedStateValue || stateTransition.source ? currentState : void 0,
      actions: resolvedStateValue ? nonRaisedActions : [],
      activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
      events: [],
      configuration: resolvedConfiguration,
      transitions: stateTransition.transitions,
      children: children2,
      done: isDone,
      tags: currentState === null || currentState === void 0 ? void 0 : currentState.tags,
      machine: this
    });
    var didUpdateContext = context !== updatedContext;
    nextState.changed = _event.name === update || didUpdateContext;
    var history2 = nextState.history;
    if (history2) {
      delete history2.history;
    }
    var isTransient = !isDone && (this._transient || configuration.some(function(stateNode) {
      return stateNode._transient;
    }));
    if (!willTransition && (!isTransient || _event.name === NULL_EVENT)) {
      return nextState;
    }
    var maybeNextState = nextState;
    if (!isDone) {
      if (isTransient) {
        maybeNextState = this.resolveRaisedTransition(maybeNextState, {
          type: nullEvent
        }, _event);
      }
      while (raisedEvents.length) {
        var raisedEvent = raisedEvents.shift();
        maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event);
      }
    }
    var changed = maybeNextState.changed || (history2 ? !!maybeNextState.actions.length || didUpdateContext || typeof history2.value !== typeof maybeNextState.value || !stateValuesEqual(maybeNextState.value, history2.value) : void 0);
    maybeNextState.changed = changed;
    maybeNextState.history = history2;
    maybeNextState.tags = getTagsFromConfiguration(maybeNextState.configuration);
    return maybeNextState;
  };
  StateNode2.prototype.getStateNode = function(stateKey) {
    if (isStateId(stateKey)) {
      return this.machine.getStateNodeById(stateKey);
    }
    if (!this.states) {
      throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
    }
    var result = this.states[stateKey];
    if (!result) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }
    return result;
  };
  StateNode2.prototype.getStateNodeById = function(stateId) {
    var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;
    if (resolvedStateId === this.id) {
      return this;
    }
    var stateNode = this.machine.idMap[resolvedStateId];
    if (!stateNode) {
      throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
    }
    return stateNode;
  };
  StateNode2.prototype.getStateNodeByPath = function(statePath) {
    if (typeof statePath === "string" && isStateId(statePath)) {
      try {
        return this.getStateNodeById(statePath.slice(1));
      } catch (e) {
      }
    }
    var arrayStatePath = toStatePath(statePath, this.delimiter).slice();
    var currentStateNode = this;
    while (arrayStatePath.length) {
      var key = arrayStatePath.shift();
      if (!key.length) {
        break;
      }
      currentStateNode = currentStateNode.getStateNode(key);
    }
    return currentStateNode;
  };
  StateNode2.prototype.resolve = function(stateValue) {
    var _a2;
    var _this = this;
    if (!stateValue) {
      return this.initialStateValue || EMPTY_OBJECT;
    }
    switch (this.type) {
      case "parallel":
        return mapValues(this.initialStateValue, function(subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
        });
      case "compound":
        if (isString(stateValue)) {
          var subStateNode = this.getStateNode(stateValue);
          if (subStateNode.type === "parallel" || subStateNode.type === "compound") {
            return _a2 = {}, _a2[stateValue] = subStateNode.initialStateValue, _a2;
          }
          return stateValue;
        }
        if (!keys(stateValue).length) {
          return this.initialStateValue || {};
        }
        return mapValues(stateValue, function(subStateValue, subStateKey) {
          return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
        });
      default:
        return stateValue || EMPTY_OBJECT;
    }
  };
  StateNode2.prototype.getResolvedPath = function(stateIdentifier) {
    if (isStateId(stateIdentifier)) {
      var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];
      if (!stateNode) {
        throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
      }
      return stateNode.path;
    }
    return toStatePath(stateIdentifier, this.delimiter);
  };
  Object.defineProperty(StateNode2.prototype, "initialStateValue", {
    get: function() {
      var _a2;
      if (this.__cache.initialStateValue) {
        return this.__cache.initialStateValue;
      }
      var initialStateValue;
      if (this.type === "parallel") {
        initialStateValue = mapFilterValues(this.states, function(state) {
          return state.initialStateValue || EMPTY_OBJECT;
        }, function(stateNode) {
          return !(stateNode.type === "history");
        });
      } else if (this.initial !== void 0) {
        if (!this.states[this.initial]) {
          throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
        }
        initialStateValue = isLeafNode(this.states[this.initial]) ? this.initial : (_a2 = {}, _a2[this.initial] = this.states[this.initial].initialStateValue, _a2);
      } else {
        initialStateValue = {};
      }
      this.__cache.initialStateValue = initialStateValue;
      return this.__cache.initialStateValue;
    },
    enumerable: false,
    configurable: true
  });
  StateNode2.prototype.getInitialState = function(stateValue, context) {
    var configuration = this.getStateNodes(stateValue);
    return this.resolveTransition({
      configuration,
      entrySet: configuration,
      exitSet: [],
      transitions: [],
      source: void 0,
      actions: []
    }, void 0, context !== null && context !== void 0 ? context : this.machine.context, void 0);
  };
  Object.defineProperty(StateNode2.prototype, "initialState", {
    get: function() {
      this._init();
      var initialStateValue = this.initialStateValue;
      if (!initialStateValue) {
        throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
      }
      return this.getInitialState(initialStateValue);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode2.prototype, "target", {
    get: function() {
      var target2;
      if (this.type === "history") {
        var historyConfig = this.config;
        if (isString(historyConfig.target)) {
          target2 = isStateId(historyConfig.target) ? pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
        } else {
          target2 = historyConfig.target;
        }
      }
      return target2;
    },
    enumerable: false,
    configurable: true
  });
  StateNode2.prototype.getRelativeStateNodes = function(relativeStateId, historyValue, resolve) {
    if (resolve === void 0) {
      resolve = true;
    }
    return resolve ? relativeStateId.type === "history" ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
  };
  Object.defineProperty(StateNode2.prototype, "initialStateNodes", {
    get: function() {
      var _this = this;
      if (isLeafNode(this)) {
        return [this];
      }
      if (this.type === "compound" && !this.initial) {
        if (!IS_PRODUCTION) {
          warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
        }
        return [this];
      }
      var initialStateNodePaths = toStatePaths(this.initialStateValue);
      return flatten(initialStateNodePaths.map(function(initialPath) {
        return _this.getFromRelativePath(initialPath);
      }));
    },
    enumerable: false,
    configurable: true
  });
  StateNode2.prototype.getFromRelativePath = function(relativePath) {
    if (!relativePath.length) {
      return [this];
    }
    var _a2 = __read(relativePath), stateKey = _a2[0], childStatePath = _a2.slice(1);
    if (!this.states) {
      throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
    }
    var childStateNode = this.getStateNode(stateKey);
    if (childStateNode.type === "history") {
      return childStateNode.resolveHistory();
    }
    if (!this.states[stateKey]) {
      throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
    }
    return this.states[stateKey].getFromRelativePath(childStatePath);
  };
  StateNode2.prototype.historyValue = function(relativeStateValue) {
    if (!keys(this.states).length) {
      return void 0;
    }
    return {
      current: relativeStateValue || this.initialStateValue,
      states: mapFilterValues(this.states, function(stateNode, key) {
        if (!relativeStateValue) {
          return stateNode.historyValue();
        }
        var subStateValue = isString(relativeStateValue) ? void 0 : relativeStateValue[key];
        return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
      }, function(stateNode) {
        return !stateNode.history;
      })
    };
  };
  StateNode2.prototype.resolveHistory = function(historyValue) {
    var _this = this;
    if (this.type !== "history") {
      return [this];
    }
    var parent = this.parent;
    if (!historyValue) {
      var historyTarget = this.target;
      return historyTarget ? flatten(toStatePaths(historyTarget).map(function(relativeChildPath) {
        return parent.getFromRelativePath(relativeChildPath);
      })) : parent.initialStateNodes;
    }
    var subHistoryValue = nestedPath(parent.path, "states")(historyValue).current;
    if (isString(subHistoryValue)) {
      return [parent.getStateNode(subHistoryValue)];
    }
    return flatten(toStatePaths(subHistoryValue).map(function(subStatePath) {
      return _this.history === "deep" ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
    }));
  };
  Object.defineProperty(StateNode2.prototype, "stateIds", {
    get: function() {
      var _this = this;
      var childStateIds = flatten(keys(this.states).map(function(stateKey) {
        return _this.states[stateKey].stateIds;
      }));
      return [this.id].concat(childStateIds);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode2.prototype, "events", {
    get: function() {
      var e_7, _a2, e_8, _b;
      if (this.__cache.events) {
        return this.__cache.events;
      }
      var states = this.states;
      var events = new Set(this.ownEvents);
      if (states) {
        try {
          for (var _c = __values(keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var stateId = _d.value;
            var state = states[stateId];
            if (state.states) {
              try {
                for (var _e2 = (e_8 = void 0, __values(state.events)), _f = _e2.next(); !_f.done; _f = _e2.next()) {
                  var event_1 = _f.value;
                  events.add("".concat(event_1));
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e2.return))
                    _b.call(_e2);
                } finally {
                  if (e_8)
                    throw e_8.error;
                }
              }
            }
          }
        } catch (e_7_1) {
          e_7 = {
            error: e_7_1
          };
        } finally {
          try {
            if (_d && !_d.done && (_a2 = _c.return))
              _a2.call(_c);
          } finally {
            if (e_7)
              throw e_7.error;
          }
        }
      }
      return this.__cache.events = Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(StateNode2.prototype, "ownEvents", {
    get: function() {
      var events = new Set(this.transitions.filter(function(transition) {
        return !(!transition.target && !transition.actions.length && transition.internal);
      }).map(function(transition) {
        return transition.eventType;
      }));
      return Array.from(events);
    },
    enumerable: false,
    configurable: true
  });
  StateNode2.prototype.resolveTarget = function(_target) {
    var _this = this;
    if (_target === void 0) {
      return void 0;
    }
    return _target.map(function(target2) {
      if (!isString(target2)) {
        return target2;
      }
      var isInternalTarget = target2[0] === _this.delimiter;
      if (isInternalTarget && !_this.parent) {
        return _this.getStateNodeByPath(target2.slice(1));
      }
      var resolvedTarget = isInternalTarget ? _this.key + target2 : target2;
      if (_this.parent) {
        try {
          var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);
          return targetStateNode;
        } catch (err) {
          throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
        }
      } else {
        return _this.getStateNodeByPath(resolvedTarget);
      }
    });
  };
  StateNode2.prototype.formatTransition = function(transitionConfig) {
    var _this = this;
    var normalizedTarget = normalizeTarget(transitionConfig.target);
    var internal = "internal" in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function(_target) {
      return isString(_target) && _target[0] === _this.delimiter;
    }) : true;
    var guards = this.machine.options.guards;
    var target2 = this.resolveTarget(normalizedTarget);
    var transition = __assign(__assign({}, transitionConfig), {
      actions: toActionObjects(toArray(transitionConfig.actions)),
      cond: toGuard(transitionConfig.cond, guards),
      target: target2,
      source: this,
      internal,
      eventType: transitionConfig.event,
      toJSON: function() {
        return __assign(__assign({}, transition), {
          target: transition.target ? transition.target.map(function(t) {
            return "#".concat(t.id);
          }) : void 0,
          source: "#".concat(_this.id)
        });
      }
    });
    return transition;
  };
  StateNode2.prototype.formatTransitions = function() {
    var e_9, _a2;
    var _this = this;
    var onConfig;
    if (!this.config.on) {
      onConfig = [];
    } else if (Array.isArray(this.config.on)) {
      onConfig = this.config.on;
    } else {
      var _b = this.config.on, _c = WILDCARD, _d = _b[_c], wildcardConfigs = _d === void 0 ? [] : _d, strictTransitionConfigs_1 = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
      onConfig = flatten(keys(strictTransitionConfigs_1).map(function(key) {
        if (!IS_PRODUCTION && key === NULL_EVENT) {
          warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(_this.id, '".'));
        }
        var transitionConfigArray = toTransitionConfigArray(key, strictTransitionConfigs_1[key]);
        if (!IS_PRODUCTION) {
          validateArrayifiedTransitions(_this, key, transitionConfigArray);
        }
        return transitionConfigArray;
      }).concat(toTransitionConfigArray(WILDCARD, wildcardConfigs)));
    }
    var eventlessConfig = this.config.always ? toTransitionConfigArray("", this.config.always) : [];
    var doneConfig = this.config.onDone ? toTransitionConfigArray(String(done(this.id)), this.config.onDone) : [];
    if (!IS_PRODUCTION) {
      warn(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    }
    var invokeConfig = flatten(this.invoke.map(function(invokeDef) {
      var settleTransitions = [];
      if (invokeDef.onDone) {
        settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
      }
      if (invokeDef.onError) {
        settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(error2(invokeDef.id)), invokeDef.onError)), false));
      }
      return settleTransitions;
    }));
    var delayedTransitions = this.after;
    var formattedTransitions = flatten(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(doneConfig), false), __read(invokeConfig), false), __read(onConfig), false), __read(eventlessConfig), false).map(function(transitionConfig) {
      return toArray(transitionConfig).map(function(transition) {
        return _this.formatTransition(transition);
      });
    }));
    try {
      for (var delayedTransitions_1 = __values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
        var delayedTransition = delayedTransitions_1_1.value;
        formattedTransitions.push(delayedTransition);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a2 = delayedTransitions_1.return))
          _a2.call(delayedTransitions_1);
      } finally {
        if (e_9)
          throw e_9.error;
      }
    }
    return formattedTransitions;
  };
  return StateNode2;
}();

// ../../node_modules/xstate/es/Machine.js
function createMachine(config, options) {
  return new StateNode(config, options);
}
__name(createMachine, "createMachine");

// ../../node_modules/xstate/es/scheduler.js
var defaultOptions = {
  deferEvents: false
};
var Scheduler = /* @__PURE__ */ function() {
  function Scheduler2(options) {
    this.processingEvent = false;
    this.queue = [];
    this.initialized = false;
    this.options = __assign(__assign({}, defaultOptions), options);
  }
  __name(Scheduler2, "Scheduler");
  Scheduler2.prototype.initialize = function(callback) {
    this.initialized = true;
    if (callback) {
      if (!this.options.deferEvents) {
        this.schedule(callback);
        return;
      }
      this.process(callback);
    }
    this.flushEvents();
  };
  Scheduler2.prototype.schedule = function(task) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(task);
      return;
    }
    if (this.queue.length !== 0) {
      throw new Error("Event queue should be empty when it is not processing events");
    }
    this.process(task);
    this.flushEvents();
  };
  Scheduler2.prototype.clear = function() {
    this.queue = [];
  };
  Scheduler2.prototype.flushEvents = function() {
    var nextCallback = this.queue.shift();
    while (nextCallback) {
      this.process(nextCallback);
      nextCallback = this.queue.shift();
    }
  };
  Scheduler2.prototype.process = function(callback) {
    this.processingEvent = true;
    try {
      callback();
    } catch (e) {
      this.clear();
      throw e;
    } finally {
      this.processingEvent = false;
    }
  };
  return Scheduler2;
}();

// ../../node_modules/xstate/es/registry.js
var children = /* @__PURE__ */ new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function() {
    return "x:".concat(sessionIdIndex++);
  },
  register: function(id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function(id) {
    return children.get(id);
  },
  free: function(id) {
    children.delete(id);
  }
};

// ../../node_modules/xstate/es/devTools.js
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  return void 0;
}
__name(getGlobal, "getGlobal");
function getDevTools() {
  var global2 = getGlobal();
  if (global2 && "__xstate__" in global2) {
    return global2.__xstate__;
  }
  return void 0;
}
__name(getDevTools, "getDevTools");
function registerService(service) {
  if (!getGlobal()) {
    return;
  }
  var devTools = getDevTools();
  if (devTools) {
    devTools.register(service);
  }
}
__name(registerService, "registerService");

// ../../node_modules/xstate/es/behaviors.js
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }
  var state = behavior.initialState;
  var observers2 = /* @__PURE__ */ new Set();
  var mailbox = [];
  var flushing = false;
  var flush = /* @__PURE__ */ __name(function() {
    if (flushing) {
      return;
    }
    flushing = true;
    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers2.forEach(function(observer) {
        return observer.next(state);
      });
    }
    flushing = false;
  }, "flush");
  var actor = toActorRef({
    id: options.id,
    send: function(event2) {
      mailbox.push(event2);
      flush();
    },
    getSnapshot: function() {
      return state;
    },
    subscribe: function(next, handleError, complete) {
      var observer = toObserver(next, handleError, complete);
      observers2.add(observer);
      observer.next(state);
      return {
        unsubscribe: function() {
          observers2.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || "anonymous",
    observers: observers2
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}
__name(spawnBehavior, "spawnBehavior");

// ../../node_modules/xstate/es/interpreter.js
var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;
(function(InterpreterStatus2) {
  InterpreterStatus2[InterpreterStatus2["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus2[InterpreterStatus2["Running"] = 1] = "Running";
  InterpreterStatus2[InterpreterStatus2["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));
var Interpreter = /* @__PURE__ */ function() {
  function Interpreter2(machine, options) {
    var _this = this;
    if (options === void 0) {
      options = Interpreter2.defaultOptions;
    }
    this.machine = machine;
    this.scheduler = new Scheduler();
    this.delayedEventsMap = {};
    this.listeners = /* @__PURE__ */ new Set();
    this.contextListeners = /* @__PURE__ */ new Set();
    this.stopListeners = /* @__PURE__ */ new Set();
    this.doneListeners = /* @__PURE__ */ new Set();
    this.eventListeners = /* @__PURE__ */ new Set();
    this.sendListeners = /* @__PURE__ */ new Set();
    this.initialized = false;
    this.status = InterpreterStatus.NotStarted;
    this.children = /* @__PURE__ */ new Map();
    this.forwardTo = /* @__PURE__ */ new Set();
    this.init = this.start;
    this.send = function(event2, payload) {
      if (isArray(event2)) {
        _this.batch(event2);
        return _this.state;
      }
      var _event = toSCXMLEvent(toEventObject(event2, payload));
      if (_this.status === InterpreterStatus.Stopped) {
        if (!IS_PRODUCTION) {
          warn(false, 'Event "'.concat(_event.name, '" was sent to stopped service "').concat(_this.machine.id, '". This service has already reached its final state, and will not transition.\nEvent: ').concat(JSON.stringify(_event.data)));
        }
        return _this.state;
      }
      if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
        throw new Error('Event "'.concat(_event.name, '" was sent to uninitialized service "').concat(_this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ').concat(JSON.stringify(_event.data)));
      }
      _this.scheduler.schedule(function() {
        _this.forward(_event);
        var nextState = _this.nextState(_event);
        _this.update(nextState, _event);
      });
      return _this._state;
    };
    this.sendTo = function(event2, to) {
      var isParent = _this.parent && (to === SpecialTargets.Parent || _this.parent.id === to);
      var target2 = isParent ? _this.parent : isString(to) ? _this.children.get(to) || registry.get(to) : isActor(to) ? to : void 0;
      if (!target2) {
        if (!isParent) {
          throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
        }
        if (!IS_PRODUCTION) {
          warn(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event2.type));
        }
        return;
      }
      if ("machine" in target2) {
        target2.send(__assign(__assign({}, event2), {
          name: event2.name === error ? "".concat(error2(_this.id)) : event2.name,
          origin: _this.sessionId
        }));
      } else {
        target2.send(event2.data);
      }
    };
    var resolvedOptions = __assign(__assign({}, Interpreter2.defaultOptions), options);
    var clock = resolvedOptions.clock, logger = resolvedOptions.logger, parent = resolvedOptions.parent, id = resolvedOptions.id;
    var resolvedId = id !== void 0 ? id : machine.id;
    this.id = resolvedId;
    this.logger = logger;
    this.clock = clock;
    this.parent = parent;
    this.options = resolvedOptions;
    this.scheduler = new Scheduler({
      deferEvents: this.options.deferEvents
    });
    this.sessionId = registry.bookId();
  }
  __name(Interpreter2, "Interpreter");
  Object.defineProperty(Interpreter2.prototype, "initialState", {
    get: function() {
      var _this = this;
      if (this._initialState) {
        return this._initialState;
      }
      return provide(this, function() {
        _this._initialState = _this.machine.initialState;
        return _this._initialState;
      });
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Interpreter2.prototype, "state", {
    get: function() {
      if (!IS_PRODUCTION) {
        warn(this.status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
      }
      return this._state;
    },
    enumerable: false,
    configurable: true
  });
  Interpreter2.prototype.execute = function(state, actionsConfig) {
    var e_1, _a2;
    try {
      for (var _b = __values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        this.exec(action, state, actionsConfig);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  Interpreter2.prototype.update = function(state, _event) {
    var e_2, _a2, e_3, _b, e_4, _c, e_5, _d;
    var _this = this;
    state._sessionid = this.sessionId;
    this._state = state;
    if (this.options.execute) {
      this.execute(this.state);
    }
    this.children.forEach(function(child) {
      _this.state.children[child.id] = child;
    });
    if (this.devTools) {
      this.devTools.send(_event.data, state);
    }
    if (state.event) {
      try {
        for (var _e2 = __values(this.eventListeners), _f = _e2.next(); !_f.done; _f = _e2.next()) {
          var listener = _f.value;
          listener(state.event);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_a2 = _e2.return))
            _a2.call(_e2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
    try {
      for (var _g = __values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
        var listener = _h.value;
        listener(state, state.event);
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (_h && !_h.done && (_b = _g.return))
          _b.call(_g);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    try {
      for (var _j = __values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
        var contextListener = _k.value;
        contextListener(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (_k && !_k.done && (_c = _j.return))
          _c.call(_j);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    var isDone = isInFinalState(state.configuration || [], this.machine);
    if (this.state.configuration && isDone) {
      var finalChildStateNode = state.configuration.find(function(sn) {
        return sn.type === "final" && sn.parent === _this.machine;
      });
      var doneData = finalChildStateNode && finalChildStateNode.doneData ? mapContext(finalChildStateNode.doneData, state.context, _event) : void 0;
      try {
        for (var _l = __values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
          var listener = _m.value;
          listener(doneInvoke(this.id, doneData));
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_m && !_m.done && (_d = _l.return))
            _d.call(_l);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      this.stop();
    }
  };
  Interpreter2.prototype.onTransition = function(listener) {
    this.listeners.add(listener);
    if (this.status === InterpreterStatus.Running) {
      listener(this.state, this.state.event);
    }
    return this;
  };
  Interpreter2.prototype.subscribe = function(nextListenerOrObserver, _2, completeListener) {
    var _this = this;
    if (!nextListenerOrObserver) {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    }
    var listener;
    var resolvedCompleteListener = completeListener;
    if (typeof nextListenerOrObserver === "function") {
      listener = nextListenerOrObserver;
    } else {
      listener = nextListenerOrObserver.next.bind(nextListenerOrObserver);
      resolvedCompleteListener = nextListenerOrObserver.complete.bind(nextListenerOrObserver);
    }
    this.listeners.add(listener);
    if (this.status === InterpreterStatus.Running) {
      listener(this.state);
    }
    if (resolvedCompleteListener) {
      this.onDone(resolvedCompleteListener);
    }
    return {
      unsubscribe: function() {
        listener && _this.listeners.delete(listener);
        resolvedCompleteListener && _this.doneListeners.delete(resolvedCompleteListener);
      }
    };
  };
  Interpreter2.prototype.onEvent = function(listener) {
    this.eventListeners.add(listener);
    return this;
  };
  Interpreter2.prototype.onSend = function(listener) {
    this.sendListeners.add(listener);
    return this;
  };
  Interpreter2.prototype.onChange = function(listener) {
    this.contextListeners.add(listener);
    return this;
  };
  Interpreter2.prototype.onStop = function(listener) {
    this.stopListeners.add(listener);
    return this;
  };
  Interpreter2.prototype.onDone = function(listener) {
    this.doneListeners.add(listener);
    return this;
  };
  Interpreter2.prototype.off = function(listener) {
    this.listeners.delete(listener);
    this.eventListeners.delete(listener);
    this.sendListeners.delete(listener);
    this.stopListeners.delete(listener);
    this.doneListeners.delete(listener);
    this.contextListeners.delete(listener);
    return this;
  };
  Interpreter2.prototype.start = function(initialState) {
    var _this = this;
    if (this.status === InterpreterStatus.Running) {
      return this;
    }
    registry.register(this.sessionId, this);
    this.initialized = true;
    this.status = InterpreterStatus.Running;
    var resolvedState = initialState === void 0 ? this.initialState : provide(this, function() {
      return isState(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.from(initialState, _this.machine.context));
    });
    if (this.options.devTools) {
      this.attachDev();
    }
    this.scheduler.initialize(function() {
      _this.update(resolvedState, initEvent);
    });
    return this;
  };
  Interpreter2.prototype.stop = function() {
    var e_6, _a2, e_7, _b, e_8, _c, e_9, _d, e_10, _e2;
    var _this = this;
    try {
      for (var _f = __values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
        var listener = _g.value;
        this.listeners.delete(listener);
      }
    } catch (e_6_1) {
      e_6 = {
        error: e_6_1
      };
    } finally {
      try {
        if (_g && !_g.done && (_a2 = _f.return))
          _a2.call(_f);
      } finally {
        if (e_6)
          throw e_6.error;
      }
    }
    try {
      for (var _h = __values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
        var listener = _j.value;
        listener();
        this.stopListeners.delete(listener);
      }
    } catch (e_7_1) {
      e_7 = {
        error: e_7_1
      };
    } finally {
      try {
        if (_j && !_j.done && (_b = _h.return))
          _b.call(_h);
      } finally {
        if (e_7)
          throw e_7.error;
      }
    }
    try {
      for (var _k = __values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
        var listener = _l.value;
        this.contextListeners.delete(listener);
      }
    } catch (e_8_1) {
      e_8 = {
        error: e_8_1
      };
    } finally {
      try {
        if (_l && !_l.done && (_c = _k.return))
          _c.call(_k);
      } finally {
        if (e_8)
          throw e_8.error;
      }
    }
    try {
      for (var _m = __values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
        var listener = _o.value;
        this.doneListeners.delete(listener);
      }
    } catch (e_9_1) {
      e_9 = {
        error: e_9_1
      };
    } finally {
      try {
        if (_o && !_o.done && (_d = _m.return))
          _d.call(_m);
      } finally {
        if (e_9)
          throw e_9.error;
      }
    }
    if (!this.initialized) {
      return this;
    }
    __spreadArray([], __read(this.state.configuration), false).sort(function(a, b2) {
      return b2.order - a.order;
    }).forEach(function(stateNode) {
      var e_11, _a3;
      try {
        for (var _b2 = __values(stateNode.definition.exit), _c2 = _b2.next(); !_c2.done; _c2 = _b2.next()) {
          var action = _c2.value;
          _this.exec(action, _this.state);
        }
      } catch (e_11_1) {
        e_11 = {
          error: e_11_1
        };
      } finally {
        try {
          if (_c2 && !_c2.done && (_a3 = _b2.return))
            _a3.call(_b2);
        } finally {
          if (e_11)
            throw e_11.error;
        }
      }
    });
    this.children.forEach(function(child) {
      if (isFunction(child.stop)) {
        child.stop();
      }
    });
    try {
      for (var _p = __values(keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
        var key = _q.value;
        this.clock.clearTimeout(this.delayedEventsMap[key]);
      }
    } catch (e_10_1) {
      e_10 = {
        error: e_10_1
      };
    } finally {
      try {
        if (_q && !_q.done && (_e2 = _p.return))
          _e2.call(_p);
      } finally {
        if (e_10)
          throw e_10.error;
      }
    }
    this.scheduler.clear();
    this.initialized = false;
    this.status = InterpreterStatus.Stopped;
    registry.free(this.sessionId);
    return this;
  };
  Interpreter2.prototype.batch = function(events) {
    var _this = this;
    if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) {
      if (!IS_PRODUCTION) {
        warn(false, "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '" and are deferred. Make sure .start() is called for this service.\nEvent: ').concat(JSON.stringify(event)));
      }
    } else if (this.status !== InterpreterStatus.Running) {
      throw new Error("".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    }
    this.scheduler.schedule(function() {
      var e_12, _a2;
      var nextState = _this.state;
      var batchChanged = false;
      var batchedActions = [];
      var _loop_1 = /* @__PURE__ */ __name(function(event_12) {
        var _event = toSCXMLEvent(event_12);
        _this.forward(_event);
        nextState = provide(_this, function() {
          return _this.machine.transition(nextState, _event);
        });
        batchedActions.push.apply(batchedActions, __spreadArray([], __read(nextState.actions.map(function(a) {
          return bindActionToState(a, nextState);
        })), false));
        batchChanged = batchChanged || !!nextState.changed;
      }, "_loop_1");
      try {
        for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
          var event_1 = events_1_1.value;
          _loop_1(event_1);
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (events_1_1 && !events_1_1.done && (_a2 = events_1.return))
            _a2.call(events_1);
        } finally {
          if (e_12)
            throw e_12.error;
        }
      }
      nextState.changed = batchChanged;
      nextState.actions = batchedActions;
      _this.update(nextState, toSCXMLEvent(events[events.length - 1]));
    });
  };
  Interpreter2.prototype.sender = function(event2) {
    return this.send.bind(this, event2);
  };
  Interpreter2.prototype.nextState = function(event2) {
    var _this = this;
    var _event = toSCXMLEvent(event2);
    if (_event.name.indexOf(errorPlatform) === 0 && !this.state.nextEvents.some(function(nextEvent) {
      return nextEvent.indexOf(errorPlatform) === 0;
    })) {
      throw _event.data.data;
    }
    var nextState = provide(this, function() {
      return _this.machine.transition(_this.state, _event);
    });
    return nextState;
  };
  Interpreter2.prototype.forward = function(event2) {
    var e_13, _a2;
    try {
      for (var _b = __values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
        var id = _c.value;
        var child = this.children.get(id);
        if (!child) {
          throw new Error("Unable to forward event '".concat(event2, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
        }
        child.send(event2);
      }
    } catch (e_13_1) {
      e_13 = {
        error: e_13_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return))
          _a2.call(_b);
      } finally {
        if (e_13)
          throw e_13.error;
      }
    }
  };
  Interpreter2.prototype.defer = function(sendAction) {
    var _this = this;
    this.delayedEventsMap[sendAction.id] = this.clock.setTimeout(function() {
      if (sendAction.to) {
        _this.sendTo(sendAction._event, sendAction.to);
      } else {
        _this.send(sendAction._event);
      }
    }, sendAction.delay);
  };
  Interpreter2.prototype.cancel = function(sendId) {
    this.clock.clearTimeout(this.delayedEventsMap[sendId]);
    delete this.delayedEventsMap[sendId];
  };
  Interpreter2.prototype.exec = function(action, state, actionFunctionMap) {
    if (actionFunctionMap === void 0) {
      actionFunctionMap = this.machine.options.actions;
    }
    var context = state.context, _event = state._event;
    var actionOrExec = action.exec || getActionFunction(action.type, actionFunctionMap);
    var exec = isFunction(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;
    if (exec) {
      try {
        return exec(context, _event.data, {
          action,
          state: this.state,
          _event
        });
      } catch (err) {
        if (this.parent) {
          this.parent.send({
            type: "xstate.error",
            data: err
          });
        }
        throw err;
      }
    }
    switch (action.type) {
      case send:
        var sendAction = action;
        if (typeof sendAction.delay === "number") {
          this.defer(sendAction);
          return;
        } else {
          if (sendAction.to) {
            this.sendTo(sendAction._event, sendAction.to);
          } else {
            this.send(sendAction._event);
          }
        }
        break;
      case cancel:
        this.cancel(action.sendId);
        break;
      case start: {
        if (this.status !== InterpreterStatus.Running) {
          return;
        }
        var activity = action.activity;
        if (!this.state.activities[activity.id || activity.type]) {
          break;
        }
        if (activity.type === ActionTypes.Invoke) {
          var invokeSource = toInvokeSource(activity.src);
          var serviceCreator = this.machine.options.services ? this.machine.options.services[invokeSource.type] : void 0;
          var id = activity.id, data = activity.data;
          if (!IS_PRODUCTION) {
            warn(!("forward" in activity), "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          }
          var autoForward = "autoForward" in activity ? activity.autoForward : !!activity.forward;
          if (!serviceCreator) {
            if (!IS_PRODUCTION) {
              warn(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(this.machine.id, "'."));
            }
            return;
          }
          var resolvedData = data ? mapContext(data, context, _event) : void 0;
          if (typeof serviceCreator === "string") {
            return;
          }
          var source = isFunction(serviceCreator) ? serviceCreator(context, _event.data, {
            data: resolvedData,
            src: invokeSource,
            meta: activity.meta
          }) : serviceCreator;
          if (!source) {
            return;
          }
          var options = void 0;
          if (isMachine(source)) {
            source = resolvedData ? source.withContext(resolvedData) : source;
            options = {
              autoForward
            };
          }
          this.spawn(source, id, options);
        } else {
          this.spawnActivity(activity);
        }
        break;
      }
      case stop: {
        this.stopChild(action.activity.id);
        break;
      }
      case log:
        var label = action.label, value = action.value;
        if (label) {
          this.logger(label, value);
        } else {
          this.logger(value);
        }
        break;
      default:
        if (!IS_PRODUCTION) {
          warn(false, "No implementation found for action type '".concat(action.type, "'"));
        }
        break;
    }
    return void 0;
  };
  Interpreter2.prototype.removeChild = function(childId) {
    var _a2;
    this.children.delete(childId);
    this.forwardTo.delete(childId);
    (_a2 = this.state) === null || _a2 === void 0 ? true : delete _a2.children[childId];
  };
  Interpreter2.prototype.stopChild = function(childId) {
    var child = this.children.get(childId);
    if (!child) {
      return;
    }
    this.removeChild(childId);
    if (isFunction(child.stop)) {
      child.stop();
    }
  };
  Interpreter2.prototype.spawn = function(entity, name, options) {
    if (isPromiseLike(entity)) {
      return this.spawnPromise(Promise.resolve(entity), name);
    } else if (isFunction(entity)) {
      return this.spawnCallback(entity, name);
    } else if (isSpawnedActor(entity)) {
      return this.spawnActor(entity, name);
    } else if (isObservable(entity)) {
      return this.spawnObservable(entity, name);
    } else if (isMachine(entity)) {
      return this.spawnMachine(entity, __assign(__assign({}, options), {
        id: name
      }));
    } else if (isBehavior(entity)) {
      return this.spawnBehavior(entity, name);
    } else {
      throw new Error('Unable to spawn entity "'.concat(name, '" of type "').concat(typeof entity, '".'));
    }
  };
  Interpreter2.prototype.spawnMachine = function(machine, options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    var childService = new Interpreter2(machine, __assign(__assign({}, this.options), {
      parent: this,
      id: options.id || machine.id
    }));
    var resolvedOptions = __assign(__assign({}, DEFAULT_SPAWN_OPTIONS), options);
    if (resolvedOptions.sync) {
      childService.onTransition(function(state) {
        _this.send(update, {
          state,
          id: childService.id
        });
      });
    }
    var actor = childService;
    this.children.set(childService.id, actor);
    if (resolvedOptions.autoForward) {
      this.forwardTo.add(childService.id);
    }
    childService.onDone(function(doneEvent) {
      _this.removeChild(childService.id);
      _this.send(toSCXMLEvent(doneEvent, {
        origin: childService.id
      }));
    }).start();
    return actor;
  };
  Interpreter2.prototype.spawnBehavior = function(behavior, id) {
    var actorRef = spawnBehavior(behavior, {
      id,
      parent: this
    });
    this.children.set(id, actorRef);
    return actorRef;
  };
  Interpreter2.prototype.spawnPromise = function(promise, id) {
    var _this = this;
    var canceled = false;
    var resolvedData;
    promise.then(function(response) {
      if (!canceled) {
        resolvedData = response;
        _this.removeChild(id);
        _this.send(toSCXMLEvent(doneInvoke(id, response), {
          origin: id
        }));
      }
    }, function(errorData) {
      if (!canceled) {
        _this.removeChild(id);
        var errorEvent = error2(id, errorData);
        try {
          _this.send(toSCXMLEvent(errorEvent, {
            origin: id
          }));
        } catch (error3) {
          reportUnhandledExceptionOnInvocation(errorData, error3, id);
          if (_this.devTools) {
            _this.devTools.send(errorEvent, _this.state);
          }
          if (_this.machine.strict) {
            _this.stop();
          }
        }
      }
    });
    var actor = __assign({
      id,
      send: function() {
        return void 0;
      },
      subscribe: function(next, handleError, complete) {
        var observer = toObserver(next, handleError, complete);
        var unsubscribed = false;
        promise.then(function(response) {
          if (unsubscribed) {
            return;
          }
          observer.next(response);
          if (unsubscribed) {
            return;
          }
          observer.complete();
        }, function(err) {
          if (unsubscribed) {
            return;
          }
          observer.error(err);
        });
        return {
          unsubscribe: function() {
            return unsubscribed = true;
          }
        };
      },
      stop: function() {
        canceled = true;
      },
      toJSON: function() {
        return {
          id
        };
      },
      getSnapshot: function() {
        return resolvedData;
      }
    }, interopSymbols);
    this.children.set(id, actor);
    return actor;
  };
  Interpreter2.prototype.spawnCallback = function(callback, id) {
    var _this = this;
    var canceled = false;
    var receivers = /* @__PURE__ */ new Set();
    var listeners = /* @__PURE__ */ new Set();
    var emitted;
    var receive = /* @__PURE__ */ __name(function(e) {
      emitted = e;
      listeners.forEach(function(listener) {
        return listener(e);
      });
      if (canceled) {
        return;
      }
      _this.send(toSCXMLEvent(e, {
        origin: id
      }));
    }, "receive");
    var callbackStop;
    try {
      callbackStop = callback(receive, function(newListener) {
        receivers.add(newListener);
      });
    } catch (err) {
      this.send(error2(id, err));
    }
    if (isPromiseLike(callbackStop)) {
      return this.spawnPromise(callbackStop, id);
    }
    var actor = __assign({
      id,
      send: function(event2) {
        return receivers.forEach(function(receiver) {
          return receiver(event2);
        });
      },
      subscribe: function(next) {
        listeners.add(next);
        return {
          unsubscribe: function() {
            listeners.delete(next);
          }
        };
      },
      stop: function() {
        canceled = true;
        if (isFunction(callbackStop)) {
          callbackStop();
        }
      },
      toJSON: function() {
        return {
          id
        };
      },
      getSnapshot: function() {
        return emitted;
      }
    }, interopSymbols);
    this.children.set(id, actor);
    return actor;
  };
  Interpreter2.prototype.spawnObservable = function(source, id) {
    var _this = this;
    var emitted;
    var subscription = source.subscribe(function(value) {
      emitted = value;
      _this.send(toSCXMLEvent(value, {
        origin: id
      }));
    }, function(err) {
      _this.removeChild(id);
      _this.send(toSCXMLEvent(error2(id, err), {
        origin: id
      }));
    }, function() {
      _this.removeChild(id);
      _this.send(toSCXMLEvent(doneInvoke(id), {
        origin: id
      }));
    });
    var actor = __assign({
      id,
      send: function() {
        return void 0;
      },
      subscribe: function(next, handleError, complete) {
        return source.subscribe(next, handleError, complete);
      },
      stop: function() {
        return subscription.unsubscribe();
      },
      getSnapshot: function() {
        return emitted;
      },
      toJSON: function() {
        return {
          id
        };
      }
    }, interopSymbols);
    this.children.set(id, actor);
    return actor;
  };
  Interpreter2.prototype.spawnActor = function(actor, name) {
    this.children.set(name, actor);
    return actor;
  };
  Interpreter2.prototype.spawnActivity = function(activity) {
    var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : void 0;
    if (!implementation) {
      if (!IS_PRODUCTION) {
        warn(false, "No implementation found for activity '".concat(activity.type, "'"));
      }
      return;
    }
    var dispose = implementation(this.state.context, activity);
    this.spawnEffect(activity.id, dispose);
  };
  Interpreter2.prototype.spawnEffect = function(id, dispose) {
    this.children.set(id, __assign({
      id,
      send: function() {
        return void 0;
      },
      subscribe: function() {
        return {
          unsubscribe: function() {
            return void 0;
          }
        };
      },
      stop: dispose || void 0,
      getSnapshot: function() {
        return void 0;
      },
      toJSON: function() {
        return {
          id
        };
      }
    }, interopSymbols));
  };
  Interpreter2.prototype.attachDev = function() {
    var global2 = getGlobal();
    if (this.options.devTools && global2) {
      if (global2.__REDUX_DEVTOOLS_EXTENSION__) {
        var devToolsOptions = typeof this.options.devTools === "object" ? this.options.devTools : void 0;
        this.devTools = global2.__REDUX_DEVTOOLS_EXTENSION__.connect(__assign(__assign({
          name: this.id,
          autoPause: true,
          stateSanitizer: function(state) {
            return {
              value: state.value,
              context: state.context,
              actions: state.actions
            };
          }
        }, devToolsOptions), {
          features: __assign({
            jump: false,
            skip: false
          }, devToolsOptions ? devToolsOptions.features : void 0)
        }), this.machine);
        this.devTools.init(this.state);
      }
      registerService(this);
    }
  };
  Interpreter2.prototype.toJSON = function() {
    return {
      id: this.id
    };
  };
  Interpreter2.prototype[symbolObservable] = function() {
    return this;
  };
  Interpreter2.prototype.getSnapshot = function() {
    if (this.status === InterpreterStatus.NotStarted) {
      return this.initialState;
    }
    return this._state;
  };
  Interpreter2.defaultOptions = /* @__PURE__ */ function(global2) {
    return {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function(fn2, ms) {
          return setTimeout(fn2, ms);
        },
        clearTimeout: function(id) {
          return clearTimeout(id);
        }
      },
      logger: global2.console.log.bind(console),
      devTools: false
    };
  }(typeof self !== "undefined" ? self : global);
  Interpreter2.interpret = interpret;
  return Interpreter2;
}();
function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}
__name(interpret, "interpret");

// ../../packages/elements/dist/index.js
var import_interactjs = __toESM(require_interact_min(), 1);

// ../../node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start3 = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start3, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start3, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
__name(getNodeName, "getNodeName");

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
__name(getWindow, "getWindow");

// ../../node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
__name(isElement, "isElement");
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");

// ../../node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
__name(applyStyles, "applyStyles");
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
__name(effect, "effect");
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// ../../node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
__name(getBasePlacement, "getBasePlacement");

// ../../node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// ../../node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;
    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }
    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }
  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}
__name(getBoundingClientRect, "getBoundingClientRect");

// ../../node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
__name(getLayoutRect, "getLayoutRect");

// ../../node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
__name(contains, "contains");

// ../../node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle, "getComputedStyle");

// ../../node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
__name(isTableElement, "isTableElement");

// ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
__name(getDocumentElement, "getDocumentElement");

// ../../node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
__name(getParentNode, "getParentNode");

// ../../node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
__name(getTrueOffsetParent, "getTrueOffsetParent");
function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
  var isIE = navigator.userAgent.indexOf("Trident") !== -1;
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
__name(getOffsetParent, "getOffsetParent");

// ../../node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
__name(getMainAxisFromPlacement, "getMainAxisFromPlacement");

// ../../node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
__name(within, "within");
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
__name(withinMaxClamp, "withinMaxClamp");

// ../../node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
__name(getFreshSideObject, "getFreshSideObject");

// ../../node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
__name(mergePaddingObject, "mergePaddingObject");

// ../../node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
__name(expandToHashMap, "expandToHashMap");

// ../../node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = /* @__PURE__ */ __name(function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
}, "toPaddingObject");
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
__name(arrow, "arrow");
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
    }
    return;
  }
  state.elements.arrow = arrowElement;
}
__name(effect2, "effect");
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// ../../node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}
__name(getVariation, "getVariation");

// ../../node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref) {
  var x2 = _ref.x, y2 = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
__name(roundOffsetsByDPR, "roundOffsetsByDPR");
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
__name(mapToStyles, "mapToStyles");
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
    }
  }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
__name(computeStyles, "computeStyles");
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
__name(effect3, "effect");
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: /* @__PURE__ */ __name(function fn() {
  }, "fn"),
  effect: effect3,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
__name(getOppositePlacement, "getOppositePlacement");

// ../../node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
__name(getOppositeVariationPlacement, "getOppositeVariationPlacement");

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
__name(getWindowScroll, "getWindowScroll");

// ../../node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
__name(getWindowScrollBarX, "getWindowScrollBarX");

// ../../node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element) {
  var win = getWindow(element);
  var html2 = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html2.clientWidth;
  var height = html2.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
__name(getViewportRect, "getViewportRect");

// ../../node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html2 = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html2.scrollWidth, html2.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html2.scrollHeight, html2.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html2).direction === "rtl") {
    x2 += max(html2.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
__name(getDocumentRect, "getDocumentRect");

// ../../node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
__name(isScrollParent, "isScrollParent");

// ../../node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
__name(getScrollParent, "getScrollParent");

// ../../node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target2 = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target2);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target2)));
}
__name(listScrollParents, "listScrollParents");

// ../../node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
__name(rectToClientRect, "rectToClientRect");

// ../../node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
__name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
__name(getClientRectFromMixedType, "getClientRectFromMixedType");
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
__name(getClippingParents, "getClippingParents");
function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
__name(getClippingRect, "getClippingRect");

// ../../node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start3:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
__name(computeOffsets, "computeOffsets");

// ../../node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
__name(detectOverflow, "detectOverflow");

// ../../node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
    if (true) {
      console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
    }
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b2) {
    return overflows[a] - overflows[b2];
  });
}
__name(computeAutoPlacement, "computeAutoPlacement");

// ../../node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
__name(getExpandedFallbackPlacements, "getExpandedFallbackPlacements");
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start3;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = /* @__PURE__ */ __name(function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    }, "_loop");
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
__name(flip, "flip");
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// ../../node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
__name(getSideOffsets, "getSideOffsets");
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
__name(isAnySideFullyClipped, "isAnySideFullyClipped");
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
__name(hide, "hide");
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// ../../node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
__name(distanceAndSkiddingToXY, "distanceAndSkiddingToXY");
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
__name(offset, "offset");
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// ../../node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
__name(popperOffsets, "popperOffsets");
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// ../../node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getAltAxis, "getAltAxis");

// ../../node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start3 ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start3 ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
__name(preventOverflow, "preventOverflow");
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// ../../node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
__name(getHTMLElementScroll, "getHTMLElementScroll");

// ../../node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
__name(getNodeScroll, "getNodeScroll");

// ../../node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
__name(isElementScaled, "isElementScaled");
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
__name(getCompositeRect, "getCompositeRect");

// ../../node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  __name(sort, "sort");
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
__name(order, "order");
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
__name(orderModifiers, "orderModifiers");

// ../../node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
__name(debounce, "debounce");

// ../../node_modules/@popperjs/core/lib/utils/format.js
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return [].concat(args).reduce(function(p3, c2) {
    return p3.replace(/%s/, c2);
  }, str);
}
__name(format, "format");

// ../../node_modules/@popperjs/core/lib/utils/validateModifiers.js
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
      return self2.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          if (typeof modifier.name !== "string") {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          }
          break;
        case "enabled":
          if (typeof modifier.enabled !== "boolean") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          }
          break;
        case "phase":
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          }
          break;
        case "fn":
          if (typeof modifier.fn !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "effect":
          if (modifier.effect != null && typeof modifier.effect !== "function") {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          }
          break;
        case "requires":
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          }
          break;
        case "requiresIfExists":
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          }
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        if (modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
__name(validateModifiers, "validateModifiers");

// ../../node_modules/@popperjs/core/lib/utils/uniqueBy.js
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
__name(uniqueBy, "uniqueBy");

// ../../node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
__name(mergeByName, "mergeByName");

// ../../node_modules/@popperjs/core/lib/createPopper.js
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
__name(areValidElements, "areValidElements");
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return /* @__PURE__ */ __name(function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions2;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: /* @__PURE__ */ __name(function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions2, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);
          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function(_ref2) {
              var name = _ref2.name;
              return name === "flip";
            });
            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
            }
          }
          var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
          if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
          }
        }
        runModifierEffects();
        return instance.update();
      }, "setOptions"),
      forceUpdate: /* @__PURE__ */ __name(function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;
            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      }, "forceUpdate"),
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: /* @__PURE__ */ __name(function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }, "destroy")
    };
    if (!areValidElements(reference2, popper2)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect5 = _ref3.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = /* @__PURE__ */ __name(function noopFn2() {
          }, "noopFn");
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    __name(runModifierEffects, "runModifierEffects");
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    __name(cleanupModifierEffects, "cleanupModifierEffects");
    return instance;
  }, "createPopper");
}
__name(popperGenerator, "popperGenerator");

// ../../node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});

// ../../node_modules/tippy.js/dist/tippy.esm.js
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = /* @__PURE__ */ __name(function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
__name(hasOwnProperty, "hasOwnProperty");
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v2 = value[index];
    return v2 == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v2;
  }
  return value;
}
__name(getValueAtIndexOrReturn, "getValueAtIndexOrReturn");
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
__name(isType, "isType");
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
__name(invokeWithArgsOrReturn, "invokeWithArgsOrReturn");
function debounce2(fn2, ms) {
  if (ms === 0) {
    return fn2;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn2(arg);
    }, ms);
  };
}
__name(debounce2, "debounce");
function removeProperties(obj, keys2) {
  var clone = Object.assign({}, obj);
  keys2.forEach(function(key) {
    delete clone[key];
  });
  return clone;
}
__name(removeProperties, "removeProperties");
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
__name(splitBySpaces, "splitBySpaces");
function normalizeToArray(value) {
  return [].concat(value);
}
__name(normalizeToArray, "normalizeToArray");
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
__name(pushIfUnique, "pushIfUnique");
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
__name(unique, "unique");
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
__name(getBasePlacement2, "getBasePlacement");
function arrayFrom(value) {
  return [].slice.call(value);
}
__name(arrayFrom, "arrayFrom");
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
__name(removeUndefinedProps, "removeUndefinedProps");
function div() {
  return document.createElement("div");
}
__name(div, "div");
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
__name(isElement2, "isElement");
function isNodeList(value) {
  return isType(value, "NodeList");
}
__name(isNodeList, "isNodeList");
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
__name(isMouseEvent, "isMouseEvent");
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
__name(isReferenceElement, "isReferenceElement");
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
__name(getArrayOfElements, "getArrayOfElements");
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
__name(setTransitionDuration, "setTransitionDuration");
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
__name(setVisibilityState, "setVisibilityState");
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
__name(getOwnerDocument, "getOwnerDocument");
function isCursorOutsideInteractiveBorder(popperTreeData, event2) {
  var clientX = event2.clientX, clientY = event2.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
__name(isCursorOutsideInteractiveBorder, "isCursorOutsideInteractiveBorder");
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event2) {
    box[method](event2, listener);
  });
}
__name(updateTransitionEndListener, "updateTransitionEndListener");
function actualContains(parent, child) {
  var target2 = child;
  while (target2) {
    var _target$getRootNode;
    if (parent.contains(target2)) {
      return true;
    }
    target2 = target2.getRootNode == null ? void 0 : (_target$getRootNode = target2.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
__name(actualContains, "actualContains");
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
__name(onDocumentTouchStart, "onDocumentTouchStart");
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
__name(onDocumentMouseMove, "onDocumentMouseMove");
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
__name(onWindowBlur, "onWindowBlur");
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
__name(bindGlobalEventListeners, "bindGlobalEventListeners");
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? !!window.msCrypto : false;
function createMemoryLeakWarning(method) {
  var txt = method === "destroy" ? "n already-" : " ";
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
__name(createMemoryLeakWarning, "createMemoryLeakWarning");
function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, " ").replace(lineStartWithSpaces, "").trim();
}
__name(clean, "clean");
function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.\n  ");
}
__name(getDevMessage, "getDevMessage");
function getFormattedMessage(message) {
  return [
    getDevMessage(message),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
__name(getFormattedMessage, "getFormattedMessage");
var visitedMessages;
if (true) {
  resetVisitedMessages();
}
function resetVisitedMessages() {
  visitedMessages = /* @__PURE__ */ new Set();
}
__name(resetVisitedMessages, "resetVisitedMessages");
function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;
    visitedMessages.add(message);
    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
__name(warnWhen, "warnWhen");
function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;
    visitedMessages.add(message);
    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
__name(errorWhen, "errorWhen");
function validateTargets(targets2) {
  var didPassFalsyValue = !targets2;
  var didPassPlainObject = Object.prototype.toString.call(targets2) === "[object Object]" && !targets2.addEventListener;
  errorWhen(didPassFalsyValue, ["tippy() was passed", "`" + String(targets2) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" "));
  errorWhen(didPassPlainObject, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
__name(validateTargets, "validateTargets");
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: /* @__PURE__ */ __name(function onAfterUpdate() {
  }, "onAfterUpdate"),
  onBeforeUpdate: /* @__PURE__ */ __name(function onBeforeUpdate() {
  }, "onBeforeUpdate"),
  onCreate: /* @__PURE__ */ __name(function onCreate() {
  }, "onCreate"),
  onDestroy: /* @__PURE__ */ __name(function onDestroy() {
  }, "onDestroy"),
  onHidden: /* @__PURE__ */ __name(function onHidden() {
  }, "onHidden"),
  onHide: /* @__PURE__ */ __name(function onHide() {
  }, "onHide"),
  onMount: /* @__PURE__ */ __name(function onMount() {
  }, "onMount"),
  onShow: /* @__PURE__ */ __name(function onShow() {
  }, "onShow"),
  onShown: /* @__PURE__ */ __name(function onShown() {
  }, "onShown"),
  onTrigger: /* @__PURE__ */ __name(function onTrigger() {
  }, "onTrigger"),
  onUntrigger: /* @__PURE__ */ __name(function onUntrigger() {
  }, "onUntrigger"),
  onClickOutside: /* @__PURE__ */ __name(function onClickOutside() {
  }, "onClickOutside"),
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = /* @__PURE__ */ __name(function setDefaultProps2(partialProps) {
  if (true) {
    validateProps(partialProps, []);
  }
  var keys2 = Object.keys(partialProps);
  keys2.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
}, "setDefaultProps");
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
__name(getExtendedPassedProps, "getExtendedPassedProps");
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
__name(getDataAttributeProps, "getDataAttributeProps");
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
__name(evaluateProps, "evaluateProps");
function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var keys2 = Object.keys(partialProps);
  keys2.forEach(function(prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop);
    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function(plugin) {
        return plugin.name === prop;
      }).length === 0;
    }
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", "\n\n", "All props: https://atomiks.github.io/tippyjs/v6/all-props/\n", "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
__name(validateProps, "validateProps");
var innerHTML = /* @__PURE__ */ __name(function innerHTML2() {
  return "innerHTML";
}, "innerHTML");
function dangerouslySetInnerHTML(element, html2) {
  element[innerHTML()] = html2;
}
__name(dangerouslySetInnerHTML, "dangerouslySetInnerHTML");
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
__name(createArrowElement, "createArrowElement");
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
__name(setContent, "setContent");
function getChildren2(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
__name(getChildren2, "getChildren");
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren2(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  __name(onUpdate, "onUpdate");
  return {
    popper: popper2,
    onUpdate
  };
}
__name(render, "render");
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    isEnabled: true,
    isVisible: false,
    isDestroyed: false,
    isMounted: false,
    isShown: false
  };
  var instance = {
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (true) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  __name(getNormalizedTouchSettings, "getNormalizedTouchSettings");
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  __name(getIsCustomTouchBehavior, "getIsCustomTouchBehavior");
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  __name(getIsDefaultRenderFn, "getIsDefaultRenderFn");
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  __name(getCurrentTarget, "getCurrentTarget");
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  __name(getDocument, "getDocument");
  function getDefaultTemplateChildren() {
    return getChildren2(popper2);
  }
  __name(getDefaultTemplateChildren, "getDefaultTemplateChildren");
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  __name(getDelay, "getDelay");
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  __name(handleStyles, "handleStyles");
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  __name(invokeHook, "invokeHook");
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr2 = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr2);
      if (instance.state.isVisible) {
        node.setAttribute(attr2, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr2, nextValue);
        } else {
          node.removeAttribute(attr2);
        }
      }
    });
  }
  __name(handleAriaContentAttribute, "handleAriaContentAttribute");
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  __name(handleAriaExpandedAttribute, "handleAriaExpandedAttribute");
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  __name(cleanupInteractiveMouseListeners, "cleanupInteractiveMouseListeners");
  function onDocumentPress(event2) {
    if (currentInput.isTouch) {
      if (didTouchMove || event2.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event2.composedPath && event2.composedPath()[0] || event2.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event2]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  __name(onDocumentPress, "onDocumentPress");
  function onTouchMove() {
    didTouchMove = true;
  }
  __name(onTouchMove, "onTouchMove");
  function onTouchStart() {
    didTouchMove = false;
  }
  __name(onTouchStart, "onTouchStart");
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  __name(addDocumentPress, "addDocumentPress");
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  __name(removeDocumentPress, "removeDocumentPress");
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  __name(onTransitionedOut, "onTransitionedOut");
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  __name(onTransitionedIn, "onTransitionedIn");
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event2) {
      if (event2.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    __name(listener, "listener");
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  __name(onTransitionEnd, "onTransitionEnd");
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  __name(on, "on");
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  __name(addListeners, "addListeners");
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  __name(removeListeners, "removeListeners");
  function onTrigger2(event2) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event2) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event2;
    currentTarget = event2.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event2)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event2);
      });
    }
    if (event2.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event2);
    }
    if (event2.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event2);
    }
  }
  __name(onTrigger2, "onTrigger");
  function onMouseMove(event2) {
    var target2 = event2.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target2) || popper2.contains(target2);
    if (event2.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event2)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event2);
    }
  }
  __name(onMouseMove, "onMouseMove");
  function onMouseLeave(event2) {
    var shouldBail = isEventListenerStopped(event2) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event2);
      return;
    }
    scheduleHide(event2);
  }
  __name(onMouseLeave, "onMouseLeave");
  function onBlurOrFocusOut(event2) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event2.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event2.relatedTarget && popper2.contains(event2.relatedTarget)) {
      return;
    }
    scheduleHide(event2);
  }
  __name(onBlurOrFocusOut, "onBlurOrFocusOut");
  function isEventListenerStopped(event2) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event2.type.indexOf("touch") >= 0 : false;
  }
  __name(isEventListenerStopped, "isEventListenerStopped");
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren2(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: /* @__PURE__ */ __name(function fn2(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr2) {
            if (attr2 === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr2]) {
                box.setAttribute("data-" + attr2, "");
              } else {
                box.removeAttribute("data-" + attr2);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }, "fn")
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  __name(createPopperInstance, "createPopperInstance");
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  __name(destroyPopperInstance, "destroyPopperInstance");
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (true) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  __name(mount, "mount");
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  __name(getNestedPopperTree, "getNestedPopperTree");
  function scheduleShow(event2) {
    instance.clearDelayTimeouts();
    if (event2) {
      invokeHook("onTrigger", [instance, event2]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  __name(scheduleShow, "scheduleShow");
  function scheduleHide(event2) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event2]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event2.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  __name(scheduleHide, "scheduleHide");
  function enable() {
    instance.state.isEnabled = true;
  }
  __name(enable, "enable");
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  __name(disable, "disable");
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  __name(clearDelayTimeouts, "clearDelayTimeouts");
  function setProps(partialProps) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  __name(setProps, "setProps");
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  __name(setContent2, "setContent");
  function show() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = /* @__PURE__ */ __name(function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    }, "onFirstUpdate");
    mount();
  }
  __name(show, "show");
  function hide2() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  __name(hide2, "hide");
  function hideWithInteractivity(event2) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event2);
  }
  __name(hideWithInteractivity, "hideWithInteractivity");
  function unmount() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  __name(unmount, "unmount");
  function destroy() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
  __name(destroy, "destroy");
}
__name(createTippy, "createTippy");
function tippy(targets2, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (true) {
    validateTargets(targets2);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets2);
  if (true) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances2 = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets2) ? instances2[0] : instances2;
}
__name(tippy, "tippy");
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: /* @__PURE__ */ __name(function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }, "effect")
});
var createSingleton = /* @__PURE__ */ __name(function createSingleton2(tippyInstances, optionalProps) {
  var _optionalProps$popper;
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  if (true) {
    errorWhen(!Array.isArray(tippyInstances), ["The first argument passed to createSingleton() must be an array of", "tippy instances. The passed value was", String(tippyInstances)].join(" "));
  }
  var individualInstances = tippyInstances;
  var references = [];
  var triggerTargets = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;
  function setTriggerTargets() {
    triggerTargets = individualInstances.map(function(instance) {
      return normalizeToArray(instance.props.triggerTarget || instance.reference);
    }).reduce(function(acc, item) {
      return acc.concat(item);
    }, []);
  }
  __name(setTriggerTargets, "setTriggerTargets");
  function setReferences() {
    references = individualInstances.map(function(instance) {
      return instance.reference;
    });
  }
  __name(setReferences, "setReferences");
  function enableInstances(isEnabled) {
    individualInstances.forEach(function(instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }
  __name(enableInstances, "enableInstances");
  function interceptSetProps(singleton2) {
    return individualInstances.map(function(instance) {
      var originalSetProps2 = instance.setProps;
      instance.setProps = function(props) {
        originalSetProps2(props);
        if (instance.reference === currentTarget) {
          singleton2.setProps(props);
        }
      };
      return function() {
        instance.setProps = originalSetProps2;
      };
    });
  }
  __name(interceptSetProps, "interceptSetProps");
  function prepareInstance(singleton2, target2) {
    var index = triggerTargets.indexOf(target2);
    if (target2 === currentTarget) {
      return;
    }
    currentTarget = target2;
    var overrideProps = (overrides || []).concat("content").reduce(function(acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton2.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === "function" ? overrideProps.getReferenceClientRect : function() {
        var _references$index;
        return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
      }
    }));
  }
  __name(prepareInstance, "prepareInstance");
  enableInstances(false);
  setReferences();
  setTriggerTargets();
  var plugin = {
    fn: /* @__PURE__ */ __name(function fn2() {
      return {
        onDestroy: /* @__PURE__ */ __name(function onDestroy2() {
          enableInstances(true);
        }, "onDestroy"),
        onHidden: /* @__PURE__ */ __name(function onHidden2() {
          currentTarget = null;
        }, "onHidden"),
        onClickOutside: /* @__PURE__ */ __name(function onClickOutside2(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        }, "onClickOutside"),
        onShow: /* @__PURE__ */ __name(function onShow2(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        }, "onShow"),
        onTrigger: /* @__PURE__ */ __name(function onTrigger2(instance, event2) {
          prepareInstance(instance, event2.currentTarget);
        }, "onTrigger")
      };
    }, "fn")
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ["overrides"]), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: triggerTargets,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;
  singleton.show = function(target2) {
    originalShow();
    if (!currentTarget && target2 == null) {
      return prepareInstance(singleton, references[0]);
    }
    if (currentTarget && target2 == null) {
      return;
    }
    if (typeof target2 === "number") {
      return references[target2] && prepareInstance(singleton, references[target2]);
    }
    if (individualInstances.indexOf(target2) >= 0) {
      var ref = target2.reference;
      return prepareInstance(singleton, ref);
    }
    if (references.indexOf(target2) >= 0) {
      return prepareInstance(singleton, target2);
    }
  };
  singleton.showNext = function() {
    var first = references[0];
    if (!currentTarget) {
      return singleton.show(0);
    }
    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };
  singleton.showPrevious = function() {
    var last = references[references.length - 1];
    if (!currentTarget) {
      return singleton.show(last);
    }
    var index = references.indexOf(currentTarget);
    var target2 = references[index - 1] || last;
    singleton.show(target2);
  };
  var originalSetProps = singleton.setProps;
  singleton.setProps = function(props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };
  singleton.setInstances = function(nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function(fn2) {
      return fn2();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    interceptSetPropsCleanups = interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: triggerTargets
    });
  };
  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
}, "createSingleton");
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;

// ../../node_modules/@github/template-parts/lib/template-string-parser.js
function* parse(text) {
  let value = "";
  let tokenStart = 0;
  let open = false;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === "{" && text[i + 1] === "{" && text[i - 1] !== "\\" && !open) {
      open = true;
      if (value)
        yield { type: "string", start: tokenStart, end: i, value };
      value = "{{";
      tokenStart = i;
      i += 2;
    } else if (text[i] === "}" && text[i + 1] === "}" && text[i - 1] !== "\\" && open) {
      open = false;
      yield { type: "part", start: tokenStart, end: i + 2, value: value.slice(2).trim() };
      value = "";
      i += 2;
      tokenStart = i;
    }
    value += text[i] || "";
  }
  if (value)
    yield { type: "string", start: tokenStart, end: text.length, value };
}
__name(parse, "parse");

// ../../node_modules/@github/template-parts/lib/attribute-template-part.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _AttributeTemplatePart_setter;
var _AttributeTemplatePart_value;
var AttributeTemplatePart = class {
  constructor(setter, expression) {
    this.expression = expression;
    _AttributeTemplatePart_setter.set(this, void 0);
    _AttributeTemplatePart_value.set(this, "");
    __classPrivateFieldSet(this, _AttributeTemplatePart_setter, setter, "f");
    __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").updateParent("");
  }
  get attributeName() {
    return __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").attr.name;
  }
  get attributeNamespace() {
    return __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").attr.namespaceURI;
  }
  get value() {
    return __classPrivateFieldGet(this, _AttributeTemplatePart_value, "f");
  }
  set value(value) {
    __classPrivateFieldSet(this, _AttributeTemplatePart_value, value || "", "f");
    __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").updateParent(value);
  }
  get element() {
    return __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").element;
  }
  get booleanValue() {
    return __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").booleanValue;
  }
  set booleanValue(value) {
    __classPrivateFieldGet(this, _AttributeTemplatePart_setter, "f").booleanValue = value;
  }
};
__name(AttributeTemplatePart, "AttributeTemplatePart");
_AttributeTemplatePart_setter = /* @__PURE__ */ new WeakMap(), _AttributeTemplatePart_value = /* @__PURE__ */ new WeakMap();
var AttributeValueSetter = class {
  constructor(element, attr2) {
    this.element = element;
    this.attr = attr2;
    this.partList = [];
  }
  get booleanValue() {
    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
  }
  set booleanValue(value) {
    if (this.partList.length !== 1) {
      throw new DOMException("Operation not supported", "NotSupportedError");
    }
    ;
    this.partList[0].value = value ? "" : null;
  }
  append(part) {
    this.partList.push(part);
  }
  updateParent(partValue) {
    if (this.partList.length === 1 && partValue === null) {
      this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
    } else {
      const str = this.partList.map((s) => typeof s === "string" ? s : s.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, str);
    }
  }
};
__name(AttributeValueSetter, "AttributeValueSetter");

// ../../node_modules/@github/template-parts/lib/node-template-part.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _NodeTemplatePart_parts;
var NodeTemplatePart = class {
  constructor(node, expression) {
    this.expression = expression;
    _NodeTemplatePart_parts.set(this, void 0);
    __classPrivateFieldSet2(this, _NodeTemplatePart_parts, [node], "f");
    node.textContent = "";
  }
  get value() {
    return __classPrivateFieldGet2(this, _NodeTemplatePart_parts, "f").map((node) => node.textContent).join("");
  }
  set value(string) {
    this.replace(string);
  }
  get previousSibling() {
    return __classPrivateFieldGet2(this, _NodeTemplatePart_parts, "f")[0].previousSibling;
  }
  get nextSibling() {
    return __classPrivateFieldGet2(this, _NodeTemplatePart_parts, "f")[__classPrivateFieldGet2(this, _NodeTemplatePart_parts, "f").length - 1].nextSibling;
  }
  replace(...nodes) {
    const parts = nodes.map((node) => {
      if (typeof node === "string")
        return new Text(node);
      return node;
    });
    if (!parts.length)
      parts.push(new Text(""));
    __classPrivateFieldGet2(this, _NodeTemplatePart_parts, "f")[0].before(...parts);
    for (const part of __classPrivateFieldGet2(this, _NodeTemplatePart_parts, "f"))
      part.remove();
    __classPrivateFieldSet2(this, _NodeTemplatePart_parts, parts, "f");
  }
};
__name(NodeTemplatePart, "NodeTemplatePart");
_NodeTemplatePart_parts = /* @__PURE__ */ new WeakMap();

// ../../node_modules/@github/template-parts/lib/processors.js
function createProcessor(processPart2) {
  return {
    createCallback(instance, parts, params) {
      this.processCallback(instance, parts, params);
    },
    processCallback(_2, parts, params) {
      var _a2;
      if (typeof params !== "object" || !params)
        return;
      for (const part of parts) {
        if (part.expression in params) {
          const value = (_a2 = params[part.expression]) !== null && _a2 !== void 0 ? _a2 : "";
          processPart2(part, value);
        }
      }
    }
  };
}
__name(createProcessor, "createProcessor");
function processPropertyIdentity(part, value) {
  part.value = String(value);
}
__name(processPropertyIdentity, "processPropertyIdentity");
function processBooleanAttribute(part, value) {
  if (typeof value === "boolean" && part instanceof AttributeTemplatePart && typeof part.element[part.attributeName] === "boolean") {
    part.booleanValue = value;
    return true;
  }
  return false;
}
__name(processBooleanAttribute, "processBooleanAttribute");
var propertyIdentity = createProcessor(processPropertyIdentity);
var propertyIdentityOrBooleanAttribute = createProcessor((part, value) => {
  processBooleanAttribute(part, value) || processPropertyIdentity(part, value);
});

// ../../node_modules/@github/template-parts/lib/template-instance.js
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f2) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function(receiver, state, kind, f2) {
  if (kind === "a" && !f2)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
var _TemplateInstance_processor;
var _TemplateInstance_parts;
function* collectParts(el) {
  const walker = el.ownerDocument.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false);
  let node;
  while (node = walker.nextNode()) {
    if (node instanceof Element && node.hasAttributes()) {
      for (let i = 0; i < node.attributes.length; i += 1) {
        const attr2 = node.attributes.item(i);
        if (attr2 && attr2.value.includes("{{")) {
          const valueSetter = new AttributeValueSetter(node, attr2);
          for (const token of parse(attr2.value)) {
            if (token.type === "string") {
              valueSetter.append(token.value);
            } else {
              const part = new AttributeTemplatePart(valueSetter, token.value);
              valueSetter.append(part);
              yield part;
            }
          }
        }
      }
    } else if (node instanceof Text && node.textContent && node.textContent.includes("{{")) {
      for (const token of parse(node.textContent)) {
        if (token.end < node.textContent.length)
          node.splitText(token.end);
        if (token.type === "part")
          yield new NodeTemplatePart(node, token.value);
        break;
      }
    }
  }
}
__name(collectParts, "collectParts");
var TemplateInstance = class extends DocumentFragment {
  constructor(template, params, processor = propertyIdentity) {
    var _a2, _b;
    super();
    _TemplateInstance_processor.set(this, void 0);
    _TemplateInstance_parts.set(this, void 0);
    if (Object.getPrototypeOf(this) !== TemplateInstance.prototype) {
      Object.setPrototypeOf(this, TemplateInstance.prototype);
    }
    this.appendChild(template.content.cloneNode(true));
    __classPrivateFieldSet3(this, _TemplateInstance_parts, Array.from(collectParts(this)), "f");
    __classPrivateFieldSet3(this, _TemplateInstance_processor, processor, "f");
    (_b = (_a2 = __classPrivateFieldGet3(this, _TemplateInstance_processor, "f")).createCallback) === null || _b === void 0 ? void 0 : _b.call(_a2, this, __classPrivateFieldGet3(this, _TemplateInstance_parts, "f"), params);
  }
  update(params) {
    __classPrivateFieldGet3(this, _TemplateInstance_processor, "f").processCallback(this, __classPrivateFieldGet3(this, _TemplateInstance_parts, "f"), params);
  }
};
__name(TemplateInstance, "TemplateInstance");
_TemplateInstance_processor = /* @__PURE__ */ new WeakMap(), _TemplateInstance_parts = /* @__PURE__ */ new WeakMap();

// ../../node_modules/@github/jtml/lib/directive.js
var directives = /* @__PURE__ */ new WeakSet();
function isDirective(directiveCallback) {
  return directives.has(directiveCallback);
}
__name(isDirective, "isDirective");
function processDirective(part, value) {
  if (isDirective(value)) {
    value(part);
    return true;
  }
  return false;
}
__name(processDirective, "processDirective");
function directive(directiveFactory) {
  return (...values) => {
    const callback = directiveFactory(...values);
    directives.add(callback);
    return callback;
  };
}
__name(directive, "directive");

// ../../node_modules/@github/jtml/lib/events.js
var eventListeners = /* @__PURE__ */ new WeakMap();
var EventHandler = class {
  constructor(element, type) {
    this.element = element;
    this.type = type;
    this.element.addEventListener(this.type, this);
    eventListeners.get(this.element).set(this.type, this);
  }
  set(listener) {
    if (typeof listener == "function") {
      this.handleEvent = listener.bind(this.element);
    } else if (typeof listener === "object" && typeof listener.handleEvent === "function") {
      this.handleEvent = listener.handleEvent.bind(listener);
    } else {
      this.element.removeEventListener(this.type, this);
      eventListeners.get(this.element).delete(this.type);
    }
  }
  static for(part) {
    if (!eventListeners.has(part.element))
      eventListeners.set(part.element, /* @__PURE__ */ new Map());
    const type = part.attributeName.slice(2);
    const elementListeners = eventListeners.get(part.element);
    if (elementListeners.has(type))
      return elementListeners.get(type);
    return new EventHandler(part.element, type);
  }
};
__name(EventHandler, "EventHandler");
function processEvent(part, value) {
  if (part instanceof AttributeTemplatePart && part.attributeName.startsWith("on")) {
    EventHandler.for(part).set(value);
    part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
    return true;
  }
  return false;
}
__name(processEvent, "processEvent");

// ../../node_modules/@github/jtml/lib/html.js
function processSubTemplate(part, value) {
  if (value instanceof TemplateResult && part instanceof NodeTemplatePart) {
    value.renderInto(part);
    return true;
  }
  return false;
}
__name(processSubTemplate, "processSubTemplate");
function processDocumentFragment(part, value) {
  if (value instanceof DocumentFragment && part instanceof NodeTemplatePart) {
    if (value.childNodes.length)
      part.replace(...value.childNodes);
    return true;
  }
  return false;
}
__name(processDocumentFragment, "processDocumentFragment");
function isIterable(value) {
  return typeof value === "object" && Symbol.iterator in value;
}
__name(isIterable, "isIterable");
function processIterable(part, value) {
  if (!isIterable(value))
    return false;
  if (part instanceof NodeTemplatePart) {
    const nodes = [];
    for (const item of value) {
      if (item instanceof TemplateResult) {
        const fragment = document.createDocumentFragment();
        item.renderInto(fragment);
        nodes.push(...fragment.childNodes);
      } else if (item instanceof DocumentFragment) {
        nodes.push(...item.childNodes);
      } else {
        nodes.push(String(item));
      }
    }
    if (nodes.length)
      part.replace(...nodes);
    return true;
  } else {
    part.value = Array.from(value).join(" ");
    return true;
  }
}
__name(processIterable, "processIterable");
function processPart(part, value) {
  processDirective(part, value) || processBooleanAttribute(part, value) || processEvent(part, value) || processSubTemplate(part, value) || processDocumentFragment(part, value) || processIterable(part, value) || processPropertyIdentity(part, value);
}
__name(processPart, "processPart");
var templates = /* @__PURE__ */ new WeakMap();
var renderedTemplates = /* @__PURE__ */ new WeakMap();
var renderedTemplateInstances = /* @__PURE__ */ new WeakMap();
var TemplateResult = class {
  constructor(strings, values, processor) {
    this.strings = strings;
    this.values = values;
    this.processor = processor;
  }
  get template() {
    if (templates.has(this.strings)) {
      return templates.get(this.strings);
    } else {
      const template = document.createElement("template");
      const end2 = this.strings.length - 1;
      template.innerHTML = this.strings.reduce((str, cur, i) => str + cur + (i < end2 ? `{{ ${i} }}` : ""), "");
      templates.set(this.strings, template);
      return template;
    }
  }
  renderInto(element) {
    const template = this.template;
    if (renderedTemplates.get(element) !== template) {
      renderedTemplates.set(element, template);
      const instance = new TemplateInstance(template, this.values, this.processor);
      renderedTemplateInstances.set(element, instance);
      if (element instanceof NodeTemplatePart) {
        element.replace(...instance.children);
      } else {
        element.appendChild(instance);
      }
      return;
    }
    renderedTemplateInstances.get(element).update(this.values);
  }
};
__name(TemplateResult, "TemplateResult");
var defaultProcessor = createProcessor(processPart);
function html(strings, ...values) {
  return new TemplateResult(strings, values, defaultProcessor);
}
__name(html, "html");
function render2(result, element) {
  result.renderInto(element);
}
__name(render2, "render");

// ../../node_modules/@github/jtml/lib/until.js
var untils = /* @__PURE__ */ new WeakMap();
var until = directive((...promises) => (part) => {
  if (!untils.has(part))
    untils.set(part, { i: promises.length });
  const state = untils.get(part);
  for (let i = 0; i < promises.length; i += 1) {
    if (promises[i] instanceof Promise) {
      Promise.resolve(promises[i]).then((value) => {
        if (i < state.i) {
          state.i = i;
          processPart(part, value);
        }
      });
    } else if (i <= state.i) {
      state.i = i;
      processPart(part, promises[i]);
    }
  }
});

// ../../node_modules/@github/jtml/lib/unsafe-html.js
var unsafeHTML = directive((value) => (part) => {
  if (!(part instanceof NodeTemplatePart))
    return;
  const template = document.createElement("template");
  template.innerHTML = value;
  const fragment = document.importNode(template.content, true);
  part.replace(...fragment.childNodes);
});

// ../../packages/elements/dist/index.js
var import_interactjs2 = __toESM(require_interact_min(), 1);
var import_interactjs3 = __toESM(require_interact_min(), 1);
var ee = Object.defineProperty;
var Ke = Object.getOwnPropertyDescriptor;
var p2 = /* @__PURE__ */ __name((s, t) => ee(s, "name", { value: t, configurable: true }), "p");
var l2 = /* @__PURE__ */ __name((s, t, e, i) => {
  for (var n = i > 1 ? void 0 : i ? Ke(t, e) : t, r = s.length - 1, o2; r >= 0; r--)
    (o2 = s[r]) && (n = (i ? o2(t, e, n) : o2(n)) || n);
  return i && n && ee(t, e, n), n;
}, "l");
function g(s) {
  class t extends s {
    get active() {
      return this.hasAttribute("data-active");
    }
    set active(i) {
      i ? (this.setAttribute("data-active", ""), this.dispatchEvent(new Event("operation-active", { bubbles: true }))) : this.removeAttribute("data-active");
    }
  }
  __name(t, "t");
  return p2(t, "ActivateableMixinClass"), t;
}
__name(g, "g");
p2(g, "ActivateableMixin");
var nt = p2((s) => typeof s == "object" && s !== null && typeof s.angle == "string" && typeof s.reducedAngle == "string", "isAngleable");
function Q2(s) {
  class t extends s {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(t, "t");
  return p2(t, "AngleableMixinClass"), l2([attr], t.prototype, "angle", 2), l2([attr], t.prototype, "reducedAngle", 2), t;
}
__name(Q2, "Q");
p2(Q2, "AngleableMixin");
var rt = p2((s) => typeof s == "object" && s !== null && typeof s.controls == "object", "isControllable");
function G2(s) {
  class t extends s {
    set controls(i) {
      this.setAttribute("data-controls", i.sort().join());
    }
    get controls() {
      let i = this.getAttribute("data-controls");
      return i === null ? [] : i === "" ? [] : i.split(",").map((n) => parseInt(n)).sort();
    }
    get isControlled() {
      return this.controls.length > 0;
    }
  }
  __name(t, "t");
  return p2(t, "ControllableMixinClass"), t;
}
__name(G2, "G");
p2(G2, "ControllableMixin");
function S(s) {
  class t extends s {
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
  __name(t, "t");
  return p2(t, "DisableableMixinClass"), l2([attr], t.prototype, "disabled", 2), t;
}
__name(S, "S");
p2(S, "DisableableMixin");
var Et = p2((s) => s != null && s.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var It = p2((s) => s != null && s.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function v(s) {
  class t extends s {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = createMachine({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, UNGRAB: [{ target: "grabbable", actions: ["unGrab"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["unGrab"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "droppedOnCircuitDropzone" }, { target: "deleted", cond: "trashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, import_interactjs.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.unGrab.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let n = this.dropzone;
        Et(n) ? this.snappedDropzone = n : this.snappedDropzone = null;
      }, grab: (i, n) => {
        n.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), It(this.dropzone) && (this.snapped = false, this.moveByOffset(n.x, n.y)));
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
        (0, import_interactjs.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Et(this.dropzone), isOnPaletteDropzone: () => It(this.dropzone), droppedOnCircuitDropzone: () => this.snapped && Et(this.dropzone), trashed: () => !this.snapped } });
    }
    set draggable(i) {
      this.maybeInitStateMachine(), i ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    get dropzone() {
      let i = this.parentElement;
      return m.notNull(i), !It(i) && !Et(i) ? null : i;
    }
    maybeInitStateMachine() {
      this.draggableService === void 0 && (this.draggableService = interpret(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${c(i.value)}`);
      }).start());
    }
    set snapTargets(i) {
      (0, import_interactjs.default)(this).draggable({ modifiers: [import_interactjs.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return this.offsetWidth;
    }
    moveEventListener(i) {
      let n = i.modifiers[0];
      if (n.inRange) {
        let r = n.target.source;
        this.dispatchEvent(new CustomEvent("operation-in-snap-range", { detail: { snapTargetInfo: r }, bubbles: true })), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
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
    move(i, n) {
      let r = this.operationX + i, o2 = this.operationY + n;
      this.moveTo(r, o2);
    }
    moveTo(i, n) {
      this.operationX = i, this.operationY = n, this.style.transform = `translate(${i}px, ${n}px)`;
    }
    moveByOffset(i, n) {
      let r = i - this.clientWidth / 2, o2 = n - this.clientHeight / 2;
      this.move(r, o2);
    }
  }
  __name(t, "t");
  return p2(t, "DraggableMixinClass"), l2([attr], t.prototype, "operationX", 2), l2([attr], t.prototype, "operationY", 2), l2([attr], t.prototype, "grabbed", 2), l2([attr], t.prototype, "dragging", 2), l2([attr], t.prototype, "snapped", 2), l2([attr], t.prototype, "bit", 2), l2([attr], t.prototype, "debugDraggable", 2), t;
}
__name(v, "v");
p2(v, "DraggableMixin");
var at = p2((s) => typeof s == "object" && s !== null && typeof s.flag == "string", "isFlaggable");
function ne(s) {
  class t extends s {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(t, "t");
  return p2(t, "FlaggableMixinClass"), l2([attr], t.prototype, "flag", 2), t;
}
__name(ne, "ne");
p2(ne, "FlaggableMixin");
var At = p2((s) => typeof s == "object" && s !== null && typeof s.initHelp == "function", "isHelpable");
function E(s) {
  class t extends s {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = createMachine({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = tippy_esm_default(this, { allowHTML: true, animation: false, arrow: ROUND_ARROW + ROUND_ARROW, delay: 0, placement: "auto", theme: "qni", onShow(n) {
          n.setContent(i);
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
      this.helpableService = interpret(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${c(i.value)}`);
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
      let n = document.getElementById(i);
      return n === null ? null : n.content.cloneNode(true);
    }
  }
  __name(t, "t");
  return p2(t, "HelpableMixinClass"), l2([attr], t.prototype, "help", 2), l2([attr], t.prototype, "helpId", 2), l2([attr], t.prototype, "debugHelpable", 2), t;
}
__name(E, "E");
p2(E, "HelpableMixin");
function x(s) {
  class t extends s {
    get hoverable() {
      return this.hasAttribute("data-hoverable");
    }
    set hoverable(i) {
      i ? this.setAttribute("data-hoverable", "") : this.removeAttribute("data-hoverable");
    }
  }
  __name(t, "t");
  return p2(t, "HoverableMixinClass"), t;
}
__name(x, "x");
p2(x, "HoverableMixin");
function C(s) {
  class t extends s {
    constructor() {
      super(...arguments);
      this.icon = "";
    }
    iconHtml(i) {
      return html`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      if (this.icon === "")
        return html([i]);
      let n = document.getElementById(this.icon);
      return n === null ? null : n.content.cloneNode(true);
    }
    get iconStyle() {
      return html`<style>
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
  __name(t, "t");
  return p2(t, "IconableMixinClass"), l2([attr], t.prototype, "icon", 2), t;
}
__name(C, "C");
p2(C, "IconableMixin");
var Z = p2((s) => typeof s == "object" && s !== null && typeof s.if == "string", "isIfable");
function I2(s) {
  class t extends s {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(t, "t");
  return p2(t, "IfableMixinClass"), l2([attr], t.prototype, "if", 2), t;
}
__name(I2, "I");
p2(I2, "IfableMixin");
var oe = p2((s) => typeof s == "object" && s !== null && typeof s.initMenu == "function", "isMenuable");
function y(s) {
  class t extends s {
    initMenu() {
      this._tippy || (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = tippy_esm_default(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var n, r, o2, a;
        (n = this.ifTooltip) == null || n.hide(), (r = this.angleTooltip) == null || r.hide(), (o2 = this.flagTooltip) == null || o2.hide(), (a = this.deleteTooltip) == null || a.hide();
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
      m.notNull(i);
      let n = i.content.cloneNode(true), r = document.createDocumentFragment();
      return render2(html`${n}`, r), r;
    }
    initMenuItems(i) {
      if (Z(i.reference)) {
        let r = i.popper.querySelector("button[data-operation-menu-if]");
        m.notNull(r), r.disabled = false, this.ifTooltip = r._tippy, this.ifTooltip === void 0 && (this.ifTooltip = tippy_esm_default(r, { animation: false, content: "Set `if' Conditional" }), r.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (nt(i.reference)) {
        let r = i.popper.querySelector("button[data-operation-menu-angle]");
        m.notNull(r), r.disabled = false, this.angleTooltip = r._tippy, this.angleTooltip === void 0 && (this.angleTooltip = tippy_esm_default(r, { animation: false, content: "Change Angle" }), r.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (at(i.reference)) {
        let r = i.popper.querySelector("button[data-operation-menu-flag]");
        m.notNull(r), r.disabled = false, this.flagTooltip = r._tippy, this.flagTooltip === void 0 && (this.flagTooltip = tippy_esm_default(r, { animation: false, content: "Set Condifitonal Flag" }), r.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let n = i.popper.querySelector("[data-operation-menu-delete]");
      m.notNull(n), this.deleteTooltip = n._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = tippy_esm_default(n, { animation: false, content: "Delete" })), n.addEventListener("mousedown", this.destroyMenu.bind(this)), n.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  __name(t, "t");
  return p2(t, "MenuableMixinClass"), t;
}
__name(y, "y");
p2(y, "MenuableMixin");
var A2 = /* @__PURE__ */ __name(class extends y(E(v(g(x(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Re;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (m.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let t = this._tippy;
    t && t.destroy();
    let e = this.blochInspectorPopupContent();
    tippy_esm_default(this, { allowHTML: true, animation: false, arrow: ROUND_ARROW + ROUND_ARROW, delay: 0, placement: "auto", theme: "qni", onShow(n) {
      n.setContent(e);
    } }).show();
  }
  blochInspectorPopupContent() {
    let t = document.createDocumentFragment();
    return render2(html`
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
      `, t), t;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let t = this._tippy;
    t == null || t.destroy();
  }
  attributeChangedCallback(t, e, i) {
    !this.body || e !== i && i !== null && (t === "data-x" && (this.x = parseFloat(i)), t === "data-y" && (this.y = parseFloat(i)), t === "data-z" && (this.z = parseFloat(i)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let t = p2((i) => html`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), e = p2((i, n) => html`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${n}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    render2(html`<style>
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
                  ${t(0)} ${t(20)} ${t(40)} ${t(60)}
                  ${t(80)} ${t(100)} ${t(120)} ${t(140)}
                  ${t(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${e(0, "Y")} ${e(20, "Y")} ${e(40, "Y")}
                  ${e(60, "Y")} ${e(80, "Y")} ${e(100, "Y")}
                  ${e(120, "Y")} ${e(140, "Y")} ${e(160, "Y")}
                  ${e(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Re}"`;
  }
  updateBlochVector() {
    let t = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${t / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${t / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let e = this._tippy;
    e == null || e.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let t = this.getAttribute("data-d");
    return m.notNull(t), parseFloat(t);
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
    return m.notNull(t), parseFloat(t);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(t) {
    this.setAttribute("data-theta", t.toString());
  }
  get theta() {
    let t = this.getAttribute("data-theta");
    return m.notNull(t), parseFloat(t);
  }
  thetaRadian() {
    let t = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * t / Math.PI;
  }
  forceSigned(t, e = 4) {
    return (t >= 0 ? "+" : "") + t.toFixed(e);
  }
}, "A");
p2(A2, "BlochDisplayElement"), l2([target], A2.prototype, "body", 2), l2([target], A2.prototype, "vectorLine", 2), l2([target], A2.prototype, "vectorEnd", 2), l2([target], A2.prototype, "vector", 2), l2([targets], A2.prototype, "vectorEndCircles", 2), l2([attr], A2.prototype, "x", 2), l2([attr], A2.prototype, "y", 2), l2([attr], A2.prototype, "z", 2);
controller(A2);
var pe = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var R2 = /* @__PURE__ */ __name(class extends y(E(v(S(C(g(x(HTMLElement))))))) {
  get operationType() {
    return Fe;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(pe)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Fe}"`;
  }
}, "R");
p2(R2, "ControlGateElement");
controller(R2);
var de2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var N2 = /* @__PURE__ */ __name(class extends y(E(I2(G2(v(S(C(g(x(HTMLElement))))))))) {
  get operationType() {
    return le;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(de2)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${le}<${this.if}"` : `"${le}"`;
  }
}, "N");
p2(N2, "HGateElement");
controller(N2);
var ue = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var k = /* @__PURE__ */ __name(class extends y(E(ne(v(C(g(x(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ve;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">
        ${this.iconHtml(ue)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ve}"` : `"${ve}>${this.flag}"`;
  }
}, "k");
p2(k, "MeasurementGateElement"), l2([attr], k.prototype, "value", 2);
controller(k);
var he = `<svg
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
var L = /* @__PURE__ */ __name(class extends y(E(I2(G2(Q2(v(S(C(g(x(HTMLElement)))))))))) {
  get operationType() {
    return be;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(he)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${be}"` : `"${be}(${this.angle.replace("/", "_")})"`;
  }
}, "L");
p2(L, "PhaseGateElement");
controller(L);
var me = `<svg
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
var P = /* @__PURE__ */ __name(class extends y(E(I2(G2(v(S(C(g(x(HTMLElement))))))))) {
  get operationType() {
    return Se;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(me)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Se}<${this.if}"` : `"${Se}"`;
  }
}, "P");
p2(P, "RnotGateElement");
controller(P);
var be2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var H2 = /* @__PURE__ */ __name(class extends y(E(I2(G2(Q2(v(S(C(g(x(HTMLElement)))))))))) {
  get operationType() {
    return ke;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(be2)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ke}"` : `"${ke}(${this.angle.replace("/", "_")})"`;
  }
}, "H");
p2(H2, "RxGateElement");
controller(H2);
var fe2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var B = /* @__PURE__ */ __name(class extends y(E(I2(G2(Q2(v(S(C(g(x(HTMLElement)))))))))) {
  get operationType() {
    return Ce;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(fe2)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ce}"` : `"${Ce}(${this.angle.replace("/", "_")})"`;
  }
}, "B");
p2(B, "RyGateElement");
controller(B);
var ge = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var $ = /* @__PURE__ */ __name(class extends y(E(I2(G2(Q2(v(S(C(g(x(HTMLElement)))))))))) {
  get operationType() {
    return Ie;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(ge)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ie}"` : `"${Ie}(${this.angle.replace("/", "_")})"`;
  }
}, "$");
p2($, "RzGateElement");
controller($);
var ve2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var U = /* @__PURE__ */ __name(class extends y(E(G2(v(S(C(g(x(HTMLElement)))))))) {
  get operationType() {
    return Me;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(ve2)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Me}"`;
  }
}, "U");
p2(U, "SwapGateElement");
controller(U);
var xe2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var F2 = /* @__PURE__ */ __name(class extends y(E(I2(G2(v(S(C(g(x(HTMLElement))))))))) {
  get operationType() {
    return xe;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(xe2)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${xe}<${this.if}"` : `"${xe}"`;
  }
}, "F");
p2(F2, "TGateElement");
controller(F2);
var ye2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var D2 = /* @__PURE__ */ __name(class extends y(E(v(C(g(x(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return qe;
      case "1":
        return De;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">
        ${this.iconHtml(ye2)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "D");
p2(D2, "WriteGateElement"), l2([attr], D2.prototype, "value", 2);
controller(D2);
var Ce2 = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var W2 = /* @__PURE__ */ __name(class extends y(E(I2(G2(v(S(C(g(x(HTMLElement))))))))) {
  get operationType() {
    return fe;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(Ce2)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${fe}<${this.if}"` : `"${fe}"`;
  }
}, "W");
p2(W2, "XGateElement");
controller(W2);
var Te = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var V2 = /* @__PURE__ */ __name(class extends y(E(I2(G2(v(S(C(g(x(HTMLElement))))))))) {
  get operationType() {
    return de;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(Te)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${de}<${this.if}"` : `"${de}"`;
  }
}, "V");
p2(V2, "YGateElement");
controller(V2);
var we = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Y = /* @__PURE__ */ __name(class extends y(E(I2(G2(v(S(C(g(x(HTMLElement))))))))) {
  get operationType() {
    return ye;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    render2(html`<div part="body">${this.iconHtml(we)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ye}<${this.if}"` : `"${ye}"`;
  }
}, "Y");
p2(Y, "ZGateElement");
controller(Y);
var O2 = p2((s) => s instanceof N2 || s instanceof W2 || s instanceof V2 || s instanceof Y || s instanceof L || s instanceof F2 || s instanceof P || s instanceof H2 || s instanceof B || s instanceof $ || s instanceof U || s instanceof R2 || s instanceof A2 || s instanceof D2 || s instanceof k, "isOperation");
var Se2 = p2((s) => s != null && s instanceof N2, "isHGateElement");
var Ge = p2((s) => s != null && s instanceof W2, "isXGateElement");
var Oe = p2((s) => s != null && s instanceof V2, "isYGateElement");
var Ie2 = p2((s) => s != null && s instanceof Y, "isZGateElement");
var bt = p2((s) => s != null && s instanceof L, "isPhaseGateElement");
var ze = p2((s) => s != null && s instanceof F2, "isTGateElement");
var Ae = p2((s) => s != null && s instanceof P, "isRnotGateElement");
var Tt = p2((s) => s != null && s instanceof H2, "isRxGateElement");
var wt = p2((s) => s != null && s instanceof B, "isRyGateElement");
var St = p2((s) => s != null && s instanceof $, "isRzGateElement");
var _e = p2((s) => s != null && s instanceof U, "isSwapGateElement");
var Ft = p2((s) => s != null && s instanceof R2, "isControlGateElement");
var Me2 = p2((s) => s != null && s instanceof A2, "isBlochDisplayElement");
var pl = p2((s) => s != null && s instanceof D2, "isWriteGateElement");
var qe2 = p2((s) => s != null && s instanceof k, "isMeasurementGateElement");
function Re2(s) {
  return /^-?\d+$/.test(s);
}
__name(Re2, "Re");
p2(Re2, "isNumeric");
var Wt = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    render2(html`<slot></slot>`, this.shadowRoot);
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
    return m.notNull(t), t;
  }
  initPopup() {
    this.popup = tippy_esm_default(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(t) {
    let e = t.target;
    !this.popup.popper.contains(e) && !this.popup.reference.contains(e) && !O2(e) && this.popup.hide();
  }
  get popupContent() {
    let t = document.querySelector("#operation-inspector-template");
    m.notNull(t);
    let e = t.content.cloneNode(true), i = document.createDocumentFragment();
    return render2(html`${e}`, i), i;
  }
}, "Wt");
p2(Wt, "InspectorButtonElement");
controller(Wt);
var Vt = p2((s) => s !== null && s instanceof K, "isAngleSliderElement");
var K = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = createMachine({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new d("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (t, e) => {
      e.type === "SET_ANGLE" && (this.denominator = X(this.angle));
    }, setAngleInRadian: (t, e) => {
      if (e.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (t, e) => {
      if (e.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(V(this.angle));
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
  attributeChangedCallback(t, e, i) {
    e !== i && i !== null && (t === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), t === "data-denominator" && this.angleSliderService !== void 0 && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.angleSliderService = interpret(this.angleSliderMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${c(t.value)}`);
    }).start(), this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, import_interactjs2.default)(this).unset();
  }
  update() {
    render2(html`<style>
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
    (0, import_interactjs2.default)(this).draggable({ origin: "self", modifiers: [import_interactjs2.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(t) {
    let e = import_interactjs2.default.getElementRect(t.target).width, i = t.pageX / e;
    this.left = i;
    let n = this.proportionToRadian(i);
    this.setAttribute("data-radian", n.toString());
    let [, r] = this.findSnapAngle(n);
    this.angle !== r && (this.angle = r);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let t = -2 * this.denominator, e = 2 * this.denominator, i = new Array(e - t + 1).fill(null).map((n, r) => r + t);
    this.snapAngles = {};
    for (let n of i)
      this.denominator === 1 ? n === 0 ? this.snapAngles[0] = "0" : n === 1 ? this.snapAngles[Math.PI] = "\u03C0" : n === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[n * Math.PI] = `${n}\u03C0` : n === 0 ? this.snapAngles[0] = "0" : n === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : n === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[n * Math.PI / this.denominator] = `${n}\u03C0/${this.denominator}`;
  }
  findSnapAngle(t) {
    let e = null, i = null, n = null;
    for (let r in this.snapAngles) {
      let o2 = Math.abs(parseFloat(r) - t);
      (e === null || o2 < e) && (e = o2, i = parseFloat(r), n = this.snapAngles[r]);
    }
    return m.notNull(i), m.notNull(n), [i, n];
  }
  proportionToRadian(t) {
    return (t - 0.5) * Math.PI * 4;
  }
  set left(t) {
    this.style.paddingLeft = `${t * 100}%`;
  }
}, "K");
p2(K, "AngleSliderElement"), l2([attr], K.prototype, "angle", 2), l2([attr], K.prototype, "radian", 2), l2([attr], K.prototype, "denominator", 2), l2([attr], K.prototype, "disabled", 2), l2([attr], K.prototype, "debug", 2);
controller(K);
var M2 = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return J(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(t) {
    if (this.clear(), this.disableAllPanes(), Z(t) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = t.if), nt(t)) {
      let e = X(t.angle);
      bt(t) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Tt(t) || wt(t) || St(t)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = t.angle, this.backupCurrentPhi(), this.angleSlider.angle = t.angle, this.denominatorInput.value = e.toString(), this.denominatorLabel.textContent = e.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = t.reducedAngle !== "";
    }
    at(t) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = t.flag);
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
    render2(html`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(t) {
    let e = t.target;
    if (!Vt(e))
      throw new Error(`${e} isn't an angle-slider`);
    this.angleInput.value = e.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(t) {
    let e = t.target;
    if (!Vt(e))
      throw new Error(`${e} isn't an angle-slider`);
    this.angleInput.value = e.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let t = this.angleInput.getAttribute("data-original-value");
    m.notNull(t), this.angleInput.value = t;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let t = this.angleInput.value;
    if (Q(t)) {
      let e, i = X(t);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), W(t, "-2\u03C0") ? (e = `-${i * 2}\u03C0/${i}`, this.angleInput.value = e) : H(t, "2\u03C0") ? (e = `${i * 2}\u03C0/${i}`, this.angleInput.value = e) : e = t, this.backupCurrentPhi(), this.angleSlider.angle = e, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    m.notNull(t), this.denominatorInput.value = t, this.denominatorLabel.textContent = t;
  }
  changeDenominator() {
    let t = this.denominatorInput.value;
    Re2(t) && parseInt(t) > 1 ? (this.denominatorLabel.textContent = t, this.angleSlider.denominator = parseInt(t), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "M");
p2(M2, "OperationInspectorElement"), l2([target], M2.prototype, "ifInput", 2), l2([target], M2.prototype, "angleInputLabel", 2), l2([target], M2.prototype, "angleInput", 2), l2([target], M2.prototype, "angleSlider", 2), l2([target], M2.prototype, "denominatorInput", 2), l2([target], M2.prototype, "denominatorVariableLabel", 2), l2([target], M2.prototype, "denominatorLabel", 2), l2([target], M2.prototype, "reduceAngleFractionCheckbox", 2), l2([target], M2.prototype, "flagInput", 2), l2([attr], M2.prototype, "conditionalGatePaneDisabled", 2), l2([attr], M2.prototype, "anglePaneDisabled", 2), l2([attr], M2.prototype, "conditionalFlagPaneDisabled", 2);
controller(M2);
var j = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "";
    this.magnitudes = "1.0";
    this.phases = "";
    this.multiQubits = false;
    this.showKets = false;
  }
  setAmplitudes(t) {
    let e = this.qubitCircles;
    for (let [i, n] of Object.entries(t)) {
      let r = e[parseInt(i)];
      m.notNull(r);
      let o2 = h.from(n);
      r.setAttribute("data-amplitude-real", o2.real.toString()), r.setAttribute("data-amplitude-imag", o2.imag.toString());
      let a = o2.abs();
      if (this.setRoundedMagnitude(r, a), a === 0)
        continue;
      let d2 = o2.phase() / Math.PI * 180;
      this.setRoundedPhase(r, d2);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initQubitCirclePopup(this.qubitCircles), this.hasAttribute("data-multi-qubits") && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()));
  }
  dispatchLoadEvent() {
    this.dispatchEvent(new Event("circle-notation.load", { bubbles: true }));
  }
  attributeChangedCallback(t, e, i) {
    this.shadowRoot !== null && e !== i && t === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let t = { root: this, threshold: [0, 0.2] }, e = p2((n) => {
      for (let r of n) {
        let o2 = r.target;
        r.intersectionRatio >= 0.2 ? (o2.setAttribute("data-targets", "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : r.intersectionRatio === 0 && o2.setAttribute("data-targets", "circle-notation.qubitCircleGroups");
      }
    }, "callback"), i = new IntersectionObserver(e, t);
    for (let n of this.qubitCircleGroups)
      i.observe(n);
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  get visibleQubitCircleKets() {
    let t = 2 ** this.qubitCount;
    return this.visibleQubitCircles.map((e) => parseInt(e.getAttribute("data-ket"))).filter((e) => e < t);
  }
  get visibleQubitCircles() {
    let t = this.visibleQubitCircleGroups.map((e) => Array.from(e.querySelectorAll(".qubit-circle")));
    return [].concat(...t);
  }
  update() {
    render2(html`<style>
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
    for (let [t, e] of (this.getAttribute("data-magnitudes") || "1.0").split(",").entries())
      this.setRoundedMagnitude(this.qubitCircles[t], parseFloat(e));
    for (let [t, e] of (this.getAttribute("data-phases") || "").split(",").entries()) {
      let i = this.qubitCircles[t], n = e ? parseFloat(e) : 0;
      this.setRoundedPhase(i, n);
      let r = i.querySelector(".qubit-circle__phase");
      r.style.transform = `rotate(${-n}deg)`;
    }
  }
  setRoundedMagnitude(t, e) {
    if (t === null || t === void 0)
      return;
    let i = Math.round(e * 100);
    i = i < 10 ? i === 0 ? 0 : 10 : Math.round(i / 10) * 10, i = i / 100, t.setAttribute("data-magnitude", e.toString()), t.setAttribute("data-rounded-magnitude", i.toString());
  }
  setRoundedPhase(t, e) {
    if (t === null || t === void 0)
      return;
    let i = Math.round(e / 10) * 10;
    i < 0 && (i = 360 + i), t.setAttribute("data-phase", e.toString()), t.setAttribute("data-rounded-phase", i.toString());
  }
  get qubitCirclesHtml() {
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : html`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(t) {
    return html`<div
      class="qubit-circle"
      data-ket="${t}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(t) {
    let e = html``, i = this.qubitCircleGroup([...Array(2 ** t).keys()], (n) => this.qubitCircleGroup(n, (r) => this.qubitCircleGroup(r, (o2) => this.qubitCircleGroup(o2, (a) => this.qubitCircleGroup(a, (d2) => this.qubitCircleGroup(d2, (c2) => this.qubitCircleGroup(c2)))))), 256);
    for (let n of i)
      e = html`${e} ${n}`;
    return e;
  }
  qubitCircleGroup(t, e, i = t.length / 2) {
    return p2((r, o2 = 1) => r.reduce((a, d2, c2) => c2 % o2 ? a : [...a, r.slice(c2, c2 + o2)], []), "arrayChunk")(t, i).map((r) => {
      let o2 = html``;
      if (e)
        for (let a of e(r))
          o2 = html`${o2} ${a}`;
      else
        for (let a of r)
          o2 = html`${o2} ${this.qubitCircleHtml(a)}`;
      return i === 64 ? html`<div class="qubit-circle-group--size${i}" data-targets="circle-notation.qubitCircleGroups">
          ${o2}
        </div>` : html`<div class="qubit-circle-group--size${i}">${o2}</div>`;
    });
  }
  initQubitCirclePopup(t) {
    let e = tippy_esm_default(t);
    createSingleton(e, { allowHTML: true, animation: false, arrow: ROUND_ARROW + ROUND_ARROW, delay: 0, theme: "qni" });
  }
  setPopupContent(t) {
    if (this.popupEl === null)
      return;
    let e = t.target, i = this.ketDecimal(e), n = e.getAttribute("data-amplitude-real"), r = e.getAttribute("data-amplitude-imag"), o2 = e.getAttribute("data-magnitude"), a = e.getAttribute("data-phase"), d2;
    n === null || r === null ? d2 = h.ZERO : d2 = new h(parseFloat(n), parseFloat(r));
    let c2;
    o2 && parseFloat(o2) === 0 ? c2 = 0 : c2 = a ? parseFloat(a) : 0, this.setQubitCirclePopupContent(this.popupEl.content, e, i, d2, o2 ? parseFloat(o2) : 0, c2, this.qubitCount);
  }
  setQubitCirclePopupContent(t, e, i, n, r, o2, a) {
    e._tippy.setContent(this.popupContent(t, i, n, r, o2, a));
  }
  popupContent(t, e, i, n, r, o2) {
    let a = t.querySelector(".circle-notation-popup__ket-binary"), d2 = t.querySelector(".circle-notation-popup__ket-decimal"), c2 = t.querySelector(".circle-notation-popup__amplitude-real"), m2 = t.querySelector(".circle-notation-popup__amplitude-imag"), h2 = t.querySelector(".circle-notation-popup__probability"), u2 = t.querySelector(".circle-notation-popup__phase");
    a && (a.textContent = e.toString(2).padStart(o2, "0")), d2 && (d2.textContent = e.toString()), c2 && (c2.textContent = this.forceSigned(i.real, 5)), m2 && (m2.textContent = `${this.forceSigned(i.imag, 5)}i`), h2 && (h2.textContent = `${this.forceSigned(n * n * 100, 4)}%`), u2 && (u2.textContent = `${this.forceSigned(r, 2)}\xB0`);
    let w2 = document.createElement("div");
    return w2.appendChild(t.cloneNode(true)), w2.innerHTML;
  }
  get popupEl() {
    return document.getElementById("circle-notation-popup");
  }
  forceSigned(t, e) {
    return (t >= 0 ? "+" : "") + t.toFixed(e);
  }
  ketDecimal(t) {
    let e = t.getAttribute("data-ket");
    return parseInt(e);
  }
}, "j");
p2(j, "CircleNotationElement"), l2([attr], j.prototype, "qubitCount", 2), l2([attr], j.prototype, "size", 2), l2([attr], j.prototype, "magnitudes", 2), l2([attr], j.prototype, "phases", 2), l2([attr], j.prototype, "multiQubits", 2), l2([attr], j.prototype, "showKets", 2), l2([targets], j.prototype, "qubitCircles", 2), l2([targets], j.prototype, "qubitCircleGroups", 2), l2([targets], j.prototype, "visibleQubitCircleGroups", 2);
controller(j);
var $e = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var Ue = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var st = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = createMachine({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (t, e) => {
      if (e.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let n = Math.max(this.clientWidth, this.clientHeight), r = n / 2, o2 = this.getBoundingClientRect(), a = o2.left + window.pageXOffset, d2 = o2.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${n}px`, i.style.left = `${e.clientX - (a + r)}px`, i.style.top = `${e.clientY - (d2 + r)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService = interpret(this.runCircuitButtonMachine).onTransition((t) => {
      this.debug && console.log(`run-circuit-button: ${c(t.value)}`);
    }).start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(t, e, i) {
    e !== i && t === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    render2(html`<style>
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
    return html([$e]);
  }
  get tailSpinIcon() {
    return html([Ue]);
  }
}, "st");
p2(st, "RunCircuitButtonElement"), l2([attr], st.prototype, "running", 2), l2([attr], st.prototype, "debug", 2), l2([target], st.prototype, "body", 2), l2([target], st.prototype, "ripple", 2);
controller(st);
var tt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    render2(html`<style>
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
}, "tt");
p2(tt, "CircuitBlockElement"), l2([attr], tt.prototype, "comment", 2), l2([attr], tt.prototype, "finalized", 2), tt = l2([controller], tt);
var Ye = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Kt = p2((s) => s != null && s instanceof _, "isCircuitDropzoneElement");
var _ = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = createMachine({ id: "circuit-dropzone", initial: "empty", states: { empty: { on: { INIT_OPERATION: { target: "occupied", actions: ["initOperation"] }, SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { snapOperation: () => {
      m.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (t, e) => {
      e.type === "PUT_OPERATION" && (this.append(e.operation), this.operationName = e.operation.tagName.toLocaleLowerCase(), e.operation.snapped = true);
    }, initOperation: (t, e) => {
      e.type === "INIT_OPERATION" && (e.operation.snapped = true);
    }, deleteOperation: (t, e) => {
      e.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(e.operation));
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
    let e = Array.from(this.children).filter((i) => O2(i));
    switch (e.length) {
      case 0:
        return null;
      case 1:
        return e[0];
      default:
        throw new Error("circuit-dropzone cannot hold multiple operations.");
    }
  }
  get snapTarget() {
    let t = this.getBoundingClientRect();
    return { x: window.pageXOffset + t.left + this.clientWidth / 2, y: window.pageYOffset + t.top + this.clientHeight / 2 };
  }
  toJson() {
    let t = this.operation;
    return t === null ? "1" : t.toJson();
  }
  connectedCallback() {
    this.circuitDropzoneService = interpret(this.circuitDropzoneMachine).onTransition((t) => {
      this.debug && console.log(`circuit-dropzone: ${t.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.operation !== null && this.initOperation(this.operation), this.initDropzone(), this.addEventListener("operation-snap", this.snapOperation), this.addEventListener("operation-unsnap", this.unsnapOperation), this.addEventListener("operation-end-dragging", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    render2(html`<style>
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
  put(t) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: t });
  }
  initOperation(t) {
    this.circuitDropzoneService.send({ type: "INIT_OPERATION", operation: t });
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, import_interactjs3.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
  deleteOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: e });
  }
  get wireSvg() {
    return html([Ye]);
  }
}, "_");
p2(_, "CircuitDropzoneElement"), l2([attr], _.prototype, "operationName", 2), l2([attr], _.prototype, "inputWireQuantum", 2), l2([attr], _.prototype, "outputWireQuantum", 2), l2([attr], _.prototype, "connectTop", 2), l2([attr], _.prototype, "connectBottom", 2), l2([attr], _.prototype, "shadow", 2), l2([attr], _.prototype, "debug", 2);
controller(_);
var et = p2((s) => s != null && s instanceof q2, "isCircuitStepElement");
var T = p2((s, t) => Array.from(s.reduce((e, i, n, r) => {
  let o2 = t(i, n, r), a = e.get(o2);
  return a ? a.push(i) : e.set(o2, [i]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var q2 = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = createMachine({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (t, e) => {
      if (e.type !== "SNAP_DROPZONE" && e.type !== "OCCUPY_DROPZONE")
        return;
      let i = e.dropzone, n = this.bit(i);
      m.notNull(i.operation), i.operation.bit = n;
    }, dispatchSnapEvent: (t, e) => {
      e.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (t, e) => {
      e.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: e.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (t, e) => {
      e.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: e.dropzone }, bubbles: true }));
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
    this.circuitStepService = interpret(this.circuitStepMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${c(t.value)}`);
    }).start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone-snap", this.snapDropzone), this.addEventListener("circuit-dropzone-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone-drop", this.unshadow), this.addEventListener("circuit-dropzone-occupy", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(t, e, i) {
    if (e !== i && (t === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), t === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), t === "data-shadow"))
      for (let n of this.dropzones)
        i !== null ? n.shadow = true : n.shadow = false;
  }
  update() {
    render2(html`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(t) {
    for (let n of this.dropzones)
      n.connectTop = false, n.connectBottom = false;
    let e = this.controlGateDropzones, i = this.controllableDropzones(t);
    for (let n of i)
      rt(n.operation) && (n.operation.controls = []);
    if (this.updateSwapConnections(t), this.updatePhasePhaseConnections(t), e.length !== 0) {
      if (e.length === 1 && i.length === 0) {
        e[0].operation.disable();
        return;
      }
      i.length === 0 ? this.updateControlControlConnections(t) : this.updateControlledUConnections(t), this.updateFreeDropzoneConnections(t);
    }
  }
  updateSwapConnections(t) {
    let e = t == null ? void 0 : t.disableSwap, i = this.swapGateDropzones;
    if (i.length !== 2 || e)
      for (let n of i)
        n.operation.disable();
    else {
      for (let r of i)
        r.operation.enable(), r.connectTop = i.some((a) => this.bit(a) < this.bit(r)), r.connectBottom = i.some((a) => this.bit(a) > this.bit(r));
      let n = i.map((r) => this.bit(r));
      for (let r of this.freeDropzones) {
        let o2 = Math.min(...n), a = Math.max(...n);
        o2 < this.bit(r) && this.bit(r) < a && (r.connectTop = true, r.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(t) {
    if (t == null ? void 0 : t.disablePhasePhase)
      return;
    let e = this.phaseGateDropzones;
    for (let i of e) {
      let n = i.operation;
      if (n.angle === "" || t !== void 0 && t.maxPhasePhaseTargetGates === 1)
        continue;
      let r = e.filter((o2) => {
        if (!bt(o2.operation))
          throw new Error(`${o2.operation} isn't a phase-gate element.`);
        return n.angle === o2.operation.angle;
      }).map((o2) => this.bit(o2));
      t !== void 0 && t.maxPhasePhaseTargetGates > 1 && (r = r.slice(0, t.maxPhasePhaseTargetGates)), !!r.includes(this.bit(i)) && (i.connectTop = r.some((o2) => o2 < this.bit(i)), i.connectBottom = r.some((o2) => o2 > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let r = this.phaseGateDropzones.filter((d2) => d2.connectTop || d2.connectBottom).map((d2) => this.bit(d2)), o2 = Math.min(...r), a = Math.max(...r);
      o2 < this.bit(i) && this.bit(i) < a && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(t) {
    let e = this.controlGateDropzones, i = e.map((r) => this.bit(r)), n = 0;
    t !== void 0 && (t.maxControlControlTargetGates === 1 ? i = [] : t.maxControlControlTargetGates > 1 && (i = i.slice(0, t.maxControlControlTargetGates)));
    for (let r of e) {
      n += 1;
      let o2 = r.operation;
      (t == null ? void 0 : t.disableControlControl) || t !== void 0 && (t.maxControlControlTargetGates === 1 || t.maxControlControlTargetGates > 0 && n > t.maxControlControlTargetGates) ? o2.disable() : (o2.enable(), r.connectTop = i.some((a) => this.bit(r) > a), r.connectBottom = i.some((a) => this.bit(r) < a));
    }
  }
  updateControlledUConnections(t) {
    let e = this.controllableDropzones(t), i = this.controlGateDropzones, n = [...new Set(e.map((m2) => m2.operationName))], r = this.numControlGateDropzones(t, n), o2 = i.map((m2) => this.bit(m2)), a = r === null ? o2 : o2.slice(0, r), d2 = e.map((m2) => this.bit(m2)), c2 = a.concat(d2);
    for (let [m2, h2] of Object.entries(i)) {
      let u2 = h2.operation;
      h2.connectBottom = c2.some((w2) => this.bit(h2) < w2), h2.connectTop = c2.some((w2) => this.bit(h2) > w2), r === null || r !== null && parseInt(m2) < r ? u2.enable() : (h2.connectTop = Math.max(...c2) > this.bit(h2), u2.disable());
    }
    for (let m2 of e) {
      if (!rt(m2.operation))
        throw new Error(`${m2.operation} isn't controllable.`);
      m2.operation.controls = this.controlBits(m2, o2, t), m2.connectTop = c2.some((h2) => h2 < this.bit(m2)), m2.connectBottom = c2.some((h2) => h2 > this.bit(m2));
    }
  }
  updateFreeDropzoneConnections(t) {
    let e = this.controllableDropzones(t), i = this.controlGateDropzones.filter((d2) => Ft(d2.operation) && !d2.operation.disabled).map((d2) => this.bit(d2)), n = e.map((d2) => this.bit(d2)), r = i.concat(n), o2 = Math.min(...r), a = Math.max(...r);
    for (let d2 of this.freeDropzones)
      o2 < this.bit(d2) && this.bit(d2) < a && (d2.connectTop = true, d2.connectBottom = true);
  }
  controlBits(t, e, i) {
    let n = e;
    return i && (i.maxChControlGates > 0 && t.operationName === "h-gate" ? n = e.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && t.operationName === "x-gate" ? n = e.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && t.operationName === "y-gate" ? n = e.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && t.operationName === "z-gate" ? n = e.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && t.operationName === "phase-gate" ? n = e.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && t.operationName === "t-gate" ? n = e.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && t.operationName === "rnot-gate" ? n = e.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && t.operationName === "rx-gate" ? n = e.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && t.operationName === "ry-gate" ? n = e.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && t.operationName === "rz-gate" ? n = e.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && t.operationName === "swap-gate" && (n = e.slice(0, i.maxCswapControlGates))), n;
  }
  bit(t) {
    let e = this.dropzones.indexOf(t);
    return m.need(e !== -1, "circuit-dropzone not found."), e;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((t) => !t.occupied);
  }
  dropzoneAt(t) {
    let e = this.dropzones[t];
    return m.notNull(e), e;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get freeDropzones() {
    return this.dropzones.filter((t) => !t.occupied);
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let t = new _();
    return t.shadow = this.shadow, this.append(t), t;
  }
  appendOperation(t) {
    let e = new _();
    this.append(e), e.put(t);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((t) => t.occupied).filter((t) => t.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((t) => t.occupied).filter((t) => t.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((t) => t.occupied && Ft(t.operation));
  }
  numControlGateDropzones(t, e) {
    if (t === void 0)
      return null;
    let i = 0;
    return e.includes("h-gate") && !t.disableCh && t.maxChControlGates > i && (i = t.maxChControlGates), e.includes("x-gate") && !t.disableCnot && t.maxCnotControlGates > i && (i = t.maxCnotControlGates), e.includes("y-gate") && !t.disableCy && t.maxCyControlGates > i && (i = t.maxCyControlGates), e.includes("z-gate") && !t.disableCz && t.maxCzControlGates > i && (i = t.maxCzControlGates), e.includes("phase-gate") && !t.disableCphase && t.maxCphaseControlGates > i && (i = t.maxCphaseControlGates), e.includes("t-gate") && !t.disableCt && t.maxCtControlGates > i && (i = t.maxCtControlGates), e.includes("rnot-gate") && !t.disableCrnot && t.maxCrnotControlGates > i && (i = t.maxCrnotControlGates), e.includes("rx-gate") && !t.disableCrx && t.maxCrxControlGates > i && (i = t.maxCrxControlGates), e.includes("ry-gate") && !t.disableCry && t.maxCryControlGates > i && (i = t.maxCryControlGates), e.includes("rz-gate") && !t.disableCrz && t.maxCrzControlGates > i && (i = t.maxCrzControlGates), e.includes("swap-gate") && !t.disableCswap && t.maxCswapControlGates > i && (i = t.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(t) {
    let e = 0, i = 0, n = 0, r = 0, o2 = 0, a = 0, d2 = 0, c2 = 0, m2 = 0, h2 = 0;
    return this.dropzones.filter((u2) => u2.occupied).filter((u2) => rt(u2.operation)).filter((u2) => t === void 0 ? true : Se2(u2.operation) ? (e += 1, t.maxChTargetGates !== 0 && e > t.maxChTargetGates ? false : !t.disableCh) : Ge(u2.operation) ? (i += 1, t.maxCnotTargetGates !== 0 && i > t.maxCnotTargetGates ? false : !t.disableCnot) : Oe(u2.operation) ? (n += 1, t.maxCyTargetGates !== 0 && n > t.maxCyTargetGates ? false : !t.disableCy) : Ie2(u2.operation) ? (r += 1, t.maxCzTargetGates !== 0 && r > t.maxCzTargetGates ? false : !t.disableCz) : bt(u2.operation) ? (o2 += 1, t.maxCphaseTargetGates !== 0 && o2 > t.maxCphaseTargetGates ? false : !t.disableCphase) : ze(u2.operation) ? (a += 1, t.maxCtTargetGates !== 0 && a > t.maxCtTargetGates ? false : !t.disableCt) : Ae(u2.operation) ? (d2 += 1, t.maxCrnotTargetGates !== 0 && d2 > t.maxCrnotTargetGates ? false : !t.disableCrnot) : Tt(u2.operation) ? (c2 += 1, t.maxCrxTargetGates !== 0 && c2 > t.maxCrxTargetGates ? false : !t.disableCrx) : wt(u2.operation) ? (m2 += 1, t.maxCryTargetGates !== 0 && m2 > t.maxCryTargetGates ? false : !t.disableCry) : St(u2.operation) ? (h2 += 1, t.maxCrzTargetGates !== 0 && h2 > t.maxCrzTargetGates ? false : !t.disableCrz) : _e(u2.operation) ? !t.disableCswap : true);
  }
  dispatchUpdateEvent() {
    this.dispatchEvent(new Event("circuit-step-update", { bubbles: true }));
  }
  deleteOperation(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: e });
  }
  dispatchMouseenterEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseenter", { bubbles: true }));
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseleave", { bubbles: true }));
  }
  maybeDispatchClickEvent(t) {
    O2(t.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
  }
  snapDropzone(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: e });
  }
  unsnapDropzone(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: e });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(t) {
    let e = t.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: e });
  }
  serialize() {
    let t = [];
    for (let [e, i] of T(this.operations, (n) => n.constructor))
      switch (e) {
        case N2: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.if))
            for (let [a, d2] of T(o2, (c2) => c2.controls.toString())) {
              let c2 = d2[0], m2 = c2.operationType, h2 = d2.map((w2) => w2.bit), u2 = { type: m2, targets: h2 };
              r !== "" && (u2.if = r), a !== "" && (u2.controls = c2.controls), t.push(u2);
            }
          break;
        }
        case W2: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.if))
            for (let [a, d2] of T(o2, (c2) => c2.controls.toString())) {
              let c2 = d2[0], m2 = c2.operationType, h2 = d2.map((w2) => w2.bit), u2 = { type: m2, targets: h2 };
              r !== "" && (u2.if = r), a !== "" && (u2.controls = c2.controls), t.push(u2);
            }
          break;
        }
        case V2: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.if))
            for (let [a, d2] of T(o2, (c2) => c2.controls.toString())) {
              let c2 = d2[0], m2 = c2.operationType, h2 = d2.map((w2) => w2.bit), u2 = { type: m2, targets: h2 };
              r !== "" && (u2.if = r), a !== "" && (u2.controls = c2.controls), t.push(u2);
            }
          break;
        }
        case Y: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.if))
            for (let [a, d2] of T(o2, (c2) => c2.controls.toString())) {
              let c2 = d2[0], m2 = c2.operationType, h2 = d2.map((w2) => w2.bit), u2 = { type: m2, targets: h2 };
              r !== "" && (u2.if = r), a !== "" && (u2.controls = c2.controls), t.push(u2);
            }
          break;
        }
        case L: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.angle))
            for (let [a, d2] of T(o2, (c2) => c2.if))
              for (let [c2, m2] of T(d2, (h2) => h2.controls.toString())) {
                let h2 = m2[0], u2 = h2.operationType, w2 = m2.map((it) => it.bit), z2 = { type: u2, targets: w2 };
                a !== "" && (z2.if = a), r !== "" && (z2.angle = r), c2 !== "" && (z2.controls = h2.controls), t.push(z2);
              }
          break;
        }
        case F2: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.if))
            for (let [a, d2] of T(o2, (c2) => c2.controls.toString())) {
              let c2 = d2[0], m2 = c2.operationType, h2 = d2.map((w2) => w2.bit), u2 = { type: m2, targets: h2 };
              r !== "" && (u2.if = r), a !== "" && (u2.controls = c2.controls), t.push(u2);
            }
          break;
        }
        case P: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.if))
            for (let [a, d2] of T(o2, (c2) => c2.controls.toString())) {
              let c2 = d2[0], m2 = c2.operationType, h2 = d2.map((w2) => w2.bit), u2 = { type: m2, targets: h2 };
              r !== "" && (u2.if = r), a !== "" && (u2.controls = c2.controls), t.push(u2);
            }
          break;
        }
        case H2: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.angle))
            for (let [a, d2] of T(o2, (c2) => c2.if))
              for (let [c2, m2] of T(d2, (h2) => h2.controls.toString())) {
                let h2 = m2[0], u2 = h2.operationType, w2 = m2.map((it) => it.bit), z2 = { type: u2, targets: w2 };
                a !== "" && (z2.if = a), r !== "" && (z2.angle = r), c2 !== "" && (z2.controls = h2.controls), t.push(z2);
              }
          break;
        }
        case B: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.angle))
            for (let [a, d2] of T(o2, (c2) => c2.if))
              for (let [c2, m2] of T(d2, (h2) => h2.controls.toString())) {
                let h2 = m2[0], u2 = h2.operationType, w2 = m2.map((it) => it.bit), z2 = { type: u2, targets: w2 };
                a !== "" && (z2.if = a), r !== "" && (z2.angle = r), c2 !== "" && (z2.controls = h2.controls), t.push(z2);
              }
          break;
        }
        case $: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.angle))
            for (let [a, d2] of T(o2, (c2) => c2.if))
              for (let [c2, m2] of T(d2, (h2) => h2.controls.toString())) {
                let h2 = m2[0], u2 = h2.operationType, w2 = m2.map((it) => it.bit), z2 = { type: u2, targets: w2 };
                a !== "" && (z2.if = a), r !== "" && (z2.angle = r), c2 !== "" && (z2.controls = h2.controls), t.push(z2);
              }
          break;
        }
        case U: {
          let n = i.filter((d2) => !d2.disabled);
          if (n.length !== 2)
            break;
          let r = n[0].operationType, o2 = n[0].controls, a = { type: r, targets: [n[0].bit, n[1].bit] };
          o2 !== void 0 && o2.length > 0 && (a.controls = o2), t.push(a);
          break;
        }
        case R2: {
          let n = i.filter((o2) => !o2.disabled);
          if (n.length < 2 || this.operations.some((o2) => rt(o2) && o2.controls.length > 0))
            break;
          let r = n.map((o2) => o2.bit);
          t.push({ type: n[0].operationType, targets: r });
          break;
        }
        case A2: {
          let n = i, r = i.map((o2) => o2.bit);
          t.push({ type: n[0].operationType, targets: r });
          break;
        }
        case D2: {
          let n = i;
          for (let [, r] of T(n, (o2) => o2.value)) {
            let o2 = r.map((a) => a.bit);
            t.push({ type: r[0].operationType, targets: o2 });
          }
          break;
        }
        case k: {
          let n = i;
          for (let [r, o2] of T(n, (a) => a.flag)) {
            let a = o2.map((m2) => m2.bit), c2 = { type: o2[0].operationType, targets: a };
            r !== "" && (c2.flag = r), t.push(c2);
          }
          break;
        }
        default:
          throw new d("Unrecognized operation", { klass: e });
      }
    return t;
  }
  get operations() {
    return this.dropzones.filter((t) => t.occupied).map((t) => t.operation).filter((t) => t !== null);
  }
  toJson() {
    let t = this.dropzones.map((e) => e.toJson());
    for (; t.length > 0 && t[t.length - 1] === "1"; )
      t.pop();
    return t.length === 0 ? "[1]" : `[${t.join(",")}]`;
  }
}, "q");
p2(q2, "CircuitStepElement"), l2([attr], q2.prototype, "active", 2), l2([attr], q2.prototype, "breakpoint", 2), l2([attr], q2.prototype, "shadow", 2), l2([attr], q2.prototype, "keep", 2), l2([attr], q2.prototype, "debug", 2);
controller(q2);
var dt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = createMachine({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, UNGRAB_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
      this.circuit.draggable = true;
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (t, e) => {
      e.type === "GRAB_OPERATION" && this.circuit.activateOperation(e.operation);
    }, snapOperationIntoDropzone: (t, e) => {
      if (e.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let i = e.operation, n = this.circuit.snapTargetAt(e.x, e.y);
      if (i.snapped = true, n.dropzone === null) {
        let r = n.stepIndex;
        m.notNull(r);
        let o2 = this.circuit.addShadowStepAfter(r), a = o2.dropzones[n.wireIndex];
        m.notNull(a), a.append(i), a.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(o2.dropzones);
      } else
        n.dropzone.append(i);
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
    }, setSnapTargets: (t, e) => {
      e.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(e.operation);
    }, setBreakpoint: (t, e) => {
      e.type === "CLICK_STEP" && this.circuit.setBreakpoint(e.step);
    }, activateStep: (t, e) => {
      e.type !== "MOUSE_ENTER_STEP" && e.type !== "SNAP_STEP" || (e.step.active = true);
    }, deactivateStep: (t, e) => {
      e.type !== "MOUSE_LEAVE_STEP" && e.type !== "UNSNAP_STEP" || (e.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (t, e) => {
      e.type !== "END_DRAGGING_OPERATION" || e.operation.snapped || !this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes();
    }, initOperationMenu: (t, e) => {
      if (e.type !== "DROP_OPERATION")
        return;
      let i = e.operation;
      oe(i) && i.initMenu();
    }, showOperationMenu: (t, e) => {
      e.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || e.operation.showMenu());
    }, showOperationInspectorIf: (t, e) => {
      e.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(e.operation);
    }, showOperationInspectorAngle: (t, e) => {
      e.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(e.operation);
    }, showOperationInspectorFlag: (t, e) => {
      e.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(e.operation);
    }, setOperationIf: (t, e) => {
      e.type === "SET_OPERATION_IF" && (e.operation.if = e.if);
    }, setOperationAngle: (t, e) => {
      e.type === "SET_OPERATION_ANGLE" && (e.operation.angle = e.angle, e.operation.reducedAngle = e.reducedAngle);
    }, setOperationFlag: (t, e) => {
      e.type === "SET_OPERATION_FLAG" && (e.operation.flag = e.flag);
    }, maybeUpdateOperationInspector: (t, e) => {
      if (e.type !== "ACTIVATE_OPERATION")
        return;
      let i = e.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(i);
    } } });
  }
  connectedCallback() {
    this.circuitEditorService = interpret(this.circuitEditorMachine).onTransition((t) => {
      this.debug && console.log(`circuit-editor: ${c(t.value)}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-ungrab", this.ungrabOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", () => {
      for (let t of this.circuit.operations)
        t.initMenu();
    });
  }
  update() {
    render2(html`<slot></slot>`, this.shadowRoot);
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  maybeDeactivateOperation(t) {
    let e = t.target;
    !O2(e) && !this.inspectorButton.popup.popper.contains(e) && !this.inspectorButton.popup.reference.contains(e) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: e });
  }
  showOperationMenu(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: e });
  }
  showOperationInspectorIf(t) {
    let e = t.target;
    if (!Z(e))
      throw new Error(`${e} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: e });
  }
  showOperationInspectorAngle(t) {
    let e = t.target;
    if (!nt(e))
      throw new Error(`${e} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: e });
  }
  showOperationInspectorFlag(t) {
    let e = t.target;
    if (!at(e))
      throw new Error(`${e} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: e });
  }
  setOperationIf(t) {
    let e = t.target, i = this.activeOperation;
    if (!Z(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: e.if });
  }
  setOperationAngle(t) {
    let e = t.target, i = this.activeOperation;
    if (m.notNull(i), !nt(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: e.angle, reducedAngle: e.reduceAngleFraction ? e.reducedAngle : "" });
  }
  setOperationFlag(t) {
    let e = t.target, i = this.activeOperation;
    if (!at(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: e.flag });
  }
  grabOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: e });
  }
  ungrabOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "UNGRAB_OPERATION", operation: e });
  }
  endDraggingOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: e });
  }
  dropOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: e });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(t) {
    let e = t.target;
    if (!et(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: e });
  }
  snapStep(t) {
    let e = t.target;
    if (!et(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: e });
  }
  unsnapStep(t) {
    let e = t.target;
    if (!et(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: e });
  }
  operationInSnapRange(t) {
    let e = t.target;
    if (!O2(e))
      throw new Error(`${e} must be an Operation.`);
    let n = t.detail.snapTargetInfo, r = n.x, o2 = n.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: e, x: r, y: o2 });
  }
  mouseEnterStep(t) {
    if (this.circuit.editing)
      return;
    let e = t.target;
    if (!et(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: e });
  }
  mouseLeaveStep(t) {
    if (this.circuit.editing)
      return;
    let e = t.target;
    if (!et(e))
      throw new Error(`${e} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: e });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "dt");
p2(dt, "CircuitEditorElement"), l2([attr], dt.prototype, "debug", 2), l2([target], dt.prototype, "circuit", 2), l2([target], dt.prototype, "inspectorButton", 2);
controller(dt);
var Ot = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.paletteDropzoneMachine = createMachine({ id: "palette-dropzone", initial: "idle", states: { idle: { on: { GRAB_OPERATION: { target: "idle", actions: ["newOperation"] }, DELETE_OPERATION: { target: "idle", actions: ["deleteOperation"] } } } } }, { actions: { newOperation: (t, e) => {
      if (e.type !== "GRAB_OPERATION")
        return;
      let i = e.operation, n = i.cloneNode(false);
      if (!O2(n))
        throw new TypeError(`${n} isn't an operation.`);
      At(i) && i.disableHelp(), this.prepend(n), this.initOperation(n);
    }, deleteOperation: (t, e) => {
      e.type === "DELETE_OPERATION" && this.removeChild(e.operation);
    } } });
  }
  connectedCallback() {
    this.paletteDropzoneService = interpret(this.paletteDropzoneMachine).onTransition((t) => {
      this.debug && console.log(`palette-dropzone: ${t.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    render2(html`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(t) {
    t.draggable = true, t.snapped = true, t.grabbed = false, At(t) && t.initHelp();
  }
  get operation() {
    let e = Array.from(this.children).filter((i) => O2(i));
    if (e.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (e.length === 1)
      return e[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  grabOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new TypeError(`${e} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "GRAB_OPERATION", operation: e });
  }
  deleteOperation(t) {
    let e = t.target;
    if (!O2(e))
      throw new TypeError(`${e} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "DELETE_OPERATION", operation: e });
  }
}, "Ot");
p2(Ot, "PaletteDropzoneElement"), l2([attr], Ot.prototype, "debug", 2);
controller(Ot);
var b = /* @__PURE__ */ __name(class extends HTMLElement {
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
    this.quantumCircuitMachine = createMachine({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
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
    return this.steps.find((e) => e.active) || null;
  }
  fetchStepIndex(t) {
    let e = this.steps.indexOf(t);
    return m.need(e !== -1, `circuit-step index of ${t} not found.`), e;
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
    let t = null, e = 0;
    for (let i of this.steps)
      i.wireCount > 0 && i.wireCount > e && (t = i, e = i.wireCount);
    return t;
  }
  appendMinimumSteps() {
    let t = this.minStepCount - this.steps.length;
    for (let e = 0; e < t; e++)
      this.append(new q2());
  }
  stepAt(t) {
    let e = this.steps[t];
    return m.notNull(e), e;
  }
  addShadowStepAfter(t) {
    let e = new q2();
    e.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      e.appendDropzone();
    if (t === -1)
      this.prepend(e);
    else {
      let i = this.steps[t];
      m.notNull(i.parentElement), i.parentElement.insertBefore(e, i.nextSibling);
    }
    return e;
  }
  activateStep(t) {
    t.active = true;
  }
  deactivateAllSteps() {
    for (let t of this.steps)
      t.active = false;
  }
  setBreakpoint(t) {
    for (let e of this.steps)
      e.breakpoint = false;
    t.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((e) => e.breakpoint) || null;
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
    this.quantumCircuitService = interpret(this.quantumCircuitMachine).onTransition((t) => {
      this.debug && console.log(`quantum-circuit: ${t.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.loadFromJson(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(t, e, i) {
    e !== i && t === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" }));
  }
  update() {
    render2(html`<slot></slot>`, this.shadowRoot);
  }
  updateStep(t) {
    let e = t.target;
    this.updateStepOperationAttributes(e);
  }
  updateStepOperationAttributes(t) {
    t.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("quantum-circuit-mouseleave", { bubbles: true }));
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new N2();
      return i && n.disable(), n;
    }, ...e), this.resize(), this;
  }
  x(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new W2();
      return i && n.disable(), n;
    }, ...e), this;
  }
  y(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new V2();
      return i && n.disable(), n;
    }, ...e), this;
  }
  z(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new Y();
      return i && n.disable(), n;
    }, ...e), this;
  }
  phase(...t) {
    let e = "", i, n;
    if (typeof t[0] == "number")
      i = t;
    else if (typeof t[0] == "string")
      e = t[0], i = t.slice(1);
    else {
      let o2 = t[0];
      i = o2.targets, n = o2.disabled;
    }
    let r = this.applyOperationToTargets(() => {
      let o2 = new L();
      return o2.angle = e, n && o2.disable(), o2;
    }, ...i);
    return i.length > 1 && this.updateStepOperationAttributes(r), this;
  }
  t(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new F2();
      return i && n.disable(), n;
    }, ...e), this.resize(), this;
  }
  rnot(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new P();
      return i && n.disable(), n;
    }, ...e), this;
  }
  rx(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new H2();
      return i && n.disable(), n;
    }, ...e), this;
  }
  ry(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new B();
      return i && n.disable(), n;
    }, ...e), this;
  }
  rz(...t) {
    let e, i;
    if (typeof t[0] == "number")
      e = t;
    else {
      let n = t[0];
      e = n.targets, i = n.disabled;
    }
    return this.applyOperationToTargets(() => {
      let n = new $();
      return i && n.disable(), n;
    }, ...e), this;
  }
  swap(...t) {
    let e = this.applyOperationToTargets(() => new U(), ...t);
    return this.updateStepOperationAttributes(e), this;
  }
  control(...t) {
    let e = this.applyOperationToTargets(() => new R2(), ...t);
    return this.updateStepOperationAttributes(e), this;
  }
  bloch(...t) {
    return this.applyOperationToTargets(() => new A2(), ...t), this;
  }
  write(t, ...e) {
    return this.applyOperationToTargets(() => {
      let i = new D2();
      return i.value = t, i;
    }, ...e), this.resize(), this;
  }
  measure(...t) {
    return this.applyOperationToTargets(() => new k(), ...t), this.resize(), this;
  }
  applyOperationToTargets(t, ...e) {
    let i = Math.max(...e) + 1, n = this.appendStepWithDropzones(i);
    for (let r of e) {
      let o2 = t();
      n.dropzoneAt(r).put(o2);
    }
    return n;
  }
  ch(t, e) {
    return this.controlledU(N2, t, e), this;
  }
  cnot(t, e) {
    return this.controlledU(W2, t, e), this.resize(), this;
  }
  cy(t, e) {
    return this.controlledU(V2, t, e), this;
  }
  cz(t, e) {
    return this.controlledU(Y, t, e), this;
  }
  cphase(t, e) {
    return this.controlledU(L, t, e), this;
  }
  ct(t, e) {
    return this.controlledU(F2, t, e), this;
  }
  crnot(t, e) {
    return this.controlledU(P, t, e), this;
  }
  crx(t, e) {
    return this.controlledU(H2, t, e), this;
  }
  cry(t, e) {
    return this.controlledU(B, t, e), this;
  }
  crz(t, e) {
    return this.controlledU($, t, e), this;
  }
  cswap(t, e) {
    return this.controlledU(U, t, e), this;
  }
  cc(...t) {
    let e = Math.max(...t) + 1, i = this.appendStepWithDropzones(e);
    for (let n of t)
      i.dropzoneAt(n).put(new R2());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(t, e, i) {
    let n = [].concat(e), r = [].concat(i), o2 = n.concat(r), a = Math.max(...o2) + 1, d2 = this.appendStepWithDropzones(a);
    for (let c2 of n)
      d2.dropzoneAt(c2).put(new R2());
    for (let c2 of r)
      d2.dropzoneAt(c2).put(new t());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d2);
  }
  appendStep() {
    let t = new q2(), e = this.blocks.slice(-1)[0] || null;
    return e === null || e.finalized ? this.append(t) : e.append(t), t;
  }
  appendStepWithDropzones(t) {
    let e = new q2();
    this.append(e);
    for (let i = 0; i < t; i++) {
      let n = new _();
      e.append(n);
    }
    return e;
  }
  updateAllWires() {
    let t = this.steps[0];
    if (t === void 0)
      return;
    let e = t.dropzones.length;
    for (let i = 0; i < e; i++)
      this.updateWire(i);
  }
  activateOperation(t) {
    for (let e of this.operations)
      e.active = false;
    t.active = true;
  }
  appendWire() {
    for (let t of this.steps)
      t.appendDropzone();
  }
  removeLastEmptyWires() {
    for (; this.steps.every((t) => t.wireCount > this.minWireCount && !t.lastDropzone.occupied); )
      for (let t of this.steps)
        t.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let t of this.emptySteps)
      t.remove();
  }
  loadFromJson() {
    let t, e = null;
    if (this.hasAttribute("data-update-url") ? t = this.urlJson : t = this.json, t === "" || t === "new") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let i = JSON.parse(t);
    this.circuitTitle = (i.title || "").trim();
    for (let n of i.cols) {
      let r = this.appendStep();
      for (let o2 of n) {
        switch (true) {
          case /^\|0>$/.test(o2): {
            let a = new D2();
            a.hoverable = true, a.value = "0", r.appendOperation(a);
            break;
          }
          case /^\|1>$/.test(o2): {
            let a = new D2();
            a.hoverable = true, a.value = "1", r.appendOperation(a);
            break;
          }
          case /^H/.test(o2): {
            let a = new N2();
            a.hoverable = true, a.if = this.ifVariable(o2.slice(1)), r.appendOperation(a);
            break;
          }
          case (/^X$/.test(o2) || /^X<(.+)$/.test(o2)): {
            let a = new W2();
            a.hoverable = true, a.if = o2.slice(2).trim(), r.appendOperation(a);
            break;
          }
          case /^Y/.test(o2): {
            let a = new V2();
            a.hoverable = true, a.if = this.ifVariable(o2.slice(1)), r.appendOperation(a);
            break;
          }
          case /^Z/.test(o2): {
            let a = new Y();
            a.hoverable = true, a.if = this.ifVariable(o2.slice(1)), r.appendOperation(a);
            break;
          }
          case /^P/.test(o2): {
            let a = new L();
            a.hoverable = true, a.angle = this.angleParameter(o2.slice(1)), r.appendOperation(a);
            break;
          }
          case /^T/.test(o2): {
            let a = new F2();
            a.hoverable = true, a.if = this.ifVariable(o2.slice(1)), r.appendOperation(a);
            break;
          }
          case /^X\^½/.test(o2): {
            let a = new P();
            a.hoverable = true, a.if = this.ifVariable(o2.slice(3)), r.appendOperation(a);
            break;
          }
          case /^Rx/.test(o2): {
            let a = new H2();
            a.hoverable = true, a.angle = this.angleParameter(o2.slice(2)), r.appendOperation(a);
            break;
          }
          case /^Ry/.test(o2): {
            let a = new B();
            a.hoverable = true, a.angle = this.angleParameter(o2.slice(2)), r.appendOperation(a);
            break;
          }
          case /^Rz/.test(o2): {
            let a = new $();
            a.hoverable = true, a.angle = this.angleParameter(o2.slice(2)), r.appendOperation(a);
            break;
          }
          case /^Swap$/.test(o2): {
            let a = new U();
            a.hoverable = true, r.appendOperation(a);
            break;
          }
          case /^•$/.test(o2): {
            let a = new R2();
            a.hoverable = true, r.appendOperation(a);
            break;
          }
          case /^Bloch$/.test(o2): {
            let a = new A2();
            a.hoverable = true, r.appendOperation(a);
            break;
          }
          case /^Measure/.test(o2): {
            let a = new k(), d2 = ((/^>(.+)$/.exec(o2.slice(7)) || [])[1] || "").trim();
            a.hoverable = true, a.flag = d2, r.appendOperation(a);
            break;
          }
          case /^[[{](.+)$/.test(o2): {
            let a = o2.slice(1);
            r.remove(), e = new tt(), e.comment = a, e.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(e);
            break;
          }
          case /^[\]}]$/.test(o2): {
            r.remove(), e.finalize();
            break;
          }
          default: {
            if (o2 === 1)
              r.dropzones.length === r.freeDropzones.length ? r.keep = true : r.keep = false;
            else
              throw new Error(`Unknown operation: ${o2}`);
            r.appendDropzone();
          }
        }
        r.updateOperationAttributes();
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
    let t = this.largestStep, e = t && t.wireCount > this.minWireCount ? t.wireCount : this.minWireCount;
    for (let i of this.steps) {
      let n = e - i.wireCount;
      for (let r = 0; r < n; r++)
        i.appendDropzone();
    }
  }
  updateWire(t) {
    let e = false;
    for (let i of this.steps) {
      let n = i.dropzoneAt(t);
      if (n.inputWireQuantum = e, n.operationName === "write-gate")
        n.inputWireQuantum = e, n.outputWireQuantum = true, e = true;
      else if (n.operationName === "measurement-gate")
        n.inputWireQuantum = e, n.outputWireQuantum = false, e = false;
      else if (n.operationName === "swap-gate") {
        let r = i.dropzones.filter((o2) => o2.operationName === "swap-gate");
        if (r.length === 2) {
          let o2 = r.map((m2) => i.bit(m2)), a = i.bit(n), d2 = o2[0] === a ? o2[1] : o2[0], c2 = i.dropzoneAt(d2);
          n.inputWireQuantum = e, n.outputWireQuantum = c2.inputWireQuantum, e = c2.inputWireQuantum;
        } else
          n.inputWireQuantum = e, n.outputWireQuantum = e;
      } else
        n.inputWireQuantum = e, n.outputWireQuantum = e;
    }
  }
  updateChangedWire(t) {
    let e = t.target;
    if (!et(e))
      throw new Error(`${e} isn't a circuit-step.`);
    let i = t.detail.dropzone;
    if (!Kt(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let n = e.dropzones.indexOf(i);
    m.need(n !== -1, "circuit-dropzone not found."), this.updateWire(n);
  }
  set draggable(t) {
    for (let e of this.operations)
      e.draggable = t;
  }
  snapTargetAt(t, e) {
    return this.isVertical ? this.snapTargets[e][t] : this.snapTargets[t][e];
  }
  setSnapTargets(t) {
    let e = this.dropzones.filter((r) => !r.occupied), i = [];
    this.snapTargets = {};
    let n = t.dropzone;
    Kt(n) && e.push(n);
    for (let [r, o2] of Object.entries(this.dropzones)) {
      let a = o2.snapTarget, d2 = this.isVertical ? a.y : a.x, c2 = this.isVertical ? a.x : a.y, m2 = parseInt(r) % this.wireCount, h2 = d2 - t.snapRange * 0.75, u2 = d2 + t.snapRange * 0.75;
      parseInt(r) < this.wireCount && (this.isVertical ? i.push({ x: c2, y: h2 }) : i.push({ x: h2, y: c2 }), this.snapTargets[h2] === void 0 && (this.snapTargets[h2] = {}), this.snapTargets[h2][c2] === void 0 && (this.snapTargets[h2][c2] = { dropzone: null, stepIndex: -1, wireIndex: m2 })), this.isVertical ? i.push({ x: c2, y: u2 }) : i.push({ x: u2, y: c2 }), this.snapTargets[u2] === void 0 && (this.snapTargets[u2] = {}), this.snapTargets[u2][c2] === void 0 && (this.snapTargets[u2][c2] = { dropzone: null, stepIndex: Math.floor(parseInt(r) / this.wireCount), wireIndex: m2 }), (!o2.occupied || o2 === n) && i.push(a), this.snapTargets[d2] === void 0 && (this.snapTargets[d2] = {}), this.snapTargets[d2][c2] === void 0 && (this.snapTargets[d2][c2] = { dropzone: o2, stepIndex: null, wireIndex: m2 });
    }
    t.snapTargets = i;
  }
  updateSnapTargets(t) {
    let e = t[0];
    m.notNull(e);
    let i = this.isVertical ? e.snapTarget.y : e.snapTarget.x;
    for (let [n, r] of Object.entries(this.snapTargets))
      if (!(parseInt(n) <= i))
        for (let o2 in r) {
          let a = r[o2];
          a.stepIndex !== null && (a.stepIndex += 1);
        }
    for (let [n, r] of Object.entries(t)) {
      let o2 = r.snapTarget, a = this.isVertical ? o2.y : o2.x, d2 = this.isVertical ? o2.x : o2.y;
      m.notNull(this.snapTargets[a]), this.snapTargets[a][d2] = { dropzone: r, stepIndex: null, wireIndex: parseInt(n) };
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
    let t = false, e = [];
    for (let i of this.nonEmptySteps) {
      if (i.isInBlock) {
        if (!t) {
          let n = i.block;
          e.push(`["[${n.comment}"]`), t = true;
        }
      } else
        t && (e.push('["]"]'), t = false);
      e.push(i.toJson());
    }
    return t && e.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${e.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${e.join(",")}]}`;
  }
}, "b");
p2(b, "QuantumCircuitElement"), l2([attr], b.prototype, "minStepCount", 2), l2([attr], b.prototype, "minWireCount", 2), l2([attr], b.prototype, "maxWireCount", 2), l2([attr], b.prototype, "editing", 2), l2([attr], b.prototype, "updateUrl", 2), l2([attr], b.prototype, "json", 2), l2([attr], b.prototype, "circuitTitle", 2), l2([attr], b.prototype, "debug", 2), l2([attr], b.prototype, "chDisabled", 2), l2([attr], b.prototype, "chMaxControlGates", 2), l2([attr], b.prototype, "chMaxTargetGates", 2), l2([attr], b.prototype, "cnotDisabled", 2), l2([attr], b.prototype, "cnotMaxControlGates", 2), l2([attr], b.prototype, "cnotMaxTargetGates", 2), l2([attr], b.prototype, "cyDisabled", 2), l2([attr], b.prototype, "cyMaxControlGates", 2), l2([attr], b.prototype, "cyMaxTargetGates", 2), l2([attr], b.prototype, "czDisabled", 2), l2([attr], b.prototype, "czMaxControlGates", 2), l2([attr], b.prototype, "czMaxTargetGates", 2), l2([attr], b.prototype, "cphaseDisabled", 2), l2([attr], b.prototype, "cphaseMaxControlGates", 2), l2([attr], b.prototype, "cphaseMaxTargetGates", 2), l2([attr], b.prototype, "ctDisabled", 2), l2([attr], b.prototype, "ctMaxControlGates", 2), l2([attr], b.prototype, "ctMaxTargetGates", 2), l2([attr], b.prototype, "crnotDisabled", 2), l2([attr], b.prototype, "crnotMaxControlGates", 2), l2([attr], b.prototype, "crnotMaxTargetGates", 2), l2([attr], b.prototype, "crxDisabled", 2), l2([attr], b.prototype, "crxMaxControlGates", 2), l2([attr], b.prototype, "crxMaxTargetGates", 2), l2([attr], b.prototype, "cryDisabled", 2), l2([attr], b.prototype, "cryMaxControlGates", 2), l2([attr], b.prototype, "cryMaxTargetGates", 2), l2([attr], b.prototype, "crzDisabled", 2), l2([attr], b.prototype, "crzMaxControlGates", 2), l2([attr], b.prototype, "crzMaxTargetGates", 2), l2([attr], b.prototype, "cswapDisabled", 2), l2([attr], b.prototype, "cswapMaxControlGates", 2), l2([attr], b.prototype, "swapDisabled", 2), l2([attr], b.prototype, "controlControlDisabled", 2), l2([attr], b.prototype, "controlControlMaxTargetGates", 2), l2([attr], b.prototype, "phasePhaseDisabled", 2), l2([attr], b.prototype, "phasePhaseMaxTargetGates", 2), l2([targets], b.prototype, "blocks", 2);
controller(b);
var pt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.visibleQubitCircleKets = [], this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-visibility-change", this.updateVisibleQubitCircleKets), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    render2(html`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(t) {
    var n;
    let e = t.data, i = this.activeStepIndex;
    switch (e.type) {
      case "step": {
        let r = this.circuit.stepAt(e.step);
        for (let o2 in e.blochVectors) {
          let a = parseInt(o2), d2 = r.dropzoneAt(a).operation;
          if (Me2(d2)) {
            let c2 = e.blochVectors[a];
            d2.x = c2[0], d2.y = c2[1], d2.z = c2[2];
          }
        }
        if (e.measuredBits) {
          let o2 = e.measuredBits;
          for (let a in o2) {
            let d2 = parseInt(a), c2 = r.dropzoneAt(d2).operation;
            qe2(c2) && (c2.value = o2[d2].toString());
          }
        }
        for (let o2 of r.dropzones) {
          let a = o2.operation;
          !Z(a) || a.if !== "" && (a.disabled = !e.flags[a.if]);
        }
        if (i === e.step) {
          let o2 = {};
          for (let a in e.amplitudes) {
            let d2 = e.amplitudes[a];
            o2[a] = new h(d2[0], d2[1]);
          }
          (n = this.circleNotation) == null || n.setAmplitudes(o2);
        }
        break;
      }
      case "finish": {
        for (let r of this.runCircuitButtons)
          r.running = false;
        break;
      }
      default:
        throw new d("Unknown service worker message", { data: e });
    }
  }
  run() {
    if (this.circleNotation === null)
      return;
    let t = this.activeStepIndex, e = this.circuit.serialize();
    m.need(e.length > 0, "non-zero step length");
    let i = Math.max(...e.map((r) => Math.max(...r.map((o2) => {
      let a = [];
      return rt(o2) && (a = o2.controls), Math.max(...o2.targets.concat(a));
    })))), n = i >= 0 ? i + 1 : 1;
    this.circleNotation.qubitCount = n, this.worker.postMessage({ qubitCount: n, stepIndex: t, steps: e, targets: this.visibleQubitCircleKets });
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let t = this.circuit.activeStep, e = this.circuit.breakpoint, i = t || e;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  updateVisibleQubitCircleKets(t) {
    let e = t.detail;
    m.notNull(e), this.visibleQubitCircleKets = e;
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    m.notNull(this.circuit);
    let t = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(t));
  }
}, "pt");
p2(pt, "QuantumSimulatorElement"), l2([attr], pt.prototype, "updateUrl", 2), l2([target], pt.prototype, "circuit", 2), l2([target], pt.prototype, "circleNotation", 2), l2([targets], pt.prototype, "runCircuitButtons", 2);
controller(pt);

// src/serviceworker-companion.js
if (navigator.serviceWorker) {
  if (location.hostname === "localhost") {
    navigator.serviceWorker.register("/serviceworker.js", { scope: "./" }).catch(function(error3) {
      console.log("[Companion]", "Service worker registration failed: " + error3);
    });
  } else {
    navigator.serviceWorker.register("/qni/serviceworker.js", { scope: "/qni/" }).catch(function(error3) {
      console.log("[Companion]", "Service worker registration failed: " + error3);
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
