;(() => {
  var Gd = Object.create
  var $o = Object.defineProperty
  var $d = Object.getOwnPropertyDescriptor
  var Bd = Object.getOwnPropertyNames
  var Fd = Object.getPrototypeOf,
    Wd = Object.prototype.hasOwnProperty
  var Ud = (t) => $o(t, '__esModule', { value: !0 }),
    c = (t, e) => $o(t, 'name', { value: e, configurable: !0 })
  var bu = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports)
  var Hd = (t, e, r, o) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let u of Bd(e))
          !Wd.call(t, u) &&
            (r || u !== 'default') &&
            $o(t, u, { get: () => e[u], enumerable: !(o = $d(e, u)) || o.enumerable })
      return t
    },
    Bo = (t, e) =>
      Hd(
        Ud(
          $o(
            t != null ? Gd(Fd(t)) : {},
            'default',
            !e && t && t.__esModule
              ? { get: () => t.default, enumerable: !0 }
              : { value: t, enumerable: !0 }
          )
        ),
        t
      )
  var sc = bu((zs, ac) => {
    ;(function (t) {
      'use strict'
      var e = 2e3,
        r = { s: 1, n: 0, d: 1 }
      function o(O) {
        function C() {
          var M = Error.apply(this, arguments)
          ;(M.name = this.name = O), (this.stack = M.stack), (this.message = M.message)
        }
        c(C, 'errorConstructor')
        function A() {}
        return (
          c(A, 'IntermediateInheritor'), (A.prototype = Error.prototype), (C.prototype = new A()), C
        )
      }
      c(o, 'createError')
      var u = (N.DivisionByZero = o('DivisionByZero')),
        l = (N.InvalidParameter = o('InvalidParameter'))
      function h(O, C) {
        return isNaN((O = parseInt(O, 10))) && g(), O * C
      }
      c(h, 'assign')
      function g() {
        throw new l()
      }
      c(g, 'throwInvalidParam')
      function y(O) {
        for (var C = {}, A = O, M = 2, q = 4; q <= A; ) {
          for (; A % M === 0; ) (A /= M), (C[M] = (C[M] || 0) + 1)
          q += 1 + 2 * M++
        }
        return A !== O ? A > 1 && (C[A] = (C[A] || 0) + 1) : (C[O] = (C[O] || 0) + 1), C
      }
      c(y, 'factorize')
      var x = c(function (O, C) {
        var A = 0,
          M = 1,
          q = 1,
          E = 0,
          j = 0,
          D = 0,
          X = 1,
          Y = 1,
          B = 0,
          U = 1,
          rt = 1,
          it = 1,
          H = 1e7,
          ct
        if (O != null)
          if (C !== void 0) (A = O), (M = C), (q = A * M)
          else
            switch (typeof O) {
              case 'object': {
                'd' in O && 'n' in O
                  ? ((A = O.n), (M = O.d), 's' in O && (A *= O.s))
                  : 0 in O
                  ? ((A = O[0]), 1 in O && (M = O[1]))
                  : g(),
                  (q = A * M)
                break
              }
              case 'number': {
                if ((O < 0 && ((q = O), (O = -O)), O % 1 === 0)) A = O
                else if (O > 0) {
                  for (
                    O >= 1 &&
                    ((Y = Math.pow(10, Math.floor(1 + Math.log(O) / Math.LN10))), (O /= Y));
                    U <= H && it <= H;

                  )
                    if (((ct = (B + rt) / (U + it)), O === ct)) {
                      U + it <= H
                        ? ((A = B + rt), (M = U + it))
                        : it > U
                        ? ((A = rt), (M = it))
                        : ((A = B), (M = U))
                      break
                    } else
                      O > ct ? ((B += rt), (U += it)) : ((rt += B), (it += U)),
                        U > H ? ((A = rt), (M = it)) : ((A = B), (M = U))
                  A *= Y
                } else (isNaN(O) || isNaN(C)) && (M = A = NaN)
                break
              }
              case 'string':
                if (
                  ((U = O.match(/\d+|./g)),
                  U === null && g(),
                  U[B] === '-' ? ((q = -1), B++) : U[B] === '+' && B++,
                  U.length === B + 1
                    ? (j = h(U[B++], q))
                    : U[B + 1] === '.' || U[B] === '.'
                    ? (U[B] !== '.' && (E = h(U[B++], q)),
                      B++,
                      (B + 1 === U.length ||
                        (U[B + 1] === '(' && U[B + 3] === ')') ||
                        (U[B + 1] === "'" && U[B + 3] === "'")) &&
                        ((j = h(U[B], q)), (X = Math.pow(10, U[B].length)), B++),
                      ((U[B] === '(' && U[B + 2] === ')') || (U[B] === "'" && U[B + 2] === "'")) &&
                        ((D = h(U[B + 1], q)), (Y = Math.pow(10, U[B + 1].length) - 1), (B += 3)))
                    : U[B + 1] === '/' || U[B + 1] === ':'
                    ? ((j = h(U[B], q)), (X = h(U[B + 2], 1)), (B += 3))
                    : U[B + 3] === '/' &&
                      U[B + 1] === ' ' &&
                      ((E = h(U[B], q)), (j = h(U[B + 2], q)), (X = h(U[B + 4], 1)), (B += 5)),
                  U.length <= B)
                ) {
                  ;(M = X * Y), (q = A = D + M * E + Y * j)
                  break
                }
              default:
                g()
            }
        if (M === 0) throw new u()
        ;(r.s = q < 0 ? -1 : 1), (r.n = Math.abs(A)), (r.d = Math.abs(M))
      }, 'parse')
      function w(O, C, A) {
        for (var M = 1; C > 0; O = (O * O) % A, C >>= 1) C & 1 && (M = (M * O) % A)
        return M
      }
      c(w, 'modpow')
      function _(O, C) {
        for (; C % 2 === 0; C /= 2);
        for (; C % 5 === 0; C /= 5);
        if (C === 1) return 0
        for (var A = 10 % C, M = 1; A !== 1; M++) if (((A = (A * 10) % C), M > e)) return 0
        return M
      }
      c(_, 'cycleLen')
      function P(O, C, A) {
        for (var M = 1, q = w(10, A, C), E = 0; E < 300; E++) {
          if (M === q) return E
          ;(M = (M * 10) % C), (q = (q * 10) % C)
        }
        return 0
      }
      c(P, 'cycleStart')
      function k(O, C) {
        if (!O) return C
        if (!C) return O
        for (;;) {
          if (((O %= C), !O)) return C
          if (((C %= O), !C)) return O
        }
      }
      c(k, 'gcd')
      function N(O, C) {
        if (!(this instanceof N)) return new N(O, C)
        x(O, C), (O = k(r.d, r.n)), (this.s = r.s), (this.n = r.n / O), (this.d = r.d / O)
      }
      c(N, 'Fraction'),
        (N.prototype = {
          s: 1,
          n: 0,
          d: 1,
          abs: function () {
            return new N(this.n, this.d)
          },
          neg: function () {
            return new N(-this.s * this.n, this.d)
          },
          add: function (O, C) {
            return x(O, C), new N(this.s * this.n * r.d + r.s * this.d * r.n, this.d * r.d)
          },
          sub: function (O, C) {
            return x(O, C), new N(this.s * this.n * r.d - r.s * this.d * r.n, this.d * r.d)
          },
          mul: function (O, C) {
            return x(O, C), new N(this.s * r.s * this.n * r.n, this.d * r.d)
          },
          div: function (O, C) {
            return x(O, C), new N(this.s * r.s * this.n * r.d, this.d * r.n)
          },
          clone: function () {
            return new N(this)
          },
          mod: function (O, C) {
            return isNaN(this.n) || isNaN(this.d)
              ? new N(NaN)
              : O === void 0
              ? new N((this.s * this.n) % this.d, 1)
              : (x(O, C),
                r.n === 0 && this.d === 0 && N(0, 0),
                new N((this.s * (r.d * this.n)) % (r.n * this.d), r.d * this.d))
          },
          gcd: function (O, C) {
            return x(O, C), new N(k(r.n, this.n) * k(r.d, this.d), r.d * this.d)
          },
          lcm: function (O, C) {
            return (
              x(O, C),
              r.n === 0 && this.n === 0
                ? new N()
                : new N(r.n * this.n, k(r.n, this.n) * k(r.d, this.d))
            )
          },
          ceil: function (O) {
            return (
              (O = Math.pow(10, O || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new N(NaN)
                : new N(Math.ceil((O * this.s * this.n) / this.d), O)
            )
          },
          floor: function (O) {
            return (
              (O = Math.pow(10, O || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new N(NaN)
                : new N(Math.floor((O * this.s * this.n) / this.d), O)
            )
          },
          round: function (O) {
            return (
              (O = Math.pow(10, O || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new N(NaN)
                : new N(Math.round((O * this.s * this.n) / this.d), O)
            )
          },
          inverse: function () {
            return new N(this.s * this.d, this.n)
          },
          pow: function (O, C) {
            if ((x(O, C), r.d === 1))
              return r.s < 0
                ? new N(Math.pow(this.s * this.d, r.n), Math.pow(this.n, r.n))
                : new N(Math.pow(this.s * this.n, r.n), Math.pow(this.d, r.n))
            if (this.s < 0) return null
            var A = y(this.n),
              M = y(this.d),
              q = 1,
              E = 1
            for (var j in A)
              if (j !== '1') {
                if (j === '0') {
                  q = 0
                  break
                }
                if (((A[j] *= r.n), A[j] % r.d === 0)) A[j] /= r.d
                else return null
                q *= Math.pow(j, A[j])
              }
            for (var j in M)
              if (j !== '1') {
                if (((M[j] *= r.n), M[j] % r.d === 0)) M[j] /= r.d
                else return null
                E *= Math.pow(j, M[j])
              }
            return r.s < 0 ? new N(E, q) : new N(q, E)
          },
          equals: function (O, C) {
            return x(O, C), this.s * this.n * r.d === r.s * r.n * this.d
          },
          compare: function (O, C) {
            x(O, C)
            var A = this.s * this.n * r.d - r.s * r.n * this.d
            return (0 < A) - (A < 0)
          },
          simplify: function (O) {
            if (isNaN(this.n) || isNaN(this.d)) return this
            var C = this.abs().toContinued()
            O = O || 0.001
            function A(E) {
              return E.length === 1 ? new N(E[0]) : A(E.slice(1)).inverse().add(E[0])
            }
            c(A, 'rec')
            for (var M = 0; M < C.length; M++) {
              var q = A(C.slice(0, M + 1))
              if (q.sub(this.abs()).abs().valueOf() < O) return q.mul(this.s)
            }
            return this
          },
          divisible: function (O, C) {
            return x(O, C), !(!(r.n * this.d) || (this.n * r.d) % (r.n * this.d))
          },
          valueOf: function () {
            return (this.s * this.n) / this.d
          },
          toFraction: function (O) {
            var C,
              A = '',
              M = this.n,
              q = this.d
            return (
              this.s < 0 && (A += '-'),
              q === 1
                ? (A += M)
                : (O && (C = Math.floor(M / q)) > 0 && ((A += C), (A += ' '), (M %= q)),
                  (A += M),
                  (A += '/'),
                  (A += q)),
              A
            )
          },
          toLatex: function (O) {
            var C,
              A = '',
              M = this.n,
              q = this.d
            return (
              this.s < 0 && (A += '-'),
              q === 1
                ? (A += M)
                : (O && (C = Math.floor(M / q)) > 0 && ((A += C), (M %= q)),
                  (A += '\\frac{'),
                  (A += M),
                  (A += '}{'),
                  (A += q),
                  (A += '}')),
              A
            )
          },
          toContinued: function () {
            var O,
              C = this.n,
              A = this.d,
              M = []
            if (isNaN(C) || isNaN(A)) return M
            do M.push(Math.floor(C / A)), (O = C % A), (C = A), (A = O)
            while (C !== 1)
            return M
          },
          toString: function (O) {
            var C,
              A = this.n,
              M = this.d
            if (isNaN(A) || isNaN(M)) return 'NaN'
            O = O || 15
            var q = _(A, M),
              E = P(A, M, q),
              j = this.s === -1 ? '-' : ''
            if (((j += (A / M) | 0), (A %= M), (A *= 10), A && (j += '.'), q)) {
              for (var D = E; D--; ) (j += (A / M) | 0), (A %= M), (A *= 10)
              j += '('
              for (var D = q; D--; ) (j += (A / M) | 0), (A %= M), (A *= 10)
              j += ')'
            } else for (var D = O; A && D--; ) (j += (A / M) | 0), (A %= M), (A *= 10)
            return j
          },
        }),
        typeof define == 'function' && define.amd
          ? define([], function () {
              return N
            })
          : typeof zs == 'object'
          ? (Object.defineProperty(N, '__esModule', { value: !0 }),
            (N.default = N),
            (N.Fraction = N),
            (ac.exports = N))
          : (t.Fraction = N)
    })(zs)
  })
  var ga = bu((vc, $s) => {
    ;(function (t) {
      typeof vc == 'object' && typeof $s != 'undefined'
        ? ($s.exports = t())
        : typeof define == 'function' && define.amd
        ? define([], t)
        : ((typeof window != 'undefined'
            ? window
            : typeof global != 'undefined'
            ? global
            : typeof self != 'undefined'
            ? self
            : this
          ).interact = t())
    })(function () {
      var t = {}
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = function (n) {
          return !(!n || !n.Window) && n instanceof n.Window
        })
      var e = {}
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.init = u),
        (e.getWindow = function (n) {
          return (0, t.default)(n) ? n : (n.ownerDocument || n).defaultView || o.window
        }),
        (e.window = e.realWindow = void 0)
      var r = void 0
      e.realWindow = r
      var o = void 0
      function u(n) {
        e.realWindow = r = n
        var i = n.document.createTextNode('')
        i.ownerDocument !== n.document &&
          typeof n.wrap == 'function' &&
          n.wrap(i) === i &&
          (n = n.wrap(n)),
          (e.window = o = n)
      }
      c(u, 'o'), (e.window = o), typeof window != 'undefined' && window && u(window)
      var l = {}
      function h(n) {
        return (h =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(h, 'a'), Object.defineProperty(l, '__esModule', { value: !0 }), (l.default = void 0)
      var g = c(function (n) {
          return !!n && h(n) === 'object'
        }, 's'),
        y = c(function (n) {
          return typeof n == 'function'
        }, 'l'),
        x = {
          window: function (n) {
            return n === e.window || (0, t.default)(n)
          },
          docFrag: function (n) {
            return g(n) && n.nodeType === 11
          },
          object: g,
          func: y,
          number: function (n) {
            return typeof n == 'number'
          },
          bool: function (n) {
            return typeof n == 'boolean'
          },
          string: function (n) {
            return typeof n == 'string'
          },
          element: function (n) {
            if (!n || h(n) !== 'object') return !1
            var i = e.getWindow(n) || e.window
            return /object|function/.test(h(i.Element))
              ? n instanceof i.Element
              : n.nodeType === 1 && typeof n.nodeName == 'string'
          },
          plainObject: function (n) {
            return g(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString())
          },
          array: function (n) {
            return g(n) && n.length !== void 0 && y(n.splice)
          },
        }
      l.default = x
      var w = {}
      function _(n) {
        var i = n.interaction
        if (i.prepared.name === 'drag') {
          var a = i.prepared.axis
          a === 'x'
            ? ((i.coords.cur.page.y = i.coords.start.page.y),
              (i.coords.cur.client.y = i.coords.start.client.y),
              (i.coords.velocity.client.y = 0),
              (i.coords.velocity.page.y = 0))
            : a === 'y' &&
              ((i.coords.cur.page.x = i.coords.start.page.x),
              (i.coords.cur.client.x = i.coords.start.client.x),
              (i.coords.velocity.client.x = 0),
              (i.coords.velocity.page.x = 0))
        }
      }
      c(_, 'f')
      function P(n) {
        var i = n.iEvent,
          a = n.interaction
        if (a.prepared.name === 'drag') {
          var s = a.prepared.axis
          if (s === 'x' || s === 'y') {
            var p = s === 'x' ? 'y' : 'x'
            ;(i.page[p] = a.coords.start.page[p]),
              (i.client[p] = a.coords.start.client[p]),
              (i.delta[p] = 0)
          }
        }
      }
      c(P, 'd'), Object.defineProperty(w, '__esModule', { value: !0 }), (w.default = void 0)
      var k = {
          id: 'actions/drag',
          install: function (n) {
            var i = n.actions,
              a = n.Interactable,
              s = n.defaults
            ;(a.prototype.draggable = k.draggable),
              (i.map.drag = k),
              (i.methodDict.drag = 'draggable'),
              (s.actions.drag = k.defaults)
          },
          listeners: {
            'interactions:before-action-move': _,
            'interactions:action-resume': _,
            'interactions:action-move': P,
            'auto-start:check': function (n) {
              var i = n.interaction,
                a = n.interactable,
                s = n.buttons,
                p = a.options.drag
              if (
                p &&
                p.enabled &&
                (!i.pointerIsDown ||
                  !/mouse|pointer/.test(i.pointerType) ||
                  (s & a.options.drag.mouseButtons) != 0)
              )
                return (
                  (n.action = {
                    name: 'drag',
                    axis: p.lockAxis === 'start' ? p.startAxis : p.lockAxis,
                  }),
                  !1
                )
            },
          },
          draggable: function (n) {
            return l.default.object(n)
              ? ((this.options.drag.enabled = n.enabled !== !1),
                this.setPerAction('drag', n),
                this.setOnEvents('drag', n),
                /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis),
                /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis),
                this)
              : l.default.bool(n)
              ? ((this.options.drag.enabled = n), this)
              : this.options.drag
          },
          beforeMove: _,
          move: P,
          defaults: { startAxis: 'xy', lockAxis: 'xy' },
          getCursor: function () {
            return 'move'
          },
        },
        N = k
      w.default = N
      var O = {}
      Object.defineProperty(O, '__esModule', { value: !0 }), (O.default = void 0)
      var C = {
        init: function (n) {
          var i = n
          ;(C.document = i.document),
            (C.DocumentFragment = i.DocumentFragment || A),
            (C.SVGElement = i.SVGElement || A),
            (C.SVGSVGElement = i.SVGSVGElement || A),
            (C.SVGElementInstance = i.SVGElementInstance || A),
            (C.Element = i.Element || A),
            (C.HTMLElement = i.HTMLElement || C.Element),
            (C.Event = i.Event),
            (C.Touch = i.Touch || A),
            (C.PointerEvent = i.PointerEvent || i.MSPointerEvent)
        },
        document: null,
        DocumentFragment: null,
        SVGElement: null,
        SVGSVGElement: null,
        SVGElementInstance: null,
        Element: null,
        HTMLElement: null,
        Event: null,
        Touch: null,
        PointerEvent: null,
      }
      function A() {}
      c(A, 'y')
      var M = C
      O.default = M
      var q = {}
      Object.defineProperty(q, '__esModule', { value: !0 }), (q.default = void 0)
      var E = {
          init: function (n) {
            var i = O.default.Element,
              a = n.navigator || {}
            ;(E.supportsTouch =
              'ontouchstart' in n ||
              (l.default.func(n.DocumentTouch) && O.default.document instanceof n.DocumentTouch)),
              (E.supportsPointerEvent = a.pointerEnabled !== !1 && !!O.default.PointerEvent),
              (E.isIOS = /iP(hone|od|ad)/.test(a.platform)),
              (E.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion)),
              (E.isIe9 = /MSIE 9/.test(a.userAgent)),
              (E.isOperaMobile =
                a.appName === 'Opera' && E.supportsTouch && /Presto/.test(a.userAgent)),
              (E.prefixedMatchesSelector =
                'matches' in i.prototype
                  ? 'matches'
                  : 'webkitMatchesSelector' in i.prototype
                  ? 'webkitMatchesSelector'
                  : 'mozMatchesSelector' in i.prototype
                  ? 'mozMatchesSelector'
                  : 'oMatchesSelector' in i.prototype
                  ? 'oMatchesSelector'
                  : 'msMatchesSelector'),
              (E.pEventTypes = E.supportsPointerEvent
                ? O.default.PointerEvent === n.MSPointerEvent
                  ? {
                      up: 'MSPointerUp',
                      down: 'MSPointerDown',
                      over: 'mouseover',
                      out: 'mouseout',
                      move: 'MSPointerMove',
                      cancel: 'MSPointerCancel',
                    }
                  : {
                      up: 'pointerup',
                      down: 'pointerdown',
                      over: 'pointerover',
                      out: 'pointerout',
                      move: 'pointermove',
                      cancel: 'pointercancel',
                    }
                : null),
              (E.wheelEvent =
                O.default.document && 'onmousewheel' in O.default.document ? 'mousewheel' : 'wheel')
          },
          supportsTouch: null,
          supportsPointerEvent: null,
          isIOS7: null,
          isIOS: null,
          isIe9: null,
          isOperaMobile: null,
          prefixedMatchesSelector: null,
          pEventTypes: null,
          wheelEvent: null,
        },
        j = E
      q.default = j
      var D = {}
      function X(n) {
        var i = n.parentNode
        if (l.default.docFrag(i)) {
          for (; (i = i.host) && l.default.docFrag(i); );
          return i
        }
        return i
      }
      c(X, 'P')
      function Y(n, i) {
        return (
          e.window !== e.realWindow && (i = i.replace(/\/deep\//g, ' ')),
          n[q.default.prefixedMatchesSelector](i)
        )
      }
      c(Y, 'O'),
        Object.defineProperty(D, '__esModule', { value: !0 }),
        (D.nodeContains = function (n, i) {
          if (n.contains) return n.contains(i)
          for (; i; ) {
            if (i === n) return !0
            i = i.parentNode
          }
          return !1
        }),
        (D.closest = function (n, i) {
          for (; l.default.element(n); ) {
            if (Y(n, i)) return n
            n = X(n)
          }
          return null
        }),
        (D.parentNode = X),
        (D.matchesSelector = Y),
        (D.indexOfDeepestElement = function (n) {
          for (var i, a = [], s = 0; s < n.length; s++) {
            var p = n[s],
              d = n[i]
            if (p && s !== i)
              if (d) {
                var v = B(p),
                  f = B(d)
                if (v !== p.ownerDocument)
                  if (f !== p.ownerDocument)
                    if (v !== f) {
                      a = a.length ? a : U(d)
                      var m = void 0
                      if (
                        d instanceof O.default.HTMLElement &&
                        p instanceof O.default.SVGElement &&
                        !(p instanceof O.default.SVGSVGElement)
                      ) {
                        if (p === f) continue
                        m = p.ownerSVGElement
                      } else m = p
                      for (var b = U(m, d.ownerDocument), S = 0; b[S] && b[S] === a[S]; ) S++
                      var T = [b[S - 1], b[S], a[S]]
                      if (T[0])
                        for (var R = T[0].lastChild; R; ) {
                          if (R === T[1]) {
                            ;(i = s), (a = b)
                            break
                          }
                          if (R === T[2]) break
                          R = R.previousSibling
                        }
                    } else
                      (z = p),
                        (I = d),
                        (parseInt(e.getWindow(z).getComputedStyle(z).zIndex, 10) || 0) >=
                          (parseInt(e.getWindow(I).getComputedStyle(I).zIndex, 10) || 0) && (i = s)
                  else i = s
              } else i = s
          }
          var z, I
          return i
        }),
        (D.matchesUpTo = function (n, i, a) {
          for (; l.default.element(n); ) {
            if (Y(n, i)) return !0
            if ((n = X(n)) === a) return Y(n, i)
          }
          return !1
        }),
        (D.getActualElement = function (n) {
          return n.correspondingUseElement || n
        }),
        (D.getScrollXY = rt),
        (D.getElementClientRect = it),
        (D.getElementRect = function (n) {
          var i = it(n)
          if (!q.default.isIOS7 && i) {
            var a = rt(e.getWindow(n))
            ;(i.left += a.x), (i.right += a.x), (i.top += a.y), (i.bottom += a.y)
          }
          return i
        }),
        (D.getPath = function (n) {
          for (var i = []; n; ) i.push(n), (n = X(n))
          return i
        }),
        (D.trySelector = function (n) {
          return !!l.default.string(n) && (O.default.document.querySelector(n), !0)
        })
      var B = c(function (n) {
        return n.parentNode || n.host
      }, 'S')
      function U(n, i) {
        for (var a, s = [], p = n; (a = B(p)) && p !== i && a !== p.ownerDocument; )
          s.unshift(p), (p = a)
        return s
      }
      c(U, 'E')
      function rt(n) {
        return {
          x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft,
          y: n.scrollY || n.document.documentElement.scrollTop,
        }
      }
      c(rt, 'T')
      function it(n) {
        var i =
          n instanceof O.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0]
        return (
          i && {
            left: i.left,
            right: i.right,
            top: i.top,
            bottom: i.bottom,
            width: i.width || i.right - i.left,
            height: i.height || i.bottom - i.top,
          }
        )
      }
      c(it, 'M')
      var H = {}
      Object.defineProperty(H, '__esModule', { value: !0 }),
        (H.default = function (n, i) {
          for (var a in i) n[a] = i[a]
          return n
        })
      var ct = {}
      function Ct(n, i) {
        ;(i == null || i > n.length) && (i = n.length)
        for (var a = 0, s = Array(i); a < i; a++) s[a] = n[a]
        return s
      }
      c(Ct, 'I')
      function jt(n, i, a) {
        return n === 'parent'
          ? (0, D.parentNode)(a)
          : n === 'self'
          ? i.getRect(a)
          : (0, D.closest)(a, n)
      }
      c(jt, 'D'),
        Object.defineProperty(ct, '__esModule', { value: !0 }),
        (ct.getStringOptionResult = jt),
        (ct.resolveRectLike = function (n, i, a, s) {
          var p,
            d = n
          return (
            l.default.string(d)
              ? (d = jt(d, i, a))
              : l.default.func(d) &&
                (d = d.apply(
                  void 0,
                  (function (v) {
                    if (Array.isArray(v)) return Ct(v)
                  })((p = s)) ||
                    (function (v) {
                      if (typeof Symbol != 'undefined' && Symbol.iterator in Object(v))
                        return Array.from(v)
                    })(p) ||
                    (function (v, f) {
                      if (v) {
                        if (typeof v == 'string') return Ct(v, f)
                        var m = Object.prototype.toString.call(v).slice(8, -1)
                        return (
                          m === 'Object' && v.constructor && (m = v.constructor.name),
                          m === 'Map' || m === 'Set'
                            ? Array.from(v)
                            : m === 'Arguments' ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m)
                            ? Ct(v, f)
                            : void 0
                        )
                      }
                    })(p) ||
                    (function () {
                      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                    })()
                )),
            l.default.element(d) && (d = (0, D.getElementRect)(d)),
            d
          )
        }),
        (ct.rectToXY = function (n) {
          return n && { x: 'x' in n ? n.x : n.left, y: 'y' in n ? n.y : n.top }
        }),
        (ct.xywhToTlbr = function (n) {
          return (
            !n ||
              ('left' in n && 'top' in n) ||
              (((n = (0, H.default)({}, n)).left = n.x || 0),
              (n.top = n.y || 0),
              (n.right = n.right || n.left + n.width),
              (n.bottom = n.bottom || n.top + n.height)),
            n
          )
        }),
        (ct.tlbrToXywh = function (n) {
          return (
            !n ||
              ('x' in n && 'y' in n) ||
              (((n = (0, H.default)({}, n)).x = n.left || 0),
              (n.y = n.top || 0),
              (n.width = n.width || (n.right || 0) - n.x),
              (n.height = n.height || (n.bottom || 0) - n.y)),
            n
          )
        }),
        (ct.addEdges = function (n, i, a) {
          n.left && (i.left += a.x),
            n.right && (i.right += a.x),
            n.top && (i.top += a.y),
            n.bottom && (i.bottom += a.y),
            (i.width = i.right - i.left),
            (i.height = i.bottom - i.top)
        })
      var Dt = {}
      Object.defineProperty(Dt, '__esModule', { value: !0 }),
        (Dt.default = function (n, i, a) {
          var s = n.options[a],
            p = (s && s.origin) || n.options.origin,
            d = (0, ct.resolveRectLike)(p, n, i, [n && i])
          return (0, ct.rectToXY)(d) || { x: 0, y: 0 }
        })
      var ht = {}
      function Ft(n) {
        return n.trim().split(/ +/)
      }
      c(Ft, 'z'),
        Object.defineProperty(ht, '__esModule', { value: !0 }),
        (ht.default = c(function n(i, a, s) {
          if (
            ((s = s || {}),
            l.default.string(i) && i.search(' ') !== -1 && (i = Ft(i)),
            l.default.array(i))
          )
            return i.reduce(function (m, b) {
              return (0, H.default)(m, n(b, a, s))
            }, s)
          if ((l.default.object(i) && ((a = i), (i = '')), l.default.func(a)))
            (s[i] = s[i] || []), s[i].push(a)
          else if (l.default.array(a))
            for (var p = 0; p < a.length; p++) {
              var d
              ;(d = a[p]), n(i, d, s)
            }
          else if (l.default.object(a))
            for (var v in a) {
              var f = Ft(v).map(function (m) {
                return ''.concat(i).concat(m)
              })
              n(f, a[v], s)
            }
          return s
        }, 't'))
      var Ut = {}
      Object.defineProperty(Ut, '__esModule', { value: !0 }),
        (Ut.default = void 0),
        (Ut.default = function (n, i) {
          return Math.sqrt(n * n + i * i)
        })
      var Pe = {}
      function we(n, i) {
        for (var a in i) {
          var s = we.prefixedPropREs,
            p = !1
          for (var d in s)
            if (a.indexOf(d) === 0 && s[d].test(a)) {
              p = !0
              break
            }
          p || typeof i[a] == 'function' || (n[a] = i[a])
        }
        return n
      }
      c(we, 'X'),
        Object.defineProperty(Pe, '__esModule', { value: !0 }),
        (Pe.default = void 0),
        (we.prefixedPropREs = {
          webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
          moz: /(Pressure)$/,
        })
      var cr = we
      Pe.default = cr
      var K = {}
      function pe(n) {
        return n instanceof O.default.Event || n instanceof O.default.Touch
      }
      c(pe, 'W')
      function de(n, i, a) {
        return (n = n || 'page'), ((a = a || {}).x = i[n + 'X']), (a.y = i[n + 'Y']), a
      }
      c(de, 'L')
      function pr(n, i) {
        return (
          (i = i || { x: 0, y: 0 }),
          q.default.isOperaMobile && pe(n)
            ? (de('screen', n, i), (i.x += window.scrollX), (i.y += window.scrollY))
            : de('page', n, i),
          i
        )
      }
      c(pr, 'U')
      function qe(n, i) {
        return (
          (i = i || {}),
          q.default.isOperaMobile && pe(n) ? de('screen', n, i) : de('client', n, i),
          i
        )
      }
      c(qe, 'V')
      function Ue(n) {
        var i = []
        return (
          l.default.array(n)
            ? ((i[0] = n[0]), (i[1] = n[1]))
            : n.type === 'touchend'
            ? n.touches.length === 1
              ? ((i[0] = n.touches[0]), (i[1] = n.changedTouches[0]))
              : n.touches.length === 0 &&
                ((i[0] = n.changedTouches[0]), (i[1] = n.changedTouches[1]))
            : ((i[0] = n.touches[0]), (i[1] = n.touches[1])),
          i
        )
      }
      c(Ue, 'N')
      function He(n) {
        for (
          var i = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0;
          a < n.length;
          a++
        ) {
          var s = n[a]
          for (var p in i) i[p] += s[p]
        }
        for (var d in i) i[d] /= n.length
        return i
      }
      c(He, 'q'),
        Object.defineProperty(K, '__esModule', { value: !0 }),
        (K.copyCoords = function (n, i) {
          ;(n.page = n.page || {}),
            (n.page.x = i.page.x),
            (n.page.y = i.page.y),
            (n.client = n.client || {}),
            (n.client.x = i.client.x),
            (n.client.y = i.client.y),
            (n.timeStamp = i.timeStamp)
        }),
        (K.setCoordDeltas = function (n, i, a) {
          ;(n.page.x = a.page.x - i.page.x),
            (n.page.y = a.page.y - i.page.y),
            (n.client.x = a.client.x - i.client.x),
            (n.client.y = a.client.y - i.client.y),
            (n.timeStamp = a.timeStamp - i.timeStamp)
        }),
        (K.setCoordVelocity = function (n, i) {
          var a = Math.max(i.timeStamp / 1e3, 0.001)
          ;(n.page.x = i.page.x / a),
            (n.page.y = i.page.y / a),
            (n.client.x = i.client.x / a),
            (n.client.y = i.client.y / a),
            (n.timeStamp = a)
        }),
        (K.setZeroCoords = function (n) {
          ;(n.page.x = 0), (n.page.y = 0), (n.client.x = 0), (n.client.y = 0)
        }),
        (K.isNativePointer = pe),
        (K.getXY = de),
        (K.getPageXY = pr),
        (K.getClientXY = qe),
        (K.getPointerId = function (n) {
          return l.default.number(n.pointerId) ? n.pointerId : n.identifier
        }),
        (K.setCoords = function (n, i, a) {
          var s = i.length > 1 ? He(i) : i[0]
          pr(s, n.page), qe(s, n.client), (n.timeStamp = a)
        }),
        (K.getTouchPair = Ue),
        (K.pointerAverage = He),
        (K.touchBBox = function (n) {
          if (!n.length) return null
          var i = Ue(n),
            a = Math.min(i[0].pageX, i[1].pageX),
            s = Math.min(i[0].pageY, i[1].pageY),
            p = Math.max(i[0].pageX, i[1].pageX),
            d = Math.max(i[0].pageY, i[1].pageY)
          return { x: a, y: s, left: a, top: s, right: p, bottom: d, width: p - a, height: d - s }
        }),
        (K.touchDistance = function (n, i) {
          var a = i + 'X',
            s = i + 'Y',
            p = Ue(n),
            d = p[0][a] - p[1][a],
            v = p[0][s] - p[1][s]
          return (0, Ut.default)(d, v)
        }),
        (K.touchAngle = function (n, i) {
          var a = i + 'X',
            s = i + 'Y',
            p = Ue(n),
            d = p[1][a] - p[0][a],
            v = p[1][s] - p[0][s]
          return (180 * Math.atan2(v, d)) / Math.PI
        }),
        (K.getPointerType = function (n) {
          return l.default.string(n.pointerType)
            ? n.pointerType
            : l.default.number(n.pointerType)
            ? [void 0, void 0, 'touch', 'pen', 'mouse'][n.pointerType]
            : /touch/.test(n.type || '') || n instanceof O.default.Touch
            ? 'touch'
            : 'mouse'
        }),
        (K.getEventTargets = function (n) {
          var i = l.default.func(n.composedPath) ? n.composedPath() : n.path
          return [D.getActualElement(i ? i[0] : n.target), D.getActualElement(n.currentTarget)]
        }),
        (K.newCoords = function () {
          return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }
        }),
        (K.coordsToEvent = function (n) {
          return {
            coords: n,
            get page() {
              return this.coords.page
            },
            get client() {
              return this.coords.client
            },
            get timeStamp() {
              return this.coords.timeStamp
            },
            get pageX() {
              return this.coords.page.x
            },
            get pageY() {
              return this.coords.page.y
            },
            get clientX() {
              return this.coords.client.x
            },
            get clientY() {
              return this.coords.client.y
            },
            get pointerId() {
              return this.coords.pointerId
            },
            get target() {
              return this.coords.target
            },
            get type() {
              return this.coords.type
            },
            get pointerType() {
              return this.coords.pointerType
            },
            get buttons() {
              return this.coords.buttons
            },
            preventDefault: function () {},
          }
        }),
        Object.defineProperty(K, 'pointerExtend', {
          enumerable: !0,
          get: function () {
            return Pe.default
          },
        })
      var Ae = {}
      function kn(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(kn, 'G')
      function xe(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(xe, 'H'), Object.defineProperty(Ae, '__esModule', { value: !0 }), (Ae.BaseEvent = void 0)
      var en = (function () {
        function n(s) {
          ;(function (p, d) {
            if (!(p instanceof d)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            xe(this, 'type', void 0),
            xe(this, 'target', void 0),
            xe(this, 'currentTarget', void 0),
            xe(this, 'interactable', void 0),
            xe(this, '_interaction', void 0),
            xe(this, 'timeStamp', void 0),
            xe(this, 'immediatePropagationStopped', !1),
            xe(this, 'propagationStopped', !1),
            (this._interaction = s)
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            { key: 'preventDefault', value: function () {} },
            {
              key: 'stopPropagation',
              value: function () {
                this.propagationStopped = !0
              },
            },
            {
              key: 'stopImmediatePropagation',
              value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
              },
            },
          ]) && kn(i.prototype, a),
          n
        )
      })()
      ;(Ae.BaseEvent = en),
        Object.defineProperty(en.prototype, 'interaction', {
          get: function () {
            return this._interaction._proxy
          },
          set: function () {},
        })
      var xt = {}
      Object.defineProperty(xt, '__esModule', { value: !0 }),
        (xt.find = xt.findIndex = xt.from = xt.merge = xt.remove = xt.contains = void 0),
        (xt.contains = function (n, i) {
          return n.indexOf(i) !== -1
        }),
        (xt.remove = function (n, i) {
          return n.splice(n.indexOf(i), 1)
        })
      var Lr = c(function (n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          n.push(s)
        }
        return n
      }, 'J')
      ;(xt.merge = Lr),
        (xt.from = function (n) {
          return Lr([], n)
        })
      var jr = c(function (n, i) {
        for (var a = 0; a < n.length; a++) if (i(n[a], a, n)) return a
        return -1
      }, 'Q')
      ;(xt.findIndex = jr),
        (xt.find = function (n, i) {
          return n[jr(n, i)]
        })
      var Ee = {}
      function rn(n) {
        return (rn =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(rn, 'et')
      function Ve(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Ve, 'nt')
      function Ye(n, i) {
        return (Ye =
          Object.setPrototypeOf ||
          function (a, s) {
            return (a.__proto__ = s), a
          })(n, i)
      }
      c(Ye, 'rt')
      function nn(n, i) {
        return !i || (rn(i) !== 'object' && typeof i != 'function') ? te(n) : i
      }
      c(nn, 'ot')
      function te(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return n
      }
      c(te, 'it')
      function dr(n) {
        return (dr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (i) {
              return i.__proto__ || Object.getPrototypeOf(i)
            })(n)
      }
      c(dr, 'at')
      function Me(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(Me, 'st'), Object.defineProperty(Ee, '__esModule', { value: !0 }), (Ee.DropEvent = void 0)
      var Nn = (function (n) {
        ;(function (f, m) {
          if (typeof m != 'function' && m !== null)
            throw new TypeError('Super expression must either be null or a function')
          ;(f.prototype = Object.create(m && m.prototype, {
            constructor: { value: f, writable: !0, configurable: !0 },
          })),
            m && Ye(f, m)
        })(v, n)
        var i,
          a,
          s,
          p,
          d =
            ((s = v),
            (p = (function () {
              if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
                return !1
              if (typeof Proxy == 'function') return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                )
              } catch {
                return !1
              }
            })()),
            function () {
              var f,
                m = dr(s)
              if (p) {
                var b = dr(this).constructor
                f = Reflect.construct(m, arguments, b)
              } else f = m.apply(this, arguments)
              return nn(this, f)
            })
        function v(f, m, b) {
          var S
          ;(function (I, F) {
            if (!(I instanceof F)) throw new TypeError('Cannot call a class as a function')
          })(this, v),
            Me(te((S = d.call(this, m._interaction))), 'target', void 0),
            Me(te(S), 'dropzone', void 0),
            Me(te(S), 'dragEvent', void 0),
            Me(te(S), 'relatedTarget', void 0),
            Me(te(S), 'draggable', void 0),
            Me(te(S), 'timeStamp', void 0),
            Me(te(S), 'propagationStopped', !1),
            Me(te(S), 'immediatePropagationStopped', !1)
          var T = b === 'dragleave' ? f.prev : f.cur,
            R = T.element,
            z = T.dropzone
          return (
            (S.type = b),
            (S.target = R),
            (S.currentTarget = R),
            (S.dropzone = z),
            (S.dragEvent = m),
            (S.relatedTarget = m.target),
            (S.draggable = m.interactable),
            (S.timeStamp = m.timeStamp),
            S
          )
        }
        return (
          c(v, 'a'),
          (i = v),
          (a = [
            {
              key: 'reject',
              value: function () {
                var f = this,
                  m = this._interaction.dropState
                if (
                  this.type === 'dropactivate' ||
                  (this.dropzone &&
                    m.cur.dropzone === this.dropzone &&
                    m.cur.element === this.target)
                )
                  if (
                    ((m.prev.dropzone = this.dropzone),
                    (m.prev.element = this.target),
                    (m.rejected = !0),
                    (m.events.enter = null),
                    this.stopImmediatePropagation(),
                    this.type === 'dropactivate')
                  ) {
                    var b = m.activeDrops,
                      S = xt.findIndex(b, function (R) {
                        var z = R.dropzone,
                          I = R.element
                        return z === f.dropzone && I === f.target
                      })
                    m.activeDrops.splice(S, 1)
                    var T = new v(m, this.dragEvent, 'dropdeactivate')
                    ;(T.dropzone = this.dropzone), (T.target = this.target), this.dropzone.fire(T)
                  } else this.dropzone.fire(new v(m, this.dragEvent, 'dragleave'))
              },
            },
            { key: 'preventDefault', value: function () {} },
            {
              key: 'stopPropagation',
              value: function () {
                this.propagationStopped = !0
              },
            },
            {
              key: 'stopImmediatePropagation',
              value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
              },
            },
          ]) && Ve(i.prototype, a),
          v
        )
      })(Ae.BaseEvent)
      Ee.DropEvent = Nn
      var fr = {}
      function on(n, i) {
        for (var a = 0; a < n.slice().length; a++) {
          var s = n.slice()[a],
            p = s.dropzone,
            d = s.element
          ;(i.dropzone = p),
            (i.target = d),
            p.fire(i),
            (i.propagationStopped = i.immediatePropagationStopped = !1)
        }
      }
      c(on, 'ct')
      function ui(n, i) {
        for (
          var a = (function (d, v) {
              for (var f = d.interactables, m = [], b = 0; b < f.list.length; b++) {
                var S = f.list[b]
                if (S.options.drop.enabled) {
                  var T = S.options.drop.accept
                  if (
                    !(
                      (l.default.element(T) && T !== v) ||
                      (l.default.string(T) && !D.matchesSelector(v, T)) ||
                      (l.default.func(T) && !T({ dropzone: S, draggableElement: v }))
                    )
                  )
                    for (
                      var R = l.default.string(S.target)
                          ? S._context.querySelectorAll(S.target)
                          : l.default.array(S.target)
                          ? S.target
                          : [S.target],
                        z = 0;
                      z < R.length;
                      z++
                    ) {
                      var I = R[z]
                      I !== v && m.push({ dropzone: S, element: I, rect: S.getRect(I) })
                    }
                }
              }
              return m
            })(n, i),
            s = 0;
          s < a.length;
          s++
        ) {
          var p = a[s]
          p.rect = p.dropzone.getRect(p.element)
        }
        return a
      }
      c(ui, 'ft')
      function fo(n, i, a) {
        for (
          var s = n.dropState, p = n.interactable, d = n.element, v = [], f = 0;
          f < s.activeDrops.length;
          f++
        ) {
          var m = s.activeDrops[f],
            b = m.dropzone,
            S = m.element,
            T = m.rect
          v.push(b.dropCheck(i, a, p, d, S, T) ? S : null)
        }
        var R = D.indexOfDeepestElement(v)
        return s.activeDrops[R] || null
      }
      c(fo, 'dt')
      function ci(n, i, a) {
        var s = n.dropState,
          p = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null }
        return (
          a.type === 'dragstart' &&
            ((p.activate = new Ee.DropEvent(s, a, 'dropactivate')),
            (p.activate.target = null),
            (p.activate.dropzone = null)),
          a.type === 'dragend' &&
            ((p.deactivate = new Ee.DropEvent(s, a, 'dropdeactivate')),
            (p.deactivate.target = null),
            (p.deactivate.dropzone = null)),
          s.rejected ||
            (s.cur.element !== s.prev.element &&
              (s.prev.dropzone &&
                ((p.leave = new Ee.DropEvent(s, a, 'dragleave')),
                (a.dragLeave = p.leave.target = s.prev.element),
                (a.prevDropzone = p.leave.dropzone = s.prev.dropzone)),
              s.cur.dropzone &&
                ((p.enter = new Ee.DropEvent(s, a, 'dragenter')),
                (a.dragEnter = s.cur.element),
                (a.dropzone = s.cur.dropzone))),
            a.type === 'dragend' &&
              s.cur.dropzone &&
              ((p.drop = new Ee.DropEvent(s, a, 'drop')),
              (a.dropzone = s.cur.dropzone),
              (a.relatedTarget = s.cur.element)),
            a.type === 'dragmove' &&
              s.cur.dropzone &&
              ((p.move = new Ee.DropEvent(s, a, 'dropmove')),
              (p.move.dragmove = a),
              (a.dropzone = s.cur.dropzone))),
          p
        )
      }
      c(ci, 'pt')
      function pi(n, i) {
        var a = n.dropState,
          s = a.activeDrops,
          p = a.cur,
          d = a.prev
        i.leave && d.dropzone.fire(i.leave),
          i.enter && p.dropzone.fire(i.enter),
          i.move && p.dropzone.fire(i.move),
          i.drop && p.dropzone.fire(i.drop),
          i.deactivate && on(s, i.deactivate),
          (a.prev.dropzone = p.dropzone),
          (a.prev.element = p.element)
      }
      c(pi, 'vt')
      function ho(n, i) {
        var a = n.interaction,
          s = n.iEvent,
          p = n.event
        if (s.type === 'dragmove' || s.type === 'dragend') {
          var d = a.dropState
          i.dynamicDrop && (d.activeDrops = ui(i, a.element))
          var v = s,
            f = fo(a, v, p)
          ;(d.rejected =
            d.rejected && !!f && f.dropzone === d.cur.dropzone && f.element === d.cur.element),
            (d.cur.dropzone = f && f.dropzone),
            (d.cur.element = f && f.element),
            (d.events = ci(a, 0, v))
        }
      }
      c(ho, 'ht'), Object.defineProperty(fr, '__esModule', { value: !0 }), (fr.default = void 0)
      var L = {
          id: 'actions/drop',
          install: function (n) {
            var i = n.actions,
              a = n.interactStatic,
              s = n.Interactable,
              p = n.defaults
            n.usePlugin(w.default),
              (s.prototype.dropzone = function (d) {
                return (function (v, f) {
                  if (l.default.object(f)) {
                    if (((v.options.drop.enabled = f.enabled !== !1), f.listeners)) {
                      var m = (0, ht.default)(f.listeners),
                        b = Object.keys(m).reduce(function (S, T) {
                          return (
                            (S[
                              /^(enter|leave)/.test(T)
                                ? 'drag'.concat(T)
                                : /^(activate|deactivate|move)/.test(T)
                                ? 'drop'.concat(T)
                                : T
                            ] = m[T]),
                            S
                          )
                        }, {})
                      v.off(v.options.drop.listeners), v.on(b), (v.options.drop.listeners = b)
                    }
                    return (
                      l.default.func(f.ondrop) && v.on('drop', f.ondrop),
                      l.default.func(f.ondropactivate) && v.on('dropactivate', f.ondropactivate),
                      l.default.func(f.ondropdeactivate) &&
                        v.on('dropdeactivate', f.ondropdeactivate),
                      l.default.func(f.ondragenter) && v.on('dragenter', f.ondragenter),
                      l.default.func(f.ondragleave) && v.on('dragleave', f.ondragleave),
                      l.default.func(f.ondropmove) && v.on('dropmove', f.ondropmove),
                      /^(pointer|center)$/.test(f.overlap)
                        ? (v.options.drop.overlap = f.overlap)
                        : l.default.number(f.overlap) &&
                          (v.options.drop.overlap = Math.max(Math.min(1, f.overlap), 0)),
                      'accept' in f && (v.options.drop.accept = f.accept),
                      'checker' in f && (v.options.drop.checker = f.checker),
                      v
                    )
                  }
                  return l.default.bool(f) ? ((v.options.drop.enabled = f), v) : v.options.drop
                })(this, d)
              }),
              (s.prototype.dropCheck = function (d, v, f, m, b, S) {
                return (function (T, R, z, I, F, Z, W) {
                  var et = !1
                  if (!(W = W || T.getRect(Z)))
                    return !!T.options.drop.checker && T.options.drop.checker(R, z, et, T, Z, I, F)
                  var st = T.options.drop.overlap
                  if (st === 'pointer') {
                    var dt = (0, Dt.default)(I, F, 'drag'),
                      Et = K.getPageXY(R)
                    ;(Et.x += dt.x), (Et.y += dt.y)
                    var kt = Et.x > W.left && Et.x < W.right,
                      bt = Et.y > W.top && Et.y < W.bottom
                    et = kt && bt
                  }
                  var Pt = I.getRect(F)
                  if (Pt && st === 'center') {
                    var Ge = Pt.left + Pt.width / 2,
                      gr = Pt.top + Pt.height / 2
                    et = Ge >= W.left && Ge <= W.right && gr >= W.top && gr <= W.bottom
                  }
                  return (
                    Pt &&
                      l.default.number(st) &&
                      (et =
                        (Math.max(0, Math.min(W.right, Pt.right) - Math.max(W.left, Pt.left)) *
                          Math.max(0, Math.min(W.bottom, Pt.bottom) - Math.max(W.top, Pt.top))) /
                          (Pt.width * Pt.height) >=
                        st),
                    T.options.drop.checker && (et = T.options.drop.checker(R, z, et, T, Z, I, F)),
                    et
                  )
                })(this, d, v, f, m, b, S)
              }),
              (a.dynamicDrop = function (d) {
                return l.default.bool(d) ? ((n.dynamicDrop = d), a) : n.dynamicDrop
              }),
              (0, H.default)(i.phaselessTypes, {
                dragenter: !0,
                dragleave: !0,
                dropactivate: !0,
                dropdeactivate: !0,
                dropmove: !0,
                drop: !0,
              }),
              (i.methodDict.drop = 'dropzone'),
              (n.dynamicDrop = !1),
              (p.actions.drop = L.defaults)
          },
          listeners: {
            'interactions:before-action-start': function (n) {
              var i = n.interaction
              i.prepared.name === 'drag' &&
                (i.dropState = {
                  cur: { dropzone: null, element: null },
                  prev: { dropzone: null, element: null },
                  rejected: null,
                  events: null,
                  activeDrops: [],
                })
            },
            'interactions:after-action-start': function (n, i) {
              var a = n.interaction,
                s = (n.event, n.iEvent)
              if (a.prepared.name === 'drag') {
                var p = a.dropState
                ;(p.activeDrops = null),
                  (p.events = null),
                  (p.activeDrops = ui(i, a.element)),
                  (p.events = ci(a, 0, s)),
                  p.events.activate &&
                    (on(p.activeDrops, p.events.activate),
                    i.fire('actions/drop:start', { interaction: a, dragEvent: s }))
              }
            },
            'interactions:action-move': ho,
            'interactions:after-action-move': function (n, i) {
              var a = n.interaction,
                s = n.iEvent
              a.prepared.name === 'drag' &&
                (pi(a, a.dropState.events),
                i.fire('actions/drop:move', { interaction: a, dragEvent: s }),
                (a.dropState.events = {}))
            },
            'interactions:action-end': function (n, i) {
              if (n.interaction.prepared.name === 'drag') {
                var a = n.interaction,
                  s = n.iEvent
                ho(n, i),
                  pi(a, a.dropState.events),
                  i.fire('actions/drop:end', { interaction: a, dragEvent: s })
              }
            },
            'interactions:stop': function (n) {
              var i = n.interaction
              if (i.prepared.name === 'drag') {
                var a = i.dropState
                a &&
                  ((a.activeDrops = null),
                  (a.events = null),
                  (a.cur.dropzone = null),
                  (a.cur.element = null),
                  (a.prev.dropzone = null),
                  (a.prev.element = null),
                  (a.rejected = !1))
              }
            },
          },
          getActiveDrops: ui,
          getDrop: fo,
          getDropEvents: ci,
          fireDropEvents: pi,
          defaults: { enabled: !1, accept: null, overlap: 'pointer' },
        },
        tt = L
      fr.default = tt
      var ot = {}
      function wt(n) {
        var i = n.interaction,
          a = n.iEvent,
          s = n.phase
        if (i.prepared.name === 'gesture') {
          var p = i.pointers.map(function (b) {
              return b.pointer
            }),
            d = s === 'start',
            v = s === 'end',
            f = i.interactable.options.deltaSource
          if (((a.touches = [p[0], p[1]]), d))
            (a.distance = K.touchDistance(p, f)),
              (a.box = K.touchBBox(p)),
              (a.scale = 1),
              (a.ds = 0),
              (a.angle = K.touchAngle(p, f)),
              (a.da = 0),
              (i.gesture.startDistance = a.distance),
              (i.gesture.startAngle = a.angle)
          else if (v) {
            var m = i.prevEvent
            ;(a.distance = m.distance),
              (a.box = m.box),
              (a.scale = m.scale),
              (a.ds = 0),
              (a.angle = m.angle),
              (a.da = 0)
          } else
            (a.distance = K.touchDistance(p, f)),
              (a.box = K.touchBBox(p)),
              (a.scale = a.distance / i.gesture.startDistance),
              (a.angle = K.touchAngle(p, f)),
              (a.ds = a.scale - i.gesture.scale),
              (a.da = a.angle - i.gesture.angle)
          ;(i.gesture.distance = a.distance),
            (i.gesture.angle = a.angle),
            l.default.number(a.scale) &&
              a.scale !== 1 / 0 &&
              !isNaN(a.scale) &&
              (i.gesture.scale = a.scale)
        }
      }
      c(wt, 'bt'), Object.defineProperty(ot, '__esModule', { value: !0 }), (ot.default = void 0)
      var vt = {
          id: 'actions/gesture',
          before: ['actions/drag', 'actions/resize'],
          install: function (n) {
            var i = n.actions,
              a = n.Interactable,
              s = n.defaults
            ;(a.prototype.gesturable = function (p) {
              return l.default.object(p)
                ? ((this.options.gesture.enabled = p.enabled !== !1),
                  this.setPerAction('gesture', p),
                  this.setOnEvents('gesture', p),
                  this)
                : l.default.bool(p)
                ? ((this.options.gesture.enabled = p), this)
                : this.options.gesture
            }),
              (i.map.gesture = vt),
              (i.methodDict.gesture = 'gesturable'),
              (s.actions.gesture = vt.defaults)
          },
          listeners: {
            'interactions:action-start': wt,
            'interactions:action-move': wt,
            'interactions:action-end': wt,
            'interactions:new': function (n) {
              n.interaction.gesture = {
                angle: 0,
                distance: 0,
                scale: 1,
                startAngle: 0,
                startDistance: 0,
              }
            },
            'auto-start:check': function (n) {
              if (!(n.interaction.pointers.length < 2)) {
                var i = n.interactable.options.gesture
                if (i && i.enabled) return (n.action = { name: 'gesture' }), !1
              }
            },
          },
          defaults: {},
          getCursor: function () {
            return ''
          },
        },
        ee = vt
      ot.default = ee
      var re = {}
      function Gr(n, i, a, s, p, d, v) {
        if (!i) return !1
        if (i === !0) {
          var f = l.default.number(d.width) ? d.width : d.right - d.left,
            m = l.default.number(d.height) ? d.height : d.bottom - d.top
          if (
            ((v = Math.min(v, Math.abs((n === 'left' || n === 'right' ? f : m) / 2))),
            f < 0 && (n === 'left' ? (n = 'right') : n === 'right' && (n = 'left')),
            m < 0 && (n === 'top' ? (n = 'bottom') : n === 'bottom' && (n = 'top')),
            n === 'left')
          )
            return a.x < (f >= 0 ? d.left : d.right) + v
          if (n === 'top') return a.y < (m >= 0 ? d.top : d.bottom) + v
          if (n === 'right') return a.x > (f >= 0 ? d.right : d.left) - v
          if (n === 'bottom') return a.y > (m >= 0 ? d.bottom : d.top) - v
        }
        return !!l.default.element(s) && (l.default.element(i) ? i === s : D.matchesUpTo(s, i, p))
      }
      c(Gr, 'Pt')
      function di(n) {
        var i = n.iEvent,
          a = n.interaction
        if (a.prepared.name === 'resize' && a.resizeAxes) {
          var s = i
          a.interactable.options.resize.square
            ? (a.resizeAxes === 'y' ? (s.delta.x = s.delta.y) : (s.delta.y = s.delta.x),
              (s.axes = 'xy'))
            : ((s.axes = a.resizeAxes),
              a.resizeAxes === 'x' ? (s.delta.y = 0) : a.resizeAxes === 'y' && (s.delta.x = 0))
        }
      }
      c(di, 'Ot'), Object.defineProperty(re, '__esModule', { value: !0 }), (re.default = void 0)
      var ne = {
          id: 'actions/resize',
          before: ['actions/drag'],
          install: function (n) {
            var i = n.actions,
              a = n.browser,
              s = n.Interactable,
              p = n.defaults
            ;(ne.cursors = (function (d) {
              return d.isIe9
                ? {
                    x: 'e-resize',
                    y: 's-resize',
                    xy: 'se-resize',
                    top: 'n-resize',
                    left: 'w-resize',
                    bottom: 's-resize',
                    right: 'e-resize',
                    topleft: 'se-resize',
                    bottomright: 'se-resize',
                    topright: 'ne-resize',
                    bottomleft: 'ne-resize',
                  }
                : {
                    x: 'ew-resize',
                    y: 'ns-resize',
                    xy: 'nwse-resize',
                    top: 'ns-resize',
                    left: 'ew-resize',
                    bottom: 'ns-resize',
                    right: 'ew-resize',
                    topleft: 'nwse-resize',
                    bottomright: 'nwse-resize',
                    topright: 'nesw-resize',
                    bottomleft: 'nesw-resize',
                  }
            })(a)),
              (ne.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10),
              (s.prototype.resizable = function (d) {
                return (function (v, f, m) {
                  return l.default.object(f)
                    ? ((v.options.resize.enabled = f.enabled !== !1),
                      v.setPerAction('resize', f),
                      v.setOnEvents('resize', f),
                      l.default.string(f.axis) && /^x$|^y$|^xy$/.test(f.axis)
                        ? (v.options.resize.axis = f.axis)
                        : f.axis === null &&
                          (v.options.resize.axis = m.defaults.actions.resize.axis),
                      l.default.bool(f.preserveAspectRatio)
                        ? (v.options.resize.preserveAspectRatio = f.preserveAspectRatio)
                        : l.default.bool(f.square) && (v.options.resize.square = f.square),
                      v)
                    : l.default.bool(f)
                    ? ((v.options.resize.enabled = f), v)
                    : v.options.resize
                })(this, d, n)
              }),
              (i.map.resize = ne),
              (i.methodDict.resize = 'resizable'),
              (p.actions.resize = ne.defaults)
          },
          listeners: {
            'interactions:new': function (n) {
              n.interaction.resizeAxes = 'xy'
            },
            'interactions:action-start': function (n) {
              ;(function (i) {
                var a = i.iEvent,
                  s = i.interaction
                if (s.prepared.name === 'resize' && s.prepared.edges) {
                  var p = a,
                    d = s.rect
                  ;(s._rects = {
                    start: (0, H.default)({}, d),
                    corrected: (0, H.default)({}, d),
                    previous: (0, H.default)({}, d),
                    delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 },
                  }),
                    (p.edges = s.prepared.edges),
                    (p.rect = s._rects.corrected),
                    (p.deltaRect = s._rects.delta)
                }
              })(n),
                di(n)
            },
            'interactions:action-move': function (n) {
              ;(function (i) {
                var a = i.iEvent,
                  s = i.interaction
                if (s.prepared.name === 'resize' && s.prepared.edges) {
                  var p = a,
                    d = s.interactable.options.resize.invert,
                    v = d === 'reposition' || d === 'negate',
                    f = s.rect,
                    m = s._rects,
                    b = m.start,
                    S = m.corrected,
                    T = m.delta,
                    R = m.previous
                  if (((0, H.default)(R, S), v)) {
                    if (((0, H.default)(S, f), d === 'reposition')) {
                      if (S.top > S.bottom) {
                        var z = S.top
                        ;(S.top = S.bottom), (S.bottom = z)
                      }
                      if (S.left > S.right) {
                        var I = S.left
                        ;(S.left = S.right), (S.right = I)
                      }
                    }
                  } else
                    (S.top = Math.min(f.top, b.bottom)),
                      (S.bottom = Math.max(f.bottom, b.top)),
                      (S.left = Math.min(f.left, b.right)),
                      (S.right = Math.max(f.right, b.left))
                  for (var F in ((S.width = S.right - S.left), (S.height = S.bottom - S.top), S))
                    T[F] = S[F] - R[F]
                  ;(p.edges = s.prepared.edges), (p.rect = S), (p.deltaRect = T)
                }
              })(n),
                di(n)
            },
            'interactions:action-end': function (n) {
              var i = n.iEvent,
                a = n.interaction
              if (a.prepared.name === 'resize' && a.prepared.edges) {
                var s = i
                ;(s.edges = a.prepared.edges),
                  (s.rect = a._rects.corrected),
                  (s.deltaRect = a._rects.delta)
              }
            },
            'auto-start:check': function (n) {
              var i = n.interaction,
                a = n.interactable,
                s = n.element,
                p = n.rect,
                d = n.buttons
              if (p) {
                var v = (0, H.default)({}, i.coords.cur.page),
                  f = a.options.resize
                if (
                  f &&
                  f.enabled &&
                  (!i.pointerIsDown ||
                    !/mouse|pointer/.test(i.pointerType) ||
                    (d & f.mouseButtons) != 0)
                ) {
                  if (l.default.object(f.edges)) {
                    var m = { left: !1, right: !1, top: !1, bottom: !1 }
                    for (var b in m)
                      m[b] = Gr(
                        b,
                        f.edges[b],
                        v,
                        i._latestPointer.eventTarget,
                        s,
                        p,
                        f.margin || ne.defaultMargin
                      )
                    ;(m.left = m.left && !m.right),
                      (m.top = m.top && !m.bottom),
                      (m.left || m.right || m.top || m.bottom) &&
                        (n.action = { name: 'resize', edges: m })
                  } else {
                    var S = f.axis !== 'y' && v.x > p.right - ne.defaultMargin,
                      T = f.axis !== 'x' && v.y > p.bottom - ne.defaultMargin
                    ;(S || T) &&
                      (n.action = { name: 'resize', axes: (S ? 'x' : '') + (T ? 'y' : '') })
                  }
                  return !n.action && void 0
                }
              }
            },
          },
          defaults: {
            square: !1,
            preserveAspectRatio: !1,
            axis: 'xy',
            margin: NaN,
            edges: null,
            invert: 'none',
          },
          cursors: null,
          getCursor: function (n) {
            var i = n.edges,
              a = n.axis,
              s = n.name,
              p = ne.cursors,
              d = null
            if (a) d = p[s + a]
            else if (i) {
              for (var v = '', f = ['top', 'bottom', 'left', 'right'], m = 0; m < f.length; m++) {
                var b = f[m]
                i[b] && (v += b)
              }
              d = p[v]
            }
            return d
          },
          defaultMargin: null,
        },
        fi = ne
      re.default = fi
      var hr = {}
      Object.defineProperty(hr, '__esModule', { value: !0 }), (hr.default = void 0)
      var $r = {
        id: 'actions',
        install: function (n) {
          n.usePlugin(ot.default),
            n.usePlugin(re.default),
            n.usePlugin(w.default),
            n.usePlugin(fr.default)
        },
      }
      hr.default = $r
      var Ie = {}
      Object.defineProperty(Ie, '__esModule', { value: !0 }), (Ie.default = void 0)
      var De,
        Le,
        vl = 0,
        wp = {
          request: function (n) {
            return De(n)
          },
          cancel: function (n) {
            return Le(n)
          },
          init: function (n) {
            if (((De = n.requestAnimationFrame), (Le = n.cancelAnimationFrame), !De))
              for (var i = ['ms', 'moz', 'webkit', 'o'], a = 0; a < i.length; a++) {
                var s = i[a]
                ;(De = n[''.concat(s, 'RequestAnimationFrame')]),
                  (Le =
                    n[''.concat(s, 'CancelAnimationFrame')] ||
                    n[''.concat(s, 'CancelRequestAnimationFrame')])
              }
            ;(De = De && De.bind(n)),
              (Le = Le && Le.bind(n)),
              De ||
                ((De = c(function (p) {
                  var d = Date.now(),
                    v = Math.max(0, 16 - (d - vl)),
                    f = n.setTimeout(function () {
                      p(d + v)
                    }, v)
                  return (vl = d + v), f
                }, 'kt')),
                (Le = c(function (p) {
                  return clearTimeout(p)
                }, 'It')))
          },
        }
      Ie.default = wp
      var Br = {}
      Object.defineProperty(Br, '__esModule', { value: !0 }),
        (Br.getContainer = vo),
        (Br.getScroll = hi),
        (Br.getScrollSize = function (n) {
          return (
            l.default.window(n) && (n = window.document.body),
            { x: n.scrollWidth, y: n.scrollHeight }
          )
        }),
        (Br.getScrollSizeDelta = function (n, i) {
          var a = n.interaction,
            s = n.element,
            p = a && a.interactable.options[a.prepared.name].autoScroll
          if (!p || !p.enabled) return i(), { x: 0, y: 0 }
          var d = vo(p.container, a.interactable, s),
            v = hi(d)
          i()
          var f = hi(d)
          return { x: f.x - v.x, y: f.y - v.y }
        }),
        (Br.default = void 0)
      var lt = {
        defaults: { enabled: !1, margin: 60, container: null, speed: 300 },
        now: Date.now,
        interaction: null,
        i: 0,
        x: 0,
        y: 0,
        isScrolling: !1,
        prevTime: 0,
        margin: 0,
        speed: 0,
        start: function (n) {
          ;(lt.isScrolling = !0),
            Ie.default.cancel(lt.i),
            (n.autoScroll = lt),
            (lt.interaction = n),
            (lt.prevTime = lt.now()),
            (lt.i = Ie.default.request(lt.scroll))
        },
        stop: function () {
          ;(lt.isScrolling = !1),
            lt.interaction && (lt.interaction.autoScroll = null),
            Ie.default.cancel(lt.i)
        },
        scroll: function () {
          var n = lt.interaction,
            i = n.interactable,
            a = n.element,
            s = n.prepared.name,
            p = i.options[s].autoScroll,
            d = vo(p.container, i, a),
            v = lt.now(),
            f = (v - lt.prevTime) / 1e3,
            m = p.speed * f
          if (m >= 1) {
            var b = { x: lt.x * m, y: lt.y * m }
            if (b.x || b.y) {
              var S = hi(d)
              l.default.window(d)
                ? d.scrollBy(b.x, b.y)
                : d && ((d.scrollLeft += b.x), (d.scrollTop += b.y))
              var T = hi(d),
                R = { x: T.x - S.x, y: T.y - S.y }
              ;(R.x || R.y) &&
                i.fire({
                  type: 'autoscroll',
                  target: a,
                  interactable: i,
                  delta: R,
                  interaction: n,
                  container: d,
                })
            }
            lt.prevTime = v
          }
          lt.isScrolling && (Ie.default.cancel(lt.i), (lt.i = Ie.default.request(lt.scroll)))
        },
        check: function (n, i) {
          var a
          return (a = n.options[i].autoScroll) == null ? void 0 : a.enabled
        },
        onInteractionMove: function (n) {
          var i = n.interaction,
            a = n.pointer
          if (i.interacting() && lt.check(i.interactable, i.prepared.name))
            if (i.simulation) lt.x = lt.y = 0
            else {
              var s,
                p,
                d,
                v,
                f = i.interactable,
                m = i.element,
                b = i.prepared.name,
                S = f.options[b].autoScroll,
                T = vo(S.container, f, m)
              if (l.default.window(T))
                (v = a.clientX < lt.margin),
                  (s = a.clientY < lt.margin),
                  (p = a.clientX > T.innerWidth - lt.margin),
                  (d = a.clientY > T.innerHeight - lt.margin)
              else {
                var R = D.getElementClientRect(T)
                ;(v = a.clientX < R.left + lt.margin),
                  (s = a.clientY < R.top + lt.margin),
                  (p = a.clientX > R.right - lt.margin),
                  (d = a.clientY > R.bottom - lt.margin)
              }
              ;(lt.x = p ? 1 : v ? -1 : 0),
                (lt.y = d ? 1 : s ? -1 : 0),
                lt.isScrolling || ((lt.margin = S.margin), (lt.speed = S.speed), lt.start(i))
            }
        },
      }
      function vo(n, i, a) {
        return (
          (l.default.string(n) ? (0, ct.getStringOptionResult)(n, i, a) : n) || (0, e.getWindow)(a)
        )
      }
      c(vo, 'Ct')
      function hi(n) {
        return (
          l.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop }
        )
      }
      c(hi, 'Ft')
      var xp = {
        id: 'auto-scroll',
        install: function (n) {
          var i = n.defaults,
            a = n.actions
          ;(n.autoScroll = lt),
            (lt.now = function () {
              return n.now()
            }),
            (a.phaselessTypes.autoscroll = !0),
            (i.perAction.autoScroll = lt.defaults)
        },
        listeners: {
          'interactions:new': function (n) {
            n.interaction.autoScroll = null
          },
          'interactions:destroy': function (n) {
            ;(n.interaction.autoScroll = null), lt.stop(), lt.interaction && (lt.interaction = null)
          },
          'interactions:stop': lt.stop,
          'interactions:action-move': function (n) {
            return lt.onInteractionMove(n)
          },
        },
      }
      Br.default = xp
      var ke = {}
      Object.defineProperty(ke, '__esModule', { value: !0 }),
        (ke.warnOnce = function (n, i) {
          var a = !1
          return function () {
            return a || (e.window.console.warn(i), (a = !0)), n.apply(this, arguments)
          }
        }),
        (ke.copyAction = function (n, i) {
          return (n.name = i.name), (n.axis = i.axis), (n.edges = i.edges), n
        }),
        (ke.sign = void 0),
        (ke.sign = function (n) {
          return n >= 0 ? 1 : -1
        })
      var mo = {}
      function Ep(n) {
        return l.default.bool(n)
          ? ((this.options.styleCursor = n), this)
          : n === null
          ? (delete this.options.styleCursor, this)
          : this.options.styleCursor
      }
      c(Ep, 'Wt')
      function Sp(n) {
        return l.default.func(n)
          ? ((this.options.actionChecker = n), this)
          : n === null
          ? (delete this.options.actionChecker, this)
          : this.options.actionChecker
      }
      c(Sp, 'Lt'), Object.defineProperty(mo, '__esModule', { value: !0 }), (mo.default = void 0)
      var Op = {
        id: 'auto-start/interactableMethods',
        install: function (n) {
          var i = n.Interactable
          ;(i.prototype.getAction = function (a, s, p, d) {
            var v = (function (f, m, b, S, T) {
              var R = f.getRect(S),
                z = {
                  action: null,
                  interactable: f,
                  interaction: b,
                  element: S,
                  rect: R,
                  buttons: m.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[m.button],
                }
              return T.fire('auto-start:check', z), z.action
            })(this, s, p, d, n)
            return this.options.actionChecker ? this.options.actionChecker(a, s, v, this, d, p) : v
          }),
            (i.prototype.ignoreFrom = (0, ke.warnOnce)(function (a) {
              return this._backCompatOption('ignoreFrom', a)
            }, 'Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).')),
            (i.prototype.allowFrom = (0, ke.warnOnce)(function (a) {
              return this._backCompatOption('allowFrom', a)
            }, 'Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).')),
            (i.prototype.actionChecker = Sp),
            (i.prototype.styleCursor = Ep)
        },
      }
      mo.default = Op
      var Rn = {}
      function ml(n, i, a, s, p) {
        return i.testIgnoreAllow(i.options[n.name], a, s) &&
          i.options[n.name].enabled &&
          go(i, a, n, p)
          ? n
          : null
      }
      c(ml, 'Nt')
      function Tp(n, i, a, s, p, d, v) {
        for (var f = 0, m = s.length; f < m; f++) {
          var b = s[f],
            S = p[f],
            T = b.getAction(i, a, n, S)
          if (T) {
            var R = ml(T, b, S, d, v)
            if (R) return { action: R, interactable: b, element: S }
          }
        }
        return { action: null, interactable: null, element: null }
      }
      c(Tp, 'qt')
      function gl(n, i, a, s, p) {
        var d = [],
          v = [],
          f = s
        function m(S) {
          d.push(S), v.push(f)
        }
        for (c(m, 'u'); l.default.element(f); ) {
          ;(d = []), (v = []), p.interactables.forEachMatch(f, m)
          var b = Tp(n, i, a, d, v, s, p)
          if (b.action && !b.interactable.options[b.action.name].manualStart) return b
          f = D.parentNode(f)
        }
        return { action: null, interactable: null, element: null }
      }
      c(gl, '$t')
      function yl(n, i, a) {
        var s = i.action,
          p = i.interactable,
          d = i.element
        ;(s = s || { name: null }),
          (n.interactable = p),
          (n.element = d),
          (0, ke.copyAction)(n.prepared, s),
          (n.rect = p && s.name ? p.getRect(d) : null),
          wl(n, a),
          a.fire('autoStart:prepared', { interaction: n })
      }
      c(yl, 'Gt')
      function go(n, i, a, s) {
        var p = n.options,
          d = p[a.name].max,
          v = p[a.name].maxPerElement,
          f = s.autoStart.maxInteractions,
          m = 0,
          b = 0,
          S = 0
        if (!(d && v && f)) return !1
        for (var T = 0; T < s.interactions.list.length; T++) {
          var R = s.interactions.list[T],
            z = R.prepared.name
          if (
            R.interacting() &&
            (++m >= f ||
              (R.interactable === n &&
                ((b += z === a.name ? 1 : 0) >= d ||
                  (R.element === i && (S++, z === a.name && S >= v)))))
          )
            return !1
        }
        return f > 0
      }
      c(go, 'Ht')
      function bl(n, i) {
        return l.default.number(n)
          ? ((i.autoStart.maxInteractions = n), this)
          : i.autoStart.maxInteractions
      }
      c(bl, 'Kt')
      function qa(n, i, a) {
        var s = a.autoStart.cursorElement
        s && s !== n && (s.style.cursor = ''),
          (n.ownerDocument.documentElement.style.cursor = i),
          (n.style.cursor = i),
          (a.autoStart.cursorElement = i ? n : null)
      }
      c(qa, 'Zt')
      function wl(n, i) {
        var a = n.interactable,
          s = n.element,
          p = n.prepared
        if (n.pointerType === 'mouse' && a && a.options.styleCursor) {
          var d = ''
          if (p.name) {
            var v = a.options[p.name].cursorChecker
            d = l.default.func(v) ? v(p, a, s, n._interacting) : i.actions.map[p.name].getCursor(p)
          }
          qa(n.element, d || '', i)
        } else i.autoStart.cursorElement && qa(i.autoStart.cursorElement, '', i)
      }
      c(wl, 'Jt'), Object.defineProperty(Rn, '__esModule', { value: !0 }), (Rn.default = void 0)
      var Cp = {
        id: 'auto-start/base',
        before: ['actions'],
        install: function (n) {
          var i = n.interactStatic,
            a = n.defaults
          n.usePlugin(mo.default),
            (a.base.actionChecker = null),
            (a.base.styleCursor = !0),
            (0, H.default)(a.perAction, {
              manualStart: !1,
              max: 1 / 0,
              maxPerElement: 1,
              allowFrom: null,
              ignoreFrom: null,
              mouseButtons: 1,
            }),
            (i.maxInteractions = function (s) {
              return bl(s, n)
            }),
            (n.autoStart = {
              maxInteractions: 1 / 0,
              withinInteractionLimit: go,
              cursorElement: null,
            })
        },
        listeners: {
          'interactions:down': function (n, i) {
            var a = n.interaction,
              s = n.pointer,
              p = n.event,
              d = n.eventTarget
            a.interacting() || yl(a, gl(a, s, p, d, i), i)
          },
          'interactions:move': function (n, i) {
            ;(function (a, s) {
              var p = a.interaction,
                d = a.pointer,
                v = a.event,
                f = a.eventTarget
              p.pointerType !== 'mouse' ||
                p.pointerIsDown ||
                p.interacting() ||
                yl(p, gl(p, d, v, f, s), s)
            })(n, i),
              (function (a, s) {
                var p = a.interaction
                if (p.pointerIsDown && !p.interacting() && p.pointerWasMoved && p.prepared.name) {
                  s.fire('autoStart:before-start', a)
                  var d = p.interactable,
                    v = p.prepared.name
                  v &&
                    d &&
                    (d.options[v].manualStart || !go(d, p.element, p.prepared, s)
                      ? p.stop()
                      : (p.start(p.prepared, d, p.element), wl(p, s)))
                }
              })(n, i)
          },
          'interactions:stop': function (n, i) {
            var a = n.interaction,
              s = a.interactable
            s && s.options.styleCursor && qa(a.element, '', i)
          },
        },
        maxInteractions: bl,
        withinInteractionLimit: go,
        validateAction: ml,
      }
      Rn.default = Cp
      var yo = {}
      Object.defineProperty(yo, '__esModule', { value: !0 }), (yo.default = void 0)
      var _p = {
        id: 'auto-start/dragAxis',
        listeners: {
          'autoStart:before-start': function (n, i) {
            var a = n.interaction,
              s = n.eventTarget,
              p = n.dx,
              d = n.dy
            if (a.prepared.name === 'drag') {
              var v = Math.abs(p),
                f = Math.abs(d),
                m = a.interactable.options.drag,
                b = m.startAxis,
                S = v > f ? 'x' : v < f ? 'y' : 'xy'
              if (
                ((a.prepared.axis = m.lockAxis === 'start' ? S[0] : m.lockAxis),
                S !== 'xy' && b !== 'xy' && b !== S)
              ) {
                a.prepared.name = null
                for (
                  var T = s,
                    R = function (I) {
                      if (I !== a.interactable) {
                        var F = a.interactable.options.drag
                        if (!F.manualStart && I.testIgnoreAllow(F, T, s)) {
                          var Z = I.getAction(a.downPointer, a.downEvent, a, T)
                          if (
                            Z &&
                            Z.name === 'drag' &&
                            (function (W, et) {
                              if (!et) return !1
                              var st = et.options.drag.startAxis
                              return W === 'xy' || st === 'xy' || st === W
                            })(S, I) &&
                            Rn.default.validateAction(Z, I, T, s, i)
                          )
                            return I
                        }
                      }
                    };
                  l.default.element(T);

                ) {
                  var z = i.interactables.forEachMatch(T, R)
                  if (z) {
                    ;(a.prepared.name = 'drag'), (a.interactable = z), (a.element = T)
                    break
                  }
                  T = (0, D.parentNode)(T)
                }
              }
            }
          },
        },
      }
      yo.default = _p
      var bo = {}
      function La(n) {
        var i = n.prepared && n.prepared.name
        if (!i) return null
        var a = n.interactable.options
        return a[i].hold || a[i].delay
      }
      c(La, 're'), Object.defineProperty(bo, '__esModule', { value: !0 }), (bo.default = void 0)
      var Pp = {
        id: 'auto-start/hold',
        install: function (n) {
          var i = n.defaults
          n.usePlugin(Rn.default), (i.perAction.hold = 0), (i.perAction.delay = 0)
        },
        listeners: {
          'interactions:new': function (n) {
            n.interaction.autoStartHoldTimer = null
          },
          'autoStart:prepared': function (n) {
            var i = n.interaction,
              a = La(i)
            a > 0 &&
              (i.autoStartHoldTimer = setTimeout(function () {
                i.start(i.prepared, i.interactable, i.element)
              }, a))
          },
          'interactions:move': function (n) {
            var i = n.interaction,
              a = n.duplicate
            i.autoStartHoldTimer &&
              i.pointerWasMoved &&
              !a &&
              (clearTimeout(i.autoStartHoldTimer), (i.autoStartHoldTimer = null))
          },
          'autoStart:before-start': function (n) {
            var i = n.interaction
            La(i) > 0 && (i.prepared.name = null)
          },
        },
        getHoldDuration: La,
      }
      bo.default = Pp
      var wo = {}
      Object.defineProperty(wo, '__esModule', { value: !0 }), (wo.default = void 0)
      var Ap = {
        id: 'auto-start',
        install: function (n) {
          n.usePlugin(Rn.default), n.usePlugin(bo.default), n.usePlugin(yo.default)
        },
      }
      wo.default = Ap
      var zn = {}
      function Mp(n) {
        return /^(always|never|auto)$/.test(n)
          ? ((this.options.preventDefault = n), this)
          : l.default.bool(n)
          ? ((this.options.preventDefault = n ? 'always' : 'never'), this)
          : this.options.preventDefault
      }
      c(Mp, 'le')
      function Ip(n) {
        var i = n.interaction,
          a = n.event
        i.interactable && i.interactable.checkAndPreventDefault(a)
      }
      c(Ip, 'ue')
      function xl(n) {
        var i = n.Interactable
        ;(i.prototype.preventDefault = Mp),
          (i.prototype.checkAndPreventDefault = function (a) {
            return (function (s, p, d) {
              var v = s.options.preventDefault
              if (v !== 'never')
                if (v !== 'always') {
                  if (p.events.supportsPassive && /^touch(start|move)$/.test(d.type)) {
                    var f = (0, e.getWindow)(d.target).document,
                      m = p.getDocOptions(f)
                    if (!m || !m.events || m.events.passive !== !1) return
                  }
                  ;/^(mouse|pointer|touch)*(down|start)/i.test(d.type) ||
                    (l.default.element(d.target) &&
                      (0, D.matchesSelector)(
                        d.target,
                        'input,select,textarea,[contenteditable=true],[contenteditable=true] *'
                      )) ||
                    d.preventDefault()
                } else d.preventDefault()
            })(this, n, a)
          }),
          n.interactions.docEvents.push({
            type: 'dragstart',
            listener: function (a) {
              for (var s = 0; s < n.interactions.list.length; s++) {
                var p = n.interactions.list[s]
                if (
                  p.element &&
                  (p.element === a.target || (0, D.nodeContains)(p.element, a.target))
                )
                  return void p.interactable.checkAndPreventDefault(a)
              }
            },
          })
      }
      c(xl, 'ce'),
        Object.defineProperty(zn, '__esModule', { value: !0 }),
        (zn.install = xl),
        (zn.default = void 0)
      var Dp = {
        id: 'core/interactablePreventDefault',
        install: xl,
        listeners: ['down', 'move', 'up', 'cancel'].reduce(function (n, i) {
          return (n['interactions:'.concat(i)] = Ip), n
        }, {}),
      }
      zn.default = Dp
      var ja = {}
      Object.defineProperty(ja, '__esModule', { value: !0 }),
        (ja.default = void 0),
        (ja.default = {})
      var vi,
        Ga = {}
      Object.defineProperty(Ga, '__esModule', { value: !0 }),
        (Ga.default = void 0),
        (function (n) {
          ;(n.touchAction = 'touchAction'),
            (n.boxSizing = 'boxSizing'),
            (n.noListeners = 'noListeners')
        })(vi || (vi = {})),
        vi.touchAction,
        vi.boxSizing,
        vi.noListeners
      var kp = { id: 'dev-tools', install: function () {} }
      Ga.default = kp
      var an = {}
      Object.defineProperty(an, '__esModule', { value: !0 }),
        (an.default = c(function n(i) {
          var a = {}
          for (var s in i) {
            var p = i[s]
            l.default.plainObject(p)
              ? (a[s] = n(p))
              : l.default.array(p)
              ? (a[s] = xt.from(p))
              : (a[s] = p)
          }
          return a
        }, 't'))
      var sn = {}
      function El(n, i) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a
          })(n) ||
          (function (a, s) {
            if (typeof Symbol != 'undefined' && Symbol.iterator in Object(a)) {
              var p = [],
                d = !0,
                v = !1,
                f = void 0
              try {
                for (
                  var m, b = a[Symbol.iterator]();
                  !(d = (m = b.next()).done) && (p.push(m.value), !s || p.length !== s);
                  d = !0
                );
              } catch (S) {
                ;(v = !0), (f = S)
              } finally {
                try {
                  d || b.return == null || b.return()
                } finally {
                  if (v) throw f
                }
              }
              return p
            }
          })(n, i) ||
          (function (a, s) {
            if (a) {
              if (typeof a == 'string') return Sl(a, s)
              var p = Object.prototype.toString.call(a).slice(8, -1)
              return (
                p === 'Object' && a.constructor && (p = a.constructor.name),
                p === 'Map' || p === 'Set'
                  ? Array.from(a)
                  : p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
                  ? Sl(a, s)
                  : void 0
              )
            }
          })(n, i) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          })()
        )
      }
      c(El, 'me')
      function Sl(n, i) {
        ;(i == null || i > n.length) && (i = n.length)
        for (var a = 0, s = Array(i); a < i; a++) s[a] = n[a]
        return s
      }
      c(Sl, 'be')
      function Np(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Np, 'xe')
      function ln(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(ln, 'we'),
        Object.defineProperty(sn, '__esModule', { value: !0 }),
        (sn.getRectOffset = Ol),
        (sn.default = void 0)
      var Rp = (function () {
        function n(s) {
          ;(function (p, d) {
            if (!(p instanceof d)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            ln(this, 'states', []),
            ln(this, 'startOffset', { left: 0, right: 0, top: 0, bottom: 0 }),
            ln(this, 'startDelta', void 0),
            ln(this, 'result', void 0),
            ln(this, 'endResult', void 0),
            ln(this, 'edges', void 0),
            ln(this, 'interaction', void 0),
            (this.interaction = s),
            (this.result = xo())
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            {
              key: 'start',
              value: function (s, p) {
                var d = s.phase,
                  v = this.interaction,
                  f = (function (b) {
                    var S = b.interactable.options[b.prepared.name],
                      T = S.modifiers
                    return T && T.length
                      ? T
                      : [
                          'snap',
                          'snapSize',
                          'snapEdges',
                          'restrict',
                          'restrictEdges',
                          'restrictSize',
                        ]
                          .map(function (R) {
                            var z = S[R]
                            return z && z.enabled && { options: z, methods: z._methods }
                          })
                          .filter(function (R) {
                            return !!R
                          })
                  })(v)
                this.prepareStates(f),
                  (this.edges = (0, H.default)({}, v.edges)),
                  (this.startOffset = Ol(v.rect, p)),
                  (this.startDelta = { x: 0, y: 0 })
                var m = this.fillArg({ phase: d, pageCoords: p, preEnd: !1 })
                return (this.result = xo()), this.startAll(m), (this.result = this.setAll(m))
              },
            },
            {
              key: 'fillArg',
              value: function (s) {
                var p = this.interaction
                return (
                  (s.interaction = p),
                  (s.interactable = p.interactable),
                  (s.element = p.element),
                  (s.rect = s.rect || p.rect),
                  (s.edges = this.edges),
                  (s.startOffset = this.startOffset),
                  s
                )
              },
            },
            {
              key: 'startAll',
              value: function (s) {
                for (var p = 0; p < this.states.length; p++) {
                  var d = this.states[p]
                  d.methods.start && ((s.state = d), d.methods.start(s))
                }
              },
            },
            {
              key: 'setAll',
              value: function (s) {
                var p = s.phase,
                  d = s.preEnd,
                  v = s.skipModifiers,
                  f = s.rect
                ;(s.coords = (0, H.default)({}, s.pageCoords)), (s.rect = (0, H.default)({}, f))
                for (
                  var m = v ? this.states.slice(v) : this.states, b = xo(s.coords, s.rect), S = 0;
                  S < m.length;
                  S++
                ) {
                  var T,
                    R = m[S],
                    z = R.options,
                    I = (0, H.default)({}, s.coords),
                    F = null
                  ;(T = R.methods) != null &&
                    T.set &&
                    this.shouldDo(z, d, p) &&
                    ((s.state = R),
                    (F = R.methods.set(s)),
                    ct.addEdges(this.interaction.edges, s.rect, {
                      x: s.coords.x - I.x,
                      y: s.coords.y - I.y,
                    })),
                    b.eventProps.push(F)
                }
                ;(b.delta.x = s.coords.x - s.pageCoords.x),
                  (b.delta.y = s.coords.y - s.pageCoords.y),
                  (b.rectDelta.left = s.rect.left - f.left),
                  (b.rectDelta.right = s.rect.right - f.right),
                  (b.rectDelta.top = s.rect.top - f.top),
                  (b.rectDelta.bottom = s.rect.bottom - f.bottom)
                var Z = this.result.coords,
                  W = this.result.rect
                if (Z && W) {
                  var et =
                    b.rect.left !== W.left ||
                    b.rect.right !== W.right ||
                    b.rect.top !== W.top ||
                    b.rect.bottom !== W.bottom
                  b.changed = et || Z.x !== b.coords.x || Z.y !== b.coords.y
                }
                return b
              },
            },
            {
              key: 'applyToInteraction',
              value: function (s) {
                var p = this.interaction,
                  d = s.phase,
                  v = p.coords.cur,
                  f = p.coords.start,
                  m = this.result,
                  b = this.startDelta,
                  S = m.delta
                d === 'start' && (0, H.default)(this.startDelta, m.delta)
                for (
                  var T = 0;
                  T <
                  [
                    [f, b],
                    [v, S],
                  ].length;
                  T++
                ) {
                  var R = El(
                      [
                        [f, b],
                        [v, S],
                      ][T],
                      2
                    ),
                    z = R[0],
                    I = R[1]
                  ;(z.page.x += I.x), (z.page.y += I.y), (z.client.x += I.x), (z.client.y += I.y)
                }
                var F = this.result.rectDelta,
                  Z = s.rect || p.rect
                ;(Z.left += F.left),
                  (Z.right += F.right),
                  (Z.top += F.top),
                  (Z.bottom += F.bottom),
                  (Z.width = Z.right - Z.left),
                  (Z.height = Z.bottom - Z.top)
              },
            },
            {
              key: 'setAndApply',
              value: function (s) {
                var p = this.interaction,
                  d = s.phase,
                  v = s.preEnd,
                  f = s.skipModifiers,
                  m = this.setAll(
                    this.fillArg({
                      preEnd: v,
                      phase: d,
                      pageCoords: s.modifiedCoords || p.coords.cur.page,
                    })
                  )
                if (
                  ((this.result = m),
                  !m.changed && (!f || f < this.states.length) && p.interacting())
                )
                  return !1
                if (s.modifiedCoords) {
                  var b = p.coords.cur.page,
                    S = { x: s.modifiedCoords.x - b.x, y: s.modifiedCoords.y - b.y }
                  ;(m.coords.x += S.x), (m.coords.y += S.y), (m.delta.x += S.x), (m.delta.y += S.y)
                }
                this.applyToInteraction(s)
              },
            },
            {
              key: 'beforeEnd',
              value: function (s) {
                var p = s.interaction,
                  d = s.event,
                  v = this.states
                if (v && v.length) {
                  for (var f = !1, m = 0; m < v.length; m++) {
                    var b = v[m]
                    s.state = b
                    var S = b.options,
                      T = b.methods,
                      R = T.beforeEnd && T.beforeEnd(s)
                    if (R) return (this.endResult = R), !1
                    f = f || (!f && this.shouldDo(S, !0, s.phase, !0))
                  }
                  f && p.move({ event: d, preEnd: !0 })
                }
              },
            },
            {
              key: 'stop',
              value: function (s) {
                var p = s.interaction
                if (this.states && this.states.length) {
                  var d = (0, H.default)(
                    {
                      states: this.states,
                      interactable: p.interactable,
                      element: p.element,
                      rect: null,
                    },
                    s
                  )
                  this.fillArg(d)
                  for (var v = 0; v < this.states.length; v++) {
                    var f = this.states[v]
                    ;(d.state = f), f.methods.stop && f.methods.stop(d)
                  }
                  ;(this.states = null), (this.endResult = null)
                }
              },
            },
            {
              key: 'prepareStates',
              value: function (s) {
                this.states = []
                for (var p = 0; p < s.length; p++) {
                  var d = s[p],
                    v = d.options,
                    f = d.methods,
                    m = d.name
                  this.states.push({ options: v, methods: f, index: p, name: m })
                }
                return this.states
              },
            },
            {
              key: 'restoreInteractionCoords',
              value: function (s) {
                var p = s.interaction,
                  d = p.coords,
                  v = p.rect,
                  f = p.modification
                if (f.result) {
                  for (
                    var m = f.startDelta,
                      b = f.result,
                      S = b.delta,
                      T = b.rectDelta,
                      R = [
                        [d.start, m],
                        [d.cur, S],
                      ],
                      z = 0;
                    z < R.length;
                    z++
                  ) {
                    var I = El(R[z], 2),
                      F = I[0],
                      Z = I[1]
                    ;(F.page.x -= Z.x), (F.page.y -= Z.y), (F.client.x -= Z.x), (F.client.y -= Z.y)
                  }
                  ;(v.left -= T.left),
                    (v.right -= T.right),
                    (v.top -= T.top),
                    (v.bottom -= T.bottom)
                }
              },
            },
            {
              key: 'shouldDo',
              value: function (s, p, d, v) {
                return !(
                  !s ||
                  s.enabled === !1 ||
                  (v && !s.endOnly) ||
                  (s.endOnly && !p) ||
                  (d === 'start' && !s.setStart)
                )
              },
            },
            {
              key: 'copyFrom',
              value: function (s) {
                ;(this.startOffset = s.startOffset),
                  (this.startDelta = s.startDelta),
                  (this.edges = s.edges),
                  (this.states = s.states.map(function (p) {
                    return (0, an.default)(p)
                  })),
                  (this.result = xo(
                    (0, H.default)({}, s.result.coords),
                    (0, H.default)({}, s.result.rect)
                  ))
              },
            },
            {
              key: 'destroy',
              value: function () {
                for (var s in this) this[s] = null
              },
            },
          ]) && Np(i.prototype, a),
          n
        )
      })()
      function xo(n, i) {
        return {
          rect: i,
          coords: n,
          delta: { x: 0, y: 0 },
          rectDelta: { left: 0, right: 0, top: 0, bottom: 0 },
          eventProps: [],
          changed: !0,
        }
      }
      c(xo, 'Pe')
      function Ol(n, i) {
        return n
          ? { left: i.x - n.left, top: i.y - n.top, right: n.right - i.x, bottom: n.bottom - i.y }
          : { left: 0, top: 0, right: 0, bottom: 0 }
      }
      c(Ol, 'Oe'), (sn.default = Rp)
      var ie = {}
      function Eo(n) {
        var i = n.iEvent,
          a = n.interaction.modification.result
        a && (i.modifiers = a.eventProps)
      }
      c(Eo, 'Ee'),
        Object.defineProperty(ie, '__esModule', { value: !0 }),
        (ie.makeModifier = function (n, i) {
          var a = n.defaults,
            s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop },
            p = c(function (d) {
              var v = d || {}
              for (var f in ((v.enabled = v.enabled !== !1), a)) f in v || (v[f] = a[f])
              var m = {
                options: v,
                methods: s,
                name: i,
                enable: function () {
                  return (v.enabled = !0), m
                },
                disable: function () {
                  return (v.enabled = !1), m
                },
              }
              return m
            }, 'o')
          return i && typeof i == 'string' && ((p._defaults = a), (p._methods = s)), p
        }),
        (ie.addEventModifiers = Eo),
        (ie.default = void 0)
      var zp = {
        id: 'modifiers/base',
        before: ['actions'],
        install: function (n) {
          n.defaults.perAction.modifiers = []
        },
        listeners: {
          'interactions:new': function (n) {
            var i = n.interaction
            i.modification = new sn.default(i)
          },
          'interactions:before-action-start': function (n) {
            var i = n.interaction.modification
            i.start(n, n.interaction.coords.start.page),
              (n.interaction.edges = i.edges),
              i.applyToInteraction(n)
          },
          'interactions:before-action-move': function (n) {
            return n.interaction.modification.setAndApply(n)
          },
          'interactions:before-action-end': function (n) {
            return n.interaction.modification.beforeEnd(n)
          },
          'interactions:action-start': Eo,
          'interactions:action-move': Eo,
          'interactions:action-end': Eo,
          'interactions:after-action-start': function (n) {
            return n.interaction.modification.restoreInteractionCoords(n)
          },
          'interactions:after-action-move': function (n) {
            return n.interaction.modification.restoreInteractionCoords(n)
          },
          'interactions:stop': function (n) {
            return n.interaction.modification.stop(n)
          },
        },
      }
      ie.default = zp
      var mi = {}
      Object.defineProperty(mi, '__esModule', { value: !0 }),
        (mi.defaults = void 0),
        (mi.defaults = {
          base: { preventDefault: 'auto', deltaSource: 'page' },
          perAction: { enabled: !1, origin: { x: 0, y: 0 } },
          actions: {},
        })
      var gi = {}
      function Tl(n) {
        return (Tl =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(Tl, 'ke')
      function qp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(qp, 'Ie')
      function Cl(n, i) {
        return (Cl =
          Object.setPrototypeOf ||
          function (a, s) {
            return (a.__proto__ = s), a
          })(n, i)
      }
      c(Cl, 'De')
      function Lp(n, i) {
        return !i || (Tl(i) !== 'object' && typeof i != 'function') ? Tt(n) : i
      }
      c(Lp, 'Ae')
      function Tt(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return n
      }
      c(Tt, 'Re')
      function $a(n) {
        return ($a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (i) {
              return i.__proto__ || Object.getPrototypeOf(i)
            })(n)
      }
      c($a, 'ze')
      function _t(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(_t, 'Ce'),
        Object.defineProperty(gi, '__esModule', { value: !0 }),
        (gi.InteractEvent = void 0)
      var _l = (function (n) {
        ;(function (f, m) {
          if (typeof m != 'function' && m !== null)
            throw new TypeError('Super expression must either be null or a function')
          ;(f.prototype = Object.create(m && m.prototype, {
            constructor: { value: f, writable: !0, configurable: !0 },
          })),
            m && Cl(f, m)
        })(v, n)
        var i,
          a,
          s,
          p,
          d =
            ((s = v),
            (p = (function () {
              if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
                return !1
              if (typeof Proxy == 'function') return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                )
              } catch {
                return !1
              }
            })()),
            function () {
              var f,
                m = $a(s)
              if (p) {
                var b = $a(this).constructor
                f = Reflect.construct(m, arguments, b)
              } else f = m.apply(this, arguments)
              return Lp(this, f)
            })
        function v(f, m, b, S, T, R, z) {
          var I
          ;(function (kt, bt) {
            if (!(kt instanceof bt)) throw new TypeError('Cannot call a class as a function')
          })(this, v),
            _t(Tt((I = d.call(this, f))), 'target', void 0),
            _t(Tt(I), 'currentTarget', void 0),
            _t(Tt(I), 'relatedTarget', null),
            _t(Tt(I), 'screenX', void 0),
            _t(Tt(I), 'screenY', void 0),
            _t(Tt(I), 'button', void 0),
            _t(Tt(I), 'buttons', void 0),
            _t(Tt(I), 'ctrlKey', void 0),
            _t(Tt(I), 'shiftKey', void 0),
            _t(Tt(I), 'altKey', void 0),
            _t(Tt(I), 'metaKey', void 0),
            _t(Tt(I), 'page', void 0),
            _t(Tt(I), 'client', void 0),
            _t(Tt(I), 'delta', void 0),
            _t(Tt(I), 'rect', void 0),
            _t(Tt(I), 'x0', void 0),
            _t(Tt(I), 'y0', void 0),
            _t(Tt(I), 't0', void 0),
            _t(Tt(I), 'dt', void 0),
            _t(Tt(I), 'duration', void 0),
            _t(Tt(I), 'clientX0', void 0),
            _t(Tt(I), 'clientY0', void 0),
            _t(Tt(I), 'velocity', void 0),
            _t(Tt(I), 'speed', void 0),
            _t(Tt(I), 'swipe', void 0),
            _t(Tt(I), 'timeStamp', void 0),
            _t(Tt(I), 'axes', void 0),
            _t(Tt(I), 'preEnd', void 0),
            (T = T || f.element)
          var F = f.interactable,
            Z = ((F && F.options) || mi.defaults).deltaSource,
            W = (0, Dt.default)(F, T, b),
            et = S === 'start',
            st = S === 'end',
            dt = et ? Tt(I) : f.prevEvent,
            Et = et
              ? f.coords.start
              : st
              ? { page: dt.page, client: dt.client, timeStamp: f.coords.cur.timeStamp }
              : f.coords.cur
          return (
            (I.page = (0, H.default)({}, Et.page)),
            (I.client = (0, H.default)({}, Et.client)),
            (I.rect = (0, H.default)({}, f.rect)),
            (I.timeStamp = Et.timeStamp),
            st || ((I.page.x -= W.x), (I.page.y -= W.y), (I.client.x -= W.x), (I.client.y -= W.y)),
            (I.ctrlKey = m.ctrlKey),
            (I.altKey = m.altKey),
            (I.shiftKey = m.shiftKey),
            (I.metaKey = m.metaKey),
            (I.button = m.button),
            (I.buttons = m.buttons),
            (I.target = T),
            (I.currentTarget = T),
            (I.preEnd = R),
            (I.type = z || b + (S || '')),
            (I.interactable = F),
            (I.t0 = et ? f.pointers[f.pointers.length - 1].downTime : dt.t0),
            (I.x0 = f.coords.start.page.x - W.x),
            (I.y0 = f.coords.start.page.y - W.y),
            (I.clientX0 = f.coords.start.client.x - W.x),
            (I.clientY0 = f.coords.start.client.y - W.y),
            (I.delta = et || st ? { x: 0, y: 0 } : { x: I[Z].x - dt[Z].x, y: I[Z].y - dt[Z].y }),
            (I.dt = f.coords.delta.timeStamp),
            (I.duration = I.timeStamp - I.t0),
            (I.velocity = (0, H.default)({}, f.coords.velocity[Z])),
            (I.speed = (0, Ut.default)(I.velocity.x, I.velocity.y)),
            (I.swipe = st || S === 'inertiastart' ? I.getSwipe() : null),
            I
          )
        }
        return (
          c(v, 'a'),
          (i = v),
          (a = [
            {
              key: 'getSwipe',
              value: function () {
                var f = this._interaction
                if (f.prevEvent.speed < 600 || this.timeStamp - f.prevEvent.timeStamp > 150)
                  return null
                var m = (180 * Math.atan2(f.prevEvent.velocityY, f.prevEvent.velocityX)) / Math.PI
                m < 0 && (m += 360)
                var b = 112.5 <= m && m < 247.5,
                  S = 202.5 <= m && m < 337.5
                return {
                  up: S,
                  down: !S && 22.5 <= m && m < 157.5,
                  left: b,
                  right: !b && (292.5 <= m || m < 67.5),
                  angle: m,
                  speed: f.prevEvent.speed,
                  velocity: { x: f.prevEvent.velocityX, y: f.prevEvent.velocityY },
                }
              },
            },
            { key: 'preventDefault', value: function () {} },
            {
              key: 'stopImmediatePropagation',
              value: function () {
                this.immediatePropagationStopped = this.propagationStopped = !0
              },
            },
            {
              key: 'stopPropagation',
              value: function () {
                this.propagationStopped = !0
              },
            },
          ]) && qp(i.prototype, a),
          v
        )
      })(Ae.BaseEvent)
      ;(gi.InteractEvent = _l),
        Object.defineProperties(_l.prototype, {
          pageX: {
            get: function () {
              return this.page.x
            },
            set: function (n) {
              this.page.x = n
            },
          },
          pageY: {
            get: function () {
              return this.page.y
            },
            set: function (n) {
              this.page.y = n
            },
          },
          clientX: {
            get: function () {
              return this.client.x
            },
            set: function (n) {
              this.client.x = n
            },
          },
          clientY: {
            get: function () {
              return this.client.y
            },
            set: function (n) {
              this.client.y = n
            },
          },
          dx: {
            get: function () {
              return this.delta.x
            },
            set: function (n) {
              this.delta.x = n
            },
          },
          dy: {
            get: function () {
              return this.delta.y
            },
            set: function (n) {
              this.delta.y = n
            },
          },
          velocityX: {
            get: function () {
              return this.velocity.x
            },
            set: function (n) {
              this.velocity.x = n
            },
          },
          velocityY: {
            get: function () {
              return this.velocity.y
            },
            set: function (n) {
              this.velocity.y = n
            },
          },
        })
      var yi = {}
      function bi(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(bi, 'Ye'),
        Object.defineProperty(yi, '__esModule', { value: !0 }),
        (yi.PointerInfo = void 0),
        (yi.PointerInfo = c(function n(i, a, s, p, d) {
          ;(function (v, f) {
            if (!(v instanceof f)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            bi(this, 'id', void 0),
            bi(this, 'pointer', void 0),
            bi(this, 'event', void 0),
            bi(this, 'downTime', void 0),
            bi(this, 'downTarget', void 0),
            (this.id = i),
            (this.pointer = a),
            (this.event = s),
            (this.downTime = p),
            (this.downTarget = d)
        }, 't'))
      var So,
        Oo,
        Se = {}
      function jp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(jp, 'Ue')
      function qt(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(qt, 'Ve'),
        Object.defineProperty(Se, '__esModule', { value: !0 }),
        Object.defineProperty(Se, 'PointerInfo', {
          enumerable: !0,
          get: function () {
            return yi.PointerInfo
          },
        }),
        (Se.default = Se.Interaction = Se._ProxyMethods = Se._ProxyValues = void 0),
        (Se._ProxyValues = So),
        (function (n) {
          ;(n.interactable = ''),
            (n.element = ''),
            (n.prepared = ''),
            (n.pointerIsDown = ''),
            (n.pointerWasMoved = ''),
            (n._proxy = '')
        })(So || (Se._ProxyValues = So = {})),
        (Se._ProxyMethods = Oo),
        (function (n) {
          ;(n.start = ''), (n.move = ''), (n.end = ''), (n.stop = ''), (n.interacting = '')
        })(Oo || (Se._ProxyMethods = Oo = {}))
      var Gp = 0,
        Pl = (function () {
          function n(s) {
            var p = this,
              d = s.pointerType,
              v = s.scopeFire
            ;(function (R, z) {
              if (!(R instanceof z)) throw new TypeError('Cannot call a class as a function')
            })(this, n),
              qt(this, 'interactable', null),
              qt(this, 'element', null),
              qt(this, 'rect', void 0),
              qt(this, '_rects', void 0),
              qt(this, 'edges', void 0),
              qt(this, '_scopeFire', void 0),
              qt(this, 'prepared', { name: null, axis: null, edges: null }),
              qt(this, 'pointerType', void 0),
              qt(this, 'pointers', []),
              qt(this, 'downEvent', null),
              qt(this, 'downPointer', {}),
              qt(this, '_latestPointer', { pointer: null, event: null, eventTarget: null }),
              qt(this, 'prevEvent', null),
              qt(this, 'pointerIsDown', !1),
              qt(this, 'pointerWasMoved', !1),
              qt(this, '_interacting', !1),
              qt(this, '_ending', !1),
              qt(this, '_stopped', !0),
              qt(this, '_proxy', null),
              qt(this, 'simulation', null),
              qt(
                this,
                'doMove',
                (0, ke.warnOnce)(function (R) {
                  this.move(R)
                }, 'The interaction.doMove() method has been renamed to interaction.move()')
              ),
              qt(this, 'coords', {
                start: K.newCoords(),
                prev: K.newCoords(),
                cur: K.newCoords(),
                delta: K.newCoords(),
                velocity: K.newCoords(),
              }),
              qt(this, '_id', Gp++),
              (this._scopeFire = v),
              (this.pointerType = d)
            var f = this
            this._proxy = {}
            var m = c(function (R) {
              Object.defineProperty(p._proxy, R, {
                get: function () {
                  return f[R]
                },
              })
            }, 'a')
            for (var b in So) m(b)
            var S = c(function (R) {
              Object.defineProperty(p._proxy, R, {
                value: function () {
                  return f[R].apply(f, arguments)
                },
              })
            }, 'l')
            for (var T in Oo) S(T)
            this._scopeFire('interactions:new', { interaction: this })
          }
          c(n, 't')
          var i, a
          return (
            (i = n),
            (a = [
              {
                key: 'pointerMoveTolerance',
                get: function () {
                  return 1
                },
              },
              {
                key: 'pointerDown',
                value: function (s, p, d) {
                  var v = this.updatePointer(s, p, d, !0),
                    f = this.pointers[v]
                  this._scopeFire('interactions:down', {
                    pointer: s,
                    event: p,
                    eventTarget: d,
                    pointerIndex: v,
                    pointerInfo: f,
                    type: 'down',
                    interaction: this,
                  })
                },
              },
              {
                key: 'start',
                value: function (s, p, d) {
                  return (
                    !(
                      this.interacting() ||
                      !this.pointerIsDown ||
                      this.pointers.length < (s.name === 'gesture' ? 2 : 1) ||
                      !p.options[s.name].enabled
                    ) &&
                    ((0, ke.copyAction)(this.prepared, s),
                    (this.interactable = p),
                    (this.element = d),
                    (this.rect = p.getRect(d)),
                    (this.edges = this.prepared.edges
                      ? (0, H.default)({}, this.prepared.edges)
                      : { left: !0, right: !0, top: !0, bottom: !0 }),
                    (this._stopped = !1),
                    (this._interacting =
                      this._doPhase({ interaction: this, event: this.downEvent, phase: 'start' }) &&
                      !this._stopped),
                    this._interacting)
                  )
                },
              },
              {
                key: 'pointerMove',
                value: function (s, p, d) {
                  this.simulation ||
                    (this.modification && this.modification.endResult) ||
                    this.updatePointer(s, p, d, !1)
                  var v,
                    f,
                    m =
                      this.coords.cur.page.x === this.coords.prev.page.x &&
                      this.coords.cur.page.y === this.coords.prev.page.y &&
                      this.coords.cur.client.x === this.coords.prev.client.x &&
                      this.coords.cur.client.y === this.coords.prev.client.y
                  this.pointerIsDown &&
                    !this.pointerWasMoved &&
                    ((v = this.coords.cur.client.x - this.coords.start.client.x),
                    (f = this.coords.cur.client.y - this.coords.start.client.y),
                    (this.pointerWasMoved = (0, Ut.default)(v, f) > this.pointerMoveTolerance))
                  var b = this.getPointerIndex(s),
                    S = {
                      pointer: s,
                      pointerIndex: b,
                      pointerInfo: this.pointers[b],
                      event: p,
                      type: 'move',
                      eventTarget: d,
                      dx: v,
                      dy: f,
                      duplicate: m,
                      interaction: this,
                    }
                  m || K.setCoordVelocity(this.coords.velocity, this.coords.delta),
                    this._scopeFire('interactions:move', S),
                    m ||
                      this.simulation ||
                      (this.interacting() && ((S.type = null), this.move(S)),
                      this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur))
                },
              },
              {
                key: 'move',
                value: function (s) {
                  ;(s && s.event) || K.setZeroCoords(this.coords.delta),
                    ((s = (0, H.default)(
                      {
                        pointer: this._latestPointer.pointer,
                        event: this._latestPointer.event,
                        eventTarget: this._latestPointer.eventTarget,
                        interaction: this,
                      },
                      s || {}
                    )).phase = 'move'),
                    this._doPhase(s)
                },
              },
              {
                key: 'pointerUp',
                value: function (s, p, d, v) {
                  var f = this.getPointerIndex(s)
                  f === -1 && (f = this.updatePointer(s, p, d, !1))
                  var m = /cancel$/i.test(p.type) ? 'cancel' : 'up'
                  this._scopeFire('interactions:'.concat(m), {
                    pointer: s,
                    pointerIndex: f,
                    pointerInfo: this.pointers[f],
                    event: p,
                    eventTarget: d,
                    type: m,
                    curEventTarget: v,
                    interaction: this,
                  }),
                    this.simulation || this.end(p),
                    this.removePointer(s, p)
                },
              },
              {
                key: 'documentBlur',
                value: function (s) {
                  this.end(s),
                    this._scopeFire('interactions:blur', {
                      event: s,
                      type: 'blur',
                      interaction: this,
                    })
                },
              },
              {
                key: 'end',
                value: function (s) {
                  var p
                  ;(this._ending = !0),
                    (s = s || this._latestPointer.event),
                    this.interacting() &&
                      (p = this._doPhase({ event: s, interaction: this, phase: 'end' })),
                    (this._ending = !1),
                    p === !0 && this.stop()
                },
              },
              {
                key: 'currentAction',
                value: function () {
                  return this._interacting ? this.prepared.name : null
                },
              },
              {
                key: 'interacting',
                value: function () {
                  return this._interacting
                },
              },
              {
                key: 'stop',
                value: function () {
                  this._scopeFire('interactions:stop', { interaction: this }),
                    (this.interactable = this.element = null),
                    (this._interacting = !1),
                    (this._stopped = !0),
                    (this.prepared.name = this.prevEvent = null)
                },
              },
              {
                key: 'getPointerIndex',
                value: function (s) {
                  var p = K.getPointerId(s)
                  return this.pointerType === 'mouse' || this.pointerType === 'pen'
                    ? this.pointers.length - 1
                    : xt.findIndex(this.pointers, function (d) {
                        return d.id === p
                      })
                },
              },
              {
                key: 'getPointerInfo',
                value: function (s) {
                  return this.pointers[this.getPointerIndex(s)]
                },
              },
              {
                key: 'updatePointer',
                value: function (s, p, d, v) {
                  var f = K.getPointerId(s),
                    m = this.getPointerIndex(s),
                    b = this.pointers[m]
                  return (
                    (v = v !== !1 && (v || /(down|start)$/i.test(p.type))),
                    b
                      ? (b.pointer = s)
                      : ((b = new yi.PointerInfo(f, s, p, null, null)),
                        (m = this.pointers.length),
                        this.pointers.push(b)),
                    K.setCoords(
                      this.coords.cur,
                      this.pointers.map(function (S) {
                        return S.pointer
                      }),
                      this._now()
                    ),
                    K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur),
                    v &&
                      ((this.pointerIsDown = !0),
                      (b.downTime = this.coords.cur.timeStamp),
                      (b.downTarget = d),
                      K.pointerExtend(this.downPointer, s),
                      this.interacting() ||
                        (K.copyCoords(this.coords.start, this.coords.cur),
                        K.copyCoords(this.coords.prev, this.coords.cur),
                        (this.downEvent = p),
                        (this.pointerWasMoved = !1))),
                    this._updateLatestPointer(s, p, d),
                    this._scopeFire('interactions:update-pointer', {
                      pointer: s,
                      event: p,
                      eventTarget: d,
                      down: v,
                      pointerInfo: b,
                      pointerIndex: m,
                      interaction: this,
                    }),
                    m
                  )
                },
              },
              {
                key: 'removePointer',
                value: function (s, p) {
                  var d = this.getPointerIndex(s)
                  if (d !== -1) {
                    var v = this.pointers[d]
                    this._scopeFire('interactions:remove-pointer', {
                      pointer: s,
                      event: p,
                      eventTarget: null,
                      pointerIndex: d,
                      pointerInfo: v,
                      interaction: this,
                    }),
                      this.pointers.splice(d, 1),
                      (this.pointerIsDown = !1)
                  }
                },
              },
              {
                key: '_updateLatestPointer',
                value: function (s, p, d) {
                  ;(this._latestPointer.pointer = s),
                    (this._latestPointer.event = p),
                    (this._latestPointer.eventTarget = d)
                },
              },
              {
                key: 'destroy',
                value: function () {
                  ;(this._latestPointer.pointer = null),
                    (this._latestPointer.event = null),
                    (this._latestPointer.eventTarget = null)
                },
              },
              {
                key: '_createPreparedEvent',
                value: function (s, p, d, v) {
                  return new gi.InteractEvent(this, s, this.prepared.name, p, this.element, d, v)
                },
              },
              {
                key: '_fireEvent',
                value: function (s) {
                  this.interactable.fire(s),
                    (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) &&
                      (this.prevEvent = s)
                },
              },
              {
                key: '_doPhase',
                value: function (s) {
                  var p = s.event,
                    d = s.phase,
                    v = s.preEnd,
                    f = s.type,
                    m = this.rect
                  if (
                    (m &&
                      d === 'move' &&
                      (ct.addEdges(
                        this.edges,
                        m,
                        this.coords.delta[this.interactable.options.deltaSource]
                      ),
                      (m.width = m.right - m.left),
                      (m.height = m.bottom - m.top)),
                    this._scopeFire('interactions:before-action-'.concat(d), s) === !1)
                  )
                    return !1
                  var b = (s.iEvent = this._createPreparedEvent(p, d, v, f))
                  return (
                    this._scopeFire('interactions:action-'.concat(d), s),
                    d === 'start' && (this.prevEvent = b),
                    this._fireEvent(b),
                    this._scopeFire('interactions:after-action-'.concat(d), s),
                    !0
                  )
                },
              },
              {
                key: '_now',
                value: function () {
                  return Date.now()
                },
              },
            ]) && jp(i.prototype, a),
            n
          )
        })()
      Se.Interaction = Pl
      var $p = Pl
      Se.default = $p
      var un = {}
      function Al(n) {
        n.pointerIsDown &&
          (Fa(n.coords.cur, n.offset.total), (n.offset.pending.x = 0), (n.offset.pending.y = 0))
      }
      c(Al, 'He')
      function Ml(n) {
        Ba(n.interaction)
      }
      c(Ml, 'Ke')
      function Ba(n) {
        if (
          !(function (a) {
            return !(!a.offset.pending.x && !a.offset.pending.y)
          })(n)
        )
          return !1
        var i = n.offset.pending
        return (
          Fa(n.coords.cur, i),
          Fa(n.coords.delta, i),
          ct.addEdges(n.edges, n.rect, i),
          (i.x = 0),
          (i.y = 0),
          !0
        )
      }
      c(Ba, 'Ze')
      function Bp(n) {
        var i = n.x,
          a = n.y
        ;(this.offset.pending.x += i),
          (this.offset.pending.y += a),
          (this.offset.total.x += i),
          (this.offset.total.y += a)
      }
      c(Bp, 'Je')
      function Fa(n, i) {
        var a = n.page,
          s = n.client,
          p = i.x,
          d = i.y
        ;(a.x += p), (a.y += d), (s.x += p), (s.y += d)
      }
      c(Fa, 'Qe'),
        Object.defineProperty(un, '__esModule', { value: !0 }),
        (un.addTotal = Al),
        (un.applyPending = Ba),
        (un.default = void 0),
        (Se._ProxyMethods.offsetBy = '')
      var Fp = {
        id: 'offset',
        before: ['modifiers', 'pointer-events', 'actions', 'inertia'],
        install: function (n) {
          n.Interaction.prototype.offsetBy = Bp
        },
        listeners: {
          'interactions:new': function (n) {
            n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } }
          },
          'interactions:update-pointer': function (n) {
            return Al(n.interaction)
          },
          'interactions:before-action-start': Ml,
          'interactions:before-action-move': Ml,
          'interactions:before-action-end': function (n) {
            var i = n.interaction
            if (Ba(i)) return i.move({ offset: !0 }), i.end(), !1
          },
          'interactions:stop': function (n) {
            var i = n.interaction
            ;(i.offset.total.x = 0),
              (i.offset.total.y = 0),
              (i.offset.pending.x = 0),
              (i.offset.pending.y = 0)
          },
        },
      }
      un.default = Fp
      var qn = {}
      function Wp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Wp, 'nn')
      function Zt(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(Zt, 'rn'),
        Object.defineProperty(qn, '__esModule', { value: !0 }),
        (qn.default = qn.InertiaState = void 0)
      var Il = (function () {
        function n(s) {
          ;(function (p, d) {
            if (!(p instanceof d)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            Zt(this, 'active', !1),
            Zt(this, 'isModified', !1),
            Zt(this, 'smoothEnd', !1),
            Zt(this, 'allowResume', !1),
            Zt(this, 'modification', void 0),
            Zt(this, 'modifierCount', 0),
            Zt(this, 'modifierArg', void 0),
            Zt(this, 'startCoords', void 0),
            Zt(this, 't0', 0),
            Zt(this, 'v0', 0),
            Zt(this, 'te', 0),
            Zt(this, 'targetOffset', void 0),
            Zt(this, 'modifiedOffset', void 0),
            Zt(this, 'currentOffset', void 0),
            Zt(this, 'lambda_v0', 0),
            Zt(this, 'one_ve_v0', 0),
            Zt(this, 'timeout', void 0),
            Zt(this, 'interaction', void 0),
            (this.interaction = s)
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            {
              key: 'start',
              value: function (s) {
                var p = this.interaction,
                  d = To(p)
                if (!d || !d.enabled) return !1
                var v = p.coords.velocity.client,
                  f = (0, Ut.default)(v.x, v.y),
                  m = this.modification || (this.modification = new sn.default(p))
                if (
                  (m.copyFrom(p.modification),
                  (this.t0 = p._now()),
                  (this.allowResume = d.allowResume),
                  (this.v0 = f),
                  (this.currentOffset = { x: 0, y: 0 }),
                  (this.startCoords = p.coords.cur.page),
                  (this.modifierArg = m.fillArg({
                    pageCoords: this.startCoords,
                    preEnd: !0,
                    phase: 'inertiastart',
                  })),
                  this.t0 - p.coords.cur.timeStamp < 50 && f > d.minSpeed && f > d.endSpeed)
                )
                  this.startInertia()
                else {
                  if (((m.result = m.setAll(this.modifierArg)), !m.result.changed)) return !1
                  this.startSmoothEnd()
                }
                return (
                  (p.modification.result.rect = null),
                  p.offsetBy(this.targetOffset),
                  p._doPhase({ interaction: p, event: s, phase: 'inertiastart' }),
                  p.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }),
                  (p.modification.result.rect = null),
                  (this.active = !0),
                  (p.simulation = this),
                  !0
                )
              },
            },
            {
              key: 'startInertia',
              value: function () {
                var s = this,
                  p = this.interaction.coords.velocity.client,
                  d = To(this.interaction),
                  v = d.resistance,
                  f = -Math.log(d.endSpeed / this.v0) / v
                ;(this.targetOffset = { x: (p.x - f) / v, y: (p.y - f) / v }),
                  (this.te = f),
                  (this.lambda_v0 = v / this.v0),
                  (this.one_ve_v0 = 1 - d.endSpeed / this.v0)
                var m = this.modification,
                  b = this.modifierArg
                ;(b.pageCoords = {
                  x: this.startCoords.x + this.targetOffset.x,
                  y: this.startCoords.y + this.targetOffset.y,
                }),
                  (m.result = m.setAll(b)),
                  m.result.changed &&
                    ((this.isModified = !0),
                    (this.modifiedOffset = {
                      x: this.targetOffset.x + m.result.delta.x,
                      y: this.targetOffset.y + m.result.delta.y,
                    })),
                  this.onNextFrame(function () {
                    return s.inertiaTick()
                  })
              },
            },
            {
              key: 'startSmoothEnd',
              value: function () {
                var s = this
                ;(this.smoothEnd = !0),
                  (this.isModified = !0),
                  (this.targetOffset = {
                    x: this.modification.result.delta.x,
                    y: this.modification.result.delta.y,
                  }),
                  this.onNextFrame(function () {
                    return s.smoothEndTick()
                  })
              },
            },
            {
              key: 'onNextFrame',
              value: function (s) {
                var p = this
                this.timeout = Ie.default.request(function () {
                  p.active && s()
                })
              },
            },
            {
              key: 'inertiaTick',
              value: function () {
                var s,
                  p,
                  d,
                  v,
                  f,
                  m = this,
                  b = this.interaction,
                  S = To(b).resistance,
                  T = (b._now() - this.t0) / 1e3
                if (T < this.te) {
                  var R,
                    z = 1 - (Math.exp(-S * T) - this.lambda_v0) / this.one_ve_v0
                  this.isModified
                    ? ((s = this.targetOffset.x),
                      (p = this.targetOffset.y),
                      (d = this.modifiedOffset.x),
                      (v = this.modifiedOffset.y),
                      (R = { x: Dl((f = z), 0, s, d), y: Dl(f, 0, p, v) }))
                    : (R = { x: this.targetOffset.x * z, y: this.targetOffset.y * z })
                  var I = { x: R.x - this.currentOffset.x, y: R.y - this.currentOffset.y }
                  ;(this.currentOffset.x += I.x),
                    (this.currentOffset.y += I.y),
                    b.offsetBy(I),
                    b.move(),
                    this.onNextFrame(function () {
                      return m.inertiaTick()
                    })
                } else
                  b.offsetBy({
                    x: this.modifiedOffset.x - this.currentOffset.x,
                    y: this.modifiedOffset.y - this.currentOffset.y,
                  }),
                    this.end()
              },
            },
            {
              key: 'smoothEndTick',
              value: function () {
                var s = this,
                  p = this.interaction,
                  d = p._now() - this.t0,
                  v = To(p).smoothEndDuration
                if (d < v) {
                  var f = {
                      x: kl(d, 0, this.targetOffset.x, v),
                      y: kl(d, 0, this.targetOffset.y, v),
                    },
                    m = { x: f.x - this.currentOffset.x, y: f.y - this.currentOffset.y }
                  ;(this.currentOffset.x += m.x),
                    (this.currentOffset.y += m.y),
                    p.offsetBy(m),
                    p.move({ skipModifiers: this.modifierCount }),
                    this.onNextFrame(function () {
                      return s.smoothEndTick()
                    })
                } else
                  p.offsetBy({
                    x: this.targetOffset.x - this.currentOffset.x,
                    y: this.targetOffset.y - this.currentOffset.y,
                  }),
                    this.end()
              },
            },
            {
              key: 'resume',
              value: function (s) {
                var p = s.pointer,
                  d = s.event,
                  v = s.eventTarget,
                  f = this.interaction
                f.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }),
                  f.updatePointer(p, d, v, !0),
                  f._doPhase({ interaction: f, event: d, phase: 'resume' }),
                  (0, K.copyCoords)(f.coords.prev, f.coords.cur),
                  this.stop()
              },
            },
            {
              key: 'end',
              value: function () {
                this.interaction.move(), this.interaction.end(), this.stop()
              },
            },
            {
              key: 'stop',
              value: function () {
                ;(this.active = this.smoothEnd = !1),
                  (this.interaction.simulation = null),
                  Ie.default.cancel(this.timeout)
              },
            },
          ]) && Wp(i.prototype, a),
          n
        )
      })()
      function To(n) {
        var i = n.interactable,
          a = n.prepared
        return i && i.options && a.name && i.options[a.name].inertia
      }
      c(To, 'an')
      function Dl(n, i, a, s) {
        var p = 1 - n
        return p * p * i + 2 * p * n * a + n * n * s
      }
      c(Dl, 'sn')
      function kl(n, i, a, s) {
        return -a * (n /= s) * (n - 2) + i
      }
      c(kl, 'ln'), (qn.InertiaState = Il)
      var Up = {
        id: 'inertia',
        before: ['modifiers', 'actions'],
        install: function (n) {
          var i = n.defaults
          n.usePlugin(un.default),
            n.usePlugin(ie.default),
            (n.actions.phases.inertiastart = !0),
            (n.actions.phases.resume = !0),
            (i.perAction.inertia = {
              enabled: !1,
              resistance: 10,
              minSpeed: 100,
              endSpeed: 10,
              allowResume: !0,
              smoothEndDuration: 300,
            })
        },
        listeners: {
          'interactions:new': function (n) {
            var i = n.interaction
            i.inertia = new Il(i)
          },
          'interactions:before-action-end': function (n) {
            var i = n.interaction,
              a = n.event
            return (!i._interacting || i.simulation || !i.inertia.start(a)) && null
          },
          'interactions:down': function (n) {
            var i = n.interaction,
              a = n.eventTarget,
              s = i.inertia
            if (s.active)
              for (var p = a; l.default.element(p); ) {
                if (p === i.element) {
                  s.resume(n)
                  break
                }
                p = D.parentNode(p)
              }
          },
          'interactions:stop': function (n) {
            var i = n.interaction.inertia
            i.active && i.stop()
          },
          'interactions:before-action-resume': function (n) {
            var i = n.interaction.modification
            i.stop(n), i.start(n, n.interaction.coords.cur.page), i.applyToInteraction(n)
          },
          'interactions:before-action-inertiastart': function (n) {
            return n.interaction.modification.setAndApply(n)
          },
          'interactions:action-resume': ie.addEventModifiers,
          'interactions:action-inertiastart': ie.addEventModifiers,
          'interactions:after-action-inertiastart': function (n) {
            return n.interaction.modification.restoreInteractionCoords(n)
          },
          'interactions:after-action-resume': function (n) {
            return n.interaction.modification.restoreInteractionCoords(n)
          },
        },
      }
      qn.default = Up
      var wi = {}
      function Hp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Hp, 'fn')
      function xi(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(xi, 'dn')
      function Nl(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          if (n.immediatePropagationStopped) break
          s(n)
        }
      }
      c(Nl, 'pn'), Object.defineProperty(wi, '__esModule', { value: !0 }), (wi.Eventable = void 0)
      var Vp = (function () {
        function n(s) {
          ;(function (p, d) {
            if (!(p instanceof d)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            xi(this, 'options', void 0),
            xi(this, 'types', {}),
            xi(this, 'propagationStopped', !1),
            xi(this, 'immediatePropagationStopped', !1),
            xi(this, 'global', void 0),
            (this.options = (0, H.default)({}, s || {}))
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            {
              key: 'fire',
              value: function (s) {
                var p,
                  d = this.global
                ;(p = this.types[s.type]) && Nl(s, p),
                  !s.propagationStopped && d && (p = d[s.type]) && Nl(s, p)
              },
            },
            {
              key: 'on',
              value: function (s, p) {
                var d = (0, ht.default)(s, p)
                for (s in d) this.types[s] = xt.merge(this.types[s] || [], d[s])
              },
            },
            {
              key: 'off',
              value: function (s, p) {
                var d = (0, ht.default)(s, p)
                for (s in d) {
                  var v = this.types[s]
                  if (v && v.length)
                    for (var f = 0; f < d[s].length; f++) {
                      var m = d[s][f],
                        b = v.indexOf(m)
                      b !== -1 && v.splice(b, 1)
                    }
                }
              },
            },
            {
              key: 'getRect',
              value: function (s) {
                return null
              },
            },
          ]) && Hp(i.prototype, a),
          n
        )
      })()
      wi.Eventable = Vp
      var Ei = {}
      Object.defineProperty(Ei, '__esModule', { value: !0 }),
        (Ei.default = function (n, i) {
          if (i.phaselessTypes[n]) return !0
          for (var a in i.map) if (n.indexOf(a) === 0 && n.substr(a.length) in i.phases) return !0
          return !1
        })
      var Wa = {}
      Object.defineProperty(Wa, '__esModule', { value: !0 }),
        (Wa.createInteractStatic = function (n) {
          var i = c(function a(s, p) {
            var d = n.interactables.get(s, p)
            return d || ((d = n.interactables.new(s, p)).events.global = a.globalEvents), d
          }, 'e')
          return (
            (i.getPointerAverage = K.pointerAverage),
            (i.getTouchBBox = K.touchBBox),
            (i.getTouchDistance = K.touchDistance),
            (i.getTouchAngle = K.touchAngle),
            (i.getElementRect = D.getElementRect),
            (i.getElementClientRect = D.getElementClientRect),
            (i.matchesSelector = D.matchesSelector),
            (i.closest = D.closest),
            (i.globalEvents = {}),
            (i.version = '1.10.11'),
            (i.scope = n),
            (i.use = function (a, s) {
              return this.scope.usePlugin(a, s), this
            }),
            (i.isSet = function (a, s) {
              return !!this.scope.interactables.get(a, s && s.context)
            }),
            (i.on = (0, ke.warnOnce)(function (a, s, p) {
              if (
                (l.default.string(a) && a.search(' ') !== -1 && (a = a.trim().split(/ +/)),
                l.default.array(a))
              ) {
                for (var d = 0; d < a.length; d++) {
                  var v = a[d]
                  this.on(v, s, p)
                }
                return this
              }
              if (l.default.object(a)) {
                for (var f in a) this.on(f, a[f], s)
                return this
              }
              return (
                (0, Ei.default)(a, this.scope.actions)
                  ? this.globalEvents[a]
                    ? this.globalEvents[a].push(s)
                    : (this.globalEvents[a] = [s])
                  : this.scope.events.add(this.scope.document, a, s, { options: p }),
                this
              )
            }, 'The interact.on() method is being deprecated')),
            (i.off = (0, ke.warnOnce)(function (a, s, p) {
              if (
                (l.default.string(a) && a.search(' ') !== -1 && (a = a.trim().split(/ +/)),
                l.default.array(a))
              ) {
                for (var d = 0; d < a.length; d++) {
                  var v = a[d]
                  this.off(v, s, p)
                }
                return this
              }
              if (l.default.object(a)) {
                for (var f in a) this.off(f, a[f], s)
                return this
              }
              var m
              return (
                (0, Ei.default)(a, this.scope.actions)
                  ? a in this.globalEvents &&
                    (m = this.globalEvents[a].indexOf(s)) !== -1 &&
                    this.globalEvents[a].splice(m, 1)
                  : this.scope.events.remove(this.scope.document, a, s, p),
                this
              )
            }, 'The interact.off() method is being deprecated')),
            (i.debug = function () {
              return this.scope
            }),
            (i.supportsTouch = function () {
              return q.default.supportsTouch
            }),
            (i.supportsPointerEvent = function () {
              return q.default.supportsPointerEvent
            }),
            (i.stop = function () {
              for (var a = 0; a < this.scope.interactions.list.length; a++)
                this.scope.interactions.list[a].stop()
              return this
            }),
            (i.pointerMoveTolerance = function (a) {
              return l.default.number(a)
                ? ((this.scope.interactions.pointerMoveTolerance = a), this)
                : this.scope.interactions.pointerMoveTolerance
            }),
            (i.addDocument = function (a, s) {
              this.scope.addDocument(a, s)
            }),
            (i.removeDocument = function (a) {
              this.scope.removeDocument(a)
            }),
            i
          )
        })
      var Co = {}
      function Yp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Yp, 'mn')
      function vr(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(vr, 'bn'),
        Object.defineProperty(Co, '__esModule', { value: !0 }),
        (Co.Interactable = void 0)
      var Xp = (function () {
        function n(s, p, d, v) {
          ;(function (f, m) {
            if (!(f instanceof m)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            vr(this, 'options', void 0),
            vr(this, '_actions', void 0),
            vr(this, 'target', void 0),
            vr(this, 'events', new wi.Eventable()),
            vr(this, '_context', void 0),
            vr(this, '_win', void 0),
            vr(this, '_doc', void 0),
            vr(this, '_scopeEvents', void 0),
            vr(this, '_rectChecker', void 0),
            (this._actions = p.actions),
            (this.target = s),
            (this._context = p.context || d),
            (this._win = (0, e.getWindow)((0, D.trySelector)(s) ? this._context : s)),
            (this._doc = this._win.document),
            (this._scopeEvents = v),
            this.set(p)
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            {
              key: '_defaults',
              get: function () {
                return { base: {}, perAction: {}, actions: {} }
              },
            },
            {
              key: 'setOnEvents',
              value: function (s, p) {
                return (
                  l.default.func(p.onstart) && this.on(''.concat(s, 'start'), p.onstart),
                  l.default.func(p.onmove) && this.on(''.concat(s, 'move'), p.onmove),
                  l.default.func(p.onend) && this.on(''.concat(s, 'end'), p.onend),
                  l.default.func(p.oninertiastart) &&
                    this.on(''.concat(s, 'inertiastart'), p.oninertiastart),
                  this
                )
              },
            },
            {
              key: 'updatePerActionListeners',
              value: function (s, p, d) {
                ;(l.default.array(p) || l.default.object(p)) && this.off(s, p),
                  (l.default.array(d) || l.default.object(d)) && this.on(s, d)
              },
            },
            {
              key: 'setPerAction',
              value: function (s, p) {
                var d = this._defaults
                for (var v in p) {
                  var f = v,
                    m = this.options[s],
                    b = p[f]
                  f === 'listeners' && this.updatePerActionListeners(s, m.listeners, b),
                    l.default.array(b)
                      ? (m[f] = xt.from(b))
                      : l.default.plainObject(b)
                      ? ((m[f] = (0, H.default)(m[f] || {}, (0, an.default)(b))),
                        l.default.object(d.perAction[f]) &&
                          'enabled' in d.perAction[f] &&
                          (m[f].enabled = b.enabled !== !1))
                      : l.default.bool(b) && l.default.object(d.perAction[f])
                      ? (m[f].enabled = b)
                      : (m[f] = b)
                }
              },
            },
            {
              key: 'getRect',
              value: function (s) {
                return (
                  (s = s || (l.default.element(this.target) ? this.target : null)),
                  l.default.string(this.target) &&
                    (s = s || this._context.querySelector(this.target)),
                  (0, D.getElementRect)(s)
                )
              },
            },
            {
              key: 'rectChecker',
              value: function (s) {
                var p = this
                return l.default.func(s)
                  ? ((this._rectChecker = s),
                    (this.getRect = function (d) {
                      var v = (0, H.default)({}, p._rectChecker(d))
                      return (
                        'width' in v ||
                          ((v.width = v.right - v.left), (v.height = v.bottom - v.top)),
                        v
                      )
                    }),
                    this)
                  : s === null
                  ? (delete this.getRect, delete this._rectChecker, this)
                  : this.getRect
              },
            },
            {
              key: '_backCompatOption',
              value: function (s, p) {
                if ((0, D.trySelector)(p) || l.default.object(p)) {
                  for (var d in ((this.options[s] = p), this._actions.map)) this.options[d][s] = p
                  return this
                }
                return this.options[s]
              },
            },
            {
              key: 'origin',
              value: function (s) {
                return this._backCompatOption('origin', s)
              },
            },
            {
              key: 'deltaSource',
              value: function (s) {
                return s === 'page' || s === 'client'
                  ? ((this.options.deltaSource = s), this)
                  : this.options.deltaSource
              },
            },
            {
              key: 'context',
              value: function () {
                return this._context
              },
            },
            {
              key: 'inContext',
              value: function (s) {
                return this._context === s.ownerDocument || (0, D.nodeContains)(this._context, s)
              },
            },
            {
              key: 'testIgnoreAllow',
              value: function (s, p, d) {
                return !this.testIgnore(s.ignoreFrom, p, d) && this.testAllow(s.allowFrom, p, d)
              },
            },
            {
              key: 'testAllow',
              value: function (s, p, d) {
                return (
                  !s ||
                  (!!l.default.element(d) &&
                    (l.default.string(s)
                      ? (0, D.matchesUpTo)(d, s, p)
                      : !!l.default.element(s) && (0, D.nodeContains)(s, d)))
                )
              },
            },
            {
              key: 'testIgnore',
              value: function (s, p, d) {
                return (
                  !(!s || !l.default.element(d)) &&
                  (l.default.string(s)
                    ? (0, D.matchesUpTo)(d, s, p)
                    : !!l.default.element(s) && (0, D.nodeContains)(s, d))
                )
              },
            },
            {
              key: 'fire',
              value: function (s) {
                return this.events.fire(s), this
              },
            },
            {
              key: '_onOff',
              value: function (s, p, d, v) {
                l.default.object(p) && !l.default.array(p) && ((v = d), (d = null))
                var f = s === 'on' ? 'add' : 'remove',
                  m = (0, ht.default)(p, d)
                for (var b in m) {
                  b === 'wheel' && (b = q.default.wheelEvent)
                  for (var S = 0; S < m[b].length; S++) {
                    var T = m[b][S]
                    ;(0, Ei.default)(b, this._actions)
                      ? this.events[s](b, T)
                      : l.default.string(this.target)
                      ? this._scopeEvents[''.concat(f, 'Delegate')](
                          this.target,
                          this._context,
                          b,
                          T,
                          v
                        )
                      : this._scopeEvents[f](this.target, b, T, v)
                  }
                }
                return this
              },
            },
            {
              key: 'on',
              value: function (s, p, d) {
                return this._onOff('on', s, p, d)
              },
            },
            {
              key: 'off',
              value: function (s, p, d) {
                return this._onOff('off', s, p, d)
              },
            },
            {
              key: 'set',
              value: function (s) {
                var p = this._defaults
                for (var d in (l.default.object(s) || (s = {}),
                (this.options = (0, an.default)(p.base)),
                this._actions.methodDict)) {
                  var v = d,
                    f = this._actions.methodDict[v]
                  ;(this.options[v] = {}),
                    this.setPerAction(
                      v,
                      (0, H.default)((0, H.default)({}, p.perAction), p.actions[v])
                    ),
                    this[f](s[v])
                }
                for (var m in s) l.default.func(this[m]) && this[m](s[m])
                return this
              },
            },
            {
              key: 'unset',
              value: function () {
                if (l.default.string(this.target))
                  for (var s in this._scopeEvents.delegatedEvents)
                    for (
                      var p = this._scopeEvents.delegatedEvents[s], d = p.length - 1;
                      d >= 0;
                      d--
                    ) {
                      var v = p[d],
                        f = v.selector,
                        m = v.context,
                        b = v.listeners
                      f === this.target && m === this._context && p.splice(d, 1)
                      for (var S = b.length - 1; S >= 0; S--)
                        this._scopeEvents.removeDelegate(
                          this.target,
                          this._context,
                          s,
                          b[S][0],
                          b[S][1]
                        )
                    }
                else this._scopeEvents.remove(this.target, 'all')
              },
            },
          ]) && Yp(i.prototype, a),
          n
        )
      })()
      Co.Interactable = Xp
      var _o = {}
      function Zp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Zp, '_n')
      function Ua(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(Ua, 'Pn'),
        Object.defineProperty(_o, '__esModule', { value: !0 }),
        (_o.InteractableSet = void 0)
      var Jp = (function () {
        function n(s) {
          var p = this
          ;(function (d, v) {
            if (!(d instanceof v)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            Ua(this, 'list', []),
            Ua(this, 'selectorMap', {}),
            Ua(this, 'scope', void 0),
            (this.scope = s),
            s.addListeners({
              'interactable:unset': function (d) {
                var v = d.interactable,
                  f = v.target,
                  m = v._context,
                  b = l.default.string(f) ? p.selectorMap[f] : f[p.scope.id],
                  S = xt.findIndex(b, function (T) {
                    return T.context === m
                  })
                b[S] && ((b[S].context = null), (b[S].interactable = null)), b.splice(S, 1)
              },
            })
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            {
              key: 'new',
              value: function (s, p) {
                p = (0, H.default)(p || {}, { actions: this.scope.actions })
                var d = new this.scope.Interactable(s, p, this.scope.document, this.scope.events),
                  v = { context: d._context, interactable: d }
                return (
                  this.scope.addDocument(d._doc),
                  this.list.push(d),
                  l.default.string(s)
                    ? (this.selectorMap[s] || (this.selectorMap[s] = []),
                      this.selectorMap[s].push(v))
                    : (d.target[this.scope.id] ||
                        Object.defineProperty(s, this.scope.id, { value: [], configurable: !0 }),
                      s[this.scope.id].push(v)),
                  this.scope.fire('interactable:new', {
                    target: s,
                    options: p,
                    interactable: d,
                    win: this.scope._win,
                  }),
                  d
                )
              },
            },
            {
              key: 'get',
              value: function (s, p) {
                var d = (p && p.context) || this.scope.document,
                  v = l.default.string(s),
                  f = v ? this.selectorMap[s] : s[this.scope.id]
                if (!f) return null
                var m = xt.find(f, function (b) {
                  return b.context === d && (v || b.interactable.inContext(s))
                })
                return m && m.interactable
              },
            },
            {
              key: 'forEachMatch',
              value: function (s, p) {
                for (var d = 0; d < this.list.length; d++) {
                  var v = this.list[d],
                    f = void 0
                  if (
                    ((l.default.string(v.target)
                      ? l.default.element(s) && D.matchesSelector(s, v.target)
                      : s === v.target) &&
                      v.inContext(s) &&
                      (f = p(v)),
                    f !== void 0)
                  )
                    return f
                }
              },
            },
          ]) && Zp(i.prototype, a),
          n
        )
      })()
      _o.InteractableSet = Jp
      var Po = {}
      function Qp(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Qp, 'En')
      function Ha(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(Ha, 'Tn')
      function Va(n, i) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a
          })(n) ||
          (function (a, s) {
            if (typeof Symbol != 'undefined' && Symbol.iterator in Object(a)) {
              var p = [],
                d = !0,
                v = !1,
                f = void 0
              try {
                for (
                  var m, b = a[Symbol.iterator]();
                  !(d = (m = b.next()).done) && (p.push(m.value), !s || p.length !== s);
                  d = !0
                );
              } catch (S) {
                ;(v = !0), (f = S)
              } finally {
                try {
                  d || b.return == null || b.return()
                } finally {
                  if (v) throw f
                }
              }
              return p
            }
          })(n, i) ||
          (function (a, s) {
            if (a) {
              if (typeof a == 'string') return Rl(a, s)
              var p = Object.prototype.toString.call(a).slice(8, -1)
              return (
                p === 'Object' && a.constructor && (p = a.constructor.name),
                p === 'Map' || p === 'Set'
                  ? Array.from(a)
                  : p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
                  ? Rl(a, s)
                  : void 0
              )
            }
          })(n, i) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          })()
        )
      }
      c(Va, 'Mn')
      function Rl(n, i) {
        ;(i == null || i > n.length) && (i = n.length)
        for (var a = 0, s = Array(i); a < i; a++) s[a] = n[a]
        return s
      }
      c(Rl, 'jn'), Object.defineProperty(Po, '__esModule', { value: !0 }), (Po.default = void 0)
      var Kp = (function () {
        function n(s) {
          ;(function (p, d) {
            if (!(p instanceof d)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            Ha(this, 'currentTarget', void 0),
            Ha(this, 'originalEvent', void 0),
            Ha(this, 'type', void 0),
            (this.originalEvent = s),
            (0, Pe.default)(this, s)
        }
        c(n, 't')
        var i, a
        return (
          (i = n),
          (a = [
            {
              key: 'preventOriginalDefault',
              value: function () {
                this.originalEvent.preventDefault()
              },
            },
            {
              key: 'stopPropagation',
              value: function () {
                this.originalEvent.stopPropagation()
              },
            },
            {
              key: 'stopImmediatePropagation',
              value: function () {
                this.originalEvent.stopImmediatePropagation()
              },
            },
          ]) && Qp(i.prototype, a),
          n
        )
      })()
      function Si(n) {
        if (!l.default.object(n)) return { capture: !!n, passive: !1 }
        var i = (0, H.default)({}, n)
        return (i.capture = !!n.capture), (i.passive = !!n.passive), i
      }
      c(Si, 'In')
      var td = {
        id: 'events',
        install: function (n) {
          var i,
            a = [],
            s = {},
            p = [],
            d = {
              add: v,
              remove: f,
              addDelegate: function (S, T, R, z, I) {
                var F = Si(I)
                if (!s[R]) {
                  s[R] = []
                  for (var Z = 0; Z < p.length; Z++) {
                    var W = p[Z]
                    v(W, R, m), v(W, R, b, !0)
                  }
                }
                var et = s[R],
                  st = xt.find(et, function (dt) {
                    return dt.selector === S && dt.context === T
                  })
                st || ((st = { selector: S, context: T, listeners: [] }), et.push(st)),
                  st.listeners.push([z, F])
              },
              removeDelegate: function (S, T, R, z, I) {
                var F,
                  Z = Si(I),
                  W = s[R],
                  et = !1
                if (W)
                  for (F = W.length - 1; F >= 0; F--) {
                    var st = W[F]
                    if (st.selector === S && st.context === T) {
                      for (var dt = st.listeners, Et = dt.length - 1; Et >= 0; Et--) {
                        var kt = Va(dt[Et], 2),
                          bt = kt[0],
                          Pt = kt[1],
                          Ge = Pt.capture,
                          gr = Pt.passive
                        if (bt === z && Ge === Z.capture && gr === Z.passive) {
                          dt.splice(Et, 1),
                            dt.length || (W.splice(F, 1), f(T, R, m), f(T, R, b, !0)),
                            (et = !0)
                          break
                        }
                      }
                      if (et) break
                    }
                  }
              },
              delegateListener: m,
              delegateUseCapture: b,
              delegatedEvents: s,
              documents: p,
              targets: a,
              supportsOptions: !1,
              supportsPassive: !1,
            }
          function v(S, T, R, z) {
            var I = Si(z),
              F = xt.find(a, function (Z) {
                return Z.eventTarget === S
              })
            F || ((F = { eventTarget: S, events: {} }), a.push(F)),
              F.events[T] || (F.events[T] = []),
              S.addEventListener &&
                !xt.contains(F.events[T], R) &&
                (S.addEventListener(T, R, d.supportsOptions ? I : I.capture), F.events[T].push(R))
          }
          c(v, 's')
          function f(S, T, R, z) {
            var I = Si(z),
              F = xt.findIndex(a, function (Et) {
                return Et.eventTarget === S
              }),
              Z = a[F]
            if (Z && Z.events)
              if (T !== 'all') {
                var W = !1,
                  et = Z.events[T]
                if (et) {
                  if (R === 'all') {
                    for (var st = et.length - 1; st >= 0; st--) f(S, T, et[st], I)
                    return
                  }
                  for (var dt = 0; dt < et.length; dt++)
                    if (et[dt] === R) {
                      S.removeEventListener(T, R, d.supportsOptions ? I : I.capture),
                        et.splice(dt, 1),
                        et.length === 0 && (delete Z.events[T], (W = !0))
                      break
                    }
                }
                W && !Object.keys(Z.events).length && a.splice(F, 1)
              } else for (T in Z.events) Z.events.hasOwnProperty(T) && f(S, T, 'all')
          }
          c(f, 'l')
          function m(S, T) {
            for (
              var R = Si(T),
                z = new Kp(S),
                I = s[S.type],
                F = Va(K.getEventTargets(S), 1)[0],
                Z = F;
              l.default.element(Z);

            ) {
              for (var W = 0; W < I.length; W++) {
                var et = I[W],
                  st = et.selector,
                  dt = et.context
                if (D.matchesSelector(Z, st) && D.nodeContains(dt, F) && D.nodeContains(dt, Z)) {
                  var Et = et.listeners
                  z.currentTarget = Z
                  for (var kt = 0; kt < Et.length; kt++) {
                    var bt = Va(Et[kt], 2),
                      Pt = bt[0],
                      Ge = bt[1],
                      gr = Ge.capture,
                      as = Ge.passive
                    gr === R.capture && as === R.passive && Pt(z)
                  }
                }
              }
              Z = D.parentNode(Z)
            }
          }
          c(m, 'u')
          function b(S) {
            return m(S, !0)
          }
          return (
            c(b, 'c'),
            (i = n.document) == null ||
              i.createElement('div').addEventListener('test', null, {
                get capture() {
                  return (d.supportsOptions = !0)
                },
                get passive() {
                  return (d.supportsPassive = !0)
                },
              }),
            (n.events = d),
            d
          )
        },
      }
      Po.default = td
      var Ao = {}
      Object.defineProperty(Ao, '__esModule', { value: !0 }), (Ao.default = void 0)
      var Mo = {
        methodOrder: ['simulationResume', 'mouseOrPen', 'hasPointer', 'idle'],
        search: function (n) {
          for (var i = 0; i < Mo.methodOrder.length; i++) {
            var a
            a = Mo.methodOrder[i]
            var s = Mo[a](n)
            if (s) return s
          }
          return null
        },
        simulationResume: function (n) {
          var i = n.pointerType,
            a = n.eventType,
            s = n.eventTarget,
            p = n.scope
          if (!/down|start/i.test(a)) return null
          for (var d = 0; d < p.interactions.list.length; d++) {
            var v = p.interactions.list[d],
              f = s
            if (v.simulation && v.simulation.allowResume && v.pointerType === i)
              for (; f; ) {
                if (f === v.element) return v
                f = D.parentNode(f)
              }
          }
          return null
        },
        mouseOrPen: function (n) {
          var i,
            a = n.pointerId,
            s = n.pointerType,
            p = n.eventType,
            d = n.scope
          if (s !== 'mouse' && s !== 'pen') return null
          for (var v = 0; v < d.interactions.list.length; v++) {
            var f = d.interactions.list[v]
            if (f.pointerType === s) {
              if (f.simulation && !zl(f, a)) continue
              if (f.interacting()) return f
              i || (i = f)
            }
          }
          if (i) return i
          for (var m = 0; m < d.interactions.list.length; m++) {
            var b = d.interactions.list[m]
            if (!(b.pointerType !== s || (/down/i.test(p) && b.simulation))) return b
          }
          return null
        },
        hasPointer: function (n) {
          for (var i = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
            var p = a.interactions.list[s]
            if (zl(p, i)) return p
          }
          return null
        },
        idle: function (n) {
          for (var i = n.pointerType, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
            var p = a.interactions.list[s]
            if (p.pointers.length === 1) {
              var d = p.interactable
              if (d && (!d.options.gesture || !d.options.gesture.enabled)) continue
            } else if (p.pointers.length >= 2) continue
            if (!p.interacting() && i === p.pointerType) return p
          }
          return null
        },
      }
      function zl(n, i) {
        return n.pointers.some(function (a) {
          return a.id === i
        })
      }
      c(zl, 'zn')
      var ed = Mo
      Ao.default = ed
      var Io = {}
      function ql(n) {
        return (ql =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(ql, 'Xn')
      function Ll(n, i) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a
          })(n) ||
          (function (a, s) {
            if (typeof Symbol != 'undefined' && Symbol.iterator in Object(a)) {
              var p = [],
                d = !0,
                v = !1,
                f = void 0
              try {
                for (
                  var m, b = a[Symbol.iterator]();
                  !(d = (m = b.next()).done) && (p.push(m.value), !s || p.length !== s);
                  d = !0
                );
              } catch (S) {
                ;(v = !0), (f = S)
              } finally {
                try {
                  d || b.return == null || b.return()
                } finally {
                  if (v) throw f
                }
              }
              return p
            }
          })(n, i) ||
          (function (a, s) {
            if (a) {
              if (typeof a == 'string') return jl(a, s)
              var p = Object.prototype.toString.call(a).slice(8, -1)
              return (
                p === 'Object' && a.constructor && (p = a.constructor.name),
                p === 'Map' || p === 'Set'
                  ? Array.from(a)
                  : p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
                  ? jl(a, s)
                  : void 0
              )
            }
          })(n, i) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          })()
        )
      }
      c(Ll, 'Yn')
      function jl(n, i) {
        ;(i == null || i > n.length) && (i = n.length)
        for (var a = 0, s = Array(i); a < i; a++) s[a] = n[a]
        return s
      }
      c(jl, 'Bn')
      function rd(n, i) {
        if (!(n instanceof i)) throw new TypeError('Cannot call a class as a function')
      }
      c(rd, 'Wn')
      function nd(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(nd, 'Ln')
      function Gl(n, i) {
        return (Gl =
          Object.setPrototypeOf ||
          function (a, s) {
            return (a.__proto__ = s), a
          })(n, i)
      }
      c(Gl, 'Un')
      function id(n, i) {
        return !i || (ql(i) !== 'object' && typeof i != 'function')
          ? (function (a) {
              if (a === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return a
            })(n)
          : i
      }
      c(id, 'Vn')
      function Ya(n) {
        return (Ya = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (i) {
              return i.__proto__ || Object.getPrototypeOf(i)
            })(n)
      }
      c(Ya, 'Nn'), Object.defineProperty(Io, '__esModule', { value: !0 }), (Io.default = void 0)
      var Xa = [
        'pointerDown',
        'pointerMove',
        'pointerUp',
        'updatePointer',
        'removePointer',
        'windowBlur',
      ]
      function $l(n, i) {
        return function (a) {
          var s = i.interactions.list,
            p = K.getPointerType(a),
            d = Ll(K.getEventTargets(a), 2),
            v = d[0],
            f = d[1],
            m = []
          if (/^touch/.test(a.type)) {
            i.prevTouchTime = i.now()
            for (var b = 0; b < a.changedTouches.length; b++) {
              var S = a.changedTouches[b],
                T = {
                  pointer: S,
                  pointerId: K.getPointerId(S),
                  pointerType: p,
                  eventType: a.type,
                  eventTarget: v,
                  curEventTarget: f,
                  scope: i,
                },
                R = Bl(T)
              m.push([T.pointer, T.eventTarget, T.curEventTarget, R])
            }
          } else {
            var z = !1
            if (!q.default.supportsPointerEvent && /mouse/.test(a.type)) {
              for (var I = 0; I < s.length && !z; I++)
                z = s[I].pointerType !== 'mouse' && s[I].pointerIsDown
              z = z || i.now() - i.prevTouchTime < 500 || a.timeStamp === 0
            }
            if (!z) {
              var F = {
                  pointer: a,
                  pointerId: K.getPointerId(a),
                  pointerType: p,
                  eventType: a.type,
                  curEventTarget: f,
                  eventTarget: v,
                  scope: i,
                },
                Z = Bl(F)
              m.push([F.pointer, F.eventTarget, F.curEventTarget, Z])
            }
          }
          for (var W = 0; W < m.length; W++) {
            var et = Ll(m[W], 4),
              st = et[0],
              dt = et[1],
              Et = et[2]
            et[3][n](st, a, dt, Et)
          }
        }
      }
      c($l, '$n')
      function Bl(n) {
        var i = n.pointerType,
          a = n.scope,
          s = { interaction: Ao.default.search(n), searchDetails: n }
        return (
          a.fire('interactions:find', s), s.interaction || a.interactions.new({ pointerType: i })
        )
      }
      c(Bl, 'Gn')
      function Za(n, i) {
        var a = n.doc,
          s = n.scope,
          p = n.options,
          d = s.interactions.docEvents,
          v = s.events,
          f = v[i]
        for (var m in (s.browser.isIOS && !p.events && (p.events = { passive: !1 }),
        v.delegatedEvents))
          f(a, m, v.delegateListener), f(a, m, v.delegateUseCapture, !0)
        for (var b = p && p.events, S = 0; S < d.length; S++) {
          var T = d[S]
          f(a, T.type, T.listener, b)
        }
      }
      c(Za, 'Hn')
      var od = {
        id: 'core/interactions',
        install: function (n) {
          for (var i = {}, a = 0; a < Xa.length; a++) {
            var s = Xa[a]
            i[s] = $l(s, n)
          }
          var p,
            d = q.default.pEventTypes
          function v() {
            for (var f = 0; f < n.interactions.list.length; f++) {
              var m = n.interactions.list[f]
              if (m.pointerIsDown && m.pointerType === 'touch' && !m._interacting)
                for (
                  var b = function () {
                      var T = m.pointers[S]
                      n.documents.some(function (R) {
                        var z = R.doc
                        return (0, D.nodeContains)(z, T.downTarget)
                      }) || m.removePointer(T.pointer, T.event)
                    },
                    S = 0;
                  S < m.pointers.length;
                  S++
                )
                  b()
            }
          }
          c(v, 'a'),
            (p = O.default.PointerEvent
              ? [
                  { type: d.down, listener: v },
                  { type: d.down, listener: i.pointerDown },
                  { type: d.move, listener: i.pointerMove },
                  { type: d.up, listener: i.pointerUp },
                  { type: d.cancel, listener: i.pointerUp },
                ]
              : [
                  { type: 'mousedown', listener: i.pointerDown },
                  { type: 'mousemove', listener: i.pointerMove },
                  { type: 'mouseup', listener: i.pointerUp },
                  { type: 'touchstart', listener: v },
                  { type: 'touchstart', listener: i.pointerDown },
                  { type: 'touchmove', listener: i.pointerMove },
                  { type: 'touchend', listener: i.pointerUp },
                  { type: 'touchcancel', listener: i.pointerUp },
                ]).push({
              type: 'blur',
              listener: function (f) {
                for (var m = 0; m < n.interactions.list.length; m++)
                  n.interactions.list[m].documentBlur(f)
              },
            }),
            (n.prevTouchTime = 0),
            (n.Interaction = (function (f) {
              ;(function (I, F) {
                if (typeof F != 'function' && F !== null)
                  throw new TypeError('Super expression must either be null or a function')
                ;(I.prototype = Object.create(F && F.prototype, {
                  constructor: { value: I, writable: !0, configurable: !0 },
                })),
                  F && Gl(I, F)
              })(z, f)
              var m,
                b,
                S,
                T,
                R =
                  ((S = z),
                  (T = (function () {
                    if (
                      typeof Reflect == 'undefined' ||
                      !Reflect.construct ||
                      Reflect.construct.sham
                    )
                      return !1
                    if (typeof Proxy == 'function') return !0
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      )
                    } catch {
                      return !1
                    }
                  })()),
                  function () {
                    var I,
                      F = Ya(S)
                    if (T) {
                      var Z = Ya(this).constructor
                      I = Reflect.construct(F, arguments, Z)
                    } else I = F.apply(this, arguments)
                    return id(this, I)
                  })
              function z() {
                return rd(this, z), R.apply(this, arguments)
              }
              return (
                c(z, 's'),
                (m = z),
                (b = [
                  {
                    key: 'pointerMoveTolerance',
                    get: function () {
                      return n.interactions.pointerMoveTolerance
                    },
                    set: function (I) {
                      n.interactions.pointerMoveTolerance = I
                    },
                  },
                  {
                    key: '_now',
                    value: function () {
                      return n.now()
                    },
                  },
                ]) && nd(m.prototype, b),
                z
              )
            })(Se.default)),
            (n.interactions = {
              list: [],
              new: function (f) {
                f.scopeFire = function (b, S) {
                  return n.fire(b, S)
                }
                var m = new n.Interaction(f)
                return n.interactions.list.push(m), m
              },
              listeners: i,
              docEvents: p,
              pointerMoveTolerance: 1,
            }),
            n.usePlugin(zn.default)
        },
        listeners: {
          'scope:add-document': function (n) {
            return Za(n, 'add')
          },
          'scope:remove-document': function (n) {
            return Za(n, 'remove')
          },
          'interactable:unset': function (n, i) {
            for (var a = n.interactable, s = i.interactions.list.length - 1; s >= 0; s--) {
              var p = i.interactions.list[s]
              p.interactable === a &&
                (p.stop(),
                i.fire('interactions:destroy', { interaction: p }),
                p.destroy(),
                i.interactions.list.length > 2 && i.interactions.list.splice(s, 1))
            }
          },
        },
        onDocSignal: Za,
        doOnInteractions: $l,
        methodNames: Xa,
      }
      Io.default = od
      var Oi = {}
      function Fl(n) {
        return (Fl =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(Fl, 'Jn')
      function Ja(n, i, a) {
        return (Ja =
          typeof Reflect != 'undefined' && Reflect.get
            ? Reflect.get
            : function (s, p, d) {
                var v = (function (m, b) {
                  for (; !Object.prototype.hasOwnProperty.call(m, b) && (m = Ln(m)) !== null; );
                  return m
                })(s, p)
                if (v) {
                  var f = Object.getOwnPropertyDescriptor(v, p)
                  return f.get ? f.get.call(d) : f.value
                }
              })(n, i, a || n)
      }
      c(Ja, 'Qn')
      function Wl(n, i) {
        return (Wl =
          Object.setPrototypeOf ||
          function (a, s) {
            return (a.__proto__ = s), a
          })(n, i)
      }
      c(Wl, 'tr')
      function ad(n, i) {
        return !i || (Fl(i) !== 'object' && typeof i != 'function')
          ? (function (a) {
              if (a === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return a
            })(n)
          : i
      }
      c(ad, 'er')
      function Ln(n) {
        return (Ln = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (i) {
              return i.__proto__ || Object.getPrototypeOf(i)
            })(n)
      }
      c(Ln, 'nr')
      function Ul(n, i) {
        if (!(n instanceof i)) throw new TypeError('Cannot call a class as a function')
      }
      c(Ul, 'rr')
      function Hl(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Hl, 'or')
      function Vl(n, i, a) {
        return i && Hl(n.prototype, i), a && Hl(n, a), n
      }
      c(Vl, 'ir')
      function oe(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(oe, 'ar'),
        Object.defineProperty(Oi, '__esModule', { value: !0 }),
        (Oi.initScope = Yl),
        (Oi.Scope = void 0)
      var sd = (function () {
        function n() {
          var i = this
          Ul(this, n),
            oe(this, 'id', '__interact_scope_'.concat(Math.floor(100 * Math.random()))),
            oe(this, 'isInitialized', !1),
            oe(this, 'listenerMaps', []),
            oe(this, 'browser', q.default),
            oe(this, 'defaults', (0, an.default)(mi.defaults)),
            oe(this, 'Eventable', wi.Eventable),
            oe(this, 'actions', {
              map: {},
              phases: { start: !0, move: !0, end: !0 },
              methodDict: {},
              phaselessTypes: {},
            }),
            oe(this, 'interactStatic', (0, Wa.createInteractStatic)(this)),
            oe(this, 'InteractEvent', gi.InteractEvent),
            oe(this, 'Interactable', void 0),
            oe(this, 'interactables', new _o.InteractableSet(this)),
            oe(this, '_win', void 0),
            oe(this, 'document', void 0),
            oe(this, 'window', void 0),
            oe(this, 'documents', []),
            oe(this, '_plugins', { list: [], map: {} }),
            oe(this, 'onWindowUnload', function (s) {
              return i.removeDocument(s.target)
            })
          var a = this
          this.Interactable = (function (s) {
            ;(function (m, b) {
              if (typeof b != 'function' && b !== null)
                throw new TypeError('Super expression must either be null or a function')
              ;(m.prototype = Object.create(b && b.prototype, {
                constructor: { value: m, writable: !0, configurable: !0 },
              })),
                b && Wl(m, b)
            })(f, s)
            var p,
              d,
              v =
                ((p = f),
                (d = (function () {
                  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
                    return !1
                  if (typeof Proxy == 'function') return !0
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    )
                  } catch {
                    return !1
                  }
                })()),
                function () {
                  var m,
                    b = Ln(p)
                  if (d) {
                    var S = Ln(this).constructor
                    m = Reflect.construct(b, arguments, S)
                  } else m = b.apply(this, arguments)
                  return ad(this, m)
                })
            function f() {
              return Ul(this, f), v.apply(this, arguments)
            }
            return (
              c(f, 'i'),
              Vl(f, [
                {
                  key: '_defaults',
                  get: function () {
                    return a.defaults
                  },
                },
                {
                  key: 'set',
                  value: function (m) {
                    return (
                      Ja(Ln(f.prototype), 'set', this).call(this, m),
                      a.fire('interactable:set', { options: m, interactable: this }),
                      this
                    )
                  },
                },
                {
                  key: 'unset',
                  value: function () {
                    Ja(Ln(f.prototype), 'unset', this).call(this),
                      a.interactables.list.splice(a.interactables.list.indexOf(this), 1),
                      a.fire('interactable:unset', { interactable: this })
                  },
                },
              ]),
              f
            )
          })(Co.Interactable)
        }
        return (
          c(n, 't'),
          Vl(n, [
            {
              key: 'addListeners',
              value: function (i, a) {
                this.listenerMaps.push({ id: a, map: i })
              },
            },
            {
              key: 'fire',
              value: function (i, a) {
                for (var s = 0; s < this.listenerMaps.length; s++) {
                  var p = this.listenerMaps[s].map[i]
                  if (p && p(a, this, i) === !1) return !1
                }
              },
            },
            {
              key: 'init',
              value: function (i) {
                return this.isInitialized ? this : Yl(this, i)
              },
            },
            {
              key: 'pluginIsInstalled',
              value: function (i) {
                return this._plugins.map[i.id] || this._plugins.list.indexOf(i) !== -1
              },
            },
            {
              key: 'usePlugin',
              value: function (i, a) {
                if (!this.isInitialized) return this
                if (this.pluginIsInstalled(i)) return this
                if (
                  (i.id && (this._plugins.map[i.id] = i),
                  this._plugins.list.push(i),
                  i.install && i.install(this, a),
                  i.listeners && i.before)
                ) {
                  for (
                    var s = 0,
                      p = this.listenerMaps.length,
                      d = i.before.reduce(function (f, m) {
                        return (f[m] = !0), (f[Xl(m)] = !0), f
                      }, {});
                    s < p;
                    s++
                  ) {
                    var v = this.listenerMaps[s].id
                    if (d[v] || d[Xl(v)]) break
                  }
                  this.listenerMaps.splice(s, 0, { id: i.id, map: i.listeners })
                } else i.listeners && this.listenerMaps.push({ id: i.id, map: i.listeners })
                return this
              },
            },
            {
              key: 'addDocument',
              value: function (i, a) {
                if (this.getDocIndex(i) !== -1) return !1
                var s = e.getWindow(i)
                ;(a = a ? (0, H.default)({}, a) : {}),
                  this.documents.push({ doc: i, options: a }),
                  this.events.documents.push(i),
                  i !== this.document && this.events.add(s, 'unload', this.onWindowUnload),
                  this.fire('scope:add-document', { doc: i, window: s, scope: this, options: a })
              },
            },
            {
              key: 'removeDocument',
              value: function (i) {
                var a = this.getDocIndex(i),
                  s = e.getWindow(i),
                  p = this.documents[a].options
                this.events.remove(s, 'unload', this.onWindowUnload),
                  this.documents.splice(a, 1),
                  this.events.documents.splice(a, 1),
                  this.fire('scope:remove-document', { doc: i, window: s, scope: this, options: p })
              },
            },
            {
              key: 'getDocIndex',
              value: function (i) {
                for (var a = 0; a < this.documents.length; a++)
                  if (this.documents[a].doc === i) return a
                return -1
              },
            },
            {
              key: 'getDocOptions',
              value: function (i) {
                var a = this.getDocIndex(i)
                return a === -1 ? null : this.documents[a].options
              },
            },
            {
              key: 'now',
              value: function () {
                return (this.window.Date || Date).now()
              },
            },
          ]),
          n
        )
      })()
      function Yl(n, i) {
        return (
          (n.isInitialized = !0),
          l.default.window(i) && e.init(i),
          O.default.init(i),
          q.default.init(i),
          Ie.default.init(i),
          (n.window = i),
          (n.document = i.document),
          n.usePlugin(Io.default),
          n.usePlugin(Po.default),
          n
        )
      }
      c(Yl, 'lr')
      function Xl(n) {
        return n && n.replace(/\/.*$/, '')
      }
      c(Xl, 'ur'), (Oi.Scope = sd)
      var le = {}
      Object.defineProperty(le, '__esModule', { value: !0 }), (le.default = void 0)
      var Zl = new Oi.Scope(),
        ld = Zl.interactStatic
      le.default = ld
      var ud =
        typeof globalThis != 'undefined'
          ? globalThis
          : typeof window != 'undefined'
          ? window
          : void 0
      Zl.init(ud)
      var Do = {}
      Object.defineProperty(Do, '__esModule', { value: !0 }),
        (Do.default = void 0),
        (Do.default = function () {})
      var ko = {}
      Object.defineProperty(ko, '__esModule', { value: !0 }),
        (ko.default = void 0),
        (ko.default = function () {})
      var No = {}
      function Jl(n, i) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a
          })(n) ||
          (function (a, s) {
            if (typeof Symbol != 'undefined' && Symbol.iterator in Object(a)) {
              var p = [],
                d = !0,
                v = !1,
                f = void 0
              try {
                for (
                  var m, b = a[Symbol.iterator]();
                  !(d = (m = b.next()).done) && (p.push(m.value), !s || p.length !== s);
                  d = !0
                );
              } catch (S) {
                ;(v = !0), (f = S)
              } finally {
                try {
                  d || b.return == null || b.return()
                } finally {
                  if (v) throw f
                }
              }
              return p
            }
          })(n, i) ||
          (function (a, s) {
            if (a) {
              if (typeof a == 'string') return Ql(a, s)
              var p = Object.prototype.toString.call(a).slice(8, -1)
              return (
                p === 'Object' && a.constructor && (p = a.constructor.name),
                p === 'Map' || p === 'Set'
                  ? Array.from(a)
                  : p === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
                  ? Ql(a, s)
                  : void 0
              )
            }
          })(n, i) ||
          (function () {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          })()
        )
      }
      c(Jl, 'yr')
      function Ql(n, i) {
        ;(i == null || i > n.length) && (i = n.length)
        for (var a = 0, s = Array(i); a < i; a++) s[a] = n[a]
        return s
      }
      c(Ql, 'mr'),
        Object.defineProperty(No, '__esModule', { value: !0 }),
        (No.default = void 0),
        (No.default = function (n) {
          var i = [
              ['x', 'y'],
              ['left', 'top'],
              ['right', 'bottom'],
              ['width', 'height'],
            ].filter(function (s) {
              var p = Jl(s, 2),
                d = p[0],
                v = p[1]
              return d in n || v in n
            }),
            a = c(function (s, p) {
              for (
                var d = n.range,
                  v = n.limits,
                  f = v === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : v,
                  m = n.offset,
                  b = m === void 0 ? { x: 0, y: 0 } : m,
                  S = { range: d, grid: n, x: null, y: null },
                  T = 0;
                T < i.length;
                T++
              ) {
                var R = Jl(i[T], 2),
                  z = R[0],
                  I = R[1],
                  F = Math.round((s - b.x) / n[z]),
                  Z = Math.round((p - b.y) / n[I])
                ;(S[z] = Math.max(f.left, Math.min(f.right, F * n[z] + b.x))),
                  (S[I] = Math.max(f.top, Math.min(f.bottom, Z * n[I] + b.y)))
              }
              return S
            }, 'n')
          return (a.grid = n), (a.coordFields = i), a
        })
      var Ti = {}
      Object.defineProperty(Ti, '__esModule', { value: !0 }),
        Object.defineProperty(Ti, 'edgeTarget', {
          enumerable: !0,
          get: function () {
            return Do.default
          },
        }),
        Object.defineProperty(Ti, 'elements', {
          enumerable: !0,
          get: function () {
            return ko.default
          },
        }),
        Object.defineProperty(Ti, 'grid', {
          enumerable: !0,
          get: function () {
            return No.default
          },
        })
      var Ro = {}
      Object.defineProperty(Ro, '__esModule', { value: !0 }), (Ro.default = void 0)
      var cd = {
        id: 'snappers',
        install: function (n) {
          var i = n.interactStatic
          ;(i.snappers = (0, H.default)(i.snappers || {}, Ti)), (i.createSnapGrid = i.snappers.grid)
        },
      }
      Ro.default = cd
      var jn = {}
      function Kl(n, i) {
        var a = Object.keys(n)
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(n)
          i &&
            (s = s.filter(function (p) {
              return Object.getOwnPropertyDescriptor(n, p).enumerable
            })),
            a.push.apply(a, s)
        }
        return a
      }
      c(Kl, 'Pr')
      function Qa(n) {
        for (var i = 1; i < arguments.length; i++) {
          var a = arguments[i] != null ? arguments[i] : {}
          i % 2
            ? Kl(Object(a), !0).forEach(function (s) {
                pd(n, s, a[s])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
            : Kl(Object(a)).forEach(function (s) {
                Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s))
              })
        }
        return n
      }
      c(Qa, 'Or')
      function pd(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(pd, 'Sr'),
        Object.defineProperty(jn, '__esModule', { value: !0 }),
        (jn.aspectRatio = jn.default = void 0)
      var tu = {
        start: function (n) {
          var i = n.state,
            a = n.rect,
            s = n.edges,
            p = n.pageCoords,
            d = i.options.ratio,
            v = i.options,
            f = v.equalDelta,
            m = v.modifiers
          d === 'preserve' && (d = a.width / a.height),
            (i.startCoords = (0, H.default)({}, p)),
            (i.startRect = (0, H.default)({}, a)),
            (i.ratio = d),
            (i.equalDelta = f)
          var b = (i.linkedEdges = {
            top: s.top || (s.left && !s.bottom),
            left: s.left || (s.top && !s.right),
            bottom: s.bottom || (s.right && !s.top),
            right: s.right || (s.bottom && !s.left),
          })
          if (((i.xIsPrimaryAxis = !(!s.left && !s.right)), i.equalDelta))
            i.edgeSign = (b.left ? 1 : -1) * (b.top ? 1 : -1)
          else {
            var S = i.xIsPrimaryAxis ? b.top : b.left
            i.edgeSign = S ? -1 : 1
          }
          if (((0, H.default)(n.edges, b), m && m.length)) {
            var T = new sn.default(n.interaction)
            T.copyFrom(n.interaction.modification),
              T.prepareStates(m),
              (i.subModification = T),
              T.startAll(Qa({}, n))
          }
        },
        set: function (n) {
          var i = n.state,
            a = n.rect,
            s = n.coords,
            p = (0, H.default)({}, s),
            d = i.equalDelta ? dd : fd
          if ((d(i, i.xIsPrimaryAxis, s, a), !i.subModification)) return null
          var v = (0, H.default)({}, a)
          ;(0, ct.addEdges)(i.linkedEdges, v, { x: s.x - p.x, y: s.y - p.y })
          var f = i.subModification.setAll(
              Qa(
                Qa({}, n),
                {},
                { rect: v, edges: i.linkedEdges, pageCoords: s, prevCoords: s, prevRect: v }
              )
            ),
            m = f.delta
          return (
            f.changed &&
              (d(i, Math.abs(m.x) > Math.abs(m.y), f.coords, f.rect), (0, H.default)(s, f.coords)),
            f.eventProps
          )
        },
        defaults: { ratio: 'preserve', equalDelta: !1, modifiers: [], enabled: !1 },
      }
      function dd(n, i, a) {
        var s = n.startCoords,
          p = n.edgeSign
        i ? (a.y = s.y + (a.x - s.x) * p) : (a.x = s.x + (a.y - s.y) * p)
      }
      c(dd, 'Tr')
      function fd(n, i, a, s) {
        var p = n.startRect,
          d = n.startCoords,
          v = n.ratio,
          f = n.edgeSign
        if (i) {
          var m = s.width / v
          a.y = d.y + (m - p.height) * f
        } else {
          var b = s.height * v
          a.x = d.x + (b - p.width) * f
        }
      }
      c(fd, 'Mr'), (jn.aspectRatio = tu)
      var hd = (0, ie.makeModifier)(tu, 'aspectRatio')
      jn.default = hd
      var cn = {}
      Object.defineProperty(cn, '__esModule', { value: !0 }), (cn.default = void 0)
      var eu = c(function () {}, 'Ir')
      eu._defaults = {}
      var vd = eu
      cn.default = vd
      var Ka = {}
      Object.defineProperty(Ka, '__esModule', { value: !0 }),
        Object.defineProperty(Ka, 'default', {
          enumerable: !0,
          get: function () {
            return cn.default
          },
        })
      var fe = {}
      function ts(n, i, a) {
        return l.default.func(n)
          ? ct.resolveRectLike(n, i.interactable, i.element, [a.x, a.y, i])
          : ct.resolveRectLike(n, i.interactable, i.element)
      }
      c(ts, 'zr'),
        Object.defineProperty(fe, '__esModule', { value: !0 }),
        (fe.getRestrictionRect = ts),
        (fe.restrict = fe.default = void 0)
      var ru = {
        start: function (n) {
          var i = n.rect,
            a = n.startOffset,
            s = n.state,
            p = n.interaction,
            d = n.pageCoords,
            v = s.options,
            f = v.elementRect,
            m = (0, H.default)({ left: 0, top: 0, right: 0, bottom: 0 }, v.offset || {})
          if (i && f) {
            var b = ts(v.restriction, p, d)
            if (b) {
              var S = b.right - b.left - i.width,
                T = b.bottom - b.top - i.height
              S < 0 && ((m.left += S), (m.right += S)), T < 0 && ((m.top += T), (m.bottom += T))
            }
            ;(m.left += a.left - i.width * f.left),
              (m.top += a.top - i.height * f.top),
              (m.right += a.right - i.width * (1 - f.right)),
              (m.bottom += a.bottom - i.height * (1 - f.bottom))
          }
          s.offset = m
        },
        set: function (n) {
          var i = n.coords,
            a = n.interaction,
            s = n.state,
            p = s.options,
            d = s.offset,
            v = ts(p.restriction, a, i)
          if (v) {
            var f = ct.xywhToTlbr(v)
            ;(i.x = Math.max(Math.min(f.right - d.right, i.x), f.left + d.left)),
              (i.y = Math.max(Math.min(f.bottom - d.bottom, i.y), f.top + d.top))
          }
        },
        defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 },
      }
      fe.restrict = ru
      var md = (0, ie.makeModifier)(ru, 'restrict')
      fe.default = md
      var nr = {}
      Object.defineProperty(nr, '__esModule', { value: !0 }),
        (nr.restrictEdges = nr.default = void 0)
      var nu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 },
        iu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 }
      function ou(n, i) {
        for (var a = ['top', 'left', 'bottom', 'right'], s = 0; s < a.length; s++) {
          var p = a[s]
          p in n || (n[p] = i[p])
        }
        return n
      }
      c(ou, 'Wr')
      var au = {
        noInner: nu,
        noOuter: iu,
        start: function (n) {
          var i,
            a = n.interaction,
            s = n.startOffset,
            p = n.state,
            d = p.options
          if (d) {
            var v = (0, fe.getRestrictionRect)(d.offset, a, a.coords.start.page)
            i = ct.rectToXY(v)
          }
          ;(i = i || { x: 0, y: 0 }),
            (p.offset = {
              top: i.y + s.top,
              left: i.x + s.left,
              bottom: i.y - s.bottom,
              right: i.x - s.right,
            })
        },
        set: function (n) {
          var i = n.coords,
            a = n.edges,
            s = n.interaction,
            p = n.state,
            d = p.offset,
            v = p.options
          if (a) {
            var f = (0, H.default)({}, i),
              m = (0, fe.getRestrictionRect)(v.inner, s, f) || {},
              b = (0, fe.getRestrictionRect)(v.outer, s, f) || {}
            ou(m, nu),
              ou(b, iu),
              a.top
                ? (i.y = Math.min(Math.max(b.top + d.top, f.y), m.top + d.top))
                : a.bottom &&
                  (i.y = Math.max(Math.min(b.bottom + d.bottom, f.y), m.bottom + d.bottom)),
              a.left
                ? (i.x = Math.min(Math.max(b.left + d.left, f.x), m.left + d.left))
                : a.right && (i.x = Math.max(Math.min(b.right + d.right, f.x), m.right + d.right))
          }
        },
        defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 },
      }
      nr.restrictEdges = au
      var gd = (0, ie.makeModifier)(au, 'restrictEdges')
      nr.default = gd
      var Gn = {}
      Object.defineProperty(Gn, '__esModule', { value: !0 }),
        (Gn.restrictRect = Gn.default = void 0)
      var yd = (0, H.default)(
          {
            get elementRect() {
              return { top: 0, left: 0, bottom: 1, right: 1 }
            },
            set elementRect(n) {},
          },
          fe.restrict.defaults
        ),
        su = { start: fe.restrict.start, set: fe.restrict.set, defaults: yd }
      Gn.restrictRect = su
      var bd = (0, ie.makeModifier)(su, 'restrictRect')
      Gn.default = bd
      var $n = {}
      Object.defineProperty($n, '__esModule', { value: !0 }),
        ($n.restrictSize = $n.default = void 0)
      var wd = { width: -1 / 0, height: -1 / 0 },
        xd = { width: 1 / 0, height: 1 / 0 },
        lu = {
          start: function (n) {
            return nr.restrictEdges.start(n)
          },
          set: function (n) {
            var i = n.interaction,
              a = n.state,
              s = n.rect,
              p = n.edges,
              d = a.options
            if (p) {
              var v = ct.tlbrToXywh((0, fe.getRestrictionRect)(d.min, i, n.coords)) || wd,
                f = ct.tlbrToXywh((0, fe.getRestrictionRect)(d.max, i, n.coords)) || xd
              ;(a.options = {
                endOnly: d.endOnly,
                inner: (0, H.default)({}, nr.restrictEdges.noInner),
                outer: (0, H.default)({}, nr.restrictEdges.noOuter),
              }),
                p.top
                  ? ((a.options.inner.top = s.bottom - v.height),
                    (a.options.outer.top = s.bottom - f.height))
                  : p.bottom &&
                    ((a.options.inner.bottom = s.top + v.height),
                    (a.options.outer.bottom = s.top + f.height)),
                p.left
                  ? ((a.options.inner.left = s.right - v.width),
                    (a.options.outer.left = s.right - f.width))
                  : p.right &&
                    ((a.options.inner.right = s.left + v.width),
                    (a.options.outer.right = s.left + f.width)),
                nr.restrictEdges.set(n),
                (a.options = d)
            }
          },
          defaults: { min: null, max: null, endOnly: !1, enabled: !1 },
        }
      $n.restrictSize = lu
      var Ed = (0, ie.makeModifier)(lu, 'restrictSize')
      $n.default = Ed
      var es = {}
      Object.defineProperty(es, '__esModule', { value: !0 }),
        Object.defineProperty(es, 'default', {
          enumerable: !0,
          get: function () {
            return cn.default
          },
        })
      var Fr = {}
      Object.defineProperty(Fr, '__esModule', { value: !0 }), (Fr.snap = Fr.default = void 0)
      var uu = {
        start: function (n) {
          var i,
            a = n.interaction,
            s = n.interactable,
            p = n.element,
            d = n.rect,
            v = n.state,
            f = n.startOffset,
            m = v.options,
            b = m.offsetWithOrigin
              ? (function (R) {
                  var z = R.interaction.element
                  return (
                    (0, ct.rectToXY)(
                      (0, ct.resolveRectLike)(R.state.options.origin, null, null, [z])
                    ) || (0, Dt.default)(R.interactable, z, R.interaction.prepared.name)
                  )
                })(n)
              : { x: 0, y: 0 }
          if (m.offset === 'startCoords') i = { x: a.coords.start.page.x, y: a.coords.start.page.y }
          else {
            var S = (0, ct.resolveRectLike)(m.offset, s, p, [a])
            ;((i = (0, ct.rectToXY)(S) || { x: 0, y: 0 }).x += b.x), (i.y += b.y)
          }
          var T = m.relativePoints
          v.offsets =
            d && T && T.length
              ? T.map(function (R, z) {
                  return {
                    index: z,
                    relativePoint: R,
                    x: f.left - d.width * R.x + i.x,
                    y: f.top - d.height * R.y + i.y,
                  }
                })
              : [{ index: 0, relativePoint: null, x: i.x, y: i.y }]
        },
        set: function (n) {
          var i = n.interaction,
            a = n.coords,
            s = n.state,
            p = s.options,
            d = s.offsets,
            v = (0, Dt.default)(i.interactable, i.element, i.prepared.name),
            f = (0, H.default)({}, a),
            m = []
          p.offsetWithOrigin || ((f.x -= v.x), (f.y -= v.y))
          for (var b = 0; b < d.length; b++)
            for (
              var S = d[b], T = f.x - S.x, R = f.y - S.y, z = 0, I = p.targets.length;
              z < I;
              z++
            ) {
              var F,
                Z = p.targets[z]
              ;(F = l.default.func(Z) ? Z(T, R, i._proxy, S, z) : Z) &&
                m.push({
                  x: (l.default.number(F.x) ? F.x : T) + S.x,
                  y: (l.default.number(F.y) ? F.y : R) + S.y,
                  range: l.default.number(F.range) ? F.range : p.range,
                  source: Z,
                  index: z,
                  offset: S,
                })
            }
          for (
            var W = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } },
              et = 0;
            et < m.length;
            et++
          ) {
            var st = m[et],
              dt = st.range,
              Et = st.x - f.x,
              kt = st.y - f.y,
              bt = (0, Ut.default)(Et, kt),
              Pt = bt <= dt
            dt === 1 / 0 && W.inRange && W.range !== 1 / 0 && (Pt = !1),
              (W.target &&
                !(Pt
                  ? W.inRange && dt !== 1 / 0
                    ? bt / dt < W.distance / W.range
                    : (dt === 1 / 0 && W.range !== 1 / 0) || bt < W.distance
                  : !W.inRange && bt < W.distance)) ||
                ((W.target = st),
                (W.distance = bt),
                (W.range = dt),
                (W.inRange = Pt),
                (W.delta.x = Et),
                (W.delta.y = kt))
          }
          return W.inRange && ((a.x = W.target.x), (a.y = W.target.y)), (s.closest = W), W
        },
        defaults: {
          range: 1 / 0,
          targets: null,
          offset: null,
          offsetWithOrigin: !0,
          origin: null,
          relativePoints: null,
          endOnly: !1,
          enabled: !1,
        },
      }
      Fr.snap = uu
      var Sd = (0, ie.makeModifier)(uu, 'snap')
      Fr.default = Sd
      var mr = {}
      function cu(n, i) {
        ;(i == null || i > n.length) && (i = n.length)
        for (var a = 0, s = Array(i); a < i; a++) s[a] = n[a]
        return s
      }
      c(cu, 'oo'),
        Object.defineProperty(mr, '__esModule', { value: !0 }),
        (mr.snapSize = mr.default = void 0)
      var pu = {
        start: function (n) {
          var i = n.state,
            a = n.edges,
            s = i.options
          if (!a) return null
          ;(n.state = {
            options: {
              targets: null,
              relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }],
              offset: s.offset || 'self',
              origin: { x: 0, y: 0 },
              range: s.range,
            },
          }),
            (i.targetFields = i.targetFields || [
              ['width', 'height'],
              ['x', 'y'],
            ]),
            Fr.snap.start(n),
            (i.offsets = n.state.offsets),
            (n.state = i)
        },
        set: function (n) {
          var i,
            a,
            s = n.interaction,
            p = n.state,
            d = n.coords,
            v = p.options,
            f = p.offsets,
            m = { x: d.x - f[0].x, y: d.y - f[0].y }
          ;(p.options = (0, H.default)({}, v)), (p.options.targets = [])
          for (var b = 0; b < (v.targets || []).length; b++) {
            var S = (v.targets || [])[b],
              T = void 0
            if ((T = l.default.func(S) ? S(m.x, m.y, s) : S)) {
              for (var R = 0; R < p.targetFields.length; R++) {
                var z =
                    ((i = p.targetFields[R]),
                    (a = 2),
                    (function (W) {
                      if (Array.isArray(W)) return W
                    })(i) ||
                      (function (W, et) {
                        if (typeof Symbol != 'undefined' && Symbol.iterator in Object(W)) {
                          var st = [],
                            dt = !0,
                            Et = !1,
                            kt = void 0
                          try {
                            for (
                              var bt, Pt = W[Symbol.iterator]();
                              !(dt = (bt = Pt.next()).done) &&
                              (st.push(bt.value), !et || st.length !== et);
                              dt = !0
                            );
                          } catch (Ge) {
                            ;(Et = !0), (kt = Ge)
                          } finally {
                            try {
                              dt || Pt.return == null || Pt.return()
                            } finally {
                              if (Et) throw kt
                            }
                          }
                          return st
                        }
                      })(i, a) ||
                      (function (W, et) {
                        if (W) {
                          if (typeof W == 'string') return cu(W, et)
                          var st = Object.prototype.toString.call(W).slice(8, -1)
                          return (
                            st === 'Object' && W.constructor && (st = W.constructor.name),
                            st === 'Map' || st === 'Set'
                              ? Array.from(W)
                              : st === 'Arguments' ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)
                              ? cu(W, et)
                              : void 0
                          )
                        }
                      })(i, a) ||
                      (function () {
                        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                      })()),
                  I = z[0],
                  F = z[1]
                if (I in T || F in T) {
                  ;(T.x = T[I]), (T.y = T[F])
                  break
                }
              }
              p.options.targets.push(T)
            }
          }
          var Z = Fr.snap.set(n)
          return (p.options = v), Z
        },
        defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 },
      }
      mr.snapSize = pu
      var Od = (0, ie.makeModifier)(pu, 'snapSize')
      mr.default = Od
      var Bn = {}
      Object.defineProperty(Bn, '__esModule', { value: !0 }), (Bn.snapEdges = Bn.default = void 0)
      var du = {
        start: function (n) {
          var i = n.edges
          return i
            ? ((n.state.targetFields = n.state.targetFields || [
                [i.left ? 'left' : 'right', i.top ? 'top' : 'bottom'],
              ]),
              mr.snapSize.start(n))
            : null
        },
        set: mr.snapSize.set,
        defaults: (0, H.default)((0, an.default)(mr.snapSize.defaults), {
          targets: null,
          range: null,
          offset: { x: 0, y: 0 },
        }),
      }
      Bn.snapEdges = du
      var Td = (0, ie.makeModifier)(du, 'snapEdges')
      Bn.default = Td
      var rs = {}
      Object.defineProperty(rs, '__esModule', { value: !0 }),
        Object.defineProperty(rs, 'default', {
          enumerable: !0,
          get: function () {
            return cn.default
          },
        })
      var ns = {}
      Object.defineProperty(ns, '__esModule', { value: !0 }),
        Object.defineProperty(ns, 'default', {
          enumerable: !0,
          get: function () {
            return cn.default
          },
        })
      var Fn = {}
      Object.defineProperty(Fn, '__esModule', { value: !0 }), (Fn.default = void 0)
      var Cd = {
        aspectRatio: jn.default,
        restrictEdges: nr.default,
        restrict: fe.default,
        restrictRect: Gn.default,
        restrictSize: $n.default,
        snapEdges: Bn.default,
        snap: Fr.default,
        snapSize: mr.default,
        spring: rs.default,
        avoid: Ka.default,
        transform: ns.default,
        rubberband: es.default,
      }
      Fn.default = Cd
      var zo = {}
      Object.defineProperty(zo, '__esModule', { value: !0 }), (zo.default = void 0)
      var _d = {
        id: 'modifiers',
        install: function (n) {
          var i = n.interactStatic
          for (var a in (n.usePlugin(ie.default),
          n.usePlugin(Ro.default),
          (i.modifiers = Fn.default),
          Fn.default)) {
            var s = Fn.default[a],
              p = s._defaults,
              d = s._methods
            ;(p._methods = d), (n.defaults.perAction[a] = p)
          }
        },
      }
      zo.default = _d
      var pn = {}
      function fu(n) {
        return (fu =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(fu, 'mo')
      function Pd(n, i) {
        for (var a = 0; a < i.length; a++) {
          var s = i[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            Object.defineProperty(n, s.key, s)
        }
      }
      c(Pd, 'bo')
      function hu(n, i) {
        return (hu =
          Object.setPrototypeOf ||
          function (a, s) {
            return (a.__proto__ = s), a
          })(n, i)
      }
      c(hu, 'xo')
      function Ad(n, i) {
        return !i || (fu(i) !== 'object' && typeof i != 'function') ? Oe(n) : i
      }
      c(Ad, 'wo')
      function Oe(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return n
      }
      c(Oe, '_o')
      function is(n) {
        return (is = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (i) {
              return i.__proto__ || Object.getPrototypeOf(i)
            })(n)
      }
      c(is, 'Po')
      function Xe(n, i, a) {
        return (
          i in n
            ? Object.defineProperty(n, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[i] = a),
          n
        )
      }
      c(Xe, 'Oo'),
        Object.defineProperty(pn, '__esModule', { value: !0 }),
        (pn.PointerEvent = pn.default = void 0)
      var Md = (function (n) {
        ;(function (f, m) {
          if (typeof m != 'function' && m !== null)
            throw new TypeError('Super expression must either be null or a function')
          ;(f.prototype = Object.create(m && m.prototype, {
            constructor: { value: f, writable: !0, configurable: !0 },
          })),
            m && hu(f, m)
        })(v, n)
        var i,
          a,
          s,
          p,
          d =
            ((s = v),
            (p = (function () {
              if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham)
                return !1
              if (typeof Proxy == 'function') return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                )
              } catch {
                return !1
              }
            })()),
            function () {
              var f,
                m = is(s)
              if (p) {
                var b = is(this).constructor
                f = Reflect.construct(m, arguments, b)
              } else f = m.apply(this, arguments)
              return Ad(this, f)
            })
        function v(f, m, b, S, T, R) {
          var z
          if (
            ((function (Z, W) {
              if (!(Z instanceof W)) throw new TypeError('Cannot call a class as a function')
            })(this, v),
            Xe(Oe((z = d.call(this, T))), 'type', void 0),
            Xe(Oe(z), 'originalEvent', void 0),
            Xe(Oe(z), 'pointerId', void 0),
            Xe(Oe(z), 'pointerType', void 0),
            Xe(Oe(z), 'double', void 0),
            Xe(Oe(z), 'pageX', void 0),
            Xe(Oe(z), 'pageY', void 0),
            Xe(Oe(z), 'clientX', void 0),
            Xe(Oe(z), 'clientY', void 0),
            Xe(Oe(z), 'dt', void 0),
            Xe(Oe(z), 'eventable', void 0),
            K.pointerExtend(Oe(z), b),
            b !== m && K.pointerExtend(Oe(z), m),
            (z.timeStamp = R),
            (z.originalEvent = b),
            (z.type = f),
            (z.pointerId = K.getPointerId(m)),
            (z.pointerType = K.getPointerType(m)),
            (z.target = S),
            (z.currentTarget = null),
            f === 'tap')
          ) {
            var I = T.getPointerIndex(m)
            z.dt = z.timeStamp - T.pointers[I].downTime
            var F = z.timeStamp - T.tapTime
            z.double = !!(
              T.prevTap &&
              T.prevTap.type !== 'doubletap' &&
              T.prevTap.target === z.target &&
              F < 500
            )
          } else f === 'doubletap' && (z.dt = m.timeStamp - T.tapTime)
          return z
        }
        return (
          c(v, 'a'),
          (i = v),
          (a = [
            {
              key: '_subtractOrigin',
              value: function (f) {
                var m = f.x,
                  b = f.y
                return (
                  (this.pageX -= m),
                  (this.pageY -= b),
                  (this.clientX -= m),
                  (this.clientY -= b),
                  this
                )
              },
            },
            {
              key: '_addOrigin',
              value: function (f) {
                var m = f.x,
                  b = f.y
                return (
                  (this.pageX += m),
                  (this.pageY += b),
                  (this.clientX += m),
                  (this.clientY += b),
                  this
                )
              },
            },
            {
              key: 'preventDefault',
              value: function () {
                this.originalEvent.preventDefault()
              },
            },
          ]) && Pd(i.prototype, a),
          v
        )
      })(Ae.BaseEvent)
      pn.PointerEvent = pn.default = Md
      var Ci = {}
      Object.defineProperty(Ci, '__esModule', { value: !0 }), (Ci.default = void 0)
      var qo = {
        id: 'pointer-events/base',
        before: ['inertia', 'modifiers', 'auto-start', 'actions'],
        install: function (n) {
          ;(n.pointerEvents = qo),
            (n.defaults.actions.pointerEvents = qo.defaults),
            (0, H.default)(n.actions.phaselessTypes, qo.types)
        },
        listeners: {
          'interactions:new': function (n) {
            var i = n.interaction
            ;(i.prevTap = null), (i.tapTime = 0)
          },
          'interactions:update-pointer': function (n) {
            var i = n.down,
              a = n.pointerInfo
            ;(!i && a.hold) || (a.hold = { duration: 1 / 0, timeout: null })
          },
          'interactions:move': function (n, i) {
            var a = n.interaction,
              s = n.pointer,
              p = n.event,
              d = n.eventTarget
            n.duplicate ||
              (a.pointerIsDown && !a.pointerWasMoved) ||
              (a.pointerIsDown && os(n),
              Wr({ interaction: a, pointer: s, event: p, eventTarget: d, type: 'move' }, i))
          },
          'interactions:down': function (n, i) {
            ;(function (a, s) {
              for (
                var p = a.interaction,
                  d = a.pointer,
                  v = a.event,
                  f = a.eventTarget,
                  m = a.pointerIndex,
                  b = p.pointers[m].hold,
                  S = D.getPath(f),
                  T = {
                    interaction: p,
                    pointer: d,
                    event: v,
                    eventTarget: f,
                    type: 'hold',
                    targets: [],
                    path: S,
                    node: null,
                  },
                  R = 0;
                R < S.length;
                R++
              ) {
                var z = S[R]
                ;(T.node = z), s.fire('pointerEvents:collect-targets', T)
              }
              if (T.targets.length) {
                for (var I = 1 / 0, F = 0; F < T.targets.length; F++) {
                  var Z = T.targets[F].eventable.options.holdDuration
                  Z < I && (I = Z)
                }
                ;(b.duration = I),
                  (b.timeout = setTimeout(function () {
                    Wr({ interaction: p, eventTarget: f, pointer: d, event: v, type: 'hold' }, s)
                  }, I))
              }
            })(n, i),
              Wr(n, i)
          },
          'interactions:up': function (n, i) {
            os(n),
              Wr(n, i),
              (function (a, s) {
                var p = a.interaction,
                  d = a.pointer,
                  v = a.event,
                  f = a.eventTarget
                p.pointerWasMoved ||
                  Wr({ interaction: p, eventTarget: f, pointer: d, event: v, type: 'tap' }, s)
              })(n, i)
          },
          'interactions:cancel': function (n, i) {
            os(n), Wr(n, i)
          },
        },
        PointerEvent: pn.PointerEvent,
        fire: Wr,
        collectEventTargets: vu,
        defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } },
        types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 },
      }
      function Wr(n, i) {
        var a = n.interaction,
          s = n.pointer,
          p = n.event,
          d = n.eventTarget,
          v = n.type,
          f = n.targets,
          m = f === void 0 ? vu(n, i) : f,
          b = new pn.PointerEvent(v, s, p, d, a, i.now())
        i.fire('pointerEvents:new', { pointerEvent: b })
        for (
          var S = {
              interaction: a,
              pointer: s,
              event: p,
              eventTarget: d,
              targets: m,
              type: v,
              pointerEvent: b,
            },
            T = 0;
          T < m.length;
          T++
        ) {
          var R = m[T]
          for (var z in R.props || {}) b[z] = R.props[z]
          var I = (0, Dt.default)(R.eventable, R.node)
          if (
            (b._subtractOrigin(I),
            (b.eventable = R.eventable),
            (b.currentTarget = R.node),
            R.eventable.fire(b),
            b._addOrigin(I),
            b.immediatePropagationStopped ||
              (b.propagationStopped && T + 1 < m.length && m[T + 1].node !== b.currentTarget))
          )
            break
        }
        if ((i.fire('pointerEvents:fired', S), v === 'tap')) {
          var F = b.double
            ? Wr({ interaction: a, pointer: s, event: p, eventTarget: d, type: 'doubletap' }, i)
            : b
          ;(a.prevTap = F), (a.tapTime = F.timeStamp)
        }
        return b
      }
      c(Wr, 'Mo')
      function vu(n, i) {
        var a = n.interaction,
          s = n.pointer,
          p = n.event,
          d = n.eventTarget,
          v = n.type,
          f = a.getPointerIndex(s),
          m = a.pointers[f]
        if (v === 'tap' && (a.pointerWasMoved || !m || m.downTarget !== d)) return []
        for (
          var b = D.getPath(d),
            S = {
              interaction: a,
              pointer: s,
              event: p,
              eventTarget: d,
              type: v,
              path: b,
              targets: [],
              node: null,
            },
            T = 0;
          T < b.length;
          T++
        ) {
          var R = b[T]
          ;(S.node = R), i.fire('pointerEvents:collect-targets', S)
        }
        return (
          v === 'hold' &&
            (S.targets = S.targets.filter(function (z) {
              var I
              return (
                z.eventable.options.holdDuration ===
                ((I = a.pointers[f]) == null ? void 0 : I.hold.duration)
              )
            })),
          S.targets
        )
      }
      c(vu, 'jo')
      function os(n) {
        var i = n.interaction,
          a = n.pointerIndex,
          s = i.pointers[a].hold
        s && s.timeout && (clearTimeout(s.timeout), (s.timeout = null))
      }
      c(os, 'ko')
      var Id = qo
      Ci.default = Id
      var Lo = {}
      function Dd(n) {
        var i = n.interaction
        i.holdIntervalHandle && (clearInterval(i.holdIntervalHandle), (i.holdIntervalHandle = null))
      }
      c(Dd, 'Ao'), Object.defineProperty(Lo, '__esModule', { value: !0 }), (Lo.default = void 0)
      var kd = {
        id: 'pointer-events/holdRepeat',
        install: function (n) {
          n.usePlugin(Ci.default)
          var i = n.pointerEvents
          ;(i.defaults.holdRepeatInterval = 0),
            (i.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = !0)
        },
        listeners: ['move', 'up', 'cancel', 'endall'].reduce(
          function (n, i) {
            return (n['pointerEvents:'.concat(i)] = Dd), n
          },
          {
            'pointerEvents:new': function (n) {
              var i = n.pointerEvent
              i.type === 'hold' && (i.count = (i.count || 0) + 1)
            },
            'pointerEvents:fired': function (n, i) {
              var a = n.interaction,
                s = n.pointerEvent,
                p = n.eventTarget,
                d = n.targets
              if (s.type === 'hold' && d.length) {
                var v = d[0].eventable.options.holdRepeatInterval
                v <= 0 ||
                  (a.holdIntervalHandle = setTimeout(function () {
                    i.pointerEvents.fire(
                      { interaction: a, eventTarget: p, type: 'hold', pointer: s, event: s },
                      i
                    )
                  }, v))
              }
            },
          }
        ),
      }
      Lo.default = kd
      var jo = {}
      function Nd(n) {
        return (0, H.default)(this.events.options, n), this
      }
      c(Nd, 'Co'), Object.defineProperty(jo, '__esModule', { value: !0 }), (jo.default = void 0)
      var Rd = {
        id: 'pointer-events/interactableTargets',
        install: function (n) {
          var i = n.Interactable
          i.prototype.pointerEvents = Nd
          var a = i.prototype._backCompatOption
          i.prototype._backCompatOption = function (s, p) {
            var d = a.call(this, s, p)
            return d === this && (this.events.options[s] = p), d
          }
        },
        listeners: {
          'pointerEvents:collect-targets': function (n, i) {
            var a = n.targets,
              s = n.node,
              p = n.type,
              d = n.eventTarget
            i.interactables.forEachMatch(s, function (v) {
              var f = v.events,
                m = f.options
              f.types[p] &&
                f.types[p].length &&
                v.testIgnoreAllow(m, s, d) &&
                a.push({ node: s, eventable: f, props: { interactable: v } })
            })
          },
          'interactable:new': function (n) {
            var i = n.interactable
            i.events.getRect = function (a) {
              return i.getRect(a)
            }
          },
          'interactable:set': function (n, i) {
            var a = n.interactable,
              s = n.options
            ;(0, H.default)(a.events.options, i.pointerEvents.defaults),
              (0, H.default)(a.events.options, s.pointerEvents || {})
          },
        },
      }
      jo.default = Rd
      var Go = {}
      Object.defineProperty(Go, '__esModule', { value: !0 }), (Go.default = void 0)
      var zd = {
        id: 'pointer-events',
        install: function (n) {
          n.usePlugin(Ci), n.usePlugin(Lo.default), n.usePlugin(jo.default)
        },
      }
      Go.default = zd
      var _i = {}
      function mu(n) {
        var i = n.Interactable
        ;(n.actions.phases.reflow = !0),
          (i.prototype.reflow = function (a) {
            return (function (s, p, d) {
              for (
                var v = l.default.string(s.target)
                    ? xt.from(s._context.querySelectorAll(s.target))
                    : [s.target],
                  f = d.window.Promise,
                  m = f ? [] : null,
                  b = function () {
                    var T = v[S],
                      R = s.getRect(T)
                    if (!R) return 'break'
                    var z = xt.find(d.interactions.list, function (et) {
                        return (
                          et.interacting() &&
                          et.interactable === s &&
                          et.element === T &&
                          et.prepared.name === p.name
                        )
                      }),
                      I = void 0
                    if (z)
                      z.move(),
                        m &&
                          (I =
                            z._reflowPromise ||
                            new f(function (et) {
                              z._reflowResolve = et
                            }))
                    else {
                      var F = (0, ct.tlbrToXywh)(R),
                        Z = {
                          page: { x: F.x, y: F.y },
                          client: { x: F.x, y: F.y },
                          timeStamp: d.now(),
                        },
                        W = K.coordsToEvent(Z)
                      I = (function (et, st, dt, Et, kt) {
                        var bt = et.interactions.new({ pointerType: 'reflow' }),
                          Pt = {
                            interaction: bt,
                            event: kt,
                            pointer: kt,
                            eventTarget: dt,
                            phase: 'reflow',
                          }
                        ;(bt.interactable = st),
                          (bt.element = dt),
                          (bt.prevEvent = kt),
                          bt.updatePointer(kt, kt, dt, !0),
                          K.setZeroCoords(bt.coords.delta),
                          (0, ke.copyAction)(bt.prepared, Et),
                          bt._doPhase(Pt)
                        var Ge = et.window.Promise,
                          gr = Ge
                            ? new Ge(function (as) {
                                bt._reflowResolve = as
                              })
                            : void 0
                        return (
                          (bt._reflowPromise = gr),
                          bt.start(Et, st, dt),
                          bt._interacting
                            ? (bt.move(Pt), bt.end(kt))
                            : (bt.stop(), bt._reflowResolve()),
                          bt.removePointer(kt, kt),
                          gr
                        )
                      })(d, s, T, p, W)
                    }
                    m && m.push(I)
                  },
                  S = 0;
                S < v.length && b() !== 'break';
                S++
              );
              return (
                m &&
                f.all(m).then(function () {
                  return s
                })
              )
            })(this, a, n)
          })
      }
      c(mu, 'Wo'),
        Object.defineProperty(_i, '__esModule', { value: !0 }),
        (_i.install = mu),
        (_i.default = void 0)
      var qd = {
        id: 'reflow',
        install: mu,
        listeners: {
          'interactions:stop': function (n, i) {
            var a = n.interaction
            a.pointerType === 'reflow' &&
              (a._reflowResolve && a._reflowResolve(), xt.remove(i.interactions.list, a))
          },
        },
      }
      _i.default = qd
      var je = { exports: {} }
      function gu(n) {
        return (gu =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(gu, 'Vo'),
        Object.defineProperty(je.exports, '__esModule', { value: !0 }),
        (je.exports.default = void 0),
        le.default.use(zn.default),
        le.default.use(un.default),
        le.default.use(Go.default),
        le.default.use(qn.default),
        le.default.use(zo.default),
        le.default.use(wo.default),
        le.default.use(hr.default),
        le.default.use(Br.default),
        le.default.use(_i.default)
      var Ld = le.default
      if (((je.exports.default = Ld), gu(je) === 'object' && je))
        try {
          je.exports = le.default
        } catch {}
      ;(le.default.default = le.default), (je = je.exports)
      var dn = { exports: {} }
      function yu(n) {
        return (yu =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (i) {
                return typeof i
              }
            : function (i) {
                return i &&
                  typeof Symbol == 'function' &&
                  i.constructor === Symbol &&
                  i !== Symbol.prototype
                  ? 'symbol'
                  : typeof i
              })(n)
      }
      c(yu, '$o'),
        Object.defineProperty(dn.exports, '__esModule', { value: !0 }),
        (dn.exports.default = void 0)
      var jd = je.default
      if (((dn.exports.default = jd), yu(dn) === 'object' && dn))
        try {
          dn.exports = je.default
        } catch {}
      return (je.default.default = je.default), dn.exports
    })
  })
  var ss = new WeakSet()
  function ls(t) {
    ss.add(t), t.shadowRoot && us(t.shadowRoot), ps(t), cs(t.ownerDocument)
  }
  c(ls, 'bind')
  function us(t) {
    ps(t), cs(t)
  }
  c(us, 'bindShadow')
  var Fo = new WeakMap()
  function cs(t = document) {
    if (Fo.has(t)) return Fo.get(t)
    let e = !1,
      r = new MutationObserver((u) => {
        for (let l of u)
          if (l.type === 'attributes' && l.target instanceof Element) ds(l.target)
          else if (l.type === 'childList' && l.addedNodes.length)
            for (let h of l.addedNodes) h instanceof Element && ps(h)
      })
    r.observe(t, { childList: !0, subtree: !0, attributeFilter: ['data-action'] })
    let o = {
      get closed() {
        return e
      },
      unsubscribe() {
        ;(e = !0), Fo.delete(t), r.disconnect()
      },
    }
    return Fo.set(t, o), o
  }
  c(cs, 'listenForBind')
  function ps(t) {
    for (let e of t.querySelectorAll('[data-action]')) ds(e)
    t instanceof Element && t.hasAttribute('data-action') && ds(t)
  }
  c(ps, 'bindElements')
  function Vd(t) {
    let e = t.currentTarget
    for (let r of wu(e))
      if (t.type === r.type) {
        let o = e.closest(r.tag)
        ss.has(o) && typeof o[r.method] == 'function' && o[r.method](t)
        let u = e.getRootNode()
        if (u instanceof ShadowRoot && ss.has(u.host) && u.host.matches(r.tag)) {
          let l = u.host
          typeof l[r.method] == 'function' && l[r.method](t)
        }
      }
  }
  c(Vd, 'handleEvent')
  function* wu(t) {
    for (let e of (t.getAttribute('data-action') || '').trim().split(/\s+/)) {
      let r = e.lastIndexOf(':'),
        o = e.lastIndexOf('#')
      yield { type: e.slice(0, r), tag: e.slice(r + 1, o), method: e.slice(o + 1) }
    }
  }
  c(wu, 'bindings')
  function ds(t) {
    for (let e of wu(t)) t.addEventListener(e.type, Vd)
  }
  c(ds, 'bindActions')
  function fs(t) {
    let e = t.name
      .replace(/([A-Z]($|[a-z]))/g, '-$1')
      .replace(/(^-|-Element$)/g, '')
      .toLowerCase()
    window.customElements.get(e) || ((window[t.name] = t), window.customElements.define(e, t))
  }
  c(fs, 'register')
  function hs(t, e) {
    let r = t.tagName.toLowerCase()
    if (t.shadowRoot) {
      for (let o of t.shadowRoot.querySelectorAll(`[data-target~="${r}.${e}"]`))
        if (!o.closest(r)) return o
    }
    for (let o of t.querySelectorAll(`[data-target~="${r}.${e}"]`)) if (o.closest(r) === t) return o
  }
  c(hs, 'findTarget')
  function vs(t, e) {
    let r = t.tagName.toLowerCase(),
      o = []
    if (t.shadowRoot)
      for (let u of t.shadowRoot.querySelectorAll(`[data-targets~="${r}.${e}"]`))
        u.closest(r) || o.push(u)
    for (let u of t.querySelectorAll(`[data-targets~="${r}.${e}"]`)) u.closest(r) === t && o.push(u)
    return o
  }
  c(vs, 'findTargets')
  function Nt(t, e) {
    return Object.defineProperty(t, e, {
      configurable: !0,
      get() {
        return hs(this, e)
      },
    })
  }
  c(Nt, 'target')
  function yr(t, e) {
    return Object.defineProperty(t, e, {
      configurable: !0,
      get() {
        return vs(this, e)
      },
    })
  }
  c(yr, 'targets')
  function ms(t) {
    for (let e of t.querySelectorAll('template[data-shadowroot]'))
      e.parentElement === t &&
        t
          .attachShadow({
            mode: e.getAttribute('data-shadowroot') === 'closed' ? 'closed' : 'open',
          })
          .append(e.content.cloneNode(!0))
  }
  c(ms, 'autoShadowRoot')
  var Wo = new WeakMap()
  function $(t, e) {
    Wo.has(t) || Wo.set(t, []), Wo.get(t).push(e)
  }
  c($, 'attr')
  function gs(t, e) {
    e || (e = xu(Object.getPrototypeOf(t)))
    for (let r of e) {
      let o = t[r],
        u = Eu(r),
        l = {
          get() {
            return this.getAttribute(u) || ''
          },
          set(h) {
            this.setAttribute(u, h || '')
          },
        }
      typeof o == 'number'
        ? (l = {
            get() {
              return Number(this.getAttribute(u) || 0)
            },
            set(h) {
              this.setAttribute(u, h)
            },
          })
        : typeof o == 'boolean' &&
          (l = {
            get() {
              return this.hasAttribute(u)
            },
            set(h) {
              this.toggleAttribute(u, h)
            },
          }),
        Object.defineProperty(t, r, l),
        r in t && !t.hasAttribute(u) && l.set.call(t, o)
    }
  }
  c(gs, 'initializeAttrs')
  function xu(t) {
    let e = new Set(),
      r = t
    for (; r && r !== HTMLElement; ) {
      let o = Wo.get(r) || []
      for (let u of o) e.add(u)
      r = Object.getPrototypeOf(r)
    }
    return e
  }
  c(xu, 'getAttrNames')
  function Eu(t) {
    return `data-${t.replace(/([A-Z]($|[a-z]))/g, '-$1')}`.replace(/--/g, '-').toLowerCase()
  }
  c(Eu, 'attrToAttributeName')
  function ys(t) {
    let e = t.observedAttributes || []
    Object.defineProperty(t, 'observedAttributes', {
      get() {
        return [...xu(t.prototype)].map(Eu).concat(e)
      },
      set(r) {
        e = r
      },
    })
  }
  c(ys, 'defineObservedAttributes')
  function at(t) {
    let e = t.prototype.connectedCallback
    ;(t.prototype.connectedCallback = function () {
      this.toggleAttribute('data-catalyst', !0),
        ms(this),
        gs(this),
        ls(this),
        e && e.call(this),
        this.shadowRoot && us(this.shadowRoot)
    }),
      ys(t),
      fs(t)
  }
  c(at, 'controller')
  var V = c(function () {
    return (
      (V =
        Object.assign ||
        c(function (e) {
          for (var r, o = 1, u = arguments.length; o < u; o++) {
            r = arguments[o]
            for (var l in r) Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l])
          }
          return e
        }, '__assign')),
      V.apply(this, arguments)
    )
  }, '__assign')
  function Wn(t, e) {
    var r = {}
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o])
    if (t != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var u = 0, o = Object.getOwnPropertySymbols(t); u < o.length; u++)
        e.indexOf(o[u]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, o[u]) &&
          (r[o[u]] = t[o[u]])
    return r
  }
  c(Wn, '__rest')
  function mt(t) {
    var e = typeof Symbol == 'function' && Symbol.iterator,
      r = e && t[e],
      o = 0
    if (r) return r.call(t)
    if (t && typeof t.length == 'number')
      return {
        next: function () {
          return t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
        },
      }
    throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
  }
  c(mt, '__values')
  function yt(t, e) {
    var r = typeof Symbol == 'function' && t[Symbol.iterator]
    if (!r) return t
    var o = r.call(t),
      u,
      l = [],
      h
    try {
      for (; (e === void 0 || e-- > 0) && !(u = o.next()).done; ) l.push(u.value)
    } catch (g) {
      h = { error: g }
    } finally {
      try {
        u && !u.done && (r = o.return) && r.call(o)
      } finally {
        if (h) throw h.error
      }
    }
    return l
  }
  c(yt, '__read')
  function At(t, e, r) {
    if (r || arguments.length === 2)
      for (var o = 0, u = e.length, l; o < u; o++)
        (l || !(o in e)) && (l || (l = Array.prototype.slice.call(e, 0, o)), (l[o] = e[o]))
    return t.concat(l || Array.prototype.slice.call(e))
  }
  c(At, '__spreadArray')
  var Uo = '.',
    bs = {},
    Ho = 'xstate.guard',
    Su = ''
  var zt = !0
  var ws
  function Mt(t) {
    return Object.keys(t)
  }
  c(Mt, 'keys')
  function Pi(t, e, r) {
    r === void 0 && (r = Uo)
    var o = Un(t, r),
      u = Un(e, r)
    return gt(u)
      ? gt(o)
        ? u === o
        : !1
      : gt(o)
      ? o in u
      : Mt(o).every(function (l) {
          return l in u ? Pi(o[l], u[l]) : !1
        })
  }
  c(Pi, 'matchesState')
  function Vo(t) {
    try {
      return gt(t) || typeof t == 'number' ? ''.concat(t) : t.type
    } catch {
      throw new Error('Events must be strings or objects with a string event.type property.')
    }
  }
  c(Vo, 'getEventType')
  function Yo(t, e) {
    try {
      return br(t) ? t : t.toString().split(e)
    } catch {
      throw new Error("'".concat(t, "' is not a valid state path."))
    }
  }
  c(Yo, 'toStatePath')
  function Yd(t) {
    return typeof t == 'object' && 'value' in t && 'context' in t && 'event' in t && '_event' in t
  }
  c(Yd, 'isStateLike')
  function Un(t, e) {
    if (Yd(t)) return t.value
    if (br(t)) return Ai(t)
    if (typeof t != 'string') return t
    var r = Yo(t, e)
    return Ai(r)
  }
  c(Un, 'toStateValue')
  function Ai(t) {
    if (t.length === 1) return t[0]
    for (var e = {}, r = e, o = 0; o < t.length - 1; o++)
      o === t.length - 2 ? (r[t[o]] = t[o + 1]) : ((r[t[o]] = {}), (r = r[t[o]]))
    return e
  }
  c(Ai, 'pathToStateValue')
  function Hn(t, e) {
    for (var r = {}, o = Mt(t), u = 0; u < o.length; u++) {
      var l = o[u]
      r[l] = e(t[l], l, t, u)
    }
    return r
  }
  c(Hn, 'mapValues')
  function xs(t, e, r) {
    var o,
      u,
      l = {}
    try {
      for (var h = mt(Mt(t)), g = h.next(); !g.done; g = h.next()) {
        var y = g.value,
          x = t[y]
        !r(x) || (l[y] = e(x, y, t))
      }
    } catch (w) {
      o = { error: w }
    } finally {
      try {
        g && !g.done && (u = h.return) && u.call(h)
      } finally {
        if (o) throw o.error
      }
    }
    return l
  }
  c(xs, 'mapFilterValues')
  var Ou = c(function (t) {
    return function (e) {
      var r,
        o,
        u = e
      try {
        for (var l = mt(t), h = l.next(); !h.done; h = l.next()) {
          var g = h.value
          u = u[g]
        }
      } catch (y) {
        r = { error: y }
      } finally {
        try {
          h && !h.done && (o = l.return) && o.call(l)
        } finally {
          if (r) throw r.error
        }
      }
      return u
    }
  }, 'path')
  function Tu(t, e) {
    return function (r) {
      var o,
        u,
        l = r
      try {
        for (var h = mt(t), g = h.next(); !g.done; g = h.next()) {
          var y = g.value
          l = l[e][y]
        }
      } catch (x) {
        o = { error: x }
      } finally {
        try {
          g && !g.done && (u = h.return) && u.call(h)
        } finally {
          if (o) throw o.error
        }
      }
      return l
    }
  }
  c(Tu, 'nestedPath')
  function Mi(t) {
    if (!t) return [[]]
    if (gt(t)) return [[t]]
    var e = It(
      Mt(t).map(function (r) {
        var o = t[r]
        return typeof o != 'string' && (!o || !Object.keys(o).length)
          ? [[r]]
          : Mi(t[r]).map(function (u) {
              return [r].concat(u)
            })
      })
    )
    return e
  }
  c(Mi, 'toStatePaths')
  function It(t) {
    var e
    return (e = []).concat.apply(e, At([], yt(t), !1))
  }
  c(It, 'flatten')
  function Cu(t) {
    return br(t) ? t : [t]
  }
  c(Cu, 'toArrayStrict')
  function Ne(t) {
    return t === void 0 ? [] : Cu(t)
  }
  c(Ne, 'toArray')
  function fn(t, e, r) {
    var o, u
    if (St(t)) return t(e, r.data)
    var l = {}
    try {
      for (var h = mt(Object.keys(t)), g = h.next(); !g.done; g = h.next()) {
        var y = g.value,
          x = t[y]
        St(x) ? (l[y] = x(e, r.data)) : (l[y] = x)
      }
    } catch (w) {
      o = { error: w }
    } finally {
      try {
        g && !g.done && (u = h.return) && u.call(h)
      } finally {
        if (o) throw o.error
      }
    }
    return l
  }
  c(fn, 'mapContext')
  function _u(t) {
    return /^(done|error)\./.test(t)
  }
  c(_u, 'isBuiltInEvent')
  function Es(t) {
    return !!(t instanceof Promise || (t !== null && (St(t) || typeof t == 'object') && St(t.then)))
  }
  c(Es, 'isPromiseLike')
  function Pu(t) {
    return (
      t !== null && typeof t == 'object' && 'transition' in t && typeof t.transition == 'function'
    )
  }
  c(Pu, 'isBehavior')
  function Xo(t, e) {
    var r,
      o,
      u = yt([[], []], 2),
      l = u[0],
      h = u[1]
    try {
      for (var g = mt(t), y = g.next(); !y.done; y = g.next()) {
        var x = y.value
        e(x) ? l.push(x) : h.push(x)
      }
    } catch (w) {
      r = { error: w }
    } finally {
      try {
        y && !y.done && (o = g.return) && o.call(g)
      } finally {
        if (r) throw r.error
      }
    }
    return [l, h]
  }
  c(Xo, 'partition')
  function Au(t, e) {
    return Hn(t.states, function (r, o) {
      if (!!r) {
        var u = (gt(e) ? void 0 : e[o]) || (r ? r.current : void 0)
        if (!!u) return { current: u, states: Au(r, u) }
      }
    })
  }
  c(Au, 'updateHistoryStates')
  function Mu(t, e) {
    return { current: e, states: Au(t, e) }
  }
  c(Mu, 'updateHistoryValue')
  function Ss(t, e, r, o) {
    zt || Gt(!!t, 'Attempting to update undefined context')
    var u =
      t &&
      r.reduce(function (l, h) {
        var g,
          y,
          x = h.assignment,
          w = { state: o, action: h, _event: e },
          _ = {}
        if (St(x)) _ = x(l, e.data, w)
        else
          try {
            for (var P = mt(Mt(x)), k = P.next(); !k.done; k = P.next()) {
              var N = k.value,
                O = x[N]
              _[N] = St(O) ? O(l, e.data, w) : O
            }
          } catch (C) {
            g = { error: C }
          } finally {
            try {
              k && !k.done && (y = P.return) && y.call(P)
            } finally {
              if (g) throw g.error
            }
          }
        return Object.assign({}, l, _)
      }, t)
    return u
  }
  c(Ss, 'updateContext')
  var Gt = c(function () {}, 'warn')
  zt ||
    (Gt = c(function (t, e) {
      var r = t instanceof Error ? t : void 0
      if (!(!r && t) && console !== void 0) {
        var o = ['Warning: '.concat(e)]
        r && o.push(r), console.warn.apply(console, o)
      }
    }, 'warn'))
  function br(t) {
    return Array.isArray(t)
  }
  c(br, 'isArray')
  function St(t) {
    return typeof t == 'function'
  }
  c(St, 'isFunction')
  function gt(t) {
    return typeof t == 'string'
  }
  c(gt, 'isString')
  function Zo(t, e) {
    if (!!t)
      return gt(t)
        ? { type: Ho, name: t, predicate: e ? e[t] : void 0 }
        : St(t)
        ? { type: Ho, name: t.name, predicate: t }
        : t
  }
  c(Zo, 'toGuard')
  function Iu(t) {
    try {
      return 'subscribe' in t && St(t.subscribe)
    } catch {
      return !1
    }
  }
  c(Iu, 'isObservable')
  var Os = (function () {
      return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
    })(),
    Ur =
      ((ws = {}),
      (ws[Os] = function () {
        return this
      }),
      ws)
  function ir(t) {
    try {
      return '__xstatenode' in t
    } catch {
      return !1
    }
  }
  c(ir, 'isMachine')
  function Du(t) {
    return !!t && typeof t.send == 'function'
  }
  c(Du, 'isActor')
  function Ii(t, e) {
    return gt(t) || typeof t == 'number' ? V({ type: t }, e) : t
  }
  c(Ii, 'toEventObject')
  function Ht(t, e) {
    if (!gt(t) && '$$type' in t && t.$$type === 'scxml') return t
    var r = Ii(t)
    return V({ name: r.type, data: r, $$type: 'scxml', type: 'external' }, e)
  }
  c(Ht, 'toSCXMLEvent')
  function hn(t, e) {
    var r = Cu(e).map(function (o) {
      return typeof o == 'undefined' || typeof o == 'string' || ir(o)
        ? { target: o, event: t }
        : V(V({}, o), { event: t })
    })
    return r
  }
  c(hn, 'toTransitionConfigArray')
  function ku(t) {
    if (!(t === void 0 || t === Su)) return Ne(t)
  }
  c(ku, 'normalizeTarget')
  function Nu(t, e, r) {
    if (!zt) {
      var o = t.stack ? " Stacktrace was '".concat(t.stack, "'") : ''
      if (t === e)
        console.error(
          "Missing onError handler for invocation '"
            .concat(r, "', error was '")
            .concat(t, "'.")
            .concat(o)
        )
      else {
        var u = e.stack ? " Stacktrace was '".concat(e.stack, "'") : ''
        console.error(
          "Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(
            r,
            "'. "
          ) +
            "Original error: '"
              .concat(t, "'. ")
              .concat(o, " Current error is '")
              .concat(e, "'.")
              .concat(u)
        )
      }
    }
  }
  c(Nu, 'reportUnhandledExceptionOnInvocation')
  function Jo(t, e, r, o, u) {
    var l = t.options.guards,
      h = { state: u, cond: e, _event: o }
    if (e.type === Ho) return ((l == null ? void 0 : l[e.name]) || e.predicate)(r, o.data, h)
    var g = l[e.type]
    if (!g)
      throw new Error(
        "Guard '".concat(e.type, "' is not implemented on machine '").concat(t.id, "'.")
      )
    return g(r, o.data, h)
  }
  c(Jo, 'evaluateGuard')
  function Qo(t) {
    return typeof t == 'string' ? { type: t } : t
  }
  c(Qo, 'toInvokeSource')
  function Ko(t, e, r) {
    if (typeof t == 'object') return t
    var o = c(function () {}, 'noop')
    return { next: t, error: e || o, complete: r || o }
  }
  c(Ko, 'toObserver')
  function Di(t, e) {
    return ''.concat(t, ':invocation[').concat(e, ']')
  }
  c(Di, 'createInvokeId')
  var Ot
  ;(function (t) {
    ;(t.Start = 'xstate.start'),
      (t.Stop = 'xstate.stop'),
      (t.Raise = 'xstate.raise'),
      (t.Send = 'xstate.send'),
      (t.Cancel = 'xstate.cancel'),
      (t.NullEvent = ''),
      (t.Assign = 'xstate.assign'),
      (t.After = 'xstate.after'),
      (t.DoneState = 'done.state'),
      (t.DoneInvoke = 'done.invoke'),
      (t.Log = 'xstate.log'),
      (t.Init = 'xstate.init'),
      (t.Invoke = 'xstate.invoke'),
      (t.ErrorExecution = 'error.execution'),
      (t.ErrorCommunication = 'error.communication'),
      (t.ErrorPlatform = 'error.platform'),
      (t.ErrorCustom = 'xstate.error'),
      (t.Update = 'xstate.update'),
      (t.Pure = 'xstate.pure'),
      (t.Choose = 'xstate.choose')
  })(Ot || (Ot = {}))
  var Hr
  ;(function (t) {
    ;(t.Parent = '#_parent'), (t.Internal = '#_internal')
  })(Hr || (Hr = {}))
  var ki = Ot.Start,
    Vn = Ot.Stop,
    Yn = Ot.Raise,
    vn = Ot.Send,
    ta = Ot.Cancel,
    Ru = Ot.NullEvent,
    Ts = Ot.Assign,
    zv = Ot.After,
    qv = Ot.DoneState,
    ea = Ot.Log,
    zu = Ot.Init,
    Ni = Ot.Invoke,
    Lv = Ot.ErrorExecution,
    Cs = Ot.ErrorPlatform,
    _s = Ot.ErrorCustom,
    Ri = Ot.Update,
    qu = Ot.Choose,
    Lu = Ot.Pure
  var mn = Ht({ type: zu })
  function ra(t, e) {
    return (e && e[t]) || void 0
  }
  c(ra, 'getActionFunction')
  function Xn(t, e) {
    var r
    if (gt(t) || typeof t == 'number') {
      var o = ra(t, e)
      St(o) ? (r = { type: t, exec: o }) : o ? (r = o) : (r = { type: t, exec: void 0 })
    } else if (St(t)) r = { type: t.name || t.toString(), exec: t }
    else {
      var o = ra(t.type, e)
      if (St(o)) r = V(V({}, t), { exec: o })
      else if (o) {
        var u = o.type || t.type
        r = V(V(V({}, o), t), { type: u })
      } else r = t
    }
    return r
  }
  c(Xn, 'toActionObject')
  var zi = c(function (t, e) {
    if (!t) return []
    var r = br(t) ? t : [t]
    return r.map(function (o) {
      return Xn(o, e)
    })
  }, 'toActionObjects')
  function na(t) {
    var e = Xn(t)
    return V(V({ id: gt(t) ? t : e.id }, e), { type: e.type })
  }
  c(na, 'toActivityDefinition')
  function ju(t) {
    return gt(t) ? { type: Yn, event: t } : Ps(t, { to: Hr.Internal })
  }
  c(ju, 'raise')
  function Xd(t) {
    return { type: Yn, _event: Ht(t.event) }
  }
  c(Xd, 'resolveRaise')
  function Ps(t, e) {
    return {
      to: e ? e.to : void 0,
      type: vn,
      event: St(t) ? t : Ii(t),
      delay: e ? e.delay : void 0,
      id: e && e.id !== void 0 ? e.id : St(t) ? t.name : Vo(t),
    }
  }
  c(Ps, 'send')
  function Zd(t, e, r, o) {
    var u = { _event: r },
      l = Ht(St(t.event) ? t.event(e, r.data, u) : t.event),
      h
    if (gt(t.delay)) {
      var g = o && o[t.delay]
      h = St(g) ? g(e, r.data, u) : g
    } else h = St(t.delay) ? t.delay(e, r.data, u) : t.delay
    var y = St(t.to) ? t.to(e, r.data, u) : t.to
    return V(V({}, t), { to: y, _event: l, event: l.data, delay: h })
  }
  c(Zd, 'resolveSend')
  var Jd = c(function (t, e, r) {
      return V(V({}, t), { value: gt(t.expr) ? t.expr : t.expr(e, r.data, { _event: r }) })
    }, 'resolveLog'),
    Gu = c(function (t) {
      return { type: ta, sendId: t }
    }, 'cancel')
  function $u(t) {
    var e = na(t)
    return { type: Ot.Start, activity: e, exec: void 0 }
  }
  c($u, 'start')
  function Bu(t) {
    var e = St(t) ? t : na(t)
    return { type: Ot.Stop, activity: e, exec: void 0 }
  }
  c(Bu, 'stop')
  function Qd(t, e, r) {
    var o = St(t.activity) ? t.activity(e, r.data) : t.activity,
      u = typeof o == 'string' ? { id: o } : o,
      l = { type: Ot.Stop, activity: u }
    return l
  }
  c(Qd, 'resolveStop')
  function Fu(t, e) {
    var r = e ? '#'.concat(e) : ''
    return ''.concat(Ot.After, '(').concat(t, ')').concat(r)
  }
  c(Fu, 'after')
  function qi(t, e) {
    var r = ''.concat(Ot.DoneState, '.').concat(t),
      o = { type: r, data: e }
    return (
      (o.toString = function () {
        return r
      }),
      o
    )
  }
  c(qi, 'done')
  function Zn(t, e) {
    var r = ''.concat(Ot.DoneInvoke, '.').concat(t),
      o = { type: r, data: e }
    return (
      (o.toString = function () {
        return r
      }),
      o
    )
  }
  c(Zn, 'doneInvoke')
  function gn(t, e) {
    var r = ''.concat(Ot.ErrorPlatform, '.').concat(t),
      o = { type: r, data: e }
    return (
      (o.toString = function () {
        return r
      }),
      o
    )
  }
  c(gn, 'error')
  function ia(t, e, r, o, u, l) {
    l === void 0 && (l = !1)
    var h = yt(
        l
          ? [[], u]
          : Xo(u, function (P) {
              return P.type === Ts
            }),
        2
      ),
      g = h[0],
      y = h[1],
      x = g.length ? Ss(r, o, g, e) : r,
      w = l ? [r] : void 0,
      _ = It(
        y
          .map(function (P) {
            var k
            switch (P.type) {
              case Yn:
                return Xd(P)
              case vn:
                var N = Zd(P, x, o, t.options.delays)
                return (
                  zt ||
                    Gt(
                      !gt(P.delay) || typeof N.delay == 'number',
                      "No delay reference for delay expression '"
                        .concat(P.delay, "' was found on machine '")
                        .concat(t.id, "'")
                    ),
                  N
                )
              case ea:
                return Jd(P, x, o)
              case qu: {
                var O = P,
                  C =
                    (k = O.conds.find(function (U) {
                      var rt = Zo(U.cond, t.options.guards)
                      return !rt || Jo(t, rt, x, o, e)
                    })) === null || k === void 0
                      ? void 0
                      : k.actions
                if (!C) return []
                var A = yt(ia(t, e, x, o, zi(Ne(C), t.options.actions), l), 2),
                  M = A[0],
                  q = A[1]
                return (x = q), w == null || w.push(x), M
              }
              case Lu: {
                var C = P.get(x, o.data)
                if (!C) return []
                var E = yt(ia(t, e, x, o, zi(Ne(C), t.options.actions), l), 2),
                  j = E[0],
                  D = E[1]
                return (x = D), w == null || w.push(x), j
              }
              case Vn:
                return Qd(P, x, o)
              case Ts: {
                ;(x = Ss(x, o, [P], e)), w == null || w.push(x)
                break
              }
              default:
                var X = Xn(P, t.options.actions),
                  Y = X.exec
                if (Y && w) {
                  var B = w.length - 1
                  X = V(V({}, X), {
                    exec: function (U) {
                      for (var rt = [], it = 1; it < arguments.length; it++)
                        rt[it - 1] = arguments[it]
                      Y.apply(void 0, At([w[B]], yt(rt), !1))
                    },
                  })
                }
                return X
            }
          })
          .filter(function (P) {
            return !!P
          })
      )
    return [_, x]
  }
  c(ia, 'resolveActions')
  var Li = c(function (t) {
    return t.type === 'atomic' || t.type === 'final'
  }, 'isLeafNode')
  function yn(t) {
    return Mt(t.states).map(function (e) {
      return t.states[e]
    })
  }
  c(yn, 'getChildren')
  function As(t) {
    var e = [t]
    return Li(t) ? e : e.concat(It(yn(t).map(As)))
  }
  c(As, 'getAllStateNodes')
  function bn(t, e) {
    var r,
      o,
      u,
      l,
      h,
      g,
      y,
      x,
      w = new Set(t),
      _ = Ms(w),
      P = new Set(e)
    try {
      for (var k = mt(P), N = k.next(); !N.done; N = k.next())
        for (var O = N.value, C = O.parent; C && !P.has(C); ) P.add(C), (C = C.parent)
    } catch (B) {
      r = { error: B }
    } finally {
      try {
        N && !N.done && (o = k.return) && o.call(k)
      } finally {
        if (r) throw r.error
      }
    }
    var A = Ms(P)
    try {
      for (var M = mt(P), q = M.next(); !q.done; q = M.next()) {
        var O = q.value
        if (O.type === 'compound' && (!A.get(O) || !A.get(O).length))
          _.get(O)
            ? _.get(O).forEach(function (U) {
                return P.add(U)
              })
            : O.initialStateNodes.forEach(function (U) {
                return P.add(U)
              })
        else if (O.type === 'parallel')
          try {
            for (var E = ((h = void 0), mt(yn(O))), j = E.next(); !j.done; j = E.next()) {
              var D = j.value
              D.type !== 'history' &&
                (P.has(D) ||
                  (P.add(D),
                  _.get(D)
                    ? _.get(D).forEach(function (U) {
                        return P.add(U)
                      })
                    : D.initialStateNodes.forEach(function (U) {
                        return P.add(U)
                      })))
            }
          } catch (U) {
            h = { error: U }
          } finally {
            try {
              j && !j.done && (g = E.return) && g.call(E)
            } finally {
              if (h) throw h.error
            }
          }
      }
    } catch (B) {
      u = { error: B }
    } finally {
      try {
        q && !q.done && (l = M.return) && l.call(M)
      } finally {
        if (u) throw u.error
      }
    }
    try {
      for (var X = mt(P), Y = X.next(); !Y.done; Y = X.next())
        for (var O = Y.value, C = O.parent; C && !P.has(C); ) P.add(C), (C = C.parent)
    } catch (B) {
      y = { error: B }
    } finally {
      try {
        Y && !Y.done && (x = X.return) && x.call(X)
      } finally {
        if (y) throw y.error
      }
    }
    return P
  }
  c(bn, 'getConfiguration')
  function Wu(t, e) {
    var r = e.get(t)
    if (!r) return {}
    if (t.type === 'compound') {
      var o = r[0]
      if (o) {
        if (Li(o)) return o.key
      } else return {}
    }
    var u = {}
    return (
      r.forEach(function (l) {
        u[l.key] = Wu(l, e)
      }),
      u
    )
  }
  c(Wu, 'getValueFromAdj')
  function Ms(t) {
    var e,
      r,
      o = new Map()
    try {
      for (var u = mt(t), l = u.next(); !l.done; l = u.next()) {
        var h = l.value
        o.has(h) || o.set(h, []),
          h.parent && (o.has(h.parent) || o.set(h.parent, []), o.get(h.parent).push(h))
      }
    } catch (g) {
      e = { error: g }
    } finally {
      try {
        l && !l.done && (r = u.return) && r.call(u)
      } finally {
        if (e) throw e.error
      }
    }
    return o
  }
  c(Ms, 'getAdjList')
  function Uu(t, e) {
    var r = bn([t], e)
    return Wu(t, Ms(r))
  }
  c(Uu, 'getValue')
  function ji(t, e) {
    return Array.isArray(t)
      ? t.some(function (r) {
          return r === e
        })
      : t instanceof Set
      ? t.has(e)
      : !1
  }
  c(ji, 'has')
  function Hu(t) {
    return At(
      [],
      yt(
        new Set(
          It(
            At(
              [],
              yt(
                t.map(function (e) {
                  return e.ownEvents
                })
              ),
              !1
            )
          )
        )
      ),
      !1
    )
  }
  c(Hu, 'nextEvents')
  function wn(t, e) {
    return e.type === 'compound'
      ? yn(e).some(function (r) {
          return r.type === 'final' && ji(t, r)
        })
      : e.type === 'parallel'
      ? yn(e).every(function (r) {
          return wn(t, r)
        })
      : !1
  }
  c(wn, 'isInFinalState')
  function Vu(t) {
    return (
      t === void 0 && (t = []),
      t.reduce(function (e, r) {
        return r.meta !== void 0 && (e[r.id] = r.meta), e
      }, {})
    )
  }
  c(Vu, 'getMeta')
  function Is(t) {
    return new Set(
      It(
        t.map(function (e) {
          return e.tags
        })
      )
    )
  }
  c(Is, 'getTagsFromConfiguration')
  function Ds(t, e) {
    if (t === e) return !0
    if (t === void 0 || e === void 0) return !1
    if (gt(t) || gt(e)) return t === e
    var r = Mt(t),
      o = Mt(e)
    return (
      r.length === o.length &&
      r.every(function (u) {
        return Ds(t[u], e[u])
      })
    )
  }
  c(Ds, 'stateValuesEqual')
  function Yu(t) {
    return gt(t) ? !1 : 'value' in t && 'history' in t
  }
  c(Yu, 'isState')
  function Xu(t, e) {
    var r = t.exec,
      o = V(V({}, t), {
        exec:
          r !== void 0
            ? function () {
                return r(e.context, e.event, { action: t, state: e, _event: e._event })
              }
            : void 0,
      })
    return o
  }
  c(Xu, 'bindActionToState')
  var wr = (function () {
    function t(e) {
      var r = this,
        o
      ;(this.actions = []),
        (this.activities = bs),
        (this.meta = {}),
        (this.events = []),
        (this.value = e.value),
        (this.context = e.context),
        (this._event = e._event),
        (this._sessionid = e._sessionid),
        (this.event = this._event.data),
        (this.historyValue = e.historyValue),
        (this.history = e.history),
        (this.actions = e.actions || []),
        (this.activities = e.activities || bs),
        (this.meta = Vu(e.configuration)),
        (this.events = e.events || []),
        (this.matches = this.matches.bind(this)),
        (this.toStrings = this.toStrings.bind(this)),
        (this.configuration = e.configuration),
        (this.transitions = e.transitions),
        (this.children = e.children),
        (this.done = !!e.done),
        (this.tags =
          (o = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && o !== void 0
            ? o
            : new Set()),
        (this.machine = e.machine),
        Object.defineProperty(this, 'nextEvents', {
          get: function () {
            return Hu(r.configuration)
          },
        })
    }
    return (
      c(t, 'State'),
      (t.from = function (e, r) {
        if (e instanceof t)
          return e.context !== r
            ? new t({
                value: e.value,
                context: r,
                _event: e._event,
                _sessionid: null,
                historyValue: e.historyValue,
                history: e.history,
                actions: [],
                activities: e.activities,
                meta: {},
                events: [],
                configuration: [],
                transitions: [],
                children: {},
              })
            : e
        var o = mn
        return new t({
          value: e,
          context: r,
          _event: o,
          _sessionid: null,
          historyValue: void 0,
          history: void 0,
          actions: [],
          activities: void 0,
          meta: void 0,
          events: [],
          configuration: [],
          transitions: [],
          children: {},
        })
      }),
      (t.create = function (e) {
        return new t(e)
      }),
      (t.inert = function (e, r) {
        if (e instanceof t) {
          if (!e.actions.length) return e
          var o = mn
          return new t({
            value: e.value,
            context: r,
            _event: o,
            _sessionid: null,
            historyValue: e.historyValue,
            history: e.history,
            activities: e.activities,
            configuration: e.configuration,
            transitions: [],
            children: {},
          })
        }
        return t.from(e, r)
      }),
      (t.prototype.toStrings = function (e, r) {
        var o = this
        if ((e === void 0 && (e = this.value), r === void 0 && (r = '.'), gt(e))) return [e]
        var u = Mt(e)
        return u.concat.apply(
          u,
          At(
            [],
            yt(
              u.map(function (l) {
                return o.toStrings(e[l], r).map(function (h) {
                  return l + r + h
                })
              })
            ),
            !1
          )
        )
      }),
      (t.prototype.toJSON = function () {
        var e = this,
          r = e.configuration,
          o = e.transitions,
          u = e.tags,
          l = e.machine,
          h = Wn(e, ['configuration', 'transitions', 'tags', 'machine'])
        return V(V({}, h), { tags: Array.from(u) })
      }),
      (t.prototype.matches = function (e) {
        return Pi(e, this.value)
      }),
      (t.prototype.hasTag = function (e) {
        return this.tags.has(e)
      }),
      (t.prototype.can = function (e) {
        var r
        zt &&
          Gt(
            !!this.machine,
            'state.can(...) used outside of a machine-created State object; this will always return false.'
          )
        var o = (r = this.machine) === null || r === void 0 ? void 0 : r.getTransitionData(this, e)
        return (
          !!(o == null ? void 0 : o.transitions.length) &&
          o.transitions.some(function (u) {
            return u.target !== void 0 || u.actions.length
          })
        )
      }),
      t
    )
  })()
  var Zu = [],
    xn = c(function (t, e) {
      Zu.push(t)
      var r = e(t)
      return Zu.pop(), r
    }, 'provide')
  function Ju(t) {
    return V(
      {
        id: t,
        send: function () {},
        subscribe: function () {
          return { unsubscribe: function () {} }
        },
        getSnapshot: function () {},
        toJSON: function () {
          return { id: t }
        },
      },
      Ur
    )
  }
  c(Ju, 'createNullActor')
  function Qu(t, e, r, o) {
    var u,
      l = Qo(t.src),
      h =
        (u = e == null ? void 0 : e.options.services) === null || u === void 0 ? void 0 : u[l.type],
      g = t.data ? fn(t.data, r, o) : void 0,
      y = h ? Ku(h, t.id, g) : Ju(t.id)
    return (y.meta = t), y
  }
  c(Qu, 'createInvocableActor')
  function Ku(t, e, r) {
    var o = Ju(e)
    if (((o.deferred = !0), ir(t))) {
      var u = (o.state = xn(void 0, function () {
        return (r ? t.withContext(r) : t).initialState
      }))
      o.getSnapshot = function () {
        return u
      }
    }
    return o
  }
  c(Ku, 'createDeferredActor')
  function Kd(t) {
    try {
      return typeof t.send == 'function'
    } catch {
      return !1
    }
  }
  c(Kd, 'isActor')
  function tc(t) {
    return Kd(t) && 'id' in t
  }
  c(tc, 'isSpawnedActor')
  function ec(t) {
    return V(
      V(
        {
          subscribe: function () {
            return { unsubscribe: function () {} }
          },
          id: 'anonymous',
          getSnapshot: function () {},
        },
        Ur
      ),
      t
    )
  }
  c(ec, 'toActorRef')
  function tf(t) {
    if (typeof t == 'string') {
      var e = { type: t }
      return (
        (e.toString = function () {
          return t
        }),
        e
      )
    }
    return t
  }
  c(tf, 'toInvokeSource')
  function Gi(t) {
    return V(V({ type: Ni }, t), {
      toJSON: function () {
        var e = t.onDone,
          r = t.onError,
          o = Wn(t, ['onDone', 'onError'])
        return V(V({}, o), { type: Ni, src: tf(t.src) })
      },
    })
  }
  c(Gi, 'toInvokeDefinition')
  var Jn = '',
    ks = '#',
    $i = '*',
    Qn = {},
    Kn = c(function (t) {
      return t[0] === ks
    }, 'isStateId'),
    ef = c(function () {
      return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} }
    }, 'createDefaultOptions'),
    rf = c(function (t, e, r) {
      var o = r.slice(0, -1).some(function (l) {
          return !('cond' in l) && !('in' in l) && (gt(l.target) || ir(l.target))
        }),
        u = e === Jn ? 'the transient event' : "event '".concat(e, "'")
      Gt(
        !o,
        'One or more transitions for '
          .concat(u, " on state '")
          .concat(t.id, "' are unreachable. ") +
          'Make sure that the default transition is the last one defined.'
      )
    }, 'validateArrayifiedTransitions'),
    rc = (function () {
      function t(e, r, o) {
        var u = this
        o === void 0 && (o = 'context' in e ? e.context : void 0)
        var l
        ;(this.config = e),
          (this._context = o),
          (this.order = -1),
          (this.__xstatenode = !0),
          (this.__cache = {
            events: void 0,
            relativeValue: new Map(),
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0,
          }),
          (this.idMap = {}),
          (this.tags = []),
          (this.options = Object.assign(ef(), r)),
          (this.parent = this.options._parent),
          (this.key = this.config.key || this.options._key || this.config.id || '(machine)'),
          (this.machine = this.parent ? this.parent.machine : this),
          (this.path = this.parent ? this.parent.path.concat(this.key) : []),
          (this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Uo)),
          (this.id =
            this.config.id || At([this.machine.key], yt(this.path), !1).join(this.delimiter)),
          (this.version = this.parent ? this.parent.version : this.config.version),
          (this.type =
            this.config.type ||
            (this.config.parallel
              ? 'parallel'
              : this.config.states && Mt(this.config.states).length
              ? 'compound'
              : this.config.history
              ? 'history'
              : 'atomic')),
          (this.schema = this.parent
            ? this.machine.schema
            : (l = this.config.schema) !== null && l !== void 0
            ? l
            : {}),
          (this.description = this.config.description),
          zt ||
            Gt(
              !('parallel' in this.config),
              'The "parallel" property is deprecated and will be removed in version 4.1. '
                .concat(
                  this.config.parallel
                    ? "Replace with `type: 'parallel'`"
                    : "Use `type: '".concat(this.type, "'`"),
                  " in the config for state node '"
                )
                .concat(this.id, "' instead.")
            ),
          (this.initial = this.config.initial),
          (this.states = this.config.states
            ? Hn(this.config.states, function (y, x) {
                var w,
                  _ = new t(y, { _parent: u, _key: x })
                return Object.assign(u.idMap, V(((w = {}), (w[_.id] = _), w), _.idMap)), _
              })
            : Qn)
        var h = 0
        function g(y) {
          var x, w
          y.order = h++
          try {
            for (var _ = mt(yn(y)), P = _.next(); !P.done; P = _.next()) {
              var k = P.value
              g(k)
            }
          } catch (N) {
            x = { error: N }
          } finally {
            try {
              P && !P.done && (w = _.return) && w.call(_)
            } finally {
              if (x) throw x.error
            }
          }
        }
        c(g, 'dfs'),
          g(this),
          (this.history = this.config.history === !0 ? 'shallow' : this.config.history || !1),
          (this._transient =
            !!this.config.always ||
            (this.config.on
              ? Array.isArray(this.config.on)
                ? this.config.on.some(function (y) {
                    var x = y.event
                    return x === Jn
                  })
                : Jn in this.config.on
              : !1)),
          (this.strict = !!this.config.strict),
          (this.onEntry = Ne(this.config.entry || this.config.onEntry).map(function (y) {
            return Xn(y)
          })),
          (this.onExit = Ne(this.config.exit || this.config.onExit).map(function (y) {
            return Xn(y)
          })),
          (this.meta = this.config.meta),
          (this.doneData = this.type === 'final' ? this.config.data : void 0),
          (this.invoke = Ne(this.config.invoke).map(function (y, x) {
            var w, _
            if (ir(y)) {
              var P = Di(u.id, x)
              return (
                (u.machine.options.services = V(
                  ((w = {}), (w[P] = y), w),
                  u.machine.options.services
                )),
                Gi({ src: P, id: P })
              )
            } else if (gt(y.src)) {
              var P = y.id || Di(u.id, x)
              return Gi(V(V({}, y), { id: P, src: y.src }))
            } else if (ir(y.src) || St(y.src)) {
              var P = y.id || Di(u.id, x)
              return (
                (u.machine.options.services = V(
                  ((_ = {}), (_[P] = y.src), _),
                  u.machine.options.services
                )),
                Gi(V(V({ id: P }, y), { src: P }))
              )
            } else {
              var k = y.src
              return Gi(V(V({ id: Di(u.id, x) }, y), { src: k }))
            }
          })),
          (this.activities = Ne(this.config.activities)
            .concat(this.invoke)
            .map(function (y) {
              return na(y)
            })),
          (this.transition = this.transition.bind(this)),
          (this.tags = Ne(this.config.tags))
      }
      return (
        c(t, 'StateNode'),
        (t.prototype._init = function () {
          this.__cache.transitions ||
            As(this).forEach(function (e) {
              return e.on
            })
        }),
        (t.prototype.withConfig = function (e, r) {
          var o = this.options,
            u = o.actions,
            l = o.activities,
            h = o.guards,
            g = o.services,
            y = o.delays
          return new t(
            this.config,
            {
              actions: V(V({}, u), e.actions),
              activities: V(V({}, l), e.activities),
              guards: V(V({}, h), e.guards),
              services: V(V({}, g), e.services),
              delays: V(V({}, y), e.delays),
            },
            r ?? this.context
          )
        }),
        (t.prototype.withContext = function (e) {
          return new t(this.config, this.options, e)
        }),
        Object.defineProperty(t.prototype, 'context', {
          get: function () {
            return St(this._context) ? this._context() : this._context
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'definition', {
          get: function () {
            return {
              id: this.id,
              key: this.key,
              version: this.version,
              context: this.context,
              type: this.type,
              initial: this.initial,
              history: this.history,
              states: Hn(this.states, function (e) {
                return e.definition
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
              tags: this.tags,
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toJSON = function () {
          return this.definition
        }),
        Object.defineProperty(t.prototype, 'on', {
          get: function () {
            if (this.__cache.on) return this.__cache.on
            var e = this.transitions
            return (this.__cache.on = e.reduce(function (r, o) {
              return (r[o.eventType] = r[o.eventType] || []), r[o.eventType].push(o), r
            }, {}))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'after', {
          get: function () {
            return (
              this.__cache.delayedTransitions ||
              ((this.__cache.delayedTransitions = this.getDelayedTransitions()),
              this.__cache.delayedTransitions)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'transitions', {
          get: function () {
            return (
              this.__cache.transitions ||
              ((this.__cache.transitions = this.formatTransitions()), this.__cache.transitions)
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getCandidates = function (e) {
          if (this.__cache.candidates[e]) return this.__cache.candidates[e]
          var r = e === Jn,
            o = this.transitions.filter(function (u) {
              var l = u.eventType === e
              return r ? l : l || u.eventType === $i
            })
          return (this.__cache.candidates[e] = o), o
        }),
        (t.prototype.getDelayedTransitions = function () {
          var e = this,
            r = this.config.after
          if (!r) return []
          var o = c(function (l, h) {
              var g = St(l) ? ''.concat(e.id, ':delay[').concat(h, ']') : l,
                y = Fu(g, e.id)
              return e.onEntry.push(Ps(y, { delay: l })), e.onExit.push(Gu(y)), y
            }, 'mutateEntryExit'),
            u = br(r)
              ? r.map(function (l, h) {
                  var g = o(l.delay, h)
                  return V(V({}, l), { event: g })
                })
              : It(
                  Mt(r).map(function (l, h) {
                    var g = r[l],
                      y = gt(g) ? { target: g } : g,
                      x = isNaN(+l) ? l : +l,
                      w = o(x, h)
                    return Ne(y).map(function (_) {
                      return V(V({}, _), { event: w, delay: x })
                    })
                  })
                )
          return u.map(function (l) {
            var h = l.delay
            return V(V({}, e.formatTransition(l)), { delay: h })
          })
        }),
        (t.prototype.getStateNodes = function (e) {
          var r,
            o = this
          if (!e) return []
          var u = e instanceof wr ? e.value : Un(e, this.delimiter)
          if (gt(u)) {
            var l = this.getStateNode(u).initial
            return l !== void 0
              ? this.getStateNodes(((r = {}), (r[u] = l), r))
              : [this, this.states[u]]
          }
          var h = Mt(u),
            g = [this]
          return (
            g.push.apply(
              g,
              At(
                [],
                yt(
                  It(
                    h.map(function (y) {
                      return o.getStateNode(y).getStateNodes(u[y])
                    })
                  )
                ),
                !1
              )
            ),
            g
          )
        }),
        (t.prototype.handles = function (e) {
          var r = Vo(e)
          return this.events.includes(r)
        }),
        (t.prototype.resolveState = function (e) {
          var r = Array.from(bn([], this.getStateNodes(e.value)))
          return new wr(
            V(V({}, e), {
              value: this.resolve(e.value),
              configuration: r,
              done: wn(r, this),
              tags: Is(r),
            })
          )
        }),
        (t.prototype.transitionLeafNode = function (e, r, o) {
          var u = this.getStateNode(e),
            l = u.next(r, o)
          return !l || !l.transitions.length ? this.next(r, o) : l
        }),
        (t.prototype.transitionCompoundNode = function (e, r, o) {
          var u = Mt(e),
            l = this.getStateNode(u[0]),
            h = l._transition(e[u[0]], r, o)
          return !h || !h.transitions.length ? this.next(r, o) : h
        }),
        (t.prototype.transitionParallelNode = function (e, r, o) {
          var u,
            l,
            h = {}
          try {
            for (var g = mt(Mt(e)), y = g.next(); !y.done; y = g.next()) {
              var x = y.value,
                w = e[x]
              if (!!w) {
                var _ = this.getStateNode(x),
                  P = _._transition(w, r, o)
                P && (h[x] = P)
              }
            }
          } catch (M) {
            u = { error: M }
          } finally {
            try {
              y && !y.done && (l = g.return) && l.call(g)
            } finally {
              if (u) throw u.error
            }
          }
          var k = Mt(h).map(function (M) {
              return h[M]
            }),
            N = It(
              k.map(function (M) {
                return M.transitions
              })
            ),
            O = k.some(function (M) {
              return M.transitions.length > 0
            })
          if (!O) return this.next(r, o)
          var C = It(
              k.map(function (M) {
                return M.entrySet
              })
            ),
            A = It(
              Mt(h).map(function (M) {
                return h[M].configuration
              })
            )
          return {
            transitions: N,
            entrySet: C,
            exitSet: It(
              k.map(function (M) {
                return M.exitSet
              })
            ),
            configuration: A,
            source: r,
            actions: It(
              Mt(h).map(function (M) {
                return h[M].actions
              })
            ),
          }
        }),
        (t.prototype._transition = function (e, r, o) {
          return gt(e)
            ? this.transitionLeafNode(e, r, o)
            : Mt(e).length === 1
            ? this.transitionCompoundNode(e, r, o)
            : this.transitionParallelNode(e, r, o)
        }),
        (t.prototype.getTransitionData = function (e, r) {
          return this._transition(e.value, e, Ht(r))
        }),
        (t.prototype.next = function (e, r) {
          var o,
            u,
            l = this,
            h = r.name,
            g = [],
            y = [],
            x
          try {
            for (var w = mt(this.getCandidates(h)), _ = w.next(); !_.done; _ = w.next()) {
              var P = _.value,
                k = P.cond,
                N = P.in,
                O = e.context,
                C = N
                  ? gt(N) && Kn(N)
                    ? e.matches(Un(this.getStateNodeById(N).path, this.delimiter))
                    : Pi(Un(N, this.delimiter), Ou(this.path.slice(0, -2))(e.value))
                  : !0,
                A = !1
              try {
                A = !k || Jo(this.machine, k, O, r, e)
              } catch (j) {
                throw new Error(
                  "Unable to evaluate guard '"
                    .concat(k.name || k.type, "' in transition for event '")
                    .concat(h, "' in state node '")
                    .concat(
                      this.id,
                      `':
`
                    )
                    .concat(j.message)
                )
              }
              if (A && C) {
                P.target !== void 0 && (y = P.target),
                  g.push.apply(g, At([], yt(P.actions), !1)),
                  (x = P)
                break
              }
            }
          } catch (j) {
            o = { error: j }
          } finally {
            try {
              _ && !_.done && (u = w.return) && u.call(w)
            } finally {
              if (o) throw o.error
            }
          }
          if (!!x) {
            if (!y.length)
              return {
                transitions: [x],
                entrySet: [],
                exitSet: [],
                configuration: e.value ? [this] : [],
                source: e,
                actions: g,
              }
            var M = It(
                y.map(function (j) {
                  return l.getRelativeStateNodes(j, e.historyValue)
                })
              ),
              q = !!x.internal,
              E = q
                ? []
                : It(
                    M.map(function (j) {
                      return l.nodesFromChild(j)
                    })
                  )
            return {
              transitions: [x],
              entrySet: E,
              exitSet: q ? [] : [this],
              configuration: M,
              source: e,
              actions: g,
            }
          }
        }),
        (t.prototype.nodesFromChild = function (e) {
          if (e.escapes(this)) return []
          for (var r = [], o = e; o && o !== this; ) r.push(o), (o = o.parent)
          return r.push(this), r
        }),
        (t.prototype.escapes = function (e) {
          if (this === e) return !1
          for (var r = this.parent; r; ) {
            if (r === e) return !1
            r = r.parent
          }
          return !0
        }),
        (t.prototype.getActions = function (e, r, o, u) {
          var l,
            h,
            g,
            y,
            x = bn([], u ? this.getStateNodes(u.value) : [this]),
            w = e.configuration.length ? bn(x, e.configuration) : x
          try {
            for (var _ = mt(w), P = _.next(); !P.done; P = _.next()) {
              var k = P.value
              ji(x, k) || e.entrySet.push(k)
            }
          } catch (X) {
            l = { error: X }
          } finally {
            try {
              P && !P.done && (h = _.return) && h.call(_)
            } finally {
              if (l) throw l.error
            }
          }
          try {
            for (var N = mt(x), O = N.next(); !O.done; O = N.next()) {
              var k = O.value
              ;(!ji(w, k) || ji(e.exitSet, k.parent)) && e.exitSet.push(k)
            }
          } catch (X) {
            g = { error: X }
          } finally {
            try {
              O && !O.done && (y = N.return) && y.call(N)
            } finally {
              if (g) throw g.error
            }
          }
          var C = It(
            e.entrySet.map(function (X) {
              var Y = []
              if (X.type !== 'final') return Y
              var B = X.parent
              if (!B.parent) return Y
              Y.push(qi(X.id, X.doneData), qi(B.id, X.doneData ? fn(X.doneData, r, o) : void 0))
              var U = B.parent
              return (
                U.type === 'parallel' &&
                  yn(U).every(function (rt) {
                    return wn(e.configuration, rt)
                  }) &&
                  Y.push(qi(U.id)),
                Y
              )
            })
          )
          e.exitSet.sort(function (X, Y) {
            return Y.order - X.order
          }),
            e.entrySet.sort(function (X, Y) {
              return X.order - Y.order
            })
          var A = new Set(e.entrySet),
            M = new Set(e.exitSet),
            q = yt(
              [
                It(
                  Array.from(A).map(function (X) {
                    return At(
                      At(
                        [],
                        yt(
                          X.activities.map(function (Y) {
                            return $u(Y)
                          })
                        ),
                        !1
                      ),
                      yt(X.onEntry),
                      !1
                    )
                  })
                ).concat(C.map(ju)),
                It(
                  Array.from(M).map(function (X) {
                    return At(
                      At([], yt(X.onExit), !1),
                      yt(
                        X.activities.map(function (Y) {
                          return Bu(Y)
                        })
                      ),
                      !1
                    )
                  })
                ),
              ],
              2
            ),
            E = q[0],
            j = q[1],
            D = zi(j.concat(e.actions).concat(E), this.machine.options.actions)
          return D
        }),
        (t.prototype.transition = function (e, r, o) {
          e === void 0 && (e = this.initialState)
          var u = Ht(r),
            l
          if (e instanceof wr) l = o === void 0 ? e : this.resolveState(wr.from(e, o))
          else {
            var h = gt(e) ? this.resolve(Ai(this.getResolvedPath(e))) : this.resolve(e),
              g = o ?? this.machine.context
            l = this.resolveState(wr.from(h, g))
          }
          if (!zt && u.name === $i)
            throw new Error("An event cannot have the wildcard type ('".concat($i, "')"))
          if (this.strict && !this.events.includes(u.name) && !_u(u.name))
            throw new Error(
              "Machine '".concat(this.id, "' does not accept event '").concat(u.name, "'")
            )
          var y = this._transition(l.value, l, u) || {
              transitions: [],
              configuration: [],
              entrySet: [],
              exitSet: [],
              source: l,
              actions: [],
            },
            x = bn([], this.getStateNodes(l.value)),
            w = y.configuration.length ? bn(x, y.configuration) : x
          return (y.configuration = At([], yt(w), !1)), this.resolveTransition(y, l, l.context, u)
        }),
        (t.prototype.resolveRaisedTransition = function (e, r, o) {
          var u,
            l = e.actions
          return (
            (e = this.transition(e, r)),
            (e._event = o),
            (e.event = o.data),
            (u = e.actions).unshift.apply(u, At([], yt(l), !1)),
            e
          )
        }),
        (t.prototype.resolveTransition = function (e, r, o, u) {
          var l,
            h,
            g = this
          u === void 0 && (u = mn)
          var y = e.configuration,
            x = !r || e.transitions.length > 0,
            w = x ? Uu(this.machine, y) : void 0,
            _ = r
              ? r.historyValue
                ? r.historyValue
                : e.source
                ? this.machine.historyValue(r.value)
                : void 0
              : void 0,
            P = this.getActions(e, o, u, r),
            k = r ? V({}, r.activities) : {}
          try {
            for (var N = mt(P), O = N.next(); !O.done; O = N.next()) {
              var C = O.value
              C.type === ki
                ? (k[C.activity.id || C.activity.type] = C)
                : C.type === Vn && (k[C.activity.id || C.activity.type] = !1)
            }
          } catch (ht) {
            l = { error: ht }
          } finally {
            try {
              O && !O.done && (h = N.return) && h.call(N)
            } finally {
              if (l) throw l.error
            }
          }
          var A = yt(ia(this, r, o, u, P, this.machine.config.preserveActionOrder), 2),
            M = A[0],
            q = A[1],
            E = yt(
              Xo(M, function (ht) {
                return ht.type === Yn || (ht.type === vn && ht.to === Hr.Internal)
              }),
              2
            ),
            j = E[0],
            D = E[1],
            X = M.filter(function (ht) {
              var Ft
              return (
                ht.type === ki &&
                ((Ft = ht.activity) === null || Ft === void 0 ? void 0 : Ft.type) === Ni
              )
            }),
            Y = X.reduce(
              function (ht, Ft) {
                return (ht[Ft.activity.id] = Qu(Ft.activity, g.machine, q, u)), ht
              },
              r ? V({}, r.children) : {}
            ),
            B = x ? e.configuration : r ? r.configuration : [],
            U = wn(B, this),
            rt = new wr({
              value: w || r.value,
              context: q,
              _event: u,
              _sessionid: r ? r._sessionid : null,
              historyValue: w ? (_ ? Mu(_, w) : void 0) : r ? r.historyValue : void 0,
              history: !w || e.source ? r : void 0,
              actions: w ? D : [],
              activities: w ? k : r ? r.activities : {},
              events: [],
              configuration: B,
              transitions: e.transitions,
              children: Y,
              done: U,
              tags: r == null ? void 0 : r.tags,
              machine: this,
            }),
            it = o !== q
          rt.changed = u.name === Ri || it
          var H = rt.history
          H && delete H.history
          var ct =
            !U &&
            (this._transient ||
              y.some(function (ht) {
                return ht._transient
              }))
          if (!x && (!ct || u.name === Jn)) return rt
          var Ct = rt
          if (!U)
            for (ct && (Ct = this.resolveRaisedTransition(Ct, { type: Ru }, u)); j.length; ) {
              var jt = j.shift()
              Ct = this.resolveRaisedTransition(Ct, jt._event, u)
            }
          var Dt =
            Ct.changed ||
            (H
              ? !!Ct.actions.length ||
                it ||
                typeof H.value != typeof Ct.value ||
                !Ds(Ct.value, H.value)
              : void 0)
          return (Ct.changed = Dt), (Ct.history = H), (Ct.tags = Is(Ct.configuration)), Ct
        }),
        (t.prototype.getStateNode = function (e) {
          if (Kn(e)) return this.machine.getStateNodeById(e)
          if (!this.states)
            throw new Error(
              "Unable to retrieve child state '"
                .concat(e, "' from '")
                .concat(this.id, "'; no child states exist.")
            )
          var r = this.states[e]
          if (!r)
            throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"))
          return r
        }),
        (t.prototype.getStateNodeById = function (e) {
          var r = Kn(e) ? e.slice(ks.length) : e
          if (r === this.id) return this
          var o = this.machine.idMap[r]
          if (!o)
            throw new Error(
              "Child state node '#".concat(r, "' does not exist on machine '").concat(this.id, "'")
            )
          return o
        }),
        (t.prototype.getStateNodeByPath = function (e) {
          if (typeof e == 'string' && Kn(e))
            try {
              return this.getStateNodeById(e.slice(1))
            } catch {}
          for (var r = Yo(e, this.delimiter).slice(), o = this; r.length; ) {
            var u = r.shift()
            if (!u.length) break
            o = o.getStateNode(u)
          }
          return o
        }),
        (t.prototype.resolve = function (e) {
          var r,
            o = this
          if (!e) return this.initialStateValue || Qn
          switch (this.type) {
            case 'parallel':
              return Hn(this.initialStateValue, function (l, h) {
                return l ? o.getStateNode(h).resolve(e[h] || l) : Qn
              })
            case 'compound':
              if (gt(e)) {
                var u = this.getStateNode(e)
                return u.type === 'parallel' || u.type === 'compound'
                  ? ((r = {}), (r[e] = u.initialStateValue), r)
                  : e
              }
              return Mt(e).length
                ? Hn(e, function (l, h) {
                    return l ? o.getStateNode(h).resolve(l) : Qn
                  })
                : this.initialStateValue || {}
            default:
              return e || Qn
          }
        }),
        (t.prototype.getResolvedPath = function (e) {
          if (Kn(e)) {
            var r = this.machine.idMap[e.slice(ks.length)]
            if (!r) throw new Error("Unable to find state node '".concat(e, "'"))
            return r.path
          }
          return Yo(e, this.delimiter)
        }),
        Object.defineProperty(t.prototype, 'initialStateValue', {
          get: function () {
            var e
            if (this.__cache.initialStateValue) return this.__cache.initialStateValue
            var r
            if (this.type === 'parallel')
              r = xs(
                this.states,
                function (o) {
                  return o.initialStateValue || Qn
                },
                function (o) {
                  return o.type !== 'history'
                }
              )
            else if (this.initial !== void 0) {
              if (!this.states[this.initial])
                throw new Error(
                  "Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'")
                )
              r = Li(this.states[this.initial])
                ? this.initial
                : ((e = {}), (e[this.initial] = this.states[this.initial].initialStateValue), e)
            } else r = {}
            return (this.__cache.initialStateValue = r), this.__cache.initialStateValue
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getInitialState = function (e, r) {
          var o = this.getStateNodes(e)
          return this.resolveTransition(
            {
              configuration: o,
              entrySet: o,
              exitSet: [],
              transitions: [],
              source: void 0,
              actions: [],
            },
            void 0,
            r ?? this.machine.context,
            void 0
          )
        }),
        Object.defineProperty(t.prototype, 'initialState', {
          get: function () {
            this._init()
            var e = this.initialStateValue
            if (!e)
              throw new Error(
                "Cannot retrieve initial state from simple state '".concat(this.id, "'.")
              )
            return this.getInitialState(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'target', {
          get: function () {
            var e
            if (this.type === 'history') {
              var r = this.config
              gt(r.target)
                ? (e = Kn(r.target)
                    ? Ai(this.machine.getStateNodeById(r.target).path.slice(this.path.length - 1))
                    : r.target)
                : (e = r.target)
            }
            return e
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getRelativeStateNodes = function (e, r, o) {
          return (
            o === void 0 && (o = !0),
            o ? (e.type === 'history' ? e.resolveHistory(r) : e.initialStateNodes) : [e]
          )
        }),
        Object.defineProperty(t.prototype, 'initialStateNodes', {
          get: function () {
            var e = this
            if (Li(this)) return [this]
            if (this.type === 'compound' && !this.initial)
              return (
                zt || Gt(!1, "Compound state node '".concat(this.id, "' has no initial state.")),
                [this]
              )
            var r = Mi(this.initialStateValue)
            return It(
              r.map(function (o) {
                return e.getFromRelativePath(o)
              })
            )
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getFromRelativePath = function (e) {
          if (!e.length) return [this]
          var r = yt(e),
            o = r[0],
            u = r.slice(1)
          if (!this.states)
            throw new Error("Cannot retrieve subPath '".concat(o, "' from node with no states"))
          var l = this.getStateNode(o)
          if (l.type === 'history') return l.resolveHistory()
          if (!this.states[o])
            throw new Error("Child state '".concat(o, "' does not exist on '").concat(this.id, "'"))
          return this.states[o].getFromRelativePath(u)
        }),
        (t.prototype.historyValue = function (e) {
          if (!!Mt(this.states).length)
            return {
              current: e || this.initialStateValue,
              states: xs(
                this.states,
                function (r, o) {
                  if (!e) return r.historyValue()
                  var u = gt(e) ? void 0 : e[o]
                  return r.historyValue(u || r.initialStateValue)
                },
                function (r) {
                  return !r.history
                }
              ),
            }
        }),
        (t.prototype.resolveHistory = function (e) {
          var r = this
          if (this.type !== 'history') return [this]
          var o = this.parent
          if (!e) {
            var u = this.target
            return u
              ? It(
                  Mi(u).map(function (h) {
                    return o.getFromRelativePath(h)
                  })
                )
              : o.initialStateNodes
          }
          var l = Tu(o.path, 'states')(e).current
          return gt(l)
            ? [o.getStateNode(l)]
            : It(
                Mi(l).map(function (h) {
                  return r.history === 'deep' ? o.getFromRelativePath(h) : [o.states[h[0]]]
                })
              )
        }),
        Object.defineProperty(t.prototype, 'stateIds', {
          get: function () {
            var e = this,
              r = It(
                Mt(this.states).map(function (o) {
                  return e.states[o].stateIds
                })
              )
            return [this.id].concat(r)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'events', {
          get: function () {
            var e, r, o, u
            if (this.__cache.events) return this.__cache.events
            var l = this.states,
              h = new Set(this.ownEvents)
            if (l)
              try {
                for (var g = mt(Mt(l)), y = g.next(); !y.done; y = g.next()) {
                  var x = y.value,
                    w = l[x]
                  if (w.states)
                    try {
                      for (
                        var _ = ((o = void 0), mt(w.events)), P = _.next();
                        !P.done;
                        P = _.next()
                      ) {
                        var k = P.value
                        h.add(''.concat(k))
                      }
                    } catch (N) {
                      o = { error: N }
                    } finally {
                      try {
                        P && !P.done && (u = _.return) && u.call(_)
                      } finally {
                        if (o) throw o.error
                      }
                    }
                }
              } catch (N) {
                e = { error: N }
              } finally {
                try {
                  y && !y.done && (r = g.return) && r.call(g)
                } finally {
                  if (e) throw e.error
                }
              }
            return (this.__cache.events = Array.from(h))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, 'ownEvents', {
          get: function () {
            var e = new Set(
              this.transitions
                .filter(function (r) {
                  return !(!r.target && !r.actions.length && r.internal)
                })
                .map(function (r) {
                  return r.eventType
                })
            )
            return Array.from(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.resolveTarget = function (e) {
          var r = this
          if (e !== void 0)
            return e.map(function (o) {
              if (!gt(o)) return o
              var u = o[0] === r.delimiter
              if (u && !r.parent) return r.getStateNodeByPath(o.slice(1))
              var l = u ? r.key + o : o
              if (r.parent)
                try {
                  var h = r.parent.getStateNodeByPath(l)
                  return h
                } catch (g) {
                  throw new Error(
                    "Invalid transition definition for state node '"
                      .concat(
                        r.id,
                        `':
`
                      )
                      .concat(g.message)
                  )
                }
              else return r.getStateNodeByPath(l)
            })
        }),
        (t.prototype.formatTransition = function (e) {
          var r = this,
            o = ku(e.target),
            u =
              'internal' in e
                ? e.internal
                : o
                ? o.some(function (y) {
                    return gt(y) && y[0] === r.delimiter
                  })
                : !0,
            l = this.machine.options.guards,
            h = this.resolveTarget(o),
            g = V(V({}, e), {
              actions: zi(Ne(e.actions)),
              cond: Zo(e.cond, l),
              target: h,
              source: this,
              internal: u,
              eventType: e.event,
              toJSON: function () {
                return V(V({}, g), {
                  target: g.target
                    ? g.target.map(function (y) {
                        return '#'.concat(y.id)
                      })
                    : void 0,
                  source: '#'.concat(r.id),
                })
              },
            })
          return g
        }),
        (t.prototype.formatTransitions = function () {
          var e,
            r,
            o = this,
            u
          if (!this.config.on) u = []
          else if (Array.isArray(this.config.on)) u = this.config.on
          else {
            var l = this.config.on,
              h = $i,
              g = l[h],
              y = g === void 0 ? [] : g,
              x = Wn(l, [typeof h == 'symbol' ? h : h + ''])
            u = It(
              Mt(x)
                .map(function (M) {
                  !zt &&
                    M === Jn &&
                    Gt(
                      !1,
                      "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " +
                        'Please check the `on` configuration for "#'.concat(o.id, '".')
                    )
                  var q = hn(M, x[M])
                  return zt || rf(o, M, q), q
                })
                .concat(hn($i, y))
            )
          }
          var w = this.config.always ? hn('', this.config.always) : [],
            _ = this.config.onDone ? hn(String(qi(this.id)), this.config.onDone) : []
          zt ||
            Gt(
              !(this.config.onDone && !this.parent),
              'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(
                this.id,
                '".'
              )
            )
          var P = It(
              this.invoke.map(function (M) {
                var q = []
                return (
                  M.onDone && q.push.apply(q, At([], yt(hn(String(Zn(M.id)), M.onDone)), !1)),
                  M.onError && q.push.apply(q, At([], yt(hn(String(gn(M.id)), M.onError)), !1)),
                  q
                )
              })
            ),
            k = this.after,
            N = It(
              At(At(At(At([], yt(_), !1), yt(P), !1), yt(u), !1), yt(w), !1).map(function (M) {
                return Ne(M).map(function (q) {
                  return o.formatTransition(q)
                })
              })
            )
          try {
            for (var O = mt(k), C = O.next(); !C.done; C = O.next()) {
              var A = C.value
              N.push(A)
            }
          } catch (M) {
            e = { error: M }
          } finally {
            try {
              C && !C.done && (r = O.return) && r.call(O)
            } finally {
              if (e) throw e.error
            }
          }
          return N
        }),
        t
      )
    })()
  function ae(t, e) {
    return new rc(t, e)
  }
  c(ae, 'createMachine')
  var nf = { deferEvents: !1 },
    Ns = (function () {
      function t(e) {
        ;(this.processingEvent = !1),
          (this.queue = []),
          (this.initialized = !1),
          (this.options = V(V({}, nf), e))
      }
      return (
        c(t, 'Scheduler'),
        (t.prototype.initialize = function (e) {
          if (((this.initialized = !0), e)) {
            if (!this.options.deferEvents) {
              this.schedule(e)
              return
            }
            this.process(e)
          }
          this.flushEvents()
        }),
        (t.prototype.schedule = function (e) {
          if (!this.initialized || this.processingEvent) {
            this.queue.push(e)
            return
          }
          if (this.queue.length !== 0)
            throw new Error('Event queue should be empty when it is not processing events')
          this.process(e), this.flushEvents()
        }),
        (t.prototype.clear = function () {
          this.queue = []
        }),
        (t.prototype.flushEvents = function () {
          for (var e = this.queue.shift(); e; ) this.process(e), (e = this.queue.shift())
        }),
        (t.prototype.process = function (e) {
          this.processingEvent = !0
          try {
            e()
          } catch (r) {
            throw (this.clear(), r)
          } finally {
            this.processingEvent = !1
          }
        }),
        t
      )
    })()
  var Rs = new Map(),
    of = 0,
    Bi = {
      bookId: function () {
        return 'x:'.concat(of++)
      },
      register: function (t, e) {
        return Rs.set(t, e), t
      },
      get: function (t) {
        return Rs.get(t)
      },
      free: function (t) {
        Rs.delete(t)
      },
    }
  function oa() {
    if (typeof globalThis != 'undefined') return globalThis
    if (typeof self != 'undefined') return self
    if (typeof window != 'undefined') return window
    if (typeof global != 'undefined') return global
  }
  c(oa, 'getGlobal')
  function af() {
    var t = oa()
    if (t && '__xstate__' in t) return t.__xstate__
  }
  c(af, 'getDevTools')
  function nc(t) {
    if (!!oa()) {
      var e = af()
      e && e.register(t)
    }
  }
  c(nc, 'registerService')
  function ic(t, e) {
    e === void 0 && (e = {})
    var r = t.initialState,
      o = new Set(),
      u = [],
      l = !1,
      h = c(function () {
        if (!l) {
          for (l = !0; u.length > 0; ) {
            var x = u.shift()
            ;(r = t.transition(r, x, y)),
              o.forEach(function (w) {
                return w.next(r)
              })
          }
          l = !1
        }
      }, 'flush'),
      g = ec({
        id: e.id,
        send: function (x) {
          u.push(x), h()
        },
        getSnapshot: function () {
          return r
        },
        subscribe: function (x, w, _) {
          var P = Ko(x, w, _)
          return (
            o.add(P),
            P.next(r),
            {
              unsubscribe: function () {
                o.delete(P)
              },
            }
          )
        },
      }),
      y = { parent: e.parent, self: g, id: e.id || 'anonymous', observers: o }
    return (r = t.start ? t.start(y) : r), g
  }
  c(ic, 'spawnBehavior')
  var sf = { sync: !1, autoForward: !1 },
    ue
  ;(function (t) {
    ;(t[(t.NotStarted = 0)] = 'NotStarted'),
      (t[(t.Running = 1)] = 'Running'),
      (t[(t.Stopped = 2)] = 'Stopped')
  })(ue || (ue = {}))
  var oc = (function () {
    function t(e, r) {
      var o = this
      r === void 0 && (r = t.defaultOptions),
        (this.machine = e),
        (this.scheduler = new Ns()),
        (this.delayedEventsMap = {}),
        (this.listeners = new Set()),
        (this.contextListeners = new Set()),
        (this.stopListeners = new Set()),
        (this.doneListeners = new Set()),
        (this.eventListeners = new Set()),
        (this.sendListeners = new Set()),
        (this.initialized = !1),
        (this.status = ue.NotStarted),
        (this.children = new Map()),
        (this.forwardTo = new Set()),
        (this.init = this.start),
        (this.send = function (w, _) {
          if (br(w)) return o.batch(w), o.state
          var P = Ht(Ii(w, _))
          if (o.status === ue.Stopped)
            return (
              zt ||
                Gt(
                  !1,
                  'Event "'
                    .concat(P.name, '" was sent to stopped service "')
                    .concat(
                      o.machine.id,
                      `". This service has already reached its final state, and will not transition.
Event: `
                    )
                    .concat(JSON.stringify(P.data))
                ),
              o.state
            )
          if (o.status !== ue.Running && !o.options.deferEvents)
            throw new Error(
              'Event "'
                .concat(P.name, '" was sent to uninitialized service "')
                .concat(
                  o.machine.id,
                  `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `
                )
                .concat(JSON.stringify(P.data))
            )
          return (
            o.scheduler.schedule(function () {
              o.forward(P)
              var k = o.nextState(P)
              o.update(k, P)
            }),
            o._state
          )
        }),
        (this.sendTo = function (w, _) {
          var P = o.parent && (_ === Hr.Parent || o.parent.id === _),
            k = P ? o.parent : gt(_) ? o.children.get(_) || Bi.get(_) : Du(_) ? _ : void 0
          if (!k) {
            if (!P)
              throw new Error(
                "Unable to send event to child '".concat(_, "' from service '").concat(o.id, "'.")
              )
            zt ||
              Gt(
                !1,
                "Service '".concat(o.id, "' has no parent: unable to send event ").concat(w.type)
              )
            return
          }
          'machine' in k
            ? k.send(
                V(V({}, w), {
                  name: w.name === _s ? ''.concat(gn(o.id)) : w.name,
                  origin: o.sessionId,
                })
              )
            : k.send(w.data)
        })
      var u = V(V({}, t.defaultOptions), r),
        l = u.clock,
        h = u.logger,
        g = u.parent,
        y = u.id,
        x = y !== void 0 ? y : e.id
      ;(this.id = x),
        (this.logger = h),
        (this.clock = l),
        (this.parent = g),
        (this.options = u),
        (this.scheduler = new Ns({ deferEvents: this.options.deferEvents })),
        (this.sessionId = Bi.bookId())
    }
    return (
      c(t, 'Interpreter'),
      Object.defineProperty(t.prototype, 'initialState', {
        get: function () {
          var e = this
          return this._initialState
            ? this._initialState
            : xn(this, function () {
                return (e._initialState = e.machine.initialState), e._initialState
              })
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'state', {
        get: function () {
          return (
            zt ||
              Gt(
                this.status !== ue.NotStarted,
                "Attempted to read state from uninitialized service '".concat(
                  this.id,
                  "'. Make sure the service is started first."
                )
              ),
            this._state
          )
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.execute = function (e, r) {
        var o, u
        try {
          for (var l = mt(e.actions), h = l.next(); !h.done; h = l.next()) {
            var g = h.value
            this.exec(g, e, r)
          }
        } catch (y) {
          o = { error: y }
        } finally {
          try {
            h && !h.done && (u = l.return) && u.call(l)
          } finally {
            if (o) throw o.error
          }
        }
      }),
      (t.prototype.update = function (e, r) {
        var o,
          u,
          l,
          h,
          g,
          y,
          x,
          w,
          _ = this
        if (
          ((e._sessionid = this.sessionId),
          (this._state = e),
          this.options.execute && this.execute(this.state),
          this.children.forEach(function (B) {
            _.state.children[B.id] = B
          }),
          this.devTools && this.devTools.send(r.data, e),
          e.event)
        )
          try {
            for (var P = mt(this.eventListeners), k = P.next(); !k.done; k = P.next()) {
              var N = k.value
              N(e.event)
            }
          } catch (B) {
            o = { error: B }
          } finally {
            try {
              k && !k.done && (u = P.return) && u.call(P)
            } finally {
              if (o) throw o.error
            }
          }
        try {
          for (var O = mt(this.listeners), C = O.next(); !C.done; C = O.next()) {
            var N = C.value
            N(e, e.event)
          }
        } catch (B) {
          l = { error: B }
        } finally {
          try {
            C && !C.done && (h = O.return) && h.call(O)
          } finally {
            if (l) throw l.error
          }
        }
        try {
          for (var A = mt(this.contextListeners), M = A.next(); !M.done; M = A.next()) {
            var q = M.value
            q(this.state.context, this.state.history ? this.state.history.context : void 0)
          }
        } catch (B) {
          g = { error: B }
        } finally {
          try {
            M && !M.done && (y = A.return) && y.call(A)
          } finally {
            if (g) throw g.error
          }
        }
        var E = wn(e.configuration || [], this.machine)
        if (this.state.configuration && E) {
          var j = e.configuration.find(function (B) {
              return B.type === 'final' && B.parent === _.machine
            }),
            D = j && j.doneData ? fn(j.doneData, e.context, r) : void 0
          try {
            for (var X = mt(this.doneListeners), Y = X.next(); !Y.done; Y = X.next()) {
              var N = Y.value
              N(Zn(this.id, D))
            }
          } catch (B) {
            x = { error: B }
          } finally {
            try {
              Y && !Y.done && (w = X.return) && w.call(X)
            } finally {
              if (x) throw x.error
            }
          }
          this.stop()
        }
      }),
      (t.prototype.onTransition = function (e) {
        return (
          this.listeners.add(e), this.status === ue.Running && e(this.state, this.state.event), this
        )
      }),
      (t.prototype.subscribe = function (e, r, o) {
        var u = this
        if (!e) return { unsubscribe: function () {} }
        var l,
          h = o
        return (
          typeof e == 'function' ? (l = e) : ((l = e.next.bind(e)), (h = e.complete.bind(e))),
          this.listeners.add(l),
          this.status === ue.Running && l(this.state),
          h && this.onDone(h),
          {
            unsubscribe: function () {
              l && u.listeners.delete(l), h && u.doneListeners.delete(h)
            },
          }
        )
      }),
      (t.prototype.onEvent = function (e) {
        return this.eventListeners.add(e), this
      }),
      (t.prototype.onSend = function (e) {
        return this.sendListeners.add(e), this
      }),
      (t.prototype.onChange = function (e) {
        return this.contextListeners.add(e), this
      }),
      (t.prototype.onStop = function (e) {
        return this.stopListeners.add(e), this
      }),
      (t.prototype.onDone = function (e) {
        return this.doneListeners.add(e), this
      }),
      (t.prototype.off = function (e) {
        return (
          this.listeners.delete(e),
          this.eventListeners.delete(e),
          this.sendListeners.delete(e),
          this.stopListeners.delete(e),
          this.doneListeners.delete(e),
          this.contextListeners.delete(e),
          this
        )
      }),
      (t.prototype.start = function (e) {
        var r = this
        if (this.status === ue.Running) return this
        Bi.register(this.sessionId, this), (this.initialized = !0), (this.status = ue.Running)
        var o =
          e === void 0
            ? this.initialState
            : xn(this, function () {
                return Yu(e)
                  ? r.machine.resolveState(e)
                  : r.machine.resolveState(wr.from(e, r.machine.context))
              })
        return (
          this.options.devTools && this.attachDev(),
          this.scheduler.initialize(function () {
            r.update(o, mn)
          }),
          this
        )
      }),
      (t.prototype.stop = function () {
        var e,
          r,
          o,
          u,
          l,
          h,
          g,
          y,
          x,
          w,
          _ = this
        try {
          for (var P = mt(this.listeners), k = P.next(); !k.done; k = P.next()) {
            var N = k.value
            this.listeners.delete(N)
          }
        } catch (Y) {
          e = { error: Y }
        } finally {
          try {
            k && !k.done && (r = P.return) && r.call(P)
          } finally {
            if (e) throw e.error
          }
        }
        try {
          for (var O = mt(this.stopListeners), C = O.next(); !C.done; C = O.next()) {
            var N = C.value
            N(), this.stopListeners.delete(N)
          }
        } catch (Y) {
          o = { error: Y }
        } finally {
          try {
            C && !C.done && (u = O.return) && u.call(O)
          } finally {
            if (o) throw o.error
          }
        }
        try {
          for (var A = mt(this.contextListeners), M = A.next(); !M.done; M = A.next()) {
            var N = M.value
            this.contextListeners.delete(N)
          }
        } catch (Y) {
          l = { error: Y }
        } finally {
          try {
            M && !M.done && (h = A.return) && h.call(A)
          } finally {
            if (l) throw l.error
          }
        }
        try {
          for (var q = mt(this.doneListeners), E = q.next(); !E.done; E = q.next()) {
            var N = E.value
            this.doneListeners.delete(N)
          }
        } catch (Y) {
          g = { error: Y }
        } finally {
          try {
            E && !E.done && (y = q.return) && y.call(q)
          } finally {
            if (g) throw g.error
          }
        }
        if (!this.initialized) return this
        At([], yt(this.state.configuration), !1)
          .sort(function (Y, B) {
            return B.order - Y.order
          })
          .forEach(function (Y) {
            var B, U
            try {
              for (var rt = mt(Y.definition.exit), it = rt.next(); !it.done; it = rt.next()) {
                var H = it.value
                _.exec(H, _.state)
              }
            } catch (ct) {
              B = { error: ct }
            } finally {
              try {
                it && !it.done && (U = rt.return) && U.call(rt)
              } finally {
                if (B) throw B.error
              }
            }
          }),
          this.children.forEach(function (Y) {
            St(Y.stop) && Y.stop()
          })
        try {
          for (var j = mt(Mt(this.delayedEventsMap)), D = j.next(); !D.done; D = j.next()) {
            var X = D.value
            this.clock.clearTimeout(this.delayedEventsMap[X])
          }
        } catch (Y) {
          x = { error: Y }
        } finally {
          try {
            D && !D.done && (w = j.return) && w.call(j)
          } finally {
            if (x) throw x.error
          }
        }
        return (
          this.scheduler.clear(),
          (this.initialized = !1),
          (this.status = ue.Stopped),
          Bi.free(this.sessionId),
          this
        )
      }),
      (t.prototype.batch = function (e) {
        var r = this
        if (this.status === ue.NotStarted && this.options.deferEvents)
          zt ||
            Gt(
              !1,
              ''
                .concat(e.length, ' event(s) were sent to uninitialized service "')
                .concat(
                  this.machine.id,
                  `" and are deferred. Make sure .start() is called for this service.
Event: `
                )
                .concat(JSON.stringify(event))
            )
        else if (this.status !== ue.Running)
          throw new Error(
            ''
              .concat(e.length, ' event(s) were sent to uninitialized service "')
              .concat(
                this.machine.id,
                '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'
              )
          )
        this.scheduler.schedule(function () {
          var o,
            u,
            l = r.state,
            h = !1,
            g = [],
            y = c(function (P) {
              var k = Ht(P)
              r.forward(k),
                (l = xn(r, function () {
                  return r.machine.transition(l, k)
                })),
                g.push.apply(
                  g,
                  At(
                    [],
                    yt(
                      l.actions.map(function (N) {
                        return Xu(N, l)
                      })
                    ),
                    !1
                  )
                ),
                (h = h || !!l.changed)
            }, '_loop_1')
          try {
            for (var x = mt(e), w = x.next(); !w.done; w = x.next()) {
              var _ = w.value
              y(_)
            }
          } catch (P) {
            o = { error: P }
          } finally {
            try {
              w && !w.done && (u = x.return) && u.call(x)
            } finally {
              if (o) throw o.error
            }
          }
          ;(l.changed = h), (l.actions = g), r.update(l, Ht(e[e.length - 1]))
        })
      }),
      (t.prototype.sender = function (e) {
        return this.send.bind(this, e)
      }),
      (t.prototype.nextState = function (e) {
        var r = this,
          o = Ht(e)
        if (
          o.name.indexOf(Cs) === 0 &&
          !this.state.nextEvents.some(function (l) {
            return l.indexOf(Cs) === 0
          })
        )
          throw o.data.data
        var u = xn(this, function () {
          return r.machine.transition(r.state, o)
        })
        return u
      }),
      (t.prototype.forward = function (e) {
        var r, o
        try {
          for (var u = mt(this.forwardTo), l = u.next(); !l.done; l = u.next()) {
            var h = l.value,
              g = this.children.get(h)
            if (!g)
              throw new Error(
                "Unable to forward event '"
                  .concat(e, "' from interpreter '")
                  .concat(this.id, "' to nonexistant child '")
                  .concat(h, "'.")
              )
            g.send(e)
          }
        } catch (y) {
          r = { error: y }
        } finally {
          try {
            l && !l.done && (o = u.return) && o.call(u)
          } finally {
            if (r) throw r.error
          }
        }
      }),
      (t.prototype.defer = function (e) {
        var r = this
        this.delayedEventsMap[e.id] = this.clock.setTimeout(function () {
          e.to ? r.sendTo(e._event, e.to) : r.send(e._event)
        }, e.delay)
      }),
      (t.prototype.cancel = function (e) {
        this.clock.clearTimeout(this.delayedEventsMap[e]), delete this.delayedEventsMap[e]
      }),
      (t.prototype.exec = function (e, r, o) {
        o === void 0 && (o = this.machine.options.actions)
        var u = r.context,
          l = r._event,
          h = e.exec || ra(e.type, o),
          g = St(h) ? h : h ? h.exec : e.exec
        if (g)
          try {
            return g(u, l.data, { action: e, state: this.state, _event: l })
          } catch (E) {
            throw (this.parent && this.parent.send({ type: 'xstate.error', data: E }), E)
          }
        switch (e.type) {
          case vn:
            var y = e
            if (typeof y.delay == 'number') {
              this.defer(y)
              return
            } else y.to ? this.sendTo(y._event, y.to) : this.send(y._event)
            break
          case ta:
            this.cancel(e.sendId)
            break
          case ki: {
            if (this.status !== ue.Running) return
            var x = e.activity
            if (!this.state.activities[x.id || x.type]) break
            if (x.type === Ot.Invoke) {
              var w = Qo(x.src),
                _ = this.machine.options.services ? this.machine.options.services[w.type] : void 0,
                P = x.id,
                k = x.data
              zt ||
                Gt(
                  !('forward' in x),
                  "`forward` property is deprecated (found in invocation of '"
                    .concat(x.src, "' in in machine '")
                    .concat(this.machine.id, "'). ") + 'Please use `autoForward` instead.'
                )
              var N = 'autoForward' in x ? x.autoForward : !!x.forward
              if (!_) {
                zt ||
                  Gt(
                    !1,
                    "No service found for invocation '"
                      .concat(x.src, "' in machine '")
                      .concat(this.machine.id, "'.")
                  )
                return
              }
              var O = k ? fn(k, u, l) : void 0
              if (typeof _ == 'string') return
              var C = St(_) ? _(u, l.data, { data: O, src: w, meta: x.meta }) : _
              if (!C) return
              var A = void 0
              ir(C) && ((C = O ? C.withContext(O) : C), (A = { autoForward: N })),
                this.spawn(C, P, A)
            } else this.spawnActivity(x)
            break
          }
          case Vn: {
            this.stopChild(e.activity.id)
            break
          }
          case ea:
            var M = e.label,
              q = e.value
            M ? this.logger(M, q) : this.logger(q)
            break
          default:
            zt || Gt(!1, "No implementation found for action type '".concat(e.type, "'"))
            break
        }
      }),
      (t.prototype.removeChild = function (e) {
        var r
        this.children.delete(e),
          this.forwardTo.delete(e),
          (r = this.state) === null || r === void 0 || delete r.children[e]
      }),
      (t.prototype.stopChild = function (e) {
        var r = this.children.get(e)
        !r || (this.removeChild(e), St(r.stop) && r.stop())
      }),
      (t.prototype.spawn = function (e, r, o) {
        if (Es(e)) return this.spawnPromise(Promise.resolve(e), r)
        if (St(e)) return this.spawnCallback(e, r)
        if (tc(e)) return this.spawnActor(e, r)
        if (Iu(e)) return this.spawnObservable(e, r)
        if (ir(e)) return this.spawnMachine(e, V(V({}, o), { id: r }))
        if (Pu(e)) return this.spawnBehavior(e, r)
        throw new Error('Unable to spawn entity "'.concat(r, '" of type "').concat(typeof e, '".'))
      }),
      (t.prototype.spawnMachine = function (e, r) {
        var o = this
        r === void 0 && (r = {})
        var u = new t(e, V(V({}, this.options), { parent: this, id: r.id || e.id })),
          l = V(V({}, sf), r)
        l.sync &&
          u.onTransition(function (g) {
            o.send(Ri, { state: g, id: u.id })
          })
        var h = u
        return (
          this.children.set(u.id, h),
          l.autoForward && this.forwardTo.add(u.id),
          u
            .onDone(function (g) {
              o.removeChild(u.id), o.send(Ht(g, { origin: u.id }))
            })
            .start(),
          h
        )
      }),
      (t.prototype.spawnBehavior = function (e, r) {
        var o = ic(e, { id: r, parent: this })
        return this.children.set(r, o), o
      }),
      (t.prototype.spawnPromise = function (e, r) {
        var o = this,
          u = !1,
          l
        e.then(
          function (g) {
            u || ((l = g), o.removeChild(r), o.send(Ht(Zn(r, g), { origin: r })))
          },
          function (g) {
            if (!u) {
              o.removeChild(r)
              var y = gn(r, g)
              try {
                o.send(Ht(y, { origin: r }))
              } catch (x) {
                Nu(g, x, r), o.devTools && o.devTools.send(y, o.state), o.machine.strict && o.stop()
              }
            }
          }
        )
        var h = V(
          {
            id: r,
            send: function () {},
            subscribe: function (g, y, x) {
              var w = Ko(g, y, x),
                _ = !1
              return (
                e.then(
                  function (P) {
                    _ || (w.next(P), !_ && w.complete())
                  },
                  function (P) {
                    _ || w.error(P)
                  }
                ),
                {
                  unsubscribe: function () {
                    return (_ = !0)
                  },
                }
              )
            },
            stop: function () {
              u = !0
            },
            toJSON: function () {
              return { id: r }
            },
            getSnapshot: function () {
              return l
            },
          },
          Ur
        )
        return this.children.set(r, h), h
      }),
      (t.prototype.spawnCallback = function (e, r) {
        var o = this,
          u = !1,
          l = new Set(),
          h = new Set(),
          g,
          y = c(function (_) {
            ;(g = _),
              h.forEach(function (P) {
                return P(_)
              }),
              !u && o.send(Ht(_, { origin: r }))
          }, 'receive'),
          x
        try {
          x = e(y, function (_) {
            l.add(_)
          })
        } catch (_) {
          this.send(gn(r, _))
        }
        if (Es(x)) return this.spawnPromise(x, r)
        var w = V(
          {
            id: r,
            send: function (_) {
              return l.forEach(function (P) {
                return P(_)
              })
            },
            subscribe: function (_) {
              return (
                h.add(_),
                {
                  unsubscribe: function () {
                    h.delete(_)
                  },
                }
              )
            },
            stop: function () {
              ;(u = !0), St(x) && x()
            },
            toJSON: function () {
              return { id: r }
            },
            getSnapshot: function () {
              return g
            },
          },
          Ur
        )
        return this.children.set(r, w), w
      }),
      (t.prototype.spawnObservable = function (e, r) {
        var o = this,
          u,
          l = e.subscribe(
            function (g) {
              ;(u = g), o.send(Ht(g, { origin: r }))
            },
            function (g) {
              o.removeChild(r), o.send(Ht(gn(r, g), { origin: r }))
            },
            function () {
              o.removeChild(r), o.send(Ht(Zn(r), { origin: r }))
            }
          ),
          h = V(
            {
              id: r,
              send: function () {},
              subscribe: function (g, y, x) {
                return e.subscribe(g, y, x)
              },
              stop: function () {
                return l.unsubscribe()
              },
              getSnapshot: function () {
                return u
              },
              toJSON: function () {
                return { id: r }
              },
            },
            Ur
          )
        return this.children.set(r, h), h
      }),
      (t.prototype.spawnActor = function (e, r) {
        return this.children.set(r, e), e
      }),
      (t.prototype.spawnActivity = function (e) {
        var r =
          this.machine.options && this.machine.options.activities
            ? this.machine.options.activities[e.type]
            : void 0
        if (!r) {
          zt || Gt(!1, "No implementation found for activity '".concat(e.type, "'"))
          return
        }
        var o = r(this.state.context, e)
        this.spawnEffect(e.id, o)
      }),
      (t.prototype.spawnEffect = function (e, r) {
        this.children.set(
          e,
          V(
            {
              id: e,
              send: function () {},
              subscribe: function () {
                return { unsubscribe: function () {} }
              },
              stop: r || void 0,
              getSnapshot: function () {},
              toJSON: function () {
                return { id: e }
              },
            },
            Ur
          )
        )
      }),
      (t.prototype.attachDev = function () {
        var e = oa()
        if (this.options.devTools && e) {
          if (e.__REDUX_DEVTOOLS_EXTENSION__) {
            var r = typeof this.options.devTools == 'object' ? this.options.devTools : void 0
            ;(this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(
              V(
                V(
                  {
                    name: this.id,
                    autoPause: !0,
                    stateSanitizer: function (o) {
                      return { value: o.value, context: o.context, actions: o.actions }
                    },
                  },
                  r
                ),
                { features: V({ jump: !1, skip: !1 }, r ? r.features : void 0) }
              ),
              this.machine
            )),
              this.devTools.init(this.state)
          }
          nc(this)
        }
      }),
      (t.prototype.toJSON = function () {
        return { id: this.id }
      }),
      (t.prototype[Os] = function () {
        return this
      }),
      (t.prototype.getSnapshot = function () {
        return this.status === ue.NotStarted ? this.initialState : this._state
      }),
      (t.defaultOptions = (function (e) {
        return {
          execute: !0,
          deferEvents: !0,
          clock: {
            setTimeout: function (r, o) {
              return setTimeout(r, o)
            },
            clearTimeout: function (r) {
              return clearTimeout(r)
            },
          },
          logger: e.console.log.bind(console),
          devTools: !1,
        }
      })(typeof self != 'undefined' ? self : global)),
      (t.interpret = Jt),
      t
    )
  })()
  function Jt(t, e) {
    var r = new oc(t, e)
    return r
  }
  c(Jt, 'interpret')
  var Vr = Bo(sc(), 1)
  function lc(t) {
    let e = Yr(t)
    return new Vr.default(e).valueOf() * Math.PI
  }
  c(lc, 'L')
  function Fi(t) {
    let e = Yr(t).split('/')
    if (e.length === 1) return 1
    if (e.length === 2) return parseInt(e[1])
    throw new Error(`Failed to parse angle '${t}'`)
  }
  c(Fi, 'Y')
  function uc(t, e) {
    return new Vr.default(Yr(t)).valueOf() < new Vr.default(Yr(e)).valueOf()
  }
  c(uc, 'H')
  function cc(t, e) {
    return new Vr.default(Yr(t)).valueOf() > new Vr.default(Yr(e)).valueOf()
  }
  c(cc, 'Q')
  function pc(t) {
    if (t === '0') return !0
    if (!/π/.test(t)) return !1
    try {
      let e = Yr(t)
      return new Vr.default(e).valueOf(), !0
    } catch {
      return !1
    }
  }
  c(pc, 'J')
  function Yr(t) {
    return t.replace(/(\d+)π/g, '$1').replace(/π/g, '1')
  }
  c(Yr, 'l')
  function dc(t) {
    try {
      let e = Yr(t),
        r = new Vr.default(e).toFraction().split('/'),
        o
      return (
        r[0] === '0'
          ? (o = '0')
          : r[0] === '1'
          ? (o = '\u03C0')
          : r[0] === '-1'
          ? (o = '-\u03C0')
          : (o = `${r[0]}\u03C0`),
        r.length === 1 ? o : `${o}/${r[1]}`
      )
    } catch {
      throw new Error(`Failed to parse angle '${t}'`)
    }
  }
  c(dc, 'j')
  var aa = 1e3,
    lf = Object.prototype.toString.call({}),
    uf = '!recursion-limit!',
    cf = 10
  function Vt(t, e = cf) {
    return pf(t) || df(t, e) || ff(t, e)
  }
  c(Vt, 'c')
  function pf(t) {
    if (t === null) return 'null'
    if (t === void 0) return 'undefined'
    if (typeof t == 'string') return `"${t}"`
    if (typeof t == 'number') return String(t)
  }
  c(pf, 'G')
  function df(t, e) {
    if (e === 0) return uf
    if (t instanceof Map) return hf(t, e)
    if (t instanceof Set) return vf(t, e)
    if (((r) => r[Symbol.iterator] !== void 0)(t)) return mf(t, e)
  }
  c(df, 'R')
  function ff(t, e) {
    let r = String(t)
    return r !== lf ? r : gf(t, e)
  }
  c(ff, 'F')
  function hf(t, e) {
    let r = []
    for (let [o, u] of t.entries()) {
      if (r.length > aa) {
        r.push('[...]')
        break
      }
      let l = Vt(o, e - 1),
        h = Vt(u, e - 1)
      r.push(`${l}: ${h}`)
    }
    return `Map{${r.join(', ')}}`
  }
  c(hf, 'O')
  function vf(t, e) {
    let r = []
    for (let o of t) {
      if (r.length > aa) {
        r.push('[...]')
        break
      }
      r.push(Vt(o, e - 1))
    }
    return `Set{${r.join(', ')}}`
  }
  c(vf, 'q')
  function mf(t, e) {
    let r = []
    for (let o of t) {
      if (r.length > aa) {
        r.push('[...]')
        break
      }
      r.push(Vt(o, e - 1))
    }
    return `${Array.isArray(t) ? '' : t.constructor.name}[${r.join(', ')}]`
  }
  c(mf, 'D')
  function gf(t, e) {
    let r = []
    for (let u in t) {
      if (!Object.prototype.hasOwnProperty.call(t, u)) continue
      if (r.length > aa) {
        r.push('[...]')
        break
      }
      let l = t[u],
        h = Vt(u, e - 1),
        g = Vt(l, e - 1)
      r.push(`${h}: ${g}`)
    }
    let o = t.constructor.name
    return `${o === {}.constructor.name ? '' : `(Type: ${o})`}{${r.join(', ')}}`
  }
  c(gf, 'v')
  var qs = 0,
    En = c(
      class extends Error {
        constructor(t, e) {
          super(t)
          ;(this.detailsObj = e),
            (this.name = 'Error'),
            (this.message = t),
            (this.stack = new Error().stack),
            this.stack !== void 0 &&
              (this.stack = this.stack.replace(
                /^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /,
                `
    `
              )),
            qs++
          try {
            this.details =
              qs === 1
                ? Vt(this.detailsObj)
                : '(failed to describe detailsObj due to possibly re-entrancy)'
          } catch (r) {
            console.error(r),
              (this.details = '(failed to describe detailsObj, see the console for details)')
          } finally {
            qs--
          }
        }
      },
      'd'
    ),
    yf = [
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
    Re = c(
      class {
        static parseFloat(t) {
          if (t.length === 0) throw new Error(`Not a number: '${t}'`)
          if (t[0] === '-') return -Re.parseFloat(t.substr(1))
          if (t[0] === '\u221A') return Math.sqrt(Re.parseFloat(t.substr(1)))
          let e = Re.matchUnicodeFraction((o) => o.character === t)
          if (e !== void 0) return e.value
          let r = parseFloat(t)
          if (isNaN(r)) throw new Error(`Not a number: '${t}'`)
          return r
        }
        static simplifyByRounding(t, e) {
          if (t < 0) return -Re.simplifyByRounding(-t, e)
          let r = t % 1
          if (r <= e || 1 - r <= e) return Math.round(t)
          let o = Re.matchUnicodeFraction((l) => Math.abs(l.value - t) <= e)
          if (o !== void 0) return o.value
          let u = Re.matchUnicodeFraction((l) => Math.abs(Math.sqrt(l.value) - t) <= e)
          return u !== void 0 ? Math.sqrt(u.value) : t
        }
        static matchUnicodeFraction(t) {
          for (let e of yf) if (t(e)) return e
        }
        constructor(t, e, r, o) {
          ;(this.allowAbbreviation = t),
            (this.maxAbbreviationError = e),
            (this.fixedDigits = r),
            (this.itemSeparator = o)
        }
        formatFloat(t) {
          return this.allowAbbreviation
            ? this.abbreviateFloat(t, this.maxAbbreviationError, this.fixedDigits)
            : this.fixedDigits !== void 0
            ? t.toFixed(this.fixedDigits)
            : String(t)
        }
        abbreviateFloat(t, e = 0, r = void 0) {
          if (Math.abs(t) < e) return '0'
          if (t < 0) return `-${this.abbreviateFloat(-t, e, r)}`
          let o = Re.matchUnicodeFraction((l) => Math.abs(l.value - t) <= e)
          if (o !== void 0) return o.character
          let u = Re.matchUnicodeFraction((l) => Math.abs(Math.sqrt(l.value) - t) <= e)
          return u !== void 0
            ? `\u221A${u.character}`
            : t % 1 !== 0 && r !== void 0
            ? t.toFixed(r)
            : t.toString()
        }
      },
      'u'
    ),
    Wi = Re
  ;(Wi.CONSISTENT = new Re(!1, 0, 2, ', ')),
    (Wi.EXACT = new Re(!0, 0, void 0, ', ')),
    (Wi.MINIFIED = new Re(!0, 0, void 0, ',')),
    (Wi.SIMPLIFIED = new Re(!0, 5e-4, 3, ', '))
  var ut = c(
      class {
        static need(t, e, r) {
          if (t !== !0) {
            let o =
                r === void 0 ? '(not provided)' : `[${Array.prototype.slice.call(r).join(', ')}]`,
              u = `Precondition failed

Message: ${e === void 0 ? '(not provided)' : e}

Args: ${o}`
            throw new Error(u)
          }
        }
        static notNull(t) {
          ut.need(t != null, 'notNull')
        }
        static snappedCosSin(t) {
          let e = Math.PI / 4,
            r = Math.round(t / e)
          if (r * e === t) {
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
            ][r & 7]
          }
          return [Math.cos(t), Math.sin(t)]
        }
      },
      'm'
    ),
    ft = c(
      class {
        static from(t) {
          if (t instanceof ft) return t
          if (typeof t == 'number') return new ft(t, 0)
          throw new En('Unrecognized value type.', { v: t })
        }
        static polar(t, e) {
          let [r, o] = ut.snappedCosSin(e)
          return new ft(t * r, t * o)
        }
        static realPartOf(t) {
          if (t instanceof ft) return t.real
          if (typeof t == 'number') return t
          throw new En('Unrecognized value type.', { v: t })
        }
        static imagPartOf(t) {
          if (t instanceof ft) return t.imag
          if (typeof t == 'number') return 0
          throw new En('Unrecognized value type.', { v: t })
        }
        constructor(t, e) {
          ;(this.real = t), (this.imag = e)
        }
        static rootsOfQuadratic(t, e, r) {
          if (((t = ft.from(t)), (e = ft.from(e)), (r = ft.from(r)), t.isEqualTo(0))) {
            if (!e.isEqualTo(0)) return [r.times(-1).dividedBy(e)]
            if (!r.isEqualTo(0)) return []
            throw Error('Degenerate')
          }
          let o = e.times(e).minus(t.times(r).times(4)).sqrts(),
            u = e.times(-1),
            l = t.times(2)
          return o.map((h) => u.minus(h).dividedBy(l))
        }
        isEqualTo(t) {
          return t instanceof ft
            ? this.real === t.real && this.imag === t.imag
            : typeof t == 'number'
            ? this.real === t && this.imag === 0
            : !1
        }
        isApproximatelyEqualTo(t, e) {
          if (t instanceof ft || typeof t == 'number') {
            let r = this.minus(ft.from(t))
            return Math.abs(r.real) <= e && Math.abs(r.imag) <= e && r.abs() <= e
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
          let t = this.norm2()
          return t < 1e-5 ? ft.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t))
        }
        plus(t) {
          let e = ft.from(t)
          return new ft(this.real + e.real, this.imag + e.imag)
        }
        minus(t) {
          let e = ft.from(t)
          return new ft(this.real - e.real, this.imag - e.imag)
        }
        times(t) {
          let e = ft.from(t)
          return new ft(
            this.real * e.real - this.imag * e.imag,
            this.real * e.imag + this.imag * e.real
          )
        }
        dividedBy(t) {
          let e = ft.from(t),
            r = e.norm2()
          if (r === 0) throw new Error('Division by Zero')
          let o = this.times(e.conjugate())
          return new ft(o.real / r, o.imag / r)
        }
        sqrts() {
          let [t, e] = [this.real, this.imag],
            r = Math.sqrt(Math.sqrt(t * t + e * e))
          if (r === 0) return [ft.ZERO]
          if (e === 0 && t < 0) return [new ft(0, r), new ft(0, -r)]
          let o = this.phase() / 2,
            u = ft.polar(r, o)
          return [u, u.times(-1)]
        }
        conjugate() {
          return new ft(this.real, -this.imag)
        }
        toString(t) {
          return (
            (t = t || Wi.EXACT),
            t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t)
          )
        }
        neg() {
          return new ft(-this.real, -this.imag)
        }
        raisedTo(t) {
          return t === 0.5 && this.imag === 0 && this.real >= 0
            ? new ft(Math.sqrt(this.real), 0)
            : ft.ZERO.isEqualTo(t)
            ? ft.ONE
            : this.isEqualTo(ft.ZERO)
            ? ft.ZERO
            : this.ln().times(ft.from(t)).exp()
        }
        exp() {
          return ft.polar(Math.exp(this.real), this.imag)
        }
        cos() {
          let t = this.times(ft.I)
          return t.exp().plus(t.neg().exp()).times(0.5)
        }
        sin() {
          let t = this.times(ft.I)
          return t.exp().minus(t.neg().exp()).dividedBy(new ft(0, 2))
        }
        tan() {
          return this.sin().dividedBy(this.cos())
        }
        ln() {
          return new ft(Math.log(this.abs()), this.phase())
        }
        phase() {
          return Math.atan2(this.imag, this.real)
        }
        toStringAllowSingleValue(t) {
          return Math.abs(this.imag) <= t.maxAbbreviationError
            ? t.formatFloat(this.real)
            : Math.abs(this.real) <= t.maxAbbreviationError
            ? Math.abs(this.imag - 1) <= t.maxAbbreviationError
              ? 'i'
              : Math.abs(this.imag + 1) <= t.maxAbbreviationError
              ? '-i'
              : `${t.formatFloat(this.imag)}i`
            : this.toStringBothValues(t)
        }
        toStringBothValues(t) {
          let e = this.imag >= 0 ? '+' : '-',
            r =
              t.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= t.maxAbbreviationError
                ? ''
                : t.formatFloat(Math.abs(this.imag))
          return `${
            (t.allowAbbreviation || t.fixedDigits === void 0 || this.real < 0 ? '' : '+') +
            t.formatFloat(this.real) +
            e +
            r
          }i`
        }
      },
      'o'
    ),
    Xr = ft
  ;(Xr.ZERO = new ft(0, 0)), (Xr.ONE = new ft(1, 0)), (Xr.I = new ft(0, 1))
  var sa = 'H',
    la = 'X',
    ua = 'Y',
    ca = 'Z',
    pa = 'P',
    da = 'X^\xBD',
    fa = 'Rx',
    ha = 'Ry',
    va = 'Rz',
    Ls = 'Swap',
    js = '\u2022',
    Gs = 'Bloch',
    fc = '|0>',
    hc = '|1>',
    ma = 'Measure'
  var ao = Bo(ga(), 1)
  var Lt = 'top',
    Yt = 'bottom',
    Wt = 'right',
    $t = 'left',
    ya = 'auto',
    Zr = [Lt, Yt, Wt, $t],
    xr = 'start',
    Sn = 'end',
    mc = 'clippingParents',
    ba = 'viewport',
    ti = 'popper',
    gc = 'reference',
    Bs = Zr.reduce(function (t, e) {
      return t.concat([e + '-' + xr, e + '-' + Sn])
    }, []),
    wa = [].concat(Zr, [ya]).reduce(function (t, e) {
      return t.concat([e, e + '-' + xr, e + '-' + Sn])
    }, []),
    bf = 'beforeRead',
    wf = 'read',
    xf = 'afterRead',
    Ef = 'beforeMain',
    Sf = 'main',
    Of = 'afterMain',
    Tf = 'beforeWrite',
    Cf = 'write',
    _f = 'afterWrite',
    yc = [bf, wf, xf, Ef, Sf, Of, Tf, Cf, _f]
  function Qt(t) {
    return t ? (t.nodeName || '').toLowerCase() : null
  }
  c(Qt, 'getNodeName')
  function Bt(t) {
    if (t == null) return window
    if (t.toString() !== '[object Window]') {
      var e = t.ownerDocument
      return (e && e.defaultView) || window
    }
    return t
  }
  c(Bt, 'getWindow')
  function or(t) {
    var e = Bt(t).Element
    return t instanceof e || t instanceof Element
  }
  c(or, 'isElement')
  function Xt(t) {
    var e = Bt(t).HTMLElement
    return t instanceof e || t instanceof HTMLElement
  }
  c(Xt, 'isHTMLElement')
  function xa(t) {
    if (typeof ShadowRoot == 'undefined') return !1
    var e = Bt(t).ShadowRoot
    return t instanceof e || t instanceof ShadowRoot
  }
  c(xa, 'isShadowRoot')
  function Pf(t) {
    var e = t.state
    Object.keys(e.elements).forEach(function (r) {
      var o = e.styles[r] || {},
        u = e.attributes[r] || {},
        l = e.elements[r]
      !Xt(l) ||
        !Qt(l) ||
        (Object.assign(l.style, o),
        Object.keys(u).forEach(function (h) {
          var g = u[h]
          g === !1 ? l.removeAttribute(h) : l.setAttribute(h, g === !0 ? '' : g)
        }))
    })
  }
  c(Pf, 'applyStyles')
  function Af(t) {
    var e = t.state,
      r = {
        popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' },
        arrow: { position: 'absolute' },
        reference: {},
      }
    return (
      Object.assign(e.elements.popper.style, r.popper),
      (e.styles = r),
      e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow),
      function () {
        Object.keys(e.elements).forEach(function (o) {
          var u = e.elements[o],
            l = e.attributes[o] || {},
            h = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : r[o]),
            g = h.reduce(function (y, x) {
              return (y[x] = ''), y
            }, {})
          !Xt(u) ||
            !Qt(u) ||
            (Object.assign(u.style, g),
            Object.keys(l).forEach(function (y) {
              u.removeAttribute(y)
            }))
        })
      }
    )
  }
  c(Af, 'effect')
  var Ui = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: Pf,
    effect: Af,
    requires: ['computeStyles'],
  }
  function Kt(t) {
    return t.split('-')[0]
  }
  c(Kt, 'getBasePlacement')
  var Ze = Math.max,
    On = Math.min,
    Er = Math.round
  function $e(t, e) {
    e === void 0 && (e = !1)
    var r = t.getBoundingClientRect(),
      o = 1,
      u = 1
    if (Xt(t) && e) {
      var l = t.offsetHeight,
        h = t.offsetWidth
      h > 0 && (o = Er(r.width) / h || 1), l > 0 && (u = Er(r.height) / l || 1)
    }
    return {
      width: r.width / o,
      height: r.height / u,
      top: r.top / u,
      right: r.right / o,
      bottom: r.bottom / u,
      left: r.left / o,
      x: r.left / o,
      y: r.top / u,
    }
  }
  c($e, 'getBoundingClientRect')
  function Tn(t) {
    var e = $e(t),
      r = t.offsetWidth,
      o = t.offsetHeight
    return (
      Math.abs(e.width - r) <= 1 && (r = e.width),
      Math.abs(e.height - o) <= 1 && (o = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: r, height: o }
    )
  }
  c(Tn, 'getLayoutRect')
  function Hi(t, e) {
    var r = e.getRootNode && e.getRootNode()
    if (t.contains(e)) return !0
    if (r && xa(r)) {
      var o = e
      do {
        if (o && t.isSameNode(o)) return !0
        o = o.parentNode || o.host
      } while (o)
    }
    return !1
  }
  c(Hi, 'contains')
  function he(t) {
    return Bt(t).getComputedStyle(t)
  }
  c(he, 'getComputedStyle')
  function Fs(t) {
    return ['table', 'td', 'th'].indexOf(Qt(t)) >= 0
  }
  c(Fs, 'isTableElement')
  function se(t) {
    return ((or(t) ? t.ownerDocument : t.document) || window.document).documentElement
  }
  c(se, 'getDocumentElement')
  function Sr(t) {
    return Qt(t) === 'html' ? t : t.assignedSlot || t.parentNode || (xa(t) ? t.host : null) || se(t)
  }
  c(Sr, 'getParentNode')
  function bc(t) {
    return !Xt(t) || he(t).position === 'fixed' ? null : t.offsetParent
  }
  c(bc, 'getTrueOffsetParent')
  function Mf(t) {
    var e = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
      r = navigator.userAgent.indexOf('Trident') !== -1
    if (r && Xt(t)) {
      var o = he(t)
      if (o.position === 'fixed') return null
    }
    for (var u = Sr(t); Xt(u) && ['html', 'body'].indexOf(Qt(u)) < 0; ) {
      var l = he(u)
      if (
        l.transform !== 'none' ||
        l.perspective !== 'none' ||
        l.contain === 'paint' ||
        ['transform', 'perspective'].indexOf(l.willChange) !== -1 ||
        (e && l.willChange === 'filter') ||
        (e && l.filter && l.filter !== 'none')
      )
        return u
      u = u.parentNode
    }
    return null
  }
  c(Mf, 'getContainingBlock')
  function Je(t) {
    for (var e = Bt(t), r = bc(t); r && Fs(r) && he(r).position === 'static'; ) r = bc(r)
    return r && (Qt(r) === 'html' || (Qt(r) === 'body' && he(r).position === 'static'))
      ? e
      : r || Mf(t) || e
  }
  c(Je, 'getOffsetParent')
  function Cn(t) {
    return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y'
  }
  c(Cn, 'getMainAxisFromPlacement')
  function _n(t, e, r) {
    return Ze(t, On(e, r))
  }
  c(_n, 'within')
  function wc(t, e, r) {
    var o = _n(t, e, r)
    return o > r ? r : o
  }
  c(wc, 'withinMaxClamp')
  function Vi() {
    return { top: 0, right: 0, bottom: 0, left: 0 }
  }
  c(Vi, 'getFreshSideObject')
  function Yi(t) {
    return Object.assign({}, Vi(), t)
  }
  c(Yi, 'mergePaddingObject')
  function Xi(t, e) {
    return e.reduce(function (r, o) {
      return (r[o] = t), r
    }, {})
  }
  c(Xi, 'expandToHashMap')
  var If = c(function (e, r) {
    return (
      (e = typeof e == 'function' ? e(Object.assign({}, r.rects, { placement: r.placement })) : e),
      Yi(typeof e != 'number' ? e : Xi(e, Zr))
    )
  }, 'toPaddingObject')
  function Df(t) {
    var e,
      r = t.state,
      o = t.name,
      u = t.options,
      l = r.elements.arrow,
      h = r.modifiersData.popperOffsets,
      g = Kt(r.placement),
      y = Cn(g),
      x = [$t, Wt].indexOf(g) >= 0,
      w = x ? 'height' : 'width'
    if (!(!l || !h)) {
      var _ = If(u.padding, r),
        P = Tn(l),
        k = y === 'y' ? Lt : $t,
        N = y === 'y' ? Yt : Wt,
        O = r.rects.reference[w] + r.rects.reference[y] - h[y] - r.rects.popper[w],
        C = h[y] - r.rects.reference[y],
        A = Je(l),
        M = A ? (y === 'y' ? A.clientHeight || 0 : A.clientWidth || 0) : 0,
        q = O / 2 - C / 2,
        E = _[k],
        j = M - P[w] - _[N],
        D = M / 2 - P[w] / 2 + q,
        X = _n(E, D, j),
        Y = y
      r.modifiersData[o] = ((e = {}), (e[Y] = X), (e.centerOffset = X - D), e)
    }
  }
  c(Df, 'arrow')
  function kf(t) {
    var e = t.state,
      r = t.options,
      o = r.element,
      u = o === void 0 ? '[data-popper-arrow]' : o
    u != null &&
      ((typeof u == 'string' && ((u = e.elements.popper.querySelector(u)), !u)) ||
        !Hi(e.elements.popper, u) ||
        (e.elements.arrow = u))
  }
  c(kf, 'effect')
  var xc = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: Df,
    effect: kf,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  }
  function Be(t) {
    return t.split('-')[1]
  }
  c(Be, 'getVariation')
  var Nf = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
  function Rf(t) {
    var e = t.x,
      r = t.y,
      o = window,
      u = o.devicePixelRatio || 1
    return { x: Er(e * u) / u || 0, y: Er(r * u) / u || 0 }
  }
  c(Rf, 'roundOffsetsByDPR')
  function Ec(t) {
    var e,
      r = t.popper,
      o = t.popperRect,
      u = t.placement,
      l = t.variation,
      h = t.offsets,
      g = t.position,
      y = t.gpuAcceleration,
      x = t.adaptive,
      w = t.roundOffsets,
      _ = t.isFixed,
      P = h.x,
      k = P === void 0 ? 0 : P,
      N = h.y,
      O = N === void 0 ? 0 : N,
      C = typeof w == 'function' ? w({ x: k, y: O }) : { x: k, y: O }
    ;(k = C.x), (O = C.y)
    var A = h.hasOwnProperty('x'),
      M = h.hasOwnProperty('y'),
      q = $t,
      E = Lt,
      j = window
    if (x) {
      var D = Je(r),
        X = 'clientHeight',
        Y = 'clientWidth'
      if (
        (D === Bt(r) &&
          ((D = se(r)),
          he(D).position !== 'static' &&
            g === 'absolute' &&
            ((X = 'scrollHeight'), (Y = 'scrollWidth'))),
        (D = D),
        u === Lt || ((u === $t || u === Wt) && l === Sn))
      ) {
        E = Yt
        var B = _ && j.visualViewport ? j.visualViewport.height : D[X]
        ;(O -= B - o.height), (O *= y ? 1 : -1)
      }
      if (u === $t || ((u === Lt || u === Yt) && l === Sn)) {
        q = Wt
        var U = _ && j.visualViewport ? j.visualViewport.width : D[Y]
        ;(k -= U - o.width), (k *= y ? 1 : -1)
      }
    }
    var rt = Object.assign({ position: g }, x && Nf),
      it = w === !0 ? Rf({ x: k, y: O }) : { x: k, y: O }
    if (((k = it.x), (O = it.y), y)) {
      var H
      return Object.assign(
        {},
        rt,
        ((H = {}),
        (H[E] = M ? '0' : ''),
        (H[q] = A ? '0' : ''),
        (H.transform =
          (j.devicePixelRatio || 1) <= 1
            ? 'translate(' + k + 'px, ' + O + 'px)'
            : 'translate3d(' + k + 'px, ' + O + 'px, 0)'),
        H)
      )
    }
    return Object.assign(
      {},
      rt,
      ((e = {}), (e[E] = M ? O + 'px' : ''), (e[q] = A ? k + 'px' : ''), (e.transform = ''), e)
    )
  }
  c(Ec, 'mapToStyles')
  function zf(t) {
    var e = t.state,
      r = t.options,
      o = r.gpuAcceleration,
      u = o === void 0 ? !0 : o,
      l = r.adaptive,
      h = l === void 0 ? !0 : l,
      g = r.roundOffsets,
      y = g === void 0 ? !0 : g
    if (!1) var x
    var w = {
      placement: Kt(e.placement),
      variation: Be(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: u,
      isFixed: e.options.strategy === 'fixed',
    }
    e.modifiersData.popperOffsets != null &&
      (e.styles.popper = Object.assign(
        {},
        e.styles.popper,
        Ec(
          Object.assign({}, w, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: h,
            roundOffsets: y,
          })
        )
      )),
      e.modifiersData.arrow != null &&
        (e.styles.arrow = Object.assign(
          {},
          e.styles.arrow,
          Ec(
            Object.assign({}, w, {
              offsets: e.modifiersData.arrow,
              position: 'absolute',
              adaptive: !1,
              roundOffsets: y,
            })
          )
        )),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        'data-popper-placement': e.placement,
      }))
  }
  c(zf, 'computeStyles')
  var Sc = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: zf, data: {} }
  var Ea = { passive: !0 }
  function qf(t) {
    var e = t.state,
      r = t.instance,
      o = t.options,
      u = o.scroll,
      l = u === void 0 ? !0 : u,
      h = o.resize,
      g = h === void 0 ? !0 : h,
      y = Bt(e.elements.popper),
      x = [].concat(e.scrollParents.reference, e.scrollParents.popper)
    return (
      l &&
        x.forEach(function (w) {
          w.addEventListener('scroll', r.update, Ea)
        }),
      g && y.addEventListener('resize', r.update, Ea),
      function () {
        l &&
          x.forEach(function (w) {
            w.removeEventListener('scroll', r.update, Ea)
          }),
          g && y.removeEventListener('resize', r.update, Ea)
      }
    )
  }
  c(qf, 'effect')
  var Oc = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: c(function () {}, 'fn'),
    effect: qf,
    data: {},
  }
  var Lf = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
  function ei(t) {
    return t.replace(/left|right|bottom|top/g, function (e) {
      return Lf[e]
    })
  }
  c(ei, 'getOppositePlacement')
  var jf = { start: 'end', end: 'start' }
  function Sa(t) {
    return t.replace(/start|end/g, function (e) {
      return jf[e]
    })
  }
  c(Sa, 'getOppositeVariationPlacement')
  function Pn(t) {
    var e = Bt(t),
      r = e.pageXOffset,
      o = e.pageYOffset
    return { scrollLeft: r, scrollTop: o }
  }
  c(Pn, 'getWindowScroll')
  function An(t) {
    return $e(se(t)).left + Pn(t).scrollLeft
  }
  c(An, 'getWindowScrollBarX')
  function Ws(t) {
    var e = Bt(t),
      r = se(t),
      o = e.visualViewport,
      u = r.clientWidth,
      l = r.clientHeight,
      h = 0,
      g = 0
    return (
      o &&
        ((u = o.width),
        (l = o.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((h = o.offsetLeft), (g = o.offsetTop))),
      { width: u, height: l, x: h + An(t), y: g }
    )
  }
  c(Ws, 'getViewportRect')
  function Us(t) {
    var e,
      r = se(t),
      o = Pn(t),
      u = (e = t.ownerDocument) == null ? void 0 : e.body,
      l = Ze(r.scrollWidth, r.clientWidth, u ? u.scrollWidth : 0, u ? u.clientWidth : 0),
      h = Ze(r.scrollHeight, r.clientHeight, u ? u.scrollHeight : 0, u ? u.clientHeight : 0),
      g = -o.scrollLeft + An(t),
      y = -o.scrollTop
    return (
      he(u || r).direction === 'rtl' && (g += Ze(r.clientWidth, u ? u.clientWidth : 0) - l),
      { width: l, height: h, x: g, y }
    )
  }
  c(Us, 'getDocumentRect')
  function Mn(t) {
    var e = he(t),
      r = e.overflow,
      o = e.overflowX,
      u = e.overflowY
    return /auto|scroll|overlay|hidden/.test(r + u + o)
  }
  c(Mn, 'isScrollParent')
  function Oa(t) {
    return ['html', 'body', '#document'].indexOf(Qt(t)) >= 0
      ? t.ownerDocument.body
      : Xt(t) && Mn(t)
      ? t
      : Oa(Sr(t))
  }
  c(Oa, 'getScrollParent')
  function Jr(t, e) {
    var r
    e === void 0 && (e = [])
    var o = Oa(t),
      u = o === ((r = t.ownerDocument) == null ? void 0 : r.body),
      l = Bt(o),
      h = u ? [l].concat(l.visualViewport || [], Mn(o) ? o : []) : o,
      g = e.concat(h)
    return u ? g : g.concat(Jr(Sr(h)))
  }
  c(Jr, 'listScrollParents')
  function ri(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    })
  }
  c(ri, 'rectToClientRect')
  function Gf(t) {
    var e = $e(t)
    return (
      (e.top = e.top + t.clientTop),
      (e.left = e.left + t.clientLeft),
      (e.bottom = e.top + t.clientHeight),
      (e.right = e.left + t.clientWidth),
      (e.width = t.clientWidth),
      (e.height = t.clientHeight),
      (e.x = e.left),
      (e.y = e.top),
      e
    )
  }
  c(Gf, 'getInnerBoundingClientRect')
  function Tc(t, e) {
    return e === ba ? ri(Ws(t)) : or(e) ? Gf(e) : ri(Us(se(t)))
  }
  c(Tc, 'getClientRectFromMixedType')
  function $f(t) {
    var e = Jr(Sr(t)),
      r = ['absolute', 'fixed'].indexOf(he(t).position) >= 0,
      o = r && Xt(t) ? Je(t) : t
    return or(o)
      ? e.filter(function (u) {
          return or(u) && Hi(u, o) && Qt(u) !== 'body'
        })
      : []
  }
  c($f, 'getClippingParents')
  function Hs(t, e, r) {
    var o = e === 'clippingParents' ? $f(t) : [].concat(e),
      u = [].concat(o, [r]),
      l = u[0],
      h = u.reduce(function (g, y) {
        var x = Tc(t, y)
        return (
          (g.top = Ze(x.top, g.top)),
          (g.right = On(x.right, g.right)),
          (g.bottom = On(x.bottom, g.bottom)),
          (g.left = Ze(x.left, g.left)),
          g
        )
      }, Tc(t, l))
    return (
      (h.width = h.right - h.left), (h.height = h.bottom - h.top), (h.x = h.left), (h.y = h.top), h
    )
  }
  c(Hs, 'getClippingRect')
  function Zi(t) {
    var e = t.reference,
      r = t.element,
      o = t.placement,
      u = o ? Kt(o) : null,
      l = o ? Be(o) : null,
      h = e.x + e.width / 2 - r.width / 2,
      g = e.y + e.height / 2 - r.height / 2,
      y
    switch (u) {
      case Lt:
        y = { x: h, y: e.y - r.height }
        break
      case Yt:
        y = { x: h, y: e.y + e.height }
        break
      case Wt:
        y = { x: e.x + e.width, y: g }
        break
      case $t:
        y = { x: e.x - r.width, y: g }
        break
      default:
        y = { x: e.x, y: e.y }
    }
    var x = u ? Cn(u) : null
    if (x != null) {
      var w = x === 'y' ? 'height' : 'width'
      switch (l) {
        case xr:
          y[x] = y[x] - (e[w] / 2 - r[w] / 2)
          break
        case Sn:
          y[x] = y[x] + (e[w] / 2 - r[w] / 2)
          break
        default:
      }
    }
    return y
  }
  c(Zi, 'computeOffsets')
  function Qe(t, e) {
    e === void 0 && (e = {})
    var r = e,
      o = r.placement,
      u = o === void 0 ? t.placement : o,
      l = r.boundary,
      h = l === void 0 ? mc : l,
      g = r.rootBoundary,
      y = g === void 0 ? ba : g,
      x = r.elementContext,
      w = x === void 0 ? ti : x,
      _ = r.altBoundary,
      P = _ === void 0 ? !1 : _,
      k = r.padding,
      N = k === void 0 ? 0 : k,
      O = Yi(typeof N != 'number' ? N : Xi(N, Zr)),
      C = w === ti ? gc : ti,
      A = t.rects.popper,
      M = t.elements[P ? C : w],
      q = Hs(or(M) ? M : M.contextElement || se(t.elements.popper), h, y),
      E = $e(t.elements.reference),
      j = Zi({ reference: E, element: A, strategy: 'absolute', placement: u }),
      D = ri(Object.assign({}, A, j)),
      X = w === ti ? D : E,
      Y = {
        top: q.top - X.top + O.top,
        bottom: X.bottom - q.bottom + O.bottom,
        left: q.left - X.left + O.left,
        right: X.right - q.right + O.right,
      },
      B = t.modifiersData.offset
    if (w === ti && B) {
      var U = B[u]
      Object.keys(Y).forEach(function (rt) {
        var it = [Wt, Yt].indexOf(rt) >= 0 ? 1 : -1,
          H = [Lt, Yt].indexOf(rt) >= 0 ? 'y' : 'x'
        Y[rt] += U[H] * it
      })
    }
    return Y
  }
  c(Qe, 'detectOverflow')
  function Vs(t, e) {
    e === void 0 && (e = {})
    var r = e,
      o = r.placement,
      u = r.boundary,
      l = r.rootBoundary,
      h = r.padding,
      g = r.flipVariations,
      y = r.allowedAutoPlacements,
      x = y === void 0 ? wa : y,
      w = Be(o),
      _ = w
        ? g
          ? Bs
          : Bs.filter(function (N) {
              return Be(N) === w
            })
        : Zr,
      P = _.filter(function (N) {
        return x.indexOf(N) >= 0
      })
    P.length === 0 && (P = _)
    var k = P.reduce(function (N, O) {
      return (N[O] = Qe(t, { placement: O, boundary: u, rootBoundary: l, padding: h })[Kt(O)]), N
    }, {})
    return Object.keys(k).sort(function (N, O) {
      return k[N] - k[O]
    })
  }
  c(Vs, 'computeAutoPlacement')
  function Bf(t) {
    if (Kt(t) === ya) return []
    var e = ei(t)
    return [Sa(t), e, Sa(e)]
  }
  c(Bf, 'getExpandedFallbackPlacements')
  function Ff(t) {
    var e = t.state,
      r = t.options,
      o = t.name
    if (!e.modifiersData[o]._skip) {
      for (
        var u = r.mainAxis,
          l = u === void 0 ? !0 : u,
          h = r.altAxis,
          g = h === void 0 ? !0 : h,
          y = r.fallbackPlacements,
          x = r.padding,
          w = r.boundary,
          _ = r.rootBoundary,
          P = r.altBoundary,
          k = r.flipVariations,
          N = k === void 0 ? !0 : k,
          O = r.allowedAutoPlacements,
          C = e.options.placement,
          A = Kt(C),
          M = A === C,
          q = y || (M || !N ? [ei(C)] : Bf(C)),
          E = [C].concat(q).reduce(function (K, pe) {
            return K.concat(
              Kt(pe) === ya
                ? Vs(e, {
                    placement: pe,
                    boundary: w,
                    rootBoundary: _,
                    padding: x,
                    flipVariations: N,
                    allowedAutoPlacements: O,
                  })
                : pe
            )
          }, []),
          j = e.rects.reference,
          D = e.rects.popper,
          X = new Map(),
          Y = !0,
          B = E[0],
          U = 0;
        U < E.length;
        U++
      ) {
        var rt = E[U],
          it = Kt(rt),
          H = Be(rt) === xr,
          ct = [Lt, Yt].indexOf(it) >= 0,
          Ct = ct ? 'width' : 'height',
          jt = Qe(e, { placement: rt, boundary: w, rootBoundary: _, altBoundary: P, padding: x }),
          Dt = ct ? (H ? Wt : $t) : H ? Yt : Lt
        j[Ct] > D[Ct] && (Dt = ei(Dt))
        var ht = ei(Dt),
          Ft = []
        if (
          (l && Ft.push(jt[it] <= 0),
          g && Ft.push(jt[Dt] <= 0, jt[ht] <= 0),
          Ft.every(function (K) {
            return K
          }))
        ) {
          ;(B = rt), (Y = !1)
          break
        }
        X.set(rt, Ft)
      }
      if (Y)
        for (
          var Ut = N ? 3 : 1,
            Pe = c(function (pe) {
              var de = E.find(function (pr) {
                var qe = X.get(pr)
                if (qe)
                  return qe.slice(0, pe).every(function (Ue) {
                    return Ue
                  })
              })
              if (de) return (B = de), 'break'
            }, '_loop'),
            we = Ut;
          we > 0;
          we--
        ) {
          var cr = Pe(we)
          if (cr === 'break') break
        }
      e.placement !== B && ((e.modifiersData[o]._skip = !0), (e.placement = B), (e.reset = !0))
    }
  }
  c(Ff, 'flip')
  var Cc = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: Ff,
    requiresIfExists: ['offset'],
    data: { _skip: !1 },
  }
  function _c(t, e, r) {
    return (
      r === void 0 && (r = { x: 0, y: 0 }),
      {
        top: t.top - e.height - r.y,
        right: t.right - e.width + r.x,
        bottom: t.bottom - e.height + r.y,
        left: t.left - e.width - r.x,
      }
    )
  }
  c(_c, 'getSideOffsets')
  function Pc(t) {
    return [Lt, Wt, Yt, $t].some(function (e) {
      return t[e] >= 0
    })
  }
  c(Pc, 'isAnySideFullyClipped')
  function Wf(t) {
    var e = t.state,
      r = t.name,
      o = e.rects.reference,
      u = e.rects.popper,
      l = e.modifiersData.preventOverflow,
      h = Qe(e, { elementContext: 'reference' }),
      g = Qe(e, { altBoundary: !0 }),
      y = _c(h, o),
      x = _c(g, u, l),
      w = Pc(y),
      _ = Pc(x)
    ;(e.modifiersData[r] = {
      referenceClippingOffsets: y,
      popperEscapeOffsets: x,
      isReferenceHidden: w,
      hasPopperEscaped: _,
    }),
      (e.attributes.popper = Object.assign({}, e.attributes.popper, {
        'data-popper-reference-hidden': w,
        'data-popper-escaped': _,
      }))
  }
  c(Wf, 'hide')
  var Ac = {
    name: 'hide',
    enabled: !0,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: Wf,
  }
  function Uf(t, e, r) {
    var o = Kt(t),
      u = [$t, Lt].indexOf(o) >= 0 ? -1 : 1,
      l = typeof r == 'function' ? r(Object.assign({}, e, { placement: t })) : r,
      h = l[0],
      g = l[1]
    return (
      (h = h || 0), (g = (g || 0) * u), [$t, Wt].indexOf(o) >= 0 ? { x: g, y: h } : { x: h, y: g }
    )
  }
  c(Uf, 'distanceAndSkiddingToXY')
  function Hf(t) {
    var e = t.state,
      r = t.options,
      o = t.name,
      u = r.offset,
      l = u === void 0 ? [0, 0] : u,
      h = wa.reduce(function (w, _) {
        return (w[_] = Uf(_, e.rects, l)), w
      }, {}),
      g = h[e.placement],
      y = g.x,
      x = g.y
    e.modifiersData.popperOffsets != null &&
      ((e.modifiersData.popperOffsets.x += y), (e.modifiersData.popperOffsets.y += x)),
      (e.modifiersData[o] = h)
  }
  c(Hf, 'offset')
  var Mc = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Hf }
  function Vf(t) {
    var e = t.state,
      r = t.name
    e.modifiersData[r] = Zi({
      reference: e.rects.reference,
      element: e.rects.popper,
      strategy: 'absolute',
      placement: e.placement,
    })
  }
  c(Vf, 'popperOffsets')
  var Ic = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Vf, data: {} }
  function Ys(t) {
    return t === 'x' ? 'y' : 'x'
  }
  c(Ys, 'getAltAxis')
  function Yf(t) {
    var e = t.state,
      r = t.options,
      o = t.name,
      u = r.mainAxis,
      l = u === void 0 ? !0 : u,
      h = r.altAxis,
      g = h === void 0 ? !1 : h,
      y = r.boundary,
      x = r.rootBoundary,
      w = r.altBoundary,
      _ = r.padding,
      P = r.tether,
      k = P === void 0 ? !0 : P,
      N = r.tetherOffset,
      O = N === void 0 ? 0 : N,
      C = Qe(e, { boundary: y, rootBoundary: x, padding: _, altBoundary: w }),
      A = Kt(e.placement),
      M = Be(e.placement),
      q = !M,
      E = Cn(A),
      j = Ys(E),
      D = e.modifiersData.popperOffsets,
      X = e.rects.reference,
      Y = e.rects.popper,
      B = typeof O == 'function' ? O(Object.assign({}, e.rects, { placement: e.placement })) : O,
      U =
        typeof B == 'number'
          ? { mainAxis: B, altAxis: B }
          : Object.assign({ mainAxis: 0, altAxis: 0 }, B),
      rt = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
      it = { x: 0, y: 0 }
    if (!!D) {
      if (l) {
        var H,
          ct = E === 'y' ? Lt : $t,
          Ct = E === 'y' ? Yt : Wt,
          jt = E === 'y' ? 'height' : 'width',
          Dt = D[E],
          ht = Dt + C[ct],
          Ft = Dt - C[Ct],
          Ut = k ? -Y[jt] / 2 : 0,
          Pe = M === xr ? X[jt] : Y[jt],
          we = M === xr ? -Y[jt] : -X[jt],
          cr = e.elements.arrow,
          K = k && cr ? Tn(cr) : { width: 0, height: 0 },
          pe = e.modifiersData['arrow#persistent']
            ? e.modifiersData['arrow#persistent'].padding
            : Vi(),
          de = pe[ct],
          pr = pe[Ct],
          qe = _n(0, X[jt], K[jt]),
          Ue = q ? X[jt] / 2 - Ut - qe - de - U.mainAxis : Pe - qe - de - U.mainAxis,
          He = q ? -X[jt] / 2 + Ut + qe + pr + U.mainAxis : we + qe + pr + U.mainAxis,
          Ae = e.elements.arrow && Je(e.elements.arrow),
          kn = Ae ? (E === 'y' ? Ae.clientTop || 0 : Ae.clientLeft || 0) : 0,
          xe = (H = rt == null ? void 0 : rt[E]) != null ? H : 0,
          en = Dt + Ue - xe - kn,
          xt = Dt + He - xe,
          Lr = _n(k ? On(ht, en) : ht, Dt, k ? Ze(Ft, xt) : Ft)
        ;(D[E] = Lr), (it[E] = Lr - Dt)
      }
      if (g) {
        var jr,
          Ee = E === 'x' ? Lt : $t,
          rn = E === 'x' ? Yt : Wt,
          Ve = D[j],
          Ye = j === 'y' ? 'height' : 'width',
          nn = Ve + C[Ee],
          te = Ve - C[rn],
          dr = [Lt, $t].indexOf(A) !== -1,
          Me = (jr = rt == null ? void 0 : rt[j]) != null ? jr : 0,
          Nn = dr ? nn : Ve - X[Ye] - Y[Ye] - Me + U.altAxis,
          fr = dr ? Ve + X[Ye] + Y[Ye] - Me - U.altAxis : te,
          on = k && dr ? wc(Nn, Ve, fr) : _n(k ? Nn : nn, Ve, k ? fr : te)
        ;(D[j] = on), (it[j] = on - Ve)
      }
      e.modifiersData[o] = it
    }
  }
  c(Yf, 'preventOverflow')
  var Dc = {
    name: 'preventOverflow',
    enabled: !0,
    phase: 'main',
    fn: Yf,
    requiresIfExists: ['offset'],
  }
  function Xs(t) {
    return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
  }
  c(Xs, 'getHTMLElementScroll')
  function Zs(t) {
    return t === Bt(t) || !Xt(t) ? Pn(t) : Xs(t)
  }
  c(Zs, 'getNodeScroll')
  function Xf(t) {
    var e = t.getBoundingClientRect(),
      r = Er(e.width) / t.offsetWidth || 1,
      o = Er(e.height) / t.offsetHeight || 1
    return r !== 1 || o !== 1
  }
  c(Xf, 'isElementScaled')
  function Js(t, e, r) {
    r === void 0 && (r = !1)
    var o = Xt(e),
      u = Xt(e) && Xf(e),
      l = se(e),
      h = $e(t, u),
      g = { scrollLeft: 0, scrollTop: 0 },
      y = { x: 0, y: 0 }
    return (
      (o || (!o && !r)) &&
        ((Qt(e) !== 'body' || Mn(l)) && (g = Zs(e)),
        Xt(e)
          ? ((y = $e(e, !0)), (y.x += e.clientLeft), (y.y += e.clientTop))
          : l && (y.x = An(l))),
      {
        x: h.left + g.scrollLeft - y.x,
        y: h.top + g.scrollTop - y.y,
        width: h.width,
        height: h.height,
      }
    )
  }
  c(Js, 'getCompositeRect')
  function Zf(t) {
    var e = new Map(),
      r = new Set(),
      o = []
    t.forEach(function (l) {
      e.set(l.name, l)
    })
    function u(l) {
      r.add(l.name)
      var h = [].concat(l.requires || [], l.requiresIfExists || [])
      h.forEach(function (g) {
        if (!r.has(g)) {
          var y = e.get(g)
          y && u(y)
        }
      }),
        o.push(l)
    }
    return (
      c(u, 'sort'),
      t.forEach(function (l) {
        r.has(l.name) || u(l)
      }),
      o
    )
  }
  c(Zf, 'order')
  function Qs(t) {
    var e = Zf(t)
    return yc.reduce(function (r, o) {
      return r.concat(
        e.filter(function (u) {
          return u.phase === o
        })
      )
    }, [])
  }
  c(Qs, 'orderModifiers')
  function Ks(t) {
    var e
    return function () {
      return (
        e ||
          (e = new Promise(function (r) {
            Promise.resolve().then(function () {
              ;(e = void 0), r(t())
            })
          })),
        e
      )
    }
  }
  c(Ks, 'debounce')
  function tl(t) {
    var e = t.reduce(function (r, o) {
      var u = r[o.name]
      return (
        (r[o.name] = u
          ? Object.assign({}, u, o, {
              options: Object.assign({}, u.options, o.options),
              data: Object.assign({}, u.data, o.data),
            })
          : o),
        r
      )
    }, {})
    return Object.keys(e).map(function (r) {
      return e[r]
    })
  }
  c(tl, 'mergeByName')
  var kc = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
  function Nc() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]
    return !e.some(function (o) {
      return !(o && typeof o.getBoundingClientRect == 'function')
    })
  }
  c(Nc, 'areValidElements')
  function Rc(t) {
    t === void 0 && (t = {})
    var e = t,
      r = e.defaultModifiers,
      o = r === void 0 ? [] : r,
      u = e.defaultOptions,
      l = u === void 0 ? kc : u
    return c(function (g, y, x) {
      x === void 0 && (x = l)
      var w = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, kc, l),
          modifiersData: {},
          elements: { reference: g, popper: y },
          attributes: {},
          styles: {},
        },
        _ = [],
        P = !1,
        k = {
          state: w,
          setOptions: c(function (A) {
            var M = typeof A == 'function' ? A(w.options) : A
            O(),
              (w.options = Object.assign({}, l, w.options, M)),
              (w.scrollParents = {
                reference: or(g) ? Jr(g) : g.contextElement ? Jr(g.contextElement) : [],
                popper: Jr(y),
              })
            var q = Qs(tl([].concat(o, w.options.modifiers)))
            if (
              ((w.orderedModifiers = q.filter(function (rt) {
                return rt.enabled
              })),
              !1)
            ) {
              var E
              if (getBasePlacement(w.options.placement) === auto) var j
              var D, X, Y, B, U
            }
            return N(), k.update()
          }, 'setOptions'),
          forceUpdate: c(function () {
            if (!P) {
              var A = w.elements,
                M = A.reference,
                q = A.popper
              if (!!Nc(M, q)) {
                ;(w.rects = {
                  reference: Js(M, Je(q), w.options.strategy === 'fixed'),
                  popper: Tn(q),
                }),
                  (w.reset = !1),
                  (w.placement = w.options.placement),
                  w.orderedModifiers.forEach(function (rt) {
                    return (w.modifiersData[rt.name] = Object.assign({}, rt.data))
                  })
                for (var E = 0, j = 0; j < w.orderedModifiers.length; j++) {
                  if (w.reset === !0) {
                    ;(w.reset = !1), (j = -1)
                    continue
                  }
                  var D = w.orderedModifiers[j],
                    X = D.fn,
                    Y = D.options,
                    B = Y === void 0 ? {} : Y,
                    U = D.name
                  typeof X == 'function' &&
                    (w = X({ state: w, options: B, name: U, instance: k }) || w)
                }
              }
            }
          }, 'forceUpdate'),
          update: Ks(function () {
            return new Promise(function (C) {
              k.forceUpdate(), C(w)
            })
          }),
          destroy: c(function () {
            O(), (P = !0)
          }, 'destroy'),
        }
      if (!Nc(g, y)) return k
      k.setOptions(x).then(function (C) {
        !P && x.onFirstUpdate && x.onFirstUpdate(C)
      })
      function N() {
        w.orderedModifiers.forEach(function (C) {
          var A = C.name,
            M = C.options,
            q = M === void 0 ? {} : M,
            E = C.effect
          if (typeof E == 'function') {
            var j = E({ state: w, name: A, instance: k, options: q }),
              D = c(function () {}, 'noopFn')
            _.push(j || D)
          }
        })
      }
      c(N, 'runModifierEffects')
      function O() {
        _.forEach(function (C) {
          return C()
        }),
          (_ = [])
      }
      return c(O, 'cleanupModifierEffects'), k
    }, 'createPopper')
  }
  c(Rc, 'popperGenerator')
  var Jf = [Oc, Ic, Sc, Ui, Mc, Cc, Dc, xc, Ac],
    el = Rc({ defaultModifiers: Jf })
  var Or =
      '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',
    Qf = 'tippy-box',
    zc = 'tippy-content',
    Kf = 'tippy-backdrop',
    qc = 'tippy-arrow',
    Lc = 'tippy-svg-arrow',
    In = { passive: !0, capture: !0 },
    jc = c(function () {
      return document.body
    }, 'TIPPY_DEFAULT_APPEND_TO')
  function rl(t, e, r) {
    if (Array.isArray(t)) {
      var o = t[e]
      return o ?? (Array.isArray(r) ? r[e] : r)
    }
    return t
  }
  c(rl, 'getValueAtIndexOrReturn')
  function nl(t, e) {
    var r = {}.toString.call(t)
    return r.indexOf('[object') === 0 && r.indexOf(e + ']') > -1
  }
  c(nl, 'isType')
  function Gc(t, e) {
    return typeof t == 'function' ? t.apply(void 0, e) : t
  }
  c(Gc, 'invokeWithArgsOrReturn')
  function $c(t, e) {
    if (e === 0) return t
    var r
    return function (o) {
      clearTimeout(r),
        (r = setTimeout(function () {
          t(o)
        }, e))
    }
  }
  c($c, 'debounce')
  function th(t, e) {
    var r = Object.assign({}, t)
    return (
      e.forEach(function (o) {
        delete r[o]
      }),
      r
    )
  }
  c(th, 'removeProperties')
  function eh(t) {
    return t.split(/\s+/).filter(Boolean)
  }
  c(eh, 'splitBySpaces')
  function Dn(t) {
    return [].concat(t)
  }
  c(Dn, 'normalizeToArray')
  function Bc(t, e) {
    t.indexOf(e) === -1 && t.push(e)
  }
  c(Bc, 'pushIfUnique')
  function rh(t) {
    return t.filter(function (e, r) {
      return t.indexOf(e) === r
    })
  }
  c(rh, 'unique')
  function nh(t) {
    return t.split('-')[0]
  }
  c(nh, 'getBasePlacement')
  function Ta(t) {
    return [].slice.call(t)
  }
  c(Ta, 'arrayFrom')
  function Fc(t) {
    return Object.keys(t).reduce(function (e, r) {
      return t[r] !== void 0 && (e[r] = t[r]), e
    }, {})
  }
  c(Fc, 'removeUndefinedProps')
  function ni() {
    return document.createElement('div')
  }
  c(ni, 'div')
  function Ca(t) {
    return ['Element', 'Fragment'].some(function (e) {
      return nl(t, e)
    })
  }
  c(Ca, 'isElement')
  function ih(t) {
    return nl(t, 'NodeList')
  }
  c(ih, 'isNodeList')
  function oh(t) {
    return nl(t, 'MouseEvent')
  }
  c(oh, 'isMouseEvent')
  function ah(t) {
    return !!(t && t._tippy && t._tippy.reference === t)
  }
  c(ah, 'isReferenceElement')
  function sh(t) {
    return Ca(t) ? [t] : ih(t) ? Ta(t) : Array.isArray(t) ? t : Ta(document.querySelectorAll(t))
  }
  c(sh, 'getArrayOfElements')
  function il(t, e) {
    t.forEach(function (r) {
      r && (r.style.transitionDuration = e + 'ms')
    })
  }
  c(il, 'setTransitionDuration')
  function Wc(t, e) {
    t.forEach(function (r) {
      r && r.setAttribute('data-state', e)
    })
  }
  c(Wc, 'setVisibilityState')
  function lh(t) {
    var e,
      r = Dn(t),
      o = r[0]
    return o != null && (e = o.ownerDocument) != null && e.body ? o.ownerDocument : document
  }
  c(lh, 'getOwnerDocument')
  function uh(t, e) {
    var r = e.clientX,
      o = e.clientY
    return t.every(function (u) {
      var l = u.popperRect,
        h = u.popperState,
        g = u.props,
        y = g.interactiveBorder,
        x = nh(h.placement),
        w = h.modifiersData.offset
      if (!w) return !0
      var _ = x === 'bottom' ? w.top.y : 0,
        P = x === 'top' ? w.bottom.y : 0,
        k = x === 'right' ? w.left.x : 0,
        N = x === 'left' ? w.right.x : 0,
        O = l.top - o + _ > y,
        C = o - l.bottom - P > y,
        A = l.left - r + k > y,
        M = r - l.right - N > y
      return O || C || A || M
    })
  }
  c(uh, 'isCursorOutsideInteractiveBorder')
  function ol(t, e, r) {
    var o = e + 'EventListener'
    ;['transitionend', 'webkitTransitionEnd'].forEach(function (u) {
      t[o](u, r)
    })
  }
  c(ol, 'updateTransitionEndListener')
  function Uc(t, e) {
    for (var r = e; r; ) {
      var o
      if (t.contains(r)) return !0
      r = r.getRootNode == null || (o = r.getRootNode()) == null ? void 0 : o.host
    }
    return !1
  }
  c(Uc, 'actualContains')
  var ar = { isTouch: !1 },
    Hc = 0
  function ch() {
    ar.isTouch ||
      ((ar.isTouch = !0), window.performance && document.addEventListener('mousemove', Vc))
  }
  c(ch, 'onDocumentTouchStart')
  function Vc() {
    var t = performance.now()
    t - Hc < 20 && ((ar.isTouch = !1), document.removeEventListener('mousemove', Vc)), (Hc = t)
  }
  c(Vc, 'onDocumentMouseMove')
  function ph() {
    var t = document.activeElement
    if (ah(t)) {
      var e = t._tippy
      t.blur && !e.state.isVisible && t.blur()
    }
  }
  c(ph, 'onWindowBlur')
  function dh() {
    document.addEventListener('touchstart', ch, In), window.addEventListener('blur', ph)
  }
  c(dh, 'bindGlobalEventListeners')
  var fh = typeof window != 'undefined' && typeof document != 'undefined',
    hh = fh ? !!window.msCrypto : !1
  var vh = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
    mh = {
      allowHTML: !1,
      animation: 'fade',
      arrow: !0,
      content: '',
      inertia: !1,
      maxWidth: 350,
      role: 'tooltip',
      theme: '',
      zIndex: 9999,
    },
    Ke = Object.assign(
      {
        appendTo: jc,
        aria: { content: 'auto', expanded: 'auto' },
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: '',
        offset: [0, 10],
        onAfterUpdate: c(function () {}, 'onAfterUpdate'),
        onBeforeUpdate: c(function () {}, 'onBeforeUpdate'),
        onCreate: c(function () {}, 'onCreate'),
        onDestroy: c(function () {}, 'onDestroy'),
        onHidden: c(function () {}, 'onHidden'),
        onHide: c(function () {}, 'onHide'),
        onMount: c(function () {}, 'onMount'),
        onShow: c(function () {}, 'onShow'),
        onShown: c(function () {}, 'onShown'),
        onTrigger: c(function () {}, 'onTrigger'),
        onUntrigger: c(function () {}, 'onUntrigger'),
        onClickOutside: c(function () {}, 'onClickOutside'),
        placement: 'top',
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: 'mouseenter focus',
        triggerTarget: null,
      },
      vh,
      mh
    ),
    gh = Object.keys(Ke),
    yh = c(function (e) {
      var r = Object.keys(e)
      r.forEach(function (o) {
        Ke[o] = e[o]
      })
    }, 'setDefaultProps')
  function Yc(t) {
    var e = t.plugins || [],
      r = e.reduce(function (o, u) {
        var l = u.name,
          h = u.defaultValue
        if (l) {
          var g
          o[l] = t[l] !== void 0 ? t[l] : (g = Ke[l]) != null ? g : h
        }
        return o
      }, {})
    return Object.assign({}, t, r)
  }
  c(Yc, 'getExtendedPassedProps')
  function bh(t, e) {
    var r = e ? Object.keys(Yc(Object.assign({}, Ke, { plugins: e }))) : gh,
      o = r.reduce(function (u, l) {
        var h = (t.getAttribute('data-tippy-' + l) || '').trim()
        if (!h) return u
        if (l === 'content') u[l] = h
        else
          try {
            u[l] = JSON.parse(h)
          } catch {
            u[l] = h
          }
        return u
      }, {})
    return o
  }
  c(bh, 'getDataAttributeProps')
  function Xc(t, e) {
    var r = Object.assign(
      {},
      e,
      { content: Gc(e.content, [t]) },
      e.ignoreAttributes ? {} : bh(t, e.plugins)
    )
    return (
      (r.aria = Object.assign({}, Ke.aria, r.aria)),
      (r.aria = {
        expanded: r.aria.expanded === 'auto' ? e.interactive : r.aria.expanded,
        content:
          r.aria.content === 'auto' ? (e.interactive ? null : 'describedby') : r.aria.content,
      }),
      r
    )
  }
  c(Xc, 'evaluateProps')
  var wh = c(function () {
    return 'innerHTML'
  }, 'innerHTML')
  function al(t, e) {
    t[wh()] = e
  }
  c(al, 'dangerouslySetInnerHTML')
  function Zc(t) {
    var e = ni()
    return (
      t === !0 ? (e.className = qc) : ((e.className = Lc), Ca(t) ? e.appendChild(t) : al(e, t)), e
    )
  }
  c(Zc, 'createArrowElement')
  function Jc(t, e) {
    Ca(e.content)
      ? (al(t, ''), t.appendChild(e.content))
      : typeof e.content != 'function' &&
        (e.allowHTML ? al(t, e.content) : (t.textContent = e.content))
  }
  c(Jc, 'setContent')
  function sl(t) {
    var e = t.firstElementChild,
      r = Ta(e.children)
    return {
      box: e,
      content: r.find(function (o) {
        return o.classList.contains(zc)
      }),
      arrow: r.find(function (o) {
        return o.classList.contains(qc) || o.classList.contains(Lc)
      }),
      backdrop: r.find(function (o) {
        return o.classList.contains(Kf)
      }),
    }
  }
  c(sl, 'getChildren')
  function Qc(t) {
    var e = ni(),
      r = ni()
    ;(r.className = Qf), r.setAttribute('data-state', 'hidden'), r.setAttribute('tabindex', '-1')
    var o = ni()
    ;(o.className = zc),
      o.setAttribute('data-state', 'hidden'),
      Jc(o, t.props),
      e.appendChild(r),
      r.appendChild(o),
      u(t.props, t.props)
    function u(l, h) {
      var g = sl(e),
        y = g.box,
        x = g.content,
        w = g.arrow
      h.theme ? y.setAttribute('data-theme', h.theme) : y.removeAttribute('data-theme'),
        typeof h.animation == 'string'
          ? y.setAttribute('data-animation', h.animation)
          : y.removeAttribute('data-animation'),
        h.inertia ? y.setAttribute('data-inertia', '') : y.removeAttribute('data-inertia'),
        (y.style.maxWidth = typeof h.maxWidth == 'number' ? h.maxWidth + 'px' : h.maxWidth),
        h.role ? y.setAttribute('role', h.role) : y.removeAttribute('role'),
        (l.content !== h.content || l.allowHTML !== h.allowHTML) && Jc(x, t.props),
        h.arrow
          ? w
            ? l.arrow !== h.arrow && (y.removeChild(w), y.appendChild(Zc(h.arrow)))
            : y.appendChild(Zc(h.arrow))
          : w && y.removeChild(w)
    }
    return c(u, 'onUpdate'), { popper: e, onUpdate: u }
  }
  c(Qc, 'render')
  Qc.$$tippy = !0
  var xh = 1,
    _a = [],
    ll = []
  function Eh(t, e) {
    var r = Xc(t, Object.assign({}, Ke, Yc(Fc(e)))),
      o,
      u,
      l,
      h = !1,
      g = !1,
      y = !1,
      x = !1,
      w,
      _,
      P,
      k = [],
      N = $c(en, r.interactiveDebounce),
      O,
      C = xh++,
      A = null,
      M = rh(r.plugins),
      q = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
      E = {
        id: C,
        reference: t,
        popper: ni(),
        popperInstance: A,
        props: r,
        state: q,
        plugins: M,
        clearDelayTimeouts: Nn,
        setProps: fr,
        setContent: on,
        show: ui,
        hide: fo,
        hideWithInteractivity: ci,
        enable: dr,
        disable: Me,
        unmount: pi,
        destroy: ho,
      }
    if (!r.render) return E
    var j = r.render(E),
      D = j.popper,
      X = j.onUpdate
    D.setAttribute('data-tippy-root', ''),
      (D.id = 'tippy-' + E.id),
      (E.popper = D),
      (t._tippy = E),
      (D._tippy = E)
    var Y = M.map(function (L) {
        return L.fn(E)
      }),
      B = t.hasAttribute('aria-expanded')
    return (
      Ae(),
      Ut(),
      Dt(),
      ht('onCreate', [E]),
      r.showOnCreate && nn(),
      D.addEventListener('mouseenter', function () {
        E.props.interactive && E.state.isVisible && E.clearDelayTimeouts()
      }),
      D.addEventListener('mouseleave', function () {
        E.props.interactive &&
          E.props.trigger.indexOf('mouseenter') >= 0 &&
          ct().addEventListener('mousemove', N)
      }),
      E
    )
    function U() {
      var L = E.props.touch
      return Array.isArray(L) ? L : [L, 0]
    }
    c(U, 'getNormalizedTouchSettings')
    function rt() {
      return U()[0] === 'hold'
    }
    c(rt, 'getIsCustomTouchBehavior')
    function it() {
      var L
      return !!((L = E.props.render) != null && L.$$tippy)
    }
    c(it, 'getIsDefaultRenderFn')
    function H() {
      return O || t
    }
    c(H, 'getCurrentTarget')
    function ct() {
      var L = H().parentNode
      return L ? lh(L) : document
    }
    c(ct, 'getDocument')
    function Ct() {
      return sl(D)
    }
    c(Ct, 'getDefaultTemplateChildren')
    function jt(L) {
      return (E.state.isMounted && !E.state.isVisible) || ar.isTouch || (w && w.type === 'focus')
        ? 0
        : rl(E.props.delay, L ? 0 : 1, Ke.delay)
    }
    c(jt, 'getDelay')
    function Dt(L) {
      L === void 0 && (L = !1),
        (D.style.pointerEvents = E.props.interactive && !L ? '' : 'none'),
        (D.style.zIndex = '' + E.props.zIndex)
    }
    c(Dt, 'handleStyles')
    function ht(L, tt, ot) {
      if (
        (ot === void 0 && (ot = !0),
        Y.forEach(function (vt) {
          vt[L] && vt[L].apply(vt, tt)
        }),
        ot)
      ) {
        var wt
        ;(wt = E.props)[L].apply(wt, tt)
      }
    }
    c(ht, 'invokeHook')
    function Ft() {
      var L = E.props.aria
      if (!!L.content) {
        var tt = 'aria-' + L.content,
          ot = D.id,
          wt = Dn(E.props.triggerTarget || t)
        wt.forEach(function (vt) {
          var ee = vt.getAttribute(tt)
          if (E.state.isVisible) vt.setAttribute(tt, ee ? ee + ' ' + ot : ot)
          else {
            var re = ee && ee.replace(ot, '').trim()
            re ? vt.setAttribute(tt, re) : vt.removeAttribute(tt)
          }
        })
      }
    }
    c(Ft, 'handleAriaContentAttribute')
    function Ut() {
      if (!(B || !E.props.aria.expanded)) {
        var L = Dn(E.props.triggerTarget || t)
        L.forEach(function (tt) {
          E.props.interactive
            ? tt.setAttribute('aria-expanded', E.state.isVisible && tt === H() ? 'true' : 'false')
            : tt.removeAttribute('aria-expanded')
        })
      }
    }
    c(Ut, 'handleAriaExpandedAttribute')
    function Pe() {
      ct().removeEventListener('mousemove', N),
        (_a = _a.filter(function (L) {
          return L !== N
        }))
    }
    c(Pe, 'cleanupInteractiveMouseListeners')
    function we(L) {
      if (!(ar.isTouch && (y || L.type === 'mousedown'))) {
        var tt = (L.composedPath && L.composedPath()[0]) || L.target
        if (!(E.props.interactive && Uc(D, tt))) {
          if (
            Dn(E.props.triggerTarget || t).some(function (ot) {
              return Uc(ot, tt)
            })
          ) {
            if (ar.isTouch || (E.state.isVisible && E.props.trigger.indexOf('click') >= 0)) return
          } else ht('onClickOutside', [E, L])
          E.props.hideOnClick === !0 &&
            (E.clearDelayTimeouts(),
            E.hide(),
            (g = !0),
            setTimeout(function () {
              g = !1
            }),
            E.state.isMounted || de())
        }
      }
    }
    c(we, 'onDocumentPress')
    function cr() {
      y = !0
    }
    c(cr, 'onTouchMove')
    function K() {
      y = !1
    }
    c(K, 'onTouchStart')
    function pe() {
      var L = ct()
      L.addEventListener('mousedown', we, !0),
        L.addEventListener('touchend', we, In),
        L.addEventListener('touchstart', K, In),
        L.addEventListener('touchmove', cr, In)
    }
    c(pe, 'addDocumentPress')
    function de() {
      var L = ct()
      L.removeEventListener('mousedown', we, !0),
        L.removeEventListener('touchend', we, In),
        L.removeEventListener('touchstart', K, In),
        L.removeEventListener('touchmove', cr, In)
    }
    c(de, 'removeDocumentPress')
    function pr(L, tt) {
      Ue(L, function () {
        !E.state.isVisible && D.parentNode && D.parentNode.contains(D) && tt()
      })
    }
    c(pr, 'onTransitionedOut')
    function qe(L, tt) {
      Ue(L, tt)
    }
    c(qe, 'onTransitionedIn')
    function Ue(L, tt) {
      var ot = Ct().box
      function wt(vt) {
        vt.target === ot && (ol(ot, 'remove', wt), tt())
      }
      if ((c(wt, 'listener'), L === 0)) return tt()
      ol(ot, 'remove', _), ol(ot, 'add', wt), (_ = wt)
    }
    c(Ue, 'onTransitionEnd')
    function He(L, tt, ot) {
      ot === void 0 && (ot = !1)
      var wt = Dn(E.props.triggerTarget || t)
      wt.forEach(function (vt) {
        vt.addEventListener(L, tt, ot), k.push({ node: vt, eventType: L, handler: tt, options: ot })
      })
    }
    c(He, 'on')
    function Ae() {
      rt() && (He('touchstart', xe, { passive: !0 }), He('touchend', xt, { passive: !0 })),
        eh(E.props.trigger).forEach(function (L) {
          if (L !== 'manual')
            switch ((He(L, xe), L)) {
              case 'mouseenter':
                He('mouseleave', xt)
                break
              case 'focus':
                He(hh ? 'focusout' : 'blur', Lr)
                break
              case 'focusin':
                He('focusout', Lr)
                break
            }
        })
    }
    c(Ae, 'addListeners')
    function kn() {
      k.forEach(function (L) {
        var tt = L.node,
          ot = L.eventType,
          wt = L.handler,
          vt = L.options
        tt.removeEventListener(ot, wt, vt)
      }),
        (k = [])
    }
    c(kn, 'removeListeners')
    function xe(L) {
      var tt,
        ot = !1
      if (!(!E.state.isEnabled || jr(L) || g)) {
        var wt = ((tt = w) == null ? void 0 : tt.type) === 'focus'
        ;(w = L),
          (O = L.currentTarget),
          Ut(),
          !E.state.isVisible &&
            oh(L) &&
            _a.forEach(function (vt) {
              return vt(L)
            }),
          L.type === 'click' &&
          (E.props.trigger.indexOf('mouseenter') < 0 || h) &&
          E.props.hideOnClick !== !1 &&
          E.state.isVisible
            ? (ot = !0)
            : nn(L),
          L.type === 'click' && (h = !ot),
          ot && !wt && te(L)
      }
    }
    c(xe, 'onTrigger')
    function en(L) {
      var tt = L.target,
        ot = H().contains(tt) || D.contains(tt)
      if (!(L.type === 'mousemove' && ot)) {
        var wt = Ye()
          .concat(D)
          .map(function (vt) {
            var ee,
              re = vt._tippy,
              Gr = (ee = re.popperInstance) == null ? void 0 : ee.state
            return Gr ? { popperRect: vt.getBoundingClientRect(), popperState: Gr, props: r } : null
          })
          .filter(Boolean)
        uh(wt, L) && (Pe(), te(L))
      }
    }
    c(en, 'onMouseMove')
    function xt(L) {
      var tt = jr(L) || (E.props.trigger.indexOf('click') >= 0 && h)
      if (!tt) {
        if (E.props.interactive) {
          E.hideWithInteractivity(L)
          return
        }
        te(L)
      }
    }
    c(xt, 'onMouseLeave')
    function Lr(L) {
      ;(E.props.trigger.indexOf('focusin') < 0 && L.target !== H()) ||
        (E.props.interactive && L.relatedTarget && D.contains(L.relatedTarget)) ||
        te(L)
    }
    c(Lr, 'onBlurOrFocusOut')
    function jr(L) {
      return ar.isTouch ? rt() !== L.type.indexOf('touch') >= 0 : !1
    }
    c(jr, 'isEventListenerStopped')
    function Ee() {
      rn()
      var L = E.props,
        tt = L.popperOptions,
        ot = L.placement,
        wt = L.offset,
        vt = L.getReferenceClientRect,
        ee = L.moveTransition,
        re = it() ? sl(D).arrow : null,
        Gr = vt ? { getBoundingClientRect: vt, contextElement: vt.contextElement || H() } : t,
        di = {
          name: '$$tippy',
          enabled: !0,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: c(function (hr) {
            var $r = hr.state
            if (it()) {
              var Ie = Ct(),
                De = Ie.box
              ;['placement', 'reference-hidden', 'escaped'].forEach(function (Le) {
                Le === 'placement'
                  ? De.setAttribute('data-placement', $r.placement)
                  : $r.attributes.popper['data-popper-' + Le]
                  ? De.setAttribute('data-' + Le, '')
                  : De.removeAttribute('data-' + Le)
              }),
                ($r.attributes.popper = {})
            }
          }, 'fn'),
        },
        ne = [
          { name: 'offset', options: { offset: wt } },
          {
            name: 'preventOverflow',
            options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
          },
          { name: 'flip', options: { padding: 5 } },
          { name: 'computeStyles', options: { adaptive: !ee } },
          di,
        ]
      it() && re && ne.push({ name: 'arrow', options: { element: re, padding: 3 } }),
        ne.push.apply(ne, (tt == null ? void 0 : tt.modifiers) || []),
        (E.popperInstance = el(
          Gr,
          D,
          Object.assign({}, tt, { placement: ot, onFirstUpdate: P, modifiers: ne })
        ))
    }
    c(Ee, 'createPopperInstance')
    function rn() {
      E.popperInstance && (E.popperInstance.destroy(), (E.popperInstance = null))
    }
    c(rn, 'destroyPopperInstance')
    function Ve() {
      var L = E.props.appendTo,
        tt,
        ot = H()
      ;(E.props.interactive && L === jc) || L === 'parent'
        ? (tt = ot.parentNode)
        : (tt = Gc(L, [ot])),
        tt.contains(D) || tt.appendChild(D),
        (E.state.isMounted = !0),
        Ee()
    }
    c(Ve, 'mount')
    function Ye() {
      return Ta(D.querySelectorAll('[data-tippy-root]'))
    }
    c(Ye, 'getNestedPopperTree')
    function nn(L) {
      E.clearDelayTimeouts(), L && ht('onTrigger', [E, L]), pe()
      var tt = jt(!0),
        ot = U(),
        wt = ot[0],
        vt = ot[1]
      ar.isTouch && wt === 'hold' && vt && (tt = vt),
        tt
          ? (o = setTimeout(function () {
              E.show()
            }, tt))
          : E.show()
    }
    c(nn, 'scheduleShow')
    function te(L) {
      if ((E.clearDelayTimeouts(), ht('onUntrigger', [E, L]), !E.state.isVisible)) {
        de()
        return
      }
      if (
        !(
          E.props.trigger.indexOf('mouseenter') >= 0 &&
          E.props.trigger.indexOf('click') >= 0 &&
          ['mouseleave', 'mousemove'].indexOf(L.type) >= 0 &&
          h
        )
      ) {
        var tt = jt(!1)
        tt
          ? (u = setTimeout(function () {
              E.state.isVisible && E.hide()
            }, tt))
          : (l = requestAnimationFrame(function () {
              E.hide()
            }))
      }
    }
    c(te, 'scheduleHide')
    function dr() {
      E.state.isEnabled = !0
    }
    c(dr, 'enable')
    function Me() {
      E.hide(), (E.state.isEnabled = !1)
    }
    c(Me, 'disable')
    function Nn() {
      clearTimeout(o), clearTimeout(u), cancelAnimationFrame(l)
    }
    c(Nn, 'clearDelayTimeouts')
    function fr(L) {
      if (!E.state.isDestroyed) {
        ht('onBeforeUpdate', [E, L]), kn()
        var tt = E.props,
          ot = Xc(t, Object.assign({}, tt, Fc(L), { ignoreAttributes: !0 }))
        ;(E.props = ot),
          Ae(),
          tt.interactiveDebounce !== ot.interactiveDebounce &&
            (Pe(), (N = $c(en, ot.interactiveDebounce))),
          tt.triggerTarget && !ot.triggerTarget
            ? Dn(tt.triggerTarget).forEach(function (wt) {
                wt.removeAttribute('aria-expanded')
              })
            : ot.triggerTarget && t.removeAttribute('aria-expanded'),
          Ut(),
          Dt(),
          X && X(tt, ot),
          E.popperInstance &&
            (Ee(),
            Ye().forEach(function (wt) {
              requestAnimationFrame(wt._tippy.popperInstance.forceUpdate)
            })),
          ht('onAfterUpdate', [E, L])
      }
    }
    c(fr, 'setProps')
    function on(L) {
      E.setProps({ content: L })
    }
    c(on, 'setContent')
    function ui() {
      var L = E.state.isVisible,
        tt = E.state.isDestroyed,
        ot = !E.state.isEnabled,
        wt = ar.isTouch && !E.props.touch,
        vt = rl(E.props.duration, 0, Ke.duration)
      if (
        !(L || tt || ot || wt) &&
        !H().hasAttribute('disabled') &&
        (ht('onShow', [E], !1), E.props.onShow(E) !== !1)
      ) {
        if (
          ((E.state.isVisible = !0),
          it() && (D.style.visibility = 'visible'),
          Dt(),
          pe(),
          E.state.isMounted || (D.style.transition = 'none'),
          it())
        ) {
          var ee = Ct(),
            re = ee.box,
            Gr = ee.content
          il([re, Gr], 0)
        }
        ;(P = c(function () {
          var ne
          if (!(!E.state.isVisible || x)) {
            if (
              ((x = !0),
              D.offsetHeight,
              (D.style.transition = E.props.moveTransition),
              it() && E.props.animation)
            ) {
              var fi = Ct(),
                hr = fi.box,
                $r = fi.content
              il([hr, $r], vt), Wc([hr, $r], 'visible')
            }
            Ft(),
              Ut(),
              Bc(ll, E),
              (ne = E.popperInstance) == null || ne.forceUpdate(),
              ht('onMount', [E]),
              E.props.animation &&
                it() &&
                qe(vt, function () {
                  ;(E.state.isShown = !0), ht('onShown', [E])
                })
          }
        }, 'onFirstUpdate')),
          Ve()
      }
    }
    c(ui, 'show')
    function fo() {
      var L = !E.state.isVisible,
        tt = E.state.isDestroyed,
        ot = !E.state.isEnabled,
        wt = rl(E.props.duration, 1, Ke.duration)
      if (!(L || tt || ot) && (ht('onHide', [E], !1), E.props.onHide(E) !== !1)) {
        if (
          ((E.state.isVisible = !1),
          (E.state.isShown = !1),
          (x = !1),
          (h = !1),
          it() && (D.style.visibility = 'hidden'),
          Pe(),
          de(),
          Dt(!0),
          it())
        ) {
          var vt = Ct(),
            ee = vt.box,
            re = vt.content
          E.props.animation && (il([ee, re], wt), Wc([ee, re], 'hidden'))
        }
        Ft(), Ut(), E.props.animation ? it() && pr(wt, E.unmount) : E.unmount()
      }
    }
    c(fo, 'hide')
    function ci(L) {
      ct().addEventListener('mousemove', N), Bc(_a, N), N(L)
    }
    c(ci, 'hideWithInteractivity')
    function pi() {
      E.state.isVisible && E.hide(),
        !!E.state.isMounted &&
          (rn(),
          Ye().forEach(function (L) {
            L._tippy.unmount()
          }),
          D.parentNode && D.parentNode.removeChild(D),
          (ll = ll.filter(function (L) {
            return L !== E
          })),
          (E.state.isMounted = !1),
          ht('onHidden', [E]))
    }
    c(pi, 'unmount')
    function ho() {
      E.state.isDestroyed ||
        (E.clearDelayTimeouts(),
        E.unmount(),
        kn(),
        delete t._tippy,
        (E.state.isDestroyed = !0),
        ht('onDestroy', [E]))
    }
    c(ho, 'destroy')
  }
  c(Eh, 'createTippy')
  function ii(t, e) {
    e === void 0 && (e = {})
    var r = Ke.plugins.concat(e.plugins || [])
    dh()
    var o = Object.assign({}, e, { plugins: r }),
      u = sh(t)
    if (!1) var l, h
    var g = u.reduce(function (y, x) {
      var w = x && Eh(x, o)
      return w && y.push(w), y
    }, [])
    return Ca(t) ? g[0] : g
  }
  c(ii, 'tippy')
  ii.defaultProps = Ke
  ii.setDefaultProps = yh
  ii.currentInput = ar
  var Sh = Object.assign({}, Ui, {
      effect: c(function (e) {
        var r = e.state,
          o = {
            popper: { position: r.options.strategy, left: '0', top: '0', margin: '0' },
            arrow: { position: 'absolute' },
            reference: {},
          }
        Object.assign(r.elements.popper.style, o.popper),
          (r.styles = o),
          r.elements.arrow && Object.assign(r.elements.arrow.style, o.arrow)
      }, 'effect'),
    }),
    Kc = c(function (e, r) {
      var o
      r === void 0 && (r = {})
      var u = e,
        l = [],
        h = [],
        g,
        y = r.overrides,
        x = [],
        w = !1
      function _() {
        h = u
          .map(function (E) {
            return Dn(E.props.triggerTarget || E.reference)
          })
          .reduce(function (E, j) {
            return E.concat(j)
          }, [])
      }
      c(_, 'setTriggerTargets')
      function P() {
        l = u.map(function (E) {
          return E.reference
        })
      }
      c(P, 'setReferences')
      function k(E) {
        u.forEach(function (j) {
          E ? j.enable() : j.disable()
        })
      }
      c(k, 'enableInstances')
      function N(E) {
        return u.map(function (j) {
          var D = j.setProps
          return (
            (j.setProps = function (X) {
              D(X), j.reference === g && E.setProps(X)
            }),
            function () {
              j.setProps = D
            }
          )
        })
      }
      c(N, 'interceptSetProps')
      function O(E, j) {
        var D = h.indexOf(j)
        if (j !== g) {
          g = j
          var X = (y || []).concat('content').reduce(function (Y, B) {
            return (Y[B] = u[D].props[B]), Y
          }, {})
          E.setProps(
            Object.assign({}, X, {
              getReferenceClientRect:
                typeof X.getReferenceClientRect == 'function'
                  ? X.getReferenceClientRect
                  : function () {
                      var Y
                      return (Y = l[D]) == null ? void 0 : Y.getBoundingClientRect()
                    },
            })
          )
        }
      }
      c(O, 'prepareInstance'), k(!1), P(), _()
      var C = {
          fn: c(function () {
            return {
              onDestroy: c(function () {
                k(!0)
              }, 'onDestroy'),
              onHidden: c(function () {
                g = null
              }, 'onHidden'),
              onClickOutside: c(function (D) {
                D.props.showOnCreate && !w && ((w = !0), (g = null))
              }, 'onClickOutside'),
              onShow: c(function (D) {
                D.props.showOnCreate && !w && ((w = !0), O(D, l[0]))
              }, 'onShow'),
              onTrigger: c(function (D, X) {
                O(D, X.currentTarget)
              }, 'onTrigger'),
            }
          }, 'fn'),
        },
        A = ii(
          ni(),
          Object.assign({}, th(r, ['overrides']), {
            plugins: [C].concat(r.plugins || []),
            triggerTarget: h,
            popperOptions: Object.assign({}, r.popperOptions, {
              modifiers: [].concat(((o = r.popperOptions) == null ? void 0 : o.modifiers) || [], [
                Sh,
              ]),
            }),
          })
        ),
        M = A.show
      ;(A.show = function (E) {
        if ((M(), !g && E == null)) return O(A, l[0])
        if (!(g && E == null)) {
          if (typeof E == 'number') return l[E] && O(A, l[E])
          if (u.indexOf(E) >= 0) {
            var j = E.reference
            return O(A, j)
          }
          if (l.indexOf(E) >= 0) return O(A, E)
        }
      }),
        (A.showNext = function () {
          var E = l[0]
          if (!g) return A.show(0)
          var j = l.indexOf(g)
          A.show(l[j + 1] || E)
        }),
        (A.showPrevious = function () {
          var E = l[l.length - 1]
          if (!g) return A.show(E)
          var j = l.indexOf(g),
            D = l[j - 1] || E
          A.show(D)
        })
      var q = A.setProps
      return (
        (A.setProps = function (E) {
          ;(y = E.overrides || y), q(E)
        }),
        (A.setInstances = function (E) {
          k(!0),
            x.forEach(function (j) {
              return j()
            }),
            (u = E),
            k(!1),
            P(),
            _(),
            (x = N(A)),
            A.setProps({ triggerTarget: h })
        }),
        (x = N(A)),
        A
      )
    }, 'createSingleton')
  ii.setDefaultProps({ render: Qc })
  var Te = ii
  function* Pa(t) {
    let e = '',
      r = 0,
      o = !1
    for (let u = 0; u < t.length; u += 1)
      t[u] === '{' && t[u + 1] === '{' && t[u - 1] !== '\\' && !o
        ? ((o = !0),
          e && (yield { type: 'string', start: r, end: u, value: e }),
          (e = '{{'),
          (r = u),
          (u += 2))
        : t[u] === '}' &&
          t[u + 1] === '}' &&
          t[u - 1] !== '\\' &&
          o &&
          ((o = !1),
          yield { type: 'part', start: r, end: u + 2, value: e.slice(2).trim() },
          (e = ''),
          (u += 2),
          (r = u)),
        (e += t[u] || '')
    e && (yield { type: 'string', start: r, end: t.length, value: e })
  }
  c(Pa, 'parse')
  var tp = function (t, e, r, o, u) {
      if (o === 'm') throw new TypeError('Private method is not writable')
      if (o === 'a' && !u) throw new TypeError('Private accessor was defined without a setter')
      if (typeof e == 'function' ? t !== e || !u : !e.has(t))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        )
      return o === 'a' ? u.call(t, r) : u ? (u.value = r) : e.set(t, r), r
    },
    Qr = function (t, e, r, o) {
      if (r === 'a' && !o) throw new TypeError('Private accessor was defined without a getter')
      if (typeof e == 'function' ? t !== e || !o : !e.has(t))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        )
      return r === 'm' ? o : r === 'a' ? o.call(t) : o ? o.value : e.get(t)
    },
    sr,
    Aa,
    Tr = class {
      constructor(e, r) {
        ;(this.expression = r),
          sr.set(this, void 0),
          Aa.set(this, ''),
          tp(this, sr, e, 'f'),
          Qr(this, sr, 'f').updateParent('')
      }
      get attributeName() {
        return Qr(this, sr, 'f').attr.name
      }
      get attributeNamespace() {
        return Qr(this, sr, 'f').attr.namespaceURI
      }
      get value() {
        return Qr(this, Aa, 'f')
      }
      set value(e) {
        tp(this, Aa, e || '', 'f'), Qr(this, sr, 'f').updateParent(e)
      }
      get element() {
        return Qr(this, sr, 'f').element
      }
      get booleanValue() {
        return Qr(this, sr, 'f').booleanValue
      }
      set booleanValue(e) {
        Qr(this, sr, 'f').booleanValue = e
      }
    }
  c(Tr, 'AttributeTemplatePart')
  ;(sr = new WeakMap()), (Aa = new WeakMap())
  var Ji = class {
    constructor(e, r) {
      ;(this.element = e), (this.attr = r), (this.partList = [])
    }
    get booleanValue() {
      return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name)
    }
    set booleanValue(e) {
      if (this.partList.length !== 1)
        throw new DOMException('Operation not supported', 'NotSupportedError')
      this.partList[0].value = e ? '' : null
    }
    append(e) {
      this.partList.push(e)
    }
    updateParent(e) {
      if (this.partList.length === 1 && e === null)
        this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name)
      else {
        let r = this.partList.map((o) => (typeof o == 'string' ? o : o.value)).join('')
        this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, r)
      }
    }
  }
  c(Ji, 'AttributeValueSetter')
  var ep = function (t, e, r, o, u) {
      if (o === 'm') throw new TypeError('Private method is not writable')
      if (o === 'a' && !u) throw new TypeError('Private accessor was defined without a setter')
      if (typeof e == 'function' ? t !== e || !u : !e.has(t))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        )
      return o === 'a' ? u.call(t, r) : u ? (u.value = r) : e.set(t, r), r
    },
    oi = function (t, e, r, o) {
      if (r === 'a' && !o) throw new TypeError('Private accessor was defined without a getter')
      if (typeof e == 'function' ? t !== e || !o : !e.has(t))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        )
      return r === 'm' ? o : r === 'a' ? o.call(t) : o ? o.value : e.get(t)
    },
    lr,
    Fe = class {
      constructor(e, r) {
        ;(this.expression = r), lr.set(this, void 0), ep(this, lr, [e], 'f'), (e.textContent = '')
      }
      get value() {
        return oi(this, lr, 'f')
          .map((e) => e.textContent)
          .join('')
      }
      set value(e) {
        this.replace(e)
      }
      get previousSibling() {
        return oi(this, lr, 'f')[0].previousSibling
      }
      get nextSibling() {
        return oi(this, lr, 'f')[oi(this, lr, 'f').length - 1].nextSibling
      }
      replace(...e) {
        let r = e.map((o) => (typeof o == 'string' ? new Text(o) : o))
        r.length || r.push(new Text('')), oi(this, lr, 'f')[0].before(...r)
        for (let o of oi(this, lr, 'f')) o.remove()
        ep(this, lr, r, 'f')
      }
    }
  c(Fe, 'NodeTemplatePart')
  lr = new WeakMap()
  function Qi(t) {
    return {
      createCallback(e, r, o) {
        this.processCallback(e, r, o)
      },
      processCallback(e, r, o) {
        var u
        if (!(typeof o != 'object' || !o)) {
          for (let l of r)
            if (l.expression in o) {
              let h = (u = o[l.expression]) !== null && u !== void 0 ? u : ''
              t(l, h)
            }
        }
      },
    }
  }
  c(Qi, 'createProcessor')
  function Ki(t, e) {
    t.value = String(e)
  }
  c(Ki, 'processPropertyIdentity')
  function Ma(t, e) {
    return typeof e == 'boolean' &&
      t instanceof Tr &&
      typeof t.element[t.attributeName] == 'boolean'
      ? ((t.booleanValue = e), !0)
      : !1
  }
  c(Ma, 'processBooleanAttribute')
  var ul = Qi(Ki),
    Oh = Qi((t, e) => {
      Ma(t, e) || Ki(t, e)
    })
  var rp = function (t, e, r, o, u) {
      if (o === 'm') throw new TypeError('Private method is not writable')
      if (o === 'a' && !u) throw new TypeError('Private accessor was defined without a setter')
      if (typeof e == 'function' ? t !== e || !u : !e.has(t))
        throw new TypeError(
          'Cannot write private member to an object whose class did not declare it'
        )
      return o === 'a' ? u.call(t, r) : u ? (u.value = r) : e.set(t, r), r
    },
    Ia = function (t, e, r, o) {
      if (r === 'a' && !o) throw new TypeError('Private accessor was defined without a getter')
      if (typeof e == 'function' ? t !== e || !o : !e.has(t))
        throw new TypeError(
          'Cannot read private member from an object whose class did not declare it'
        )
      return r === 'm' ? o : r === 'a' ? o.call(t) : o ? o.value : e.get(t)
    },
    to,
    eo
  function* Th(t) {
    let e = t.ownerDocument.createTreeWalker(
        t,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        null,
        !1
      ),
      r
    for (; (r = e.nextNode()); )
      if (r instanceof Element && r.hasAttributes())
        for (let o = 0; o < r.attributes.length; o += 1) {
          let u = r.attributes.item(o)
          if (u && u.value.includes('{{')) {
            let l = new Ji(r, u)
            for (let h of Pa(u.value))
              if (h.type === 'string') l.append(h.value)
              else {
                let g = new Tr(l, h.value)
                l.append(g), yield g
              }
          }
        }
      else if (r instanceof Text && r.textContent && r.textContent.includes('{{'))
        for (let o of Pa(r.textContent)) {
          o.end < r.textContent.length && r.splitText(o.end),
            o.type === 'part' && (yield new Fe(r, o.value))
          break
        }
  }
  c(Th, 'collectParts')
  var Kr = class extends DocumentFragment {
    constructor(e, r, o = ul) {
      var u, l
      super()
      to.set(this, void 0),
        eo.set(this, void 0),
        Object.getPrototypeOf(this) !== Kr.prototype && Object.setPrototypeOf(this, Kr.prototype),
        this.appendChild(e.content.cloneNode(!0)),
        rp(this, eo, Array.from(Th(this)), 'f'),
        rp(this, to, o, 'f'),
        (l = (u = Ia(this, to, 'f')).createCallback) === null ||
          l === void 0 ||
          l.call(u, this, Ia(this, eo, 'f'), r)
    }
    update(e) {
      Ia(this, to, 'f').processCallback(this, Ia(this, eo, 'f'), e)
    }
  }
  c(Kr, 'TemplateInstance')
  ;(to = new WeakMap()), (eo = new WeakMap())
  var np = new WeakSet()
  function ip(t) {
    return np.has(t)
  }
  c(ip, 'isDirective')
  function op(t, e) {
    return ip(e) ? (e(t), !0) : !1
  }
  c(op, 'processDirective')
  function ro(t) {
    return (...e) => {
      let r = t(...e)
      return np.add(r), r
    }
  }
  c(ro, 'directive')
  var no = new WeakMap(),
    io = class {
      constructor(e, r) {
        ;(this.element = e),
          (this.type = r),
          this.element.addEventListener(this.type, this),
          no.get(this.element).set(this.type, this)
      }
      set(e) {
        typeof e == 'function'
          ? (this.handleEvent = e.bind(this.element))
          : typeof e == 'object' && typeof e.handleEvent == 'function'
          ? (this.handleEvent = e.handleEvent.bind(e))
          : (this.element.removeEventListener(this.type, this),
            no.get(this.element).delete(this.type))
      }
      static for(e) {
        no.has(e.element) || no.set(e.element, new Map())
        let r = e.attributeName.slice(2),
          o = no.get(e.element)
        return o.has(r) ? o.get(r) : new io(e.element, r)
      }
    }
  c(io, 'EventHandler')
  function ap(t, e) {
    return t instanceof Tr && t.attributeName.startsWith('on')
      ? (io.for(t).set(e), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), !0)
      : !1
  }
  c(ap, 'processEvent')
  function Ch(t, e) {
    return e instanceof ai && t instanceof Fe ? (e.renderInto(t), !0) : !1
  }
  c(Ch, 'processSubTemplate')
  function _h(t, e) {
    return e instanceof DocumentFragment && t instanceof Fe
      ? (e.childNodes.length && t.replace(...e.childNodes), !0)
      : !1
  }
  c(_h, 'processDocumentFragment')
  function Ph(t) {
    return typeof t == 'object' && Symbol.iterator in t
  }
  c(Ph, 'isIterable')
  function Ah(t, e) {
    if (!Ph(e)) return !1
    if (t instanceof Fe) {
      let r = []
      for (let o of e)
        if (o instanceof ai) {
          let u = document.createDocumentFragment()
          o.renderInto(u), r.push(...u.childNodes)
        } else o instanceof DocumentFragment ? r.push(...o.childNodes) : r.push(String(o))
      return r.length && t.replace(...r), !0
    } else return (t.value = Array.from(e).join(' ')), !0
  }
  c(Ah, 'processIterable')
  function Da(t, e) {
    op(t, e) || Ma(t, e) || ap(t, e) || Ch(t, e) || _h(t, e) || Ah(t, e) || Ki(t, e)
  }
  c(Da, 'processPart')
  var cl = new WeakMap(),
    sp = new WeakMap(),
    lp = new WeakMap(),
    ai = class {
      constructor(e, r, o) {
        ;(this.strings = e), (this.values = r), (this.processor = o)
      }
      get template() {
        if (cl.has(this.strings)) return cl.get(this.strings)
        {
          let e = document.createElement('template'),
            r = this.strings.length - 1
          return (
            (e.innerHTML = this.strings.reduce(
              (o, u, l) => o + u + (l < r ? `{{ ${l} }}` : ''),
              ''
            )),
            cl.set(this.strings, e),
            e
          )
        }
      }
      renderInto(e) {
        let r = this.template
        if (sp.get(e) !== r) {
          sp.set(e, r)
          let o = new Kr(r, this.values, this.processor)
          lp.set(e, o), e instanceof Fe ? e.replace(...o.children) : e.appendChild(o)
          return
        }
        lp.get(e).update(this.values)
      }
    }
  c(ai, 'TemplateResult')
  var Mh = Qi(Da)
  function Q(t, ...e) {
    return new ai(t, e, Mh)
  }
  c(Q, 'html')
  function nt(t, e) {
    t.renderInto(e)
  }
  c(nt, 'render')
  var pl = new WeakMap(),
    Ih = ro((...t) => (e) => {
      pl.has(e) || pl.set(e, { i: t.length })
      let r = pl.get(e)
      for (let o = 0; o < t.length; o += 1)
        t[o] instanceof Promise
          ? Promise.resolve(t[o]).then((u) => {
              o < r.i && ((r.i = o), Da(e, u))
            })
          : o <= r.i && ((r.i = o), Da(e, t[o]))
    })
  var Dh = ro((t) => (e) => {
    if (!(e instanceof Fe)) return
    let r = document.createElement('template')
    r.innerHTML = t
    let o = document.importNode(r.content, !0)
    e.replace(...o.childNodes)
  })
  var lo = Bo(ga(), 1)
  var yp = Bo(ga(), 1)
  var up = Object.defineProperty,
    kh = Object.getOwnPropertyDescriptor,
    J = c((t, e) => up(t, 'name', { value: e, configurable: !0 }), 'p'),
    G = c((t, e, r, o) => {
      for (var u = o > 1 ? void 0 : o ? kh(e, r) : e, l = t.length - 1, h; l >= 0; l--)
        (h = t[l]) && (u = (o ? h(e, r, u) : h(u)) || u)
      return o && u && up(e, r, u), u
    }, 's')
  function ve(t) {
    class e extends t {
      get active() {
        return this.hasAttribute('data-active')
      }
      set active(o) {
        o
          ? (this.setAttribute('data-active', ''),
            this.dispatchEvent(new Event('operation-active', { bubbles: !0 })))
          : this.removeAttribute('data-active')
      }
    }
    return c(e, 't'), J(e, 'ActivateableMixinClass'), e
  }
  c(ve, 'f')
  J(ve, 'ActivateableMixin')
  var ka = J(
    (t) =>
      typeof t == 'object' &&
      t !== null &&
      typeof t.angle == 'string' &&
      typeof t.reducedAngle == 'string',
    'isAngleable'
  )
  function oo(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        ;(this.angle = ''), (this.reducedAngle = '')
      }
    }
    return (
      c(e, 't'),
      J(e, 'AngleableMixinClass'),
      G([$], e.prototype, 'angle', 2),
      G([$], e.prototype, 'reducedAngle', 2),
      e
    )
  }
  c(oo, 'j')
  J(oo, 'AngleableMixin')
  function We(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        this.disabled = !1
      }
      get enabled() {
        return !this.disabled
      }
      enable() {
        this.disabled = !1
      }
      disable() {
        this.disabled = !0
      }
    }
    return c(e, 't'), J(e, 'DisableableMixinClass'), G([$], e.prototype, 'disabled', 2), e
  }
  c(We, 'T')
  J(We, 'DisableableMixin')
  var Na = J((t) => t != null && t.tagName === 'CIRCUIT-DROPZONE', 'isCircuitDropzoneElement'),
    dl = J((t) => t != null && t.tagName === 'PALETTE-DROPZONE', 'isPaletteDropzoneElement')
  function me(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        ;(this.operationX = 0),
          (this.operationY = 0),
          (this.grabbed = !1),
          (this.dragging = !1),
          (this.snapped = !1),
          (this.bit = -1),
          (this.debugDraggable = !1),
          (this.draggableMachine = ae(
            {
              id: 'draggable',
              initial: 'idle',
              states: {
                idle: { on: { SET_INTERACT: { target: 'grabbable', actions: ['setInteract'] } } },
                grabbable: {
                  on: {
                    GRAB: { target: 'grabbed', actions: ['grab'] },
                    UNSET_INTERACT: { target: 'idle' },
                  },
                },
                grabbed: {
                  on: {
                    START_DRAGGING: { target: 'dragging', actions: ['startDragging'] },
                    UNGRAB: [
                      { target: 'grabbable', actions: ['unGrab'], cond: 'isOnCircuitDropzone' },
                      { target: 'deleted', actions: ['unGrab'], cond: 'isOnPaletteDropzone' },
                    ],
                  },
                },
                dragging: {
                  type: 'compound',
                  initial: 'unknown',
                  on: { END_DRAGGING: { target: 'dropped', actions: ['endDragging'] } },
                  states: {
                    unknown: {
                      always: [
                        { target: 'snapped', cond: 'isOnCircuitDropzone' },
                        { target: 'unsnapped', cond: 'isOnPaletteDropzone' },
                      ],
                    },
                    snapped: { entry: ['snap'], on: { UNSNAP: { target: 'unsnapped' } } },
                    unsnapped: { entry: ['unsnap'], on: { SNAP: { target: 'snapped' } } },
                  },
                },
                dropped: {
                  entry: ['drop'],
                  always: [
                    { target: 'grabbable', cond: 'droppedOnCircuitDropzone' },
                    { target: 'deleted', cond: 'trashed' },
                  ],
                },
                deleted: { type: 'final', entry: 'delete' },
              },
            },
            {
              actions: {
                setInteract: () => {
                  let o = (0, ao.default)(this)
                  o.styleCursor(!1),
                    o.on('down', this.grab.bind(this)),
                    o.on('up', this.unGrab.bind(this)),
                    o.draggable({
                      onstart: this.startDragging.bind(this),
                      onmove: this.dragMove.bind(this),
                      onend: this.endDragging.bind(this),
                    })
                  let u = this.dropzone
                  Na(u) ? (this.snappedDropzone = u) : (this.snappedDropzone = null)
                },
                grab: (o, u) => {
                  u.type === 'GRAB' &&
                    ((this.grabbed = !0),
                    this.dispatchEvent(new Event('operation-grab', { bubbles: !0 })),
                    dl(this.dropzone) && ((this.snapped = !1), this.moveByOffset(u.x, u.y)))
                },
                unGrab: () => {
                  ;(this.grabbed = !1),
                    this.dispatchEvent(new Event('operation-ungrab', { bubbles: !0 }))
                },
                startDragging: () => {
                  this.dragging = !0
                },
                endDragging: () => {
                  ;(this.grabbed = !1),
                    (this.dragging = !1),
                    this.dispatchEvent(new Event('operation-end-dragging', { bubbles: !0 }))
                },
                snap: () => {
                  ;(this.snapped = !0),
                    (this.snappedDropzone = this.dropzone),
                    this.dispatchEvent(new Event('operation-snap', { bubbles: !0 }))
                },
                unsnap: () => {
                  ;(this.snapped = !1),
                    this.snappedDropzone &&
                      this.snappedDropzone.dispatchEvent(
                        new Event('operation-unsnap', { bubbles: !0 })
                      )
                },
                drop: () => {
                  !this.snapped ||
                    (this.moveTo(0, 0),
                    this.dispatchEvent(new Event('operation-drop', { bubbles: !0 })))
                },
                delete: () => {
                  ;(0, ao.default)(this).unset(),
                    this.dispatchEvent(new Event('operation-delete', { bubbles: !0 }))
                },
              },
              guards: {
                isOnCircuitDropzone: () => Na(this.dropzone),
                isOnPaletteDropzone: () => dl(this.dropzone),
                droppedOnCircuitDropzone: () => this.snapped && Na(this.dropzone),
                trashed: () => !this.snapped,
              },
            }
          ))
      }
      set draggable(o) {
        this.maybeInitStateMachine(),
          o
            ? this.draggableService.send({ type: 'SET_INTERACT' })
            : this.draggableService.send({ type: 'UNSET_INTERACT' })
      }
      get dropzone() {
        let o = this.parentElement
        return ut.notNull(o), !dl(o) && !Na(o) ? null : o
      }
      maybeInitStateMachine() {
        this.draggableService === void 0 &&
          (this.draggableService = Jt(this.draggableMachine)
            .onTransition((o) => {
              this.debugDraggable && console.log(`draggable: ${Vt(o.value)}`)
            })
            .start())
      }
      set snapTargets(o) {
        ;(0, ao.default)(this).draggable({
          modifiers: [
            ao.default.modifiers.snap({
              targets: o,
              range: this.snapRange,
              relativePoints: [{ x: 0.5, y: 0.5 }],
            }),
          ],
          listeners: { move: this.moveEventListener.bind(this) },
        })
      }
      get snapRange() {
        return this.offsetWidth
      }
      moveEventListener(o) {
        let u = o.modifiers[0]
        if (u.inRange) {
          let l = u.target.source
          this.dispatchEvent(
            new CustomEvent('operation-in-snap-range', {
              detail: { snapTargetInfo: l },
              bubbles: !0,
            })
          ),
            this.moveTo(0, 0),
            this.snappedDropzone &&
              this.snappedDropzone !== this.dropzone &&
              this.draggableService.send({ type: 'UNSNAP' }),
            this.draggableService.send({ type: 'SNAP' })
        } else this.snapped && this.draggableService.send({ type: 'UNSNAP' })
      }
      grab(o) {
        this.draggableService.send({ type: 'GRAB', x: o.offsetX, y: o.offsetY })
      }
      unGrab() {
        this.draggableService.send({ type: 'UNGRAB' })
      }
      startDragging() {
        this.draggableService.send({ type: 'START_DRAGGING' })
      }
      endDragging() {
        this.draggableService.send({ type: 'END_DRAGGING' })
      }
      dragMove(o) {
        this.move(o.dx, o.dy)
      }
      move(o, u) {
        let l = this.operationX + o,
          h = this.operationY + u
        this.moveTo(l, h)
      }
      moveTo(o, u) {
        ;(this.operationX = o),
          (this.operationY = u),
          (this.style.transform = `translate(${o}px, ${u}px)`)
      }
      moveByOffset(o, u) {
        let l = o - this.clientWidth / 2,
          h = u - this.clientHeight / 2
        this.move(l, h)
      }
    }
    return (
      c(e, 't'),
      J(e, 'DraggableMixinClass'),
      G([$], e.prototype, 'operationX', 2),
      G([$], e.prototype, 'operationY', 2),
      G([$], e.prototype, 'grabbed', 2),
      G([$], e.prototype, 'dragging', 2),
      G([$], e.prototype, 'snapped', 2),
      G([$], e.prototype, 'bit', 2),
      G([$], e.prototype, 'debugDraggable', 2),
      e
    )
  }
  c(me, 'v')
  J(me, 'DraggableMixin')
  var Ra = J((t) => typeof t == 'object' && t !== null && typeof t.flag == 'string', 'isFlaggable')
  function cp(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        this.flag = ''
      }
    }
    return c(e, 't'), J(e, 'FlaggableMixinClass'), G([$], e.prototype, 'flag', 2), e
  }
  c(cp, 'Kt')
  J(cp, 'FlaggableMixin')
  var pp = J(
    (t) => typeof t == 'object' && t !== null && typeof t.initHelp == 'function',
    'isHelpable'
  )
  function ge(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        ;(this.help = !0),
          (this.helpId = ''),
          (this.debugHelpable = !1),
          (this.helpableMachine = ae(
            {
              id: 'helpable',
              initial: 'idle',
              states: {
                idle: { on: { INIT: { target: 'initialized', actions: ['init'] } } },
                initialized: {
                  type: 'compound',
                  initial: 'unknown',
                  states: {
                    unknown: {
                      always: [
                        { target: 'enabled', cond: 'isEnabled' },
                        { target: 'disabled', cond: 'isDisabled' },
                      ],
                    },
                    enabled: {
                      on: {
                        SHOW: { target: 'enabled', actions: ['show'] },
                        DISABLE: { target: 'disabled', actions: ['disable', 'destroy'] },
                      },
                    },
                    disabled: {
                      on: { ENABLE: { target: 'enabled', actions: ['init', 'enable'] } },
                    },
                  },
                },
              },
            },
            {
              guards: { isEnabled: () => this.help, isDisabled: () => !this.help },
              actions: {
                init: () => {
                  let o = this.helpContent
                  o !== null &&
                    ((this.popup = Te(this, {
                      allowHTML: !0,
                      animation: !1,
                      arrow: Or + Or,
                      delay: 0,
                      placement: 'auto',
                      theme: 'qni',
                      onShow(u) {
                        u.setContent(o)
                      },
                    })),
                    this.addEventListener('mouseenter', this.showHelp))
                },
                show: () => {
                  this.popup.show()
                },
                enable: () => {
                  this.popup.enable(), (this.help = !0)
                },
                disable: () => {
                  var o
                  ;(o = this.popup) == null || o.disable(), (this.help = !1)
                },
                destroy: () => {
                  var o
                  ;(o = this.popup) == null || o.destroy()
                },
              },
            }
          ))
      }
      initHelp() {
        ;(this.helpableService = Jt(this.helpableMachine)
          .onTransition((o) => {
            this.debugHelpable && console.log(`helpable: ${Vt(o.value)}`)
          })
          .start()),
          this.helpableService.send('INIT')
      }
      showHelp() {
        this.helpableService.send('SHOW')
      }
      disableHelp() {
        this.helpableService.send('DISABLE')
      }
      get helpContent() {
        let o
        this.helpId !== '' ? (o = this.helpId) : (o = `${this.tagName.toLowerCase()}-help`)
        let u = document.getElementById(o)
        return u === null ? null : u.content.cloneNode(!0)
      }
    }
    return (
      c(e, 't'),
      J(e, 'HelpableMixinClass'),
      G([$], e.prototype, 'help', 2),
      G([$], e.prototype, 'helpId', 2),
      G([$], e.prototype, 'debugHelpable', 2),
      e
    )
  }
  c(ge, 'E')
  J(ge, 'HelpableMixin')
  function Ce(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        this.icon = ''
      }
      iconHtml(o) {
        return Q`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(o)}</div>`
      }
      iconSvg(o) {
        if (this.icon === '') return Q([o.data])
        let u = document.getElementById(this.icon)
        return u === null ? null : u.content.cloneNode(!0)
      }
      get iconStyle() {
        return Q`<style>
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
      </style>`
      }
    }
    return c(e, 't'), J(e, 'IconableMixinClass'), G([$], e.prototype, 'icon', 2), e
  }
  c(Ce, 'y')
  J(Ce, 'IconableMixin')
  var so = J((t) => typeof t == 'object' && t !== null && typeof t.if == 'string', 'isIfable')
  function ur(t) {
    class e extends t {
      constructor() {
        super(...arguments)
        this.if = ''
      }
    }
    return c(e, 't'), J(e, 'IfableMixinClass'), G([$], e.prototype, 'if', 2), e
  }
  c(ur, 'I')
  J(ur, 'IfableMixin')
  var Nh = J(
    (t) => typeof t == 'object' && t !== null && typeof t.initMenu == 'function',
    'isMenuable'
  )
  function ye(t) {
    class e extends t {
      initMenu() {
        this._tippy ||
          (this.addEventListener('click', this.dispatchShowMenuEvent),
          (this.menu = Te(this, {
            allowHTML: !0,
            animation: !1,
            arrow: !1,
            content: this.menuContent,
            interactive: !0,
            appendTo: document.body,
            offset: [0, 16],
            placement: 'top',
            theme: 'operation-menu',
            trigger: 'manual',
            onShow: this.initMenuItems.bind(this),
            onHide: () => {
              var o, u, l, h
              ;(o = this.ifTooltip) == null || o.hide(),
                (u = this.angleTooltip) == null || u.hide(),
                (l = this.flagTooltip) == null || l.hide(),
                (h = this.deleteTooltip) == null || h.hide()
            },
          })))
      }
      showMenu() {
        this.menu.show()
      }
      hideMenu() {
        this.menu.hide()
      }
      destroyMenu() {
        let o = this._tippy
        o == null || o.destroy()
      }
      dispatchShowMenuEvent() {
        this.dispatchEvent(new Event('operation-show-menu', { bubbles: !0 }))
      }
      get menuContent() {
        let o = document.getElementById('operation-menu')
        ut.notNull(o)
        let u = o.content.cloneNode(!0),
          l = document.createDocumentFragment()
        return nt(Q`${u}`, l), l
      }
      initMenuItems(o) {
        if (so(o.reference)) {
          let l = o.popper.querySelector('button[data-operation-menu-if]')
          ut.notNull(l),
            (l.disabled = !1),
            (this.ifTooltip = l._tippy),
            this.ifTooltip === void 0 &&
              ((this.ifTooltip = Te(l, { animation: !1, content: "Set `if' Conditional" })),
              l.addEventListener('mousedown', this.showIfInspector.bind(this)))
        }
        if (ka(o.reference)) {
          let l = o.popper.querySelector('button[data-operation-menu-angle]')
          ut.notNull(l),
            (l.disabled = !1),
            (this.angleTooltip = l._tippy),
            this.angleTooltip === void 0 &&
              ((this.angleTooltip = Te(l, { animation: !1, content: 'Change Angle' })),
              l.addEventListener('mousedown', this.showAngleInspector.bind(this)))
        }
        if (Ra(o.reference)) {
          let l = o.popper.querySelector('button[data-operation-menu-flag]')
          ut.notNull(l),
            (l.disabled = !1),
            (this.flagTooltip = l._tippy),
            this.flagTooltip === void 0 &&
              ((this.flagTooltip = Te(l, { animation: !1, content: 'Set Condifitonal Flag' })),
              l.addEventListener('mousedown', this.showFlagInspector.bind(this)))
        }
        let u = o.popper.querySelector('[data-operation-menu-delete]')
        ut.notNull(u),
          (this.deleteTooltip = u._tippy),
          this.deleteTooltip === void 0 &&
            (this.deleteTooltip = Te(u, { animation: !1, content: 'Delete' })),
          u.addEventListener('mousedown', this.destroyMenu.bind(this)),
          u.addEventListener('mousedown', this.dispatchOperationDeleteEvent.bind(this))
      }
      showIfInspector() {
        this.hideMenu(), this.dispatchEvent(new Event('operation-menu-if', { bubbles: !0 }))
      }
      showAngleInspector() {
        this.hideMenu(), this.dispatchEvent(new Event('operation-menu-angle', { bubbles: !0 }))
      }
      showFlagInspector() {
        this.hideMenu(), this.dispatchEvent(new Event('operation-menu-flag', { bubbles: !0 }))
      }
      dispatchOperationDeleteEvent() {
        this.dispatchEvent(new Event('operation-delete', { bubbles: !0 }))
      }
    }
    return c(e, 't'), J(e, 'MenuableMixinClass'), e
  }
  c(ye, 'x')
  J(ye, 'MenuableMixin')
  var be = c(
    class extends ye(ge(me(ve(HTMLElement)))) {
      constructor() {
        super(...arguments)
        ;(this.x = 0), (this.y = 0), (this.z = 0)
      }
      get operationType() {
        return Gs
      }
      showPopup() {
        this.showInspector()
      }
      showInspector() {
        if ((ut.notNull(this.parentElement), this.parentElement.tagName === 'PALETTE-DROPZONE'))
          return
        let t = this._tippy
        t && t.destroy()
        let e = this.blochInspectorPopupContent()
        Te(this, {
          allowHTML: !0,
          animation: !1,
          arrow: Or + Or,
          delay: 0,
          placement: 'auto',
          theme: 'qni',
          onShow(r) {
            r.setContent(e)
          },
        }).show()
      }
      blochInspectorPopupContent() {
        let t = document.createDocumentFragment()
        return (
          nt(
            Q`
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
      `,
            t
          ),
          t
        )
      }
      connectedCallback() {
        this.shadowRoot === null &&
          (this.attachShadow({ mode: 'open' }),
          this.update(),
          this.updateBlochVector(),
          this.addEventListener('mouseenter', this.showInspector))
      }
      disconnectedCallback() {
        let t = this._tippy
        t == null || t.destroy()
      }
      attributeChangedCallback(t, e, r) {
        !this.body ||
          (e !== r &&
            r !== null &&
            (t === 'data-x' && (this.x = parseFloat(r)),
            t === 'data-y' && (this.y = parseFloat(r)),
            t === 'data-z' && (this.z = parseFloat(r)),
            (this.d = this.vectorLength()),
            (this.phi = this.phiRadian()),
            (this.theta = this.thetaRadian()),
            this.updateBlochVector()))
      }
      update() {
        ;(this.d = this.vectorLength()),
          (this.phi = this.phiRadian()),
          (this.theta = this.thetaRadian())
        let t = J(
            (r) =>
              Q`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${r}deg)"></div>`,
            'vectorLineRect'
          ),
          e = J(
            (r, o) => Q`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${o}(${r}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`,
            'vectorEndCircle'
          )
        nt(
          Q`<style>
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
                  ${e(0, 'Y')} ${e(20, 'Y')} ${e(40, 'Y')}
                  ${e(60, 'Y')} ${e(80, 'Y')} ${e(100, 'Y')}
                  ${e(120, 'Y')} ${e(140, 'Y')} ${e(160, 'Y')}
                  ${e(90, 'X')}
                </div>
              </div>
            </div>
          </div>
        </div>`,
          this.shadowRoot
        )
      }
      toJson() {
        return `"${Gs}"`
      }
      updateBlochVector() {
        let t = this.vectorEndCircles[0].offsetWidth
        ;(this.vectorLine.style.height = `calc(${(100 * this.d) / 2}% - ${t / 2}px)`),
          (this.vectorEnd.style.bottom = `calc(50% + ${(100 * this.d) / 2}% + ${t / 2}px)`),
          this.d !== 0 &&
            (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`)
        let e = this._tippy
        e == null || e.setContent(this.blochInspectorPopupContent())
      }
      get d() {
        let t = this.getAttribute('data-d')
        return ut.notNull(t), parseFloat(t)
      }
      set d(t) {
        this.setAttribute('data-d', t.toString())
      }
      vectorLength() {
        return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4))
      }
      set phi(t) {
        this.setAttribute('data-phi', t.toString())
      }
      get phi() {
        let t = this.getAttribute('data-phi')
        return ut.notNull(t), parseFloat(t)
      }
      phiRadian() {
        return (Math.atan2(this.y, this.x) * 180) / Math.PI
      }
      set theta(t) {
        this.setAttribute('data-theta', t.toString())
      }
      get theta() {
        let t = this.getAttribute('data-theta')
        return ut.notNull(t), parseFloat(t)
      }
      thetaRadian() {
        let t = Math.max(
          0,
          Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x))
        )
        return (180 * t) / Math.PI
      }
      forceSigned(t, e = 4) {
        return (t >= 0 ? '+' : '') + t.toFixed(e)
      }
    },
    'z'
  )
  J(be, 'BlochDisplayElement'),
    G([Nt], be.prototype, 'body', 2),
    G([Nt], be.prototype, 'vectorLine', 2),
    G([Nt], be.prototype, 'vectorEnd', 2),
    G([Nt], be.prototype, 'vector', 2),
    G([yr], be.prototype, 'vectorEndCircles', 2),
    G([$], be.prototype, 'x', 2),
    G([$], be.prototype, 'y', 2),
    G([$], be.prototype, 'z', 2)
  at(be)
  var Rh = {
      name: 'control-gate',
      data: '<svg id="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke-width="2" stroke-linecap="round"><circle cx="24" cy="24" r="8" fill="currentColor"/></svg>',
    },
    zh = {
      name: 'h-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 13L17 35M17 24L31 24M31 13L31 35"/></svg>',
    },
    qh = {
      name: 'measurement-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 35A16 16 0 0 1 40 35" fill="none"/><path d="M24.5 33L35 15"/><circle cx="24.5" cy="33" r="1.5" fill="currentColor" stroke="currentColor"/></svg>',
    }
  var Lh = {
      name: 'phase-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13"/></svg>',
    },
    jh = {
      name: 'reload',
      data: '<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
    },
    Gh = {
      name: 'rnot-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 24L13 24L14 36L17 36L18 12L38 12"/><path d="M24 32L34 18M34 32L24 18"/></svg>',
    },
    $h = {
      name: 'rx-gate',
      data: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" stroke="currentColor" version="1.1" id="svg8"><defs id="defs2"/><metadata id="metadata5"/><g id="layer1"><path id="path833" style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 12.321429,13.001579 V 35 l 0.124113,-9.836569 c 3.147523,0.03772 6.353769,-0.04212 8.02449,-1.255731 3.393398,-2.464969 2.536391,-7.829543 -0.882743,-10.075755 -1.55048,-1.018589 -4.37683,-0.830366 -7.26586,-0.830366 z M 18.235742,25.599948 21.730352,35 Z"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 34.609303,13.001579 24.747496,35" id="path837"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 24.818679,13.001579 34.609303,35" id="path839"/></g></svg>',
    },
    Bh = {
      name: 'ry-gate',
      data: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" stroke="currentColor" version="1.1" id="svg8"><defs id="defs2"/><metadata id="metadata5"/><g id="layer1"><path id="path833" style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 12.321429,13.001579 V 35 l 0.124113,-9.836569 c 3.147523,0.03772 6.353769,-0.04212 8.02449,-1.255731 3.393398,-2.464969 2.536391,-7.829543 -0.882743,-10.075755 -1.55048,-1.018589 -4.37683,-0.830366 -7.26586,-0.830366 z M 18.235742,25.599948 21.730352,35 Z"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 34.609303,13.001579 29.642858,23.928571" id="path837"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 25.030805,13.001579 4.612053,10.926992" id="path839-3"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 29.642858,23.928571 29.676413,35" id="path837-4"/></g></svg>',
    },
    Fh = {
      name: 'rz-gate',
      data: '<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" stroke="currentColor" version="1.1" id="svg8"><defs id="defs2"/><metadata id="metadata5"/><g id="layer1"><path id="path833" style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 12.321429,13.001579 V 35 l 0.124113,-9.836569 c 3.147523,0.03772 6.353769,-0.04212 8.02449,-1.255731 3.393398,-2.464969 2.536391,-7.829543 -0.882743,-10.075755 -1.55048,-1.018589 -4.37683,-0.830366 -7.26586,-0.830366 z M 18.235742,25.599948 21.730352,35 Z"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 34.609303,13.001579 24.747496,35" id="path837"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 24.818679,13.001579 h 9.790624" id="path839-0"/><path style="fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 24.747496,35 H 34.821429" id="path839-0-8"/></g></svg>',
    },
    Wh = {
      name: 'swap-gate',
      data: '<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>',
    },
    Uh = {
      name: 'tail-spin',
      data: '<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#fff" stop-opacity="0" offset="0%"/><stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/><stop stop-color="#fff" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/></circle></g></g></svg>',
    }
  var Hh = {
      name: 'wires',
      data: '<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none"><line part="wire-input" x1="0" y1="24" x2="24" y2="24" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/><line part="wire-output" x1="24" y1="24" x2="48" y2="24" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/><line id="connect-top" part="connect-top" x1="24" y1="0" x2="24" y2="24" stroke="currentColor" stroke-width="4" vector-effect="non-scaling-stroke"/><line id="connect-bottom" part="connect-bottom" x1="24" y1="48" x2="24" y2="24" stroke="currentColor" stroke-width="4" vector-effect="non-scaling-stroke"/></svg>',
    },
    Vh = {
      name: 'write-gate',
      data: '<svg part="icon" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10L9 40M34 10L40 24L34 40"/></svg>',
    },
    Yh = {
      name: 'x-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke-width="2" stroke="currentColor" stroke-linecap="round"><line x1="50%" y1="28%" x2="50%" y2="72%"/><line x1="28%" y1="50%" x2="72%" y2="50%"/></svg>',
    },
    Xh = {
      name: 'y-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 13L24 24L31 13M24 24L24 35"/></svg>',
    },
    Zh = {
      name: 'z-gate',
      data: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 13L31 13L17 35L31 35"/></svg>',
    },
    Cr = c(
      class extends ye(ge(me(We(Ce(ve(HTMLElement)))))) {
        get operationType() {
          return js
        }
        connectedCallback() {
          this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
        }
        update() {
          nt(Q`${this.iconHtml(Rh)}`, this.shadowRoot)
        }
        toJson() {
          return `"${js}"`
        }
      },
      'M'
    )
  J(Cr, 'ControlGateElement')
  at(Cr)
  var za = J(
    (t) => typeof t == 'object' && t !== null && typeof t.controls == 'object',
    'isControllable'
  )
  function tr(t) {
    class e extends t {
      set controls(o) {
        this.setAttribute('data-controls', o.sort().join())
      }
      get controls() {
        let o = this.getAttribute('data-controls')
        return o === null
          ? []
          : o === ''
          ? []
          : o
              .split(',')
              .map((u) => parseInt(u))
              .sort()
      }
      get isControlled() {
        return this.controls.length > 0
      }
    }
    return c(e, 't'), J(e, 'ControllableMixinClass'), e
  }
  c(tr, 'G')
  J(tr, 'ControllableMixin')
  var _r = c(
    class extends ye(ge(ur(tr(me(We(Ce(ve(HTMLElement)))))))) {
      get operationType() {
        return sa
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(zh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.if !== '' ? `"${sa}<${this.if}"` : `"${sa}"`
      }
    },
    'R'
  )
  J(_r, 'HGateElement')
  at(_r)
  var Pr = c(
    class extends ye(ge(cp(me(Ce(ve(HTMLElement)))))) {
      constructor() {
        super(...arguments)
        this.value = ''
      }
      get operationType() {
        return ma
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(
          Q`${this.iconHtml(qh)}
        <div id="value" part="value"></div>`,
          this.shadowRoot
        )
      }
      toJson() {
        return this.flag === '' ? `"${ma}"` : `"${ma}>${this.flag}"`
      }
    },
    'q'
  )
  J(Pr, 'MeasurementGateElement'), G([$], Pr.prototype, 'value', 2)
  at(Pr)
  var Ar = c(
    class extends ye(ge(ur(tr(oo(me(We(Ce(ve(HTMLElement))))))))) {
      get operationType() {
        return pa
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Lh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.angle === '' ? `"${pa}"` : `"${pa}(${this.angle.replace('/', '_')})"`
      }
    },
    'D'
  )
  J(Ar, 'PhaseGateElement')
  at(Ar)
  var Mr = c(
    class extends ye(ge(ur(tr(me(We(Ce(ve(HTMLElement)))))))) {
      get operationType() {
        return da
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Gh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.if !== '' ? `"${da}<${this.if}"` : `"${da}"`
      }
    },
    'k'
  )
  J(Mr, 'RnotGateElement')
  at(Mr)
  var Ir = c(
    class extends ye(ge(ur(tr(oo(me(We(Ce(ve(HTMLElement))))))))) {
      get operationType() {
        return fa
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml($h)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.angle === '' ? `"${fa}"` : `"${fa}(${this.angle.replace('/', '_')})"`
      }
    },
    'N'
  )
  J(Ir, 'RxGateElement')
  at(Ir)
  var Dr = c(
    class extends ye(ge(ur(tr(oo(me(We(Ce(ve(HTMLElement))))))))) {
      get operationType() {
        return ha
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Bh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.angle === '' ? `"${ha}"` : `"${ha}(${this.angle.replace('/', '_')})"`
      }
    },
    'P'
  )
  J(Dr, 'RyGateElement')
  at(Dr)
  var kr = c(
    class extends ye(ge(ur(tr(oo(me(We(Ce(ve(HTMLElement))))))))) {
      get operationType() {
        return va
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Fh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.angle === '' ? `"${va}"` : `"${va}(${this.angle.replace('/', '_')})"`
      }
    },
    'L'
  )
  J(kr, 'RzGateElement')
  at(kr)
  var tn = c(
    class extends ye(ge(tr(me(We(Ce(ve(HTMLElement))))))) {
      get operationType() {
        return Ls
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`${this.iconHtml(Wh)}`, this.shadowRoot)
      }
      toJson() {
        return `"${Ls}"`
      }
    },
    'W'
  )
  J(tn, 'SwapGateElement')
  at(tn)
  var Nr = c(
    class extends ye(ge(me(Ce(ve(HTMLElement))))) {
      constructor() {
        super(...arguments)
        this.value = ''
      }
      get operationType() {
        switch (this.value) {
          case '0':
            return fc
          case '1':
            return hc
          default:
            throw new Error(`Invalid write value: ${this.value}`)
        }
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(
          Q`${this.iconHtml(Vh)}
        <div part="value"></div>`,
          this.shadowRoot
        )
      }
      toJson() {
        return `"|${this.value}>"`
      }
    },
    'H'
  )
  J(Nr, 'WriteGateElement'), G([$], Nr.prototype, 'value', 2)
  at(Nr)
  var Rr = c(
    class extends ye(ge(ur(tr(me(We(Ce(ve(HTMLElement)))))))) {
      get operationType() {
        return la
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Yh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.if !== '' ? `"${la}<${this.if}"` : `"${la}"`
      }
    },
    '$'
  )
  J(Rr, 'XGateElement')
  at(Rr)
  var zr = c(
    class extends ye(ge(ur(tr(me(We(Ce(ve(HTMLElement)))))))) {
      get operationType() {
        return ua
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Xh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.if !== '' ? `"${ua}<${this.if}"` : `"${ua}"`
      }
    },
    'B'
  )
  J(zr, 'YGateElement')
  at(zr)
  var qr = c(
    class extends ye(ge(ur(tr(me(We(Ce(ve(HTMLElement)))))))) {
      get operationType() {
        return ca
      }
      connectedCallback() {
        this.shadowRoot === null && (this.attachShadow({ mode: 'open' }), this.update())
      }
      update() {
        nt(Q`<div part="body">${this.iconHtml(Zh)}</div>`, this.shadowRoot)
      }
      toJson() {
        return this.if !== '' ? `"${ca}<${this.if}"` : `"${ca}"`
      }
    },
    'U'
  )
  J(qr, 'ZGateElement')
  at(qr)
  var ce = J(
      (t) =>
        t instanceof _r ||
        t instanceof Rr ||
        t instanceof zr ||
        t instanceof qr ||
        t instanceof Ar ||
        t instanceof Mr ||
        t instanceof Ir ||
        t instanceof Dr ||
        t instanceof kr ||
        t instanceof tn ||
        t instanceof Cr ||
        t instanceof be ||
        t instanceof Nr ||
        t instanceof Pr,
      'isOperation'
    ),
    Jh = J((t) => t != null && t instanceof _r, 'isHGateElement'),
    Qh = J((t) => t != null && t instanceof Rr, 'isXGateElement'),
    Kh = J((t) => t != null && t instanceof zr, 'isYGateElement'),
    tv = J((t) => t != null && t instanceof qr, 'isZGateElement'),
    fl = J((t) => t != null && t instanceof Ar, 'isPhaseGateElement'),
    ev = J((t) => t != null && t instanceof Mr, 'isRnotGateElement'),
    dp = J((t) => t != null && t instanceof Ir, 'isRxGateElement'),
    fp = J((t) => t != null && t instanceof Dr, 'isRyGateElement'),
    hp = J((t) => t != null && t instanceof kr, 'isRzGateElement'),
    rv = J((t) => t != null && t instanceof tn, 'isSwapGateElement'),
    vp = J((t) => t != null && t instanceof Cr, 'isControlGateElement'),
    nv = J((t) => t != null && t instanceof be, 'isBlochDisplayElement'),
    Ax = J((t) => t != null && t instanceof Nr, 'isWriteGateElement'),
    iv = J((t) => t != null && t instanceof Pr, 'isMeasurementGateElement')
  function mp(t) {
    return /^-?\d+$/.test(t)
  }
  c(mp, 'Ie')
  J(mp, 'isNumeric')
  var gp = c(
    class extends HTMLElement {
      get isInspectorShown() {
        return this.popup.state.isVisible
      }
      connectedCallback() {
        this.shadowRoot === null &&
          (this.attachShadow({ mode: 'open' }),
          this.update(),
          this.initPopup(),
          this.addEventListener('mousedown', this.showPopup),
          document.addEventListener('click', this.maybeHidePopup.bind(this)))
      }
      update() {
        nt(Q`<slot></slot>`, this.shadowRoot)
      }
      showInspector(t) {
        this.showPopup(), (this.inspector.operation = t)
      }
      showIfInspector(t) {
        this.showPopup(),
          (this.inspector.operation = t),
          window.setTimeout(() => {
            this.inspector.ifInput.focus()
          }, 0)
      }
      showAngleInspector(t) {
        this.showPopup(),
          (this.inspector.operation = t),
          window.setTimeout(() => {
            this.inspector.angleInput.focus()
          }, 0)
      }
      showFlagInspector(t) {
        this.showPopup(),
          (this.inspector.operation = t),
          window.setTimeout(() => {
            this.inspector.flagInput.focus()
          }, 0)
      }
      get inspector() {
        let t = this.popup.popper.querySelector('operation-inspector')
        return ut.notNull(t), t
      }
      initPopup() {
        this.popup = Te(this, {
          allowHTML: !0,
          animation: !1,
          arrow: !1,
          content: this.popupContent,
          interactive: !0,
          offset: [0, 4],
          placement: 'bottom',
          theme: 'operation-inspector',
          trigger: 'manual',
          hideOnClick: !1,
        })
      }
      showPopup() {
        this.popup.show(), this.inspector.disableAllPanes()
      }
      maybeHidePopup(t) {
        let e = t.target
        !this.popup.popper.contains(e) &&
          !this.popup.reference.contains(e) &&
          !ce(e) &&
          this.popup.hide()
      }
      get popupContent() {
        let t = document.querySelector('#operation-inspector-template')
        ut.notNull(t)
        let e = t.content.cloneNode(!0),
          r = document.createDocumentFragment()
        return nt(Q`${e}`, r), r
      }
    },
    '$t'
  )
  J(gp, 'InspectorButtonElement')
  at(gp)
  var ov = J((t) => t !== null && t instanceof uo, 'isAngleSliderElement'),
    uo = c(
      class extends HTMLElement {
        constructor() {
          super(...arguments)
          ;(this.denominator = 0), (this.disabled = !1), (this.snapAngles = {})
        }
        get angle() {
          let t = this.getAttribute('data-angle')
          return ut.notNull(t), t
        }
        set angle(t) {
          this.setAttribute('data-angle', t),
            this.dispatchEvent(new Event('angle-slider-update', { bubbles: !0 }))
        }
        get radian() {
          let t = this.getAttribute('data-radian')
          return ut.notNull(t), parseFloat(t)
        }
        set radian(t) {
          this.setAttribute('data-radian', t.toString()),
            (this.left = (t + 2 * Math.PI) / (4 * Math.PI))
        }
        initWithAngle(t) {
          ;(this.denominator = Fi(t)), this.updateSnapAngles()
          let [e, r] = this.findSnapAngle(lc(t))
          this.radian = e
        }
        attributeChangedCallback(t, e, r) {
          e !== r &&
            r !== null &&
            t === 'data-denominator' &&
            this.denominator !== 0 &&
            this.updateSnapAngles()
        }
        connectedCallback() {
          this.shadowRoot === null && this.attachShadow({ mode: 'open' }),
            this.update(),
            this.setAttribute('data-angle', ''),
            this.updateSnapAngles(),
            this.initInteraction()
        }
        disconnectedCallback() {
          ;(0, lo.default)(this).unset()
        }
        update() {
          nt(Q`<slot></slot>`, this.shadowRoot)
        }
        initInteraction() {
          ;(0, lo.default)(this).draggable({
            origin: 'self',
            modifiers: [lo.default.modifiers.restrict({ restriction: 'self' })],
            listeners: { move: this.move.bind(this) },
          })
        }
        updateSnapAngles() {
          if (this.denominator === 0) return
          let t = -2 * this.denominator,
            e = 2 * this.denominator,
            r = new Array(e - t + 1).fill(null).map((o, u) => u + t)
          this.snapAngles = {}
          for (let o of r)
            this.denominator === 1
              ? o === 0
                ? (this.snapAngles[0] = '0')
                : o === 1
                ? (this.snapAngles[Math.PI] = '\u03C0')
                : o === -1
                ? (this.snapAngles[-1 * Math.PI] = '-\u03C0')
                : (this.snapAngles[o * Math.PI] = `${o}\u03C0`)
              : o === 0
              ? (this.snapAngles[0] = '0')
              : o === 1
              ? (this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}`)
              : o === -1
              ? (this.snapAngles[(-1 * Math.PI) / this.denominator] = `-\u03C0/${this.denominator}`)
              : (this.snapAngles[
                  (o * Math.PI) / this.denominator
                ] = `${o}\u03C0/${this.denominator}`)
        }
        findSnapAngle(t) {
          let e = null,
            r = null,
            o = null
          for (let u in this.snapAngles) {
            let l = Math.abs(parseFloat(u) - t)
            ;(e === null || l < e) && ((e = l), (r = parseFloat(u)), (o = this.snapAngles[u]))
          }
          return ut.notNull(r), ut.notNull(o), [r, o]
        }
        move(t) {
          let e = lo.default.getElementRect(t.target).width,
            r = t.pageX / e
          this.left = r
          let o = this.proportionToRadian(r)
          this.setAttribute('data-radian', o.toString())
          let [u, l] = this.findSnapAngle(o)
          this.angle !== l && (this.angle = l)
        }
        proportionToRadian(t) {
          return (t - 0.5) * Math.PI * 4
        }
        set left(t) {
          this.style.paddingLeft = `${t * 100}%`
        }
      },
      'ot'
    )
  J(uo, 'AngleSliderElement'),
    G([$], uo.prototype, 'denominator', 2),
    G([$], uo.prototype, 'disabled', 2)
  at(uo)
  var _e = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        ;(this.conditionalGatePaneDisabled = !0),
          (this.anglePaneDisabled = !0),
          (this.conditionalFlagPaneDisabled = !0)
      }
      get if() {
        return this.ifInput.value
      }
      get angle() {
        return this.angleInput.value
      }
      get reducedAngle() {
        return dc(this.angleInput.value)
      }
      get reduceAngleFraction() {
        return this.reduceAngleFractionCheckbox.checked
      }
      get flag() {
        return this.flagInput.value
      }
      set operation(t) {
        if (
          (this.clear(),
          this.disableAllPanes(),
          so(t) && ((this.conditionalGatePaneDisabled = !1), (this.ifInput.value = t.if)),
          ka(t))
        ) {
          let e = Fi(t.angle)
          fl(t)
            ? ((this.angleInputLabel.textContent = '\u{1D711}'),
              (this.denominatorVariableLabel.textContent = '\u{1D711}'))
            : (dp(t) || fp(t) || hp(t)) &&
              ((this.angleInputLabel.textContent = '\u{1D6F3}'),
              (this.denominatorVariableLabel.textContent = '\u{1D6F3}')),
            (this.anglePaneDisabled = !1),
            (this.angleInput.value = t.angle),
            this.backupCurrentPhi(),
            this.angleSlider.initWithAngle(t.angle),
            (this.denominatorInput.value = e.toString()),
            (this.denominatorLabel.textContent = e.toString()),
            this.backupCurrentDenominator(),
            (this.reduceAngleFractionCheckbox.checked = t.reducedAngle !== '')
        }
        Ra(t) && ((this.conditionalFlagPaneDisabled = !1), (this.flagInput.value = t.flag))
      }
      clear() {
        ;(this.ifInput.value = ''),
          (this.angleInput.value = ''),
          (this.angleSlider.radian = 0),
          (this.denominatorInput.value = ''),
          (this.reduceAngleFractionCheckbox.checked = !1),
          (this.flagInput.value = '')
      }
      disableAllPanes() {
        ;(this.conditionalGatePaneDisabled = !0),
          (this.anglePaneDisabled = !0),
          (this.conditionalFlagPaneDisabled = !0)
      }
      connectedCallback() {
        this.shadowRoot === null &&
          (this.attachShadow({ mode: 'open' }),
          this.update(),
          this.addEventListener('angle-slider-update', this.updateAngle),
          this.ifInput.addEventListener('change', this.changeIf.bind(this)),
          this.angleInput.addEventListener('change', this.changePhi.bind(this)),
          this.denominatorInput.addEventListener('change', this.changeDenominator.bind(this)),
          this.reduceAngleFractionCheckbox.addEventListener(
            'change',
            this.changeReduceSetting.bind(this)
          ),
          this.flagInput.addEventListener('change', this.changeFlag.bind(this)))
      }
      update() {
        nt(Q`<slot></slot>`, this.shadowRoot)
      }
      updateAngle(t) {
        let e = t.target
        if (!ov(e)) throw new Error(`${e} isn't an angle-slider`)
        ;(this.angleInput.value = e.angle),
          this.dispatchEvent(new Event('operation-inspector-angle-change', { bubbles: !0 }))
      }
      backupCurrentPhi() {
        this.angleInput.setAttribute('data-original-value', this.angleInput.value)
      }
      restoreOriginalPhi() {
        let t = this.angleInput.getAttribute('data-original-value')
        ut.notNull(t), (this.angleInput.value = t)
      }
      changeIf() {
        this.dispatchEvent(new Event('operation-inspector-if-change', { bubbles: !0 }))
      }
      changePhi() {
        let t = this.angleInput.value
        if (pc(t)) {
          let e,
            r = Fi(t)
          ;(this.denominatorInput.value = r.toString()),
            (this.denominatorLabel.textContent = r.toString()),
            this.backupCurrentDenominator(),
            uc(t, '-2\u03C0')
              ? ((e = `-${r * 2}\u03C0/${r}`), (this.angleInput.value = e))
              : cc(t, '2\u03C0')
              ? ((e = `${r * 2}\u03C0/${r}`), (this.angleInput.value = e))
              : (e = t),
            this.backupCurrentPhi(),
            this.angleSlider.initWithAngle(e),
            this.dispatchEvent(new Event('operation-inspector-angle-change', { bubbles: !0 }))
        } else this.restoreOriginalPhi()
      }
      changeFlag() {
        this.dispatchEvent(new Event('operation-inspector-flag-change', { bubbles: !0 }))
      }
      backupCurrentDenominator() {
        this.denominatorInput.setAttribute('data-original-value', this.denominatorInput.value)
      }
      restoreOriginalDenominator() {
        let t = this.denominatorInput.getAttribute('data-original-value')
        ut.notNull(t), (this.denominatorInput.value = t), (this.denominatorLabel.textContent = t)
      }
      changeDenominator() {
        let t = this.denominatorInput.value
        if (mp(t) && parseInt(t) > 1) {
          ;(this.denominatorLabel.textContent = t), (this.angleSlider.denominator = parseInt(t))
          let [e, r] = this.angleSlider.findSnapAngle(this.angleSlider.radian)
          ;(this.angleInput.value = r), (this.angleSlider.radian = e), (this.angleSlider.angle = r)
        } else this.restoreOriginalDenominator()
      }
      changeReduceSetting() {
        this.dispatchEvent(new Event('operation-inspector-angle-change', { bubbles: !0 }))
      }
    },
    'A'
  )
  J(_e, 'OperationInspectorElement'),
    G([Nt], _e.prototype, 'ifInput', 2),
    G([Nt], _e.prototype, 'angleInputLabel', 2),
    G([Nt], _e.prototype, 'angleInput', 2),
    G([Nt], _e.prototype, 'angleSlider', 2),
    G([Nt], _e.prototype, 'denominatorInput', 2),
    G([Nt], _e.prototype, 'denominatorVariableLabel', 2),
    G([Nt], _e.prototype, 'denominatorLabel', 2),
    G([Nt], _e.prototype, 'reduceAngleFractionCheckbox', 2),
    G([Nt], _e.prototype, 'flagInput', 2),
    G([$], _e.prototype, 'conditionalGatePaneDisabled', 2),
    G([$], _e.prototype, 'anglePaneDisabled', 2),
    G([$], _e.prototype, 'conditionalFlagPaneDisabled', 2)
  at(_e)
  var er = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        ;(this.qubitCount = 1),
          (this.size = ''),
          (this.magnitudes = '1.0'),
          (this.phases = ''),
          (this.multiQubits = !1),
          (this.showKets = !1)
      }
      setAmplitudes(t) {
        let e = this.qubitCircles
        for (let [r, o] of Object.entries(t)) {
          console.log('i =', { i: r })
          let u = e[parseInt(r)]
          u.setAttribute('data-amplitude-real', o.real.toString()),
            u.setAttribute('data-amplitude-imag', o.imag.toString())
          let l = o.abs()
          if ((this.setRoundedMagnitude(u, l), l === 0)) continue
          let h = (o.phase() / Math.PI) * 180
          console.log(`phaseDeg = ${h}`), this.setRoundedPhase(u, h)
        }
      }
      connectedCallback() {
        this.shadowRoot === null &&
          (this.attachShadow({ mode: 'open' }),
          this.update(),
          this.initQubitCirclePopup(this.qubitCircles),
          this.multiQubits && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()))
      }
      dispatchLoadEvent() {
        this.dispatchEvent(new Event('circle-notation.load', { bubbles: !0 }))
      }
      attributeChangedCallback(t, e, r) {
        this.shadowRoot !== null &&
          e !== r &&
          t === 'data-qubit-count' &&
          this.dispatchVisibilityChangedEvent()
      }
      startQubitCircleVisibilityObserver() {
        let t = { root: this, threshold: [0, 0.2] },
          e = J((o) => {
            for (let u of o) {
              let l = u.target
              u.intersectionRatio >= 0.2
                ? (l.setAttribute(
                    'data-targets',
                    'circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups'
                  ),
                  this.dispatchVisibilityChangedEvent())
                : u.intersectionRatio === 0 &&
                  l.setAttribute('data-targets', 'circle-notation.qubitCircleGroups')
            }
          }, 'callback'),
          r = new IntersectionObserver(e, t)
        for (let o of this.qubitCircleGroups) r.observe(o)
      }
      dispatchVisibilityChangedEvent() {
        this.dispatchEvent(
          new CustomEvent('circle-notation-visibility-change', {
            detail: this.visibleQubitCircleKets,
            bubbles: !0,
          })
        )
      }
      get visibleQubitCircleKets() {
        let t = 2 ** this.qubitCount
        return this.visibleQubitCircles
          .map((e) => parseInt(e.getAttribute('data-ket')))
          .filter((e) => e < t)
      }
      get visibleQubitCircles() {
        let t = this.visibleQubitCircleGroups.map((e) =>
          Array.from(e.querySelectorAll('.qubit-circle'))
        )
        return [].concat(...t)
      }
      update() {
        nt(
          Q`<style>
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

        <div id="body">${this.qubitCirclesHtml}</div>`,
          this.shadowRoot
        )
        for (let [t, e] of this.magnitudes.split(',').entries())
          this.setRoundedMagnitude(this.qubitCircles[t], parseFloat(e))
        if (this.phases.trim() !== '')
          for (let [t, e] of this.phases.split(',').entries()) {
            let r = this.qubitCircles[t],
              o = e ? parseFloat(e) : 0
            this.setRoundedPhase(r, o)
            let u = r.querySelector('.qubit-circle__phase')
            u.style.transform = `rotate(${-o}deg)`
          }
      }
      setRoundedMagnitude(t, e) {
        if (t == null) return
        let r = Math.round(e * 100)
        ;(r = r < 10 ? (r === 0 ? 0 : 10) : Math.round(r / 10) * 10),
          (r = r / 100),
          t.setAttribute('data-magnitude', e.toString()),
          t.setAttribute('data-rounded-magnitude', r.toString())
      }
      setRoundedPhase(t, e) {
        if (t == null) return
        let r = Math.round(e / 10) * 10
        r < 0 && (r = 360 + r),
          t.setAttribute('data-phase', e.toString()),
          t.setAttribute('data-rounded-phase', r.toString())
      }
      get qubitCirclesHtml() {
        return this.multiQubits
          ? this.stateVectorHtml(10)
          : Q`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`
      }
      qubitCircleHtml(t) {
        return Q`<div
      class="qubit-circle"
      data-ket="${t}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`
      }
      stateVectorHtml(t) {
        let e = Q``,
          r = this.qubitCircleGroup(
            [...Array(2 ** t).keys()],
            (o) =>
              this.qubitCircleGroup(o, (u) =>
                this.qubitCircleGroup(u, (l) =>
                  this.qubitCircleGroup(l, (h) =>
                    this.qubitCircleGroup(h, (g) =>
                      this.qubitCircleGroup(g, (y) => this.qubitCircleGroup(y))
                    )
                  )
                )
              ),
            256
          )
        for (let o of r) e = Q`${e} ${o}`
        return e
      }
      qubitCircleGroup(t, e, r = t.length / 2) {
        return J(
          (o, u = 1) => o.reduce((l, h, g) => (g % u ? l : [...l, o.slice(g, g + u)]), []),
          'arrayChunk'
        )(t, r).map((o) => {
          let u = Q``
          if (e) for (let l of e(o)) u = Q`${u} ${l}`
          else for (let l of o) u = Q`${u} ${this.qubitCircleHtml(l)}`
          return r === 64
            ? Q`<div class="qubit-circle-group--size${r}" data-targets="circle-notation.qubitCircleGroups">
          ${u}
        </div>`
            : Q`<div class="qubit-circle-group--size${r}">${u}</div>`
        })
      }
      initQubitCirclePopup(t) {
        let e = Te(t)
        Kc(e, { allowHTML: !0, animation: !1, arrow: Or + Or, delay: 0, theme: 'qni' })
      }
      setPopupContent(t) {
        if (this.popupEl === null) return
        let e = t.target,
          r = this.ketDecimal(e),
          o = e.getAttribute('data-amplitude-real'),
          u = e.getAttribute('data-amplitude-imag'),
          l = e.getAttribute('data-magnitude'),
          h = e.getAttribute('data-phase'),
          g
        o === null || u === null ? (g = Xr.ZERO) : (g = new Xr(parseFloat(o), parseFloat(u)))
        let y
        l && parseFloat(l) === 0 ? (y = 0) : (y = h ? parseFloat(h) : 0),
          this.setQubitCirclePopupContent(
            this.popupEl.content,
            e,
            r,
            g,
            l ? parseFloat(l) : 0,
            y,
            this.qubitCount
          )
      }
      setQubitCirclePopupContent(t, e, r, o, u, l, h) {
        e._tippy.setContent(this.popupContent(t, r, o, u, l, h))
      }
      popupContent(t, e, r, o, u, l) {
        let h = t.querySelector('.circle-notation-popup__ket-binary'),
          g = t.querySelector('.circle-notation-popup__ket-decimal'),
          y = t.querySelector('.circle-notation-popup__amplitude-real'),
          x = t.querySelector('.circle-notation-popup__amplitude-imag'),
          w = t.querySelector('.circle-notation-popup__probability'),
          _ = t.querySelector('.circle-notation-popup__phase')
        h && (h.textContent = e.toString(2).padStart(l, '0')),
          g && (g.textContent = e.toString()),
          y && (y.textContent = this.forceSigned(r.real, 5)),
          x && (x.textContent = `${this.forceSigned(r.imag, 5)}i`),
          w && (w.textContent = `${this.forceSigned(o * o * 100, 4)}%`),
          _ && (_.textContent = `${this.forceSigned(u, 2)}\xB0`)
        let P = document.createElement('div')
        return P.appendChild(t.cloneNode(!0)), P.innerHTML
      }
      get popupEl() {
        return document.getElementById('circle-notation-popup')
      }
      forceSigned(t, e) {
        return (t >= 0 ? '+' : '') + t.toFixed(e)
      }
      ketDecimal(t) {
        let e = t.getAttribute('data-ket')
        return parseInt(e)
      }
    },
    'Y'
  )
  J(er, 'CircleNotationElement'),
    G([$], er.prototype, 'qubitCount', 2),
    G([$], er.prototype, 'size', 2),
    G([$], er.prototype, 'magnitudes', 2),
    G([$], er.prototype, 'phases', 2),
    G([$], er.prototype, 'multiQubits', 2),
    G([$], er.prototype, 'showKets', 2),
    G([yr], er.prototype, 'qubitCircles', 2),
    G([yr], er.prototype, 'qubitCircleGroups', 2),
    G([yr], er.prototype, 'visibleQubitCircleGroups', 2)
  at(er)
  var si = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        ;(this.running = !1),
          (this.debug = !1),
          (this.runCircuitButtonMachine = ae(
            {
              id: 'run-circuit-button',
              initial: 'unknown',
              states: {
                unknown: {
                  always: [
                    { target: 'idle', cond: 'isIdle' },
                    { target: 'running', cond: 'isRunning' },
                  ],
                },
                idle: {
                  on: {
                    CLICK: {
                      target: 'running',
                      actions: ['ripple', 'setRunningTrue', 'dispatchClickEvent'],
                    },
                  },
                },
                running: { on: { FINISH: { target: 'idle', actions: ['setRunningFalse'] } } },
              },
            },
            {
              actions: {
                setRunningFalse: () => {
                  this.running = !1
                },
                setRunningTrue: () => {
                  this.running = !0
                },
                ripple: (t, e) => {
                  if (e.type !== 'CLICK') return
                  this.ripple && this.ripple.remove()
                  let r = document.createElement('span')
                  r.id = 'ripple'
                  let o = Math.max(this.clientWidth, this.clientHeight),
                    u = o / 2,
                    l = this.getBoundingClientRect(),
                    h = l.left + window.pageXOffset,
                    g = l.top + window.pageYOffset
                  r.setAttribute('part', 'ripple'),
                    r.setAttribute('data-target', 'run-circuit-button.ripple'),
                    (r.style.width = r.style.height = `${o}px`),
                    (r.style.left = `${e.clientX - (h + u)}px`),
                    (r.style.top = `${e.clientY - (g + u)}px`),
                    this.body.appendChild(r)
                },
                dispatchClickEvent: () => {
                  this.dispatchEvent(new Event('run-circuit-button-click', { bubbles: !0 }))
                },
              },
              guards: { isIdle: () => !this.running, isRunning: () => this.running },
            }
          ))
      }
      connectedCallback() {
        this.attachShadow({ mode: 'open' }),
          this.update(),
          (this.runCircuitButtonService = Jt(this.runCircuitButtonMachine)
            .onTransition((t) => {
              this.debug && console.log(`run-circuit-button: ${Vt(t.value)}`)
            })
            .start()),
          this.addEventListener('click', this.handleClickEvent)
      }
      attributeChangedCallback(t, e, r) {
        e !== r &&
          t === 'data-running' &&
          r !== null &&
          this.runCircuitButtonService.send({ type: 'FINISH' })
      }
      update() {
        nt(
          Q`<style>
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

        <div id="body" part="body" data-target="run-circuit-button.body">${this.reloadIcon} ${this.tailSpinIcon}</div>`,
          this.shadowRoot
        )
      }
      handleClickEvent(t) {
        this.runCircuitButtonService.send({ type: 'CLICK', clientX: t.clientX, clientY: t.clientY })
      }
      get reloadIcon() {
        return Q([jh.data])
      }
      get tailSpinIcon() {
        return Q([Uh.data])
      }
    },
    'et'
  )
  J(si, 'RunCircuitButtonElement'),
    G([$], si.prototype, 'running', 2),
    G([$], si.prototype, 'debug', 2),
    G([Nt], si.prototype, 'body', 2),
    G([Nt], si.prototype, 'ripple', 2)
  at(si)
  var bp = J((t) => t != null && t instanceof ze, 'isCircuitDropzoneElement'),
    ze = c(
      class extends HTMLElement {
        constructor() {
          super(...arguments)
          ;(this.operationName = ''),
            (this.inputWireQuantum = !1),
            (this.outputWireQuantum = !1),
            (this.connectTop = !1),
            (this.connectBottom = !1),
            (this.shadow = !1),
            (this.debug = !1),
            (this.circuitDropzoneMachine = ae(
              {
                id: 'circuit-dropzone',
                initial: 'empty',
                states: {
                  empty: {
                    on: {
                      INIT_OPERATION: { target: 'occupied', actions: ['initOperation'] },
                      SNAP_OPERATION: { target: 'snapped', actions: ['snapOperation'] },
                      PUT_OPERATION: { target: 'occupied', actions: ['putOperation'] },
                      DELETE_OPERATION: {
                        target: 'empty',
                        actions: ['deleteOperation', 'dispatchDeleteOperationEvent'],
                      },
                    },
                  },
                  snapped: {
                    on: {
                      UNSNAP_OPERATION: { target: 'empty', actions: ['unsnapOperation'] },
                      DROP_OPERATION: { target: 'occupied', actions: ['dropOperation'] },
                    },
                  },
                  occupied: {
                    entry: 'dispatchOccupiedEvent',
                    on: {
                      UNSNAP_OPERATION: { target: 'empty', actions: ['unsnapOperation'] },
                      DELETE_OPERATION: {
                        target: 'empty',
                        actions: ['deleteOperation', 'dispatchDeleteOperationEvent'],
                      },
                    },
                  },
                },
              },
              {
                actions: {
                  snapOperation: () => {
                    ut.notNull(this.operation),
                      (this.operationName = this.operation.tagName.toLocaleLowerCase()),
                      this.dispatchEvent(new Event('circuit-dropzone-snap', { bubbles: !0 }))
                  },
                  unsnapOperation: () => {
                    ;(this.operationName = ''),
                      this.dispatchEvent(new Event('circuit-dropzone-unsnap', { bubbles: !0 }))
                  },
                  dropOperation: () => {
                    this.dispatchEvent(new Event('circuit-dropzone-drop', { bubbles: !0 }))
                  },
                  putOperation: (t, e) => {
                    e.type === 'PUT_OPERATION' &&
                      (this.append(e.operation),
                      (this.operationName = e.operation.tagName.toLocaleLowerCase()),
                      (e.operation.snapped = !0))
                  },
                  initOperation: (t, e) => {
                    e.type === 'INIT_OPERATION' && (e.operation.snapped = !0)
                  },
                  deleteOperation: (t, e) => {
                    e.type === 'DELETE_OPERATION' &&
                      ((this.operationName = ''), this.removeChild(e.operation))
                  },
                  dispatchOccupiedEvent: () => {
                    this.dispatchEvent(new Event('circuit-dropzone-occupy', { bubbles: !0 }))
                  },
                  dispatchDeleteOperationEvent: () => {
                    this.dispatchEvent(
                      new Event('circuit-dropzone-operation-delete', { bubbles: !0 })
                    )
                  },
                },
              }
            ))
        }
        get noConnections() {
          return !this.connectTop && !this.connectBottom
        }
        get occupied() {
          return this.operationName !== ''
        }
        get operation() {
          let t = Array.from(this.children).filter((e) => ce(e))
          switch (t.length) {
            case 0:
              return null
            case 1:
              return t[0]
            default:
              throw new Error('circuit-dropzone cannot hold multiple operations.')
          }
        }
        get snapTarget() {
          let t = this.getBoundingClientRect()
          return {
            x: window.pageXOffset + t.left + this.clientWidth / 2,
            y: window.pageYOffset + t.top + this.clientHeight / 2,
          }
        }
        toJson() {
          let t = this.operation
          return t === null ? '1' : t.toJson()
        }
        connectedCallback() {
          ;(this.circuitDropzoneService = Jt(this.circuitDropzoneMachine)
            .onTransition((t) => {
              this.debug && console.log(`circuit-dropzone: ${t.value}`)
            })
            .start()),
            this.attachShadow({ mode: 'open' }),
            this.update(),
            this.operation !== null && this.initOperation(this.operation),
            this.initDropzone(),
            this.addEventListener('operation-snap', this.snapOperation),
            this.addEventListener('operation-unsnap', this.unsnapOperation),
            this.addEventListener('operation-end-dragging', this.dropOperation),
            this.addEventListener('operation-delete', this.deleteOperation)
        }
        update() {
          nt(
            Q`<style>
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

        <div id="body"><slot></slot>${this.wireSvg}</div>`,
            this.shadowRoot
          )
        }
        put(t) {
          this.circuitDropzoneService.send({ type: 'PUT_OPERATION', operation: t })
        }
        initOperation(t) {
          this.circuitDropzoneService.send({ type: 'INIT_OPERATION', operation: t })
        }
        initDropzone() {
          this.operation !== null &&
            (this.operationName = this.operation.tagName.toLocaleLowerCase()),
            (0, yp.default)(this).dropzone({ accept: '[data-draggable]', overlap: 'center' })
        }
        snapOperation() {
          this.circuitDropzoneService.send({ type: 'SNAP_OPERATION' })
        }
        unsnapOperation() {
          this.circuitDropzoneService.send({ type: 'UNSNAP_OPERATION' })
        }
        dropOperation() {
          this.circuitDropzoneService.send({ type: 'DROP_OPERATION' })
        }
        deleteOperation(t) {
          let e = t.target
          if (!ce(e)) throw new Error(`${e} isn't an Operation.`)
          this.circuitDropzoneService.send({ type: 'DELETE_OPERATION', operation: e })
        }
        get wireSvg() {
          return Q([Hh.data])
        }
      },
      '_'
    )
  J(ze, 'CircuitDropzoneElement'),
    G([$], ze.prototype, 'operationName', 2),
    G([$], ze.prototype, 'inputWireQuantum', 2),
    G([$], ze.prototype, 'outputWireQuantum', 2),
    G([$], ze.prototype, 'connectTop', 2),
    G([$], ze.prototype, 'connectBottom', 2),
    G([$], ze.prototype, 'shadow', 2),
    G([$], ze.prototype, 'debug', 2)
  at(ze)
  var hl = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        ;(this.debug = !1),
          (this.paletteDropzoneMachine = ae(
            {
              id: 'palette-dropzone',
              initial: 'idle',
              states: {
                idle: {
                  on: {
                    GRAB_OPERATION: { target: 'idle', actions: ['newOperation'] },
                    DELETE_OPERATION: { target: 'idle', actions: ['deleteOperation'] },
                  },
                },
              },
            },
            {
              actions: {
                newOperation: (t, e) => {
                  if (e.type !== 'GRAB_OPERATION') return
                  let r = e.operation,
                    o = r.cloneNode(!1)
                  if (!ce(o)) throw new TypeError(`${o} isn't an operation.`)
                  pp(r) && r.disableHelp(), this.prepend(o), this.initOperation(o)
                },
                deleteOperation: (t, e) => {
                  e.type === 'DELETE_OPERATION' && this.removeChild(e.operation)
                },
              },
            }
          ))
      }
      connectedCallback() {
        ;(this.paletteDropzoneService = Jt(this.paletteDropzoneMachine)
          .onTransition((t) => {
            this.debug && console.log(`palette-dropzone: ${t.value}`)
          })
          .start()),
          this.attachShadow({ mode: 'open' }),
          this.update(),
          this.initOperation(this.operation),
          this.addEventListener('operation-grab', this.grabOperation),
          this.addEventListener('operation-delete', this.deleteOperation)
      }
      update() {
        nt(
          Q`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`,
          this.shadowRoot
        )
      }
      initOperation(t) {
        ;(t.draggable = !0), (t.snapped = !0), (t.grabbed = !1), pp(t) && t.initHelp()
      }
      get operation() {
        let t = Array.from(this.children).filter((e) => ce(e))
        if (t.length === 0) throw new Error('palette-dropzone must have an operation.')
        if (t.length === 1) return t[0]
        throw new Error('palette-dropzone cannot hold multiple operations.')
      }
      grabOperation(t) {
        let e = t.target
        if (!ce(e)) throw new TypeError(`${e} isn't an operation.`)
        this.paletteDropzoneService.send({ type: 'GRAB_OPERATION', operation: e })
      }
      deleteOperation(t) {
        let e = t.target
        if (!ce(e)) throw new TypeError(`${e} isn't an operation.`)
        this.paletteDropzoneService.send({ type: 'DELETE_OPERATION', operation: e })
      }
    },
    'wt'
  )
  J(hl, 'PaletteDropzoneElement'), G([$], hl.prototype, 'debug', 2)
  at(hl)
  var co = J((t) => t != null && t instanceof rr, 'isCircuitStepElement'),
    Rt = J(
      (t, e) =>
        Array.from(
          t.reduce((r, o, u, l) => {
            let h = e(o, u, l),
              g = r.get(h)
            return g ? g.push(o) : r.set(h, [o]), r
          }, new Map())
        ),
      'groupBy'
    ),
    rr = c(
      class extends HTMLElement {
        constructor() {
          super(...arguments)
          ;(this.active = !1),
            (this.breakpoint = !1),
            (this.shadow = !1),
            (this.debug = !1),
            (this.circuitStepMachine = ae(
              {
                id: 'circuit-step',
                initial: 'unknown',
                states: {
                  unknown: {
                    always: [
                      { target: 'shadow', cond: 'isShadow' },
                      { target: 'visible', cond: 'isVisible' },
                    ],
                  },
                  shadow: {
                    type: 'compound',
                    initial: 'unknown',
                    on: {
                      SNAP_DROPZONE: {
                        target: 'shadow',
                        actions: ['setOperationBit', 'dispatchSnapEvent'],
                      },
                      UNSNAP_DROPZONE: { target: 'shadow', actions: ['dispatchUnsnapEvent'] },
                      UNSHADOW: { target: 'visible', actions: ['unshadow'] },
                    },
                    states: {
                      unknown: {
                        always: [
                          { target: 'inactive', cond: 'isInactive' },
                          { target: 'active', cond: 'isActive' },
                        ],
                      },
                      inactive: { on: { ACTIVATE: { target: 'active' } } },
                      active: { on: { DEACTIVATE: { target: 'inactive' } } },
                    },
                  },
                  visible: {
                    type: 'parallel',
                    on: {
                      SNAP_DROPZONE: {
                        target: 'visible',
                        actions: ['setOperationBit', 'dispatchSnapEvent'],
                      },
                      UNSNAP_DROPZONE: { target: 'visible', actions: ['dispatchUnsnapEvent'] },
                      OCCUPY_DROPZONE: { target: 'visible', actions: ['setOperationBit'] },
                      DELETE_OPERATION: {
                        target: 'visible',
                        actions: ['dispatchDeleteOperationEvent'],
                      },
                    },
                    states: {
                      activatable: {
                        type: 'compound',
                        initial: 'unknown',
                        states: {
                          unknown: {
                            always: [
                              { target: 'inactive', cond: 'isInactive' },
                              { target: 'active', cond: 'isActive' },
                            ],
                          },
                          inactive: { on: { ACTIVATE: { target: 'active' } } },
                          active: { on: { DEACTIVATE: { target: 'inactive' } } },
                        },
                      },
                      breakpointable: {
                        type: 'compound',
                        initial: 'unknown',
                        states: {
                          unknown: {
                            always: [
                              { target: 'breakpointOn', cond: 'isBreakpointOn' },
                              { target: 'breakpointOff', cond: 'isBreakpointOff' },
                            ],
                          },
                          breakpointOn: { on: { UNSET_BREAKPOINT: { target: 'breakpointOff' } } },
                          breakpointOff: { on: { SET_BREAKPOINT: { target: 'breakpointOn' } } },
                        },
                      },
                    },
                  },
                },
              },
              {
                actions: {
                  setOperationBit: (t, e) => {
                    if (e.type !== 'SNAP_DROPZONE' && e.type !== 'OCCUPY_DROPZONE') return
                    let r = e.dropzone,
                      o = this.bit(r)
                    ut.notNull(r.operation), (r.operation.bit = o)
                  },
                  dispatchSnapEvent: (t, e) => {
                    e.type === 'SNAP_DROPZONE' &&
                      this.dispatchEvent(
                        new CustomEvent('circuit-step-snap', {
                          detail: { dropzone: e.dropzone },
                          bubbles: !0,
                        })
                      )
                  },
                  dispatchUnsnapEvent: (t, e) => {
                    e.type === 'UNSNAP_DROPZONE' &&
                      this.dispatchEvent(
                        new CustomEvent('circuit-step-unsnap', {
                          detail: { dropzone: e.dropzone },
                          bubbles: !0,
                        })
                      )
                  },
                  dispatchDeleteOperationEvent: (t, e) => {
                    e.type === 'DELETE_OPERATION' &&
                      this.dispatchEvent(
                        new CustomEvent('circuit-step-delete-operation', {
                          detail: { dropzone: e.dropzone },
                          bubbles: !0,
                        })
                      )
                  },
                  unshadow: () => {
                    this.shadow = !1
                  },
                },
                guards: {
                  isShadow: () => this.shadow,
                  isVisible: () => !this.shadow,
                  isActive: () => this.active,
                  isInactive: () => !this.active,
                  isBreakpointOn: () => this.breakpoint,
                  isBreakpointOff: () => !this.breakpoint,
                },
              }
            ))
        }
        get wireCount() {
          return this.dropzones.length
        }
        connectedCallback() {
          ;(this.circuitStepService = Jt(this.circuitStepMachine)
            .onTransition((t) => {
              this.debug && console.log(`circuit-step: ${Vt(t.value)}`)
            })
            .start()),
            this.addEventListener('mouseenter', this.dispatchMouseenterEvent),
            this.addEventListener('click', this.maybeDispatchClickEvent),
            this.addEventListener('circuit-dropzone-snap', this.snapDropzone),
            this.addEventListener('circuit-dropzone-unsnap', this.unsnapDropzone),
            this.addEventListener('circuit-dropzone-operation-delete', this.deleteOperation),
            this.addEventListener('circuit-dropzone-drop', this.unshadow),
            this.addEventListener('circuit-dropzone-occupy', this.occupyDropzone),
            this.attachShadow({ mode: 'open' }),
            this.update()
        }
        attributeChangedCallback(t, e, r) {
          if (
            e !== r &&
            (t === 'data-active' &&
              (r !== null
                ? this.circuitStepService.send({ type: 'ACTIVATE' })
                : this.circuitStepService.send({ type: 'DEACTIVATE' })),
            t === 'data-breakpoint' &&
              (r !== null
                ? this.circuitStepService.send({ type: 'SET_BREAKPOINT' })
                : this.circuitStepService.send({ type: 'UNSET_BREAKPOINT' })),
            t === 'data-shadow')
          )
            for (let o of this.dropzones) r !== null ? (o.shadow = !0) : (o.shadow = !1)
        }
        update() {
          nt(Q`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent()
        }
        updateOperationAttributes(t) {
          for (let o of this.dropzones) (o.connectTop = !1), (o.connectBottom = !1)
          let e = this.controlGateDropzones,
            r = this.controllableDropzones(t)
          for (let o of r) za(o.operation) && (o.operation.controls = [])
          if (
            (this.updateSwapConnections(t), this.updatePhasePhaseConnections(t), e.length !== 0)
          ) {
            if (e.length === 1 && r.length === 0) {
              e[0].operation.disable()
              return
            }
            r.length === 0
              ? this.updateControlControlConnections(t)
              : this.updateControlledUConnections(t),
              this.updateFreeDropzoneConnections(t)
          }
        }
        updateSwapConnections(t) {
          let e = t == null ? void 0 : t.disableSwap,
            r = this.swapGateDropzones
          if (r.length !== 2 || e) for (let o of r) o.operation.disable()
          else {
            for (let u of r)
              u.operation.enable(),
                (u.connectTop = r.some((l) => this.bit(l) < this.bit(u))),
                (u.connectBottom = r.some((l) => this.bit(l) > this.bit(u)))
            let o = r.map((u) => this.bit(u))
            for (let u of this.freeDropzones) {
              let l = Math.min(...o),
                h = Math.max(...o)
              l < this.bit(u) && this.bit(u) < h && ((u.connectTop = !0), (u.connectBottom = !0))
            }
          }
        }
        updatePhasePhaseConnections(t) {
          if (t == null ? void 0 : t.disablePhasePhase) return
          let e = this.phaseGateDropzones
          for (let r of e) {
            let o = r.operation
            if (o.angle === '' || (t !== void 0 && t.maxPhasePhaseTargetGates === 1)) continue
            let u = e
              .filter((l) => {
                if (!fl(l.operation)) throw new Error(`${l.operation} isn't a phase-gate element.`)
                return o.angle === l.operation.angle
              })
              .map((l) => this.bit(l))
            t !== void 0 &&
              t.maxPhasePhaseTargetGates > 1 &&
              (u = u.slice(0, t.maxPhasePhaseTargetGates)),
              !!u.includes(this.bit(r)) &&
                ((r.connectTop = u.some((l) => l < this.bit(r))),
                (r.connectBottom = u.some((l) => l > this.bit(r))))
          }
          for (let r of this.freeDropzones) {
            let o = this.phaseGateDropzones
                .filter((h) => h.connectTop || h.connectBottom)
                .map((h) => this.bit(h)),
              u = Math.min(...o),
              l = Math.max(...o)
            u < this.bit(r) && this.bit(r) < l && ((r.connectTop = !0), (r.connectBottom = !0))
          }
        }
        updateControlControlConnections(t) {
          let e = this.controlGateDropzones,
            r = e.map((u) => this.bit(u)),
            o = 0
          t !== void 0 &&
            (t.maxControlControlTargetGates === 1
              ? (r = [])
              : t.maxControlControlTargetGates > 1 &&
                (r = r.slice(0, t.maxControlControlTargetGates)))
          for (let u of e) {
            o += 1
            let l = u.operation
            ;(t == null ? void 0 : t.disableControlControl) ||
            (t !== void 0 &&
              (t.maxControlControlTargetGates === 1 ||
                (t.maxControlControlTargetGates > 0 && o > t.maxControlControlTargetGates)))
              ? l.disable()
              : (l.enable(),
                (u.connectTop = r.some((h) => this.bit(u) > h)),
                (u.connectBottom = r.some((h) => this.bit(u) < h)))
          }
        }
        updateControlledUConnections(t) {
          let e = this.controllableDropzones(t),
            r = this.controlGateDropzones,
            o = [...new Set(e.map((x) => x.operationName))],
            u = this.numControlGateDropzones(t, o),
            l = r.map((x) => this.bit(x)),
            h = u === null ? l : l.slice(0, u),
            g = e.map((x) => this.bit(x)),
            y = h.concat(g)
          for (let [x, w] of Object.entries(r)) {
            let _ = w.operation
            ;(w.connectBottom = y.some((P) => this.bit(w) < P)),
              (w.connectTop = y.some((P) => this.bit(w) > P)),
              u === null || (u !== null && parseInt(x) < u)
                ? _.enable()
                : ((w.connectTop = Math.max(...y) > this.bit(w)), _.disable())
          }
          for (let x of e) {
            if (!za(x.operation)) throw new Error(`${x.operation} isn't controllable.`)
            ;(x.operation.controls = this.controlBits(x, l, t)),
              (x.connectTop = y.some((w) => w < this.bit(x))),
              (x.connectBottom = y.some((w) => w > this.bit(x)))
          }
        }
        updateFreeDropzoneConnections(t) {
          let e = this.controllableDropzones(t),
            r = this.controlGateDropzones
              .filter((g) => vp(g.operation) && !g.operation.disabled)
              .map((g) => this.bit(g)),
            o = e.map((g) => this.bit(g)),
            u = r.concat(o),
            l = Math.min(...u),
            h = Math.max(...u)
          for (let g of this.freeDropzones)
            l < this.bit(g) && this.bit(g) < h && ((g.connectTop = !0), (g.connectBottom = !0))
        }
        controlBits(t, e, r) {
          let o = e
          return (
            r &&
              (r.maxChControlGates > 0 && t.operationName === 'h-gate'
                ? (o = e.slice(0, r.maxChControlGates))
                : r.maxCnotControlGates > 0 && t.operationName === 'x-gate'
                ? (o = e.slice(0, r.maxCnotControlGates))
                : r.maxCyControlGates > 0 && t.operationName === 'y-gate'
                ? (o = e.slice(0, r.maxCyControlGates))
                : r.maxCzControlGates > 0 && t.operationName === 'z-gate'
                ? (o = e.slice(0, r.maxCzControlGates))
                : r.maxCphaseControlGates > 0 && t.operationName === 'phase-gate'
                ? (o = e.slice(0, r.maxCphaseControlGates))
                : r.maxCrnotControlGates > 0 && t.operationName === 'rnot-gate'
                ? (o = e.slice(0, r.maxCrnotControlGates))
                : r.maxCrxControlGates > 0 && t.operationName === 'rx-gate'
                ? (o = e.slice(0, r.maxCrxControlGates))
                : r.maxCryControlGates > 0 && t.operationName === 'ry-gate'
                ? (o = e.slice(0, r.maxCryControlGates))
                : r.maxCrzControlGates > 0 && t.operationName === 'rz-gate'
                ? (o = e.slice(0, r.maxCrzControlGates))
                : r.maxCswapControlGates > 0 &&
                  t.operationName === 'swap-gate' &&
                  (o = e.slice(0, r.maxCswapControlGates))),
            o
          )
        }
        bit(t) {
          let e = this.dropzones.indexOf(t)
          return ut.need(e !== -1, 'circuit-dropzone not found.'), e
        }
        get isEmpty() {
          return this.dropzones.every((t) => !t.occupied)
        }
        dropzoneAt(t) {
          let e = this.dropzones[t]
          return ut.notNull(e), e
        }
        get dropzones() {
          return Array.from(this.querySelectorAll('circuit-dropzone'))
        }
        get freeDropzones() {
          return this.dropzones.filter((t) => !t.occupied)
        }
        get lastDropzone() {
          return this.dropzones[this.wireCount - 1]
        }
        appendDropzone() {
          let t = new ze()
          return (t.shadow = this.shadow), this.append(t), t
        }
        appendOperation(t) {
          let e = new ze()
          this.append(e), e.put(t)
        }
        get swapGateDropzones() {
          return this.dropzones
            .filter((t) => t.occupied)
            .filter((t) => t.operationName === 'swap-gate')
        }
        get phaseGateDropzones() {
          return this.dropzones
            .filter((t) => t.occupied)
            .filter((t) => t.operationName === 'phase-gate')
        }
        get controlGateDropzones() {
          return this.dropzones.filter((t) => t.occupied && vp(t.operation))
        }
        numControlGateDropzones(t, e) {
          if (t === void 0) return null
          let r = 0
          return (
            e.includes('h-gate') &&
              !t.disableCh &&
              t.maxChControlGates > r &&
              (r = t.maxChControlGates),
            e.includes('x-gate') &&
              !t.disableCnot &&
              t.maxCnotControlGates > r &&
              (r = t.maxCnotControlGates),
            e.includes('y-gate') &&
              !t.disableCy &&
              t.maxCyControlGates > r &&
              (r = t.maxCyControlGates),
            e.includes('z-gate') &&
              !t.disableCz &&
              t.maxCzControlGates > r &&
              (r = t.maxCzControlGates),
            e.includes('phase-gate') &&
              !t.disableCphase &&
              t.maxCphaseControlGates > r &&
              (r = t.maxCphaseControlGates),
            e.includes('rnot-gate') &&
              !t.disableCrnot &&
              t.maxCrnotControlGates > r &&
              (r = t.maxCrnotControlGates),
            e.includes('rx-gate') &&
              !t.disableCrx &&
              t.maxCrxControlGates > r &&
              (r = t.maxCrxControlGates),
            e.includes('ry-gate') &&
              !t.disableCry &&
              t.maxCryControlGates > r &&
              (r = t.maxCryControlGates),
            e.includes('rz-gate') &&
              !t.disableCrz &&
              t.maxCrzControlGates > r &&
              (r = t.maxCrzControlGates),
            e.includes('swap-gate') &&
              !t.disableCswap &&
              t.maxCswapControlGates > r &&
              (r = t.maxCswapControlGates),
            r === 0 ? null : r
          )
        }
        controllableDropzones(t) {
          let e = 0,
            r = 0,
            o = 0,
            u = 0,
            l = 0,
            h = 0,
            g = 0,
            y = 0,
            x = 0
          return this.dropzones
            .filter((w) => w.occupied)
            .filter((w) => za(w.operation))
            .filter((w) =>
              t === void 0
                ? !0
                : Jh(w.operation)
                ? ((e += 1), t.maxChTargetGates !== 0 && e > t.maxChTargetGates ? !1 : !t.disableCh)
                : Qh(w.operation)
                ? ((r += 1),
                  t.maxCnotTargetGates !== 0 && r > t.maxCnotTargetGates ? !1 : !t.disableCnot)
                : Kh(w.operation)
                ? ((o += 1), t.maxCyTargetGates !== 0 && o > t.maxCyTargetGates ? !1 : !t.disableCy)
                : tv(w.operation)
                ? ((u += 1), t.maxCzTargetGates !== 0 && u > t.maxCzTargetGates ? !1 : !t.disableCz)
                : fl(w.operation)
                ? ((l += 1),
                  t.maxCphaseTargetGates !== 0 && l > t.maxCphaseTargetGates
                    ? !1
                    : !t.disableCphase)
                : ev(w.operation)
                ? ((h += 1),
                  t.maxCrnotTargetGates !== 0 && h > t.maxCrnotTargetGates ? !1 : !t.disableCrnot)
                : dp(w.operation)
                ? ((g += 1),
                  t.maxCrxTargetGates !== 0 && g > t.maxCrxTargetGates ? !1 : !t.disableCrx)
                : fp(w.operation)
                ? ((y += 1),
                  t.maxCryTargetGates !== 0 && y > t.maxCryTargetGates ? !1 : !t.disableCry)
                : hp(w.operation)
                ? ((x += 1),
                  t.maxCrzTargetGates !== 0 && x > t.maxCrzTargetGates ? !1 : !t.disableCrz)
                : rv(w.operation)
                ? !t.disableCswap
                : !0
            )
        }
        dispatchUpdateEvent() {
          this.dispatchEvent(new Event('circuit-step-update', { bubbles: !0 }))
        }
        deleteOperation(t) {
          let e = t.target
          this.circuitStepService.send({ type: 'DELETE_OPERATION', dropzone: e })
        }
        dispatchMouseenterEvent() {
          this.dispatchEvent(new Event('circuit-step-mouseenter', { bubbles: !0 }))
        }
        maybeDispatchClickEvent(t) {
          ce(t.target) || this.dispatchEvent(new Event('circuit-step-click', { bubbles: !0 }))
        }
        snapDropzone(t) {
          let e = t.target
          this.circuitStepService.send({ type: 'SNAP_DROPZONE', dropzone: e })
        }
        unsnapDropzone(t) {
          let e = t.target
          this.circuitStepService.send({ type: 'UNSNAP_DROPZONE', dropzone: e })
        }
        unshadow() {
          this.circuitStepService.send({ type: 'UNSHADOW' })
        }
        occupyDropzone(t) {
          let e = t.target
          this.circuitStepService.send({ type: 'OCCUPY_DROPZONE', dropzone: e })
        }
        serialize() {
          let t = []
          for (let [e, r] of Rt(this.operations, (o) => o.constructor))
            switch (e) {
              case _r: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.if))
                  for (let [h, g] of Rt(l, (y) => y.controls.toString())) {
                    let y = g[0],
                      x = y.operationType,
                      w = g.map((P) => P.bit),
                      _ = { type: x, targets: w }
                    u !== '' && (_.if = u), h !== '' && (_.controls = y.controls), t.push(_)
                  }
                break
              }
              case Rr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.if))
                  for (let [h, g] of Rt(l, (y) => y.controls.toString())) {
                    let y = g[0],
                      x = y.operationType,
                      w = g.map((P) => P.bit),
                      _ = { type: x, targets: w }
                    u !== '' && (_.if = u), h !== '' && (_.controls = y.controls), t.push(_)
                  }
                break
              }
              case zr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.if))
                  for (let [h, g] of Rt(l, (y) => y.controls.toString())) {
                    let y = g[0],
                      x = y.operationType,
                      w = g.map((P) => P.bit),
                      _ = { type: x, targets: w }
                    u !== '' && (_.if = u), h !== '' && (_.controls = y.controls), t.push(_)
                  }
                break
              }
              case qr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.if))
                  for (let [h, g] of Rt(l, (y) => y.controls.toString())) {
                    let y = g[0],
                      x = y.operationType,
                      w = g.map((P) => P.bit),
                      _ = { type: x, targets: w }
                    u !== '' && (_.if = u), h !== '' && (_.controls = y.controls), t.push(_)
                  }
                break
              }
              case Ar: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.angle))
                  for (let [h, g] of Rt(l, (y) => y.if))
                    for (let [y, x] of Rt(g, (w) => w.controls.toString())) {
                      let w = x[0],
                        _ = w.operationType,
                        P = x.map((N) => N.bit),
                        k = { type: _, targets: P }
                      h !== '' && (k.if = h),
                        u !== '' && (k.angle = u),
                        y !== '' && (k.controls = w.controls),
                        t.push(k)
                    }
                break
              }
              case Mr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.if))
                  for (let [h, g] of Rt(l, (y) => y.controls.toString())) {
                    let y = g[0],
                      x = y.operationType,
                      w = g.map((P) => P.bit),
                      _ = { type: x, targets: w }
                    u !== '' && (_.if = u), h !== '' && (_.controls = y.controls), t.push(_)
                  }
                break
              }
              case Ir: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.angle))
                  for (let [h, g] of Rt(l, (y) => y.if))
                    for (let [y, x] of Rt(g, (w) => w.controls.toString())) {
                      let w = x[0],
                        _ = w.operationType,
                        P = x.map((N) => N.bit),
                        k = { type: _, targets: P }
                      h !== '' && (k.if = h),
                        u !== '' && (k.angle = u),
                        y !== '' && (k.controls = w.controls),
                        t.push(k)
                    }
                break
              }
              case Dr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.angle))
                  for (let [h, g] of Rt(l, (y) => y.if))
                    for (let [y, x] of Rt(g, (w) => w.controls.toString())) {
                      let w = x[0],
                        _ = w.operationType,
                        P = x.map((N) => N.bit),
                        k = { type: _, targets: P }
                      h !== '' && (k.if = h),
                        u !== '' && (k.angle = u),
                        y !== '' && (k.controls = w.controls),
                        t.push(k)
                    }
                break
              }
              case kr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.angle))
                  for (let [h, g] of Rt(l, (y) => y.if))
                    for (let [y, x] of Rt(g, (w) => w.controls.toString())) {
                      let w = x[0],
                        _ = w.operationType,
                        P = x.map((N) => N.bit),
                        k = { type: _, targets: P }
                      h !== '' && (k.if = h),
                        u !== '' && (k.angle = u),
                        y !== '' && (k.controls = w.controls),
                        t.push(k)
                    }
                break
              }
              case tn: {
                let o = r.filter((g) => !g.disabled)
                if (o.length !== 2) break
                let u = o[0].operationType,
                  l = o[0].controls,
                  h = { type: u, targets: [o[0].bit, o[1].bit] }
                l !== void 0 && l.length > 0 && (h.controls = l), t.push(h)
                break
              }
              case Cr: {
                let o = r.filter((l) => !l.disabled)
                if (o.length < 2 || this.operations.some((l) => za(l) && l.controls.length > 0))
                  break
                let u = o.map((l) => l.bit)
                t.push({ type: o[0].operationType, targets: u })
                break
              }
              case be: {
                let o = r,
                  u = r.map((l) => l.bit)
                t.push({ type: o[0].operationType, targets: u })
                break
              }
              case Nr: {
                let o = r
                for (let [, u] of Rt(o, (l) => l.value)) {
                  let l = u.map((h) => h.bit)
                  t.push({ type: u[0].operationType, targets: l })
                }
                break
              }
              case Pr: {
                let o = r
                for (let [u, l] of Rt(o, (h) => h.flag)) {
                  let h = l.map((y) => y.bit),
                    g = { type: l[0].operationType, targets: h }
                  u !== '' && (g.flag = u), t.push(g)
                }
                break
              }
              default:
                throw new En('Unrecognized operation', { klass: e })
            }
          return t
        }
        get operations() {
          return this.dropzones
            .filter((t) => t.occupied)
            .map((t) => t.operation)
            .filter((t) => t !== null)
        }
        toJson() {
          let t = this.dropzones.map((e) => e.toJson())
          for (; t.length > 0 && t[t.length - 1] === '1'; ) t.pop()
          return t.length === 0 ? '[1]' : `[${t.join(',')}]`
        }
      },
      'F'
    )
  J(rr, 'CircuitStepElement'),
    G([$], rr.prototype, 'active', 2),
    G([$], rr.prototype, 'breakpoint', 2),
    G([$], rr.prototype, 'shadow', 2),
    G([$], rr.prototype, 'debug', 2)
  at(rr)
  var pt = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        ;(this.minStepCount = 1),
          (this.minWireCount = 1),
          (this.maxWireCount = 10),
          (this.editing = !1),
          (this.updateUrl = !1),
          (this.json = ''),
          (this.circuitTitle = ''),
          (this.debug = !1),
          (this.chDisabled = !1),
          (this.chMaxControlGates = 0),
          (this.chMaxTargetGates = 0),
          (this.cnotDisabled = !1),
          (this.cnotMaxControlGates = 0),
          (this.cnotMaxTargetGates = 0),
          (this.cyDisabled = !1),
          (this.cyMaxControlGates = 0),
          (this.cyMaxTargetGates = 0),
          (this.czDisabled = !1),
          (this.czMaxControlGates = 0),
          (this.czMaxTargetGates = 0),
          (this.cphaseDisabled = !1),
          (this.cphaseMaxControlGates = 0),
          (this.cphaseMaxTargetGates = 0),
          (this.crnotDisabled = !1),
          (this.crnotMaxControlGates = 0),
          (this.crnotMaxTargetGates = 0),
          (this.crxDisabled = !1),
          (this.crxMaxControlGates = 0),
          (this.crxMaxTargetGates = 0),
          (this.cryDisabled = !1),
          (this.cryMaxControlGates = 0),
          (this.cryMaxTargetGates = 0),
          (this.crzDisabled = !1),
          (this.crzMaxControlGates = 0),
          (this.crzMaxTargetGates = 0),
          (this.cswapDisabled = !1),
          (this.cswapMaxControlGates = 0),
          (this.swapDisabled = !1),
          (this.controlControlDisabled = !1),
          (this.controlControlMaxTargetGates = 0),
          (this.phasePhaseDisabled = !1),
          (this.phasePhaseMaxTargetGates = 0),
          (this.quantumCircuitMachine = ae({
            id: 'quantum-circuit',
            initial: 'idle',
            states: {
              idle: { on: { EDIT: { target: 'editing' } } },
              editing: { on: { EDIT_DONE: { target: 'idle' } } },
            },
          })),
          (this.cx = this.cnot)
      }
      get wireCount() {
        return this.stepAt(0).wireCount
      }
      get activeStepIndex() {
        let t = this.activeStep
        return t === null ? null : this.fetchStepIndex(t)
      }
      get activeStep() {
        return this.steps.find((t) => t.active) || null
      }
      fetchStepIndex(t) {
        let e = this.steps.indexOf(t)
        return ut.need(e !== -1, `circuit-step index of ${t} not found.`), e
      }
      get steps() {
        return Array.from(this.querySelectorAll('circuit-step'))
      }
      get emptySteps() {
        return this.steps.filter((t) => t.isEmpty)
      }
      get nonEmptySteps() {
        return this.steps.filter((t) => !t.isEmpty)
      }
      get largestStep() {
        let t = null,
          e = 0
        for (let r of this.steps) r.wireCount > 0 && r.wireCount > e && ((t = r), (e = r.wireCount))
        return t
      }
      appendMinimumSteps() {
        let t = this.minStepCount - this.steps.length
        for (let e = 0; e < t; e++) this.append(new rr())
      }
      stepAt(t) {
        let e = this.steps[t]
        return ut.notNull(e), e
      }
      addShadowStepAfter(t) {
        let e = new rr()
        e.shadow = !0
        for (let r = 0; r < this.wireCount; r++) e.appendDropzone()
        if (t === -1) this.prepend(e)
        else {
          let r = this.steps[t]
          ut.notNull(r.parentElement), r.parentElement.insertBefore(e, r.nextSibling)
        }
        return e
      }
      activateStep(t) {
        this.deactivateAllSteps(), (t.active = !0)
      }
      deactivateAllSteps() {
        for (let t of this.steps) t.active = !1
      }
      setBreakpoint(t) {
        for (let e of this.steps) e.breakpoint = !1
        t.breakpoint = !0
      }
      get breakpoint() {
        return this.steps.find((t) => t.breakpoint) || null
      }
      get dropzones() {
        return Array.from(this.querySelectorAll('circuit-dropzone'))
      }
      get operations() {
        return this.dropzones.map((t) => t.operation).filter((t) => t !== null)
      }
      get isVertical() {
        return window.getComputedStyle(this).flexDirection === 'column'
      }
      connectedCallback() {
        ;(this.quantumCircuitService = Jt(this.quantumCircuitMachine)
          .onTransition((t) => {
            this.debug && console.log(`quantum-circuit: ${t.value}`)
          })
          .start()),
          this.attachShadow({ mode: 'open' }),
          this.update(),
          this.loadFromJson(),
          this.appendMinimumSteps(),
          this.appendMinimumWires(),
          this.updateAllWires(),
          this.addEventListener('mouseleave', this.dispatchMouseleaveEvent),
          this.addEventListener('circuit-step-update', this.updateStep),
          this.addEventListener('circuit-step-snap', this.updateStep),
          this.addEventListener('circuit-step-snap', this.updateChangedWire),
          this.addEventListener('circuit-step-unsnap', this.updateStep),
          this.addEventListener('circuit-step-unsnap', this.updateChangedWire),
          this.addEventListener('circuit-step-delete-operation', this.updateStep),
          this.addEventListener('circuit-step-delete-operation', this.updateChangedWire)
      }
      attributeChangedCallback(t, e, r) {
        e !== r &&
          t === 'data-editing' &&
          (r !== null
            ? this.quantumCircuitService.send({ type: 'EDIT' })
            : this.quantumCircuitService.send({ type: 'EDIT_DONE' }))
      }
      update() {
        nt(Q`<slot></slot>`, this.shadowRoot)
      }
      updateStep(t) {
        let e = t.target
        this.updateStepOperationAttributes(e)
      }
      updateStepOperationAttributes(t) {
        t.updateOperationAttributes({
          disableCh: this.chDisabled,
          maxChControlGates: this.chMaxControlGates,
          maxChTargetGates: this.chMaxTargetGates,
          disableCnot: this.cnotDisabled,
          maxCnotControlGates: this.cnotMaxControlGates,
          maxCnotTargetGates: this.cnotMaxTargetGates,
          disableCy: this.cyDisabled,
          maxCyControlGates: this.cyMaxControlGates,
          maxCyTargetGates: this.cyMaxTargetGates,
          disableCz: this.czDisabled,
          maxCzControlGates: this.czMaxControlGates,
          maxCzTargetGates: this.czMaxTargetGates,
          disableCphase: this.cphaseDisabled,
          maxCphaseControlGates: this.cphaseMaxControlGates,
          maxCphaseTargetGates: this.cphaseMaxTargetGates,
          disableCrnot: this.crnotDisabled,
          maxCrnotControlGates: this.crnotMaxControlGates,
          maxCrnotTargetGates: this.crnotMaxTargetGates,
          disableCrx: this.crxDisabled,
          maxCrxControlGates: this.crxMaxControlGates,
          maxCrxTargetGates: this.crxMaxTargetGates,
          disableCry: this.cryDisabled,
          maxCryControlGates: this.cryMaxControlGates,
          maxCryTargetGates: this.cryMaxTargetGates,
          disableCrz: this.crzDisabled,
          maxCrzControlGates: this.crzMaxControlGates,
          maxCrzTargetGates: this.crzMaxTargetGates,
          disableCswap: this.cswapDisabled,
          maxCswapControlGates: this.cswapMaxControlGates,
          disableSwap: this.swapDisabled,
          disableControlControl: this.controlControlDisabled,
          maxControlControlTargetGates: this.controlControlMaxTargetGates,
          disablePhasePhase: this.phasePhaseDisabled,
          maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates,
        })
      }
      dispatchMouseleaveEvent() {
        this.dispatchEvent(new Event('quantum-circuit-mouseleave', { bubbles: !0 }))
      }
      resize() {
        this.removeEmptySteps(),
          this.appendMinimumSteps(),
          this.appendMinimumWires(),
          this.removeLastEmptyWires(),
          this.updateAllWires()
      }
      h(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new _r()
            return r && o.disable(), o
          }, ...e),
          this.resize(),
          this
        )
      }
      x(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new Rr()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      y(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new zr()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      z(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new qr()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      phase(...t) {
        let e = '',
          r,
          o
        if (typeof t[0] == 'number') r = t
        else if (typeof t[0] == 'string') (e = t[0]), (r = t.slice(1))
        else {
          let l = t[0]
          ;(r = l.targets), (o = l.disabled)
        }
        let u = this.applyOperationToTargets(() => {
          let l = new Ar()
          return (l.angle = e), o && l.disable(), l
        }, ...r)
        return r.length > 1 && this.updateStepOperationAttributes(u), this
      }
      rnot(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new Mr()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      rx(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new Ir()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      ry(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new Dr()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      rz(...t) {
        let e, r
        if (typeof t[0] == 'number') e = t
        else {
          let o = t[0]
          ;(e = o.targets), (r = o.disabled)
        }
        return (
          this.applyOperationToTargets(() => {
            let o = new kr()
            return r && o.disable(), o
          }, ...e),
          this
        )
      }
      swap(...t) {
        let e = this.applyOperationToTargets(() => new tn(), ...t)
        return this.updateStepOperationAttributes(e), this
      }
      control(...t) {
        let e = this.applyOperationToTargets(() => new Cr(), ...t)
        return this.updateStepOperationAttributes(e), this
      }
      bloch(...t) {
        return this.applyOperationToTargets(() => new be(), ...t), this
      }
      write(t, ...e) {
        return (
          this.applyOperationToTargets(() => {
            let r = new Nr()
            return (r.value = t), r
          }, ...e),
          this.resize(),
          this
        )
      }
      measure(...t) {
        return this.applyOperationToTargets(() => new Pr(), ...t), this.resize(), this
      }
      applyOperationToTargets(t, ...e) {
        let r = Math.max(...e) + 1,
          o = this.appendStepWithDropzones(r)
        for (let u of e) {
          let l = t()
          o.dropzoneAt(u).put(l)
        }
        return o
      }
      ch(t, e) {
        return this.controlledU(_r, t, e), this
      }
      cnot(t, e) {
        return this.controlledU(Rr, t, e), this.resize(), this
      }
      cy(t, e) {
        return this.controlledU(zr, t, e), this
      }
      cz(t, e) {
        return this.controlledU(qr, t, e), this
      }
      cphase(t, e) {
        return this.controlledU(Ar, t, e), this
      }
      crnot(t, e) {
        return this.controlledU(Mr, t, e), this
      }
      crx(t, e) {
        return this.controlledU(Ir, t, e), this
      }
      cry(t, e) {
        return this.controlledU(Dr, t, e), this
      }
      crz(t, e) {
        return this.controlledU(kr, t, e), this
      }
      cswap(t, e) {
        return this.controlledU(tn, t, e), this
      }
      cc(...t) {
        let e = Math.max(...t) + 1,
          r = this.appendStepWithDropzones(e)
        for (let o of t) r.dropzoneAt(o).put(new Cr())
        return this.appendMinimumWires(), this.updateStepOperationAttributes(r), this
      }
      controlledU(t, e, r) {
        let o = [].concat(e),
          u = [].concat(r),
          l = o.concat(u),
          h = Math.max(...l) + 1,
          g = this.appendStepWithDropzones(h)
        for (let y of o) g.dropzoneAt(y).put(new Cr())
        for (let y of u) g.dropzoneAt(y).put(new t())
        this.appendMinimumWires(), this.updateStepOperationAttributes(g)
      }
      appendStep() {
        let t = new rr()
        return this.append(t), t
      }
      appendStepWithDropzones(t) {
        let e = new rr()
        this.append(e)
        for (let r = 0; r < t; r++) {
          let o = new ze()
          e.append(o)
        }
        return e
      }
      updateAllWires() {
        let t = this.steps[0]
        if (t === void 0) return
        let e = t.dropzones.length
        for (let r = 0; r < e; r++) this.updateWire(r)
      }
      activateOperation(t) {
        for (let e of this.operations) e.active = !1
        t.active = !0
      }
      appendWire() {
        for (let t of this.steps) t.appendDropzone()
      }
      removeLastEmptyWires() {
        for (
          ;
          this.steps.every((t) => t.wireCount > this.minWireCount && !t.lastDropzone.occupied);

        )
          for (let t of this.steps) t.lastDropzone.remove()
      }
      removeEmptySteps() {
        for (let t of this.emptySteps) t.remove()
      }
      loadFromJson() {
        let t
        if ((this.updateUrl ? (t = this.urlJson) : (t = this.json), t === '' || t === 'new')) {
          this.updateUrl && this.resize()
          return
        }
        let e = JSON.parse(t)
        this.circuitTitle = (e.title || '').trim()
        for (let r of e.cols) {
          let o = this.appendStep()
          for (let u of r) {
            switch (!0) {
              case /^\|0>$/.test(u): {
                let l = new Nr()
                ;(l.value = '0'), o.appendOperation(l)
                break
              }
              case /^\|1>$/.test(u): {
                let l = new Nr()
                ;(l.value = '1'), o.appendOperation(l)
                break
              }
              case /^H$/.test(u): {
                let l = new _r()
                o.appendOperation(l)
                break
              }
              case /^H<(.+)$/.test(u): {
                let l = new _r()
                ;(l.if = RegExp.$1.trim()), o.appendOperation(l)
                break
              }
              case /^X$/.test(u): {
                let l = new Rr()
                o.appendOperation(l)
                break
              }
              case /^X<(.+)$/.test(u): {
                let l = new Rr()
                ;(l.if = RegExp.$1.trim()), o.appendOperation(l)
                break
              }
              case /^Y$/.test(u): {
                let l = new zr()
                o.appendOperation(l)
                break
              }
              case /^Y<(.+)$/.test(u): {
                let l = new zr()
                ;(l.if = RegExp.$1.trim()), o.appendOperation(l)
                break
              }
              case /^Z$/.test(u): {
                let l = new qr()
                o.appendOperation(l)
                break
              }
              case /^Z<(.+)$/.test(u): {
                let l = new qr()
                ;(l.if = RegExp.$1.trim()), o.appendOperation(l)
                break
              }
              case /^P$/.test(u): {
                let l = new Ar()
                o.appendOperation(l)
                break
              }
              case /^P\((.+)\)$/.test(u): {
                let l = new Ar()
                ;(l.angle = RegExp.$1.replace('_', '/')), o.appendOperation(l)
                break
              }
              case /^X\^½$/.test(u): {
                let l = new Mr()
                o.appendOperation(l)
                break
              }
              case /^X\^½<(.+)$/.test(u): {
                let l = new Mr()
                ;(l.if = RegExp.$1.trim()), o.appendOperation(l)
                break
              }
              case /^Rx$/.test(u): {
                let l = new Ir()
                o.appendOperation(l)
                break
              }
              case /^Rx\((.+)\)$/.test(u): {
                let l = new Ir()
                ;(l.angle = RegExp.$1.replace('_', '/')), o.appendOperation(l)
                break
              }
              case /^Ry$/.test(u): {
                let l = new Dr()
                o.appendOperation(l)
                break
              }
              case /^Ry\((.+)\)$/.test(u): {
                let l = new Dr()
                ;(l.angle = RegExp.$1.replace('_', '/')), o.appendOperation(l)
                break
              }
              case /^Rz$/.test(u): {
                let l = new kr()
                o.appendOperation(l)
                break
              }
              case /^Rz\((.+)\)$/.test(u): {
                let l = new kr()
                ;(l.angle = RegExp.$1.replace('_', '/')), o.appendOperation(l)
                break
              }
              case /^Swap$/.test(u): {
                let l = new tn()
                o.appendOperation(l)
                break
              }
              case /^•$/.test(u): {
                let l = new Cr()
                o.appendOperation(l)
                break
              }
              case /^Bloch$/.test(u): {
                let l = new be()
                o.appendOperation(l)
                break
              }
              case /^Measure$/.test(u): {
                let l = new Pr()
                o.appendOperation(l)
                break
              }
              case /^Measure>(.+)$/.test(u): {
                let l = new Pr()
                ;(l.flag = RegExp.$1.trim()), o.appendOperation(l)
                break
              }
              case /^[[{](.+)$/.test(u):
                break
              case /^[\]}]$/.test(u):
                break
              default: {
                if (u !== 1) throw new Error(`Unknown instruction: ${u}`)
                o.appendDropzone()
              }
            }
            o.updateOperationAttributes()
          }
        }
        this.resize()
      }
      appendMinimumWires() {
        let t = this.largestStep,
          e = t && t.wireCount > this.minWireCount ? t.wireCount : this.minWireCount
        for (let r of this.steps) {
          let o = e - r.wireCount
          for (let u = 0; u < o; u++) r.appendDropzone()
        }
      }
      updateWire(t) {
        let e = !1
        for (let r of this.steps) {
          let o = r.dropzoneAt(t)
          ;(o.inputWireQuantum = e),
            o.operationName === 'write-gate'
              ? ((o.inputWireQuantum = e), (o.outputWireQuantum = !0), (e = !0))
              : o.operationName === 'measurement-gate'
              ? ((o.inputWireQuantum = e), (o.outputWireQuantum = !1), (e = !1))
              : ((o.inputWireQuantum = e), (o.outputWireQuantum = e))
        }
      }
      updateChangedWire(t) {
        let e = t.target
        if (!co(e)) throw new Error(`${e} isn't a circuit-step.`)
        let r = t.detail.dropzone
        if (!bp(r)) throw new Error(`${r} isn't a circuit-dropzone.`)
        let o = e.dropzones.indexOf(r)
        ut.need(o !== -1, 'circuit-dropzone not found.'), this.updateWire(o)
      }
      set draggable(t) {
        for (let e of this.operations) e.draggable = t
      }
      snapTargetAt(t, e) {
        return this.isVertical ? this.snapTargets[e][t] : this.snapTargets[t][e]
      }
      setSnapTargets(t) {
        let e = this.dropzones.filter((u) => !u.occupied),
          r = []
        this.snapTargets = {}
        let o = t.dropzone
        bp(o) && e.push(o)
        for (let [u, l] of Object.entries(this.dropzones)) {
          let h = l.snapTarget,
            g = this.isVertical ? h.y : h.x,
            y = this.isVertical ? h.x : h.y,
            x = parseInt(u) % this.wireCount,
            w = g - t.snapRange * 0.75,
            _ = g + t.snapRange * 0.75
          parseInt(u) < this.wireCount &&
            (this.isVertical ? r.push({ x: y, y: w }) : r.push({ x: w, y }),
            this.snapTargets[w] === void 0 && (this.snapTargets[w] = {}),
            this.snapTargets[w][y] === void 0 &&
              (this.snapTargets[w][y] = { dropzone: null, stepIndex: -1, wireIndex: x })),
            this.isVertical ? r.push({ x: y, y: _ }) : r.push({ x: _, y }),
            this.snapTargets[_] === void 0 && (this.snapTargets[_] = {}),
            this.snapTargets[_][y] === void 0 &&
              (this.snapTargets[_][y] = {
                dropzone: null,
                stepIndex: Math.floor(parseInt(u) / this.wireCount),
                wireIndex: x,
              }),
            (!l.occupied || l === o) && r.push(h),
            this.snapTargets[g] === void 0 && (this.snapTargets[g] = {}),
            this.snapTargets[g][y] === void 0 &&
              (this.snapTargets[g][y] = { dropzone: l, stepIndex: null, wireIndex: x })
        }
        t.snapTargets = r
      }
      updateSnapTargets(t) {
        let e = t[0]
        ut.notNull(e)
        let r = this.isVertical ? e.snapTarget.y : e.snapTarget.x
        for (let [o, u] of Object.entries(this.snapTargets))
          if (!(parseInt(o) <= r))
            for (let l in u) {
              let h = u[l]
              h.stepIndex !== null && (h.stepIndex += 1)
            }
        for (let [o, u] of Object.entries(t)) {
          let l = u.snapTarget,
            h = this.isVertical ? l.y : l.x,
            g = this.isVertical ? l.x : l.y
          ut.notNull(this.snapTargets[h]),
            (this.snapTargets[h][g] = { dropzone: u, stepIndex: null, wireIndex: parseInt(o) })
        }
      }
      serialize() {
        return this.steps.map((t) => t.serialize())
      }
      get urlJson() {
        let t = window.location.href.toString().split(window.location.host)[1].slice(1)
        return decodeURIComponent(t)
      }
      clear() {
        history.pushState('', '', encodeURIComponent('{"cols":[]}')), location.reload()
      }
      toJson() {
        let t = []
        for (let e of this.nonEmptySteps) t.push(e.toJson())
        return this.circuitTitle !== ''
          ? `{"cols":[${t.join(',')}],"title":"${this.circuitTitle}"}`
          : `{"cols":[${t.join(',')}]}`
      }
    },
    'm'
  )
  J(pt, 'QuantumCircuitElement'),
    G([$], pt.prototype, 'minStepCount', 2),
    G([$], pt.prototype, 'minWireCount', 2),
    G([$], pt.prototype, 'maxWireCount', 2),
    G([$], pt.prototype, 'editing', 2),
    G([$], pt.prototype, 'updateUrl', 2),
    G([$], pt.prototype, 'json', 2),
    G([$], pt.prototype, 'circuitTitle', 2),
    G([$], pt.prototype, 'debug', 2),
    G([$], pt.prototype, 'chDisabled', 2),
    G([$], pt.prototype, 'chMaxControlGates', 2),
    G([$], pt.prototype, 'chMaxTargetGates', 2),
    G([$], pt.prototype, 'cnotDisabled', 2),
    G([$], pt.prototype, 'cnotMaxControlGates', 2),
    G([$], pt.prototype, 'cnotMaxTargetGates', 2),
    G([$], pt.prototype, 'cyDisabled', 2),
    G([$], pt.prototype, 'cyMaxControlGates', 2),
    G([$], pt.prototype, 'cyMaxTargetGates', 2),
    G([$], pt.prototype, 'czDisabled', 2),
    G([$], pt.prototype, 'czMaxControlGates', 2),
    G([$], pt.prototype, 'czMaxTargetGates', 2),
    G([$], pt.prototype, 'cphaseDisabled', 2),
    G([$], pt.prototype, 'cphaseMaxControlGates', 2),
    G([$], pt.prototype, 'cphaseMaxTargetGates', 2),
    G([$], pt.prototype, 'crnotDisabled', 2),
    G([$], pt.prototype, 'crnotMaxControlGates', 2),
    G([$], pt.prototype, 'crnotMaxTargetGates', 2),
    G([$], pt.prototype, 'crxDisabled', 2),
    G([$], pt.prototype, 'crxMaxControlGates', 2),
    G([$], pt.prototype, 'crxMaxTargetGates', 2),
    G([$], pt.prototype, 'cryDisabled', 2),
    G([$], pt.prototype, 'cryMaxControlGates', 2),
    G([$], pt.prototype, 'cryMaxTargetGates', 2),
    G([$], pt.prototype, 'crzDisabled', 2),
    G([$], pt.prototype, 'crzMaxControlGates', 2),
    G([$], pt.prototype, 'crzMaxTargetGates', 2),
    G([$], pt.prototype, 'cswapDisabled', 2),
    G([$], pt.prototype, 'cswapMaxControlGates', 2),
    G([$], pt.prototype, 'swapDisabled', 2),
    G([$], pt.prototype, 'controlControlDisabled', 2),
    G([$], pt.prototype, 'controlControlMaxTargetGates', 2),
    G([$], pt.prototype, 'phasePhaseDisabled', 2),
    G([$], pt.prototype, 'phasePhaseMaxTargetGates', 2)
  at(pt)
  var po = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        ;(this.debug = !1),
          (this.circuitEditorMachine = ae(
            {
              id: 'circuit-editor',
              initial: 'inspectable',
              states: {
                inspectable: {
                  type: 'compound',
                  initial: 'unknown',
                  on: {
                    DROP_OPERATION: {
                      target: 'inspectable',
                      actions: ['initOperationMenu', 'resizeCircuit'],
                    },
                    ACTIVATE_OPERATION: {
                      target: 'inspectable',
                      actions: ['maybeUpdateOperationInspector'],
                    },
                    DELETE_OPERATION: { target: 'inspectable', actions: ['resizeCircuit'] },
                  },
                  states: {
                    unknown: {
                      always: [
                        { target: 'idle', cond: 'isIdle' },
                        { target: 'editing', cond: 'isEditing' },
                      ],
                    },
                    idle: {
                      entry: 'enableDragging',
                      on: {
                        GRAB_OPERATION: {
                          target: 'editing',
                          actions: [
                            'startCircuitEdit',
                            'setOperationActive',
                            'addDocumentCursorGrabbingStyle',
                            'maybeAppendCircuitWire',
                            'setSnapTargets',
                          ],
                        },
                        CLICK_STEP: { target: 'idle', actions: ['setBreakpoint'] },
                        MOUSE_ENTER_STEP: { target: 'idle', actions: ['activateStep'] },
                        MOUSE_LEAVE_CIRCUIT: { target: 'idle', actions: ['deactivateAllSteps'] },
                        SHOW_OPERATION_MENU: { target: 'idle', actions: ['showOperationMenu'] },
                        SHOW_OPERATION_INSPECTOR_IF: {
                          target: 'idle',
                          actions: ['showOperationInspectorIf'],
                        },
                        SHOW_OPERATION_INSPECTOR_ANGLE: {
                          target: 'idle',
                          actions: ['showOperationInspectorAngle'],
                        },
                        SHOW_OPERATION_INSPECTOR_FLAG: {
                          target: 'idle',
                          actions: ['showOperationInspectorFlag'],
                        },
                        SET_OPERATION_IF: { target: 'idle', actions: ['setOperationIf'] },
                        SET_OPERATION_ANGLE: { target: 'idle', actions: ['setOperationAngle'] },
                        SET_OPERATION_FLAG: { target: 'idle', actions: ['setOperationFlag'] },
                      },
                    },
                    editing: {
                      on: {
                        OPERATION_IN_SNAP_RANGE: {
                          target: 'editing',
                          actions: ['snapOperationIntoDropzone'],
                        },
                        SNAP_STEP: { target: 'editing', actions: ['activateStep'] },
                        UNSNAP_STEP: { target: 'editing', actions: ['deactivateStep'] },
                        UNGRAB_OPERATION: {
                          target: 'idle',
                          actions: [
                            'maybeRemoveLastEmptyWires',
                            'removeDocumentCursorGrabbingStyle',
                            'endCircuitEdit',
                          ],
                        },
                        END_DRAGGING_OPERATION: {
                          target: 'idle',
                          actions: [
                            'maybeRemoveLastEmptyWires',
                            'removeDocumentCursorGrabbingStyle',
                            'endCircuitEdit',
                            'maybeDisableAllInspectorPanes',
                          ],
                        },
                      },
                    },
                  },
                },
              },
            },
            {
              guards: {
                isIdle: () => !this.circuit.editing,
                isEditing: () => this.circuit.editing,
              },
              actions: {
                enableDragging: () => {
                  this.circuit.draggable = !0
                },
                startCircuitEdit: () => {
                  this.circuit.editing = !0
                },
                endCircuitEdit: () => {
                  this.circuit.editing = !1
                },
                setOperationActive: (t, e) => {
                  e.type === 'GRAB_OPERATION' && this.circuit.activateOperation(e.operation)
                },
                snapOperationIntoDropzone: (t, e) => {
                  if (e.type !== 'OPERATION_IN_SNAP_RANGE') return
                  let r = e.operation,
                    o = this.circuit.snapTargetAt(e.x, e.y)
                  if (((r.snapped = !0), o.dropzone === null)) {
                    let u = o.stepIndex
                    ut.notNull(u)
                    let l = this.circuit.addShadowStepAfter(u),
                      h = l.dropzones[o.wireIndex]
                    ut.notNull(h),
                      h.append(r),
                      (h.operationName = r.tagName.toLocaleLowerCase()),
                      this.circuit.updateSnapTargets(l.dropzones)
                  } else o.dropzone.append(r)
                },
                addDocumentCursorGrabbingStyle: () => {
                  document.documentElement.setAttribute('data-grabbing', '')
                },
                removeDocumentCursorGrabbingStyle: () => {
                  document.documentElement.removeAttribute('data-grabbing')
                },
                maybeAppendCircuitWire: () => {
                  this.circuit.wireCount < this.circuit.maxWireCount && this.circuit.appendWire()
                },
                maybeRemoveLastEmptyWires: () => {
                  this.circuit.removeLastEmptyWires()
                },
                resizeCircuit: () => {
                  this.circuit.resize()
                },
                setSnapTargets: (t, e) => {
                  e.type === 'GRAB_OPERATION' && this.circuit.setSnapTargets(e.operation)
                },
                setBreakpoint: (t, e) => {
                  e.type === 'CLICK_STEP' && this.circuit.setBreakpoint(e.step)
                },
                activateStep: (t, e) => {
                  ;(e.type !== 'MOUSE_ENTER_STEP' && e.type !== 'SNAP_STEP') ||
                    this.circuit.activateStep(e.step)
                },
                deactivateStep: (t, e) => {
                  e.type === 'UNSNAP_STEP' && (e.step.active = !1)
                },
                deactivateAllSteps: () => {
                  this.circuit.deactivateAllSteps()
                },
                maybeDisableAllInspectorPanes: (t, e) => {
                  e.type !== 'END_DRAGGING_OPERATION' ||
                    e.operation.snapped ||
                    !this.inspectorButton.isInspectorShown ||
                    this.inspectorButton.inspector.disableAllPanes()
                },
                initOperationMenu: (t, e) => {
                  if (e.type !== 'DROP_OPERATION') return
                  let r = e.operation
                  Nh(r) && r.initMenu()
                },
                showOperationMenu: (t, e) => {
                  e.type === 'SHOW_OPERATION_MENU' &&
                    (this.inspectorButton.isInspectorShown || e.operation.showMenu())
                },
                showOperationInspectorIf: (t, e) => {
                  e.type === 'SHOW_OPERATION_INSPECTOR_IF' &&
                    this.inspectorButton.showIfInspector(e.operation)
                },
                showOperationInspectorAngle: (t, e) => {
                  e.type === 'SHOW_OPERATION_INSPECTOR_ANGLE' &&
                    this.inspectorButton.showAngleInspector(e.operation)
                },
                showOperationInspectorFlag: (t, e) => {
                  e.type === 'SHOW_OPERATION_INSPECTOR_FLAG' &&
                    this.inspectorButton.showFlagInspector(e.operation)
                },
                setOperationIf: (t, e) => {
                  e.type === 'SET_OPERATION_IF' && (e.operation.if = e.if)
                },
                setOperationAngle: (t, e) => {
                  e.type === 'SET_OPERATION_ANGLE' &&
                    ((e.operation.angle = e.angle), (e.operation.reducedAngle = e.reducedAngle))
                },
                setOperationFlag: (t, e) => {
                  e.type === 'SET_OPERATION_FLAG' && (e.operation.flag = e.flag)
                },
                maybeUpdateOperationInspector: (t, e) => {
                  if (e.type !== 'ACTIVATE_OPERATION') return
                  let r = e.operation
                  this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(r)
                },
              },
            }
          ))
      }
      connectedCallback() {
        ;(this.circuitEditorService = Jt(this.circuitEditorMachine)
          .onTransition((t) => {
            this.debug && console.log(`circuit-editor: ${Vt(t.value)}`)
          })
          .start()),
          this.attachShadow({ mode: 'open' }),
          this.update(),
          document.addEventListener('click', this.maybeDeactivateOperation.bind(this)),
          this.addEventListener('operation-active', this.activateOperation),
          this.addEventListener('operation-show-menu', this.showOperationMenu),
          this.addEventListener('operation-menu-if', this.showOperationInspectorIf),
          this.addEventListener('operation-menu-angle', this.showOperationInspectorAngle),
          this.addEventListener('operation-menu-flag', this.showOperationInspectorFlag),
          this.addEventListener('operation-inspector-if-change', this.setOperationIf),
          this.addEventListener('operation-inspector-angle-change', this.setOperationAngle),
          this.addEventListener('operation-inspector-flag-change', this.setOperationFlag),
          this.addEventListener('operation-grab', this.grabOperation),
          this.addEventListener('operation-ungrab', this.ungrabOperation),
          this.addEventListener('operation-end-dragging', this.endDraggingOperation),
          this.addEventListener('operation-drop', this.dropOperation),
          this.addEventListener('operation-delete', this.deleteOperation),
          this.addEventListener('circuit-step-click', this.clickStep),
          this.addEventListener('circuit-step-snap', this.snapStep),
          this.addEventListener('circuit-step-unsnap', this.unsnapStep),
          this.addEventListener('operation-in-snap-range', this.operationInSnapRange),
          this.addEventListener('circuit-step-mouseenter', this.mouseEnterStep),
          this.addEventListener('quantum-circuit-mouseleave', this.mouseLeaveCircuit)
        for (let t of this.circuit.operations) t.initMenu()
      }
      update() {
        nt(Q`<slot></slot>`, this.shadowRoot)
      }
      get activeOperation() {
        return this.circuit.querySelector('circuit-dropzone > [data-active]')
      }
      maybeDeactivateOperation(t) {
        let e = t.target
        !ce(e) &&
          !this.inspectorButton.popup.popper.contains(e) &&
          !this.inspectorButton.popup.reference.contains(e) &&
          this.activeOperation !== null &&
          (this.activeOperation.active = !1)
      }
      activateOperation(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        this.circuitEditorService.send({ type: 'ACTIVATE_OPERATION', operation: e })
      }
      showOperationMenu(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        this.circuitEditorService.send({ type: 'SHOW_OPERATION_MENU', operation: e })
      }
      showOperationInspectorIf(t) {
        let e = t.target
        if (!so(e)) throw new Error(`${e} isn't an Ifable Operation.`)
        this.circuitEditorService.send({ type: 'SHOW_OPERATION_INSPECTOR_IF', operation: e })
      }
      showOperationInspectorAngle(t) {
        let e = t.target
        if (!ka(e)) throw new Error(`${e} isn't an Angleable Operation.`)
        this.circuitEditorService.send({ type: 'SHOW_OPERATION_INSPECTOR_ANGLE', operation: e })
      }
      showOperationInspectorFlag(t) {
        let e = t.target
        if (!Ra(e)) throw new Error(`${e} isn't a Flaggable Operation.`)
        this.circuitEditorService.send({ type: 'SHOW_OPERATION_INSPECTOR_FLAG', operation: e })
      }
      setOperationIf(t) {
        let e = t.target,
          r = this.activeOperation
        if (!so(r)) throw new Error('[data-if] not found.')
        this.circuitEditorService.send({ type: 'SET_OPERATION_IF', operation: r, if: e.if })
      }
      setOperationAngle(t) {
        let e = t.target,
          r = this.activeOperation
        if ((ut.notNull(r), !ka(r))) throw new Error(`${r.outerHTML}: [data-angle] not found.`)
        this.circuitEditorService.send({
          type: 'SET_OPERATION_ANGLE',
          operation: r,
          angle: e.angle,
          reducedAngle: e.reduceAngleFraction ? e.reducedAngle : '',
        })
      }
      setOperationFlag(t) {
        let e = t.target,
          r = this.activeOperation
        if (!Ra(r)) throw new Error('[data-flag] not found.')
        this.circuitEditorService.send({ type: 'SET_OPERATION_FLAG', operation: r, flag: e.flag })
      }
      grabOperation(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        this.circuitEditorService.send({ type: 'GRAB_OPERATION', operation: e })
      }
      ungrabOperation(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        this.circuitEditorService.send({ type: 'UNGRAB_OPERATION', operation: e })
      }
      endDraggingOperation(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        this.circuitEditorService.send({ type: 'END_DRAGGING_OPERATION', operation: e })
      }
      dropOperation(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        this.circuitEditorService.send({ type: 'DROP_OPERATION', operation: e })
      }
      deleteOperation() {
        this.circuitEditorService.send({ type: 'DELETE_OPERATION' })
      }
      clickStep(t) {
        let e = t.target
        if (!co(e)) throw new Error(`${e} isn't a circuit-step.`)
        this.circuitEditorService.send({ type: 'CLICK_STEP', step: e })
      }
      snapStep(t) {
        let e = t.target
        if (!co(e)) throw new Error(`${e} isn't a circuit-step.`)
        this.circuitEditorService.send({ type: 'SNAP_STEP', step: e })
      }
      unsnapStep(t) {
        let e = t.target
        if (!co(e)) throw new Error(`${e} isn't a circuit-step.`)
        this.circuitEditorService.send({ type: 'UNSNAP_STEP', step: e })
      }
      operationInSnapRange(t) {
        let e = t.target
        if (!ce(e)) throw new Error(`${e} must be an Operation.`)
        let r = t.detail.snapTargetInfo,
          o = r.x,
          u = r.y
        this.circuitEditorService.send({
          type: 'OPERATION_IN_SNAP_RANGE',
          operation: e,
          x: o,
          y: u,
        })
      }
      mouseEnterStep(t) {
        if (this.circuit.editing) return
        let e = t.target
        if (!co(e)) throw new Error(`${e} isn't a circuit-step.`)
        this.circuitEditorService.send({ type: 'MOUSE_ENTER_STEP', step: e })
      }
      mouseLeaveCircuit() {
        this.circuitEditorService.send({ type: 'MOUSE_LEAVE_CIRCUIT' })
      }
    },
    'lt'
  )
  J(po, 'CircuitEditorElement'),
    G([$], po.prototype, 'debug', 2),
    G([Nt], po.prototype, 'circuit', 2),
    G([Nt], po.prototype, 'inspectorButton', 2)
  at(po)
  var li = c(
    class extends HTMLElement {
      constructor() {
        super(...arguments)
        this.updateUrl = !1
      }
      connectedCallback() {
        ;(this.worker = new Worker('/serviceworker.js')),
          (this.visibleQubitCircleKets = []),
          this.worker.addEventListener('message', this.handleServiceWorkerMessage.bind(this)),
          this.addEventListener('operation-inspector-if-change', this.run),
          this.addEventListener('operation-inspector-angle-change', this.run),
          this.addEventListener('operation-inspector-flag-change', this.run),
          this.addEventListener('circuit-step-mouseenter', this.runUnlessEditing),
          this.addEventListener('circuit-step-snap', this.run),
          this.addEventListener('circuit-step-unsnap', this.run),
          this.addEventListener('circuit-step-update', this.run),
          this.addEventListener(
            'circle-notation-visibility-change',
            this.updateVisibleQubitCircleKets
          ),
          this.addEventListener('circle-notation-visibility-change', this.run),
          this.addEventListener('run-circuit-button-click', this.run),
          this.addEventListener('circuit-step-snap', this.maybeUpdateUrl),
          this.addEventListener('circuit-step-unsnap', this.maybeUpdateUrl),
          this.attachShadow({ mode: 'open' }),
          this.update(),
          this.maybeUpdateUrl(),
          this.circuit.setBreakpoint(this.circuit.stepAt(0)),
          this.run()
      }
      update() {
        nt(Q`<slot></slot>`, this.shadowRoot)
      }
      clearCircuit() {
        this.circuit.clear()
      }
      handleServiceWorkerMessage(t) {
        var e
        let r = t.data,
          o = this.activeStepIndex
        switch (r.type) {
          case 'step': {
            let u = this.circuit.stepAt(r.step)
            for (let l in r.blochVectors) {
              let h = parseInt(l),
                g = u.dropzoneAt(h).operation
              if (nv(g)) {
                let y = r.blochVectors[h]
                ;(g.x = y[0]), (g.y = y[1]), (g.z = y[2])
              }
            }
            if (r.measuredBits) {
              let l = r.measuredBits
              for (let h in l) {
                let g = parseInt(h),
                  y = u.dropzoneAt(g).operation
                iv(y) && (y.value = l[g].toString())
              }
            }
            for (let l of u.dropzones) {
              let h = l.operation
              !so(h) || (h.if !== '' && (h.disabled = !r.flags[h.if]))
            }
            if (o === r.step) {
              console.log(r.amplitudes)
              let l = {}
              for (let h in r.amplitudes) {
                let g = r.amplitudes[h]
                l[h] = new Xr(g[0], g[1])
              }
              console.log(Vt(l)), (e = this.circleNotation) == null || e.setAmplitudes(l)
            }
            break
          }
          case 'finish': {
            for (let u of this.runCircuitButtons) u.running = !1
            break
          }
          default:
            throw new En('Unknown service worker message', { data: r })
        }
      }
      run() {
        if (this.circleNotation === null) return
        let t = this.activeStepIndex,
          e = this.circuit.serialize()
        ut.need(e.length > 0, 'non-zero step length')
        let r = Math.max(...e.map((u) => Math.max(...u.map((l) => Math.max(...l.targets))))),
          o = r >= 0 ? r + 1 : 1
        ;(this.circleNotation.qubitCount = o),
          this.worker.postMessage({
            qubitCount: o,
            stepIndex: t,
            steps: e,
            targets: this.visibleQubitCircleKets,
          })
      }
      runUnlessEditing() {
        this.circuit.editing || this.run()
      }
      get activeStepIndex() {
        let t = this.circuit.activeStep,
          e = this.circuit.breakpoint,
          r = t || e
        return r === null
          ? (this.circuit.setBreakpoint(this.circuit.stepAt(0)), 0)
          : this.circuit.fetchStepIndex(r)
      }
      updateVisibleQubitCircleKets(t) {
        let e = t.detail
        ut.notNull(e), (this.visibleQubitCircleKets = e)
      }
      maybeUpdateUrl() {
        if (!this.updateUrl) return
        ut.notNull(this.circuit)
        let t = this.circuit.toJson()
        history.pushState('', '', encodeURIComponent(t))
      }
    },
    'rt'
  )
  J(li, 'QuantumSimulatorElement'),
    G([$], li.prototype, 'updateUrl', 2),
    G([Nt], li.prototype, 'circuit', 2),
    G([Nt], li.prototype, 'circleNotation', 2),
    G([yr], li.prototype, 'runCircuitButtons', 2)
  at(li)
  navigator.serviceWorker &&
    navigator.serviceWorker.register('/serviceworker.js', { scope: './' }).catch(function (t) {
      console.log('[Companion]', 'Service worker registration failed: ' + t)
    })
})()
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
