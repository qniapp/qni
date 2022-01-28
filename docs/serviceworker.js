;(() => {
  var Zr = Object.create
  var Dt = Object.defineProperty
  var Kr = Object.getOwnPropertyDescriptor
  var Vr = Object.getOwnPropertyNames
  var Hr = Object.getPrototypeOf,
    Gr = Object.prototype.hasOwnProperty
  var Xr = (n) => Dt(n, '__esModule', { value: !0 }),
    t = (n, r) => Dt(n, 'name', { value: r, configurable: !0 })
  var Qr = (n, r) => () => (r || n((r = { exports: {} }).exports, r), r.exports)
  var Yr = (n, r, i, o) => {
      if ((r && typeof r == 'object') || typeof r == 'function')
        for (let h of Vr(r))
          !Gr.call(n, h) &&
            (i || h !== 'default') &&
            Dt(n, h, { get: () => r[h], enumerable: !(o = Kr(r, h)) || o.enumerable })
      return n
    },
    Jr = (n, r) =>
      Yr(
        Xr(
          Dt(
            n != null ? Zr(Hr(n)) : {},
            'default',
            !r && n && n.__esModule
              ? { get: () => n.default, enumerable: !0 }
              : { value: n, enumerable: !0 }
          )
        ),
        n
      )
  var Sr = Qr((vr, Er) => {
    ;(function (n) {
      'use strict'
      var r = 2e3,
        i = { s: 1, n: 0, d: 1 }
      function o(m) {
        function y() {
          var c = Error.apply(this, arguments)
          ;(c.name = this.name = m), (this.stack = c.stack), (this.message = c.message)
        }
        t(y, 'errorConstructor')
        function u() {}
        return (
          t(u, 'IntermediateInheritor'), (u.prototype = Error.prototype), (y.prototype = new u()), y
        )
      }
      t(o, 'createError')
      var h = (b.DivisionByZero = o('DivisionByZero')),
        U = (b.InvalidParameter = o('InvalidParameter'))
      function D(m, y) {
        return isNaN((m = parseInt(m, 10))) && S(), m * y
      }
      t(D, 'assign')
      function S() {
        throw new U()
      }
      t(S, 'throwInvalidParam')
      function N(m) {
        for (var y = {}, u = m, c = 2, g = 4; g <= u; ) {
          for (; u % c === 0; ) (u /= c), (y[c] = (y[c] || 0) + 1)
          g += 1 + 2 * c++
        }
        return u !== m ? u > 1 && (y[u] = (y[u] || 0) + 1) : (y[m] = (y[m] || 0) + 1), y
      }
      t(N, 'factorize')
      var _ = t(function (m, y) {
        var u = 0,
          c = 1,
          g = 1,
          F = 0,
          W = 0,
          E = 0,
          p = 1,
          T = 1,
          C = 0,
          k = 1,
          Z = 1,
          H = 1,
          un = 1e7,
          en
        if (m != null)
          if (y !== void 0) (u = m), (c = y), (g = u * c)
          else
            switch (typeof m) {
              case 'object': {
                'd' in m && 'n' in m
                  ? ((u = m.n), (c = m.d), 's' in m && (u *= m.s))
                  : 0 in m
                  ? ((u = m[0]), 1 in m && (c = m[1]))
                  : S(),
                  (g = u * c)
                break
              }
              case 'number': {
                if ((m < 0 && ((g = m), (m = -m)), m % 1 === 0)) u = m
                else if (m > 0) {
                  for (
                    m >= 1 &&
                    ((T = Math.pow(10, Math.floor(1 + Math.log(m) / Math.LN10))), (m /= T));
                    k <= un && H <= un;

                  )
                    if (((en = (C + Z) / (k + H)), m === en)) {
                      k + H <= un
                        ? ((u = C + Z), (c = k + H))
                        : H > k
                        ? ((u = Z), (c = H))
                        : ((u = C), (c = k))
                      break
                    } else
                      m > en ? ((C += Z), (k += H)) : ((Z += C), (H += k)),
                        k > un ? ((u = Z), (c = H)) : ((u = C), (c = k))
                  u *= T
                } else (isNaN(m) || isNaN(y)) && (c = u = NaN)
                break
              }
              case 'string':
                if (
                  ((k = m.match(/\d+|./g)),
                  k === null && S(),
                  k[C] === '-' ? ((g = -1), C++) : k[C] === '+' && C++,
                  k.length === C + 1
                    ? (W = D(k[C++], g))
                    : k[C + 1] === '.' || k[C] === '.'
                    ? (k[C] !== '.' && (F = D(k[C++], g)),
                      C++,
                      (C + 1 === k.length ||
                        (k[C + 1] === '(' && k[C + 3] === ')') ||
                        (k[C + 1] === "'" && k[C + 3] === "'")) &&
                        ((W = D(k[C], g)), (p = Math.pow(10, k[C].length)), C++),
                      ((k[C] === '(' && k[C + 2] === ')') || (k[C] === "'" && k[C + 2] === "'")) &&
                        ((E = D(k[C + 1], g)), (T = Math.pow(10, k[C + 1].length) - 1), (C += 3)))
                    : k[C + 1] === '/' || k[C + 1] === ':'
                    ? ((W = D(k[C], g)), (p = D(k[C + 2], 1)), (C += 3))
                    : k[C + 3] === '/' &&
                      k[C + 1] === ' ' &&
                      ((F = D(k[C], g)), (W = D(k[C + 2], g)), (p = D(k[C + 4], 1)), (C += 5)),
                  k.length <= C)
                ) {
                  ;(c = p * T), (g = u = E + c * F + T * W)
                  break
                }
              default:
                S()
            }
        if (c === 0) throw new h()
        ;(i.s = g < 0 ? -1 : 1), (i.n = Math.abs(u)), (i.d = Math.abs(c))
      }, 'parse')
      function B(m, y, u) {
        for (var c = 1; y > 0; m = (m * m) % u, y >>= 1) y & 1 && (c = (c * m) % u)
        return c
      }
      t(B, 'modpow')
      function A(m, y) {
        for (; y % 2 === 0; y /= 2);
        for (; y % 5 === 0; y /= 5);
        if (y === 1) return 0
        for (var u = 10 % y, c = 1; u !== 1; c++) if (((u = (u * 10) % y), c > r)) return 0
        return c
      }
      t(A, 'cycleLen')
      function K(m, y, u) {
        for (var c = 1, g = B(10, u, y), F = 0; F < 300; F++) {
          if (c === g) return F
          ;(c = (c * 10) % y), (g = (g * 10) % y)
        }
        return 0
      }
      t(K, 'cycleStart')
      function R(m, y) {
        if (!m) return y
        if (!y) return m
        for (;;) {
          if (((m %= y), !m)) return y
          if (((y %= m), !y)) return m
        }
      }
      t(R, 'gcd')
      function b(m, y) {
        if (!(this instanceof b)) return new b(m, y)
        _(m, y), (m = R(i.d, i.n)), (this.s = i.s), (this.n = i.n / m), (this.d = i.d / m)
      }
      t(b, 'Fraction'),
        (b.prototype = {
          s: 1,
          n: 0,
          d: 1,
          abs: function () {
            return new b(this.n, this.d)
          },
          neg: function () {
            return new b(-this.s * this.n, this.d)
          },
          add: function (m, y) {
            return _(m, y), new b(this.s * this.n * i.d + i.s * this.d * i.n, this.d * i.d)
          },
          sub: function (m, y) {
            return _(m, y), new b(this.s * this.n * i.d - i.s * this.d * i.n, this.d * i.d)
          },
          mul: function (m, y) {
            return _(m, y), new b(this.s * i.s * this.n * i.n, this.d * i.d)
          },
          div: function (m, y) {
            return _(m, y), new b(this.s * i.s * this.n * i.d, this.d * i.n)
          },
          clone: function () {
            return new b(this)
          },
          mod: function (m, y) {
            return isNaN(this.n) || isNaN(this.d)
              ? new b(NaN)
              : m === void 0
              ? new b((this.s * this.n) % this.d, 1)
              : (_(m, y),
                i.n === 0 && this.d === 0 && b(0, 0),
                new b((this.s * (i.d * this.n)) % (i.n * this.d), i.d * this.d))
          },
          gcd: function (m, y) {
            return _(m, y), new b(R(i.n, this.n) * R(i.d, this.d), i.d * this.d)
          },
          lcm: function (m, y) {
            return (
              _(m, y),
              i.n === 0 && this.n === 0
                ? new b()
                : new b(i.n * this.n, R(i.n, this.n) * R(i.d, this.d))
            )
          },
          ceil: function (m) {
            return (
              (m = Math.pow(10, m || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new b(NaN)
                : new b(Math.ceil((m * this.s * this.n) / this.d), m)
            )
          },
          floor: function (m) {
            return (
              (m = Math.pow(10, m || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new b(NaN)
                : new b(Math.floor((m * this.s * this.n) / this.d), m)
            )
          },
          round: function (m) {
            return (
              (m = Math.pow(10, m || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new b(NaN)
                : new b(Math.round((m * this.s * this.n) / this.d), m)
            )
          },
          inverse: function () {
            return new b(this.s * this.d, this.n)
          },
          pow: function (m, y) {
            if ((_(m, y), i.d === 1))
              return i.s < 0
                ? new b(Math.pow(this.s * this.d, i.n), Math.pow(this.n, i.n))
                : new b(Math.pow(this.s * this.n, i.n), Math.pow(this.d, i.n))
            if (this.s < 0) return null
            var u = N(this.n),
              c = N(this.d),
              g = 1,
              F = 1
            for (var W in u)
              if (W !== '1') {
                if (W === '0') {
                  g = 0
                  break
                }
                if (((u[W] *= i.n), u[W] % i.d === 0)) u[W] /= i.d
                else return null
                g *= Math.pow(W, u[W])
              }
            for (var W in c)
              if (W !== '1') {
                if (((c[W] *= i.n), c[W] % i.d === 0)) c[W] /= i.d
                else return null
                F *= Math.pow(W, c[W])
              }
            return i.s < 0 ? new b(F, g) : new b(g, F)
          },
          equals: function (m, y) {
            return _(m, y), this.s * this.n * i.d === i.s * i.n * this.d
          },
          compare: function (m, y) {
            _(m, y)
            var u = this.s * this.n * i.d - i.s * i.n * this.d
            return (0 < u) - (u < 0)
          },
          simplify: function (m) {
            if (isNaN(this.n) || isNaN(this.d)) return this
            var y = this.abs().toContinued()
            m = m || 0.001
            function u(F) {
              return F.length === 1 ? new b(F[0]) : u(F.slice(1)).inverse().add(F[0])
            }
            t(u, 'rec')
            for (var c = 0; c < y.length; c++) {
              var g = u(y.slice(0, c + 1))
              if (g.sub(this.abs()).abs().valueOf() < m) return g.mul(this.s)
            }
            return this
          },
          divisible: function (m, y) {
            return _(m, y), !(!(i.n * this.d) || (this.n * i.d) % (i.n * this.d))
          },
          valueOf: function () {
            return (this.s * this.n) / this.d
          },
          toFraction: function (m) {
            var y,
              u = '',
              c = this.n,
              g = this.d
            return (
              this.s < 0 && (u += '-'),
              g === 1
                ? (u += c)
                : (m && (y = Math.floor(c / g)) > 0 && ((u += y), (u += ' '), (c %= g)),
                  (u += c),
                  (u += '/'),
                  (u += g)),
              u
            )
          },
          toLatex: function (m) {
            var y,
              u = '',
              c = this.n,
              g = this.d
            return (
              this.s < 0 && (u += '-'),
              g === 1
                ? (u += c)
                : (m && (y = Math.floor(c / g)) > 0 && ((u += y), (c %= g)),
                  (u += '\\frac{'),
                  (u += c),
                  (u += '}{'),
                  (u += g),
                  (u += '}')),
              u
            )
          },
          toContinued: function () {
            var m,
              y = this.n,
              u = this.d,
              c = []
            if (isNaN(y) || isNaN(u)) return c
            do c.push(Math.floor(y / u)), (m = y % u), (y = u), (u = m)
            while (y !== 1)
            return c
          },
          toString: function (m) {
            var y,
              u = this.n,
              c = this.d
            if (isNaN(u) || isNaN(c)) return 'NaN'
            m = m || 15
            var g = A(u, c),
              F = K(u, c, g),
              W = this.s === -1 ? '-' : ''
            if (((W += (u / c) | 0), (u %= c), (u *= 10), u && (W += '.'), g)) {
              for (var E = F; E--; ) (W += (u / c) | 0), (u %= c), (u *= 10)
              W += '('
              for (var E = g; E--; ) (W += (u / c) | 0), (u %= c), (u *= 10)
              W += ')'
            } else for (var E = m; u && E--; ) (W += (u / c) | 0), (u %= c), (u *= 10)
            return W
          },
        }),
        typeof define == 'function' && define.amd
          ? define([], function () {
              return b
            })
          : typeof vr == 'object'
          ? (Object.defineProperty(b, '__esModule', { value: !0 }),
            (b.default = b),
            (b.Fraction = b),
            (Er.exports = b))
          : (n.Fraction = b)
    })(vr)
  })
  var xr = Object.create,
    fr = Object.defineProperty,
    ni = Object.getOwnPropertyDescriptor,
    Ir = Object.getOwnPropertyNames,
    ti = Object.getPrototypeOf,
    ri = Object.prototype.hasOwnProperty,
    ii = t((n) => fr(n, '__esModule', { value: !0 }), '__markAsModule'),
    gn = t(
      (n, r) =>
        t(function () {
          return r || (0, n[Ir(n)[0]])((r = { exports: {} }).exports, r), r.exports
        }, '__require'),
      '__commonJS'
    ),
    ei = t((n, r, i, o) => {
      if ((r && typeof r == 'object') || typeof r == 'function')
        for (let h of Ir(r))
          !ri.call(n, h) &&
            (i || h !== 'default') &&
            fr(n, h, { get: () => r[h], enumerable: !(o = ni(r, h)) || o.enumerable })
      return n
    }, '__reExport'),
    Bt = t(
      (n, r) =>
        ei(
          ii(
            fr(
              n != null ? xr(ti(n)) : {},
              'default',
              !r && n && n.__esModule
                ? { get: () => n.default, enumerable: !0 }
                : { value: n, enumerable: !0 }
            )
          ),
          n
        ),
      '__toESM'
    ),
    ai = gn({
      '../../node_modules/fraction.js/fraction.js'(n, r) {
        ;(function (i) {
          'use strict'
          var o = 2e3,
            h = { s: 1, n: 0, d: 1 }
          function U(u) {
            function c() {
              var F = Error.apply(this, arguments)
              ;(F.name = this.name = u), (this.stack = F.stack), (this.message = F.message)
            }
            t(c, 'errorConstructor')
            function g() {}
            return (
              t(g, 'IntermediateInheritor'),
              (g.prototype = Error.prototype),
              (c.prototype = new g()),
              c
            )
          }
          t(U, 'createError')
          var D = (y.DivisionByZero = U('DivisionByZero')),
            S = (y.InvalidParameter = U('InvalidParameter'))
          function N(u, c) {
            return isNaN((u = parseInt(u, 10))) && _(), u * c
          }
          t(N, 'assign')
          function _() {
            throw new S()
          }
          t(_, 'throwInvalidParam')
          function B(u) {
            for (var c = {}, g = u, F = 2, W = 4; W <= g; ) {
              for (; g % F === 0; ) (g /= F), (c[F] = (c[F] || 0) + 1)
              W += 1 + 2 * F++
            }
            return g !== u ? g > 1 && (c[g] = (c[g] || 0) + 1) : (c[u] = (c[u] || 0) + 1), c
          }
          t(B, 'factorize')
          var A = t(function (u, c) {
            var g = 0,
              F = 1,
              W = 1,
              E = 0,
              p = 0,
              T = 0,
              C = 1,
              k = 1,
              Z = 0,
              H = 1,
              un = 1,
              en = 1,
              yn = 1e7,
              Nn
            if (u != null)
              if (c !== void 0) (g = u), (F = c), (W = g * F)
              else
                switch (typeof u) {
                  case 'object': {
                    'd' in u && 'n' in u
                      ? ((g = u.n), (F = u.d), 's' in u && (g *= u.s))
                      : 0 in u
                      ? ((g = u[0]), 1 in u && (F = u[1]))
                      : _(),
                      (W = g * F)
                    break
                  }
                  case 'number': {
                    if ((u < 0 && ((W = u), (u = -u)), u % 1 === 0)) g = u
                    else if (u > 0) {
                      for (
                        u >= 1 &&
                        ((k = Math.pow(10, Math.floor(1 + Math.log(u) / Math.LN10))), (u /= k));
                        H <= yn && en <= yn;

                      )
                        if (((Nn = (Z + un) / (H + en)), u === Nn)) {
                          H + en <= yn
                            ? ((g = Z + un), (F = H + en))
                            : en > H
                            ? ((g = un), (F = en))
                            : ((g = Z), (F = H))
                          break
                        } else
                          u > Nn ? ((Z += un), (H += en)) : ((un += Z), (en += H)),
                            H > yn ? ((g = un), (F = en)) : ((g = Z), (F = H))
                      g *= k
                    } else (isNaN(u) || isNaN(c)) && (F = g = NaN)
                    break
                  }
                  case 'string':
                    if (
                      ((H = u.match(/\d+|./g)),
                      H === null && _(),
                      H[Z] === '-' ? ((W = -1), Z++) : H[Z] === '+' && Z++,
                      H.length === Z + 1
                        ? (p = N(H[Z++], W))
                        : H[Z + 1] === '.' || H[Z] === '.'
                        ? (H[Z] !== '.' && (E = N(H[Z++], W)),
                          Z++,
                          (Z + 1 === H.length ||
                            (H[Z + 1] === '(' && H[Z + 3] === ')') ||
                            (H[Z + 1] === "'" && H[Z + 3] === "'")) &&
                            ((p = N(H[Z], W)), (C = Math.pow(10, H[Z].length)), Z++),
                          ((H[Z] === '(' && H[Z + 2] === ')') ||
                            (H[Z] === "'" && H[Z + 2] === "'")) &&
                            ((T = N(H[Z + 1], W)),
                            (k = Math.pow(10, H[Z + 1].length) - 1),
                            (Z += 3)))
                        : H[Z + 1] === '/' || H[Z + 1] === ':'
                        ? ((p = N(H[Z], W)), (C = N(H[Z + 2], 1)), (Z += 3))
                        : H[Z + 3] === '/' &&
                          H[Z + 1] === ' ' &&
                          ((E = N(H[Z], W)), (p = N(H[Z + 2], W)), (C = N(H[Z + 4], 1)), (Z += 5)),
                      H.length <= Z)
                    ) {
                      ;(F = C * k), (W = g = T + F * E + k * p)
                      break
                    }
                  default:
                    _()
                }
            if (F === 0) throw new D()
            ;(h.s = W < 0 ? -1 : 1), (h.n = Math.abs(g)), (h.d = Math.abs(F))
          }, 'parse')
          function K(u, c, g) {
            for (var F = 1; c > 0; u = (u * u) % g, c >>= 1) c & 1 && (F = (F * u) % g)
            return F
          }
          t(K, 'modpow')
          function R(u, c) {
            for (; c % 2 === 0; c /= 2);
            for (; c % 5 === 0; c /= 5);
            if (c === 1) return 0
            for (var g = 10 % c, F = 1; g !== 1; F++) if (((g = (g * 10) % c), F > o)) return 0
            return F
          }
          t(R, 'cycleLen')
          function b(u, c, g) {
            for (var F = 1, W = K(10, g, c), E = 0; E < 300; E++) {
              if (F === W) return E
              ;(F = (F * 10) % c), (W = (W * 10) % c)
            }
            return 0
          }
          t(b, 'cycleStart')
          function m(u, c) {
            if (!u) return c
            if (!c) return u
            for (;;) {
              if (((u %= c), !u)) return c
              if (((c %= u), !c)) return u
            }
          }
          t(m, 'gcd')
          function y(u, c) {
            if (!(this instanceof y)) return new y(u, c)
            A(u, c), (u = m(h.d, h.n)), (this.s = h.s), (this.n = h.n / u), (this.d = h.d / u)
          }
          t(y, 'Fraction'),
            (y.prototype = {
              s: 1,
              n: 0,
              d: 1,
              abs: function () {
                return new y(this.n, this.d)
              },
              neg: function () {
                return new y(-this.s * this.n, this.d)
              },
              add: function (u, c) {
                return A(u, c), new y(this.s * this.n * h.d + h.s * this.d * h.n, this.d * h.d)
              },
              sub: function (u, c) {
                return A(u, c), new y(this.s * this.n * h.d - h.s * this.d * h.n, this.d * h.d)
              },
              mul: function (u, c) {
                return A(u, c), new y(this.s * h.s * this.n * h.n, this.d * h.d)
              },
              div: function (u, c) {
                return A(u, c), new y(this.s * h.s * this.n * h.d, this.d * h.n)
              },
              clone: function () {
                return new y(this)
              },
              mod: function (u, c) {
                return isNaN(this.n) || isNaN(this.d)
                  ? new y(NaN)
                  : u === void 0
                  ? new y((this.s * this.n) % this.d, 1)
                  : (A(u, c),
                    h.n === 0 && this.d === 0 && y(0, 0),
                    new y((this.s * (h.d * this.n)) % (h.n * this.d), h.d * this.d))
              },
              gcd: function (u, c) {
                return A(u, c), new y(m(h.n, this.n) * m(h.d, this.d), h.d * this.d)
              },
              lcm: function (u, c) {
                return (
                  A(u, c),
                  h.n === 0 && this.n === 0
                    ? new y()
                    : new y(h.n * this.n, m(h.n, this.n) * m(h.d, this.d))
                )
              },
              ceil: function (u) {
                return (
                  (u = Math.pow(10, u || 0)),
                  isNaN(this.n) || isNaN(this.d)
                    ? new y(NaN)
                    : new y(Math.ceil((u * this.s * this.n) / this.d), u)
                )
              },
              floor: function (u) {
                return (
                  (u = Math.pow(10, u || 0)),
                  isNaN(this.n) || isNaN(this.d)
                    ? new y(NaN)
                    : new y(Math.floor((u * this.s * this.n) / this.d), u)
                )
              },
              round: function (u) {
                return (
                  (u = Math.pow(10, u || 0)),
                  isNaN(this.n) || isNaN(this.d)
                    ? new y(NaN)
                    : new y(Math.round((u * this.s * this.n) / this.d), u)
                )
              },
              inverse: function () {
                return new y(this.s * this.d, this.n)
              },
              pow: function (u, c) {
                if ((A(u, c), h.d === 1))
                  return h.s < 0
                    ? new y(Math.pow(this.s * this.d, h.n), Math.pow(this.n, h.n))
                    : new y(Math.pow(this.s * this.n, h.n), Math.pow(this.d, h.n))
                if (this.s < 0) return null
                var g = B(this.n),
                  F = B(this.d),
                  W = 1,
                  E = 1
                for (var p in g)
                  if (p !== '1') {
                    if (p === '0') {
                      W = 0
                      break
                    }
                    if (((g[p] *= h.n), g[p] % h.d === 0)) g[p] /= h.d
                    else return null
                    W *= Math.pow(p, g[p])
                  }
                for (var p in F)
                  if (p !== '1') {
                    if (((F[p] *= h.n), F[p] % h.d === 0)) F[p] /= h.d
                    else return null
                    E *= Math.pow(p, F[p])
                  }
                return h.s < 0 ? new y(E, W) : new y(W, E)
              },
              equals: function (u, c) {
                return A(u, c), this.s * this.n * h.d === h.s * h.n * this.d
              },
              compare: function (u, c) {
                A(u, c)
                var g = this.s * this.n * h.d - h.s * h.n * this.d
                return (0 < g) - (g < 0)
              },
              simplify: function (u) {
                if (isNaN(this.n) || isNaN(this.d)) return this
                var c = this.abs().toContinued()
                u = u || 0.001
                function g(E) {
                  return E.length === 1 ? new y(E[0]) : g(E.slice(1)).inverse().add(E[0])
                }
                t(g, 'rec')
                for (var F = 0; F < c.length; F++) {
                  var W = g(c.slice(0, F + 1))
                  if (W.sub(this.abs()).abs().valueOf() < u) return W.mul(this.s)
                }
                return this
              },
              divisible: function (u, c) {
                return A(u, c), !(!(h.n * this.d) || (this.n * h.d) % (h.n * this.d))
              },
              valueOf: function () {
                return (this.s * this.n) / this.d
              },
              toFraction: function (u) {
                var c,
                  g = '',
                  F = this.n,
                  W = this.d
                return (
                  this.s < 0 && (g += '-'),
                  W === 1
                    ? (g += F)
                    : (u && (c = Math.floor(F / W)) > 0 && ((g += c), (g += ' '), (F %= W)),
                      (g += F),
                      (g += '/'),
                      (g += W)),
                  g
                )
              },
              toLatex: function (u) {
                var c,
                  g = '',
                  F = this.n,
                  W = this.d
                return (
                  this.s < 0 && (g += '-'),
                  W === 1
                    ? (g += F)
                    : (u && (c = Math.floor(F / W)) > 0 && ((g += c), (F %= W)),
                      (g += '\\frac{'),
                      (g += F),
                      (g += '}{'),
                      (g += W),
                      (g += '}')),
                  g
                )
              },
              toContinued: function () {
                var u,
                  c = this.n,
                  g = this.d,
                  F = []
                if (isNaN(c) || isNaN(g)) return F
                do F.push(Math.floor(c / g)), (u = c % g), (c = g), (g = u)
                while (c !== 1)
                return F
              },
              toString: function (u) {
                var c,
                  g = this.n,
                  F = this.d
                if (isNaN(g) || isNaN(F)) return 'NaN'
                u = u || 15
                var W = R(g, F),
                  E = b(g, F, W),
                  p = this.s === -1 ? '-' : ''
                if (((p += (g / F) | 0), (g %= F), (g *= 10), g && (p += '.'), W)) {
                  for (var T = E; T--; ) (p += (g / F) | 0), (g %= F), (g *= 10)
                  p += '('
                  for (var T = W; T--; ) (p += (g / F) | 0), (g %= F), (g *= 10)
                  p += ')'
                } else for (var T = u; g && T--; ) (p += (g / F) | 0), (g %= F), (g *= 10)
                return p
              },
            }),
            typeof define == 'function' && define.amd
              ? define([], function () {
                  return y
                })
              : typeof n == 'object'
              ? (Object.defineProperty(y, '__esModule', { value: !0 }),
                (y.default = y),
                (y.Fraction = y),
                (r.exports = y))
              : (i.Fraction = y)
        })(n)
      },
    }),
    sr = gn({
      '../../node_modules/fp-ts/lib/number.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.Field =
            n.MonoidProduct =
            n.MonoidSum =
            n.SemigroupProduct =
            n.SemigroupSum =
            n.MagmaSub =
            n.Show =
            n.Bounded =
            n.Ord =
            n.Eq =
            n.isNumber =
              void 0)
        var r = t(function (i) {
          return typeof i == 'number'
        }, 'isNumber')
        ;(n.isNumber = r),
          (n.Eq = {
            equals: function (i, o) {
              return i === o
            },
          }),
          (n.Ord = {
            equals: n.Eq.equals,
            compare: function (i, o) {
              return i < o ? -1 : i > o ? 1 : 0
            },
          }),
          (n.Bounded = { equals: n.Eq.equals, compare: n.Ord.compare, top: 1 / 0, bottom: -1 / 0 }),
          (n.Show = {
            show: function (i) {
              return JSON.stringify(i)
            },
          }),
          (n.MagmaSub = {
            concat: function (i, o) {
              return i - o
            },
          }),
          (n.SemigroupSum = {
            concat: function (i, o) {
              return i + o
            },
          }),
          (n.SemigroupProduct = {
            concat: function (i, o) {
              return i * o
            },
          }),
          (n.MonoidSum = { concat: n.SemigroupSum.concat, empty: 0 }),
          (n.MonoidProduct = { concat: n.SemigroupProduct.concat, empty: 1 }),
          (n.Field = {
            add: n.SemigroupSum.concat,
            zero: 0,
            mul: n.SemigroupProduct.concat,
            one: 1,
            sub: n.MagmaSub.concat,
            degree: function (i) {
              return 1
            },
            div: function (i, o) {
              return i / o
            },
            mod: function (i, o) {
              return i % o
            },
          })
      },
    }),
    Vn = gn({
      '../../node_modules/fp-ts/lib/function.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.getEndomorphismMonoid =
            n.not =
            n.SK =
            n.hole =
            n.pipe =
            n.untupled =
            n.tupled =
            n.absurd =
            n.decrement =
            n.increment =
            n.tuple =
            n.flow =
            n.flip =
            n.constVoid =
            n.constUndefined =
            n.constNull =
            n.constFalse =
            n.constTrue =
            n.constant =
            n.unsafeCoerce =
            n.identity =
            n.apply =
            n.getRing =
            n.getSemiring =
            n.getMonoid =
            n.getSemigroup =
            n.getBooleanAlgebra =
              void 0)
        var r = t(function (W) {
          return function () {
            return {
              meet: function (E, p) {
                return function (T) {
                  return W.meet(E(T), p(T))
                }
              },
              join: function (E, p) {
                return function (T) {
                  return W.join(E(T), p(T))
                }
              },
              zero: function () {
                return W.zero
              },
              one: function () {
                return W.one
              },
              implies: function (E, p) {
                return function (T) {
                  return W.implies(E(T), p(T))
                }
              },
              not: function (E) {
                return function (p) {
                  return W.not(E(p))
                }
              },
            }
          }
        }, 'getBooleanAlgebra')
        n.getBooleanAlgebra = r
        var i = t(function (W) {
          return function () {
            return {
              concat: function (E, p) {
                return function (T) {
                  return W.concat(E(T), p(T))
                }
              },
            }
          }
        }, 'getSemigroup')
        n.getSemigroup = i
        var o = t(function (W) {
          var E = n.getSemigroup(W)
          return function () {
            return {
              concat: E().concat,
              empty: function () {
                return W.empty
              },
            }
          }
        }, 'getMonoid')
        n.getMonoid = o
        var h = t(function (W) {
          return {
            add: function (E, p) {
              return function (T) {
                return W.add(E(T), p(T))
              }
            },
            zero: function () {
              return W.zero
            },
            mul: function (E, p) {
              return function (T) {
                return W.mul(E(T), p(T))
              }
            },
            one: function () {
              return W.one
            },
          }
        }, 'getSemiring')
        n.getSemiring = h
        var U = t(function (W) {
          var E = n.getSemiring(W)
          return {
            add: E.add,
            mul: E.mul,
            one: E.one,
            zero: E.zero,
            sub: function (p, T) {
              return function (C) {
                return W.sub(p(C), T(C))
              }
            },
          }
        }, 'getRing')
        n.getRing = U
        var D = t(function (W) {
          return function (E) {
            return E(W)
          }
        }, 'apply')
        n.apply = D
        function S(W) {
          return W
        }
        t(S, 'identity'), (n.identity = S), (n.unsafeCoerce = S)
        function N(W) {
          return function () {
            return W
          }
        }
        t(N, 'constant'),
          (n.constant = N),
          (n.constTrue = N(!0)),
          (n.constFalse = N(!1)),
          (n.constNull = N(null)),
          (n.constUndefined = N(void 0)),
          (n.constVoid = n.constUndefined)
        function _(W) {
          return function (E, p) {
            return W(p, E)
          }
        }
        t(_, 'flip'), (n.flip = _)
        function B(W, E, p, T, C, k, Z, H, un) {
          switch (arguments.length) {
            case 1:
              return W
            case 2:
              return function () {
                return E(W.apply(this, arguments))
              }
            case 3:
              return function () {
                return p(E(W.apply(this, arguments)))
              }
            case 4:
              return function () {
                return T(p(E(W.apply(this, arguments))))
              }
            case 5:
              return function () {
                return C(T(p(E(W.apply(this, arguments)))))
              }
            case 6:
              return function () {
                return k(C(T(p(E(W.apply(this, arguments))))))
              }
            case 7:
              return function () {
                return Z(k(C(T(p(E(W.apply(this, arguments)))))))
              }
            case 8:
              return function () {
                return H(Z(k(C(T(p(E(W.apply(this, arguments))))))))
              }
            case 9:
              return function () {
                return un(H(Z(k(C(T(p(E(W.apply(this, arguments)))))))))
              }
          }
        }
        t(B, 'flow'), (n.flow = B)
        function A() {
          for (var W = [], E = 0; E < arguments.length; E++) W[E] = arguments[E]
          return W
        }
        t(A, 'tuple'), (n.tuple = A)
        function K(W) {
          return W + 1
        }
        t(K, 'increment'), (n.increment = K)
        function R(W) {
          return W - 1
        }
        t(R, 'decrement'), (n.decrement = R)
        function b(W) {
          throw new Error('Called `absurd` function which should be uncallable')
        }
        t(b, 'absurd'), (n.absurd = b)
        function m(W) {
          return function (E) {
            return W.apply(void 0, E)
          }
        }
        t(m, 'tupled'), (n.tupled = m)
        function y(W) {
          return function () {
            for (var E = [], p = 0; p < arguments.length; p++) E[p] = arguments[p]
            return W(E)
          }
        }
        t(y, 'untupled'), (n.untupled = y)
        function u(W, E, p, T, C, k, Z, H, un) {
          switch (arguments.length) {
            case 1:
              return W
            case 2:
              return E(W)
            case 3:
              return p(E(W))
            case 4:
              return T(p(E(W)))
            case 5:
              return C(T(p(E(W))))
            case 6:
              return k(C(T(p(E(W)))))
            case 7:
              return Z(k(C(T(p(E(W))))))
            case 8:
              return H(Z(k(C(T(p(E(W)))))))
            case 9:
              return un(H(Z(k(C(T(p(E(W))))))))
            default:
              for (var en = arguments[0], yn = 1; yn < arguments.length; yn++)
                en = arguments[yn](en)
              return en
          }
        }
        t(u, 'pipe'), (n.pipe = u), (n.hole = b)
        var c = t(function (W, E) {
          return E
        }, 'SK')
        n.SK = c
        function g(W) {
          return function (E) {
            return !W(E)
          }
        }
        t(g, 'not'), (n.not = g)
        var F = t(function () {
          return {
            concat: function (W, E) {
              return B(W, E)
            },
            empty: S,
          }
        }, 'getEndomorphismMonoid')
        n.getEndomorphismMonoid = F
      },
    }),
    Pt = gn({
      '../../node_modules/fp-ts/lib/Apply.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.sequenceS =
            n.sequenceT =
            n.getApplySemigroup =
            n.apS =
            n.apSecond =
            n.apFirst =
            n.ap =
              void 0)
        var r = Vn()
        function i(R, b) {
          return function (m) {
            return function (y) {
              return R.ap(
                R.map(y, function (u) {
                  return function (c) {
                    return b.ap(u, c)
                  }
                }),
                m
              )
            }
          }
        }
        t(i, 'ap'), (n.ap = i)
        function o(R) {
          return function (b) {
            return function (m) {
              return R.ap(
                R.map(m, function (y) {
                  return function () {
                    return y
                  }
                }),
                b
              )
            }
          }
        }
        t(o, 'apFirst'), (n.apFirst = o)
        function h(R) {
          return function (b) {
            return function (m) {
              return R.ap(
                R.map(m, function () {
                  return function (y) {
                    return y
                  }
                }),
                b
              )
            }
          }
        }
        t(h, 'apSecond'), (n.apSecond = h)
        function U(R) {
          return function (b, m) {
            return function (y) {
              return R.ap(
                R.map(y, function (u) {
                  return function (c) {
                    var g
                    return Object.assign({}, u, ((g = {}), (g[b] = c), g))
                  }
                }),
                m
              )
            }
          }
        }
        t(U, 'apS'), (n.apS = U)
        function D(R) {
          return function (b) {
            return {
              concat: function (m, y) {
                return R.ap(
                  R.map(m, function (u) {
                    return function (c) {
                      return b.concat(u, c)
                    }
                  }),
                  y
                )
              },
            }
          }
        }
        t(D, 'getApplySemigroup'), (n.getApplySemigroup = D)
        function S(R, b, m) {
          return function (y) {
            for (var u = Array(m.length + 1), c = 0; c < m.length; c++) u[c] = m[c]
            return (u[m.length] = y), b === 0 ? R.apply(null, u) : S(R, b - 1, u)
          }
        }
        t(S, 'curried')
        var N = {
          1: function (R) {
            return [R]
          },
          2: function (R) {
            return function (b) {
              return [R, b]
            }
          },
          3: function (R) {
            return function (b) {
              return function (m) {
                return [R, b, m]
              }
            }
          },
          4: function (R) {
            return function (b) {
              return function (m) {
                return function (y) {
                  return [R, b, m, y]
                }
              }
            }
          },
          5: function (R) {
            return function (b) {
              return function (m) {
                return function (y) {
                  return function (u) {
                    return [R, b, m, y, u]
                  }
                }
              }
            }
          },
        }
        function _(R) {
          return N.hasOwnProperty(R) || (N[R] = S(r.tuple, R - 1, [])), N[R]
        }
        t(_, 'getTupleConstructor')
        function B(R) {
          return function () {
            for (var b = [], m = 0; m < arguments.length; m++) b[m] = arguments[m]
            for (var y = b.length, u = _(y), c = R.map(b[0], u), g = 1; g < y; g++)
              c = R.ap(c, b[g])
            return c
          }
        }
        t(B, 'sequenceT'), (n.sequenceT = B)
        function A(R) {
          var b = R.length
          switch (b) {
            case 1:
              return function (m) {
                var y
                return (y = {}), (y[R[0]] = m), y
              }
            case 2:
              return function (m) {
                return function (y) {
                  var u
                  return (u = {}), (u[R[0]] = m), (u[R[1]] = y), u
                }
              }
            case 3:
              return function (m) {
                return function (y) {
                  return function (u) {
                    var c
                    return (c = {}), (c[R[0]] = m), (c[R[1]] = y), (c[R[2]] = u), c
                  }
                }
              }
            case 4:
              return function (m) {
                return function (y) {
                  return function (u) {
                    return function (c) {
                      var g
                      return (g = {}), (g[R[0]] = m), (g[R[1]] = y), (g[R[2]] = u), (g[R[3]] = c), g
                    }
                  }
                }
              }
            case 5:
              return function (m) {
                return function (y) {
                  return function (u) {
                    return function (c) {
                      return function (g) {
                        var F
                        return (
                          (F = {}),
                          (F[R[0]] = m),
                          (F[R[1]] = y),
                          (F[R[2]] = u),
                          (F[R[3]] = c),
                          (F[R[4]] = g),
                          F
                        )
                      }
                    }
                  }
                }
              }
            default:
              return S(
                function () {
                  for (var m = [], y = 0; y < arguments.length; y++) m[y] = arguments[y]
                  for (var u = {}, c = 0; c < b; c++) u[R[c]] = m[c]
                  return u
                },
                b - 1,
                []
              )
          }
        }
        t(A, 'getRecordConstructor')
        function K(R) {
          return function (b) {
            for (
              var m = Object.keys(b), y = m.length, u = A(m), c = R.map(b[m[0]], u), g = 1;
              g < y;
              g++
            )
              c = R.ap(c, b[m[g]])
            return c
          }
        }
        t(K, 'sequenceS'), (n.sequenceS = K)
      },
    }),
    jt = gn({
      '../../node_modules/fp-ts/lib/Chain.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }), (n.bind = n.chainFirst = void 0)
        function r(o) {
          return function (h) {
            return function (U) {
              return o.chain(U, function (D) {
                return o.map(h(D), function () {
                  return D
                })
              })
            }
          }
        }
        t(r, 'chainFirst'), (n.chainFirst = r)
        function i(o) {
          return function (h, U) {
            return function (D) {
              return o.chain(D, function (S) {
                return o.map(U(S), function (N) {
                  var _
                  return Object.assign({}, S, ((_ = {}), (_[h] = N), _))
                })
              })
            }
          }
        }
        t(i, 'bind'), (n.bind = i)
      },
    }),
    Et = gn({
      '../../node_modules/fp-ts/lib/internal.js'(n) {
        'use strict'
        var r =
          (n && n.__spreadArray) ||
          function (b, m) {
            for (var y = 0, u = m.length, c = b.length; y < u; y++, c++) b[c] = m[y]
            return b
          }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.fromReadonlyNonEmptyArray =
            n.has =
            n.emptyRecord =
            n.emptyReadonlyArray =
            n.tail =
            n.head =
            n.isNonEmpty =
            n.singleton =
            n.right =
            n.left =
            n.isRight =
            n.isLeft =
            n.some =
            n.none =
            n.isSome =
            n.isNone =
              void 0)
        var i = t(function (b) {
          return b._tag === 'None'
        }, 'isNone')
        n.isNone = i
        var o = t(function (b) {
          return b._tag === 'Some'
        }, 'isSome')
        ;(n.isSome = o), (n.none = { _tag: 'None' })
        var h = t(function (b) {
          return { _tag: 'Some', value: b }
        }, 'some')
        n.some = h
        var U = t(function (b) {
          return b._tag === 'Left'
        }, 'isLeft')
        n.isLeft = U
        var D = t(function (b) {
          return b._tag === 'Right'
        }, 'isRight')
        n.isRight = D
        var S = t(function (b) {
          return { _tag: 'Left', left: b }
        }, 'left')
        n.left = S
        var N = t(function (b) {
          return { _tag: 'Right', right: b }
        }, 'right')
        n.right = N
        var _ = t(function (b) {
          return [b]
        }, 'singleton')
        n.singleton = _
        var B = t(function (b) {
          return b.length > 0
        }, 'isNonEmpty2')
        n.isNonEmpty = B
        var A = t(function (b) {
          return b[0]
        }, 'head')
        n.head = A
        var K = t(function (b) {
          return b.slice(1)
        }, 'tail')
        ;(n.tail = K),
          (n.emptyReadonlyArray = []),
          (n.emptyRecord = {}),
          (n.has = Object.prototype.hasOwnProperty)
        var R = t(function (b) {
          return r([b[0]], b.slice(1))
        }, 'fromReadonlyNonEmptyArray')
        n.fromReadonlyNonEmptyArray = R
      },
    }),
    br = gn({
      '../../node_modules/fp-ts/lib/FromEither.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (R, b, m, y) {
                  y === void 0 && (y = m),
                    Object.defineProperty(R, y, {
                      enumerable: !0,
                      get: function () {
                        return b[m]
                      },
                    })
                }
              : function (R, b, m, y) {
                  y === void 0 && (y = m), (R[y] = b[m])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (R, b) {
                  Object.defineProperty(R, 'default', { enumerable: !0, value: b })
                }
              : function (R, b) {
                  R.default = b
                }),
          o =
            (n && n.__importStar) ||
            function (R) {
              if (R && R.__esModule) return R
              var b = {}
              if (R != null)
                for (var m in R)
                  m !== 'default' && Object.prototype.hasOwnProperty.call(R, m) && r(b, R, m)
              return i(b, R), b
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.filterOrElse =
            n.chainEitherK =
            n.fromEitherK =
            n.chainOptionK =
            n.fromOptionK =
            n.fromPredicate =
            n.fromOption =
              void 0)
        var h = Vn(),
          U = o(Et())
        function D(R) {
          return function (b) {
            return function (m) {
              return R.fromEither(U.isNone(m) ? U.left(b()) : U.right(m.value))
            }
          }
        }
        t(D, 'fromOption'), (n.fromOption = D)
        function S(R) {
          return function (b, m) {
            return function (y) {
              return R.fromEither(b(y) ? U.right(y) : U.left(m(y)))
            }
          }
        }
        t(S, 'fromPredicate'), (n.fromPredicate = S)
        function N(R) {
          var b = D(R)
          return function (m) {
            var y = b(m)
            return function (u) {
              return h.flow(u, y)
            }
          }
        }
        t(N, 'fromOptionK'), (n.fromOptionK = N)
        function _(R, b) {
          var m = N(R)
          return function (y) {
            var u = m(y)
            return function (c) {
              return function (g) {
                return b.chain(g, u(c))
              }
            }
          }
        }
        t(_, 'chainOptionK'), (n.chainOptionK = _)
        function B(R) {
          return function (b) {
            return h.flow(b, R.fromEither)
          }
        }
        t(B, 'fromEitherK'), (n.fromEitherK = B)
        function A(R, b) {
          var m = B(R)
          return function (y) {
            return function (u) {
              return b.chain(u, m(y))
            }
          }
        }
        t(A, 'chainEitherK'), (n.chainEitherK = A)
        function K(R, b) {
          return function (m, y) {
            return function (u) {
              return b.chain(u, function (c) {
                return R.fromEither(m(c) ? U.right(c) : U.left(y(c)))
              })
            }
          }
        }
        t(K, 'filterOrElse'), (n.filterOrElse = K)
      },
    }),
    pt = gn({
      '../../node_modules/fp-ts/lib/Functor.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.getFunctorComposition = n.bindTo = n.flap = n.map = void 0)
        var r = Vn()
        function i(D, S) {
          return function (N) {
            return function (_) {
              return D.map(_, function (B) {
                return S.map(B, N)
              })
            }
          }
        }
        t(i, 'map'), (n.map = i)
        function o(D) {
          return function (S) {
            return function (N) {
              return D.map(N, function (_) {
                return _(S)
              })
            }
          }
        }
        t(o, 'flap'), (n.flap = o)
        function h(D) {
          return function (S) {
            return function (N) {
              return D.map(N, function (_) {
                var B
                return (B = {}), (B[S] = _), B
              })
            }
          }
        }
        t(h, 'bindTo'), (n.bindTo = h)
        function U(D, S) {
          var N = i(D, S)
          return {
            map: function (_, B) {
              return r.pipe(_, N(B))
            },
          }
        }
        t(U, 'getFunctorComposition'), (n.getFunctorComposition = U)
      },
    }),
    lr = gn({
      '../../node_modules/fp-ts/lib/Eq.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.eqDate =
            n.eqNumber =
            n.eqString =
            n.eqBoolean =
            n.eq =
            n.strictEqual =
            n.getStructEq =
            n.getTupleEq =
            n.Contravariant =
            n.getMonoid =
            n.getSemigroup =
            n.eqStrict =
            n.URI =
            n.contramap =
            n.tuple =
            n.struct =
            n.fromEquals =
              void 0)
        var r = Vn(),
          i = t(function (B) {
            return {
              equals: function (A, K) {
                return A === K || B(A, K)
              },
            }
          }, 'fromEquals')
        n.fromEquals = i
        var o = t(function (B) {
          return n.fromEquals(function (A, K) {
            for (var R in B) if (!B[R].equals(A[R], K[R])) return !1
            return !0
          })
        }, 'struct')
        n.struct = o
        var h = t(function () {
          for (var B = [], A = 0; A < arguments.length; A++) B[A] = arguments[A]
          return n.fromEquals(function (K, R) {
            return B.every(function (b, m) {
              return b.equals(K[m], R[m])
            })
          })
        }, 'tuple')
        n.tuple = h
        var U = t(function (B, A) {
            return r.pipe(B, n.contramap(A))
          }, 'contramap_'),
          D = t(function (B) {
            return function (A) {
              return n.fromEquals(function (K, R) {
                return A.equals(B(K), B(R))
              })
            }
          }, 'contramap')
        ;(n.contramap = D),
          (n.URI = 'Eq'),
          (n.eqStrict = {
            equals: function (B, A) {
              return B === A
            },
          })
        var S = {
            equals: function () {
              return !0
            },
          },
          N = t(function () {
            return {
              concat: function (B, A) {
                return n.fromEquals(function (K, R) {
                  return B.equals(K, R) && A.equals(K, R)
                })
              },
            }
          }, 'getSemigroup')
        n.getSemigroup = N
        var _ = t(function () {
          return { concat: n.getSemigroup().concat, empty: S }
        }, 'getMonoid')
        ;(n.getMonoid = _),
          (n.Contravariant = { URI: n.URI, contramap: U }),
          (n.getTupleEq = n.tuple),
          (n.getStructEq = n.struct),
          (n.strictEqual = n.eqStrict.equals),
          (n.eq = n.Contravariant),
          (n.eqBoolean = n.eqStrict),
          (n.eqString = n.eqStrict),
          (n.eqNumber = n.eqStrict),
          (n.eqDate = {
            equals: function (B, A) {
              return B.valueOf() === A.valueOf()
            },
          })
      },
    }),
    Tt = gn({
      '../../node_modules/fp-ts/lib/Ord.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.ordDate =
            n.ordNumber =
            n.ordString =
            n.ordBoolean =
            n.ord =
            n.getDualOrd =
            n.getTupleOrd =
            n.between =
            n.clamp =
            n.max =
            n.min =
            n.geq =
            n.leq =
            n.gt =
            n.lt =
            n.equals =
            n.trivial =
            n.Contravariant =
            n.getMonoid =
            n.getSemigroup =
            n.URI =
            n.contramap =
            n.reverse =
            n.tuple =
            n.fromCompare =
            n.equalsDefault =
              void 0)
        var r = lr(),
          i = Vn(),
          o = t(function (E) {
            return function (p, T) {
              return p === T || E(p, T) === 0
            }
          }, 'equalsDefault')
        n.equalsDefault = o
        var h = t(function (E) {
          return {
            equals: n.equalsDefault(E),
            compare: function (p, T) {
              return p === T ? 0 : E(p, T)
            },
          }
        }, 'fromCompare')
        n.fromCompare = h
        var U = t(function () {
          for (var E = [], p = 0; p < arguments.length; p++) E[p] = arguments[p]
          return n.fromCompare(function (T, C) {
            for (var k = 0; k < E.length - 1; k++) {
              var Z = E[k].compare(T[k], C[k])
              if (Z !== 0) return Z
            }
            return E[k].compare(T[k], C[k])
          })
        }, 'tuple')
        n.tuple = U
        var D = t(function (E) {
          return n.fromCompare(function (p, T) {
            return E.compare(T, p)
          })
        }, 'reverse')
        n.reverse = D
        var S = t(function (E, p) {
            return i.pipe(E, n.contramap(p))
          }, 'contramap_'),
          N = t(function (E) {
            return function (p) {
              return n.fromCompare(function (T, C) {
                return p.compare(E(T), E(C))
              })
            }
          }, 'contramap')
        ;(n.contramap = N), (n.URI = 'Ord')
        var _ = t(function () {
          return {
            concat: function (E, p) {
              return n.fromCompare(function (T, C) {
                var k = E.compare(T, C)
                return k !== 0 ? k : p.compare(T, C)
              })
            },
          }
        }, 'getSemigroup')
        n.getSemigroup = _
        var B = t(function () {
          return {
            concat: n.getSemigroup().concat,
            empty: n.fromCompare(function () {
              return 0
            }),
          }
        }, 'getMonoid')
        ;(n.getMonoid = B),
          (n.Contravariant = { URI: n.URI, contramap: S }),
          (n.trivial = { equals: i.constTrue, compare: i.constant(0) })
        var A = t(function (E) {
          return function (p) {
            return function (T) {
              return T === p || E.compare(T, p) === 0
            }
          }
        }, 'equals')
        n.equals = A
        var K = t(function (E) {
          return function (p, T) {
            return E.compare(p, T) === -1
          }
        }, 'lt')
        n.lt = K
        var R = t(function (E) {
          return function (p, T) {
            return E.compare(p, T) === 1
          }
        }, 'gt')
        n.gt = R
        var b = t(function (E) {
          return function (p, T) {
            return E.compare(p, T) !== 1
          }
        }, 'leq')
        n.leq = b
        var m = t(function (E) {
          return function (p, T) {
            return E.compare(p, T) !== -1
          }
        }, 'geq')
        n.geq = m
        var y = t(function (E) {
          return function (p, T) {
            return p === T || E.compare(p, T) < 1 ? p : T
          }
        }, 'min')
        n.min = y
        var u = t(function (E) {
          return function (p, T) {
            return p === T || E.compare(p, T) > -1 ? p : T
          }
        }, 'max')
        n.max = u
        var c = t(function (E) {
          var p = n.min(E),
            T = n.max(E)
          return function (C, k) {
            return function (Z) {
              return T(p(Z, k), C)
            }
          }
        }, 'clamp')
        n.clamp = c
        var g = t(function (E) {
          var p = n.lt(E),
            T = n.gt(E)
          return function (C, k) {
            return function (Z) {
              return !(p(Z, C) || T(Z, k))
            }
          }
        }, 'between')
        ;(n.between = g),
          (n.getTupleOrd = n.tuple),
          (n.getDualOrd = n.reverse),
          (n.ord = n.Contravariant)
        function F(E, p) {
          return E < p ? -1 : E > p ? 1 : 0
        }
        t(F, 'compare')
        var W = { equals: r.eqStrict.equals, compare: F }
        ;(n.ordBoolean = W),
          (n.ordString = W),
          (n.ordNumber = W),
          (n.ordDate = i.pipe(
            n.ordNumber,
            n.contramap(function (E) {
              return E.valueOf()
            })
          ))
      },
    }),
    ui = gn({
      '../../node_modules/fp-ts/lib/Magma.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.concatAll = n.endo = n.filterSecond = n.filterFirst = n.reverse = void 0)
        var r = t(function (D) {
          return {
            concat: function (S, N) {
              return D.concat(N, S)
            },
          }
        }, 'reverse')
        n.reverse = r
        var i = t(function (D) {
          return function (S) {
            return {
              concat: function (N, _) {
                return D(N) ? S.concat(N, _) : _
              },
            }
          }
        }, 'filterFirst')
        n.filterFirst = i
        var o = t(function (D) {
          return function (S) {
            return {
              concat: function (N, _) {
                return D(_) ? S.concat(N, _) : N
              },
            }
          }
        }, 'filterSecond')
        n.filterSecond = o
        var h = t(function (D) {
          return function (S) {
            return {
              concat: function (N, _) {
                return S.concat(D(N), D(_))
              },
            }
          }
        }, 'endo')
        n.endo = h
        var U = t(function (D) {
          return function (S) {
            return function (N) {
              return N.reduce(function (_, B) {
                return D.concat(_, B)
              }, S)
            }
          }
        }, 'concatAll')
        n.concatAll = U
      },
    }),
    ci = gn({
      '../../node_modules/fp-ts/lib/Semigroup.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (c, g, F, W) {
                  W === void 0 && (W = F),
                    Object.defineProperty(c, W, {
                      enumerable: !0,
                      get: function () {
                        return g[F]
                      },
                    })
                }
              : function (c, g, F, W) {
                  W === void 0 && (W = F), (c[W] = g[F])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (c, g) {
                  Object.defineProperty(c, 'default', { enumerable: !0, value: g })
                }
              : function (c, g) {
                  c.default = g
                }),
          o =
            (n && n.__importStar) ||
            function (c) {
              if (c && c.__esModule) return c
              var g = {}
              if (c != null)
                for (var F in c)
                  F !== 'default' && Object.prototype.hasOwnProperty.call(c, F) && r(g, c, F)
              return i(g, c), g
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.semigroupProduct =
            n.semigroupSum =
            n.semigroupString =
            n.getFunctionSemigroup =
            n.semigroupAny =
            n.semigroupAll =
            n.fold =
            n.getIntercalateSemigroup =
            n.getMeetSemigroup =
            n.getJoinSemigroup =
            n.getDualSemigroup =
            n.getStructSemigroup =
            n.getTupleSemigroup =
            n.getFirstSemigroup =
            n.getLastSemigroup =
            n.getObjectSemigroup =
            n.semigroupVoid =
            n.concatAll =
            n.last =
            n.first =
            n.intercalate =
            n.tuple =
            n.struct =
            n.reverse =
            n.constant =
            n.max =
            n.min =
              void 0)
        var h = Vn(),
          U = o(Et()),
          D = o(ui()),
          S = o(Tt()),
          N = t(function (c) {
            return { concat: S.min(c) }
          }, 'min')
        n.min = N
        var _ = t(function (c) {
          return { concat: S.max(c) }
        }, 'max')
        n.max = _
        var B = t(function (c) {
          return {
            concat: function () {
              return c
            },
          }
        }, 'constant')
        ;(n.constant = B), (n.reverse = D.reverse)
        var A = t(function (c) {
          return {
            concat: function (g, F) {
              var W = {}
              for (var E in c) U.has.call(c, E) && (W[E] = c[E].concat(g[E], F[E]))
              return W
            },
          }
        }, 'struct')
        n.struct = A
        var K = t(function () {
          for (var c = [], g = 0; g < arguments.length; g++) c[g] = arguments[g]
          return {
            concat: function (F, W) {
              return c.map(function (E, p) {
                return E.concat(F[p], W[p])
              })
            },
          }
        }, 'tuple')
        n.tuple = K
        var R = t(function (c) {
          return function (g) {
            return {
              concat: function (F, W) {
                return g.concat(F, g.concat(c, W))
              },
            }
          }
        }, 'intercalate')
        n.intercalate = R
        var b = t(function () {
          return { concat: h.identity }
        }, 'first')
        n.first = b
        var m = t(function () {
          return {
            concat: function (c, g) {
              return g
            },
          }
        }, 'last')
        ;(n.last = m), (n.concatAll = D.concatAll), (n.semigroupVoid = n.constant(void 0))
        var y = t(function () {
          return {
            concat: function (c, g) {
              return Object.assign({}, c, g)
            },
          }
        }, 'getObjectSemigroup')
        ;(n.getObjectSemigroup = y),
          (n.getLastSemigroup = n.last),
          (n.getFirstSemigroup = n.first),
          (n.getTupleSemigroup = n.tuple),
          (n.getStructSemigroup = n.struct),
          (n.getDualSemigroup = n.reverse),
          (n.getJoinSemigroup = n.max),
          (n.getMeetSemigroup = n.min),
          (n.getIntercalateSemigroup = n.intercalate)
        function u(c) {
          var g = n.concatAll(c)
          return function (F, W) {
            return W === void 0 ? g(F) : g(F)(W)
          }
        }
        t(u, 'fold'),
          (n.fold = u),
          (n.semigroupAll = {
            concat: function (c, g) {
              return c && g
            },
          }),
          (n.semigroupAny = {
            concat: function (c, g) {
              return c || g
            },
          }),
          (n.getFunctionSemigroup = h.getSemigroup),
          (n.semigroupString = {
            concat: function (c, g) {
              return c + g
            },
          }),
          (n.semigroupSum = {
            concat: function (c, g) {
              return c + g
            },
          }),
          (n.semigroupProduct = {
            concat: function (c, g) {
              return c * g
            },
          })
      },
    }),
    hr = gn({
      '../../node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (v, s, q, j) {
                  j === void 0 && (j = q),
                    Object.defineProperty(v, j, {
                      enumerable: !0,
                      get: function () {
                        return s[q]
                      },
                    })
                }
              : function (v, s, q, j) {
                  j === void 0 && (j = q), (v[j] = s[q])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (v, s) {
                  Object.defineProperty(v, 'default', { enumerable: !0, value: s })
                }
              : function (v, s) {
                  v.default = s
                }),
          o =
            (n && n.__importStar) ||
            function (v) {
              if (v && v.__esModule) return v
              var s = {}
              if (v != null)
                for (var q in v)
                  q !== 'default' && Object.prototype.hasOwnProperty.call(v, q) && r(s, v, q)
              return i(s, v), s
            },
          h =
            (n && n.__spreadArray) ||
            function (v, s) {
              for (var q = 0, j = s.length, Q = v.length; q < j; q++, Q++) v[Q] = s[q]
              return v
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.reduceRight =
            n.foldMap =
            n.reduce =
            n.mapWithIndex =
            n.map =
            n.flatten =
            n.duplicate =
            n.extend =
            n.chain =
            n.ap =
            n.alt =
            n.altW =
            n.of =
            n.chunksOf =
            n.splitAt =
            n.chop =
            n.chainWithIndex =
            n.intersperse =
            n.prependAll =
            n.unzip =
            n.zip =
            n.zipWith =
            n.modifyAt =
            n.updateAt =
            n.sort =
            n.groupBy =
            n.group =
            n.reverse =
            n.concat =
            n.concatW =
            n.fromArray =
            n.unappend =
            n.unprepend =
            n.range =
            n.replicate =
            n.makeBy =
            n.fromReadonlyArray =
            n.rotate =
            n.union =
            n.sortBy =
            n.uniq =
            n.unsafeUpdateAt =
            n.unsafeInsertAt =
            n.append =
            n.appendW =
            n.prepend =
            n.prependW =
            n.isOutOfBound =
            n.isNonEmpty =
            n.empty =
              void 0),
          (n.uncons =
            n.filterWithIndex =
            n.filter =
            n.groupSort =
            n.updateLast =
            n.modifyLast =
            n.updateHead =
            n.modifyHead =
            n.matchRight =
            n.matchLeft =
            n.concatAll =
            n.max =
            n.min =
            n.init =
            n.last =
            n.tail =
            n.head =
            n.apS =
            n.bind =
            n.bindTo =
            n.Do =
            n.Comonad =
            n.Alt =
            n.TraversableWithIndex =
            n.Traversable =
            n.FoldableWithIndex =
            n.Foldable =
            n.Monad =
            n.chainFirst =
            n.Chain =
            n.Applicative =
            n.apSecond =
            n.apFirst =
            n.Apply =
            n.FunctorWithIndex =
            n.Pointed =
            n.flap =
            n.Functor =
            n.getUnionSemigroup =
            n.getEq =
            n.getSemigroup =
            n.getShow =
            n.URI =
            n.extract =
            n.traverseWithIndex =
            n.sequence =
            n.traverse =
            n.reduceRightWithIndex =
            n.foldMapWithIndex =
            n.reduceWithIndex =
              void 0),
          (n.readonlyNonEmptyArray =
            n.fold =
            n.prependToAll =
            n.insertAt =
            n.snoc =
            n.cons =
            n.unsnoc =
              void 0)
        var U = Pt(),
          D = jt(),
          S = lr(),
          N = Vn(),
          _ = pt(),
          B = o(Et()),
          A = Tt(),
          K = o(ci())
        ;(n.empty = B.emptyReadonlyArray), (n.isNonEmpty = B.isNonEmpty)
        var R = t(function (v, s) {
          return v < 0 || v >= s.length
        }, 'isOutOfBound')
        n.isOutOfBound = R
        var b = t(function (v) {
          return function (s) {
            return h([v], s)
          }
        }, 'prependW')
        ;(n.prependW = b), (n.prepend = n.prependW)
        var m = t(function (v) {
          return function (s) {
            return h(h([], s), [v])
          }
        }, 'appendW')
        ;(n.appendW = m), (n.append = n.appendW)
        var y = t(function (v, s, q) {
          if (n.isNonEmpty(q)) {
            var j = B.fromReadonlyNonEmptyArray(q)
            return j.splice(v, 0, s), j
          }
          return [s]
        }, 'unsafeInsertAt')
        n.unsafeInsertAt = y
        var u = t(function (v, s, q) {
          if (q[v] === s) return q
          var j = B.fromReadonlyNonEmptyArray(q)
          return (j[v] = s), j
        }, 'unsafeUpdateAt')
        n.unsafeUpdateAt = u
        var c = t(function (v) {
          return function (s) {
            if (s.length === 1) return s
            for (
              var q = [n.head(s)],
                j = n.tail(s),
                Q = t(function (ht) {
                  q.every(function (Rt) {
                    return !v.equals(Rt, ht)
                  }) && q.push(ht)
                }, '_loop_1'),
                nn = 0,
                on = j;
              nn < on.length;
              nn++
            ) {
              var Pn = on[nn]
              Q(Pn)
            }
            return q
          }
        }, 'uniq2')
        n.uniq = c
        var g = t(function (v) {
          if (n.isNonEmpty(v)) {
            var s = A.getMonoid()
            return n.sort(v.reduce(s.concat, s.empty))
          }
          return N.identity
        }, 'sortBy')
        n.sortBy = g
        var F = t(function (v) {
          var s = n.uniq(v)
          return function (q) {
            return function (j) {
              return s(N.pipe(j, en(q)))
            }
          }
        }, 'union')
        n.union = F
        var W = t(function (v) {
          return function (s) {
            var q = s.length,
              j = Math.round(v) % q
            if (n.isOutOfBound(Math.abs(j), s) || j === 0) return s
            if (j < 0) {
              var Q = n.splitAt(-j)(s),
                nn = Q[0],
                on = Q[1]
              return N.pipe(on, en(nn))
            } else return n.rotate(j - q)(s)
          }
        }, 'rotate')
        n.rotate = W
        var E = t(function (v) {
          return n.isNonEmpty(v) ? B.some(v) : B.none
        }, 'fromReadonlyArray')
        n.fromReadonlyArray = E
        var p = t(function (v) {
          return function (s) {
            for (var q = Math.max(0, Math.floor(s)), j = [v(0)], Q = 1; Q < q; Q++) j.push(v(Q))
            return j
          }
        }, 'makeBy')
        n.makeBy = p
        var T = t(function (v) {
          return n.makeBy(function () {
            return v
          })
        }, 'replicate')
        n.replicate = T
        var C = t(function (v, s) {
          return v <= s
            ? n.makeBy(function (q) {
                return v + q
              })(s - v + 1)
            : [v]
        }, 'range2')
        n.range = C
        var k = t(function (v) {
          return [n.head(v), n.tail(v)]
        }, 'unprepend')
        n.unprepend = k
        var Z = t(function (v) {
          return [n.init(v), n.last(v)]
        }, 'unappend')
        n.unappend = Z
        var H = t(function (v) {
          return n.fromReadonlyArray(v.slice())
        }, 'fromArray')
        n.fromArray = H
        function un(v) {
          return function (s) {
            return s.concat(v)
          }
        }
        t(un, 'concatW'), (n.concatW = un)
        function en(v, s) {
          return s
            ? v.concat(s)
            : function (q) {
                return q.concat(v)
              }
        }
        t(en, 'concat'), (n.concat = en)
        var yn = t(function (v) {
          return v.length === 1 ? v : h([n.last(v)], v.slice(0, -1).reverse())
        }, 'reverse')
        n.reverse = yn
        function Nn(v) {
          return function (s) {
            var q = s.length
            if (q === 0) return n.empty
            for (var j = [], Q = s[0], nn = [Q], on = 1; on < q; on++) {
              var Pn = s[on]
              v.equals(Pn, Q) ? nn.push(Pn) : (j.push(nn), (Q = Pn), (nn = [Q]))
            }
            return j.push(nn), j
          }
        }
        t(Nn, 'group'), (n.group = Nn)
        var ct = t(function (v) {
          return function (s) {
            for (var q = {}, j = 0, Q = s; j < Q.length; j++) {
              var nn = Q[j],
                on = v(nn)
              q.hasOwnProperty(on) ? q[on].push(nn) : (q[on] = [nn])
            }
            return q
          }
        }, 'groupBy')
        n.groupBy = ct
        var ot = t(function (v) {
          return function (s) {
            return s.length === 1 ? s : s.slice().sort(v.compare)
          }
        }, 'sort')
        n.sort = ot
        var dt = t(function (v, s) {
          return n.modifyAt(v, function () {
            return s
          })
        }, 'updateAt')
        n.updateAt = dt
        var vt = t(function (v, s) {
          return function (q) {
            return n.isOutOfBound(v, q) ? B.none : B.some(n.unsafeUpdateAt(v, s(q[v]), q))
          }
        }, 'modifyAt')
        n.modifyAt = vt
        var mt = t(function (v, s, q) {
          for (var j = [q(v[0], s[0])], Q = Math.min(v.length, s.length), nn = 1; nn < Q; nn++)
            j[nn] = q(v[nn], s[nn])
          return j
        }, 'zipWith')
        n.zipWith = mt
        function ft(v, s) {
          return s === void 0
            ? function (q) {
                return ft(q, v)
              }
            : n.zipWith(v, s, function (q, j) {
                return [q, j]
              })
        }
        t(ft, 'zip'), (n.zip = ft)
        var rt = t(function (v) {
          for (var s = [v[0][0]], q = [v[0][1]], j = 1; j < v.length; j++)
            (s[j] = v[j][0]), (q[j] = v[j][1])
          return [s, q]
        }, 'unzip')
        n.unzip = rt
        var gt = t(function (v) {
          return function (s) {
            for (var q = [v, s[0]], j = 1; j < s.length; j++) q.push(v, s[j])
            return q
          }
        }, 'prependAll')
        n.prependAll = gt
        var yt = t(function (v) {
          return function (s) {
            var q = n.tail(s)
            return n.isNonEmpty(q) ? N.pipe(q, n.prependAll(v), n.prepend(n.head(s))) : s
          }
        }, 'intersperse')
        n.intersperse = yt
        var It = t(function (v) {
          return function (s) {
            for (var q = B.fromReadonlyNonEmptyArray(v(0, n.head(s))), j = 1; j < s.length; j++)
              q.push.apply(q, v(j, s[j]))
            return q
          }
        }, 'chainWithIndex')
        n.chainWithIndex = It
        var st = t(function (v) {
          return function (s) {
            for (var q = v(s), j = q[0], Q = q[1], nn = [j], on = Q; n.isNonEmpty(on); ) {
              var Pn = v(on),
                ht = Pn[0],
                Rt = Pn[1]
              nn.push(ht), (on = Rt)
            }
            return nn
          }
        }, 'chop')
        n.chop = st
        var bt = t(function (v) {
          return function (s) {
            var q = Math.max(1, v)
            return q >= s.length
              ? [s, n.empty]
              : [N.pipe(s.slice(1, q), n.prepend(n.head(s))), s.slice(q)]
          }
        }, 'splitAt')
        n.splitAt = bt
        var Mt = t(function (v) {
          return n.chop(n.splitAt(v))
        }, 'chunksOf')
        n.chunksOf = Mt
        var In = t(function (v, s) {
            return N.pipe(v, n.map(s))
          }, '_map'),
          vn = t(function (v, s) {
            return N.pipe(v, n.mapWithIndex(s))
          }, '_mapWithIndex'),
          _n = t(function (v, s) {
            return N.pipe(v, n.ap(s))
          }, '_ap'),
          En = t(function (v, s) {
            return N.pipe(v, n.chain(s))
          }, '_chain'),
          Tn = t(function (v, s) {
            return N.pipe(v, n.extend(s))
          }, '_extend'),
          Un = t(function (v, s, q) {
            return N.pipe(v, n.reduce(s, q))
          }, '_reduce'),
          Mn = t(function (v) {
            var s = n.foldMap(v)
            return function (q, j) {
              return N.pipe(q, s(j))
            }
          }, '_foldMap'),
          wn = t(function (v, s, q) {
            return N.pipe(v, n.reduceRight(s, q))
          }, '_reduceRight'),
          Sn = t(function (v) {
            var s = n.traverse(v)
            return function (q, j) {
              return N.pipe(q, s(j))
            }
          }, '_traverse'),
          Hn = t(function (v, s) {
            return N.pipe(v, n.alt(s))
          }, '_alt'),
          Gn = t(function (v, s, q) {
            return N.pipe(v, n.reduceWithIndex(s, q))
          }, '_reduceWithIndex'),
          zn = t(function (v) {
            var s = n.foldMapWithIndex(v)
            return function (q, j) {
              return N.pipe(q, s(j))
            }
          }, '_foldMapWithIndex'),
          Cn = t(function (v, s, q) {
            return N.pipe(v, n.reduceRightWithIndex(s, q))
          }, '_reduceRightWithIndex'),
          kn = t(function (v) {
            var s = n.traverseWithIndex(v)
            return function (q, j) {
              return N.pipe(q, s(j))
            }
          }, '_traverseWithIndex')
        n.of = B.singleton
        var lt = t(function (v) {
          return function (s) {
            return N.pipe(s, un(v()))
          }
        }, 'altW')
        ;(n.altW = lt), (n.alt = n.altW)
        var wt = t(function (v) {
          return n.chain(function (s) {
            return N.pipe(v, n.map(s))
          })
        }, 'ap')
        n.ap = wt
        var Wt = t(function (v) {
          return n.chainWithIndex(function (s, q) {
            return v(q)
          })
        }, 'chain')
        n.chain = Wt
        var it = t(function (v) {
          return function (s) {
            for (var q = n.tail(s), j = [v(s)]; n.isNonEmpty(q); ) j.push(v(q)), (q = n.tail(q))
            return j
          }
        }, 'extend')
        ;(n.extend = it), (n.duplicate = n.extend(N.identity)), (n.flatten = n.chain(N.identity))
        var Fn = t(function (v) {
          return n.mapWithIndex(function (s, q) {
            return v(q)
          })
        }, 'map')
        n.map = Fn
        var et = t(function (v) {
          return function (s) {
            for (var q = [v(0, n.head(s))], j = 1; j < s.length; j++) q.push(v(j, s[j]))
            return q
          }
        }, 'mapWithIndex')
        n.mapWithIndex = et
        var hn = t(function (v, s) {
          return n.reduceWithIndex(v, function (q, j, Q) {
            return s(j, Q)
          })
        }, 'reduce')
        n.reduce = hn
        var Xn = t(function (v) {
          return function (s) {
            return function (q) {
              return q.slice(1).reduce(function (j, Q) {
                return v.concat(j, s(Q))
              }, s(q[0]))
            }
          }
        }, 'foldMap')
        n.foldMap = Xn
        var An = t(function (v, s) {
          return n.reduceRightWithIndex(v, function (q, j, Q) {
            return s(j, Q)
          })
        }, 'reduceRight')
        n.reduceRight = An
        var $n = t(function (v, s) {
          return function (q) {
            return q.reduce(function (j, Q, nn) {
              return s(nn, j, Q)
            }, v)
          }
        }, 'reduceWithIndex')
        n.reduceWithIndex = $n
        var Qn = t(function (v) {
          return function (s) {
            return function (q) {
              return q.slice(1).reduce(function (j, Q, nn) {
                return v.concat(j, s(nn + 1, Q))
              }, s(0, q[0]))
            }
          }
        }, 'foldMapWithIndex')
        n.foldMapWithIndex = Qn
        var Yn = t(function (v, s) {
          return function (q) {
            return q.reduceRight(function (j, Q, nn) {
              return s(nn, Q, j)
            }, v)
          }
        }, 'reduceRightWithIndex')
        n.reduceRightWithIndex = Yn
        var Jn = t(function (v) {
          var s = n.traverseWithIndex(v)
          return function (q) {
            return s(function (j, Q) {
              return q(Q)
            })
          }
        }, 'traverse')
        n.traverse = Jn
        var Bn = t(function (v) {
          return n.traverseWithIndex(v)(N.SK)
        }, 'sequence')
        n.sequence = Bn
        var xn = t(function (v) {
          return function (s) {
            return function (q) {
              for (var j = v.map(s(0, n.head(q)), n.of), Q = 1; Q < q.length; Q++)
                j = v.ap(
                  v.map(j, function (nn) {
                    return function (on) {
                      return N.pipe(nn, n.append(on))
                    }
                  }),
                  s(Q, q[Q])
                )
              return j
            }
          }
        }, 'traverseWithIndex')
        ;(n.traverseWithIndex = xn), (n.extract = B.head), (n.URI = 'ReadonlyNonEmptyArray')
        var nt = t(function (v) {
          return {
            show: function (s) {
              return '[' + s.map(v.show).join(', ') + ']'
            },
          }
        }, 'getShow')
        n.getShow = nt
        var fn = t(function () {
          return { concat: en }
        }, 'getSemigroup')
        n.getSemigroup = fn
        var sn = t(function (v) {
          return S.fromEquals(function (s, q) {
            return (
              s.length === q.length &&
              s.every(function (j, Q) {
                return v.equals(j, q[Q])
              })
            )
          })
        }, 'getEq')
        n.getEq = sn
        var mn = t(function (v) {
          var s = n.union(v)
          return {
            concat: function (q, j) {
              return s(j)(q)
            },
          }
        }, 'getUnionSemigroup')
        ;(n.getUnionSemigroup = mn),
          (n.Functor = { URI: n.URI, map: In }),
          (n.flap = _.flap(n.Functor)),
          (n.Pointed = { URI: n.URI, of: n.of }),
          (n.FunctorWithIndex = { URI: n.URI, map: In, mapWithIndex: vn }),
          (n.Apply = { URI: n.URI, map: In, ap: _n }),
          (n.apFirst = U.apFirst(n.Apply)),
          (n.apSecond = U.apSecond(n.Apply)),
          (n.Applicative = { URI: n.URI, map: In, ap: _n, of: n.of }),
          (n.Chain = { URI: n.URI, map: In, ap: _n, chain: En }),
          (n.chainFirst = D.chainFirst(n.Chain)),
          (n.Monad = { URI: n.URI, map: In, ap: _n, of: n.of, chain: En }),
          (n.Foldable = { URI: n.URI, reduce: Un, foldMap: Mn, reduceRight: wn }),
          (n.FoldableWithIndex = {
            URI: n.URI,
            reduce: Un,
            foldMap: Mn,
            reduceRight: wn,
            reduceWithIndex: Gn,
            foldMapWithIndex: zn,
            reduceRightWithIndex: Cn,
          }),
          (n.Traversable = {
            URI: n.URI,
            map: In,
            reduce: Un,
            foldMap: Mn,
            reduceRight: wn,
            traverse: Sn,
            sequence: n.sequence,
          }),
          (n.TraversableWithIndex = {
            URI: n.URI,
            map: In,
            mapWithIndex: vn,
            reduce: Un,
            foldMap: Mn,
            reduceRight: wn,
            traverse: Sn,
            sequence: n.sequence,
            reduceWithIndex: Gn,
            foldMapWithIndex: zn,
            reduceRightWithIndex: Cn,
            traverseWithIndex: kn,
          }),
          (n.Alt = { URI: n.URI, map: In, alt: Hn }),
          (n.Comonad = { URI: n.URI, map: In, extend: Tn, extract: n.extract }),
          (n.Do = n.of(B.emptyRecord)),
          (n.bindTo = _.bindTo(n.Functor)),
          (n.bind = D.bind(n.Chain)),
          (n.apS = U.apS(n.Apply)),
          (n.head = n.extract),
          (n.tail = B.tail)
        var bn = t(function (v) {
          return v[v.length - 1]
        }, 'last')
        n.last = bn
        var pn = t(function (v) {
          return v.slice(0, -1)
        }, 'init')
        n.init = pn
        var Ln = t(function (v) {
          var s = K.min(v)
          return function (q) {
            return q.reduce(s.concat)
          }
        }, 'min')
        n.min = Ln
        var Dn = t(function (v) {
          var s = K.max(v)
          return function (q) {
            return q.reduce(s.concat)
          }
        }, 'max')
        n.max = Dn
        var Zn = t(function (v) {
          return function (s) {
            return s.reduce(v.concat)
          }
        }, 'concatAll')
        n.concatAll = Zn
        var at = t(function (v) {
          return function (s) {
            return v(n.head(s), n.tail(s))
          }
        }, 'matchLeft')
        n.matchLeft = at
        var ut = t(function (v) {
          return function (s) {
            return v(n.init(s), n.last(s))
          }
        }, 'matchRight')
        n.matchRight = ut
        var I = t(function (v) {
          return function (s) {
            return h([v(n.head(s))], n.tail(s))
          }
        }, 'modifyHead')
        n.modifyHead = I
        var M = t(function (v) {
          return n.modifyHead(function () {
            return v
          })
        }, 'updateHead')
        n.updateHead = M
        var L = t(function (v) {
          return function (s) {
            return N.pipe(n.init(s), n.append(v(n.last(s))))
          }
        }, 'modifyLast')
        n.modifyLast = L
        var z = t(function (v) {
          return n.modifyLast(function () {
            return v
          })
        }, 'updateLast')
        n.updateLast = z
        function x(v) {
          var s = n.sort(v),
            q = Nn(v)
          return function (j) {
            return n.isNonEmpty(j) ? q(s(j)) : n.empty
          }
        }
        t(x, 'groupSort'), (n.groupSort = x)
        function tn(v) {
          return n.filterWithIndex(function (s, q) {
            return v(q)
          })
        }
        t(tn, 'filter'), (n.filter = tn)
        var cn = t(function (v) {
          return function (s) {
            return n.fromReadonlyArray(
              s.filter(function (q, j) {
                return v(j, q)
              })
            )
          }
        }, 'filterWithIndex')
        ;(n.filterWithIndex = cn), (n.uncons = n.unprepend), (n.unsnoc = n.unappend)
        function Wn(v, s) {
          return s === void 0 ? n.prepend(v) : N.pipe(s, n.prepend(v))
        }
        t(Wn, 'cons'), (n.cons = Wn)
        var Kn = t(function (v, s) {
          return N.pipe(v, en([s]))
        }, 'snoc')
        n.snoc = Kn
        var tt = t(function (v, s) {
          return function (q) {
            return v < 0 || v > q.length ? B.none : B.some(n.unsafeInsertAt(v, s, q))
          }
        }, 'insertAt')
        ;(n.insertAt = tt),
          (n.prependToAll = n.prependAll),
          (n.fold = n.concatAll),
          (n.readonlyNonEmptyArray = {
            URI: n.URI,
            of: n.of,
            map: In,
            mapWithIndex: vn,
            ap: _n,
            chain: En,
            extend: Tn,
            extract: n.extract,
            reduce: Un,
            foldMap: Mn,
            reduceRight: wn,
            traverse: Sn,
            sequence: n.sequence,
            reduceWithIndex: Gn,
            foldMapWithIndex: zn,
            reduceRightWithIndex: Cn,
            traverseWithIndex: kn,
            alt: Hn,
          })
      },
    }),
    Mr = gn({
      '../../node_modules/fp-ts/lib/NonEmptyArray.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (I, M, L, z) {
                  z === void 0 && (z = L),
                    Object.defineProperty(I, z, {
                      enumerable: !0,
                      get: function () {
                        return M[L]
                      },
                    })
                }
              : function (I, M, L, z) {
                  z === void 0 && (z = L), (I[z] = M[L])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (I, M) {
                  Object.defineProperty(I, 'default', { enumerable: !0, value: M })
                }
              : function (I, M) {
                  I.default = M
                }),
          o =
            (n && n.__importStar) ||
            function (I) {
              if (I && I.__esModule) return I
              var M = {}
              if (I != null)
                for (var L in I)
                  L !== 'default' && Object.prototype.hasOwnProperty.call(I, L) && r(M, I, L)
              return i(M, I), M
            },
          h =
            (n && n.__spreadArray) ||
            function (I, M) {
              for (var L = 0, z = M.length, x = I.length; L < z; L++, x++) I[x] = M[L]
              return I
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.mapWithIndex =
            n.map =
            n.flatten =
            n.duplicate =
            n.extend =
            n.chain =
            n.ap =
            n.alt =
            n.altW =
            n.chunksOf =
            n.splitAt =
            n.chop =
            n.chainWithIndex =
            n.foldMap =
            n.foldMapWithIndex =
            n.intersperse =
            n.prependAll =
            n.unzip =
            n.zip =
            n.zipWith =
            n.of =
            n.copy =
            n.modifyAt =
            n.updateAt =
            n.insertAt =
            n.sort =
            n.groupBy =
            n.group =
            n.reverse =
            n.concat =
            n.concatW =
            n.unappend =
            n.unprepend =
            n.range =
            n.replicate =
            n.makeBy =
            n.fromArray =
            n.fromReadonlyNonEmptyArray =
            n.rotate =
            n.union =
            n.sortBy =
            n.uniq =
            n.unsafeUpdateAt =
            n.unsafeInsertAt =
            n.append =
            n.appendW =
            n.prepend =
            n.prependW =
            n.isOutOfBound =
            n.isNonEmpty =
              void 0),
          (n.filterWithIndex =
            n.filter =
            n.groupSort =
            n.updateLast =
            n.modifyLast =
            n.updateHead =
            n.modifyHead =
            n.matchRight =
            n.matchLeft =
            n.concatAll =
            n.max =
            n.min =
            n.init =
            n.last =
            n.tail =
            n.head =
            n.apS =
            n.bind =
            n.bindTo =
            n.Do =
            n.Comonad =
            n.Alt =
            n.TraversableWithIndex =
            n.Traversable =
            n.FoldableWithIndex =
            n.Foldable =
            n.Monad =
            n.chainFirst =
            n.Chain =
            n.Applicative =
            n.apSecond =
            n.apFirst =
            n.Apply =
            n.FunctorWithIndex =
            n.Pointed =
            n.flap =
            n.Functor =
            n.getUnionSemigroup =
            n.getEq =
            n.getSemigroup =
            n.getShow =
            n.URI =
            n.extract =
            n.traverseWithIndex =
            n.sequence =
            n.traverse =
            n.reduceRightWithIndex =
            n.reduceRight =
            n.reduceWithIndex =
            n.reduce =
              void 0),
          (n.nonEmptyArray =
            n.fold =
            n.prependToAll =
            n.snoc =
            n.cons =
            n.unsnoc =
            n.uncons =
              void 0)
        var U = Pt(),
          D = jt(),
          S = Vn(),
          N = pt(),
          _ = o(Et()),
          B = Tt(),
          A = o(hr()),
          K = t(function (I) {
            return I.length > 0
          }, 'isNonEmpty2')
        n.isNonEmpty = K
        var R = t(function (I, M) {
          return I < 0 || I >= M.length
        }, 'isOutOfBound')
        n.isOutOfBound = R
        var b = t(function (I) {
          return function (M) {
            return h([I], M)
          }
        }, 'prependW')
        ;(n.prependW = b), (n.prepend = n.prependW)
        var m = t(function (I) {
          return function (M) {
            return h(h([], M), [I])
          }
        }, 'appendW')
        ;(n.appendW = m), (n.append = n.appendW)
        var y = t(function (I, M, L) {
          if (n.isNonEmpty(L)) {
            var z = n.fromReadonlyNonEmptyArray(L)
            return z.splice(I, 0, M), z
          }
          return [M]
        }, 'unsafeInsertAt')
        n.unsafeInsertAt = y
        var u = t(function (I, M, L) {
          var z = n.fromReadonlyNonEmptyArray(L)
          return (z[I] = M), z
        }, 'unsafeUpdateAt')
        n.unsafeUpdateAt = u
        var c = t(function (I) {
          return function (M) {
            if (M.length === 1) return n.copy(M)
            for (
              var L = [n.head(M)],
                z = n.tail(M),
                x = t(function (Kn) {
                  L.every(function (tt) {
                    return !I.equals(tt, Kn)
                  }) && L.push(Kn)
                }, '_loop_1'),
                tn = 0,
                cn = z;
              tn < cn.length;
              tn++
            ) {
              var Wn = cn[tn]
              x(Wn)
            }
            return L
          }
        }, 'uniq2')
        n.uniq = c
        var g = t(function (I) {
          if (n.isNonEmpty(I)) {
            var M = B.getMonoid()
            return n.sort(I.reduce(M.concat, M.empty))
          }
          return n.copy
        }, 'sortBy')
        n.sortBy = g
        var F = t(function (I) {
          var M = n.uniq(I)
          return function (L) {
            return function (z) {
              return M(S.pipe(z, un(L)))
            }
          }
        }, 'union')
        n.union = F
        var W = t(function (I) {
          return function (M) {
            var L = M.length,
              z = Math.round(I) % L
            if (n.isOutOfBound(Math.abs(z), M) || z === 0) return n.copy(M)
            if (z < 0) {
              var x = n.splitAt(-z)(M),
                tn = x[0],
                cn = x[1]
              return S.pipe(cn, un(tn))
            } else return n.rotate(z - L)(M)
          }
        }, 'rotate')
        ;(n.rotate = W), (n.fromReadonlyNonEmptyArray = _.fromReadonlyNonEmptyArray)
        var E = t(function (I) {
          return n.isNonEmpty(I) ? _.some(I) : _.none
        }, 'fromArray')
        n.fromArray = E
        var p = t(function (I) {
          return function (M) {
            for (var L = Math.max(0, Math.floor(M)), z = [I(0)], x = 1; x < L; x++) z.push(I(x))
            return z
          }
        }, 'makeBy')
        n.makeBy = p
        var T = t(function (I) {
          return n.makeBy(function () {
            return I
          })
        }, 'replicate')
        n.replicate = T
        var C = t(function (I, M) {
          return I <= M
            ? n.makeBy(function (L) {
                return I + L
              })(M - I + 1)
            : [I]
        }, 'range2')
        n.range = C
        var k = t(function (I) {
          return [n.head(I), n.tail(I)]
        }, 'unprepend')
        n.unprepend = k
        var Z = t(function (I) {
          return [n.init(I), n.last(I)]
        }, 'unappend')
        n.unappend = Z
        function H(I) {
          return function (M) {
            return M.concat(I)
          }
        }
        t(H, 'concatW'), (n.concatW = H)
        function un(I, M) {
          return M
            ? I.concat(M)
            : function (L) {
                return L.concat(I)
              }
        }
        t(un, 'concat'), (n.concat = un)
        var en = t(function (I) {
          return h([n.last(I)], I.slice(0, -1).reverse())
        }, 'reverse')
        n.reverse = en
        function yn(I) {
          return function (M) {
            var L = M.length
            if (L === 0) return []
            for (var z = [], x = M[0], tn = [x], cn = 1; cn < L; cn++) {
              var Wn = M[cn]
              I.equals(Wn, x) ? tn.push(Wn) : (z.push(tn), (x = Wn), (tn = [x]))
            }
            return z.push(tn), z
          }
        }
        t(yn, 'group'), (n.group = yn)
        var Nn = t(function (I) {
          return function (M) {
            for (var L = {}, z = 0, x = M; z < x.length; z++) {
              var tn = x[z],
                cn = I(tn)
              L.hasOwnProperty(cn) ? L[cn].push(tn) : (L[cn] = [tn])
            }
            return L
          }
        }, 'groupBy')
        n.groupBy = Nn
        var ct = t(function (I) {
          return function (M) {
            return M.slice().sort(I.compare)
          }
        }, 'sort')
        n.sort = ct
        var ot = t(function (I, M) {
          return function (L) {
            return I < 0 || I > L.length ? _.none : _.some(n.unsafeInsertAt(I, M, L))
          }
        }, 'insertAt')
        n.insertAt = ot
        var dt = t(function (I, M) {
          return n.modifyAt(I, function () {
            return M
          })
        }, 'updateAt')
        n.updateAt = dt
        var vt = t(function (I, M) {
          return function (L) {
            return n.isOutOfBound(I, L) ? _.none : _.some(n.unsafeUpdateAt(I, M(L[I]), L))
          }
        }, 'modifyAt')
        ;(n.modifyAt = vt), (n.copy = n.fromReadonlyNonEmptyArray)
        var mt = t(function (I) {
          return [I]
        }, 'of')
        n.of = mt
        var ft = t(function (I, M, L) {
          for (var z = [L(I[0], M[0])], x = Math.min(I.length, M.length), tn = 1; tn < x; tn++)
            z[tn] = L(I[tn], M[tn])
          return z
        }, 'zipWith')
        n.zipWith = ft
        function rt(I, M) {
          return M === void 0
            ? function (L) {
                return rt(L, I)
              }
            : n.zipWith(I, M, function (L, z) {
                return [L, z]
              })
        }
        t(rt, 'zip'), (n.zip = rt)
        var gt = t(function (I) {
          for (var M = [I[0][0]], L = [I[0][1]], z = 1; z < I.length; z++)
            (M[z] = I[z][0]), (L[z] = I[z][1])
          return [M, L]
        }, 'unzip')
        n.unzip = gt
        var yt = t(function (I) {
          return function (M) {
            for (var L = [I, M[0]], z = 1; z < M.length; z++) L.push(I, M[z])
            return L
          }
        }, 'prependAll')
        n.prependAll = yt
        var It = t(function (I) {
          return function (M) {
            var L = n.tail(M)
            return n.isNonEmpty(L) ? S.pipe(L, n.prependAll(I), n.prepend(n.head(M))) : n.copy(M)
          }
        }, 'intersperse')
        ;(n.intersperse = It), (n.foldMapWithIndex = A.foldMapWithIndex), (n.foldMap = A.foldMap)
        var st = t(function (I) {
          return function (M) {
            for (var L = n.fromReadonlyNonEmptyArray(I(0, n.head(M))), z = 1; z < M.length; z++)
              L.push.apply(L, I(z, M[z]))
            return L
          }
        }, 'chainWithIndex')
        n.chainWithIndex = st
        var bt = t(function (I) {
          return function (M) {
            for (var L = I(M), z = L[0], x = L[1], tn = [z], cn = x; n.isNonEmpty(cn); ) {
              var Wn = I(cn),
                Kn = Wn[0],
                tt = Wn[1]
              tn.push(Kn), (cn = tt)
            }
            return tn
          }
        }, 'chop')
        n.chop = bt
        var Mt = t(function (I) {
          return function (M) {
            var L = Math.max(1, I)
            return L >= M.length
              ? [n.copy(M), []]
              : [S.pipe(M.slice(1, L), n.prepend(n.head(M))), M.slice(L)]
          }
        }, 'splitAt')
        n.splitAt = Mt
        var In = t(function (I) {
          return n.chop(n.splitAt(I))
        }, 'chunksOf')
        n.chunksOf = In
        var vn = t(function (I, M) {
            return S.pipe(I, n.map(M))
          }, '_map'),
          _n = t(function (I, M) {
            return S.pipe(I, n.mapWithIndex(M))
          }, '_mapWithIndex'),
          En = t(function (I, M) {
            return S.pipe(I, n.ap(M))
          }, '_ap'),
          Tn = t(function (I, M) {
            return S.pipe(I, n.chain(M))
          }, '_chain'),
          Un = t(function (I, M) {
            return S.pipe(I, n.extend(M))
          }, '_extend'),
          Mn = t(function (I, M, L) {
            return S.pipe(I, n.reduce(M, L))
          }, '_reduce'),
          wn = t(function (I) {
            var M = n.foldMap(I)
            return function (L, z) {
              return S.pipe(L, M(z))
            }
          }, '_foldMap'),
          Sn = t(function (I, M, L) {
            return S.pipe(I, n.reduceRight(M, L))
          }, '_reduceRight'),
          Hn = t(function (I) {
            var M = n.traverse(I)
            return function (L, z) {
              return S.pipe(L, M(z))
            }
          }, '_traverse'),
          Gn = t(function (I, M) {
            return S.pipe(I, n.alt(M))
          }, '_alt'),
          zn = t(function (I, M, L) {
            return S.pipe(I, n.reduceWithIndex(M, L))
          }, '_reduceWithIndex'),
          Cn = t(function (I) {
            var M = n.foldMapWithIndex(I)
            return function (L, z) {
              return S.pipe(L, M(z))
            }
          }, '_foldMapWithIndex'),
          kn = t(function (I, M, L) {
            return S.pipe(I, n.reduceRightWithIndex(M, L))
          }, '_reduceRightWithIndex'),
          lt = t(function (I) {
            var M = n.traverseWithIndex(I)
            return function (L, z) {
              return S.pipe(L, M(z))
            }
          }, '_traverseWithIndex'),
          wt = t(function (I) {
            return function (M) {
              return S.pipe(M, H(I()))
            }
          }, 'altW')
        ;(n.altW = wt), (n.alt = n.altW)
        var Wt = t(function (I) {
          return n.chain(function (M) {
            return S.pipe(I, n.map(M))
          })
        }, 'ap')
        n.ap = Wt
        var it = t(function (I) {
          return n.chainWithIndex(function (M, L) {
            return I(L)
          })
        }, 'chain')
        n.chain = it
        var Fn = t(function (I) {
          return function (M) {
            for (var L = n.tail(M), z = [I(M)]; n.isNonEmpty(L); ) z.push(I(L)), (L = n.tail(L))
            return z
          }
        }, 'extend')
        ;(n.extend = Fn), (n.duplicate = n.extend(S.identity)), (n.flatten = n.chain(S.identity))
        var et = t(function (I) {
          return n.mapWithIndex(function (M, L) {
            return I(L)
          })
        }, 'map')
        n.map = et
        var hn = t(function (I) {
          return function (M) {
            for (var L = [I(0, n.head(M))], z = 1; z < M.length; z++) L.push(I(z, M[z]))
            return L
          }
        }, 'mapWithIndex')
        ;(n.mapWithIndex = hn),
          (n.reduce = A.reduce),
          (n.reduceWithIndex = A.reduceWithIndex),
          (n.reduceRight = A.reduceRight),
          (n.reduceRightWithIndex = A.reduceRightWithIndex)
        var Xn = t(function (I) {
          var M = n.traverseWithIndex(I)
          return function (L) {
            return M(function (z, x) {
              return L(x)
            })
          }
        }, 'traverse')
        n.traverse = Xn
        var An = t(function (I) {
          return n.traverseWithIndex(I)(function (M, L) {
            return L
          })
        }, 'sequence')
        n.sequence = An
        var $n = t(function (I) {
          return function (M) {
            return function (L) {
              for (var z = I.map(M(0, n.head(L)), n.of), x = 1; x < L.length; x++)
                z = I.ap(
                  I.map(z, function (tn) {
                    return function (cn) {
                      return S.pipe(tn, n.append(cn))
                    }
                  }),
                  M(x, L[x])
                )
              return z
            }
          }
        }, 'traverseWithIndex')
        ;(n.traverseWithIndex = $n),
          (n.extract = A.head),
          (n.URI = 'NonEmptyArray'),
          (n.getShow = A.getShow)
        var Qn = t(function () {
          return { concat: un }
        }, 'getSemigroup')
        ;(n.getSemigroup = Qn), (n.getEq = A.getEq)
        var Yn = t(function (I) {
          var M = n.union(I)
          return {
            concat: function (L, z) {
              return M(z)(L)
            },
          }
        }, 'getUnionSemigroup')
        ;(n.getUnionSemigroup = Yn),
          (n.Functor = { URI: n.URI, map: vn }),
          (n.flap = N.flap(n.Functor)),
          (n.Pointed = { URI: n.URI, of: n.of }),
          (n.FunctorWithIndex = { URI: n.URI, map: vn, mapWithIndex: _n }),
          (n.Apply = { URI: n.URI, map: vn, ap: En }),
          (n.apFirst = U.apFirst(n.Apply)),
          (n.apSecond = U.apSecond(n.Apply)),
          (n.Applicative = { URI: n.URI, map: vn, ap: En, of: n.of }),
          (n.Chain = { URI: n.URI, map: vn, ap: En, chain: Tn }),
          (n.chainFirst = D.chainFirst(n.Chain)),
          (n.Monad = { URI: n.URI, map: vn, ap: En, of: n.of, chain: Tn }),
          (n.Foldable = { URI: n.URI, reduce: Mn, foldMap: wn, reduceRight: Sn }),
          (n.FoldableWithIndex = {
            URI: n.URI,
            reduce: Mn,
            foldMap: wn,
            reduceRight: Sn,
            reduceWithIndex: zn,
            foldMapWithIndex: Cn,
            reduceRightWithIndex: kn,
          }),
          (n.Traversable = {
            URI: n.URI,
            map: vn,
            reduce: Mn,
            foldMap: wn,
            reduceRight: Sn,
            traverse: Hn,
            sequence: n.sequence,
          }),
          (n.TraversableWithIndex = {
            URI: n.URI,
            map: vn,
            mapWithIndex: _n,
            reduce: Mn,
            foldMap: wn,
            reduceRight: Sn,
            traverse: Hn,
            sequence: n.sequence,
            reduceWithIndex: zn,
            foldMapWithIndex: Cn,
            reduceRightWithIndex: kn,
            traverseWithIndex: lt,
          }),
          (n.Alt = { URI: n.URI, map: vn, alt: Gn }),
          (n.Comonad = { URI: n.URI, map: vn, extend: Un, extract: n.extract }),
          (n.Do = n.of(_.emptyRecord)),
          (n.bindTo = N.bindTo(n.Functor)),
          (n.bind = D.bind(n.Chain)),
          (n.apS = U.apS(n.Apply)),
          (n.head = A.head)
        var Jn = t(function (I) {
          return I.slice(1)
        }, 'tail')
        ;(n.tail = Jn), (n.last = A.last)
        var Bn = t(function (I) {
          return I.slice(0, -1)
        }, 'init')
        ;(n.init = Bn), (n.min = A.min), (n.max = A.max)
        var xn = t(function (I) {
          return function (M) {
            return M.reduce(I.concat)
          }
        }, 'concatAll')
        n.concatAll = xn
        var nt = t(function (I) {
          return function (M) {
            return I(n.head(M), n.tail(M))
          }
        }, 'matchLeft')
        n.matchLeft = nt
        var fn = t(function (I) {
          return function (M) {
            return I(n.init(M), n.last(M))
          }
        }, 'matchRight')
        n.matchRight = fn
        var sn = t(function (I) {
          return function (M) {
            return h([I(n.head(M))], n.tail(M))
          }
        }, 'modifyHead')
        n.modifyHead = sn
        var mn = t(function (I) {
          return n.modifyHead(function () {
            return I
          })
        }, 'updateHead')
        n.updateHead = mn
        var bn = t(function (I) {
          return function (M) {
            return S.pipe(n.init(M), n.append(I(n.last(M))))
          }
        }, 'modifyLast')
        n.modifyLast = bn
        var pn = t(function (I) {
          return n.modifyLast(function () {
            return I
          })
        }, 'updateLast')
        n.updateLast = pn
        function Ln(I) {
          var M = n.sort(I),
            L = yn(I)
          return function (z) {
            return n.isNonEmpty(z) ? L(M(z)) : []
          }
        }
        t(Ln, 'groupSort'), (n.groupSort = Ln)
        function Dn(I) {
          return n.filterWithIndex(function (M, L) {
            return I(L)
          })
        }
        t(Dn, 'filter'), (n.filter = Dn)
        var Zn = t(function (I) {
          return function (M) {
            return n.fromArray(
              M.filter(function (L, z) {
                return I(z, L)
              })
            )
          }
        }, 'filterWithIndex')
        ;(n.filterWithIndex = Zn), (n.uncons = n.unprepend), (n.unsnoc = n.unappend)
        function at(I, M) {
          return M === void 0 ? n.prepend(I) : S.pipe(M, n.prepend(I))
        }
        t(at, 'cons'), (n.cons = at)
        var ut = t(function (I, M) {
          return S.pipe(I, n.append(M))
        }, 'snoc')
        ;(n.snoc = ut),
          (n.prependToAll = n.prependAll),
          (n.fold = A.concatAll),
          (n.nonEmptyArray = {
            URI: n.URI,
            of: n.of,
            map: vn,
            mapWithIndex: _n,
            ap: En,
            chain: Tn,
            extend: Un,
            extract: n.extract,
            reduce: Mn,
            foldMap: wn,
            reduceRight: Sn,
            traverse: Hn,
            sequence: n.sequence,
            reduceWithIndex: zn,
            foldMapWithIndex: Cn,
            reduceRightWithIndex: kn,
            traverseWithIndex: lt,
            alt: Gn,
          })
      },
    }),
    wr = gn({
      '../../node_modules/fp-ts/lib/Separated.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.right =
            n.left =
            n.flap =
            n.Functor =
            n.Bifunctor =
            n.URI =
            n.bimap =
            n.mapLeft =
            n.map =
            n.separated =
              void 0)
        var r = Vn(),
          i = pt(),
          o = t(function (K, R) {
            return { left: K, right: R }
          }, 'separated')
        n.separated = o
        var h = t(function (K, R) {
            return r.pipe(K, n.map(R))
          }, '_map'),
          U = t(function (K, R) {
            return r.pipe(K, n.mapLeft(R))
          }, '_mapLeft'),
          D = t(function (K, R, b) {
            return r.pipe(K, n.bimap(R, b))
          }, '_bimap'),
          S = t(function (K) {
            return function (R) {
              return n.separated(n.left(R), K(n.right(R)))
            }
          }, 'map')
        n.map = S
        var N = t(function (K) {
          return function (R) {
            return n.separated(K(n.left(R)), n.right(R))
          }
        }, 'mapLeft')
        n.mapLeft = N
        var _ = t(function (K, R) {
          return function (b) {
            return n.separated(K(n.left(b)), R(n.right(b)))
          }
        }, 'bimap')
        ;(n.bimap = _),
          (n.URI = 'Separated'),
          (n.Bifunctor = { URI: n.URI, mapLeft: U, bimap: D }),
          (n.Functor = { URI: n.URI, map: h }),
          (n.flap = i.flap(n.Functor))
        var B = t(function (K) {
          return K.left
        }, 'left')
        n.left = B
        var A = t(function (K) {
          return K.right
        }, 'right')
        n.right = A
      },
    }),
    Wr = gn({
      '../../node_modules/fp-ts/lib/Witherable.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (N, _, B, A) {
                  A === void 0 && (A = B),
                    Object.defineProperty(N, A, {
                      enumerable: !0,
                      get: function () {
                        return _[B]
                      },
                    })
                }
              : function (N, _, B, A) {
                  A === void 0 && (A = B), (N[A] = _[B])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (N, _) {
                  Object.defineProperty(N, 'default', { enumerable: !0, value: _ })
                }
              : function (N, _) {
                  N.default = _
                }),
          o =
            (n && n.__importStar) ||
            function (N) {
              if (N && N.__esModule) return N
              var _ = {}
              if (N != null)
                for (var B in N)
                  B !== 'default' && Object.prototype.hasOwnProperty.call(N, B) && r(_, N, B)
              return i(_, N), _
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.filterE = n.witherDefault = n.wiltDefault = void 0)
        var h = o(Et())
        function U(N, _) {
          return function (B) {
            var A = N.traverse(B)
            return function (K, R) {
              return B.map(A(K, R), _.separate)
            }
          }
        }
        t(U, 'wiltDefault'), (n.wiltDefault = U)
        function D(N, _) {
          return function (B) {
            var A = N.traverse(B)
            return function (K, R) {
              return B.map(A(K, R), _.compact)
            }
          }
        }
        t(D, 'witherDefault'), (n.witherDefault = D)
        function S(N) {
          return function (_) {
            var B = N.wither(_)
            return function (A) {
              return function (K) {
                return B(K, function (R) {
                  return _.map(A(R), function (b) {
                    return b ? h.some(R) : h.none
                  })
                })
              }
            }
          }
        }
        t(S, 'filterE'), (n.filterE = S)
      },
    }),
    Rr = gn({
      '../../node_modules/fp-ts/lib/Zero.js'(n) {
        'use strict'
        Object.defineProperty(n, '__esModule', { value: !0 }), (n.guard = void 0)
        function r(i, o) {
          return function (h) {
            return h ? o.of(void 0) : i.zero()
          }
        }
        t(r, 'guard'), (n.guard = r)
      },
    }),
    fi = gn({
      '../../node_modules/fp-ts/lib/ReadonlyArray.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (e, a, l, O) {
                  O === void 0 && (O = l),
                    Object.defineProperty(e, O, {
                      enumerable: !0,
                      get: function () {
                        return a[l]
                      },
                    })
                }
              : function (e, a, l, O) {
                  O === void 0 && (O = l), (e[O] = a[l])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (e, a) {
                  Object.defineProperty(e, 'default', { enumerable: !0, value: a })
                }
              : function (e, a) {
                  e.default = a
                }),
          o =
            (n && n.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var a = {}
              if (e != null)
                for (var l in e)
                  l !== 'default' && Object.prototype.hasOwnProperty.call(e, l) && r(a, e, l)
              return i(a, e), a
            },
          h =
            (n && n.__spreadArray) ||
            function (e, a) {
              for (var l = 0, O = a.length, $ = e.length; l < O; l++, $++) e[$] = a[l]
              return e
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.sort =
            n.lefts =
            n.rights =
            n.reverse =
            n.modifyAt =
            n.deleteAt =
            n.updateAt =
            n.insertAt =
            n.findLastIndex =
            n.findLastMap =
            n.findLast =
            n.findFirstMap =
            n.findFirst =
            n.findIndex =
            n.dropLeftWhile =
            n.dropRight =
            n.dropLeft =
            n.spanLeft =
            n.takeLeftWhile =
            n.takeRight =
            n.takeLeft =
            n.init =
            n.tail =
            n.last =
            n.head =
            n.lookup =
            n.isOutOfBound =
            n.size =
            n.scanRight =
            n.scanLeft =
            n.chainWithIndex =
            n.foldRight =
            n.matchRight =
            n.matchRightW =
            n.foldLeft =
            n.matchLeft =
            n.matchLeftW =
            n.match =
            n.matchW =
            n.fromEither =
            n.fromOption =
            n.fromPredicate =
            n.replicate =
            n.makeBy =
            n.appendW =
            n.append =
            n.prependW =
            n.prepend =
            n.isNonEmpty =
            n.isEmpty =
              void 0),
          (n.sequence =
            n.traverse =
            n.reduceRightWithIndex =
            n.reduceRight =
            n.reduceWithIndex =
            n.foldMap =
            n.reduce =
            n.foldMapWithIndex =
            n.duplicate =
            n.extend =
            n.filterWithIndex =
            n.partitionMapWithIndex =
            n.partitionMap =
            n.partitionWithIndex =
            n.partition =
            n.compact =
            n.filterMap =
            n.filterMapWithIndex =
            n.filter =
            n.separate =
            n.mapWithIndex =
            n.map =
            n.flatten =
            n.chain =
            n.ap =
            n.alt =
            n.altW =
            n.zero =
            n.of =
            n._chainRecBreadthFirst =
            n._chainRecDepthFirst =
            n.difference =
            n.intersection =
            n.union =
            n.concat =
            n.concatW =
            n.comprehension =
            n.fromOptionK =
            n.chunksOf =
            n.splitAt =
            n.chop =
            n.sortBy =
            n.uniq =
            n.elem =
            n.rotate =
            n.intersperse =
            n.prependAll =
            n.unzip =
            n.zip =
            n.zipWith =
              void 0),
          (n.toArray =
            n.unsafeDeleteAt =
            n.unsafeUpdateAt =
            n.unsafeInsertAt =
            n.fromEitherK =
            n.FromEither =
            n.filterE =
            n.Witherable =
            n.ChainRecBreadthFirst =
            n.chainRecBreadthFirst =
            n.ChainRecDepthFirst =
            n.chainRecDepthFirst =
            n.TraversableWithIndex =
            n.Traversable =
            n.FoldableWithIndex =
            n.Foldable =
            n.FilterableWithIndex =
            n.Filterable =
            n.Compactable =
            n.Extend =
            n.Alternative =
            n.guard =
            n.Zero =
            n.Alt =
            n.Unfoldable =
            n.chainFirst =
            n.Monad =
            n.Chain =
            n.Applicative =
            n.apSecond =
            n.apFirst =
            n.Apply =
            n.FunctorWithIndex =
            n.Pointed =
            n.flap =
            n.Functor =
            n.getDifferenceMagma =
            n.getIntersectionSemigroup =
            n.getUnionMonoid =
            n.getUnionSemigroup =
            n.getOrd =
            n.getEq =
            n.getMonoid =
            n.getSemigroup =
            n.getShow =
            n.URI =
            n.unfold =
            n.wilt =
            n.wither =
            n.traverseWithIndex =
              void 0),
          (n.readonlyArray =
            n.prependToAll =
            n.snoc =
            n.cons =
            n.range =
            n.apS =
            n.bind =
            n.bindTo =
            n.Do =
            n.exists =
            n.some =
            n.every =
            n.empty =
            n.fromArray =
              void 0)
        var U = Pt(),
          D = jt(),
          S = lr(),
          N = br(),
          _ = Vn(),
          B = pt(),
          A = o(Et()),
          K = o(sr()),
          R = Tt(),
          b = o(hr()),
          m = wr(),
          y = Wr(),
          u = Rr(),
          c = t(function (e) {
            return e.length === 0
          }, 'isEmpty')
        ;(n.isEmpty = c),
          (n.isNonEmpty = b.isNonEmpty),
          (n.prepend = b.prepend),
          (n.prependW = b.prependW),
          (n.append = b.append),
          (n.appendW = b.appendW)
        var g = t(function (e, a) {
          return e <= 0 ? n.empty : b.makeBy(a)(e)
        }, 'makeBy')
        n.makeBy = g
        var F = t(function (e, a) {
          return n.makeBy(e, function () {
            return a
          })
        }, 'replicate')
        n.replicate = F
        function W(e) {
          return function (a) {
            return e(a) ? [a] : n.empty
          }
        }
        t(W, 'fromPredicate'), (n.fromPredicate = W)
        var E = t(function (e) {
          return A.isNone(e) ? n.empty : [e.value]
        }, 'fromOption')
        n.fromOption = E
        var p = t(function (e) {
          return A.isLeft(e) ? n.empty : [e.right]
        }, 'fromEither')
        n.fromEither = p
        var T = t(function (e, a) {
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : e()
          }
        }, 'matchW')
        ;(n.matchW = T), (n.match = n.matchW)
        var C = t(function (e, a) {
          return function (l) {
            return n.isNonEmpty(l) ? a(b.head(l), b.tail(l)) : e()
          }
        }, 'matchLeftW')
        ;(n.matchLeftW = C), (n.matchLeft = n.matchLeftW), (n.foldLeft = n.matchLeft)
        var k = t(function (e, a) {
          return function (l) {
            return n.isNonEmpty(l) ? a(b.init(l), b.last(l)) : e()
          }
        }, 'matchRightW')
        ;(n.matchRightW = k), (n.matchRight = n.matchRightW), (n.foldRight = n.matchRight)
        var Z = t(function (e) {
          return function (a) {
            if (n.isEmpty(a)) return n.empty
            for (var l = [], O = 0; O < a.length; O++) l.push.apply(l, e(O, a[O]))
            return l
          }
        }, 'chainWithIndex')
        n.chainWithIndex = Z
        var H = t(function (e, a) {
          return function (l) {
            var O = l.length,
              $ = new Array(O + 1)
            $[0] = e
            for (var V = 0; V < O; V++) $[V + 1] = a($[V], l[V])
            return $
          }
        }, 'scanLeft')
        n.scanLeft = H
        var un = t(function (e, a) {
          return function (l) {
            var O = l.length,
              $ = new Array(O + 1)
            $[O] = e
            for (var V = O - 1; V >= 0; V--) $[V] = a(l[V], $[V + 1])
            return $
          }
        }, 'scanRight')
        n.scanRight = un
        var en = t(function (e) {
          return e.length
        }, 'size')
        ;(n.size = en), (n.isOutOfBound = b.isOutOfBound)
        function yn(e, a) {
          return a === void 0
            ? function (l) {
                return yn(e, l)
              }
            : n.isOutOfBound(e, a)
            ? A.none
            : A.some(a[e])
        }
        t(yn, 'lookup'), (n.lookup = yn)
        var Nn = t(function (e) {
          return n.isNonEmpty(e) ? A.some(b.head(e)) : A.none
        }, 'head')
        n.head = Nn
        var ct = t(function (e) {
          return n.isNonEmpty(e) ? A.some(b.last(e)) : A.none
        }, 'last')
        n.last = ct
        var ot = t(function (e) {
          return n.isNonEmpty(e) ? A.some(b.tail(e)) : A.none
        }, 'tail')
        n.tail = ot
        var dt = t(function (e) {
          return n.isNonEmpty(e) ? A.some(b.init(e)) : A.none
        }, 'init')
        n.init = dt
        var vt = t(function (e) {
          return function (a) {
            return n.isOutOfBound(e, a) ? a : e === 0 ? n.empty : a.slice(0, e)
          }
        }, 'takeLeft')
        n.takeLeft = vt
        var mt = t(function (e) {
          return function (a) {
            return n.isOutOfBound(e, a) ? a : e === 0 ? n.empty : a.slice(-e)
          }
        }, 'takeRight')
        n.takeRight = mt
        function ft(e) {
          return function (a) {
            for (var l = [], O = 0, $ = a; O < $.length; O++) {
              var V = $[O]
              if (!e(V)) break
              l.push(V)
            }
            var dn = l.length
            return dn === a.length ? a : dn === 0 ? n.empty : l
          }
        }
        t(ft, 'takeLeftWhile'), (n.takeLeftWhile = ft)
        var rt = t(function (e, a) {
          for (var l = e.length, O = 0; O < l && a(e[O]); O++);
          return O
        }, 'spanLeftIndex')
        function gt(e) {
          return function (a) {
            var l = n.splitAt(rt(a, e))(a),
              O = l[0],
              $ = l[1]
            return { init: O, rest: $ }
          }
        }
        t(gt, 'spanLeft'), (n.spanLeft = gt)
        var yt = t(function (e) {
          return function (a) {
            return e <= 0 || n.isEmpty(a) ? a : e >= a.length ? n.empty : a.slice(e, a.length)
          }
        }, 'dropLeft')
        n.dropLeft = yt
        var It = t(function (e) {
          return function (a) {
            return e <= 0 || n.isEmpty(a) ? a : e >= a.length ? n.empty : a.slice(0, a.length - e)
          }
        }, 'dropRight')
        n.dropRight = It
        function st(e) {
          return function (a) {
            var l = rt(a, e)
            return l === 0 ? a : l === a.length ? n.empty : a.slice(l)
          }
        }
        t(st, 'dropLeftWhile'), (n.dropLeftWhile = st)
        var bt = t(function (e) {
          return function (a) {
            for (var l = 0; l < a.length; l++) if (e(a[l])) return A.some(l)
            return A.none
          }
        }, 'findIndex')
        n.findIndex = bt
        function Mt(e) {
          return function (a) {
            for (var l = 0; l < a.length; l++) if (e(a[l])) return A.some(a[l])
            return A.none
          }
        }
        t(Mt, 'findFirst'), (n.findFirst = Mt)
        var In = t(function (e) {
          return function (a) {
            for (var l = 0; l < a.length; l++) {
              var O = e(a[l])
              if (A.isSome(O)) return O
            }
            return A.none
          }
        }, 'findFirstMap')
        n.findFirstMap = In
        function vn(e) {
          return function (a) {
            for (var l = a.length - 1; l >= 0; l--) if (e(a[l])) return A.some(a[l])
            return A.none
          }
        }
        t(vn, 'findLast'), (n.findLast = vn)
        var _n = t(function (e) {
          return function (a) {
            for (var l = a.length - 1; l >= 0; l--) {
              var O = e(a[l])
              if (A.isSome(O)) return O
            }
            return A.none
          }
        }, 'findLastMap')
        n.findLastMap = _n
        var En = t(function (e) {
          return function (a) {
            for (var l = a.length - 1; l >= 0; l--) if (e(a[l])) return A.some(l)
            return A.none
          }
        }, 'findLastIndex')
        n.findLastIndex = En
        var Tn = t(function (e, a) {
          return function (l) {
            return e < 0 || e > l.length ? A.none : A.some(b.unsafeInsertAt(e, a, l))
          }
        }, 'insertAt')
        n.insertAt = Tn
        var Un = t(function (e, a) {
          return n.modifyAt(e, function () {
            return a
          })
        }, 'updateAt')
        n.updateAt = Un
        var Mn = t(function (e) {
          return function (a) {
            return n.isOutOfBound(e, a) ? A.none : A.some(n.unsafeDeleteAt(e, a))
          }
        }, 'deleteAt')
        n.deleteAt = Mn
        var wn = t(function (e, a) {
          return function (l) {
            return n.isOutOfBound(e, l) ? A.none : A.some(n.unsafeUpdateAt(e, a(l[e]), l))
          }
        }, 'modifyAt')
        n.modifyAt = wn
        var Sn = t(function (e) {
          return e.length <= 1 ? e : e.slice().reverse()
        }, 'reverse')
        n.reverse = Sn
        var Hn = t(function (e) {
          for (var a = [], l = 0; l < e.length; l++) {
            var O = e[l]
            O._tag === 'Right' && a.push(O.right)
          }
          return a
        }, 'rights')
        n.rights = Hn
        var Gn = t(function (e) {
          for (var a = [], l = 0; l < e.length; l++) {
            var O = e[l]
            O._tag === 'Left' && a.push(O.left)
          }
          return a
        }, 'lefts')
        n.lefts = Gn
        var zn = t(function (e) {
          return function (a) {
            return a.length <= 1 ? a : a.slice().sort(e.compare)
          }
        }, 'sort')
        n.sort = zn
        var Cn = t(function (e, a, l) {
          for (var O = [], $ = Math.min(e.length, a.length), V = 0; V < $; V++) O[V] = l(e[V], a[V])
          return O
        }, 'zipWith')
        n.zipWith = Cn
        function kn(e, a) {
          return a === void 0
            ? function (l) {
                return kn(l, e)
              }
            : n.zipWith(e, a, function (l, O) {
                return [l, O]
              })
        }
        t(kn, 'zip'), (n.zip = kn)
        var lt = t(function (e) {
          for (var a = [], l = [], O = 0; O < e.length; O++) (a[O] = e[O][0]), (l[O] = e[O][1])
          return [a, l]
        }, 'unzip')
        n.unzip = lt
        var wt = t(function (e) {
          var a = b.prependAll(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : l
          }
        }, 'prependAll')
        n.prependAll = wt
        var Wt = t(function (e) {
          var a = b.intersperse(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : l
          }
        }, 'intersperse')
        n.intersperse = Wt
        var it = t(function (e) {
          var a = b.rotate(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : l
          }
        }, 'rotate')
        n.rotate = it
        function Fn(e) {
          return function (a, l) {
            if (l === void 0) {
              var O = Fn(e)
              return function (dn) {
                return O(a, dn)
              }
            }
            for (
              var $ = t(function (dn) {
                  return e.equals(dn, a)
                }, 'predicate'),
                V = 0;
              V < l.length;
              V++
            )
              if ($(l[V])) return !0
            return !1
          }
        }
        t(Fn, 'elem'), (n.elem = Fn)
        var et = t(function (e) {
          var a = b.uniq(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : l
          }
        }, 'uniq2')
        n.uniq = et
        var hn = t(function (e) {
          var a = b.sortBy(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : l
          }
        }, 'sortBy')
        n.sortBy = hn
        var Xn = t(function (e) {
          var a = b.chop(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : n.empty
          }
        }, 'chop')
        n.chop = Xn
        var An = t(function (e) {
          return function (a) {
            return e >= 1 && n.isNonEmpty(a)
              ? b.splitAt(e)(a)
              : n.isEmpty(a)
              ? [a, n.empty]
              : [n.empty, a]
          }
        }, 'splitAt')
        n.splitAt = An
        var $n = t(function (e) {
          var a = b.chunksOf(e)
          return function (l) {
            return n.isNonEmpty(l) ? a(l) : n.empty
          }
        }, 'chunksOf')
        n.chunksOf = $n
        var Qn = t(function (e) {
          return function () {
            for (var a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l]
            return n.fromOption(e.apply(void 0, a))
          }
        }, 'fromOptionK')
        n.fromOptionK = Qn
        function Yn(e, a, l) {
          l === void 0 &&
            (l = t(function () {
              return !0
            }, 'g'))
          var O = t(function ($, V) {
            return n.isNonEmpty(V)
              ? _.pipe(
                  b.head(V),
                  n.chain(function (dn) {
                    return O(_.pipe($, n.append(dn)), b.tail(V))
                  })
                )
              : l.apply(void 0, $)
              ? [a.apply(void 0, $)]
              : n.empty
          }, 'go')
          return O(n.empty, e)
        }
        t(Yn, 'comprehension'), (n.comprehension = Yn)
        var Jn = t(function (e) {
          return function (a) {
            return n.isEmpty(a) ? e : n.isEmpty(e) ? a : a.concat(e)
          }
        }, 'concatW')
        ;(n.concatW = Jn), (n.concat = n.concatW)
        function Bn(e) {
          var a = b.union(e)
          return function (l, O) {
            if (O === void 0) {
              var $ = Bn(e)
              return function (V) {
                return $(V, l)
              }
            }
            return n.isNonEmpty(l) && n.isNonEmpty(O) ? a(O)(l) : n.isNonEmpty(l) ? l : O
          }
        }
        t(Bn, 'union'), (n.union = Bn)
        function xn(e) {
          var a = Fn(e)
          return function (l, O) {
            if (O === void 0) {
              var $ = xn(e)
              return function (V) {
                return $(V, l)
              }
            }
            return l.filter(function (V) {
              return a(V, O)
            })
          }
        }
        t(xn, 'intersection'), (n.intersection = xn)
        function nt(e) {
          var a = Fn(e)
          return function (l, O) {
            if (O === void 0) {
              var $ = nt(e)
              return function (V) {
                return $(V, l)
              }
            }
            return l.filter(function (V) {
              return !a(V, O)
            })
          }
        }
        t(nt, 'difference'), (n.difference = nt)
        var fn = t(function (e, a) {
            return _.pipe(e, n.map(a))
          }, '_map'),
          sn = t(function (e, a) {
            return _.pipe(e, n.mapWithIndex(a))
          }, '_mapWithIndex'),
          mn = t(function (e, a) {
            return _.pipe(e, n.ap(a))
          }, '_ap'),
          bn = t(function (e, a) {
            return _.pipe(e, n.chain(a))
          }, '_chain'),
          pn = t(function (e, a) {
            return _.pipe(e, n.filter(a))
          }, '_filter'),
          Ln = t(function (e, a) {
            return _.pipe(e, n.filterMap(a))
          }, '_filterMap'),
          Dn = t(function (e, a) {
            return _.pipe(e, n.partition(a))
          }, '_partition'),
          Zn = t(function (e, a) {
            return _.pipe(e, n.partitionMap(a))
          }, '_partitionMap'),
          at = t(function (e, a) {
            return _.pipe(e, n.partitionWithIndex(a))
          }, '_partitionWithIndex'),
          ut = t(function (e, a) {
            return _.pipe(e, n.partitionMapWithIndex(a))
          }, '_partitionMapWithIndex'),
          I = t(function (e, a) {
            return _.pipe(e, n.alt(a))
          }, '_alt'),
          M = t(function (e, a, l) {
            return _.pipe(e, n.reduce(a, l))
          }, '_reduce'),
          L = t(function (e) {
            var a = n.foldMap(e)
            return function (l, O) {
              return _.pipe(l, a(O))
            }
          }, '_foldMap'),
          z = t(function (e, a, l) {
            return _.pipe(e, n.reduceRight(a, l))
          }, '_reduceRight'),
          x = t(function (e, a, l) {
            return _.pipe(e, n.reduceWithIndex(a, l))
          }, '_reduceWithIndex'),
          tn = t(function (e) {
            var a = n.foldMapWithIndex(e)
            return function (l, O) {
              return _.pipe(l, a(O))
            }
          }, '_foldMapWithIndex'),
          cn = t(function (e, a, l) {
            return _.pipe(e, n.reduceRightWithIndex(a, l))
          }, '_reduceRightWithIndex'),
          Wn = t(function (e, a) {
            return _.pipe(e, n.filterMapWithIndex(a))
          }, '_filterMapWithIndex'),
          Kn = t(function (e, a) {
            return _.pipe(e, n.filterWithIndex(a))
          }, '_filterWithIndex'),
          tt = t(function (e, a) {
            return _.pipe(e, n.extend(a))
          }, '_extend'),
          v = t(function (e) {
            var a = n.traverse(e)
            return function (l, O) {
              return _.pipe(l, a(O))
            }
          }, '_traverse'),
          s = t(function (e) {
            var a = n.traverseWithIndex(e)
            return function (l, O) {
              return _.pipe(l, a(O))
            }
          }, '_traverseWithIndex'),
          q = t(function (e, a) {
            return _.pipe(e, n.chainRecDepthFirst(a))
          }, '_chainRecDepthFirst')
        n._chainRecDepthFirst = q
        var j = t(function (e, a) {
          return _.pipe(e, n.chainRecBreadthFirst(a))
        }, '_chainRecBreadthFirst')
        ;(n._chainRecBreadthFirst = j), (n.of = b.of)
        var Q = t(function () {
          return n.empty
        }, 'zero')
        n.zero = Q
        var nn = t(function (e) {
          return function (a) {
            return a.concat(e())
          }
        }, 'altW')
        ;(n.altW = nn), (n.alt = n.altW)
        var on = t(function (e) {
          return n.chain(function (a) {
            return _.pipe(e, n.map(a))
          })
        }, 'ap')
        n.ap = on
        var Pn = t(function (e) {
          return function (a) {
            return _.pipe(
              a,
              n.chainWithIndex(function (l, O) {
                return e(O)
              })
            )
          }
        }, 'chain')
        ;(n.chain = Pn), (n.flatten = n.chain(_.identity))
        var ht = t(function (e) {
          return function (a) {
            return a.map(function (l) {
              return e(l)
            })
          }
        }, 'map')
        n.map = ht
        var Rt = t(function (e) {
          return function (a) {
            return a.map(function (l, O) {
              return e(O, l)
            })
          }
        }, 'mapWithIndex')
        n.mapWithIndex = Rt
        var $t = t(function (e) {
          for (var a = [], l = [], O = 0, $ = e; O < $.length; O++) {
            var V = $[O]
            V._tag === 'Left' ? a.push(V.left) : l.push(V.right)
          }
          return m.separated(a, l)
        }, 'separate')
        n.separate = $t
        var Zt = t(function (e) {
          return function (a) {
            return a.filter(e)
          }
        }, 'filter')
        n.filter = Zt
        var Kt = t(function (e) {
          return function (a) {
            for (var l = [], O = 0; O < a.length; O++) {
              var $ = e(O, a[O])
              A.isSome($) && l.push($.value)
            }
            return l
          }
        }, 'filterMapWithIndex')
        n.filterMapWithIndex = Kt
        var Vt = t(function (e) {
          return n.filterMapWithIndex(function (a, l) {
            return e(l)
          })
        }, 'filterMap')
        ;(n.filterMap = Vt), (n.compact = n.filterMap(_.identity))
        var Ht = t(function (e) {
          return n.partitionWithIndex(function (a, l) {
            return e(l)
          })
        }, 'partition')
        n.partition = Ht
        var Gt = t(function (e) {
          return function (a) {
            for (var l = [], O = [], $ = 0; $ < a.length; $++) {
              var V = a[$]
              e($, V) ? O.push(V) : l.push(V)
            }
            return m.separated(l, O)
          }
        }, 'partitionWithIndex')
        n.partitionWithIndex = Gt
        var Xt = t(function (e) {
          return n.partitionMapWithIndex(function (a, l) {
            return e(l)
          })
        }, 'partitionMap')
        n.partitionMap = Xt
        var Qt = t(function (e) {
          return function (a) {
            for (var l = [], O = [], $ = 0; $ < a.length; $++) {
              var V = e($, a[$])
              V._tag === 'Left' ? l.push(V.left) : O.push(V.right)
            }
            return m.separated(l, O)
          }
        }, 'partitionMapWithIndex')
        n.partitionMapWithIndex = Qt
        var Yt = t(function (e) {
          return function (a) {
            return a.filter(function (l, O) {
              return e(O, l)
            })
          }
        }, 'filterWithIndex')
        n.filterWithIndex = Yt
        var Jt = t(function (e) {
          return function (a) {
            return a.map(function (l, O) {
              return e(a.slice(O))
            })
          }
        }, 'extend')
        ;(n.extend = Jt), (n.duplicate = n.extend(_.identity))
        var xt = t(function (e) {
          return function (a) {
            return function (l) {
              return l.reduce(function (O, $, V) {
                return e.concat(O, a(V, $))
              }, e.empty)
            }
          }
        }, 'foldMapWithIndex')
        n.foldMapWithIndex = xt
        var nr = t(function (e, a) {
          return n.reduceWithIndex(e, function (l, O, $) {
            return a(O, $)
          })
        }, 'reduce')
        n.reduce = nr
        var Ut = t(function (e) {
          var a = n.foldMapWithIndex(e)
          return function (l) {
            return a(function (O, $) {
              return l($)
            })
          }
        }, 'foldMap')
        n.foldMap = Ut
        var Ft = t(function (e, a) {
          return function (l) {
            for (var O = l.length, $ = e, V = 0; V < O; V++) $ = a(V, $, l[V])
            return $
          }
        }, 'reduceWithIndex')
        n.reduceWithIndex = Ft
        var tr = t(function (e, a) {
          return n.reduceRightWithIndex(e, function (l, O, $) {
            return a(O, $)
          })
        }, 'reduceRight')
        n.reduceRight = tr
        var rr = t(function (e, a) {
          return function (l) {
            return l.reduceRight(function (O, $, V) {
              return a(V, $, O)
            }, e)
          }
        }, 'reduceRightWithIndex')
        n.reduceRightWithIndex = rr
        var ir = t(function (e) {
          var a = n.traverseWithIndex(e)
          return function (l) {
            return a(function (O, $) {
              return l($)
            })
          }
        }, 'traverse')
        n.traverse = ir
        var f = t(function (e) {
          return function (a) {
            return M(a, e.of(n.zero()), function (l, O) {
              return e.ap(
                e.map(l, function ($) {
                  return function (V) {
                    return _.pipe($, n.append(V))
                  }
                }),
                O
              )
            })
          }
        }, 'sequence')
        n.sequence = f
        var d = t(function (e) {
          return function (a) {
            return n.reduceWithIndex(e.of(n.zero()), function (l, O, $) {
              return e.ap(
                e.map(O, function (V) {
                  return function (dn) {
                    return _.pipe(V, n.append(dn))
                  }
                }),
                a(l, $)
              )
            })
          }
        }, 'traverseWithIndex')
        n.traverseWithIndex = d
        var w = t(function (e) {
          var a = ar(e)
          return function (l) {
            return function (O) {
              return a(O, l)
            }
          }
        }, 'wither')
        n.wither = w
        var P = t(function (e) {
          var a = ur(e)
          return function (l) {
            return function (O) {
              return a(O, l)
            }
          }
        }, 'wilt')
        n.wilt = P
        var X = t(function (e, a) {
          for (var l = [], O = e; ; ) {
            var $ = a(O)
            if (A.isSome($)) {
              var V = $.value,
                dn = V[0],
                _t = V[1]
              l.push(dn), (O = _t)
            } else break
          }
          return l
        }, 'unfold')
        ;(n.unfold = X), (n.URI = 'ReadonlyArray')
        var G = t(function (e) {
          return {
            show: function (a) {
              return '[' + a.map(e.show).join(', ') + ']'
            },
          }
        }, 'getShow')
        n.getShow = G
        var At = t(function () {
          return {
            concat: function (e, a) {
              return n.isEmpty(e) ? a : n.isEmpty(a) ? e : e.concat(a)
            },
          }
        }, 'getSemigroup')
        n.getSemigroup = At
        var er = t(function () {
          return { concat: n.getSemigroup().concat, empty: n.empty }
        }, 'getMonoid')
        n.getMonoid = er
        var Or = t(function (e) {
          return S.fromEquals(function (a, l) {
            return (
              a.length === l.length &&
              a.every(function (O, $) {
                return e.equals(O, l[$])
              })
            )
          })
        }, 'getEq')
        n.getEq = Or
        var qr = t(function (e) {
          return R.fromCompare(function (a, l) {
            for (var O = a.length, $ = l.length, V = Math.min(O, $), dn = 0; dn < V; dn++) {
              var _t = e.compare(a[dn], l[dn])
              if (_t !== 0) return _t
            }
            return K.Ord.compare(O, $)
          })
        }, 'getOrd')
        n.getOrd = qr
        var Nr = t(function (e) {
          var a = Bn(e)
          return {
            concat: function (l, O) {
              return a(O)(l)
            },
          }
        }, 'getUnionSemigroup')
        n.getUnionSemigroup = Nr
        var Ur = t(function (e) {
          return { concat: n.getUnionSemigroup(e).concat, empty: n.empty }
        }, 'getUnionMonoid')
        n.getUnionMonoid = Ur
        var Fr = t(function (e) {
          var a = xn(e)
          return {
            concat: function (l, O) {
              return a(O)(l)
            },
          }
        }, 'getIntersectionSemigroup')
        n.getIntersectionSemigroup = Fr
        var Br = t(function (e) {
          var a = nt(e)
          return {
            concat: function (l, O) {
              return a(O)(l)
            },
          }
        }, 'getDifferenceMagma')
        ;(n.getDifferenceMagma = Br),
          (n.Functor = { URI: n.URI, map: fn }),
          (n.flap = B.flap(n.Functor)),
          (n.Pointed = { URI: n.URI, of: n.of }),
          (n.FunctorWithIndex = { URI: n.URI, map: fn, mapWithIndex: sn }),
          (n.Apply = { URI: n.URI, map: fn, ap: mn }),
          (n.apFirst = U.apFirst(n.Apply)),
          (n.apSecond = U.apSecond(n.Apply)),
          (n.Applicative = { URI: n.URI, map: fn, ap: mn, of: n.of }),
          (n.Chain = { URI: n.URI, map: fn, ap: mn, chain: bn }),
          (n.Monad = { URI: n.URI, map: fn, ap: mn, of: n.of, chain: bn }),
          (n.chainFirst = D.chainFirst(n.Chain)),
          (n.Unfoldable = { URI: n.URI, unfold: n.unfold }),
          (n.Alt = { URI: n.URI, map: fn, alt: I }),
          (n.Zero = { URI: n.URI, zero: n.zero }),
          (n.guard = u.guard(n.Zero, n.Pointed)),
          (n.Alternative = { URI: n.URI, map: fn, ap: mn, of: n.of, alt: I, zero: n.zero }),
          (n.Extend = { URI: n.URI, map: fn, extend: tt }),
          (n.Compactable = { URI: n.URI, compact: n.compact, separate: n.separate }),
          (n.Filterable = {
            URI: n.URI,
            map: fn,
            compact: n.compact,
            separate: n.separate,
            filter: pn,
            filterMap: Ln,
            partition: Dn,
            partitionMap: Zn,
          }),
          (n.FilterableWithIndex = {
            URI: n.URI,
            map: fn,
            mapWithIndex: sn,
            compact: n.compact,
            separate: n.separate,
            filter: pn,
            filterMap: Ln,
            partition: Dn,
            partitionMap: Zn,
            partitionMapWithIndex: ut,
            partitionWithIndex: at,
            filterMapWithIndex: Wn,
            filterWithIndex: Kn,
          }),
          (n.Foldable = { URI: n.URI, reduce: M, foldMap: L, reduceRight: z }),
          (n.FoldableWithIndex = {
            URI: n.URI,
            reduce: M,
            foldMap: L,
            reduceRight: z,
            reduceWithIndex: x,
            foldMapWithIndex: tn,
            reduceRightWithIndex: cn,
          }),
          (n.Traversable = {
            URI: n.URI,
            map: fn,
            reduce: M,
            foldMap: L,
            reduceRight: z,
            traverse: v,
            sequence: n.sequence,
          }),
          (n.TraversableWithIndex = {
            URI: n.URI,
            map: fn,
            mapWithIndex: sn,
            reduce: M,
            foldMap: L,
            reduceRight: z,
            reduceWithIndex: x,
            foldMapWithIndex: tn,
            reduceRightWithIndex: cn,
            traverse: v,
            sequence: n.sequence,
            traverseWithIndex: s,
          })
        var pr = t(function (e) {
          return function (a) {
            for (var l = h([], e(a)), O = []; l.length > 0; ) {
              var $ = l.shift()
              A.isLeft($) ? l.unshift.apply(l, e($.left)) : O.push($.right)
            }
            return O
          }
        }, 'chainRecDepthFirst')
        ;(n.chainRecDepthFirst = pr),
          (n.ChainRecDepthFirst = {
            URI: n.URI,
            map: fn,
            ap: mn,
            chain: bn,
            chainRec: n._chainRecDepthFirst,
          })
        var Lr = t(function (e) {
          return function (a) {
            var l = e(a),
              O = [],
              $ = []
            function V(cr) {
              A.isLeft(cr)
                ? e(cr.left).forEach(function ($r) {
                    return O.push($r)
                  })
                : $.push(cr.right)
            }
            t(V, 'go')
            for (var dn = 0, _t = l; dn < _t.length; dn++) {
              var kr = _t[dn]
              V(kr)
            }
            for (; O.length > 0; ) V(O.shift())
            return $
          }
        }, 'chainRecBreadthFirst')
        ;(n.chainRecBreadthFirst = Lr),
          (n.ChainRecBreadthFirst = {
            URI: n.URI,
            map: fn,
            ap: mn,
            chain: bn,
            chainRec: n._chainRecBreadthFirst,
          })
        var ar = y.witherDefault(n.Traversable, n.Compactable),
          ur = y.wiltDefault(n.Traversable, n.Compactable)
        ;(n.Witherable = {
          URI: n.URI,
          map: fn,
          compact: n.compact,
          separate: n.separate,
          filter: pn,
          filterMap: Ln,
          partition: Dn,
          partitionMap: Zn,
          reduce: M,
          foldMap: L,
          reduceRight: z,
          traverse: v,
          sequence: n.sequence,
          wither: ar,
          wilt: ur,
        }),
          (n.filterE = y.filterE(n.Witherable)),
          (n.FromEither = { URI: n.URI, fromEither: n.fromEither }),
          (n.fromEitherK = N.fromEitherK(n.FromEither)),
          (n.unsafeInsertAt = b.unsafeInsertAt)
        var Dr = t(function (e, a, l) {
          return n.isNonEmpty(l) ? b.unsafeUpdateAt(e, a, l) : l
        }, 'unsafeUpdateAt')
        n.unsafeUpdateAt = Dr
        var Pr = t(function (e, a) {
          var l = a.slice()
          return l.splice(e, 1), l
        }, 'unsafeDeleteAt')
        n.unsafeDeleteAt = Pr
        var jr = t(function (e) {
          return e.slice()
        }, 'toArray')
        n.toArray = jr
        var Tr = t(function (e) {
          return n.isEmpty(e) ? n.empty : e.slice()
        }, 'fromArray')
        ;(n.fromArray = Tr), (n.empty = b.empty)
        var zr = t(function (e) {
          return function (a) {
            return a.every(e)
          }
        }, 'every')
        n.every = zr
        var Cr = t(function (e) {
          return function (a) {
            return a.some(e)
          }
        }, 'some')
        ;(n.some = Cr),
          (n.exists = n.some),
          (n.Do = n.of(A.emptyRecord)),
          (n.bindTo = B.bindTo(n.Functor)),
          (n.bind = D.bind(n.Chain)),
          (n.apS = U.apS(n.Apply)),
          (n.range = b.range),
          (n.cons = b.cons),
          (n.snoc = b.snoc),
          (n.prependToAll = n.prependAll),
          (n.readonlyArray = {
            URI: n.URI,
            compact: n.compact,
            separate: n.separate,
            map: fn,
            ap: mn,
            of: n.of,
            chain: bn,
            filter: pn,
            filterMap: Ln,
            partition: Dn,
            partitionMap: Zn,
            mapWithIndex: sn,
            partitionMapWithIndex: ut,
            partitionWithIndex: at,
            filterMapWithIndex: Wn,
            filterWithIndex: Kn,
            alt: I,
            zero: n.zero,
            unfold: n.unfold,
            reduce: M,
            foldMap: L,
            reduceRight: z,
            traverse: v,
            sequence: n.sequence,
            reduceWithIndex: x,
            foldMapWithIndex: tn,
            reduceRightWithIndex: cn,
            traverseWithIndex: s,
            extend: tt,
            wither: ar,
            wilt: ur,
          })
      },
    }),
    li = gn({
      '../../node_modules/fp-ts/lib/Array.js'(n) {
        'use strict'
        var r =
            (n && n.__createBinding) ||
            (Object.create
              ? function (f, d, w, P) {
                  P === void 0 && (P = w),
                    Object.defineProperty(f, P, {
                      enumerable: !0,
                      get: function () {
                        return d[w]
                      },
                    })
                }
              : function (f, d, w, P) {
                  P === void 0 && (P = w), (f[P] = d[w])
                }),
          i =
            (n && n.__setModuleDefault) ||
            (Object.create
              ? function (f, d) {
                  Object.defineProperty(f, 'default', { enumerable: !0, value: d })
                }
              : function (f, d) {
                  f.default = d
                }),
          o =
            (n && n.__importStar) ||
            function (f) {
              if (f && f.__esModule) return f
              var d = {}
              if (f != null)
                for (var w in f)
                  w !== 'default' && Object.prototype.hasOwnProperty.call(f, w) && r(d, f, w)
              return i(d, f), d
            }
        Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.lefts =
            n.rights =
            n.reverse =
            n.modifyAt =
            n.deleteAt =
            n.updateAt =
            n.insertAt =
            n.copy =
            n.findLastIndex =
            n.findLastMap =
            n.findLast =
            n.findFirstMap =
            n.findFirst =
            n.findIndex =
            n.dropLeftWhile =
            n.dropRight =
            n.dropLeft =
            n.spanLeft =
            n.takeLeftWhile =
            n.takeRight =
            n.takeLeft =
            n.init =
            n.tail =
            n.last =
            n.head =
            n.lookup =
            n.isOutOfBound =
            n.size =
            n.scanRight =
            n.scanLeft =
            n.chainWithIndex =
            n.foldRight =
            n.matchRight =
            n.matchRightW =
            n.foldLeft =
            n.matchLeft =
            n.matchLeftW =
            n.match =
            n.matchW =
            n.fromEither =
            n.fromOption =
            n.fromPredicate =
            n.replicate =
            n.makeBy =
            n.appendW =
            n.append =
            n.prependW =
            n.prepend =
            n.isNonEmpty =
            n.isEmpty =
              void 0),
          (n.traverseWithIndex =
            n.sequence =
            n.traverse =
            n.reduceRightWithIndex =
            n.reduceRight =
            n.reduceWithIndex =
            n.reduce =
            n.foldMapWithIndex =
            n.foldMap =
            n.duplicate =
            n.extend =
            n.filterWithIndex =
            n.alt =
            n.altW =
            n.partitionMapWithIndex =
            n.partitionMap =
            n.partitionWithIndex =
            n.partition =
            n.filter =
            n.separate =
            n.compact =
            n.filterMap =
            n.filterMapWithIndex =
            n.mapWithIndex =
            n.flatten =
            n.chain =
            n.ap =
            n.map =
            n.zero =
            n.of =
            n.difference =
            n.intersection =
            n.union =
            n.concat =
            n.concatW =
            n.comprehension =
            n.fromOptionK =
            n.chunksOf =
            n.splitAt =
            n.chop =
            n.sortBy =
            n.uniq =
            n.elem =
            n.rotate =
            n.intersperse =
            n.prependAll =
            n.unzip =
            n.zip =
            n.zipWith =
            n.sort =
              void 0),
          (n.some =
            n.every =
            n.unsafeDeleteAt =
            n.unsafeUpdateAt =
            n.unsafeInsertAt =
            n.fromEitherK =
            n.FromEither =
            n.filterE =
            n.ChainRecBreadthFirst =
            n.chainRecBreadthFirst =
            n.ChainRecDepthFirst =
            n.chainRecDepthFirst =
            n.Witherable =
            n.TraversableWithIndex =
            n.Traversable =
            n.FoldableWithIndex =
            n.Foldable =
            n.FilterableWithIndex =
            n.Filterable =
            n.Compactable =
            n.Extend =
            n.Alternative =
            n.guard =
            n.Zero =
            n.Alt =
            n.Unfoldable =
            n.Monad =
            n.chainFirst =
            n.Chain =
            n.Applicative =
            n.apSecond =
            n.apFirst =
            n.Apply =
            n.FunctorWithIndex =
            n.Pointed =
            n.flap =
            n.Functor =
            n.getDifferenceMagma =
            n.getIntersectionSemigroup =
            n.getUnionMonoid =
            n.getUnionSemigroup =
            n.getOrd =
            n.getEq =
            n.getMonoid =
            n.getSemigroup =
            n.getShow =
            n.URI =
            n.unfold =
            n.wilt =
            n.wither =
              void 0),
          (n.array =
            n.prependToAll =
            n.snoc =
            n.cons =
            n.empty =
            n.range =
            n.apS =
            n.bind =
            n.bindTo =
            n.Do =
            n.exists =
              void 0)
        var h = Pt(),
          U = jt(),
          D = br(),
          S = Vn(),
          N = pt(),
          _ = o(Et()),
          B = o(Mr()),
          A = o(fi()),
          K = wr(),
          R = Wr(),
          b = Rr(),
          m = t(function (f) {
            return f.length === 0
          }, 'isEmpty')
        ;(n.isEmpty = m),
          (n.isNonEmpty = B.isNonEmpty),
          (n.prepend = B.prepend),
          (n.prependW = B.prependW),
          (n.append = B.append),
          (n.appendW = B.appendW)
        var y = t(function (f, d) {
          return f <= 0 ? [] : B.makeBy(d)(f)
        }, 'makeBy')
        n.makeBy = y
        var u = t(function (f, d) {
          return n.makeBy(f, function () {
            return d
          })
        }, 'replicate')
        n.replicate = u
        function c(f) {
          return function (d) {
            return f(d) ? [d] : []
          }
        }
        t(c, 'fromPredicate'), (n.fromPredicate = c)
        var g = t(function (f) {
          return _.isNone(f) ? [] : [f.value]
        }, 'fromOption')
        n.fromOption = g
        var F = t(function (f) {
          return _.isLeft(f) ? [] : [f.right]
        }, 'fromEither')
        n.fromEither = F
        var W = t(function (f, d) {
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : f()
          }
        }, 'matchW')
        ;(n.matchW = W), (n.match = n.matchW)
        var E = t(function (f, d) {
          return function (w) {
            return n.isNonEmpty(w) ? d(B.head(w), B.tail(w)) : f()
          }
        }, 'matchLeftW')
        ;(n.matchLeftW = E), (n.matchLeft = n.matchLeftW), (n.foldLeft = n.matchLeft)
        var p = t(function (f, d) {
          return function (w) {
            return n.isNonEmpty(w) ? d(B.init(w), B.last(w)) : f()
          }
        }, 'matchRightW')
        ;(n.matchRightW = p), (n.matchRight = n.matchRightW), (n.foldRight = n.matchRight)
        var T = t(function (f) {
          return function (d) {
            for (var w = [], P = 0; P < d.length; P++) w.push.apply(w, f(P, d[P]))
            return w
          }
        }, 'chainWithIndex')
        n.chainWithIndex = T
        var C = t(function (f, d) {
          return function (w) {
            var P = w.length,
              X = new Array(P + 1)
            X[0] = f
            for (var G = 0; G < P; G++) X[G + 1] = d(X[G], w[G])
            return X
          }
        }, 'scanLeft')
        n.scanLeft = C
        var k = t(function (f, d) {
          return function (w) {
            var P = w.length,
              X = new Array(P + 1)
            X[P] = f
            for (var G = P - 1; G >= 0; G--) X[G] = d(w[G], X[G + 1])
            return X
          }
        }, 'scanRight')
        n.scanRight = k
        var Z = t(function (f) {
          return f.length
        }, 'size')
        ;(n.size = Z),
          (n.isOutOfBound = B.isOutOfBound),
          (n.lookup = A.lookup),
          (n.head = A.head),
          (n.last = A.last)
        var H = t(function (f) {
          return n.isNonEmpty(f) ? _.some(B.tail(f)) : _.none
        }, 'tail')
        n.tail = H
        var un = t(function (f) {
          return n.isNonEmpty(f) ? _.some(B.init(f)) : _.none
        }, 'init')
        n.init = un
        var en = t(function (f) {
          return function (d) {
            return n.isOutOfBound(f, d) ? n.copy(d) : d.slice(0, f)
          }
        }, 'takeLeft')
        n.takeLeft = en
        var yn = t(function (f) {
          return function (d) {
            return n.isOutOfBound(f, d) ? n.copy(d) : f === 0 ? [] : d.slice(-f)
          }
        }, 'takeRight')
        n.takeRight = yn
        function Nn(f) {
          return function (d) {
            for (var w = [], P = 0, X = d; P < X.length; P++) {
              var G = X[P]
              if (!f(G)) break
              w.push(G)
            }
            return w
          }
        }
        t(Nn, 'takeLeftWhile'), (n.takeLeftWhile = Nn)
        var ct = t(function (f, d) {
          for (var w = f.length, P = 0; P < w && d(f[P]); P++);
          return P
        }, 'spanLeftIndex')
        function ot(f) {
          return function (d) {
            var w = n.splitAt(ct(d, f))(d),
              P = w[0],
              X = w[1]
            return { init: P, rest: X }
          }
        }
        t(ot, 'spanLeft'), (n.spanLeft = ot)
        var dt = t(function (f) {
          return function (d) {
            return f <= 0 || n.isEmpty(d) ? n.copy(d) : f >= d.length ? [] : d.slice(f, d.length)
          }
        }, 'dropLeft')
        n.dropLeft = dt
        var vt = t(function (f) {
          return function (d) {
            return f <= 0 || n.isEmpty(d)
              ? n.copy(d)
              : f >= d.length
              ? []
              : d.slice(0, d.length - f)
          }
        }, 'dropRight')
        n.dropRight = vt
        function mt(f) {
          return function (d) {
            return d.slice(ct(d, f))
          }
        }
        t(mt, 'dropLeftWhile'), (n.dropLeftWhile = mt), (n.findIndex = A.findIndex)
        function ft(f) {
          return A.findFirst(f)
        }
        t(ft, 'findFirst'), (n.findFirst = ft), (n.findFirstMap = A.findFirstMap)
        function rt(f) {
          return A.findLast(f)
        }
        t(rt, 'findLast'),
          (n.findLast = rt),
          (n.findLastMap = A.findLastMap),
          (n.findLastIndex = A.findLastIndex)
        var gt = t(function (f) {
          return f.slice()
        }, 'copy')
        n.copy = gt
        var yt = t(function (f, d) {
          return function (w) {
            return f < 0 || f > w.length ? _.none : _.some(n.unsafeInsertAt(f, d, w))
          }
        }, 'insertAt')
        n.insertAt = yt
        var It = t(function (f, d) {
          return n.modifyAt(f, function () {
            return d
          })
        }, 'updateAt')
        n.updateAt = It
        var st = t(function (f) {
          return function (d) {
            return n.isOutOfBound(f, d) ? _.none : _.some(n.unsafeDeleteAt(f, d))
          }
        }, 'deleteAt')
        n.deleteAt = st
        var bt = t(function (f, d) {
          return function (w) {
            return n.isOutOfBound(f, w) ? _.none : _.some(n.unsafeUpdateAt(f, d(w[f]), w))
          }
        }, 'modifyAt')
        n.modifyAt = bt
        var Mt = t(function (f) {
          return n.isEmpty(f) ? [] : f.slice().reverse()
        }, 'reverse')
        n.reverse = Mt
        var In = t(function (f) {
          for (var d = [], w = 0; w < f.length; w++) {
            var P = f[w]
            P._tag === 'Right' && d.push(P.right)
          }
          return d
        }, 'rights')
        n.rights = In
        var vn = t(function (f) {
          for (var d = [], w = 0; w < f.length; w++) {
            var P = f[w]
            P._tag === 'Left' && d.push(P.left)
          }
          return d
        }, 'lefts')
        n.lefts = vn
        var _n = t(function (f) {
          return function (d) {
            return d.length <= 1 ? n.copy(d) : d.slice().sort(f.compare)
          }
        }, 'sort')
        n.sort = _n
        var En = t(function (f, d, w) {
          for (var P = [], X = Math.min(f.length, d.length), G = 0; G < X; G++) P[G] = w(f[G], d[G])
          return P
        }, 'zipWith')
        n.zipWith = En
        function Tn(f, d) {
          return d === void 0
            ? function (w) {
                return Tn(w, f)
              }
            : n.zipWith(f, d, function (w, P) {
                return [w, P]
              })
        }
        t(Tn, 'zip'), (n.zip = Tn)
        var Un = t(function (f) {
          for (var d = [], w = [], P = 0; P < f.length; P++) (d[P] = f[P][0]), (w[P] = f[P][1])
          return [d, w]
        }, 'unzip')
        n.unzip = Un
        var Mn = t(function (f) {
          var d = B.prependAll(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : []
          }
        }, 'prependAll')
        n.prependAll = Mn
        var wn = t(function (f) {
          var d = B.intersperse(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : n.copy(w)
          }
        }, 'intersperse')
        n.intersperse = wn
        var Sn = t(function (f) {
          var d = B.rotate(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : n.copy(w)
          }
        }, 'rotate')
        ;(n.rotate = Sn), (n.elem = A.elem)
        var Hn = t(function (f) {
          var d = B.uniq(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : n.copy(w)
          }
        }, 'uniq2')
        n.uniq = Hn
        var Gn = t(function (f) {
          var d = B.sortBy(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : n.copy(w)
          }
        }, 'sortBy')
        n.sortBy = Gn
        var zn = t(function (f) {
          var d = B.chop(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : []
          }
        }, 'chop')
        n.chop = zn
        var Cn = t(function (f) {
          return function (d) {
            return f >= 1 && n.isNonEmpty(d)
              ? B.splitAt(f)(d)
              : n.isEmpty(d)
              ? [n.copy(d), []]
              : [[], n.copy(d)]
          }
        }, 'splitAt')
        n.splitAt = Cn
        var kn = t(function (f) {
          var d = B.chunksOf(f)
          return function (w) {
            return n.isNonEmpty(w) ? d(w) : []
          }
        }, 'chunksOf')
        n.chunksOf = kn
        var lt = t(function (f) {
          return function () {
            for (var d = [], w = 0; w < arguments.length; w++) d[w] = arguments[w]
            return n.fromOption(f.apply(void 0, d))
          }
        }, 'fromOptionK')
        n.fromOptionK = lt
        function wt(f, d, w) {
          w === void 0 &&
            (w = t(function () {
              return !0
            }, 'g'))
          var P = t(function (X, G) {
            return n.isNonEmpty(G)
              ? S.pipe(
                  B.head(G),
                  n.chain(function (At) {
                    return P(S.pipe(X, n.append(At)), B.tail(G))
                  })
                )
              : w.apply(void 0, X)
              ? [d.apply(void 0, X)]
              : []
          }, 'go')
          return P([], f)
        }
        t(wt, 'comprehension'), (n.comprehension = wt)
        var Wt = t(function (f) {
          return function (d) {
            return n.isEmpty(d) ? n.copy(f) : n.isEmpty(f) ? n.copy(d) : d.concat(f)
          }
        }, 'concatW')
        ;(n.concatW = Wt), (n.concat = n.concatW)
        function it(f) {
          var d = B.union(f)
          return function (w, P) {
            if (P === void 0) {
              var X = it(f)
              return function (G) {
                return X(G, w)
              }
            }
            return n.isNonEmpty(w) && n.isNonEmpty(P)
              ? d(P)(w)
              : n.isNonEmpty(w)
              ? n.copy(w)
              : n.copy(P)
          }
        }
        t(it, 'union'), (n.union = it)
        function Fn(f) {
          var d = n.elem(f)
          return function (w, P) {
            if (P === void 0) {
              var X = Fn(f)
              return function (G) {
                return X(G, w)
              }
            }
            return w.filter(function (G) {
              return d(G, P)
            })
          }
        }
        t(Fn, 'intersection'), (n.intersection = Fn)
        function et(f) {
          var d = n.elem(f)
          return function (w, P) {
            if (P === void 0) {
              var X = et(f)
              return function (G) {
                return X(G, w)
              }
            }
            return w.filter(function (G) {
              return !d(G, P)
            })
          }
        }
        t(et, 'difference'), (n.difference = et)
        var hn = t(function (f, d) {
            return S.pipe(f, n.map(d))
          }, '_map'),
          Xn = t(function (f, d) {
            return S.pipe(f, n.mapWithIndex(d))
          }, '_mapWithIndex'),
          An = t(function (f, d) {
            return S.pipe(f, n.ap(d))
          }, '_ap'),
          $n = t(function (f, d) {
            return S.pipe(f, n.chain(d))
          }, '_chain'),
          Qn = t(function (f, d) {
            return S.pipe(f, n.filter(d))
          }, '_filter'),
          Yn = t(function (f, d) {
            return S.pipe(f, n.filterMap(d))
          }, '_filterMap'),
          Jn = t(function (f, d) {
            return S.pipe(f, n.partition(d))
          }, '_partition'),
          Bn = t(function (f, d) {
            return S.pipe(f, n.partitionMap(d))
          }, '_partitionMap'),
          xn = t(function (f, d) {
            return S.pipe(f, n.partitionWithIndex(d))
          }, '_partitionWithIndex'),
          nt = t(function (f, d) {
            return S.pipe(f, n.partitionMapWithIndex(d))
          }, '_partitionMapWithIndex'),
          fn = t(function (f, d) {
            return S.pipe(f, n.alt(d))
          }, '_alt'),
          sn = t(function (f, d, w) {
            return S.pipe(f, n.reduce(d, w))
          }, '_reduce'),
          mn = t(function (f) {
            var d = n.foldMap(f)
            return function (w, P) {
              return S.pipe(w, d(P))
            }
          }, '_foldMap'),
          bn = t(function (f, d, w) {
            return S.pipe(f, n.reduceRight(d, w))
          }, '_reduceRight'),
          pn = t(function (f, d, w) {
            return S.pipe(f, n.reduceWithIndex(d, w))
          }, '_reduceWithIndex'),
          Ln = t(function (f) {
            var d = n.foldMapWithIndex(f)
            return function (w, P) {
              return S.pipe(w, d(P))
            }
          }, '_foldMapWithIndex'),
          Dn = t(function (f, d, w) {
            return S.pipe(f, n.reduceRightWithIndex(d, w))
          }, '_reduceRightWithIndex'),
          Zn = t(function (f, d) {
            return S.pipe(f, n.filterMapWithIndex(d))
          }, '_filterMapWithIndex'),
          at = t(function (f, d) {
            return S.pipe(f, n.filterWithIndex(d))
          }, '_filterWithIndex'),
          ut = t(function (f, d) {
            return S.pipe(f, n.extend(d))
          }, '_extend'),
          I = t(function (f) {
            var d = n.traverse(f)
            return function (w, P) {
              return S.pipe(w, d(P))
            }
          }, '_traverse'),
          M = t(function (f) {
            var d = n.traverseWithIndex(f)
            return function (w, P) {
              return S.pipe(w, d(P))
            }
          }, '_traverseWithIndex'),
          L = A._chainRecDepthFirst,
          z = A._chainRecBreadthFirst
        n.of = B.of
        var x = t(function () {
          return []
        }, 'zero')
        n.zero = x
        var tn = t(function (f) {
          return function (d) {
            return d.map(function (w) {
              return f(w)
            })
          }
        }, 'map')
        n.map = tn
        var cn = t(function (f) {
          return n.chain(function (d) {
            return S.pipe(f, n.map(d))
          })
        }, 'ap')
        n.ap = cn
        var Wn = t(function (f) {
          return function (d) {
            return S.pipe(
              d,
              n.chainWithIndex(function (w, P) {
                return f(P)
              })
            )
          }
        }, 'chain')
        ;(n.chain = Wn), (n.flatten = n.chain(S.identity))
        var Kn = t(function (f) {
          return function (d) {
            return d.map(function (w, P) {
              return f(P, w)
            })
          }
        }, 'mapWithIndex')
        n.mapWithIndex = Kn
        var tt = t(function (f) {
          return function (d) {
            for (var w = [], P = 0; P < d.length; P++) {
              var X = f(P, d[P])
              _.isSome(X) && w.push(X.value)
            }
            return w
          }
        }, 'filterMapWithIndex')
        n.filterMapWithIndex = tt
        var v = t(function (f) {
          return n.filterMapWithIndex(function (d, w) {
            return f(w)
          })
        }, 'filterMap')
        ;(n.filterMap = v), (n.compact = n.filterMap(S.identity))
        var s = t(function (f) {
          for (var d = [], w = [], P = 0, X = f; P < X.length; P++) {
            var G = X[P]
            G._tag === 'Left' ? d.push(G.left) : w.push(G.right)
          }
          return K.separated(d, w)
        }, 'separate')
        n.separate = s
        var q = t(function (f) {
          return function (d) {
            return d.filter(f)
          }
        }, 'filter')
        n.filter = q
        var j = t(function (f) {
          return n.partitionWithIndex(function (d, w) {
            return f(w)
          })
        }, 'partition')
        n.partition = j
        var Q = t(function (f) {
          return function (d) {
            for (var w = [], P = [], X = 0; X < d.length; X++) {
              var G = d[X]
              f(X, G) ? P.push(G) : w.push(G)
            }
            return K.separated(w, P)
          }
        }, 'partitionWithIndex')
        n.partitionWithIndex = Q
        var nn = t(function (f) {
          return n.partitionMapWithIndex(function (d, w) {
            return f(w)
          })
        }, 'partitionMap')
        n.partitionMap = nn
        var on = t(function (f) {
          return function (d) {
            for (var w = [], P = [], X = 0; X < d.length; X++) {
              var G = f(X, d[X])
              G._tag === 'Left' ? w.push(G.left) : P.push(G.right)
            }
            return K.separated(w, P)
          }
        }, 'partitionMapWithIndex')
        n.partitionMapWithIndex = on
        var Pn = t(function (f) {
          return function (d) {
            return d.concat(f())
          }
        }, 'altW')
        ;(n.altW = Pn), (n.alt = n.altW)
        var ht = t(function (f) {
          return function (d) {
            return d.filter(function (w, P) {
              return f(P, w)
            })
          }
        }, 'filterWithIndex')
        n.filterWithIndex = ht
        var Rt = t(function (f) {
          return function (d) {
            return d.map(function (w, P) {
              return f(d.slice(P))
            })
          }
        }, 'extend')
        ;(n.extend = Rt),
          (n.duplicate = n.extend(S.identity)),
          (n.foldMap = A.foldMap),
          (n.foldMapWithIndex = A.foldMapWithIndex),
          (n.reduce = A.reduce),
          (n.reduceWithIndex = A.reduceWithIndex),
          (n.reduceRight = A.reduceRight),
          (n.reduceRightWithIndex = A.reduceRightWithIndex)
        var $t = t(function (f) {
          var d = n.traverseWithIndex(f)
          return function (w) {
            return d(function (P, X) {
              return w(X)
            })
          }
        }, 'traverse')
        n.traverse = $t
        var Zt = t(function (f) {
          return function (d) {
            return sn(d, f.of(n.zero()), function (w, P) {
              return f.ap(
                f.map(w, function (X) {
                  return function (G) {
                    return S.pipe(X, n.append(G))
                  }
                }),
                P
              )
            })
          }
        }, 'sequence')
        n.sequence = Zt
        var Kt = t(function (f) {
          return function (d) {
            return n.reduceWithIndex(f.of(n.zero()), function (w, P, X) {
              return f.ap(
                f.map(P, function (G) {
                  return function (At) {
                    return S.pipe(G, n.append(At))
                  }
                }),
                d(w, X)
              )
            })
          }
        }, 'traverseWithIndex')
        n.traverseWithIndex = Kt
        var Vt = t(function (f) {
          var d = Ut(f)
          return function (w) {
            return function (P) {
              return d(P, w)
            }
          }
        }, 'wither')
        n.wither = Vt
        var Ht = t(function (f) {
          var d = Ft(f)
          return function (w) {
            return function (P) {
              return d(P, w)
            }
          }
        }, 'wilt')
        n.wilt = Ht
        var Gt = t(function (f, d) {
          for (var w = [], P = f; ; ) {
            var X = d(P)
            if (_.isSome(X)) {
              var G = X.value,
                At = G[0],
                er = G[1]
              w.push(At), (P = er)
            } else break
          }
          return w
        }, 'unfold')
        ;(n.unfold = Gt), (n.URI = 'Array'), (n.getShow = A.getShow)
        var Xt = t(function () {
          return {
            concat: function (f, d) {
              return f.concat(d)
            },
          }
        }, 'getSemigroup')
        n.getSemigroup = Xt
        var Qt = t(function () {
          return { concat: n.getSemigroup().concat, empty: [] }
        }, 'getMonoid')
        ;(n.getMonoid = Qt), (n.getEq = A.getEq), (n.getOrd = A.getOrd)
        var Yt = t(function (f) {
          var d = it(f)
          return {
            concat: function (w, P) {
              return d(P)(w)
            },
          }
        }, 'getUnionSemigroup')
        n.getUnionSemigroup = Yt
        var Jt = t(function (f) {
          return { concat: n.getUnionSemigroup(f).concat, empty: [] }
        }, 'getUnionMonoid')
        n.getUnionMonoid = Jt
        var xt = t(function (f) {
          var d = Fn(f)
          return {
            concat: function (w, P) {
              return d(P)(w)
            },
          }
        }, 'getIntersectionSemigroup')
        n.getIntersectionSemigroup = xt
        var nr = t(function (f) {
          var d = et(f)
          return {
            concat: function (w, P) {
              return d(P)(w)
            },
          }
        }, 'getDifferenceMagma')
        ;(n.getDifferenceMagma = nr),
          (n.Functor = { URI: n.URI, map: hn }),
          (n.flap = N.flap(n.Functor)),
          (n.Pointed = { URI: n.URI, of: n.of }),
          (n.FunctorWithIndex = { URI: n.URI, map: hn, mapWithIndex: Xn }),
          (n.Apply = { URI: n.URI, map: hn, ap: An }),
          (n.apFirst = h.apFirst(n.Apply)),
          (n.apSecond = h.apSecond(n.Apply)),
          (n.Applicative = { URI: n.URI, map: hn, ap: An, of: n.of }),
          (n.Chain = { URI: n.URI, map: hn, ap: An, chain: $n }),
          (n.chainFirst = U.chainFirst(n.Chain)),
          (n.Monad = { URI: n.URI, map: hn, ap: An, of: n.of, chain: $n }),
          (n.Unfoldable = { URI: n.URI, unfold: n.unfold }),
          (n.Alt = { URI: n.URI, map: hn, alt: fn }),
          (n.Zero = { URI: n.URI, zero: n.zero }),
          (n.guard = b.guard(n.Zero, n.Pointed)),
          (n.Alternative = { URI: n.URI, map: hn, ap: An, of: n.of, alt: fn, zero: n.zero }),
          (n.Extend = { URI: n.URI, map: hn, extend: ut }),
          (n.Compactable = { URI: n.URI, compact: n.compact, separate: n.separate }),
          (n.Filterable = {
            URI: n.URI,
            map: hn,
            compact: n.compact,
            separate: n.separate,
            filter: Qn,
            filterMap: Yn,
            partition: Jn,
            partitionMap: Bn,
          }),
          (n.FilterableWithIndex = {
            URI: n.URI,
            map: hn,
            mapWithIndex: Xn,
            compact: n.compact,
            separate: n.separate,
            filter: Qn,
            filterMap: Yn,
            partition: Jn,
            partitionMap: Bn,
            partitionMapWithIndex: nt,
            partitionWithIndex: xn,
            filterMapWithIndex: Zn,
            filterWithIndex: at,
          }),
          (n.Foldable = { URI: n.URI, reduce: sn, foldMap: mn, reduceRight: bn }),
          (n.FoldableWithIndex = {
            URI: n.URI,
            reduce: sn,
            foldMap: mn,
            reduceRight: bn,
            reduceWithIndex: pn,
            foldMapWithIndex: Ln,
            reduceRightWithIndex: Dn,
          }),
          (n.Traversable = {
            URI: n.URI,
            map: hn,
            reduce: sn,
            foldMap: mn,
            reduceRight: bn,
            traverse: I,
            sequence: n.sequence,
          }),
          (n.TraversableWithIndex = {
            URI: n.URI,
            map: hn,
            mapWithIndex: Xn,
            reduce: sn,
            foldMap: mn,
            reduceRight: bn,
            reduceWithIndex: pn,
            foldMapWithIndex: Ln,
            reduceRightWithIndex: Dn,
            traverse: I,
            sequence: n.sequence,
            traverseWithIndex: M,
          })
        var Ut = R.witherDefault(n.Traversable, n.Compactable),
          Ft = R.wiltDefault(n.Traversable, n.Compactable)
        ;(n.Witherable = {
          URI: n.URI,
          map: hn,
          compact: n.compact,
          separate: n.separate,
          filter: Qn,
          filterMap: Yn,
          partition: Jn,
          partitionMap: Bn,
          reduce: sn,
          foldMap: mn,
          reduceRight: bn,
          traverse: I,
          sequence: n.sequence,
          wither: Ut,
          wilt: Ft,
        }),
          (n.chainRecDepthFirst = A.chainRecDepthFirst),
          (n.ChainRecDepthFirst = { URI: n.URI, map: hn, ap: An, chain: $n, chainRec: L }),
          (n.chainRecBreadthFirst = A.chainRecBreadthFirst),
          (n.ChainRecBreadthFirst = { URI: n.URI, map: hn, ap: An, chain: $n, chainRec: z }),
          (n.filterE = R.filterE(n.Witherable)),
          (n.FromEither = { URI: n.URI, fromEither: n.fromEither }),
          (n.fromEitherK = D.fromEitherK(n.FromEither)),
          (n.unsafeInsertAt = B.unsafeInsertAt)
        var tr = t(function (f, d, w) {
          return n.isNonEmpty(w) ? B.unsafeUpdateAt(f, d, w) : []
        }, 'unsafeUpdateAt')
        n.unsafeUpdateAt = tr
        var rr = t(function (f, d) {
          var w = d.slice()
          return w.splice(f, 1), w
        }, 'unsafeDeleteAt')
        ;(n.unsafeDeleteAt = rr), (n.every = A.every)
        var ir = t(function (f) {
          return function (d) {
            return d.some(f)
          }
        }, 'some')
        ;(n.some = ir),
          (n.exists = n.some),
          (n.Do = n.of(_.emptyRecord)),
          (n.bindTo = N.bindTo(n.Functor)),
          (n.bind = U.bind(n.Chain)),
          (n.apS = h.apS(n.Apply)),
          (n.range = B.range),
          (n.empty = []),
          (n.cons = B.cons),
          (n.snoc = B.snoc),
          (n.prependToAll = n.prependAll),
          (n.array = {
            URI: n.URI,
            compact: n.compact,
            separate: n.separate,
            map: hn,
            ap: An,
            of: n.of,
            chain: $n,
            filter: Qn,
            filterMap: Yn,
            partition: Jn,
            partitionMap: Bn,
            mapWithIndex: Xn,
            partitionMapWithIndex: nt,
            partitionWithIndex: xn,
            filterMapWithIndex: Zn,
            filterWithIndex: at,
            alt: fn,
            zero: n.zero,
            unfold: n.unfold,
            reduce: sn,
            foldMap: mn,
            reduceRight: bn,
            traverse: I,
            sequence: n.sequence,
            reduceWithIndex: pn,
            foldMapWithIndex: Ln,
            reduceRightWithIndex: Dn,
            traverseWithIndex: M,
            extend: ut,
            wither: Ut,
            wilt: Ft,
          })
      },
    }),
    hi = Bt(ai(), 1)
  function zt(n) {
    let r = oi(n)
    return new hi.default(r).valueOf() * Math.PI
  }
  t(zt, 'L')
  function oi(n) {
    return n.replace(/(\d+)π/g, '$1').replace(/π/g, '1')
  }
  t(oi, 'l')
  var Ct = 1e3,
    di = Object.prototype.toString.call({}),
    vi = '!recursion-limit!',
    mi = 10
  function St(n, r = mi) {
    return gi(n) || yi(n, r) || Ii(n, r)
  }
  t(St, 'c')
  function gi(n) {
    if (n === null) return 'null'
    if (n === void 0) return 'undefined'
    if (typeof n == 'string') return `"${n}"`
    if (typeof n == 'number') return String(n)
  }
  t(gi, 'G')
  function yi(n, r) {
    if (r === 0) return vi
    if (n instanceof Map) return si(n, r)
    if (n instanceof Set) return bi(n, r)
    if (((i) => i[Symbol.iterator] !== void 0)(n)) return Mi(n, r)
  }
  t(yi, 'R')
  function Ii(n, r) {
    let i = String(n)
    return i !== di ? i : wi(n, r)
  }
  t(Ii, 'F')
  function si(n, r) {
    let i = []
    for (let [o, h] of n.entries()) {
      if (i.length > Ct) {
        i.push('[...]')
        break
      }
      let U = St(o, r - 1),
        D = St(h, r - 1)
      i.push(`${U}: ${D}`)
    }
    return `Map{${i.join(', ')}}`
  }
  t(si, 'O')
  function bi(n, r) {
    let i = []
    for (let o of n) {
      if (i.length > Ct) {
        i.push('[...]')
        break
      }
      i.push(St(o, r - 1))
    }
    return `Set{${i.join(', ')}}`
  }
  t(bi, 'q')
  function Mi(n, r) {
    let i = []
    for (let o of n) {
      if (i.length > Ct) {
        i.push('[...]')
        break
      }
      i.push(St(o, r - 1))
    }
    return `${Array.isArray(n) ? '' : n.constructor.name}[${i.join(', ')}]`
  }
  t(Mi, 'D')
  function wi(n, r) {
    let i = []
    for (let h in n) {
      if (!Object.prototype.hasOwnProperty.call(n, h)) continue
      if (i.length > Ct) {
        i.push('[...]')
        break
      }
      let U = n[h],
        D = St(h, r - 1),
        S = St(U, r - 1)
      i.push(`${D}: ${S}`)
    }
    let o = n.constructor.name
    return `${o === {}.constructor.name ? '' : `(Type: ${o})`}{${i.join(', ')}}`
  }
  t(wi, 'v')
  var or = 0,
    Rn = t(
      class extends Error {
        constructor(n, r) {
          super(n)
          ;(this.detailsObj = r),
            (this.name = 'Error'),
            (this.message = n),
            (this.stack = new Error().stack),
            this.stack !== void 0 &&
              (this.stack = this.stack.replace(
                /^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /,
                `
    `
              )),
            or++
          try {
            this.details =
              or === 1
                ? St(this.detailsObj)
                : '(failed to describe detailsObj due to possibly re-entrancy)'
          } catch (i) {
            console.error(i),
              (this.details = '(failed to describe detailsObj, see the console for details)')
          } finally {
            or--
          }
        }
      },
      'd'
    ),
    Wi = [
      { character: '\xBD', ref: '\xBD', expanded: '1/2', value: 1 / 2 },
      { character: '\xBC', ref: '\xBC', expanded: '1/4', value: 1 / 4 },
      { character: '\xBE', ref: '\xBE', expanded: '3/4', value: 3 / 4 },
      { character: '\u2153', ref: '\u2153', expanded: '1/3', value: 1 / 3 },
      { character: '\u2154', ref: '\u2154', expanded: '2/3', value: 2 / 3 },
      { character: '\u2155', ref: '\u2155', expanded: '1/5', value: 1 / 5 },
      { character: '\u2156', ref: '\u2156', expanded: '2/5', value: 2 / 5 },
      { character: '\u2157', ref: '\u2157', expanded: '3/5', value: 3 / 5 },
      { character: '\u2158', ref: '\u2158', expanded: '4/5', value: 4 / 5 },
      { character: '\u2159', ref: '\u2159', expanded: '1/6', value: 1 / 6 },
      { character: '\u215A', ref: '\u215A', expanded: '5/6', value: 5 / 6 },
      { character: '\u2150', ref: '\u2150', expanded: '1/7', value: 1 / 7 },
      { character: '\u215B', ref: '\u215B', expanded: '1/8', value: 1 / 8 },
      { character: '\u215C', ref: '\u215C', expanded: '3/8', value: 3 / 8 },
      { character: '\u215D', ref: '\u215D', expanded: '5/8', value: 5 / 8 },
      { character: '\u215E', ref: '\u215E', expanded: '7/8', value: 7 / 8 },
      { character: '\u2151', ref: '\u2151', expanded: '1/9', value: 1 / 9 },
      { character: '\u2152', ref: '\u2152', expanded: '1/10', value: 1 / 10 },
    ],
    On = t(
      class {
        static parseFloat(n) {
          if (n.length === 0) throw new Error(`Not a number: '${n}'`)
          if (n[0] === '-') return -On.parseFloat(n.substr(1))
          if (n[0] === '\u221A') return Math.sqrt(On.parseFloat(n.substr(1)))
          let r = On.matchUnicodeFraction((o) => o.character === n)
          if (r !== void 0) return r.value
          let i = parseFloat(n)
          if (isNaN(i)) throw new Error(`Not a number: '${n}'`)
          return i
        }
        static simplifyByRounding(n, r) {
          if (n < 0) return -On.simplifyByRounding(-n, r)
          let i = n % 1
          if (i <= r || 1 - i <= r) return Math.round(n)
          let o = On.matchUnicodeFraction((U) => Math.abs(U.value - n) <= r)
          if (o !== void 0) return o.value
          let h = On.matchUnicodeFraction((U) => Math.abs(Math.sqrt(U.value) - n) <= r)
          return h !== void 0 ? Math.sqrt(h.value) : n
        }
        static matchUnicodeFraction(n) {
          for (let r of Wi) if (n(r)) return r
        }
        constructor(n, r, i, o) {
          ;(this.allowAbbreviation = n),
            (this.maxAbbreviationError = r),
            (this.fixedDigits = i),
            (this.itemSeparator = o)
        }
        formatFloat(n) {
          return this.allowAbbreviation
            ? this.abbreviateFloat(n, this.maxAbbreviationError, this.fixedDigits)
            : this.fixedDigits !== void 0
            ? n.toFixed(this.fixedDigits)
            : String(n)
        }
        abbreviateFloat(n, r = 0, i = void 0) {
          if (Math.abs(n) < r) return '0'
          if (n < 0) return `-${this.abbreviateFloat(-n, r, i)}`
          let o = On.matchUnicodeFraction((U) => Math.abs(U.value - n) <= r)
          if (o !== void 0) return o.character
          let h = On.matchUnicodeFraction((U) => Math.abs(Math.sqrt(U.value) - n) <= r)
          return h !== void 0
            ? `\u221A${h.character}`
            : n % 1 !== 0 && i !== void 0
            ? n.toFixed(i)
            : n.toString()
        }
      },
      'u'
    ),
    Nt = On
  ;(Nt.CONSISTENT = new On(!1, 0, 2, ', ')),
    (Nt.EXACT = new On(!0, 0, void 0, ', ')),
    (Nt.MINIFIED = new On(!0, 0, void 0, ',')),
    (Nt.SIMPLIFIED = new On(!0, 5e-4, 3, ', '))
  var jn = t(
      class {
        static need(n, r, i) {
          if (n !== !0) {
            let o =
                i === void 0 ? '(not provided)' : `[${Array.prototype.slice.call(i).join(', ')}]`,
              h = `Precondition failed

Message: ${r === void 0 ? '(not provided)' : r}

Args: ${o}`
            throw new Error(h)
          }
        }
        static notNull(n) {
          jn.need(n != null, 'notNull')
        }
        static snappedCosSin(n) {
          let r = Math.PI / 4,
            i = Math.round(n / r)
          if (i * r === n) {
            let o = Math.sqrt(0.5)
            return [
              [1, 0],
              [o, o],
              [0, 1],
              [-o, o],
              [-1, 0],
              [-o, -o],
              [0, -1],
              [o, -o],
            ][i & 7]
          }
          return [Math.cos(n), Math.sin(n)]
        }
      },
      'm'
    ),
    Y = t(
      class {
        static from(n) {
          if (n instanceof Y) return n
          if (typeof n == 'number') return new Y(n, 0)
          throw new Rn('Unrecognized value type.', { v: n })
        }
        static polar(n, r) {
          let [i, o] = jn.snappedCosSin(r)
          return new Y(n * i, n * o)
        }
        static realPartOf(n) {
          if (n instanceof Y) return n.real
          if (typeof n == 'number') return n
          throw new Rn('Unrecognized value type.', { v: n })
        }
        static imagPartOf(n) {
          if (n instanceof Y) return n.imag
          if (typeof n == 'number') return 0
          throw new Rn('Unrecognized value type.', { v: n })
        }
        constructor(n, r) {
          ;(this.real = n), (this.imag = r)
        }
        static rootsOfQuadratic(n, r, i) {
          if (((n = Y.from(n)), (r = Y.from(r)), (i = Y.from(i)), n.isEqualTo(0))) {
            if (!r.isEqualTo(0)) return [i.times(-1).dividedBy(r)]
            if (!i.isEqualTo(0)) return []
            throw Error('Degenerate')
          }
          let o = r.times(r).minus(n.times(i).times(4)).sqrts(),
            h = r.times(-1),
            U = n.times(2)
          return o.map((D) => h.minus(D).dividedBy(U))
        }
        isEqualTo(n) {
          return n instanceof Y
            ? this.real === n.real && this.imag === n.imag
            : typeof n == 'number'
            ? this.real === n && this.imag === 0
            : !1
        }
        isApproximatelyEqualTo(n, r) {
          if (n instanceof Y || typeof n == 'number') {
            let i = this.minus(Y.from(n))
            return Math.abs(i.real) <= r && Math.abs(i.imag) <= r && i.abs() <= r
          }
          return !1
        }
        norm2() {
          return this.real * this.real + this.imag * this.imag
        }
        abs() {
          return Math.sqrt(this.norm2())
        }
        unit() {
          let n = this.norm2()
          return n < 1e-5 ? Y.polar(1, this.phase()) : this.dividedBy(Math.sqrt(n))
        }
        plus(n) {
          let r = Y.from(n)
          return new Y(this.real + r.real, this.imag + r.imag)
        }
        minus(n) {
          let r = Y.from(n)
          return new Y(this.real - r.real, this.imag - r.imag)
        }
        times(n) {
          let r = Y.from(n)
          return new Y(
            this.real * r.real - this.imag * r.imag,
            this.real * r.imag + this.imag * r.real
          )
        }
        dividedBy(n) {
          let r = Y.from(n),
            i = r.norm2()
          if (i === 0) throw new Error('Division by Zero')
          let o = this.times(r.conjugate())
          return new Y(o.real / i, o.imag / i)
        }
        sqrts() {
          let [n, r] = [this.real, this.imag],
            i = Math.sqrt(Math.sqrt(n * n + r * r))
          if (i === 0) return [Y.ZERO]
          if (r === 0 && n < 0) return [new Y(0, i), new Y(0, -i)]
          let o = this.phase() / 2,
            h = Y.polar(i, o)
          return [h, h.times(-1)]
        }
        conjugate() {
          return new Y(this.real, -this.imag)
        }
        toString(n) {
          return (
            (n = n || Nt.EXACT),
            n.allowAbbreviation ? this.toStringAllowSingleValue(n) : this.toStringBothValues(n)
          )
        }
        neg() {
          return new Y(-this.real, -this.imag)
        }
        raisedTo(n) {
          return n === 0.5 && this.imag === 0 && this.real >= 0
            ? new Y(Math.sqrt(this.real), 0)
            : Y.ZERO.isEqualTo(n)
            ? Y.ONE
            : this.isEqualTo(Y.ZERO)
            ? Y.ZERO
            : this.ln().times(Y.from(n)).exp()
        }
        exp() {
          return Y.polar(Math.exp(this.real), this.imag)
        }
        cos() {
          let n = this.times(Y.I)
          return n.exp().plus(n.neg().exp()).times(0.5)
        }
        sin() {
          let n = this.times(Y.I)
          return n.exp().minus(n.neg().exp()).dividedBy(new Y(0, 2))
        }
        tan() {
          return this.sin().dividedBy(this.cos())
        }
        ln() {
          return new Y(Math.log(this.abs()), this.phase())
        }
        phase() {
          return Math.atan2(this.imag, this.real)
        }
        toStringAllowSingleValue(n) {
          return Math.abs(this.imag) <= n.maxAbbreviationError
            ? n.formatFloat(this.real)
            : Math.abs(this.real) <= n.maxAbbreviationError
            ? Math.abs(this.imag - 1) <= n.maxAbbreviationError
              ? 'i'
              : Math.abs(this.imag + 1) <= n.maxAbbreviationError
              ? '-i'
              : `${n.formatFloat(this.imag)}i`
            : this.toStringBothValues(n)
        }
        toStringBothValues(n) {
          let r = this.imag >= 0 ? '+' : '-',
            i =
              n.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= n.maxAbbreviationError
                ? ''
                : n.formatFloat(Math.abs(this.imag))
          return `${
            (n.allowAbbreviation || n.fixedDigits === void 0 || this.real < 0 ? '' : '+') +
            n.formatFloat(this.real) +
            r +
            i
          }i`
        }
      },
      'o'
    ),
    ln = Y
  ;(ln.ZERO = new Y(0, 0)), (ln.ONE = new Y(1, 0)), (ln.I = new Y(0, 1))
  var Ri = 'H',
    Ai = 'X',
    _i = 'Y',
    Ei = 'Z',
    Si = 'P',
    Oi = 'X^\xBD',
    qi = 'Rx',
    Ni = 'Ry',
    Ui = 'Rz',
    Fi = 'Swap',
    Bi = '\u2022',
    pi = 'Bloch',
    Li = '|0>',
    Di = '|1>',
    Pi = 'Measure',
    ji = Bt(sr(), 1),
    Ti = Bt(li(), 1),
    dr = Bt(Mr(), 1),
    zi = Bt(hr(), 1),
    an = t(
      class {
        static PHASE(n) {
          let r = zt(n),
            i = ln.from(Math.E)
          return an.square(1, 0, 0, i.raisedTo(ln.I.times(r)))
        }
        static get RNOT() {
          let n = ln.I,
            r = n.neg()
          return an.square(n.plus(1), r.plus(1), r.plus(1), n.plus(1)).times(0.5)
        }
        static RX(n) {
          let r = zt(n),
            i = ln.I.neg(),
            o = Math.cos(r / 2),
            h = Math.sin(r / 2)
          return an.square(o, i.times(h), i.times(h), o)
        }
        static RY(n) {
          let r = zt(n),
            i = Math.cos(r / 2),
            o = Math.sin(r / 2)
          return an.square(i, -o, o, i)
        }
        static RZ(n) {
          let r = zt(n),
            i = ln.from(Math.E),
            o = ln.I
          return an.square(i.raisedTo(o.neg().times(r / 2)), 0, 0, i.raisedTo(o.times(r / 2)))
        }
        static fromRows(n) {
          let r = n.length,
            i = n.map((S) => S.length)
          if (!(0, Ti.isNonEmpty)(i)) throw new Rn('Zero height', { rows: n })
          let o = (0, zi.uniq)(ji.Eq)(i)
          if (o.length !== 1) throw new Rn('Inconsistent row widths.', { rows: n })
          let h = o[0],
            U = new Float64Array(h * r * 2),
            D = 0
          for (let S of n)
            for (let N of S) (U[D] = ln.realPartOf(N)), (U[D + 1] = ln.imagPartOf(N)), (D += 2)
          return new an(h, r, U)
        }
        static generate(n, r, i) {
          let o = new Float64Array(n * r * 2)
          for (let h = 0; h < r; h++)
            for (let U = 0; U < n; U++) {
              let D = (h * n + U) * 2,
                S = i(h, U)
              ;(o[D] = ln.realPartOf(S)), (o[D + 1] = ln.imagPartOf(S))
            }
          return new an(n, r, o)
        }
        static solo(n) {
          return new an(1, 1, new Float64Array([ln.realPartOf(n), ln.imagPartOf(n)]))
        }
        static square(...n) {
          jn.need(Array.isArray(n), 'Array.isArray(coefs)', n)
          let r = Math.round(Math.sqrt(n.length))
          return (
            jn.need(r * r === n.length, 'Matrix.square: non-square number of arguments'),
            an.generate(r, r, (i, o) => n[i * r + o])
          )
        }
        static col(...n) {
          return (
            jn.need(Array.isArray(n), 'Array.isArray(coefs)', n),
            an.generate(1, n.length, (r) => n[r])
          )
        }
        static row(...n) {
          return (
            jn.need(Array.isArray(n), 'Array.isArray(coefs)', n),
            an.generate(n.length, 1, (r, i) => n[i])
          )
        }
        static identity(n) {
          if (!Number.isInteger(n) || n <= 0) throw new Rn('Bad size', { size: n })
          let r = new Float64Array(n * n * 2)
          for (let i = 0; i < n; i++) r[i * (n + 1) * 2] = 1
          return new an(n, n, r)
        }
        static zero(n, r) {
          return new an(n, r, new Float64Array(n * r * 2))
        }
        constructor(n, r, i) {
          if (n * r * 2 !== i.length)
            throw new Rn('width*height*2 !== buffer.length', { width: n, height: r, len: i.length })
          ;(this.width = n), (this.height = r), (this.buffer = i)
        }
        columnAt(n) {
          jn.need(n >= 0 && n <= this.width, 'colIndex >= 0 && colIndex <= this.width')
          let r = []
          for (let i = 0; i < this.height; i++) r.push(this.cell(n, i))
          return r
        }
        adjoint() {
          let n = this.height,
            r = this.width,
            i = new Float64Array(n * r * 2)
          for (let o = 0; o < r; o++)
            for (let h = 0; h < n; h++) {
              let U = (h * this.width + o) * 2,
                D = (o * n + h) * 2
              ;(i[D] = this.buffer[U]), (i[D + 1] = -this.buffer[U + 1])
            }
          return new an(n, r, i)
        }
        times(n) {
          return n instanceof an ? this.timesMatrix(n) : this.timesScalar(n)
        }
        timesMatrix(n) {
          if (this.width !== n.height) throw new Rn('Incompatible sizes.', { this: this, other: n })
          let r = n.width,
            i = this.height,
            o = this.width,
            h = new Float64Array(r * i * 2)
          for (let U = 0; U < i; U++)
            for (let D = 0; D < r; D++) {
              let S = (U * r + D) * 2
              for (let N = 0; N < o; N++) {
                let _ = (U * o + N) * 2,
                  B = (N * r + D) * 2,
                  A = this.buffer[_],
                  K = this.buffer[_ + 1],
                  R = n.buffer[B],
                  b = n.buffer[B + 1],
                  m = A * R - K * b,
                  y = A * b + R * K
                ;(h[S] += m), (h[S + 1] += y)
              }
            }
          return new an(r, i, h)
        }
        timesScalar(n) {
          let r = new Float64Array(this.buffer.length),
            i = ln.realPartOf(n),
            o = ln.imagPartOf(n)
          for (let h = 0; h < r.length; h += 2) {
            let U = this.buffer[h],
              D = this.buffer[h + 1]
            ;(r[h] = U * i - D * o), (r[h + 1] = U * o + D * i)
          }
          return new an(this.width, this.height, r)
        }
        isEqualTo(n) {
          if (this === n) return !0
          if (!(n instanceof an)) return !1
          let r = n
          return (
            this.width === r.width &&
            this.height === r.height &&
            (0, dr.range)(0, this.buffer.length - 1).every((i) => this.buffer[i] === r.buffer[i])
          )
        }
        isApproximatelyEqualTo(n, r) {
          return (
            n instanceof an &&
            this.width === n.width &&
            this.height === n.height &&
            Math.sqrt(this.minus(n).norm2()) <= r
          )
        }
        minus(n) {
          let { width: r, height: i, buffer: o } = this,
            h = n.buffer
          jn.need(n.width === r && n.height === i, 'Matrix.minus: compatible sizes')
          let U = new Float64Array(this.buffer.length)
          for (let D = 0; D < U.length; D++) U[D] = o[D] - h[D]
          return new an(r, i, U)
        }
        norm2() {
          let n = 0
          for (let r of this.buffer) n += r * r
          return n
        }
        toString(n = Nt.EXACT) {
          return `{{${this.rows()
            .map((i) => i.map((o) => o.toString(n)).join(n.itemSeparator))
            .join(`}${n.itemSeparator}{`)}}}`
        }
        rows() {
          return (0, dr.range)(0, this.height - 1).map((n) =>
            (0, dr.range)(0, this.width - 1).map((r) => this.cell(r, n))
          )
        }
        cell(n, r) {
          if (n < 0 || r < 0 || n >= this.width || r >= this.height)
            throw new Rn('Cell out of range', {
              col: n,
              row: r,
              width: this.width,
              height: this.height,
            })
          let i = (this.width * r + n) * 2
          return new ln(this.buffer[i], this.buffer[i + 1])
        }
        set(n, r, i) {
          if (n < 0 || r < 0 || n >= this.width || r >= this.height)
            throw new Rn('Cell out of range', {
              col: n,
              row: r,
              width: this.width,
              height: this.height,
            })
          let o = (this.width * r + n) * 2
          ;(this.buffer[o] = i.real), (this.buffer[o + 1] = i.imag)
        }
        isApproximatelyHermitian(n) {
          if (this.width !== this.height) return !1
          for (let r = 0; r < this.width; r++)
            for (let i = 0; i < this.height; i++) {
              let o = (this.width * i + r) * 2,
                h = (this.width * r + i) * 2
              if (
                Math.abs(this.buffer[o] - this.buffer[h]) > n ||
                Math.abs(this.buffer[o + 1] + this.buffer[h + 1]) > n
              )
                return !1
            }
          return !0
        }
        plus(n) {
          let { width: r, height: i, buffer: o } = this,
            h = n.buffer
          jn.need(n.width === r && n.height === i, 'Matrix.plus: compatible sizes')
          let U = new Float64Array(this.buffer.length)
          for (let D = 0; D < U.length; D++) U[D] = o[D] + h[D]
          return new an(r, i, U)
        }
        tensorProduct(n) {
          let r = this.width,
            i = this.height,
            o = n.width,
            h = n.height,
            U = r * o,
            D = i * h,
            S = new Float64Array(U * D * 2)
          for (let N = 0; N < i; N++)
            for (let _ = 0; _ < h; _++)
              for (let B = 0; B < r; B++)
                for (let A = 0; A < o; A++) {
                  let K = (N * r + B) * 2,
                    R = (_ * o + A) * 2,
                    b = ((N * h + _) * U + (B * o + A)) * 2,
                    m = this.buffer[K],
                    y = this.buffer[K + 1],
                    u = n.buffer[R],
                    c = n.buffer[R + 1],
                    g = m * u - y * c,
                    F = m * c + y * u
                  ;(S[b] = g), (S[b + 1] = F)
                }
          return new an(U, D, S)
        }
        timesQubitOperation(n, r, i, o) {
          jn.need((i & (1 << r)) === 0, 'Matrix.timesQubitOperation: self-controlled'),
            jn.need(n.width === 2 && n.height === 2, 'Matrix.timesQubitOperation: not 2x2')
          let { width: h, height: U, buffer: D } = this,
            [S, N, _, B, A, K, R, b] = n.buffer
          jn.need(U >= 2 << r, 'Matrix.timesQubitOperation: qubit index out of range')
          let m = new Float64Array(D),
            y = 0
          for (let u = 0; u < U; u++) {
            let c = ((i & u) ^ o) !== 0,
              g = (u & (1 << r)) !== 0
            for (let F = 0; F < h; F++) {
              if (!c && !g) {
                let W = y + (1 << r) * 2 * h,
                  E = m[y],
                  p = m[y + 1],
                  T = m[W],
                  C = m[W + 1]
                ;(m[y] = E * S - p * N + T * _ - C * B),
                  (m[y + 1] = E * N + p * S + T * B + C * _),
                  (m[W] = E * A - p * K + T * R - C * b),
                  (m[W + 1] = E * K + p * A + T * b + C * R)
              }
              y += 2
            }
          }
          return new an(h, U, m)
        }
        trace() {
          let n = 0,
            r = 0,
            i = this.width * 2 + 2
          for (let o = 0; o < this.buffer.length; o += i)
            (n += this.buffer[o]), (r += this.buffer[o + 1])
          return new ln(n, r)
        }
        qubitDensityMatrixToBlochVector() {
          if (this.width !== 2 || this.height !== 2)
            throw new Rn('Need a 2x2 density matrix.', this)
          if (!this.isApproximatelyHermitian(0.01))
            throw new Rn('Density matrix should be Hermitian.', this)
          if (!this.trace().isApproximatelyEqualTo(1, 0.01))
            throw new Rn('Density matrix should have unit trace.', this)
          let [n, r, i, o, h, U, D, S] = this.buffer,
            N = h + i,
            _ = U - o,
            B = n - D
          return [N, _, B]
        }
      },
      '_Matrix'
    ),
    rn = an
  rn.H = an.square(1, 1, 1, -1).times(Math.sqrt(0.5))
  rn.PAULI_X = an.square(0, 1, 1, 0)
  rn.PAULI_Y = an.square(0, new ln(0, -1), ln.I, 0)
  rn.PAULI_Z = an.square(1, 0, 0, -1)
  var Ar = t(
    class {
      get bra() {
        return this.matrix.adjoint()
      }
      get ket() {
        return this.matrix
      }
      constructor(n) {
        typeof n == 'string' ? (this.matrix = this.bitstringToMatrix(n)) : (this.matrix = n),
          (this.size = this.matrix.height),
          (this.nqubit = Math.log2(this.size))
      }
      amplifier(n) {
        return this.matrix.cell(0, n)
      }
      setAmplifier(n, r) {
        this.matrix.set(0, n, r)
      }
      blochVector(n) {
        return this.qubitDensityMatrix(n).qubitDensityMatrixToBlochVector()
      }
      isApproximatelyEqualTo(n, r) {
        return n instanceof Ar && this.matrix.isApproximatelyEqualTo(n.matrix, r)
      }
      timesQubitOperation(n, r, i) {
        this.matrix = this.matrix.timesQubitOperation(n, r, i, i)
      }
      toString() {
        return this.matrix.toString()
      }
      bitstringToMatrix(n) {
        let r = !1,
          i = '',
          o = [],
          h = new Rn('Invalid StateVector bit string', n)
        for (let U of n.split(''))
          switch (U) {
            case '0': {
              if (r) throw h
              o.push(rn.col(1, 0))
              break
            }
            case '1': {
              if (r) throw h
              o.push(rn.col(0, 1))
              break
            }
            case '+': {
              if (r) throw h
              o.push(rn.col(1, 1).times(Math.sqrt(0.5)))
              break
            }
            case '-': {
              r ? (i += '-') : o.push(rn.col(1, -1).times(Math.sqrt(0.5)))
              break
            }
            case 'i': {
              r ? (i += 'i') : o.push(rn.col(1, new ln(0, 1)).times(Math.sqrt(0.5)))
              break
            }
            case '(': {
              if (r) throw h
              ;(r = !0), (i = '')
              break
            }
            case ')': {
              if (!r || i !== '-i') throw h
              o.push(rn.col(1, new ln(0, -1)).times(Math.sqrt(0.5))), (r = !1)
              break
            }
            default:
              throw h
          }
        if (o.length === 0) throw h
        return o.reduce((U, D) => U.tensorProduct(D))
      }
      qubitDensityMatrix(n) {
        if (n < 0 || n >= this.nqubit) throw new Rn('Qubit index out of range', n)
        let r = [...Array(Math.log2(this.matrix.height)).keys()].filter((h) => h !== n),
          i = t(
            (h, U) =>
              U.sort()
                .reverse()
                .reduce((D, S) => {
                  let N = D >> (S + 1)
                  N = N << S
                  let _ = ((1 << S) - 1) & D
                  return N | _
                }, h),
            'removeBits'
          ),
          o = rn.zero(2, 2)
        for (let h = 0; h < this.matrix.height; h++)
          for (let U = 0; U < this.matrix.height; U++) {
            if (!r.every((A) => ((h >> A) & 1) === ((U >> A) & 1))) continue
            let S = this.matrix.cell(0, U).times(this.matrix.cell(0, h).conjugate())
            if (S.isEqualTo(0)) continue
            let N = i(U, r) === 0 ? rn.col(1, 0) : rn.col(0, 1),
              _ = i(h, r) === 0 ? rn.row(1, 0) : rn.row(0, 1),
              B = N.times(_)
            o = o.plus(B.times(S))
          }
        return o
      }
    },
    'StateVector'
  )
  function Ci(n, r) {
    return Math.round(n * Math.pow(10, r)) / Math.pow(10, r)
  }
  t(Ci, 'round')
  var _r = t(
    class {
      constructor(n) {
        typeof n == 'string' ? (this.state = new Ar(n)) : (this.state = n),
          (this.measuredBits = {}),
          (this.flags = {})
      }
      runStep(n) {
        this.blochVectors = {}
        for (let r of n)
          switch (r.type) {
            case Li:
              this.write(0, ...r.targets)
              break
            case Di:
              this.write(1, ...r.targets)
              break
            case pi:
              for (let i of r.targets) this.blochVectors[i] = this.state.blochVector(i)
              break
            case Ri:
              if (r.if && !this.flags[r.if]) break
              r.controls && r.controls.length > 0
                ? this.ch(r.controls, ...r.targets)
                : this.h(...r.targets)
              break
            case Ai:
              if (r.if && !this.flags[r.if]) break
              r.controls && r.controls.length > 0
                ? this.cnot(r.controls, ...r.targets)
                : this.x(...r.targets)
              break
            case _i:
              if (r.if && !this.flags[r.if]) break
              r.controls && r.controls.length > 0
                ? this.cy(r.controls, ...r.targets)
                : this.y(...r.targets)
              break
            case Ei:
              if (r.if && !this.flags[r.if]) break
              r.controls && r.controls.length > 0
                ? this.cz(r.controls, ...r.targets)
                : this.z(...r.targets)
              break
            case Si: {
              if (!r.angle) break
              r.controls && r.controls.length > 0
                ? this.cphase(r.controls, r.angle, r.targets[0])
                : this.cphase(r.targets.slice(1), r.angle, r.targets[0])
              break
            }
            case Bi: {
              this.cz(r.targets.slice(1), r.targets[0])
              break
            }
            case Fi: {
              r.controls && r.controls.length === 1
                ? this.cswap(r.controls[0], r.targets[0], r.targets[1])
                : this.swap(r.targets[0], r.targets[1])
              break
            }
            case Oi:
              if (r.if && !this.flags[r.if]) break
              r.controls && r.controls.length > 0
                ? this.crnot(r.controls, ...r.targets)
                : this.rnot(...r.targets)
              break
            case qi:
              if ((r.if && !this.flags[r.if]) || !r.angle) break
              r.controls && r.controls.length > 0
                ? this.crx(r.controls, r.angle, ...r.targets)
                : this.rx(r.angle, ...r.targets)
              break
            case Ni:
              if ((r.if && !this.flags[r.if]) || !r.angle) break
              r.controls && r.controls.length > 0
                ? this.cry(r.controls, r.angle, ...r.targets)
                : this.ry(r.angle, ...r.targets)
              break
            case Ui:
              if ((r.if && !this.flags[r.if]) || !r.angle) break
              r.controls && r.controls.length > 0
                ? this.crz(r.controls, r.angle, ...r.targets)
                : this.rz(r.angle, ...r.targets)
              break
            case Pi:
              for (let i of r.targets)
                this.measure(i), r.flag && (this.flags[r.flag] = this.measuredBits[i] === 1)
              break
            default:
              throw new Error('Unknown instruction')
          }
        return this
      }
      write(n, ...r) {
        for (let i of r) {
          let o = Ci(this.pZero(i), 5)
          ;((n === 0 && o === 0) || (n === 1 && o === 1)) && this.x(i)
        }
        return this
      }
      h(...n) {
        return this.u(rn.H, ...n), this
      }
      ch(n, ...r) {
        return this.cu(n, rn.H, ...r), this
      }
      x(...n) {
        return this.u(rn.PAULI_X, ...n), this
      }
      cnot(n, ...r) {
        return this.cu(n, rn.PAULI_X, ...r), this
      }
      y(...n) {
        return this.u(rn.PAULI_Y, ...n), this
      }
      cy(n, ...r) {
        return this.cu(n, rn.PAULI_Y, ...r), this
      }
      z(...n) {
        return this.u(rn.PAULI_Z, ...n), this
      }
      cz(n, ...r) {
        return this.cu(n, rn.PAULI_Z, ...r), this
      }
      phase(n, ...r) {
        return this.u(rn.PHASE(n), ...r), this
      }
      cphase(n, r, ...i) {
        return this.cu(n, rn.PHASE(r), ...i), this
      }
      swap(n, r) {
        return this.cnot(n, r).cnot(r, n).cnot(n, r), this
      }
      cswap(n, r, i) {
        return this.cnot([n, r], i).cnot([n, i], r).cnot([n, r], i), this
      }
      rnot(...n) {
        return this.u(rn.RNOT, ...n), this
      }
      crnot(n, ...r) {
        return this.cu(n, rn.RNOT, ...r), this
      }
      rx(n, ...r) {
        return this.u(rn.RX(n), ...r), this
      }
      crx(n, r, ...i) {
        return this.cu(n, rn.RX(r), ...i), this
      }
      ry(n, ...r) {
        return this.u(rn.RY(n), ...r), this
      }
      cry(n, r, ...i) {
        return this.cu(n, rn.RY(r), ...i), this
      }
      rz(n, ...r) {
        return this.u(rn.RZ(n), ...r), this
      }
      crz(n, r, ...i) {
        return this.cu(n, rn.RZ(r), ...i), this
      }
      measure(...n) {
        for (let r of n) {
          let i = this.pZero(r)
          if (Math.random() <= i) {
            for (let h = 0; h < 1 << this.state.nqubit; h++)
              (h & (1 << r)) !== 0 && this.state.setAmplifier(h, ln.ZERO),
                this.state.setAmplifier(h, this.state.amplifier(h).dividedBy(Math.sqrt(i)))
            this.measuredBits[r] = 0
          } else {
            for (let h = 0; h < 1 << this.state.nqubit; h++)
              (h & (1 << r)) === 0 && this.state.setAmplifier(h, ln.ZERO),
                this.state.setAmplifier(h, this.state.amplifier(h).dividedBy(Math.sqrt(1 - i)))
            this.measuredBits[r] = 1
          }
        }
        return this
      }
      amplitudes(n = []) {
        let r = this.state.matrix.columnAt(0)
        return n.length > 0
          ? n.reduce((i, o) => {
              let h = r[o]
              return h === void 0 ? (i[o] = [0, 0]) : (i[o] = [h.real, h.imag]), i
            }, {})
          : r.map((i) => [i.real, i.imag])
      }
      u(n, ...r) {
        for (let i of r) this.state.timesQubitOperation(n, i, 0)
      }
      cu(n, r, ...i) {
        let h = (typeof n == 'number' ? [n] : n).reduce((U, D) => U | (1 << D), 0)
        for (let U of i) this.state.timesQubitOperation(r, U, h)
      }
      pZero(n) {
        let r = 0
        for (let i = 0; i < 1 << this.state.nqubit; i++)
          (i & (1 << n)) === 0 && (r += Math.pow(this.state.amplifier(i).abs(), 2))
        return r
      }
    },
    'Simulator'
  )
  var ki = Jr(Sr(), 1)
  var kt = 1e3,
    $i = Object.prototype.toString.call({}),
    Zi = '!recursion-limit!',
    Ki = 10
  function Ot(n, r = Ki) {
    return Vi(n) || Hi(n, r) || Gi(n, r)
  }
  t(Ot, 'c')
  function Vi(n) {
    if (n === null) return 'null'
    if (n === void 0) return 'undefined'
    if (typeof n == 'string') return `"${n}"`
    if (typeof n == 'number') return String(n)
  }
  t(Vi, 'G')
  function Hi(n, r) {
    if (r === 0) return Zi
    if (n instanceof Map) return Xi(n, r)
    if (n instanceof Set) return Qi(n, r)
    if (((i) => i[Symbol.iterator] !== void 0)(n)) return Yi(n, r)
  }
  t(Hi, 'R')
  function Gi(n, r) {
    let i = String(n)
    return i !== $i ? i : Ji(n, r)
  }
  t(Gi, 'F')
  function Xi(n, r) {
    let i = []
    for (let [o, h] of n.entries()) {
      if (i.length > kt) {
        i.push('[...]')
        break
      }
      let U = Ot(o, r - 1),
        D = Ot(h, r - 1)
      i.push(`${U}: ${D}`)
    }
    return `Map{${i.join(', ')}}`
  }
  t(Xi, 'O')
  function Qi(n, r) {
    let i = []
    for (let o of n) {
      if (i.length > kt) {
        i.push('[...]')
        break
      }
      i.push(Ot(o, r - 1))
    }
    return `Set{${i.join(', ')}}`
  }
  t(Qi, 'q')
  function Yi(n, r) {
    let i = []
    for (let o of n) {
      if (i.length > kt) {
        i.push('[...]')
        break
      }
      i.push(Ot(o, r - 1))
    }
    return `${Array.isArray(n) ? '' : n.constructor.name}[${i.join(', ')}]`
  }
  t(Yi, 'D')
  function Ji(n, r) {
    let i = []
    for (let h in n) {
      if (!Object.prototype.hasOwnProperty.call(n, h)) continue
      if (i.length > kt) {
        i.push('[...]')
        break
      }
      let U = n[h],
        D = Ot(h, r - 1),
        S = Ot(U, r - 1)
      i.push(`${D}: ${S}`)
    }
    let o = n.constructor.name
    return `${o === {}.constructor.name ? '' : `(Type: ${o})`}{${i.join(', ')}}`
  }
  t(Ji, 'v')
  var mr = 0,
    gr = t(
      class extends Error {
        constructor(n, r) {
          super(n)
          ;(this.detailsObj = r),
            (this.name = 'Error'),
            (this.message = n),
            (this.stack = new Error().stack),
            this.stack !== void 0 &&
              (this.stack = this.stack.replace(
                /^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /,
                `
    `
              )),
            mr++
          try {
            this.details =
              mr === 1
                ? Ot(this.detailsObj)
                : '(failed to describe detailsObj due to possibly re-entrancy)'
          } catch (i) {
            console.error(i),
              (this.details = '(failed to describe detailsObj, see the console for details)')
          } finally {
            mr--
          }
        }
      },
      'd'
    ),
    xi = [
      { character: '\xBD', ref: '\xBD', expanded: '1/2', value: 1 / 2 },
      { character: '\xBC', ref: '\xBC', expanded: '1/4', value: 1 / 4 },
      { character: '\xBE', ref: '\xBE', expanded: '3/4', value: 3 / 4 },
      { character: '\u2153', ref: '\u2153', expanded: '1/3', value: 1 / 3 },
      { character: '\u2154', ref: '\u2154', expanded: '2/3', value: 2 / 3 },
      { character: '\u2155', ref: '\u2155', expanded: '1/5', value: 1 / 5 },
      { character: '\u2156', ref: '\u2156', expanded: '2/5', value: 2 / 5 },
      { character: '\u2157', ref: '\u2157', expanded: '3/5', value: 3 / 5 },
      { character: '\u2158', ref: '\u2158', expanded: '4/5', value: 4 / 5 },
      { character: '\u2159', ref: '\u2159', expanded: '1/6', value: 1 / 6 },
      { character: '\u215A', ref: '\u215A', expanded: '5/6', value: 5 / 6 },
      { character: '\u2150', ref: '\u2150', expanded: '1/7', value: 1 / 7 },
      { character: '\u215B', ref: '\u215B', expanded: '1/8', value: 1 / 8 },
      { character: '\u215C', ref: '\u215C', expanded: '3/8', value: 3 / 8 },
      { character: '\u215D', ref: '\u215D', expanded: '5/8', value: 5 / 8 },
      { character: '\u215E', ref: '\u215E', expanded: '7/8', value: 7 / 8 },
      { character: '\u2151', ref: '\u2151', expanded: '1/9', value: 1 / 9 },
      { character: '\u2152', ref: '\u2152', expanded: '1/10', value: 1 / 10 },
    ],
    qn = t(
      class {
        static parseFloat(n) {
          if (n.length === 0) throw new Error(`Not a number: '${n}'`)
          if (n[0] === '-') return -qn.parseFloat(n.substr(1))
          if (n[0] === '\u221A') return Math.sqrt(qn.parseFloat(n.substr(1)))
          let r = qn.matchUnicodeFraction((o) => o.character === n)
          if (r !== void 0) return r.value
          let i = parseFloat(n)
          if (isNaN(i)) throw new Error(`Not a number: '${n}'`)
          return i
        }
        static simplifyByRounding(n, r) {
          if (n < 0) return -qn.simplifyByRounding(-n, r)
          let i = n % 1
          if (i <= r || 1 - i <= r) return Math.round(n)
          let o = qn.matchUnicodeFraction((U) => Math.abs(U.value - n) <= r)
          if (o !== void 0) return o.value
          let h = qn.matchUnicodeFraction((U) => Math.abs(Math.sqrt(U.value) - n) <= r)
          return h !== void 0 ? Math.sqrt(h.value) : n
        }
        static matchUnicodeFraction(n) {
          for (let r of xi) if (n(r)) return r
        }
        constructor(n, r, i, o) {
          ;(this.allowAbbreviation = n),
            (this.maxAbbreviationError = r),
            (this.fixedDigits = i),
            (this.itemSeparator = o)
        }
        formatFloat(n) {
          return this.allowAbbreviation
            ? this.abbreviateFloat(n, this.maxAbbreviationError, this.fixedDigits)
            : this.fixedDigits !== void 0
            ? n.toFixed(this.fixedDigits)
            : String(n)
        }
        abbreviateFloat(n, r = 0, i = void 0) {
          if (Math.abs(n) < r) return '0'
          if (n < 0) return `-${this.abbreviateFloat(-n, r, i)}`
          let o = qn.matchUnicodeFraction((U) => Math.abs(U.value - n) <= r)
          if (o !== void 0) return o.character
          let h = qn.matchUnicodeFraction((U) => Math.abs(Math.sqrt(U.value) - n) <= r)
          return h !== void 0
            ? `\u221A${h.character}`
            : n % 1 !== 0 && i !== void 0
            ? n.toFixed(i)
            : n.toString()
        }
      },
      'u'
    ),
    Lt = qn
  ;(Lt.CONSISTENT = new qn(!1, 0, 2, ', ')),
    (Lt.EXACT = new qn(!0, 0, void 0, ', ')),
    (Lt.MINIFIED = new qn(!0, 0, void 0, ',')),
    (Lt.SIMPLIFIED = new qn(!0, 5e-4, 3, ', '))
  var qt = t(
      class {
        static need(n, r, i) {
          if (n !== !0) {
            let o =
                i === void 0 ? '(not provided)' : `[${Array.prototype.slice.call(i).join(', ')}]`,
              h = `Precondition failed

Message: ${r === void 0 ? '(not provided)' : r}

Args: ${o}`
            throw new Error(h)
          }
        }
        static notNull(n) {
          qt.need(n != null, 'notNull')
        }
        static snappedCosSin(n) {
          let r = Math.PI / 4,
            i = Math.round(n / r)
          if (i * r === n) {
            let o = Math.sqrt(0.5)
            return [
              [1, 0],
              [o, o],
              [0, 1],
              [-o, o],
              [-1, 0],
              [-o, -o],
              [0, -1],
              [o, -o],
            ][i & 7]
          }
          return [Math.cos(n), Math.sin(n)]
        }
      },
      'm'
    ),
    J = t(
      class {
        static from(n) {
          if (n instanceof J) return n
          if (typeof n == 'number') return new J(n, 0)
          throw new gr('Unrecognized value type.', { v: n })
        }
        static polar(n, r) {
          let [i, o] = qt.snappedCosSin(r)
          return new J(n * i, n * o)
        }
        static realPartOf(n) {
          if (n instanceof J) return n.real
          if (typeof n == 'number') return n
          throw new gr('Unrecognized value type.', { v: n })
        }
        static imagPartOf(n) {
          if (n instanceof J) return n.imag
          if (typeof n == 'number') return 0
          throw new gr('Unrecognized value type.', { v: n })
        }
        constructor(n, r) {
          ;(this.real = n), (this.imag = r)
        }
        static rootsOfQuadratic(n, r, i) {
          if (((n = J.from(n)), (r = J.from(r)), (i = J.from(i)), n.isEqualTo(0))) {
            if (!r.isEqualTo(0)) return [i.times(-1).dividedBy(r)]
            if (!i.isEqualTo(0)) return []
            throw Error('Degenerate')
          }
          let o = r.times(r).minus(n.times(i).times(4)).sqrts(),
            h = r.times(-1),
            U = n.times(2)
          return o.map((D) => h.minus(D).dividedBy(U))
        }
        isEqualTo(n) {
          return n instanceof J
            ? this.real === n.real && this.imag === n.imag
            : typeof n == 'number'
            ? this.real === n && this.imag === 0
            : !1
        }
        isApproximatelyEqualTo(n, r) {
          if (n instanceof J || typeof n == 'number') {
            let i = this.minus(J.from(n))
            return Math.abs(i.real) <= r && Math.abs(i.imag) <= r && i.abs() <= r
          }
          return !1
        }
        norm2() {
          return this.real * this.real + this.imag * this.imag
        }
        abs() {
          return Math.sqrt(this.norm2())
        }
        unit() {
          let n = this.norm2()
          return n < 1e-5 ? J.polar(1, this.phase()) : this.dividedBy(Math.sqrt(n))
        }
        plus(n) {
          let r = J.from(n)
          return new J(this.real + r.real, this.imag + r.imag)
        }
        minus(n) {
          let r = J.from(n)
          return new J(this.real - r.real, this.imag - r.imag)
        }
        times(n) {
          let r = J.from(n)
          return new J(
            this.real * r.real - this.imag * r.imag,
            this.real * r.imag + this.imag * r.real
          )
        }
        dividedBy(n) {
          let r = J.from(n),
            i = r.norm2()
          if (i === 0) throw new Error('Division by Zero')
          let o = this.times(r.conjugate())
          return new J(o.real / i, o.imag / i)
        }
        sqrts() {
          let [n, r] = [this.real, this.imag],
            i = Math.sqrt(Math.sqrt(n * n + r * r))
          if (i === 0) return [J.ZERO]
          if (r === 0 && n < 0) return [new J(0, i), new J(0, -i)]
          let o = this.phase() / 2,
            h = J.polar(i, o)
          return [h, h.times(-1)]
        }
        conjugate() {
          return new J(this.real, -this.imag)
        }
        toString(n) {
          return (
            (n = n || Lt.EXACT),
            n.allowAbbreviation ? this.toStringAllowSingleValue(n) : this.toStringBothValues(n)
          )
        }
        neg() {
          return new J(-this.real, -this.imag)
        }
        raisedTo(n) {
          return n === 0.5 && this.imag === 0 && this.real >= 0
            ? new J(Math.sqrt(this.real), 0)
            : J.ZERO.isEqualTo(n)
            ? J.ONE
            : this.isEqualTo(J.ZERO)
            ? J.ZERO
            : this.ln().times(J.from(n)).exp()
        }
        exp() {
          return J.polar(Math.exp(this.real), this.imag)
        }
        cos() {
          let n = this.times(J.I)
          return n.exp().plus(n.neg().exp()).times(0.5)
        }
        sin() {
          let n = this.times(J.I)
          return n.exp().minus(n.neg().exp()).dividedBy(new J(0, 2))
        }
        tan() {
          return this.sin().dividedBy(this.cos())
        }
        ln() {
          return new J(Math.log(this.abs()), this.phase())
        }
        phase() {
          return Math.atan2(this.imag, this.real)
        }
        toStringAllowSingleValue(n) {
          return Math.abs(this.imag) <= n.maxAbbreviationError
            ? n.formatFloat(this.real)
            : Math.abs(this.real) <= n.maxAbbreviationError
            ? Math.abs(this.imag - 1) <= n.maxAbbreviationError
              ? 'i'
              : Math.abs(this.imag + 1) <= n.maxAbbreviationError
              ? '-i'
              : `${n.formatFloat(this.imag)}i`
            : this.toStringBothValues(n)
        }
        toStringBothValues(n) {
          let r = this.imag >= 0 ? '+' : '-',
            i =
              n.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= n.maxAbbreviationError
                ? ''
                : n.formatFloat(Math.abs(this.imag))
          return `${
            (n.allowAbbreviation || n.fixedDigits === void 0 || this.real < 0 ? '' : '+') +
            n.formatFloat(this.real) +
            r +
            i
          }i`
        }
      },
      'o'
    ),
    yr = J
  ;(yr.ZERO = new J(0, 0)), (yr.ONE = new J(1, 0)), (yr.I = new J(0, 1))
  self.addEventListener(
    'message',
    function (n) {
      let r = n.data.qubitCount,
        i = n.data.stepIndex,
        o = n.data.steps,
        h = n.data.targets,
        U = new _r('0'.repeat(r))
      qt.notNull(r),
        qt.notNull(i),
        qt.notNull(o),
        qt.notNull(h),
        o.forEach((D, S) => {
          U.runStep(D),
            self.postMessage({
              type: 'step',
              step: S,
              amplitudes: S === i ? U.amplitudes(h) : [],
              blochVectors: U.blochVectors,
              measuredBits: U.measuredBits,
              flags: U.flags,
            })
        }),
        self.postMessage({ type: 'finish' })
    },
    !1
  )
})()
/**
 * @license Fraction.js v4.1.2 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=serviceworker.js.map
