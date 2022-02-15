;(() => {
  var zn = Object.create
  var ne = Object.defineProperty
  var Pn = Object.getOwnPropertyDescriptor
  var Dn = Object.getOwnPropertyNames
  var Cn = Object.getPrototypeOf,
    jn = Object.prototype.hasOwnProperty
  var $n = (t) => ne(t, '__esModule', { value: !0 }),
    i = (t, e) => ne(t, 'name', { value: e, configurable: !0 })
  var J = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports)
  var kn = (t, e, r, n) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let o of Dn(e))
          !jn.call(t, o) &&
            (r || o !== 'default') &&
            ne(t, o, { get: () => e[o], enumerable: !(n = Pn(e, o)) || n.enumerable })
      return t
    },
    Tt = (t, e) =>
      kn(
        $n(
          ne(
            t != null ? zn(Cn(t)) : {},
            'default',
            !e && t && t.__esModule
              ? { get: () => t.default, enumerable: !0 }
              : { value: t, enumerable: !0 }
          )
        ),
        t
      )
  var Re = J((C) => {
    'use strict'
    Object.defineProperty(C, '__esModule', { value: !0 })
    C.Field = C.MonoidProduct = C.MonoidSum = C.SemigroupProduct = C.SemigroupSum = C.MagmaSub = C.Show = C.Bounded = C.Ord = C.Eq = C.isNumber = void 0
    var Zn = i(function (t) {
      return typeof t == 'number'
    }, 'isNumber')
    C.isNumber = Zn
    C.Eq = {
      equals: function (t, e) {
        return t === e
      },
    }
    C.Ord = {
      equals: C.Eq.equals,
      compare: function (t, e) {
        return t < e ? -1 : t > e ? 1 : 0
      },
    }
    C.Bounded = { equals: C.Eq.equals, compare: C.Ord.compare, top: 1 / 0, bottom: -1 / 0 }
    C.Show = {
      show: function (t) {
        return JSON.stringify(t)
      },
    }
    C.MagmaSub = {
      concat: function (t, e) {
        return t - e
      },
    }
    C.SemigroupSum = {
      concat: function (t, e) {
        return t + e
      },
    }
    C.SemigroupProduct = {
      concat: function (t, e) {
        return t * e
      },
    }
    C.MonoidSum = { concat: C.SemigroupSum.concat, empty: 0 }
    C.MonoidProduct = { concat: C.SemigroupProduct.concat, empty: 1 }
    C.Field = {
      add: C.SemigroupSum.concat,
      zero: 0,
      mul: C.SemigroupProduct.concat,
      one: 1,
      sub: C.MagmaSub.concat,
      degree: function (t) {
        return 1
      },
      div: function (t, e) {
        return t / e
      },
      mod: function (t, e) {
        return t % e
      },
    }
  })
  var pt = J((M) => {
    'use strict'
    Object.defineProperty(M, '__esModule', { value: !0 })
    M.getEndomorphismMonoid = M.not = M.SK = M.hole = M.pipe = M.untupled = M.tupled = M.absurd = M.decrement = M.increment = M.tuple = M.flow = M.flip = M.constVoid = M.constUndefined = M.constNull = M.constFalse = M.constTrue = M.constant = M.unsafeCoerce = M.identity = M.apply = M.getRing = M.getSemiring = M.getMonoid = M.getSemigroup = M.getBooleanAlgebra = void 0
    var Kn = i(function (t) {
      return function () {
        return {
          meet: function (e, r) {
            return function (n) {
              return t.meet(e(n), r(n))
            }
          },
          join: function (e, r) {
            return function (n) {
              return t.join(e(n), r(n))
            }
          },
          zero: function () {
            return t.zero
          },
          one: function () {
            return t.one
          },
          implies: function (e, r) {
            return function (n) {
              return t.implies(e(n), r(n))
            }
          },
          not: function (e) {
            return function (r) {
              return t.not(e(r))
            }
          },
        }
      }
    }, 'getBooleanAlgebra')
    M.getBooleanAlgebra = Kn
    var Hn = i(function (t) {
      return function () {
        return {
          concat: function (e, r) {
            return function (n) {
              return t.concat(e(n), r(n))
            }
          },
        }
      }
    }, 'getSemigroup')
    M.getSemigroup = Hn
    var Vn = i(function (t) {
      var e = M.getSemigroup(t)
      return function () {
        return {
          concat: e().concat,
          empty: function () {
            return t.empty
          },
        }
      }
    }, 'getMonoid')
    M.getMonoid = Vn
    var Gn = i(function (t) {
      return {
        add: function (e, r) {
          return function (n) {
            return t.add(e(n), r(n))
          }
        },
        zero: function () {
          return t.zero
        },
        mul: function (e, r) {
          return function (n) {
            return t.mul(e(n), r(n))
          }
        },
        one: function () {
          return t.one
        },
      }
    }, 'getSemiring')
    M.getSemiring = Gn
    var Xn = i(function (t) {
      var e = M.getSemiring(t)
      return {
        add: e.add,
        mul: e.mul,
        one: e.one,
        zero: e.zero,
        sub: function (r, n) {
          return function (o) {
            return t.sub(r(o), n(o))
          }
        },
      }
    }, 'getRing')
    M.getRing = Xn
    var Qn = i(function (t) {
      return function (e) {
        return e(t)
      }
    }, 'apply')
    M.apply = Qn
    function Ae(t) {
      return t
    }
    i(Ae, 'identity')
    M.identity = Ae
    M.unsafeCoerce = Ae
    function zt(t) {
      return function () {
        return t
      }
    }
    i(zt, 'constant')
    M.constant = zt
    M.constTrue = zt(!0)
    M.constFalse = zt(!1)
    M.constNull = zt(null)
    M.constUndefined = zt(void 0)
    M.constVoid = M.constUndefined
    function Yn(t) {
      return function (e, r) {
        return t(r, e)
      }
    }
    i(Yn, 'flip')
    M.flip = Yn
    function qr(t, e, r, n, o, s, h, y, R) {
      switch (arguments.length) {
        case 1:
          return t
        case 2:
          return function () {
            return e(t.apply(this, arguments))
          }
        case 3:
          return function () {
            return r(e(t.apply(this, arguments)))
          }
        case 4:
          return function () {
            return n(r(e(t.apply(this, arguments))))
          }
        case 5:
          return function () {
            return o(n(r(e(t.apply(this, arguments)))))
          }
        case 6:
          return function () {
            return s(o(n(r(e(t.apply(this, arguments))))))
          }
        case 7:
          return function () {
            return h(s(o(n(r(e(t.apply(this, arguments)))))))
          }
        case 8:
          return function () {
            return y(h(s(o(n(r(e(t.apply(this, arguments))))))))
          }
        case 9:
          return function () {
            return R(y(h(s(o(n(r(e(t.apply(this, arguments)))))))))
          }
      }
    }
    i(qr, 'flow')
    M.flow = qr
    function Jn() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return t
    }
    i(Jn, 'tuple')
    M.tuple = Jn
    function ti(t) {
      return t + 1
    }
    i(ti, 'increment')
    M.increment = ti
    function ei(t) {
      return t - 1
    }
    i(ei, 'decrement')
    M.decrement = ei
    function Sr(t) {
      throw new Error('Called `absurd` function which should be uncallable')
    }
    i(Sr, 'absurd')
    M.absurd = Sr
    function ri(t) {
      return function (e) {
        return t.apply(void 0, e)
      }
    }
    i(ri, 'tupled')
    M.tupled = ri
    function ni(t) {
      return function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        return t(e)
      }
    }
    i(ni, 'untupled')
    M.untupled = ni
    function ii(t, e, r, n, o, s, h, y, R) {
      switch (arguments.length) {
        case 1:
          return t
        case 2:
          return e(t)
        case 3:
          return r(e(t))
        case 4:
          return n(r(e(t)))
        case 5:
          return o(n(r(e(t))))
        case 6:
          return s(o(n(r(e(t)))))
        case 7:
          return h(s(o(n(r(e(t))))))
        case 8:
          return y(h(s(o(n(r(e(t)))))))
        case 9:
          return R(y(h(s(o(n(r(e(t))))))))
        default:
          for (var E = arguments[0], H = 1; H < arguments.length; H++) E = arguments[H](E)
          return E
      }
    }
    i(ii, 'pipe')
    M.pipe = ii
    M.hole = Sr
    var ai = i(function (t, e) {
      return e
    }, 'SK')
    M.SK = ai
    function ui(t) {
      return function (e) {
        return !t(e)
      }
    }
    i(ui, 'not')
    M.not = ui
    var oi = i(function () {
      return {
        concat: function (t, e) {
          return qr(t, e)
        },
        empty: Ae,
      }
    }, 'getEndomorphismMonoid')
    M.getEndomorphismMonoid = oi
  })
  var Pt = J((nt) => {
    'use strict'
    Object.defineProperty(nt, '__esModule', { value: !0 })
    nt.sequenceS = nt.sequenceT = nt.getApplySemigroup = nt.apS = nt.apSecond = nt.apFirst = nt.ap = void 0
    var ci = pt()
    function fi(t, e) {
      return function (r) {
        return function (n) {
          return t.ap(
            t.map(n, function (o) {
              return function (s) {
                return e.ap(o, s)
              }
            }),
            r
          )
        }
      }
    }
    i(fi, 'ap')
    nt.ap = fi
    function si(t) {
      return function (e) {
        return function (r) {
          return t.ap(
            t.map(r, function (n) {
              return function () {
                return n
              }
            }),
            e
          )
        }
      }
    }
    i(si, 'apFirst')
    nt.apFirst = si
    function li(t) {
      return function (e) {
        return function (r) {
          return t.ap(
            t.map(r, function () {
              return function (n) {
                return n
              }
            }),
            e
          )
        }
      }
    }
    i(li, 'apSecond')
    nt.apSecond = li
    function hi(t) {
      return function (e, r) {
        return function (n) {
          return t.ap(
            t.map(n, function (o) {
              return function (s) {
                var h
                return Object.assign({}, o, ((h = {}), (h[e] = s), h))
              }
            }),
            r
          )
        }
      }
    }
    i(hi, 'apS')
    nt.apS = hi
    function pi(t) {
      return function (e) {
        return {
          concat: function (r, n) {
            return t.ap(
              t.map(r, function (o) {
                return function (s) {
                  return e.concat(o, s)
                }
              }),
              n
            )
          },
        }
      }
    }
    i(pi, 'getApplySemigroup')
    nt.getApplySemigroup = pi
    function _e(t, e, r) {
      return function (n) {
        for (var o = Array(r.length + 1), s = 0; s < r.length; s++) o[s] = r[s]
        return (o[r.length] = n), e === 0 ? t.apply(null, o) : _e(t, e - 1, o)
      }
    }
    i(_e, 'curried')
    var Ee = {
      1: function (t) {
        return [t]
      },
      2: function (t) {
        return function (e) {
          return [t, e]
        }
      },
      3: function (t) {
        return function (e) {
          return function (r) {
            return [t, e, r]
          }
        }
      },
      4: function (t) {
        return function (e) {
          return function (r) {
            return function (n) {
              return [t, e, r, n]
            }
          }
        }
      },
      5: function (t) {
        return function (e) {
          return function (r) {
            return function (n) {
              return function (o) {
                return [t, e, r, n, o]
              }
            }
          }
        }
      },
    }
    function di(t) {
      return Ee.hasOwnProperty(t) || (Ee[t] = _e(ci.tuple, t - 1, [])), Ee[t]
    }
    i(di, 'getTupleConstructor')
    function vi(t) {
      return function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        for (var n = e.length, o = di(n), s = t.map(e[0], o), h = 1; h < n; h++) s = t.ap(s, e[h])
        return s
      }
    }
    i(vi, 'sequenceT')
    nt.sequenceT = vi
    function mi(t) {
      var e = t.length
      switch (e) {
        case 1:
          return function (r) {
            var n
            return (n = {}), (n[t[0]] = r), n
          }
        case 2:
          return function (r) {
            return function (n) {
              var o
              return (o = {}), (o[t[0]] = r), (o[t[1]] = n), o
            }
          }
        case 3:
          return function (r) {
            return function (n) {
              return function (o) {
                var s
                return (s = {}), (s[t[0]] = r), (s[t[1]] = n), (s[t[2]] = o), s
              }
            }
          }
        case 4:
          return function (r) {
            return function (n) {
              return function (o) {
                return function (s) {
                  var h
                  return (h = {}), (h[t[0]] = r), (h[t[1]] = n), (h[t[2]] = o), (h[t[3]] = s), h
                }
              }
            }
          }
        case 5:
          return function (r) {
            return function (n) {
              return function (o) {
                return function (s) {
                  return function (h) {
                    var y
                    return (
                      (y = {}),
                      (y[t[0]] = r),
                      (y[t[1]] = n),
                      (y[t[2]] = o),
                      (y[t[3]] = s),
                      (y[t[4]] = h),
                      y
                    )
                  }
                }
              }
            }
          }
        default:
          return _e(
            function () {
              for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
              for (var o = {}, s = 0; s < e; s++) o[t[s]] = r[s]
              return o
            },
            e - 1,
            []
          )
      }
    }
    i(mi, 'getRecordConstructor')
    function gi(t) {
      return function (e) {
        for (
          var r = Object.keys(e), n = r.length, o = mi(r), s = t.map(e[r[0]], o), h = 1;
          h < n;
          h++
        )
          s = t.ap(s, e[r[h]])
        return s
      }
    }
    i(gi, 'sequenceS')
    nt.sequenceS = gi
  })
  var Dt = J((St) => {
    'use strict'
    Object.defineProperty(St, '__esModule', { value: !0 })
    St.bind = St.chainFirst = void 0
    function yi(t) {
      return function (e) {
        return function (r) {
          return t.chain(r, function (n) {
            return t.map(e(n), function () {
              return n
            })
          })
        }
      }
    }
    i(yi, 'chainFirst')
    St.chainFirst = yi
    function Ii(t) {
      return function (e, r) {
        return function (n) {
          return t.chain(n, function (o) {
            return t.map(r(o), function (s) {
              var h
              return Object.assign({}, o, ((h = {}), (h[e] = s), h))
            })
          })
        }
      }
    }
    i(Ii, 'bind')
    St.bind = Ii
  })
  var xt = J((B) => {
    'use strict'
    var xi =
      (B && B.__spreadArray) ||
      function (t, e) {
        for (var r = 0, n = e.length, o = t.length; r < n; r++, o++) t[o] = e[r]
        return t
      }
    Object.defineProperty(B, '__esModule', { value: !0 })
    B.fromReadonlyNonEmptyArray = B.has = B.emptyRecord = B.emptyReadonlyArray = B.tail = B.head = B.isNonEmpty = B.singleton = B.right = B.left = B.isRight = B.isLeft = B.some = B.none = B.isSome = B.isNone = void 0
    var bi = i(function (t) {
      return t._tag === 'None'
    }, 'isNone')
    B.isNone = bi
    var Mi = i(function (t) {
      return t._tag === 'Some'
    }, 'isSome')
    B.isSome = Mi
    B.none = { _tag: 'None' }
    var wi = i(function (t) {
      return { _tag: 'Some', value: t }
    }, 'some')
    B.some = wi
    var Wi = i(function (t) {
      return t._tag === 'Left'
    }, 'isLeft')
    B.isLeft = Wi
    var Ri = i(function (t) {
      return t._tag === 'Right'
    }, 'isRight')
    B.isRight = Ri
    var Ai = i(function (t) {
      return { _tag: 'Left', left: t }
    }, 'left')
    B.left = Ai
    var Ei = i(function (t) {
      return { _tag: 'Right', right: t }
    }, 'right')
    B.right = Ei
    var _i = i(function (t) {
      return [t]
    }, 'singleton')
    B.singleton = _i
    var qi = i(function (t) {
      return t.length > 0
    }, 'isNonEmpty')
    B.isNonEmpty = qi
    var Si = i(function (t) {
      return t[0]
    }, 'head')
    B.head = Si
    var Oi = i(function (t) {
      return t.slice(1)
    }, 'tail')
    B.tail = Oi
    B.emptyReadonlyArray = []
    B.emptyRecord = {}
    B.has = Object.prototype.hasOwnProperty
    var Ui = i(function (t) {
      return xi([t[0]], t.slice(1))
    }, 'fromReadonlyNonEmptyArray')
    B.fromReadonlyNonEmptyArray = Ui
  })
  var qe = J((Q) => {
    'use strict'
    var Ni =
        (Q && Q.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      Fi =
        (Q && Q.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      Bi =
        (Q && Q.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && Ni(e, t, r)
          return Fi(e, t), e
        }
    Object.defineProperty(Q, '__esModule', { value: !0 })
    Q.filterOrElse = Q.chainEitherK = Q.fromEitherK = Q.chainOptionK = Q.fromOptionK = Q.fromPredicate = Q.fromOption = void 0
    var Or = pt(),
      Wt = Bi(xt())
    function Ur(t) {
      return function (e) {
        return function (r) {
          return t.fromEither(Wt.isNone(r) ? Wt.left(e()) : Wt.right(r.value))
        }
      }
    }
    i(Ur, 'fromOption')
    Q.fromOption = Ur
    function Li(t) {
      return function (e, r) {
        return function (n) {
          return t.fromEither(e(n) ? Wt.right(n) : Wt.left(r(n)))
        }
      }
    }
    i(Li, 'fromPredicate')
    Q.fromPredicate = Li
    function Nr(t) {
      var e = Ur(t)
      return function (r) {
        var n = e(r)
        return function (o) {
          return Or.flow(o, n)
        }
      }
    }
    i(Nr, 'fromOptionK')
    Q.fromOptionK = Nr
    function Ti(t, e) {
      var r = Nr(t)
      return function (n) {
        var o = r(n)
        return function (s) {
          return function (h) {
            return e.chain(h, o(s))
          }
        }
      }
    }
    i(Ti, 'chainOptionK')
    Q.chainOptionK = Ti
    function Fr(t) {
      return function (e) {
        return Or.flow(e, t.fromEither)
      }
    }
    i(Fr, 'fromEitherK')
    Q.fromEitherK = Fr
    function zi(t, e) {
      var r = Fr(t)
      return function (n) {
        return function (o) {
          return e.chain(o, r(n))
        }
      }
    }
    i(zi, 'chainEitherK')
    Q.chainEitherK = zi
    function Pi(t, e) {
      return function (r, n) {
        return function (o) {
          return e.chain(o, function (s) {
            return t.fromEither(r(s) ? Wt.right(s) : Wt.left(n(s)))
          })
        }
      }
    }
    i(Pi, 'filterOrElse')
    Q.filterOrElse = Pi
  })
  var Ot = J((It) => {
    'use strict'
    Object.defineProperty(It, '__esModule', { value: !0 })
    It.getFunctorComposition = It.bindTo = It.flap = It.map = void 0
    var Di = pt()
    function Br(t, e) {
      return function (r) {
        return function (n) {
          return t.map(n, function (o) {
            return e.map(o, r)
          })
        }
      }
    }
    i(Br, 'map')
    It.map = Br
    function Ci(t) {
      return function (e) {
        return function (r) {
          return t.map(r, function (n) {
            return n(e)
          })
        }
      }
    }
    i(Ci, 'flap')
    It.flap = Ci
    function ji(t) {
      return function (e) {
        return function (r) {
          return t.map(r, function (n) {
            var o
            return (o = {}), (o[e] = n), o
          })
        }
      }
    }
    i(ji, 'bindTo')
    It.bindTo = ji
    function $i(t, e) {
      var r = Br(t, e)
      return {
        map: function (n, o) {
          return Di.pipe(n, r(o))
        },
      }
    }
    i($i, 'getFunctorComposition')
    It.getFunctorComposition = $i
  })
  var ie = J((S) => {
    'use strict'
    Object.defineProperty(S, '__esModule', { value: !0 })
    S.eqDate = S.eqNumber = S.eqString = S.eqBoolean = S.eq = S.strictEqual = S.getStructEq = S.getTupleEq = S.Contravariant = S.getMonoid = S.getSemigroup = S.eqStrict = S.URI = S.contramap = S.tuple = S.struct = S.fromEquals = void 0
    var ki = pt(),
      Zi = i(function (t) {
        return {
          equals: function (e, r) {
            return e === r || t(e, r)
          },
        }
      }, 'fromEquals')
    S.fromEquals = Zi
    var Ki = i(function (t) {
      return S.fromEquals(function (e, r) {
        for (var n in t) if (!t[n].equals(e[n], r[n])) return !1
        return !0
      })
    }, 'struct')
    S.struct = Ki
    var Hi = i(function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return S.fromEquals(function (r, n) {
        return t.every(function (o, s) {
          return o.equals(r[s], n[s])
        })
      })
    }, 'tuple')
    S.tuple = Hi
    var Vi = i(function (t, e) {
        return ki.pipe(t, S.contramap(e))
      }, 'contramap_'),
      Gi = i(function (t) {
        return function (e) {
          return S.fromEquals(function (r, n) {
            return e.equals(t(r), t(n))
          })
        }
      }, 'contramap')
    S.contramap = Gi
    S.URI = 'Eq'
    S.eqStrict = {
      equals: function (t, e) {
        return t === e
      },
    }
    var Xi = {
        equals: function () {
          return !0
        },
      },
      Qi = i(function () {
        return {
          concat: function (t, e) {
            return S.fromEquals(function (r, n) {
              return t.equals(r, n) && e.equals(r, n)
            })
          },
        }
      }, 'getSemigroup')
    S.getSemigroup = Qi
    var Yi = i(function () {
      return { concat: S.getSemigroup().concat, empty: Xi }
    }, 'getMonoid')
    S.getMonoid = Yi
    S.Contravariant = { URI: S.URI, contramap: Vi }
    S.getTupleEq = S.tuple
    S.getStructEq = S.struct
    S.strictEqual = S.eqStrict.equals
    S.eq = S.Contravariant
    S.eqBoolean = S.eqStrict
    S.eqString = S.eqStrict
    S.eqNumber = S.eqStrict
    S.eqDate = {
      equals: function (t, e) {
        return t.valueOf() === e.valueOf()
      },
    }
  })
  var Ct = J((x) => {
    'use strict'
    Object.defineProperty(x, '__esModule', { value: !0 })
    x.ordDate = x.ordNumber = x.ordString = x.ordBoolean = x.ord = x.getDualOrd = x.getTupleOrd = x.between = x.clamp = x.max = x.min = x.geq = x.leq = x.gt = x.lt = x.equals = x.trivial = x.Contravariant = x.getMonoid = x.getSemigroup = x.URI = x.contramap = x.reverse = x.tuple = x.fromCompare = x.equalsDefault = void 0
    var Ji = ie(),
      ae = pt(),
      ta = i(function (t) {
        return function (e, r) {
          return e === r || t(e, r) === 0
        }
      }, 'equalsDefault')
    x.equalsDefault = ta
    var ea = i(function (t) {
      return {
        equals: x.equalsDefault(t),
        compare: function (e, r) {
          return e === r ? 0 : t(e, r)
        },
      }
    }, 'fromCompare')
    x.fromCompare = ea
    var ra = i(function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return x.fromCompare(function (r, n) {
        for (var o = 0; o < t.length - 1; o++) {
          var s = t[o].compare(r[o], n[o])
          if (s !== 0) return s
        }
        return t[o].compare(r[o], n[o])
      })
    }, 'tuple')
    x.tuple = ra
    var na = i(function (t) {
      return x.fromCompare(function (e, r) {
        return t.compare(r, e)
      })
    }, 'reverse')
    x.reverse = na
    var ia = i(function (t, e) {
        return ae.pipe(t, x.contramap(e))
      }, 'contramap_'),
      aa = i(function (t) {
        return function (e) {
          return x.fromCompare(function (r, n) {
            return e.compare(t(r), t(n))
          })
        }
      }, 'contramap')
    x.contramap = aa
    x.URI = 'Ord'
    var ua = i(function () {
      return {
        concat: function (t, e) {
          return x.fromCompare(function (r, n) {
            var o = t.compare(r, n)
            return o !== 0 ? o : e.compare(r, n)
          })
        },
      }
    }, 'getSemigroup')
    x.getSemigroup = ua
    var oa = i(function () {
      return {
        concat: x.getSemigroup().concat,
        empty: x.fromCompare(function () {
          return 0
        }),
      }
    }, 'getMonoid')
    x.getMonoid = oa
    x.Contravariant = { URI: x.URI, contramap: ia }
    x.trivial = { equals: ae.constTrue, compare: ae.constant(0) }
    var ca = i(function (t) {
      return function (e) {
        return function (r) {
          return r === e || t.compare(r, e) === 0
        }
      }
    }, 'equals')
    x.equals = ca
    var fa = i(function (t) {
      return function (e, r) {
        return t.compare(e, r) === -1
      }
    }, 'lt')
    x.lt = fa
    var sa = i(function (t) {
      return function (e, r) {
        return t.compare(e, r) === 1
      }
    }, 'gt')
    x.gt = sa
    var la = i(function (t) {
      return function (e, r) {
        return t.compare(e, r) !== 1
      }
    }, 'leq')
    x.leq = la
    var ha = i(function (t) {
      return function (e, r) {
        return t.compare(e, r) !== -1
      }
    }, 'geq')
    x.geq = ha
    var pa = i(function (t) {
      return function (e, r) {
        return e === r || t.compare(e, r) < 1 ? e : r
      }
    }, 'min')
    x.min = pa
    var da = i(function (t) {
      return function (e, r) {
        return e === r || t.compare(e, r) > -1 ? e : r
      }
    }, 'max')
    x.max = da
    var va = i(function (t) {
      var e = x.min(t),
        r = x.max(t)
      return function (n, o) {
        return function (s) {
          return r(e(s, o), n)
        }
      }
    }, 'clamp')
    x.clamp = va
    var ma = i(function (t) {
      var e = x.lt(t),
        r = x.gt(t)
      return function (n, o) {
        return function (s) {
          return !(e(s, n) || r(s, o))
        }
      }
    }, 'between')
    x.between = ma
    x.getTupleOrd = x.tuple
    x.getDualOrd = x.reverse
    x.ord = x.Contravariant
    function ga(t, e) {
      return t < e ? -1 : t > e ? 1 : 0
    }
    i(ga, 'compare')
    var Se = { equals: Ji.eqStrict.equals, compare: ga }
    x.ordBoolean = Se
    x.ordString = Se
    x.ordNumber = Se
    x.ordDate = ae.pipe(
      x.ordNumber,
      x.contramap(function (t) {
        return t.valueOf()
      })
    )
  })
  var Lr = J((dt) => {
    'use strict'
    Object.defineProperty(dt, '__esModule', { value: !0 })
    dt.concatAll = dt.endo = dt.filterSecond = dt.filterFirst = dt.reverse = void 0
    var ya = i(function (t) {
      return {
        concat: function (e, r) {
          return t.concat(r, e)
        },
      }
    }, 'reverse')
    dt.reverse = ya
    var Ia = i(function (t) {
      return function (e) {
        return {
          concat: function (r, n) {
            return t(r) ? e.concat(r, n) : n
          },
        }
      }
    }, 'filterFirst')
    dt.filterFirst = Ia
    var xa = i(function (t) {
      return function (e) {
        return {
          concat: function (r, n) {
            return t(n) ? e.concat(r, n) : r
          },
        }
      }
    }, 'filterSecond')
    dt.filterSecond = xa
    var ba = i(function (t) {
      return function (e) {
        return {
          concat: function (r, n) {
            return e.concat(t(r), t(n))
          },
        }
      }
    }, 'endo')
    dt.endo = ba
    var Ma = i(function (t) {
      return function (e) {
        return function (r) {
          return r.reduce(function (n, o) {
            return t.concat(n, o)
          }, e)
        }
      }
    }, 'concatAll')
    dt.concatAll = Ma
  })
  var Dr = J((b) => {
    'use strict'
    var wa =
        (b && b.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      Wa =
        (b && b.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      Oe =
        (b && b.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && wa(e, t, r)
          return Wa(e, t), e
        }
    Object.defineProperty(b, '__esModule', { value: !0 })
    b.semigroupProduct = b.semigroupSum = b.semigroupString = b.getFunctionSemigroup = b.semigroupAny = b.semigroupAll = b.fold = b.getIntercalateSemigroup = b.getMeetSemigroup = b.getJoinSemigroup = b.getDualSemigroup = b.getStructSemigroup = b.getTupleSemigroup = b.getFirstSemigroup = b.getLastSemigroup = b.getObjectSemigroup = b.semigroupVoid = b.concatAll = b.last = b.first = b.intercalate = b.tuple = b.struct = b.reverse = b.constant = b.max = b.min = void 0
    var Tr = pt(),
      Ra = Oe(xt()),
      zr = Oe(Lr()),
      Pr = Oe(Ct()),
      Aa = i(function (t) {
        return { concat: Pr.min(t) }
      }, 'min')
    b.min = Aa
    var Ea = i(function (t) {
      return { concat: Pr.max(t) }
    }, 'max')
    b.max = Ea
    var _a = i(function (t) {
      return {
        concat: function () {
          return t
        },
      }
    }, 'constant')
    b.constant = _a
    b.reverse = zr.reverse
    var qa = i(function (t) {
      return {
        concat: function (e, r) {
          var n = {}
          for (var o in t) Ra.has.call(t, o) && (n[o] = t[o].concat(e[o], r[o]))
          return n
        },
      }
    }, 'struct')
    b.struct = qa
    var Sa = i(function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
      return {
        concat: function (r, n) {
          return t.map(function (o, s) {
            return o.concat(r[s], n[s])
          })
        },
      }
    }, 'tuple')
    b.tuple = Sa
    var Oa = i(function (t) {
      return function (e) {
        return {
          concat: function (r, n) {
            return e.concat(r, e.concat(t, n))
          },
        }
      }
    }, 'intercalate')
    b.intercalate = Oa
    var Ua = i(function () {
      return { concat: Tr.identity }
    }, 'first')
    b.first = Ua
    var Na = i(function () {
      return {
        concat: function (t, e) {
          return e
        },
      }
    }, 'last')
    b.last = Na
    b.concatAll = zr.concatAll
    b.semigroupVoid = b.constant(void 0)
    var Fa = i(function () {
      return {
        concat: function (t, e) {
          return Object.assign({}, t, e)
        },
      }
    }, 'getObjectSemigroup')
    b.getObjectSemigroup = Fa
    b.getLastSemigroup = b.last
    b.getFirstSemigroup = b.first
    b.getTupleSemigroup = b.tuple
    b.getStructSemigroup = b.struct
    b.getDualSemigroup = b.reverse
    b.getJoinSemigroup = b.max
    b.getMeetSemigroup = b.min
    b.getIntercalateSemigroup = b.intercalate
    function Ba(t) {
      var e = b.concatAll(t)
      return function (r, n) {
        return n === void 0 ? e(r) : e(r)(n)
      }
    }
    i(Ba, 'fold')
    b.fold = Ba
    b.semigroupAll = {
      concat: function (t, e) {
        return t && e
      },
    }
    b.semigroupAny = {
      concat: function (t, e) {
        return t || e
      },
    }
    b.getFunctionSemigroup = Tr.getSemigroup
    b.semigroupString = {
      concat: function (t, e) {
        return t + e
      },
    }
    b.semigroupSum = {
      concat: function (t, e) {
        return t + e
      },
    }
    b.semigroupProduct = {
      concat: function (t, e) {
        return t * e
      },
    }
  })
  var ue = J((f) => {
    'use strict'
    var La =
        (f && f.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      Ta =
        (f && f.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      Cr =
        (f && f.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && La(e, t, r)
          return Ta(e, t), e
        },
      jt =
        (f && f.__spreadArray) ||
        function (t, e) {
          for (var r = 0, n = e.length, o = t.length; r < n; r++, o++) t[o] = e[r]
          return t
        }
    Object.defineProperty(f, '__esModule', { value: !0 })
    f.reduceRight = f.foldMap = f.reduce = f.mapWithIndex = f.map = f.flatten = f.duplicate = f.extend = f.chain = f.ap = f.alt = f.altW = f.of = f.chunksOf = f.splitAt = f.chop = f.chainWithIndex = f.intersperse = f.prependAll = f.unzip = f.zip = f.zipWith = f.modifyAt = f.updateAt = f.sort = f.groupBy = f.group = f.reverse = f.concat = f.concatW = f.fromArray = f.unappend = f.unprepend = f.range = f.replicate = f.makeBy = f.fromReadonlyArray = f.rotate = f.union = f.sortBy = f.uniq = f.unsafeUpdateAt = f.unsafeInsertAt = f.append = f.appendW = f.prepend = f.prependW = f.isOutOfBound = f.isNonEmpty = f.empty = void 0
    f.uncons = f.filterWithIndex = f.filter = f.groupSort = f.updateLast = f.modifyLast = f.updateHead = f.modifyHead = f.matchRight = f.matchLeft = f.concatAll = f.max = f.min = f.init = f.last = f.tail = f.head = f.apS = f.bind = f.bindTo = f.Do = f.Comonad = f.Alt = f.TraversableWithIndex = f.Traversable = f.FoldableWithIndex = f.Foldable = f.Monad = f.chainFirst = f.Chain = f.Applicative = f.apSecond = f.apFirst = f.Apply = f.FunctorWithIndex = f.Pointed = f.flap = f.Functor = f.getUnionSemigroup = f.getEq = f.getSemigroup = f.getShow = f.URI = f.extract = f.traverseWithIndex = f.sequence = f.traverse = f.reduceRightWithIndex = f.foldMapWithIndex = f.reduceWithIndex = void 0
    f.readonlyNonEmptyArray = f.fold = f.prependToAll = f.insertAt = f.snoc = f.cons = f.unsnoc = void 0
    var Ue = Pt(),
      jr = Dt(),
      za = ie(),
      Z = pt(),
      $r = Ot(),
      it = Cr(xt()),
      Pa = Ct(),
      kr = Cr(Dr())
    f.empty = it.emptyReadonlyArray
    f.isNonEmpty = it.isNonEmpty
    var Da = i(function (t, e) {
      return t < 0 || t >= e.length
    }, 'isOutOfBound')
    f.isOutOfBound = Da
    var Ca = i(function (t) {
      return function (e) {
        return jt([t], e)
      }
    }, 'prependW')
    f.prependW = Ca
    f.prepend = f.prependW
    var ja = i(function (t) {
      return function (e) {
        return jt(jt([], e), [t])
      }
    }, 'appendW')
    f.appendW = ja
    f.append = f.appendW
    var $a = i(function (t, e, r) {
      if (f.isNonEmpty(r)) {
        var n = it.fromReadonlyNonEmptyArray(r)
        return n.splice(t, 0, e), n
      }
      return [e]
    }, 'unsafeInsertAt')
    f.unsafeInsertAt = $a
    var ka = i(function (t, e, r) {
      if (r[t] === e) return r
      var n = it.fromReadonlyNonEmptyArray(r)
      return (n[t] = e), n
    }, 'unsafeUpdateAt')
    f.unsafeUpdateAt = ka
    var Za = i(function (t) {
      return function (e) {
        if (e.length === 1) return e
        for (
          var r = [f.head(e)],
            n = f.tail(e),
            o = i(function (R) {
              r.every(function (E) {
                return !t.equals(E, R)
              }) && r.push(R)
            }, '_loop_1'),
            s = 0,
            h = n;
          s < h.length;
          s++
        ) {
          var y = h[s]
          o(y)
        }
        return r
      }
    }, 'uniq')
    f.uniq = Za
    var Ka = i(function (t) {
      if (f.isNonEmpty(t)) {
        var e = Pa.getMonoid()
        return f.sort(t.reduce(e.concat, e.empty))
      }
      return Z.identity
    }, 'sortBy')
    f.sortBy = Ka
    var Ha = i(function (t) {
      var e = f.uniq(t)
      return function (r) {
        return function (n) {
          return e(Z.pipe(n, $t(r)))
        }
      }
    }, 'union')
    f.union = Ha
    var Va = i(function (t) {
      return function (e) {
        var r = e.length,
          n = Math.round(t) % r
        if (f.isOutOfBound(Math.abs(n), e) || n === 0) return e
        if (n < 0) {
          var o = f.splitAt(-n)(e),
            s = o[0],
            h = o[1]
          return Z.pipe(h, $t(s))
        } else return f.rotate(n - r)(e)
      }
    }, 'rotate')
    f.rotate = Va
    var Ga = i(function (t) {
      return f.isNonEmpty(t) ? it.some(t) : it.none
    }, 'fromReadonlyArray')
    f.fromReadonlyArray = Ga
    var Xa = i(function (t) {
      return function (e) {
        for (var r = Math.max(0, Math.floor(e)), n = [t(0)], o = 1; o < r; o++) n.push(t(o))
        return n
      }
    }, 'makeBy')
    f.makeBy = Xa
    var Qa = i(function (t) {
      return f.makeBy(function () {
        return t
      })
    }, 'replicate')
    f.replicate = Qa
    var Ya = i(function (t, e) {
      return t <= e
        ? f.makeBy(function (r) {
            return t + r
          })(e - t + 1)
        : [t]
    }, 'range')
    f.range = Ya
    var Ja = i(function (t) {
      return [f.head(t), f.tail(t)]
    }, 'unprepend')
    f.unprepend = Ja
    var tu = i(function (t) {
      return [f.init(t), f.last(t)]
    }, 'unappend')
    f.unappend = tu
    var eu = i(function (t) {
      return f.fromReadonlyArray(t.slice())
    }, 'fromArray')
    f.fromArray = eu
    function Zr(t) {
      return function (e) {
        return e.concat(t)
      }
    }
    i(Zr, 'concatW')
    f.concatW = Zr
    function $t(t, e) {
      return e
        ? t.concat(e)
        : function (r) {
            return r.concat(t)
          }
    }
    i($t, 'concat')
    f.concat = $t
    var ru = i(function (t) {
      return t.length === 1 ? t : jt([f.last(t)], t.slice(0, -1).reverse())
    }, 'reverse')
    f.reverse = ru
    function Kr(t) {
      return function (e) {
        var r = e.length
        if (r === 0) return f.empty
        for (var n = [], o = e[0], s = [o], h = 1; h < r; h++) {
          var y = e[h]
          t.equals(y, o) ? s.push(y) : (n.push(s), (o = y), (s = [o]))
        }
        return n.push(s), n
      }
    }
    i(Kr, 'group')
    f.group = Kr
    var nu = i(function (t) {
      return function (e) {
        for (var r = {}, n = 0, o = e; n < o.length; n++) {
          var s = o[n],
            h = t(s)
          r.hasOwnProperty(h) ? r[h].push(s) : (r[h] = [s])
        }
        return r
      }
    }, 'groupBy')
    f.groupBy = nu
    var iu = i(function (t) {
      return function (e) {
        return e.length === 1 ? e : e.slice().sort(t.compare)
      }
    }, 'sort')
    f.sort = iu
    var au = i(function (t, e) {
      return f.modifyAt(t, function () {
        return e
      })
    }, 'updateAt')
    f.updateAt = au
    var uu = i(function (t, e) {
      return function (r) {
        return f.isOutOfBound(t, r) ? it.none : it.some(f.unsafeUpdateAt(t, e(r[t]), r))
      }
    }, 'modifyAt')
    f.modifyAt = uu
    var ou = i(function (t, e, r) {
      for (var n = [r(t[0], e[0])], o = Math.min(t.length, e.length), s = 1; s < o; s++)
        n[s] = r(t[s], e[s])
      return n
    }, 'zipWith')
    f.zipWith = ou
    function Hr(t, e) {
      return e === void 0
        ? function (r) {
            return Hr(r, t)
          }
        : f.zipWith(t, e, function (r, n) {
            return [r, n]
          })
    }
    i(Hr, 'zip')
    f.zip = Hr
    var cu = i(function (t) {
      for (var e = [t[0][0]], r = [t[0][1]], n = 1; n < t.length; n++)
        (e[n] = t[n][0]), (r[n] = t[n][1])
      return [e, r]
    }, 'unzip')
    f.unzip = cu
    var fu = i(function (t) {
      return function (e) {
        for (var r = [t, e[0]], n = 1; n < e.length; n++) r.push(t, e[n])
        return r
      }
    }, 'prependAll')
    f.prependAll = fu
    var su = i(function (t) {
      return function (e) {
        var r = f.tail(e)
        return f.isNonEmpty(r) ? Z.pipe(r, f.prependAll(t), f.prepend(f.head(e))) : e
      }
    }, 'intersperse')
    f.intersperse = su
    var lu = i(function (t) {
      return function (e) {
        for (var r = it.fromReadonlyNonEmptyArray(t(0, f.head(e))), n = 1; n < e.length; n++)
          r.push.apply(r, t(n, e[n]))
        return r
      }
    }, 'chainWithIndex')
    f.chainWithIndex = lu
    var hu = i(function (t) {
      return function (e) {
        for (var r = t(e), n = r[0], o = r[1], s = [n], h = o; f.isNonEmpty(h); ) {
          var y = t(h),
            R = y[0],
            E = y[1]
          s.push(R), (h = E)
        }
        return s
      }
    }, 'chop')
    f.chop = hu
    var pu = i(function (t) {
      return function (e) {
        var r = Math.max(1, t)
        return r >= e.length
          ? [e, f.empty]
          : [Z.pipe(e.slice(1, r), f.prepend(f.head(e))), e.slice(r)]
      }
    }, 'splitAt')
    f.splitAt = pu
    var du = i(function (t) {
      return f.chop(f.splitAt(t))
    }, 'chunksOf')
    f.chunksOf = du
    var gt = i(function (t, e) {
        return Z.pipe(t, f.map(e))
      }, '_map'),
      Ne = i(function (t, e) {
        return Z.pipe(t, f.mapWithIndex(e))
      }, '_mapWithIndex'),
      kt = i(function (t, e) {
        return Z.pipe(t, f.ap(e))
      }, '_ap'),
      Fe = i(function (t, e) {
        return Z.pipe(t, f.chain(e))
      }, '_chain'),
      Vr = i(function (t, e) {
        return Z.pipe(t, f.extend(e))
      }, '_extend'),
      Zt = i(function (t, e, r) {
        return Z.pipe(t, f.reduce(e, r))
      }, '_reduce'),
      Kt = i(function (t) {
        var e = f.foldMap(t)
        return function (r, n) {
          return Z.pipe(r, e(n))
        }
      }, '_foldMap'),
      Ht = i(function (t, e, r) {
        return Z.pipe(t, f.reduceRight(e, r))
      }, '_reduceRight'),
      Be = i(function (t) {
        var e = f.traverse(t)
        return function (r, n) {
          return Z.pipe(r, e(n))
        }
      }, '_traverse'),
      Gr = i(function (t, e) {
        return Z.pipe(t, f.alt(e))
      }, '_alt'),
      Le = i(function (t, e, r) {
        return Z.pipe(t, f.reduceWithIndex(e, r))
      }, '_reduceWithIndex'),
      Te = i(function (t) {
        var e = f.foldMapWithIndex(t)
        return function (r, n) {
          return Z.pipe(r, e(n))
        }
      }, '_foldMapWithIndex'),
      ze = i(function (t, e, r) {
        return Z.pipe(t, f.reduceRightWithIndex(e, r))
      }, '_reduceRightWithIndex'),
      Xr = i(function (t) {
        var e = f.traverseWithIndex(t)
        return function (r, n) {
          return Z.pipe(r, e(n))
        }
      }, '_traverseWithIndex')
    f.of = it.singleton
    var vu = i(function (t) {
      return function (e) {
        return Z.pipe(e, Zr(t()))
      }
    }, 'altW')
    f.altW = vu
    f.alt = f.altW
    var mu = i(function (t) {
      return f.chain(function (e) {
        return Z.pipe(t, f.map(e))
      })
    }, 'ap')
    f.ap = mu
    var gu = i(function (t) {
      return f.chainWithIndex(function (e, r) {
        return t(r)
      })
    }, 'chain')
    f.chain = gu
    var yu = i(function (t) {
      return function (e) {
        for (var r = f.tail(e), n = [t(e)]; f.isNonEmpty(r); ) n.push(t(r)), (r = f.tail(r))
        return n
      }
    }, 'extend')
    f.extend = yu
    f.duplicate = f.extend(Z.identity)
    f.flatten = f.chain(Z.identity)
    var Iu = i(function (t) {
      return f.mapWithIndex(function (e, r) {
        return t(r)
      })
    }, 'map')
    f.map = Iu
    var xu = i(function (t) {
      return function (e) {
        for (var r = [t(0, f.head(e))], n = 1; n < e.length; n++) r.push(t(n, e[n]))
        return r
      }
    }, 'mapWithIndex')
    f.mapWithIndex = xu
    var bu = i(function (t, e) {
      return f.reduceWithIndex(t, function (r, n, o) {
        return e(n, o)
      })
    }, 'reduce')
    f.reduce = bu
    var Mu = i(function (t) {
      return function (e) {
        return function (r) {
          return r.slice(1).reduce(function (n, o) {
            return t.concat(n, e(o))
          }, e(r[0]))
        }
      }
    }, 'foldMap')
    f.foldMap = Mu
    var wu = i(function (t, e) {
      return f.reduceRightWithIndex(t, function (r, n, o) {
        return e(n, o)
      })
    }, 'reduceRight')
    f.reduceRight = wu
    var Wu = i(function (t, e) {
      return function (r) {
        return r.reduce(function (n, o, s) {
          return e(s, n, o)
        }, t)
      }
    }, 'reduceWithIndex')
    f.reduceWithIndex = Wu
    var Ru = i(function (t) {
      return function (e) {
        return function (r) {
          return r.slice(1).reduce(function (n, o, s) {
            return t.concat(n, e(s + 1, o))
          }, e(0, r[0]))
        }
      }
    }, 'foldMapWithIndex')
    f.foldMapWithIndex = Ru
    var Au = i(function (t, e) {
      return function (r) {
        return r.reduceRight(function (n, o, s) {
          return e(s, o, n)
        }, t)
      }
    }, 'reduceRightWithIndex')
    f.reduceRightWithIndex = Au
    var Eu = i(function (t) {
      var e = f.traverseWithIndex(t)
      return function (r) {
        return e(function (n, o) {
          return r(o)
        })
      }
    }, 'traverse')
    f.traverse = Eu
    var _u = i(function (t) {
      return f.traverseWithIndex(t)(Z.SK)
    }, 'sequence')
    f.sequence = _u
    var qu = i(function (t) {
      return function (e) {
        return function (r) {
          for (var n = t.map(e(0, f.head(r)), f.of), o = 1; o < r.length; o++)
            n = t.ap(
              t.map(n, function (s) {
                return function (h) {
                  return Z.pipe(s, f.append(h))
                }
              }),
              e(o, r[o])
            )
          return n
        }
      }
    }, 'traverseWithIndex')
    f.traverseWithIndex = qu
    f.extract = it.head
    f.URI = 'ReadonlyNonEmptyArray'
    var Su = i(function (t) {
      return {
        show: function (e) {
          return '[' + e.map(t.show).join(', ') + ']'
        },
      }
    }, 'getShow')
    f.getShow = Su
    var Ou = i(function () {
      return { concat: $t }
    }, 'getSemigroup')
    f.getSemigroup = Ou
    var Uu = i(function (t) {
      return za.fromEquals(function (e, r) {
        return (
          e.length === r.length &&
          e.every(function (n, o) {
            return t.equals(n, r[o])
          })
        )
      })
    }, 'getEq')
    f.getEq = Uu
    var Nu = i(function (t) {
      var e = f.union(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getUnionSemigroup')
    f.getUnionSemigroup = Nu
    f.Functor = { URI: f.URI, map: gt }
    f.flap = $r.flap(f.Functor)
    f.Pointed = { URI: f.URI, of: f.of }
    f.FunctorWithIndex = { URI: f.URI, map: gt, mapWithIndex: Ne }
    f.Apply = { URI: f.URI, map: gt, ap: kt }
    f.apFirst = Ue.apFirst(f.Apply)
    f.apSecond = Ue.apSecond(f.Apply)
    f.Applicative = { URI: f.URI, map: gt, ap: kt, of: f.of }
    f.Chain = { URI: f.URI, map: gt, ap: kt, chain: Fe }
    f.chainFirst = jr.chainFirst(f.Chain)
    f.Monad = { URI: f.URI, map: gt, ap: kt, of: f.of, chain: Fe }
    f.Foldable = { URI: f.URI, reduce: Zt, foldMap: Kt, reduceRight: Ht }
    f.FoldableWithIndex = {
      URI: f.URI,
      reduce: Zt,
      foldMap: Kt,
      reduceRight: Ht,
      reduceWithIndex: Le,
      foldMapWithIndex: Te,
      reduceRightWithIndex: ze,
    }
    f.Traversable = {
      URI: f.URI,
      map: gt,
      reduce: Zt,
      foldMap: Kt,
      reduceRight: Ht,
      traverse: Be,
      sequence: f.sequence,
    }
    f.TraversableWithIndex = {
      URI: f.URI,
      map: gt,
      mapWithIndex: Ne,
      reduce: Zt,
      foldMap: Kt,
      reduceRight: Ht,
      traverse: Be,
      sequence: f.sequence,
      reduceWithIndex: Le,
      foldMapWithIndex: Te,
      reduceRightWithIndex: ze,
      traverseWithIndex: Xr,
    }
    f.Alt = { URI: f.URI, map: gt, alt: Gr }
    f.Comonad = { URI: f.URI, map: gt, extend: Vr, extract: f.extract }
    f.Do = f.of(it.emptyRecord)
    f.bindTo = $r.bindTo(f.Functor)
    f.bind = jr.bind(f.Chain)
    f.apS = Ue.apS(f.Apply)
    f.head = f.extract
    f.tail = it.tail
    var Fu = i(function (t) {
      return t[t.length - 1]
    }, 'last')
    f.last = Fu
    var Bu = i(function (t) {
      return t.slice(0, -1)
    }, 'init')
    f.init = Bu
    var Lu = i(function (t) {
      var e = kr.min(t)
      return function (r) {
        return r.reduce(e.concat)
      }
    }, 'min')
    f.min = Lu
    var Tu = i(function (t) {
      var e = kr.max(t)
      return function (r) {
        return r.reduce(e.concat)
      }
    }, 'max')
    f.max = Tu
    var zu = i(function (t) {
      return function (e) {
        return e.reduce(t.concat)
      }
    }, 'concatAll')
    f.concatAll = zu
    var Pu = i(function (t) {
      return function (e) {
        return t(f.head(e), f.tail(e))
      }
    }, 'matchLeft')
    f.matchLeft = Pu
    var Du = i(function (t) {
      return function (e) {
        return t(f.init(e), f.last(e))
      }
    }, 'matchRight')
    f.matchRight = Du
    var Cu = i(function (t) {
      return function (e) {
        return jt([t(f.head(e))], f.tail(e))
      }
    }, 'modifyHead')
    f.modifyHead = Cu
    var ju = i(function (t) {
      return f.modifyHead(function () {
        return t
      })
    }, 'updateHead')
    f.updateHead = ju
    var $u = i(function (t) {
      return function (e) {
        return Z.pipe(f.init(e), f.append(t(f.last(e))))
      }
    }, 'modifyLast')
    f.modifyLast = $u
    var ku = i(function (t) {
      return f.modifyLast(function () {
        return t
      })
    }, 'updateLast')
    f.updateLast = ku
    function Zu(t) {
      var e = f.sort(t),
        r = Kr(t)
      return function (n) {
        return f.isNonEmpty(n) ? r(e(n)) : f.empty
      }
    }
    i(Zu, 'groupSort')
    f.groupSort = Zu
    function Ku(t) {
      return f.filterWithIndex(function (e, r) {
        return t(r)
      })
    }
    i(Ku, 'filter')
    f.filter = Ku
    var Hu = i(function (t) {
      return function (e) {
        return f.fromReadonlyArray(
          e.filter(function (r, n) {
            return t(n, r)
          })
        )
      }
    }, 'filterWithIndex')
    f.filterWithIndex = Hu
    f.uncons = f.unprepend
    f.unsnoc = f.unappend
    function Vu(t, e) {
      return e === void 0 ? f.prepend(t) : Z.pipe(e, f.prepend(t))
    }
    i(Vu, 'cons')
    f.cons = Vu
    var Gu = i(function (t, e) {
      return Z.pipe(t, $t([e]))
    }, 'snoc')
    f.snoc = Gu
    var Xu = i(function (t, e) {
      return function (r) {
        return t < 0 || t > r.length ? it.none : it.some(f.unsafeInsertAt(t, e, r))
      }
    }, 'insertAt')
    f.insertAt = Xu
    f.prependToAll = f.prependAll
    f.fold = f.concatAll
    f.readonlyNonEmptyArray = {
      URI: f.URI,
      of: f.of,
      map: gt,
      mapWithIndex: Ne,
      ap: kt,
      chain: Fe,
      extend: Vr,
      extract: f.extract,
      reduce: Zt,
      foldMap: Kt,
      reduceRight: Ht,
      traverse: Be,
      sequence: f.sequence,
      reduceWithIndex: Le,
      foldMapWithIndex: Te,
      reduceRightWithIndex: ze,
      traverseWithIndex: Xr,
      alt: Gr,
    }
  })
  var Ke = J((c) => {
    'use strict'
    var Qu =
        (c && c.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      Yu =
        (c && c.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      Qr =
        (c && c.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && Qu(e, t, r)
          return Yu(e, t), e
        },
      Vt =
        (c && c.__spreadArray) ||
        function (t, e) {
          for (var r = 0, n = e.length, o = t.length; r < n; r++, o++) t[o] = e[r]
          return t
        }
    Object.defineProperty(c, '__esModule', { value: !0 })
    c.mapWithIndex = c.map = c.flatten = c.duplicate = c.extend = c.chain = c.ap = c.alt = c.altW = c.chunksOf = c.splitAt = c.chop = c.chainWithIndex = c.foldMap = c.foldMapWithIndex = c.intersperse = c.prependAll = c.unzip = c.zip = c.zipWith = c.of = c.copy = c.modifyAt = c.updateAt = c.insertAt = c.sort = c.groupBy = c.group = c.reverse = c.concat = c.concatW = c.unappend = c.unprepend = c.range = c.replicate = c.makeBy = c.fromArray = c.fromReadonlyNonEmptyArray = c.rotate = c.union = c.sortBy = c.uniq = c.unsafeUpdateAt = c.unsafeInsertAt = c.append = c.appendW = c.prepend = c.prependW = c.isOutOfBound = c.isNonEmpty = void 0
    c.filterWithIndex = c.filter = c.groupSort = c.updateLast = c.modifyLast = c.updateHead = c.modifyHead = c.matchRight = c.matchLeft = c.concatAll = c.max = c.min = c.init = c.last = c.tail = c.head = c.apS = c.bind = c.bindTo = c.Do = c.Comonad = c.Alt = c.TraversableWithIndex = c.Traversable = c.FoldableWithIndex = c.Foldable = c.Monad = c.chainFirst = c.Chain = c.Applicative = c.apSecond = c.apFirst = c.Apply = c.FunctorWithIndex = c.Pointed = c.flap = c.Functor = c.getUnionSemigroup = c.getEq = c.getSemigroup = c.getShow = c.URI = c.extract = c.traverseWithIndex = c.sequence = c.traverse = c.reduceRightWithIndex = c.reduceRight = c.reduceWithIndex = c.reduce = void 0
    c.nonEmptyArray = c.fold = c.prependToAll = c.snoc = c.cons = c.unsnoc = c.uncons = void 0
    var Pe = Pt(),
      Yr = Dt(),
      V = pt(),
      Jr = Ot(),
      bt = Qr(xt()),
      Ju = Ct(),
      ot = Qr(ue()),
      to = i(function (t) {
        return t.length > 0
      }, 'isNonEmpty')
    c.isNonEmpty = to
    var eo = i(function (t, e) {
      return t < 0 || t >= e.length
    }, 'isOutOfBound')
    c.isOutOfBound = eo
    var ro = i(function (t) {
      return function (e) {
        return Vt([t], e)
      }
    }, 'prependW')
    c.prependW = ro
    c.prepend = c.prependW
    var no = i(function (t) {
      return function (e) {
        return Vt(Vt([], e), [t])
      }
    }, 'appendW')
    c.appendW = no
    c.append = c.appendW
    var io = i(function (t, e, r) {
      if (c.isNonEmpty(r)) {
        var n = c.fromReadonlyNonEmptyArray(r)
        return n.splice(t, 0, e), n
      }
      return [e]
    }, 'unsafeInsertAt')
    c.unsafeInsertAt = io
    var ao = i(function (t, e, r) {
      var n = c.fromReadonlyNonEmptyArray(r)
      return (n[t] = e), n
    }, 'unsafeUpdateAt')
    c.unsafeUpdateAt = ao
    var uo = i(function (t) {
      return function (e) {
        if (e.length === 1) return c.copy(e)
        for (
          var r = [c.head(e)],
            n = c.tail(e),
            o = i(function (R) {
              r.every(function (E) {
                return !t.equals(E, R)
              }) && r.push(R)
            }, '_loop_1'),
            s = 0,
            h = n;
          s < h.length;
          s++
        ) {
          var y = h[s]
          o(y)
        }
        return r
      }
    }, 'uniq')
    c.uniq = uo
    var oo = i(function (t) {
      if (c.isNonEmpty(t)) {
        var e = Ju.getMonoid()
        return c.sort(t.reduce(e.concat, e.empty))
      }
      return c.copy
    }, 'sortBy')
    c.sortBy = oo
    var co = i(function (t) {
      var e = c.uniq(t)
      return function (r) {
        return function (n) {
          return e(V.pipe(n, oe(r)))
        }
      }
    }, 'union')
    c.union = co
    var fo = i(function (t) {
      return function (e) {
        var r = e.length,
          n = Math.round(t) % r
        if (c.isOutOfBound(Math.abs(n), e) || n === 0) return c.copy(e)
        if (n < 0) {
          var o = c.splitAt(-n)(e),
            s = o[0],
            h = o[1]
          return V.pipe(h, oe(s))
        } else return c.rotate(n - r)(e)
      }
    }, 'rotate')
    c.rotate = fo
    c.fromReadonlyNonEmptyArray = bt.fromReadonlyNonEmptyArray
    var so = i(function (t) {
      return c.isNonEmpty(t) ? bt.some(t) : bt.none
    }, 'fromArray')
    c.fromArray = so
    var lo = i(function (t) {
      return function (e) {
        for (var r = Math.max(0, Math.floor(e)), n = [t(0)], o = 1; o < r; o++) n.push(t(o))
        return n
      }
    }, 'makeBy')
    c.makeBy = lo
    var ho = i(function (t) {
      return c.makeBy(function () {
        return t
      })
    }, 'replicate')
    c.replicate = ho
    var po = i(function (t, e) {
      return t <= e
        ? c.makeBy(function (r) {
            return t + r
          })(e - t + 1)
        : [t]
    }, 'range')
    c.range = po
    var vo = i(function (t) {
      return [c.head(t), c.tail(t)]
    }, 'unprepend')
    c.unprepend = vo
    var mo = i(function (t) {
      return [c.init(t), c.last(t)]
    }, 'unappend')
    c.unappend = mo
    function tn(t) {
      return function (e) {
        return e.concat(t)
      }
    }
    i(tn, 'concatW')
    c.concatW = tn
    function oe(t, e) {
      return e
        ? t.concat(e)
        : function (r) {
            return r.concat(t)
          }
    }
    i(oe, 'concat')
    c.concat = oe
    var go = i(function (t) {
      return Vt([c.last(t)], t.slice(0, -1).reverse())
    }, 'reverse')
    c.reverse = go
    function en(t) {
      return function (e) {
        var r = e.length
        if (r === 0) return []
        for (var n = [], o = e[0], s = [o], h = 1; h < r; h++) {
          var y = e[h]
          t.equals(y, o) ? s.push(y) : (n.push(s), (o = y), (s = [o]))
        }
        return n.push(s), n
      }
    }
    i(en, 'group')
    c.group = en
    var yo = i(function (t) {
      return function (e) {
        for (var r = {}, n = 0, o = e; n < o.length; n++) {
          var s = o[n],
            h = t(s)
          r.hasOwnProperty(h) ? r[h].push(s) : (r[h] = [s])
        }
        return r
      }
    }, 'groupBy')
    c.groupBy = yo
    var Io = i(function (t) {
      return function (e) {
        return e.slice().sort(t.compare)
      }
    }, 'sort')
    c.sort = Io
    var xo = i(function (t, e) {
      return function (r) {
        return t < 0 || t > r.length ? bt.none : bt.some(c.unsafeInsertAt(t, e, r))
      }
    }, 'insertAt')
    c.insertAt = xo
    var bo = i(function (t, e) {
      return c.modifyAt(t, function () {
        return e
      })
    }, 'updateAt')
    c.updateAt = bo
    var Mo = i(function (t, e) {
      return function (r) {
        return c.isOutOfBound(t, r) ? bt.none : bt.some(c.unsafeUpdateAt(t, e(r[t]), r))
      }
    }, 'modifyAt')
    c.modifyAt = Mo
    c.copy = c.fromReadonlyNonEmptyArray
    var wo = i(function (t) {
      return [t]
    }, 'of')
    c.of = wo
    var Wo = i(function (t, e, r) {
      for (var n = [r(t[0], e[0])], o = Math.min(t.length, e.length), s = 1; s < o; s++)
        n[s] = r(t[s], e[s])
      return n
    }, 'zipWith')
    c.zipWith = Wo
    function rn(t, e) {
      return e === void 0
        ? function (r) {
            return rn(r, t)
          }
        : c.zipWith(t, e, function (r, n) {
            return [r, n]
          })
    }
    i(rn, 'zip')
    c.zip = rn
    var Ro = i(function (t) {
      for (var e = [t[0][0]], r = [t[0][1]], n = 1; n < t.length; n++)
        (e[n] = t[n][0]), (r[n] = t[n][1])
      return [e, r]
    }, 'unzip')
    c.unzip = Ro
    var Ao = i(function (t) {
      return function (e) {
        for (var r = [t, e[0]], n = 1; n < e.length; n++) r.push(t, e[n])
        return r
      }
    }, 'prependAll')
    c.prependAll = Ao
    var Eo = i(function (t) {
      return function (e) {
        var r = c.tail(e)
        return c.isNonEmpty(r) ? V.pipe(r, c.prependAll(t), c.prepend(c.head(e))) : c.copy(e)
      }
    }, 'intersperse')
    c.intersperse = Eo
    c.foldMapWithIndex = ot.foldMapWithIndex
    c.foldMap = ot.foldMap
    var _o = i(function (t) {
      return function (e) {
        for (var r = c.fromReadonlyNonEmptyArray(t(0, c.head(e))), n = 1; n < e.length; n++)
          r.push.apply(r, t(n, e[n]))
        return r
      }
    }, 'chainWithIndex')
    c.chainWithIndex = _o
    var qo = i(function (t) {
      return function (e) {
        for (var r = t(e), n = r[0], o = r[1], s = [n], h = o; c.isNonEmpty(h); ) {
          var y = t(h),
            R = y[0],
            E = y[1]
          s.push(R), (h = E)
        }
        return s
      }
    }, 'chop')
    c.chop = qo
    var So = i(function (t) {
      return function (e) {
        var r = Math.max(1, t)
        return r >= e.length
          ? [c.copy(e), []]
          : [V.pipe(e.slice(1, r), c.prepend(c.head(e))), e.slice(r)]
      }
    }, 'splitAt')
    c.splitAt = So
    var Oo = i(function (t) {
      return c.chop(c.splitAt(t))
    }, 'chunksOf')
    c.chunksOf = Oo
    var yt = i(function (t, e) {
        return V.pipe(t, c.map(e))
      }, '_map'),
      De = i(function (t, e) {
        return V.pipe(t, c.mapWithIndex(e))
      }, '_mapWithIndex'),
      Gt = i(function (t, e) {
        return V.pipe(t, c.ap(e))
      }, '_ap'),
      Ce = i(function (t, e) {
        return V.pipe(t, c.chain(e))
      }, '_chain'),
      nn = i(function (t, e) {
        return V.pipe(t, c.extend(e))
      }, '_extend'),
      Xt = i(function (t, e, r) {
        return V.pipe(t, c.reduce(e, r))
      }, '_reduce'),
      Qt = i(function (t) {
        var e = c.foldMap(t)
        return function (r, n) {
          return V.pipe(r, e(n))
        }
      }, '_foldMap'),
      Yt = i(function (t, e, r) {
        return V.pipe(t, c.reduceRight(e, r))
      }, '_reduceRight'),
      je = i(function (t) {
        var e = c.traverse(t)
        return function (r, n) {
          return V.pipe(r, e(n))
        }
      }, '_traverse'),
      an = i(function (t, e) {
        return V.pipe(t, c.alt(e))
      }, '_alt'),
      $e = i(function (t, e, r) {
        return V.pipe(t, c.reduceWithIndex(e, r))
      }, '_reduceWithIndex'),
      ke = i(function (t) {
        var e = c.foldMapWithIndex(t)
        return function (r, n) {
          return V.pipe(r, e(n))
        }
      }, '_foldMapWithIndex'),
      Ze = i(function (t, e, r) {
        return V.pipe(t, c.reduceRightWithIndex(e, r))
      }, '_reduceRightWithIndex'),
      un = i(function (t) {
        var e = c.traverseWithIndex(t)
        return function (r, n) {
          return V.pipe(r, e(n))
        }
      }, '_traverseWithIndex'),
      Uo = i(function (t) {
        return function (e) {
          return V.pipe(e, tn(t()))
        }
      }, 'altW')
    c.altW = Uo
    c.alt = c.altW
    var No = i(function (t) {
      return c.chain(function (e) {
        return V.pipe(t, c.map(e))
      })
    }, 'ap')
    c.ap = No
    var Fo = i(function (t) {
      return c.chainWithIndex(function (e, r) {
        return t(r)
      })
    }, 'chain')
    c.chain = Fo
    var Bo = i(function (t) {
      return function (e) {
        for (var r = c.tail(e), n = [t(e)]; c.isNonEmpty(r); ) n.push(t(r)), (r = c.tail(r))
        return n
      }
    }, 'extend')
    c.extend = Bo
    c.duplicate = c.extend(V.identity)
    c.flatten = c.chain(V.identity)
    var Lo = i(function (t) {
      return c.mapWithIndex(function (e, r) {
        return t(r)
      })
    }, 'map')
    c.map = Lo
    var To = i(function (t) {
      return function (e) {
        for (var r = [t(0, c.head(e))], n = 1; n < e.length; n++) r.push(t(n, e[n]))
        return r
      }
    }, 'mapWithIndex')
    c.mapWithIndex = To
    c.reduce = ot.reduce
    c.reduceWithIndex = ot.reduceWithIndex
    c.reduceRight = ot.reduceRight
    c.reduceRightWithIndex = ot.reduceRightWithIndex
    var zo = i(function (t) {
      var e = c.traverseWithIndex(t)
      return function (r) {
        return e(function (n, o) {
          return r(o)
        })
      }
    }, 'traverse')
    c.traverse = zo
    var Po = i(function (t) {
      return c.traverseWithIndex(t)(function (e, r) {
        return r
      })
    }, 'sequence')
    c.sequence = Po
    var Do = i(function (t) {
      return function (e) {
        return function (r) {
          for (var n = t.map(e(0, c.head(r)), c.of), o = 1; o < r.length; o++)
            n = t.ap(
              t.map(n, function (s) {
                return function (h) {
                  return V.pipe(s, c.append(h))
                }
              }),
              e(o, r[o])
            )
          return n
        }
      }
    }, 'traverseWithIndex')
    c.traverseWithIndex = Do
    c.extract = ot.head
    c.URI = 'NonEmptyArray'
    c.getShow = ot.getShow
    var Co = i(function () {
      return { concat: oe }
    }, 'getSemigroup')
    c.getSemigroup = Co
    c.getEq = ot.getEq
    var jo = i(function (t) {
      var e = c.union(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getUnionSemigroup')
    c.getUnionSemigroup = jo
    c.Functor = { URI: c.URI, map: yt }
    c.flap = Jr.flap(c.Functor)
    c.Pointed = { URI: c.URI, of: c.of }
    c.FunctorWithIndex = { URI: c.URI, map: yt, mapWithIndex: De }
    c.Apply = { URI: c.URI, map: yt, ap: Gt }
    c.apFirst = Pe.apFirst(c.Apply)
    c.apSecond = Pe.apSecond(c.Apply)
    c.Applicative = { URI: c.URI, map: yt, ap: Gt, of: c.of }
    c.Chain = { URI: c.URI, map: yt, ap: Gt, chain: Ce }
    c.chainFirst = Yr.chainFirst(c.Chain)
    c.Monad = { URI: c.URI, map: yt, ap: Gt, of: c.of, chain: Ce }
    c.Foldable = { URI: c.URI, reduce: Xt, foldMap: Qt, reduceRight: Yt }
    c.FoldableWithIndex = {
      URI: c.URI,
      reduce: Xt,
      foldMap: Qt,
      reduceRight: Yt,
      reduceWithIndex: $e,
      foldMapWithIndex: ke,
      reduceRightWithIndex: Ze,
    }
    c.Traversable = {
      URI: c.URI,
      map: yt,
      reduce: Xt,
      foldMap: Qt,
      reduceRight: Yt,
      traverse: je,
      sequence: c.sequence,
    }
    c.TraversableWithIndex = {
      URI: c.URI,
      map: yt,
      mapWithIndex: De,
      reduce: Xt,
      foldMap: Qt,
      reduceRight: Yt,
      traverse: je,
      sequence: c.sequence,
      reduceWithIndex: $e,
      foldMapWithIndex: ke,
      reduceRightWithIndex: Ze,
      traverseWithIndex: un,
    }
    c.Alt = { URI: c.URI, map: yt, alt: an }
    c.Comonad = { URI: c.URI, map: yt, extend: nn, extract: c.extract }
    c.Do = c.of(bt.emptyRecord)
    c.bindTo = Jr.bindTo(c.Functor)
    c.bind = Yr.bind(c.Chain)
    c.apS = Pe.apS(c.Apply)
    c.head = ot.head
    var $o = i(function (t) {
      return t.slice(1)
    }, 'tail')
    c.tail = $o
    c.last = ot.last
    var ko = i(function (t) {
      return t.slice(0, -1)
    }, 'init')
    c.init = ko
    c.min = ot.min
    c.max = ot.max
    var Zo = i(function (t) {
      return function (e) {
        return e.reduce(t.concat)
      }
    }, 'concatAll')
    c.concatAll = Zo
    var Ko = i(function (t) {
      return function (e) {
        return t(c.head(e), c.tail(e))
      }
    }, 'matchLeft')
    c.matchLeft = Ko
    var Ho = i(function (t) {
      return function (e) {
        return t(c.init(e), c.last(e))
      }
    }, 'matchRight')
    c.matchRight = Ho
    var Vo = i(function (t) {
      return function (e) {
        return Vt([t(c.head(e))], c.tail(e))
      }
    }, 'modifyHead')
    c.modifyHead = Vo
    var Go = i(function (t) {
      return c.modifyHead(function () {
        return t
      })
    }, 'updateHead')
    c.updateHead = Go
    var Xo = i(function (t) {
      return function (e) {
        return V.pipe(c.init(e), c.append(t(c.last(e))))
      }
    }, 'modifyLast')
    c.modifyLast = Xo
    var Qo = i(function (t) {
      return c.modifyLast(function () {
        return t
      })
    }, 'updateLast')
    c.updateLast = Qo
    function Yo(t) {
      var e = c.sort(t),
        r = en(t)
      return function (n) {
        return c.isNonEmpty(n) ? r(e(n)) : []
      }
    }
    i(Yo, 'groupSort')
    c.groupSort = Yo
    function Jo(t) {
      return c.filterWithIndex(function (e, r) {
        return t(r)
      })
    }
    i(Jo, 'filter')
    c.filter = Jo
    var tc = i(function (t) {
      return function (e) {
        return c.fromArray(
          e.filter(function (r, n) {
            return t(n, r)
          })
        )
      }
    }, 'filterWithIndex')
    c.filterWithIndex = tc
    c.uncons = c.unprepend
    c.unsnoc = c.unappend
    function ec(t, e) {
      return e === void 0 ? c.prepend(t) : V.pipe(e, c.prepend(t))
    }
    i(ec, 'cons')
    c.cons = ec
    var rc = i(function (t, e) {
      return V.pipe(t, c.append(e))
    }, 'snoc')
    c.snoc = rc
    c.prependToAll = c.prependAll
    c.fold = ot.concatAll
    c.nonEmptyArray = {
      URI: c.URI,
      of: c.of,
      map: yt,
      mapWithIndex: De,
      ap: Gt,
      chain: Ce,
      extend: nn,
      extract: c.extract,
      reduce: Xt,
      foldMap: Qt,
      reduceRight: Yt,
      traverse: je,
      sequence: c.sequence,
      reduceWithIndex: $e,
      foldMapWithIndex: ke,
      reduceRightWithIndex: Ze,
      traverseWithIndex: un,
      alt: an,
    }
  })
  var Ve = J((F) => {
    'use strict'
    Object.defineProperty(F, '__esModule', { value: !0 })
    F.right = F.left = F.flap = F.Functor = F.Bifunctor = F.URI = F.bimap = F.mapLeft = F.map = F.separated = void 0
    var He = pt(),
      nc = Ot(),
      ic = i(function (t, e) {
        return { left: t, right: e }
      }, 'separated')
    F.separated = ic
    var ac = i(function (t, e) {
        return He.pipe(t, F.map(e))
      }, '_map'),
      uc = i(function (t, e) {
        return He.pipe(t, F.mapLeft(e))
      }, '_mapLeft'),
      oc = i(function (t, e, r) {
        return He.pipe(t, F.bimap(e, r))
      }, '_bimap'),
      cc = i(function (t) {
        return function (e) {
          return F.separated(F.left(e), t(F.right(e)))
        }
      }, 'map')
    F.map = cc
    var fc = i(function (t) {
      return function (e) {
        return F.separated(t(F.left(e)), F.right(e))
      }
    }, 'mapLeft')
    F.mapLeft = fc
    var sc = i(function (t, e) {
      return function (r) {
        return F.separated(t(F.left(r)), e(F.right(r)))
      }
    }, 'bimap')
    F.bimap = sc
    F.URI = 'Separated'
    F.Bifunctor = { URI: F.URI, mapLeft: uc, bimap: oc }
    F.Functor = { URI: F.URI, map: ac }
    F.flap = nc.flap(F.Functor)
    var lc = i(function (t) {
      return t.left
    }, 'left')
    F.left = lc
    var hc = i(function (t) {
      return t.right
    }, 'right')
    F.right = hc
  })
  var Ge = J((ct) => {
    'use strict'
    var pc =
        (ct && ct.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      dc =
        (ct && ct.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      vc =
        (ct && ct.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && pc(e, t, r)
          return dc(e, t), e
        }
    Object.defineProperty(ct, '__esModule', { value: !0 })
    ct.filterE = ct.witherDefault = ct.wiltDefault = void 0
    var on = vc(xt())
    function mc(t, e) {
      return function (r) {
        var n = t.traverse(r)
        return function (o, s) {
          return r.map(n(o, s), e.separate)
        }
      }
    }
    i(mc, 'wiltDefault')
    ct.wiltDefault = mc
    function gc(t, e) {
      return function (r) {
        var n = t.traverse(r)
        return function (o, s) {
          return r.map(n(o, s), e.compact)
        }
      }
    }
    i(gc, 'witherDefault')
    ct.witherDefault = gc
    function yc(t) {
      return function (e) {
        var r = t.wither(e)
        return function (n) {
          return function (o) {
            return r(o, function (s) {
              return e.map(n(s), function (h) {
                return h ? on.some(s) : on.none
              })
            })
          }
        }
      }
    }
    i(yc, 'filterE')
    ct.filterE = yc
  })
  var Xe = J((ce) => {
    'use strict'
    Object.defineProperty(ce, '__esModule', { value: !0 })
    ce.guard = void 0
    function Ic(t, e) {
      return function (r) {
        return r ? e.of(void 0) : t.zero()
      }
    }
    i(Ic, 'guard')
    ce.guard = Ic
  })
  var In = J((a) => {
    'use strict'
    var xc =
        (a && a.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      bc =
        (a && a.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      Qe =
        (a && a.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && xc(e, t, r)
          return bc(e, t), e
        },
      Mc =
        (a && a.__spreadArray) ||
        function (t, e) {
          for (var r = 0, n = e.length, o = t.length; r < n; r++, o++) t[o] = e[r]
          return t
        }
    Object.defineProperty(a, '__esModule', { value: !0 })
    a.sort = a.lefts = a.rights = a.reverse = a.modifyAt = a.deleteAt = a.updateAt = a.insertAt = a.findLastIndex = a.findLastMap = a.findLast = a.findFirstMap = a.findFirst = a.findIndex = a.dropLeftWhile = a.dropRight = a.dropLeft = a.spanLeft = a.takeLeftWhile = a.takeRight = a.takeLeft = a.init = a.tail = a.last = a.head = a.lookup = a.isOutOfBound = a.size = a.scanRight = a.scanLeft = a.chainWithIndex = a.foldRight = a.matchRight = a.matchRightW = a.foldLeft = a.matchLeft = a.matchLeftW = a.match = a.matchW = a.fromEither = a.fromOption = a.fromPredicate = a.replicate = a.makeBy = a.appendW = a.append = a.prependW = a.prepend = a.isNonEmpty = a.isEmpty = void 0
    a.sequence = a.traverse = a.reduceRightWithIndex = a.reduceRight = a.reduceWithIndex = a.foldMap = a.reduce = a.foldMapWithIndex = a.duplicate = a.extend = a.filterWithIndex = a.partitionMapWithIndex = a.partitionMap = a.partitionWithIndex = a.partition = a.compact = a.filterMap = a.filterMapWithIndex = a.filter = a.separate = a.mapWithIndex = a.map = a.flatten = a.chain = a.ap = a.alt = a.altW = a.zero = a.of = a._chainRecBreadthFirst = a._chainRecDepthFirst = a.difference = a.intersection = a.union = a.concat = a.concatW = a.comprehension = a.fromOptionK = a.chunksOf = a.splitAt = a.chop = a.sortBy = a.uniq = a.elem = a.rotate = a.intersperse = a.prependAll = a.unzip = a.zip = a.zipWith = void 0
    a.toArray = a.unsafeDeleteAt = a.unsafeUpdateAt = a.unsafeInsertAt = a.fromEitherK = a.FromEither = a.filterE = a.Witherable = a.ChainRecBreadthFirst = a.chainRecBreadthFirst = a.ChainRecDepthFirst = a.chainRecDepthFirst = a.TraversableWithIndex = a.Traversable = a.FoldableWithIndex = a.Foldable = a.FilterableWithIndex = a.Filterable = a.Compactable = a.Extend = a.Alternative = a.guard = a.Zero = a.Alt = a.Unfoldable = a.chainFirst = a.Monad = a.Chain = a.Applicative = a.apSecond = a.apFirst = a.Apply = a.FunctorWithIndex = a.Pointed = a.flap = a.Functor = a.getDifferenceMagma = a.getIntersectionSemigroup = a.getUnionMonoid = a.getUnionSemigroup = a.getOrd = a.getEq = a.getMonoid = a.getSemigroup = a.getShow = a.URI = a.unfold = a.wilt = a.wither = a.traverseWithIndex = void 0
    a.readonlyArray = a.prependToAll = a.snoc = a.cons = a.range = a.apS = a.bind = a.bindTo = a.Do = a.exists = a.some = a.every = a.empty = a.fromArray = void 0
    var Ye = Pt(),
      cn = Dt(),
      wc = ie(),
      Wc = qe(),
      P = pt(),
      fn = Ot(),
      T = Qe(xt()),
      Rc = Qe(Re()),
      Ac = Ct(),
      z = Qe(ue()),
      Je = Ve(),
      tr = Ge(),
      Ec = Xe(),
      _c = i(function (t) {
        return t.length === 0
      }, 'isEmpty')
    a.isEmpty = _c
    a.isNonEmpty = z.isNonEmpty
    a.prepend = z.prepend
    a.prependW = z.prependW
    a.append = z.append
    a.appendW = z.appendW
    var qc = i(function (t, e) {
      return t <= 0 ? a.empty : z.makeBy(e)(t)
    }, 'makeBy')
    a.makeBy = qc
    var Sc = i(function (t, e) {
      return a.makeBy(t, function () {
        return e
      })
    }, 'replicate')
    a.replicate = Sc
    function Oc(t) {
      return function (e) {
        return t(e) ? [e] : a.empty
      }
    }
    i(Oc, 'fromPredicate')
    a.fromPredicate = Oc
    var Uc = i(function (t) {
      return T.isNone(t) ? a.empty : [t.value]
    }, 'fromOption')
    a.fromOption = Uc
    var Nc = i(function (t) {
      return T.isLeft(t) ? a.empty : [t.right]
    }, 'fromEither')
    a.fromEither = Nc
    var Fc = i(function (t, e) {
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : t()
      }
    }, 'matchW')
    a.matchW = Fc
    a.match = a.matchW
    var Bc = i(function (t, e) {
      return function (r) {
        return a.isNonEmpty(r) ? e(z.head(r), z.tail(r)) : t()
      }
    }, 'matchLeftW')
    a.matchLeftW = Bc
    a.matchLeft = a.matchLeftW
    a.foldLeft = a.matchLeft
    var Lc = i(function (t, e) {
      return function (r) {
        return a.isNonEmpty(r) ? e(z.init(r), z.last(r)) : t()
      }
    }, 'matchRightW')
    a.matchRightW = Lc
    a.matchRight = a.matchRightW
    a.foldRight = a.matchRight
    var Tc = i(function (t) {
      return function (e) {
        if (a.isEmpty(e)) return a.empty
        for (var r = [], n = 0; n < e.length; n++) r.push.apply(r, t(n, e[n]))
        return r
      }
    }, 'chainWithIndex')
    a.chainWithIndex = Tc
    var zc = i(function (t, e) {
      return function (r) {
        var n = r.length,
          o = new Array(n + 1)
        o[0] = t
        for (var s = 0; s < n; s++) o[s + 1] = e(o[s], r[s])
        return o
      }
    }, 'scanLeft')
    a.scanLeft = zc
    var Pc = i(function (t, e) {
      return function (r) {
        var n = r.length,
          o = new Array(n + 1)
        o[n] = t
        for (var s = n - 1; s >= 0; s--) o[s] = e(r[s], o[s + 1])
        return o
      }
    }, 'scanRight')
    a.scanRight = Pc
    var Dc = i(function (t) {
      return t.length
    }, 'size')
    a.size = Dc
    a.isOutOfBound = z.isOutOfBound
    function sn(t, e) {
      return e === void 0
        ? function (r) {
            return sn(t, r)
          }
        : a.isOutOfBound(t, e)
        ? T.none
        : T.some(e[t])
    }
    i(sn, 'lookup')
    a.lookup = sn
    var Cc = i(function (t) {
      return a.isNonEmpty(t) ? T.some(z.head(t)) : T.none
    }, 'head')
    a.head = Cc
    var jc = i(function (t) {
      return a.isNonEmpty(t) ? T.some(z.last(t)) : T.none
    }, 'last')
    a.last = jc
    var $c = i(function (t) {
      return a.isNonEmpty(t) ? T.some(z.tail(t)) : T.none
    }, 'tail')
    a.tail = $c
    var kc = i(function (t) {
      return a.isNonEmpty(t) ? T.some(z.init(t)) : T.none
    }, 'init')
    a.init = kc
    var Zc = i(function (t) {
      return function (e) {
        return a.isOutOfBound(t, e) ? e : t === 0 ? a.empty : e.slice(0, t)
      }
    }, 'takeLeft')
    a.takeLeft = Zc
    var Kc = i(function (t) {
      return function (e) {
        return a.isOutOfBound(t, e) ? e : t === 0 ? a.empty : e.slice(-t)
      }
    }, 'takeRight')
    a.takeRight = Kc
    function Hc(t) {
      return function (e) {
        for (var r = [], n = 0, o = e; n < o.length; n++) {
          var s = o[n]
          if (!t(s)) break
          r.push(s)
        }
        var h = r.length
        return h === e.length ? e : h === 0 ? a.empty : r
      }
    }
    i(Hc, 'takeLeftWhile')
    a.takeLeftWhile = Hc
    var ln = i(function (t, e) {
      for (var r = t.length, n = 0; n < r && e(t[n]); n++);
      return n
    }, 'spanLeftIndex')
    function Vc(t) {
      return function (e) {
        var r = a.splitAt(ln(e, t))(e),
          n = r[0],
          o = r[1]
        return { init: n, rest: o }
      }
    }
    i(Vc, 'spanLeft')
    a.spanLeft = Vc
    var Gc = i(function (t) {
      return function (e) {
        return t <= 0 || a.isEmpty(e) ? e : t >= e.length ? a.empty : e.slice(t, e.length)
      }
    }, 'dropLeft')
    a.dropLeft = Gc
    var Xc = i(function (t) {
      return function (e) {
        return t <= 0 || a.isEmpty(e) ? e : t >= e.length ? a.empty : e.slice(0, e.length - t)
      }
    }, 'dropRight')
    a.dropRight = Xc
    function Qc(t) {
      return function (e) {
        var r = ln(e, t)
        return r === 0 ? e : r === e.length ? a.empty : e.slice(r)
      }
    }
    i(Qc, 'dropLeftWhile')
    a.dropLeftWhile = Qc
    var Yc = i(function (t) {
      return function (e) {
        for (var r = 0; r < e.length; r++) if (t(e[r])) return T.some(r)
        return T.none
      }
    }, 'findIndex')
    a.findIndex = Yc
    function Jc(t) {
      return function (e) {
        for (var r = 0; r < e.length; r++) if (t(e[r])) return T.some(e[r])
        return T.none
      }
    }
    i(Jc, 'findFirst')
    a.findFirst = Jc
    var tf = i(function (t) {
      return function (e) {
        for (var r = 0; r < e.length; r++) {
          var n = t(e[r])
          if (T.isSome(n)) return n
        }
        return T.none
      }
    }, 'findFirstMap')
    a.findFirstMap = tf
    function ef(t) {
      return function (e) {
        for (var r = e.length - 1; r >= 0; r--) if (t(e[r])) return T.some(e[r])
        return T.none
      }
    }
    i(ef, 'findLast')
    a.findLast = ef
    var rf = i(function (t) {
      return function (e) {
        for (var r = e.length - 1; r >= 0; r--) {
          var n = t(e[r])
          if (T.isSome(n)) return n
        }
        return T.none
      }
    }, 'findLastMap')
    a.findLastMap = rf
    var nf = i(function (t) {
      return function (e) {
        for (var r = e.length - 1; r >= 0; r--) if (t(e[r])) return T.some(r)
        return T.none
      }
    }, 'findLastIndex')
    a.findLastIndex = nf
    var af = i(function (t, e) {
      return function (r) {
        return t < 0 || t > r.length ? T.none : T.some(z.unsafeInsertAt(t, e, r))
      }
    }, 'insertAt')
    a.insertAt = af
    var uf = i(function (t, e) {
      return a.modifyAt(t, function () {
        return e
      })
    }, 'updateAt')
    a.updateAt = uf
    var of = i(function (t) {
      return function (e) {
        return a.isOutOfBound(t, e) ? T.none : T.some(a.unsafeDeleteAt(t, e))
      }
    }, 'deleteAt')
    a.deleteAt = of
    var cf = i(function (t, e) {
      return function (r) {
        return a.isOutOfBound(t, r) ? T.none : T.some(a.unsafeUpdateAt(t, e(r[t]), r))
      }
    }, 'modifyAt')
    a.modifyAt = cf
    var ff = i(function (t) {
      return t.length <= 1 ? t : t.slice().reverse()
    }, 'reverse')
    a.reverse = ff
    var sf = i(function (t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t[r]
        n._tag === 'Right' && e.push(n.right)
      }
      return e
    }, 'rights')
    a.rights = sf
    var lf = i(function (t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t[r]
        n._tag === 'Left' && e.push(n.left)
      }
      return e
    }, 'lefts')
    a.lefts = lf
    var hf = i(function (t) {
      return function (e) {
        return e.length <= 1 ? e : e.slice().sort(t.compare)
      }
    }, 'sort')
    a.sort = hf
    var pf = i(function (t, e, r) {
      for (var n = [], o = Math.min(t.length, e.length), s = 0; s < o; s++) n[s] = r(t[s], e[s])
      return n
    }, 'zipWith')
    a.zipWith = pf
    function hn(t, e) {
      return e === void 0
        ? function (r) {
            return hn(r, t)
          }
        : a.zipWith(t, e, function (r, n) {
            return [r, n]
          })
    }
    i(hn, 'zip')
    a.zip = hn
    var df = i(function (t) {
      for (var e = [], r = [], n = 0; n < t.length; n++) (e[n] = t[n][0]), (r[n] = t[n][1])
      return [e, r]
    }, 'unzip')
    a.unzip = df
    var vf = i(function (t) {
      var e = z.prependAll(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : r
      }
    }, 'prependAll')
    a.prependAll = vf
    var mf = i(function (t) {
      var e = z.intersperse(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : r
      }
    }, 'intersperse')
    a.intersperse = mf
    var gf = i(function (t) {
      var e = z.rotate(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : r
      }
    }, 'rotate')
    a.rotate = gf
    function fe(t) {
      return function (e, r) {
        if (r === void 0) {
          var n = fe(t)
          return function (h) {
            return n(e, h)
          }
        }
        for (
          var o = i(function (h) {
              return t.equals(h, e)
            }, 'predicate'),
            s = 0;
          s < r.length;
          s++
        )
          if (o(r[s])) return !0
        return !1
      }
    }
    i(fe, 'elem')
    a.elem = fe
    var yf = i(function (t) {
      var e = z.uniq(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : r
      }
    }, 'uniq')
    a.uniq = yf
    var If = i(function (t) {
      var e = z.sortBy(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : r
      }
    }, 'sortBy')
    a.sortBy = If
    var xf = i(function (t) {
      var e = z.chop(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : a.empty
      }
    }, 'chop')
    a.chop = xf
    var bf = i(function (t) {
      return function (e) {
        return t >= 1 && a.isNonEmpty(e)
          ? z.splitAt(t)(e)
          : a.isEmpty(e)
          ? [e, a.empty]
          : [a.empty, e]
      }
    }, 'splitAt')
    a.splitAt = bf
    var Mf = i(function (t) {
      var e = z.chunksOf(t)
      return function (r) {
        return a.isNonEmpty(r) ? e(r) : a.empty
      }
    }, 'chunksOf')
    a.chunksOf = Mf
    var wf = i(function (t) {
      return function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        return a.fromOption(t.apply(void 0, e))
      }
    }, 'fromOptionK')
    a.fromOptionK = wf
    function Wf(t, e, r) {
      r === void 0 &&
        (r = i(function () {
          return !0
        }, 'g'))
      var n = i(function (o, s) {
        return a.isNonEmpty(s)
          ? P.pipe(
              z.head(s),
              a.chain(function (h) {
                return n(P.pipe(o, a.append(h)), z.tail(s))
              })
            )
          : r.apply(void 0, o)
          ? [e.apply(void 0, o)]
          : a.empty
      }, 'go')
      return n(a.empty, t)
    }
    i(Wf, 'comprehension')
    a.comprehension = Wf
    var Rf = i(function (t) {
      return function (e) {
        return a.isEmpty(e) ? t : a.isEmpty(t) ? e : e.concat(t)
      }
    }, 'concatW')
    a.concatW = Rf
    a.concat = a.concatW
    function er(t) {
      var e = z.union(t)
      return function (r, n) {
        if (n === void 0) {
          var o = er(t)
          return function (s) {
            return o(s, r)
          }
        }
        return a.isNonEmpty(r) && a.isNonEmpty(n) ? e(n)(r) : a.isNonEmpty(r) ? r : n
      }
    }
    i(er, 'union')
    a.union = er
    function rr(t) {
      var e = fe(t)
      return function (r, n) {
        if (n === void 0) {
          var o = rr(t)
          return function (s) {
            return o(s, r)
          }
        }
        return r.filter(function (s) {
          return e(s, n)
        })
      }
    }
    i(rr, 'intersection')
    a.intersection = rr
    function nr(t) {
      var e = fe(t)
      return function (r, n) {
        if (n === void 0) {
          var o = nr(t)
          return function (s) {
            return o(s, r)
          }
        }
        return r.filter(function (s) {
          return !e(s, n)
        })
      }
    }
    i(nr, 'difference')
    a.difference = nr
    var tt = i(function (t, e) {
        return P.pipe(t, a.map(e))
      }, '_map'),
      se = i(function (t, e) {
        return P.pipe(t, a.mapWithIndex(e))
      }, '_mapWithIndex'),
      Mt = i(function (t, e) {
        return P.pipe(t, a.ap(e))
      }, '_ap'),
      Jt = i(function (t, e) {
        return P.pipe(t, a.chain(e))
      }, '_chain'),
      le = i(function (t, e) {
        return P.pipe(t, a.filter(e))
      }, '_filter'),
      he = i(function (t, e) {
        return P.pipe(t, a.filterMap(e))
      }, '_filterMap'),
      pe = i(function (t, e) {
        return P.pipe(t, a.partition(e))
      }, '_partition'),
      de = i(function (t, e) {
        return P.pipe(t, a.partitionMap(e))
      }, '_partitionMap'),
      pn = i(function (t, e) {
        return P.pipe(t, a.partitionWithIndex(e))
      }, '_partitionWithIndex'),
      dn = i(function (t, e) {
        return P.pipe(t, a.partitionMapWithIndex(e))
      }, '_partitionMapWithIndex'),
      ir = i(function (t, e) {
        return P.pipe(t, a.alt(e))
      }, '_alt'),
      Rt = i(function (t, e, r) {
        return P.pipe(t, a.reduce(e, r))
      }, '_reduce'),
      Ut = i(function (t) {
        var e = a.foldMap(t)
        return function (r, n) {
          return P.pipe(r, e(n))
        }
      }, '_foldMap'),
      Nt = i(function (t, e, r) {
        return P.pipe(t, a.reduceRight(e, r))
      }, '_reduceRight'),
      ar = i(function (t, e, r) {
        return P.pipe(t, a.reduceWithIndex(e, r))
      }, '_reduceWithIndex'),
      ur = i(function (t) {
        var e = a.foldMapWithIndex(t)
        return function (r, n) {
          return P.pipe(r, e(n))
        }
      }, '_foldMapWithIndex'),
      or = i(function (t, e, r) {
        return P.pipe(t, a.reduceRightWithIndex(e, r))
      }, '_reduceRightWithIndex'),
      vn = i(function (t, e) {
        return P.pipe(t, a.filterMapWithIndex(e))
      }, '_filterMapWithIndex'),
      mn = i(function (t, e) {
        return P.pipe(t, a.filterWithIndex(e))
      }, '_filterWithIndex'),
      gn = i(function (t, e) {
        return P.pipe(t, a.extend(e))
      }, '_extend'),
      ve = i(function (t) {
        var e = a.traverse(t)
        return function (r, n) {
          return P.pipe(r, e(n))
        }
      }, '_traverse'),
      yn = i(function (t) {
        var e = a.traverseWithIndex(t)
        return function (r, n) {
          return P.pipe(r, e(n))
        }
      }, '_traverseWithIndex'),
      Af = i(function (t, e) {
        return P.pipe(t, a.chainRecDepthFirst(e))
      }, '_chainRecDepthFirst')
    a._chainRecDepthFirst = Af
    var Ef = i(function (t, e) {
      return P.pipe(t, a.chainRecBreadthFirst(e))
    }, '_chainRecBreadthFirst')
    a._chainRecBreadthFirst = Ef
    a.of = z.of
    var _f = i(function () {
      return a.empty
    }, 'zero')
    a.zero = _f
    var qf = i(function (t) {
      return function (e) {
        return e.concat(t())
      }
    }, 'altW')
    a.altW = qf
    a.alt = a.altW
    var Sf = i(function (t) {
      return a.chain(function (e) {
        return P.pipe(t, a.map(e))
      })
    }, 'ap')
    a.ap = Sf
    var Of = i(function (t) {
      return function (e) {
        return P.pipe(
          e,
          a.chainWithIndex(function (r, n) {
            return t(n)
          })
        )
      }
    }, 'chain')
    a.chain = Of
    a.flatten = a.chain(P.identity)
    var Uf = i(function (t) {
      return function (e) {
        return e.map(function (r) {
          return t(r)
        })
      }
    }, 'map')
    a.map = Uf
    var Nf = i(function (t) {
      return function (e) {
        return e.map(function (r, n) {
          return t(n, r)
        })
      }
    }, 'mapWithIndex')
    a.mapWithIndex = Nf
    var Ff = i(function (t) {
      for (var e = [], r = [], n = 0, o = t; n < o.length; n++) {
        var s = o[n]
        s._tag === 'Left' ? e.push(s.left) : r.push(s.right)
      }
      return Je.separated(e, r)
    }, 'separate')
    a.separate = Ff
    var Bf = i(function (t) {
      return function (e) {
        return e.filter(t)
      }
    }, 'filter')
    a.filter = Bf
    var Lf = i(function (t) {
      return function (e) {
        for (var r = [], n = 0; n < e.length; n++) {
          var o = t(n, e[n])
          T.isSome(o) && r.push(o.value)
        }
        return r
      }
    }, 'filterMapWithIndex')
    a.filterMapWithIndex = Lf
    var Tf = i(function (t) {
      return a.filterMapWithIndex(function (e, r) {
        return t(r)
      })
    }, 'filterMap')
    a.filterMap = Tf
    a.compact = a.filterMap(P.identity)
    var zf = i(function (t) {
      return a.partitionWithIndex(function (e, r) {
        return t(r)
      })
    }, 'partition')
    a.partition = zf
    var Pf = i(function (t) {
      return function (e) {
        for (var r = [], n = [], o = 0; o < e.length; o++) {
          var s = e[o]
          t(o, s) ? n.push(s) : r.push(s)
        }
        return Je.separated(r, n)
      }
    }, 'partitionWithIndex')
    a.partitionWithIndex = Pf
    var Df = i(function (t) {
      return a.partitionMapWithIndex(function (e, r) {
        return t(r)
      })
    }, 'partitionMap')
    a.partitionMap = Df
    var Cf = i(function (t) {
      return function (e) {
        for (var r = [], n = [], o = 0; o < e.length; o++) {
          var s = t(o, e[o])
          s._tag === 'Left' ? r.push(s.left) : n.push(s.right)
        }
        return Je.separated(r, n)
      }
    }, 'partitionMapWithIndex')
    a.partitionMapWithIndex = Cf
    var jf = i(function (t) {
      return function (e) {
        return e.filter(function (r, n) {
          return t(n, r)
        })
      }
    }, 'filterWithIndex')
    a.filterWithIndex = jf
    var $f = i(function (t) {
      return function (e) {
        return e.map(function (r, n) {
          return t(e.slice(n))
        })
      }
    }, 'extend')
    a.extend = $f
    a.duplicate = a.extend(P.identity)
    var kf = i(function (t) {
      return function (e) {
        return function (r) {
          return r.reduce(function (n, o, s) {
            return t.concat(n, e(s, o))
          }, t.empty)
        }
      }
    }, 'foldMapWithIndex')
    a.foldMapWithIndex = kf
    var Zf = i(function (t, e) {
      return a.reduceWithIndex(t, function (r, n, o) {
        return e(n, o)
      })
    }, 'reduce')
    a.reduce = Zf
    var Kf = i(function (t) {
      var e = a.foldMapWithIndex(t)
      return function (r) {
        return e(function (n, o) {
          return r(o)
        })
      }
    }, 'foldMap')
    a.foldMap = Kf
    var Hf = i(function (t, e) {
      return function (r) {
        for (var n = r.length, o = t, s = 0; s < n; s++) o = e(s, o, r[s])
        return o
      }
    }, 'reduceWithIndex')
    a.reduceWithIndex = Hf
    var Vf = i(function (t, e) {
      return a.reduceRightWithIndex(t, function (r, n, o) {
        return e(n, o)
      })
    }, 'reduceRight')
    a.reduceRight = Vf
    var Gf = i(function (t, e) {
      return function (r) {
        return r.reduceRight(function (n, o, s) {
          return e(s, o, n)
        }, t)
      }
    }, 'reduceRightWithIndex')
    a.reduceRightWithIndex = Gf
    var Xf = i(function (t) {
      var e = a.traverseWithIndex(t)
      return function (r) {
        return e(function (n, o) {
          return r(o)
        })
      }
    }, 'traverse')
    a.traverse = Xf
    var Qf = i(function (t) {
      return function (e) {
        return Rt(e, t.of(a.zero()), function (r, n) {
          return t.ap(
            t.map(r, function (o) {
              return function (s) {
                return P.pipe(o, a.append(s))
              }
            }),
            n
          )
        })
      }
    }, 'sequence')
    a.sequence = Qf
    var Yf = i(function (t) {
      return function (e) {
        return a.reduceWithIndex(t.of(a.zero()), function (r, n, o) {
          return t.ap(
            t.map(n, function (s) {
              return function (h) {
                return P.pipe(s, a.append(h))
              }
            }),
            e(r, o)
          )
        })
      }
    }, 'traverseWithIndex')
    a.traverseWithIndex = Yf
    var Jf = i(function (t) {
      var e = cr(t)
      return function (r) {
        return function (n) {
          return e(n, r)
        }
      }
    }, 'wither')
    a.wither = Jf
    var ts = i(function (t) {
      var e = fr(t)
      return function (r) {
        return function (n) {
          return e(n, r)
        }
      }
    }, 'wilt')
    a.wilt = ts
    var es = i(function (t, e) {
      for (var r = [], n = t; ; ) {
        var o = e(n)
        if (T.isSome(o)) {
          var s = o.value,
            h = s[0],
            y = s[1]
          r.push(h), (n = y)
        } else break
      }
      return r
    }, 'unfold')
    a.unfold = es
    a.URI = 'ReadonlyArray'
    var rs = i(function (t) {
      return {
        show: function (e) {
          return '[' + e.map(t.show).join(', ') + ']'
        },
      }
    }, 'getShow')
    a.getShow = rs
    var ns = i(function () {
      return {
        concat: function (t, e) {
          return a.isEmpty(t) ? e : a.isEmpty(e) ? t : t.concat(e)
        },
      }
    }, 'getSemigroup')
    a.getSemigroup = ns
    var is = i(function () {
      return { concat: a.getSemigroup().concat, empty: a.empty }
    }, 'getMonoid')
    a.getMonoid = is
    var as = i(function (t) {
      return wc.fromEquals(function (e, r) {
        return (
          e.length === r.length &&
          e.every(function (n, o) {
            return t.equals(n, r[o])
          })
        )
      })
    }, 'getEq')
    a.getEq = as
    var us = i(function (t) {
      return Ac.fromCompare(function (e, r) {
        for (var n = e.length, o = r.length, s = Math.min(n, o), h = 0; h < s; h++) {
          var y = t.compare(e[h], r[h])
          if (y !== 0) return y
        }
        return Rc.Ord.compare(n, o)
      })
    }, 'getOrd')
    a.getOrd = us
    var os = i(function (t) {
      var e = er(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getUnionSemigroup')
    a.getUnionSemigroup = os
    var cs = i(function (t) {
      return { concat: a.getUnionSemigroup(t).concat, empty: a.empty }
    }, 'getUnionMonoid')
    a.getUnionMonoid = cs
    var fs = i(function (t) {
      var e = rr(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getIntersectionSemigroup')
    a.getIntersectionSemigroup = fs
    var ss = i(function (t) {
      var e = nr(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getDifferenceMagma')
    a.getDifferenceMagma = ss
    a.Functor = { URI: a.URI, map: tt }
    a.flap = fn.flap(a.Functor)
    a.Pointed = { URI: a.URI, of: a.of }
    a.FunctorWithIndex = { URI: a.URI, map: tt, mapWithIndex: se }
    a.Apply = { URI: a.URI, map: tt, ap: Mt }
    a.apFirst = Ye.apFirst(a.Apply)
    a.apSecond = Ye.apSecond(a.Apply)
    a.Applicative = { URI: a.URI, map: tt, ap: Mt, of: a.of }
    a.Chain = { URI: a.URI, map: tt, ap: Mt, chain: Jt }
    a.Monad = { URI: a.URI, map: tt, ap: Mt, of: a.of, chain: Jt }
    a.chainFirst = cn.chainFirst(a.Chain)
    a.Unfoldable = { URI: a.URI, unfold: a.unfold }
    a.Alt = { URI: a.URI, map: tt, alt: ir }
    a.Zero = { URI: a.URI, zero: a.zero }
    a.guard = Ec.guard(a.Zero, a.Pointed)
    a.Alternative = { URI: a.URI, map: tt, ap: Mt, of: a.of, alt: ir, zero: a.zero }
    a.Extend = { URI: a.URI, map: tt, extend: gn }
    a.Compactable = { URI: a.URI, compact: a.compact, separate: a.separate }
    a.Filterable = {
      URI: a.URI,
      map: tt,
      compact: a.compact,
      separate: a.separate,
      filter: le,
      filterMap: he,
      partition: pe,
      partitionMap: de,
    }
    a.FilterableWithIndex = {
      URI: a.URI,
      map: tt,
      mapWithIndex: se,
      compact: a.compact,
      separate: a.separate,
      filter: le,
      filterMap: he,
      partition: pe,
      partitionMap: de,
      partitionMapWithIndex: dn,
      partitionWithIndex: pn,
      filterMapWithIndex: vn,
      filterWithIndex: mn,
    }
    a.Foldable = { URI: a.URI, reduce: Rt, foldMap: Ut, reduceRight: Nt }
    a.FoldableWithIndex = {
      URI: a.URI,
      reduce: Rt,
      foldMap: Ut,
      reduceRight: Nt,
      reduceWithIndex: ar,
      foldMapWithIndex: ur,
      reduceRightWithIndex: or,
    }
    a.Traversable = {
      URI: a.URI,
      map: tt,
      reduce: Rt,
      foldMap: Ut,
      reduceRight: Nt,
      traverse: ve,
      sequence: a.sequence,
    }
    a.TraversableWithIndex = {
      URI: a.URI,
      map: tt,
      mapWithIndex: se,
      reduce: Rt,
      foldMap: Ut,
      reduceRight: Nt,
      reduceWithIndex: ar,
      foldMapWithIndex: ur,
      reduceRightWithIndex: or,
      traverse: ve,
      sequence: a.sequence,
      traverseWithIndex: yn,
    }
    var ls = i(function (t) {
      return function (e) {
        for (var r = Mc([], t(e)), n = []; r.length > 0; ) {
          var o = r.shift()
          T.isLeft(o) ? r.unshift.apply(r, t(o.left)) : n.push(o.right)
        }
        return n
      }
    }, 'chainRecDepthFirst')
    a.chainRecDepthFirst = ls
    a.ChainRecDepthFirst = {
      URI: a.URI,
      map: tt,
      ap: Mt,
      chain: Jt,
      chainRec: a._chainRecDepthFirst,
    }
    var hs = i(function (t) {
      return function (e) {
        var r = t(e),
          n = [],
          o = []
        function s(E) {
          T.isLeft(E)
            ? t(E.left).forEach(function (H) {
                return n.push(H)
              })
            : o.push(E.right)
        }
        i(s, 'go')
        for (var h = 0, y = r; h < y.length; h++) {
          var R = y[h]
          s(R)
        }
        for (; n.length > 0; ) s(n.shift())
        return o
      }
    }, 'chainRecBreadthFirst')
    a.chainRecBreadthFirst = hs
    a.ChainRecBreadthFirst = {
      URI: a.URI,
      map: tt,
      ap: Mt,
      chain: Jt,
      chainRec: a._chainRecBreadthFirst,
    }
    var cr = tr.witherDefault(a.Traversable, a.Compactable),
      fr = tr.wiltDefault(a.Traversable, a.Compactable)
    a.Witherable = {
      URI: a.URI,
      map: tt,
      compact: a.compact,
      separate: a.separate,
      filter: le,
      filterMap: he,
      partition: pe,
      partitionMap: de,
      reduce: Rt,
      foldMap: Ut,
      reduceRight: Nt,
      traverse: ve,
      sequence: a.sequence,
      wither: cr,
      wilt: fr,
    }
    a.filterE = tr.filterE(a.Witherable)
    a.FromEither = { URI: a.URI, fromEither: a.fromEither }
    a.fromEitherK = Wc.fromEitherK(a.FromEither)
    a.unsafeInsertAt = z.unsafeInsertAt
    var ps = i(function (t, e, r) {
      return a.isNonEmpty(r) ? z.unsafeUpdateAt(t, e, r) : r
    }, 'unsafeUpdateAt')
    a.unsafeUpdateAt = ps
    var ds = i(function (t, e) {
      var r = e.slice()
      return r.splice(t, 1), r
    }, 'unsafeDeleteAt')
    a.unsafeDeleteAt = ds
    var vs = i(function (t) {
      return t.slice()
    }, 'toArray')
    a.toArray = vs
    var ms = i(function (t) {
      return a.isEmpty(t) ? a.empty : t.slice()
    }, 'fromArray')
    a.fromArray = ms
    a.empty = z.empty
    var gs = i(function (t) {
      return function (e) {
        return e.every(t)
      }
    }, 'every')
    a.every = gs
    var ys = i(function (t) {
      return function (e) {
        return e.some(t)
      }
    }, 'some')
    a.some = ys
    a.exists = a.some
    a.Do = a.of(T.emptyRecord)
    a.bindTo = fn.bindTo(a.Functor)
    a.bind = cn.bind(a.Chain)
    a.apS = Ye.apS(a.Apply)
    a.range = z.range
    a.cons = z.cons
    a.snoc = z.snoc
    a.prependToAll = a.prependAll
    a.readonlyArray = {
      URI: a.URI,
      compact: a.compact,
      separate: a.separate,
      map: tt,
      ap: Mt,
      of: a.of,
      chain: Jt,
      filter: le,
      filterMap: he,
      partition: pe,
      partitionMap: de,
      mapWithIndex: se,
      partitionMapWithIndex: dn,
      partitionWithIndex: pn,
      filterMapWithIndex: vn,
      filterWithIndex: mn,
      alt: ir,
      zero: a.zero,
      unfold: a.unfold,
      reduce: Rt,
      foldMap: Ut,
      reduceRight: Nt,
      traverse: ve,
      sequence: a.sequence,
      reduceWithIndex: ar,
      foldMapWithIndex: ur,
      reduceRightWithIndex: or,
      traverseWithIndex: yn,
      extend: gn,
      wither: cr,
      wilt: fr,
    }
  })
  var Sn = J((u) => {
    'use strict'
    var Is =
        (u && u.__createBinding) ||
        (Object.create
          ? function (t, e, r, n) {
              n === void 0 && (n = r),
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[r]
                  },
                })
            }
          : function (t, e, r, n) {
              n === void 0 && (n = r), (t[n] = e[r])
            }),
      xs =
        (u && u.__setModuleDefault) ||
        (Object.create
          ? function (t, e) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: e })
            }
          : function (t, e) {
              t.default = e
            }),
      sr =
        (u && u.__importStar) ||
        function (t) {
          if (t && t.__esModule) return t
          var e = {}
          if (t != null)
            for (var r in t)
              r !== 'default' && Object.prototype.hasOwnProperty.call(t, r) && Is(e, t, r)
          return xs(e, t), e
        }
    Object.defineProperty(u, '__esModule', { value: !0 })
    u.lefts = u.rights = u.reverse = u.modifyAt = u.deleteAt = u.updateAt = u.insertAt = u.copy = u.findLastIndex = u.findLastMap = u.findLast = u.findFirstMap = u.findFirst = u.findIndex = u.dropLeftWhile = u.dropRight = u.dropLeft = u.spanLeft = u.takeLeftWhile = u.takeRight = u.takeLeft = u.init = u.tail = u.last = u.head = u.lookup = u.isOutOfBound = u.size = u.scanRight = u.scanLeft = u.chainWithIndex = u.foldRight = u.matchRight = u.matchRightW = u.foldLeft = u.matchLeft = u.matchLeftW = u.match = u.matchW = u.fromEither = u.fromOption = u.fromPredicate = u.replicate = u.makeBy = u.appendW = u.append = u.prependW = u.prepend = u.isNonEmpty = u.isEmpty = void 0
    u.traverseWithIndex = u.sequence = u.traverse = u.reduceRightWithIndex = u.reduceRight = u.reduceWithIndex = u.reduce = u.foldMapWithIndex = u.foldMap = u.duplicate = u.extend = u.filterWithIndex = u.alt = u.altW = u.partitionMapWithIndex = u.partitionMap = u.partitionWithIndex = u.partition = u.filter = u.separate = u.compact = u.filterMap = u.filterMapWithIndex = u.mapWithIndex = u.flatten = u.chain = u.ap = u.map = u.zero = u.of = u.difference = u.intersection = u.union = u.concat = u.concatW = u.comprehension = u.fromOptionK = u.chunksOf = u.splitAt = u.chop = u.sortBy = u.uniq = u.elem = u.rotate = u.intersperse = u.prependAll = u.unzip = u.zip = u.zipWith = u.sort = void 0
    u.some = u.every = u.unsafeDeleteAt = u.unsafeUpdateAt = u.unsafeInsertAt = u.fromEitherK = u.FromEither = u.filterE = u.ChainRecBreadthFirst = u.chainRecBreadthFirst = u.ChainRecDepthFirst = u.chainRecDepthFirst = u.Witherable = u.TraversableWithIndex = u.Traversable = u.FoldableWithIndex = u.Foldable = u.FilterableWithIndex = u.Filterable = u.Compactable = u.Extend = u.Alternative = u.guard = u.Zero = u.Alt = u.Unfoldable = u.Monad = u.chainFirst = u.Chain = u.Applicative = u.apSecond = u.apFirst = u.Apply = u.FunctorWithIndex = u.Pointed = u.flap = u.Functor = u.getDifferenceMagma = u.getIntersectionSemigroup = u.getUnionMonoid = u.getUnionSemigroup = u.getOrd = u.getEq = u.getMonoid = u.getSemigroup = u.getShow = u.URI = u.unfold = u.wilt = u.wither = void 0
    u.array = u.prependToAll = u.snoc = u.cons = u.empty = u.range = u.apS = u.bind = u.bindTo = u.Do = u.exists = void 0
    var lr = Pt(),
      xn = Dt(),
      bs = qe(),
      j = pt(),
      bn = Ot(),
      at = sr(xt()),
      $ = sr(Ke()),
      X = sr(In()),
      hr = Ve(),
      pr = Ge(),
      Ms = Xe(),
      ws = i(function (t) {
        return t.length === 0
      }, 'isEmpty')
    u.isEmpty = ws
    u.isNonEmpty = $.isNonEmpty
    u.prepend = $.prepend
    u.prependW = $.prependW
    u.append = $.append
    u.appendW = $.appendW
    var Ws = i(function (t, e) {
      return t <= 0 ? [] : $.makeBy(e)(t)
    }, 'makeBy')
    u.makeBy = Ws
    var Rs = i(function (t, e) {
      return u.makeBy(t, function () {
        return e
      })
    }, 'replicate')
    u.replicate = Rs
    function As(t) {
      return function (e) {
        return t(e) ? [e] : []
      }
    }
    i(As, 'fromPredicate')
    u.fromPredicate = As
    var Es = i(function (t) {
      return at.isNone(t) ? [] : [t.value]
    }, 'fromOption')
    u.fromOption = Es
    var _s = i(function (t) {
      return at.isLeft(t) ? [] : [t.right]
    }, 'fromEither')
    u.fromEither = _s
    var qs = i(function (t, e) {
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : t()
      }
    }, 'matchW')
    u.matchW = qs
    u.match = u.matchW
    var Ss = i(function (t, e) {
      return function (r) {
        return u.isNonEmpty(r) ? e($.head(r), $.tail(r)) : t()
      }
    }, 'matchLeftW')
    u.matchLeftW = Ss
    u.matchLeft = u.matchLeftW
    u.foldLeft = u.matchLeft
    var Os = i(function (t, e) {
      return function (r) {
        return u.isNonEmpty(r) ? e($.init(r), $.last(r)) : t()
      }
    }, 'matchRightW')
    u.matchRightW = Os
    u.matchRight = u.matchRightW
    u.foldRight = u.matchRight
    var Us = i(function (t) {
      return function (e) {
        for (var r = [], n = 0; n < e.length; n++) r.push.apply(r, t(n, e[n]))
        return r
      }
    }, 'chainWithIndex')
    u.chainWithIndex = Us
    var Ns = i(function (t, e) {
      return function (r) {
        var n = r.length,
          o = new Array(n + 1)
        o[0] = t
        for (var s = 0; s < n; s++) o[s + 1] = e(o[s], r[s])
        return o
      }
    }, 'scanLeft')
    u.scanLeft = Ns
    var Fs = i(function (t, e) {
      return function (r) {
        var n = r.length,
          o = new Array(n + 1)
        o[n] = t
        for (var s = n - 1; s >= 0; s--) o[s] = e(r[s], o[s + 1])
        return o
      }
    }, 'scanRight')
    u.scanRight = Fs
    var Bs = i(function (t) {
      return t.length
    }, 'size')
    u.size = Bs
    u.isOutOfBound = $.isOutOfBound
    u.lookup = X.lookup
    u.head = X.head
    u.last = X.last
    var Ls = i(function (t) {
      return u.isNonEmpty(t) ? at.some($.tail(t)) : at.none
    }, 'tail')
    u.tail = Ls
    var Ts = i(function (t) {
      return u.isNonEmpty(t) ? at.some($.init(t)) : at.none
    }, 'init')
    u.init = Ts
    var zs = i(function (t) {
      return function (e) {
        return u.isOutOfBound(t, e) ? u.copy(e) : e.slice(0, t)
      }
    }, 'takeLeft')
    u.takeLeft = zs
    var Ps = i(function (t) {
      return function (e) {
        return u.isOutOfBound(t, e) ? u.copy(e) : t === 0 ? [] : e.slice(-t)
      }
    }, 'takeRight')
    u.takeRight = Ps
    function Ds(t) {
      return function (e) {
        for (var r = [], n = 0, o = e; n < o.length; n++) {
          var s = o[n]
          if (!t(s)) break
          r.push(s)
        }
        return r
      }
    }
    i(Ds, 'takeLeftWhile')
    u.takeLeftWhile = Ds
    var Mn = i(function (t, e) {
      for (var r = t.length, n = 0; n < r && e(t[n]); n++);
      return n
    }, 'spanLeftIndex')
    function Cs(t) {
      return function (e) {
        var r = u.splitAt(Mn(e, t))(e),
          n = r[0],
          o = r[1]
        return { init: n, rest: o }
      }
    }
    i(Cs, 'spanLeft')
    u.spanLeft = Cs
    var js = i(function (t) {
      return function (e) {
        return t <= 0 || u.isEmpty(e) ? u.copy(e) : t >= e.length ? [] : e.slice(t, e.length)
      }
    }, 'dropLeft')
    u.dropLeft = js
    var $s = i(function (t) {
      return function (e) {
        return t <= 0 || u.isEmpty(e) ? u.copy(e) : t >= e.length ? [] : e.slice(0, e.length - t)
      }
    }, 'dropRight')
    u.dropRight = $s
    function ks(t) {
      return function (e) {
        return e.slice(Mn(e, t))
      }
    }
    i(ks, 'dropLeftWhile')
    u.dropLeftWhile = ks
    u.findIndex = X.findIndex
    function Zs(t) {
      return X.findFirst(t)
    }
    i(Zs, 'findFirst')
    u.findFirst = Zs
    u.findFirstMap = X.findFirstMap
    function Ks(t) {
      return X.findLast(t)
    }
    i(Ks, 'findLast')
    u.findLast = Ks
    u.findLastMap = X.findLastMap
    u.findLastIndex = X.findLastIndex
    var Hs = i(function (t) {
      return t.slice()
    }, 'copy')
    u.copy = Hs
    var Vs = i(function (t, e) {
      return function (r) {
        return t < 0 || t > r.length ? at.none : at.some(u.unsafeInsertAt(t, e, r))
      }
    }, 'insertAt')
    u.insertAt = Vs
    var Gs = i(function (t, e) {
      return u.modifyAt(t, function () {
        return e
      })
    }, 'updateAt')
    u.updateAt = Gs
    var Xs = i(function (t) {
      return function (e) {
        return u.isOutOfBound(t, e) ? at.none : at.some(u.unsafeDeleteAt(t, e))
      }
    }, 'deleteAt')
    u.deleteAt = Xs
    var Qs = i(function (t, e) {
      return function (r) {
        return u.isOutOfBound(t, r) ? at.none : at.some(u.unsafeUpdateAt(t, e(r[t]), r))
      }
    }, 'modifyAt')
    u.modifyAt = Qs
    var Ys = i(function (t) {
      return u.isEmpty(t) ? [] : t.slice().reverse()
    }, 'reverse')
    u.reverse = Ys
    var Js = i(function (t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t[r]
        n._tag === 'Right' && e.push(n.right)
      }
      return e
    }, 'rights')
    u.rights = Js
    var tl = i(function (t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var n = t[r]
        n._tag === 'Left' && e.push(n.left)
      }
      return e
    }, 'lefts')
    u.lefts = tl
    var el = i(function (t) {
      return function (e) {
        return e.length <= 1 ? u.copy(e) : e.slice().sort(t.compare)
      }
    }, 'sort')
    u.sort = el
    var rl = i(function (t, e, r) {
      for (var n = [], o = Math.min(t.length, e.length), s = 0; s < o; s++) n[s] = r(t[s], e[s])
      return n
    }, 'zipWith')
    u.zipWith = rl
    function wn(t, e) {
      return e === void 0
        ? function (r) {
            return wn(r, t)
          }
        : u.zipWith(t, e, function (r, n) {
            return [r, n]
          })
    }
    i(wn, 'zip')
    u.zip = wn
    var nl = i(function (t) {
      for (var e = [], r = [], n = 0; n < t.length; n++) (e[n] = t[n][0]), (r[n] = t[n][1])
      return [e, r]
    }, 'unzip')
    u.unzip = nl
    var il = i(function (t) {
      var e = $.prependAll(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : []
      }
    }, 'prependAll')
    u.prependAll = il
    var al = i(function (t) {
      var e = $.intersperse(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : u.copy(r)
      }
    }, 'intersperse')
    u.intersperse = al
    var ul = i(function (t) {
      var e = $.rotate(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : u.copy(r)
      }
    }, 'rotate')
    u.rotate = ul
    u.elem = X.elem
    var ol = i(function (t) {
      var e = $.uniq(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : u.copy(r)
      }
    }, 'uniq')
    u.uniq = ol
    var cl = i(function (t) {
      var e = $.sortBy(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : u.copy(r)
      }
    }, 'sortBy')
    u.sortBy = cl
    var fl = i(function (t) {
      var e = $.chop(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : []
      }
    }, 'chop')
    u.chop = fl
    var sl = i(function (t) {
      return function (e) {
        return t >= 1 && u.isNonEmpty(e)
          ? $.splitAt(t)(e)
          : u.isEmpty(e)
          ? [u.copy(e), []]
          : [[], u.copy(e)]
      }
    }, 'splitAt')
    u.splitAt = sl
    var ll = i(function (t) {
      var e = $.chunksOf(t)
      return function (r) {
        return u.isNonEmpty(r) ? e(r) : []
      }
    }, 'chunksOf')
    u.chunksOf = ll
    var hl = i(function (t) {
      return function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]
        return u.fromOption(t.apply(void 0, e))
      }
    }, 'fromOptionK')
    u.fromOptionK = hl
    function pl(t, e, r) {
      r === void 0 &&
        (r = i(function () {
          return !0
        }, 'g'))
      var n = i(function (o, s) {
        return u.isNonEmpty(s)
          ? j.pipe(
              $.head(s),
              u.chain(function (h) {
                return n(j.pipe(o, u.append(h)), $.tail(s))
              })
            )
          : r.apply(void 0, o)
          ? [e.apply(void 0, o)]
          : []
      }, 'go')
      return n([], t)
    }
    i(pl, 'comprehension')
    u.comprehension = pl
    var dl = i(function (t) {
      return function (e) {
        return u.isEmpty(e) ? u.copy(t) : u.isEmpty(t) ? u.copy(e) : e.concat(t)
      }
    }, 'concatW')
    u.concatW = dl
    u.concat = u.concatW
    function dr(t) {
      var e = $.union(t)
      return function (r, n) {
        if (n === void 0) {
          var o = dr(t)
          return function (s) {
            return o(s, r)
          }
        }
        return u.isNonEmpty(r) && u.isNonEmpty(n)
          ? e(n)(r)
          : u.isNonEmpty(r)
          ? u.copy(r)
          : u.copy(n)
      }
    }
    i(dr, 'union')
    u.union = dr
    function vr(t) {
      var e = u.elem(t)
      return function (r, n) {
        if (n === void 0) {
          var o = vr(t)
          return function (s) {
            return o(s, r)
          }
        }
        return r.filter(function (s) {
          return e(s, n)
        })
      }
    }
    i(vr, 'intersection')
    u.intersection = vr
    function mr(t) {
      var e = u.elem(t)
      return function (r, n) {
        if (n === void 0) {
          var o = mr(t)
          return function (s) {
            return o(s, r)
          }
        }
        return r.filter(function (s) {
          return !e(s, n)
        })
      }
    }
    i(mr, 'difference')
    u.difference = mr
    var et = i(function (t, e) {
        return j.pipe(t, u.map(e))
      }, '_map'),
      me = i(function (t, e) {
        return j.pipe(t, u.mapWithIndex(e))
      }, '_mapWithIndex'),
      wt = i(function (t, e) {
        return j.pipe(t, u.ap(e))
      }, '_ap'),
      te = i(function (t, e) {
        return j.pipe(t, u.chain(e))
      }, '_chain'),
      ge = i(function (t, e) {
        return j.pipe(t, u.filter(e))
      }, '_filter'),
      ye = i(function (t, e) {
        return j.pipe(t, u.filterMap(e))
      }, '_filterMap'),
      Ie = i(function (t, e) {
        return j.pipe(t, u.partition(e))
      }, '_partition'),
      xe = i(function (t, e) {
        return j.pipe(t, u.partitionMap(e))
      }, '_partitionMap'),
      Wn = i(function (t, e) {
        return j.pipe(t, u.partitionWithIndex(e))
      }, '_partitionWithIndex'),
      Rn = i(function (t, e) {
        return j.pipe(t, u.partitionMapWithIndex(e))
      }, '_partitionMapWithIndex'),
      gr = i(function (t, e) {
        return j.pipe(t, u.alt(e))
      }, '_alt'),
      At = i(function (t, e, r) {
        return j.pipe(t, u.reduce(e, r))
      }, '_reduce'),
      Ft = i(function (t) {
        var e = u.foldMap(t)
        return function (r, n) {
          return j.pipe(r, e(n))
        }
      }, '_foldMap'),
      Bt = i(function (t, e, r) {
        return j.pipe(t, u.reduceRight(e, r))
      }, '_reduceRight'),
      yr = i(function (t, e, r) {
        return j.pipe(t, u.reduceWithIndex(e, r))
      }, '_reduceWithIndex'),
      Ir = i(function (t) {
        var e = u.foldMapWithIndex(t)
        return function (r, n) {
          return j.pipe(r, e(n))
        }
      }, '_foldMapWithIndex'),
      xr = i(function (t, e, r) {
        return j.pipe(t, u.reduceRightWithIndex(e, r))
      }, '_reduceRightWithIndex'),
      An = i(function (t, e) {
        return j.pipe(t, u.filterMapWithIndex(e))
      }, '_filterMapWithIndex'),
      En = i(function (t, e) {
        return j.pipe(t, u.filterWithIndex(e))
      }, '_filterWithIndex'),
      _n = i(function (t, e) {
        return j.pipe(t, u.extend(e))
      }, '_extend'),
      be = i(function (t) {
        var e = u.traverse(t)
        return function (r, n) {
          return j.pipe(r, e(n))
        }
      }, '_traverse'),
      qn = i(function (t) {
        var e = u.traverseWithIndex(t)
        return function (r, n) {
          return j.pipe(r, e(n))
        }
      }, '_traverseWithIndex'),
      vl = X._chainRecDepthFirst,
      ml = X._chainRecBreadthFirst
    u.of = $.of
    var gl = i(function () {
      return []
    }, 'zero')
    u.zero = gl
    var yl = i(function (t) {
      return function (e) {
        return e.map(function (r) {
          return t(r)
        })
      }
    }, 'map')
    u.map = yl
    var Il = i(function (t) {
      return u.chain(function (e) {
        return j.pipe(t, u.map(e))
      })
    }, 'ap')
    u.ap = Il
    var xl = i(function (t) {
      return function (e) {
        return j.pipe(
          e,
          u.chainWithIndex(function (r, n) {
            return t(n)
          })
        )
      }
    }, 'chain')
    u.chain = xl
    u.flatten = u.chain(j.identity)
    var bl = i(function (t) {
      return function (e) {
        return e.map(function (r, n) {
          return t(n, r)
        })
      }
    }, 'mapWithIndex')
    u.mapWithIndex = bl
    var Ml = i(function (t) {
      return function (e) {
        for (var r = [], n = 0; n < e.length; n++) {
          var o = t(n, e[n])
          at.isSome(o) && r.push(o.value)
        }
        return r
      }
    }, 'filterMapWithIndex')
    u.filterMapWithIndex = Ml
    var wl = i(function (t) {
      return u.filterMapWithIndex(function (e, r) {
        return t(r)
      })
    }, 'filterMap')
    u.filterMap = wl
    u.compact = u.filterMap(j.identity)
    var Wl = i(function (t) {
      for (var e = [], r = [], n = 0, o = t; n < o.length; n++) {
        var s = o[n]
        s._tag === 'Left' ? e.push(s.left) : r.push(s.right)
      }
      return hr.separated(e, r)
    }, 'separate')
    u.separate = Wl
    var Rl = i(function (t) {
      return function (e) {
        return e.filter(t)
      }
    }, 'filter')
    u.filter = Rl
    var Al = i(function (t) {
      return u.partitionWithIndex(function (e, r) {
        return t(r)
      })
    }, 'partition')
    u.partition = Al
    var El = i(function (t) {
      return function (e) {
        for (var r = [], n = [], o = 0; o < e.length; o++) {
          var s = e[o]
          t(o, s) ? n.push(s) : r.push(s)
        }
        return hr.separated(r, n)
      }
    }, 'partitionWithIndex')
    u.partitionWithIndex = El
    var _l = i(function (t) {
      return u.partitionMapWithIndex(function (e, r) {
        return t(r)
      })
    }, 'partitionMap')
    u.partitionMap = _l
    var ql = i(function (t) {
      return function (e) {
        for (var r = [], n = [], o = 0; o < e.length; o++) {
          var s = t(o, e[o])
          s._tag === 'Left' ? r.push(s.left) : n.push(s.right)
        }
        return hr.separated(r, n)
      }
    }, 'partitionMapWithIndex')
    u.partitionMapWithIndex = ql
    var Sl = i(function (t) {
      return function (e) {
        return e.concat(t())
      }
    }, 'altW')
    u.altW = Sl
    u.alt = u.altW
    var Ol = i(function (t) {
      return function (e) {
        return e.filter(function (r, n) {
          return t(n, r)
        })
      }
    }, 'filterWithIndex')
    u.filterWithIndex = Ol
    var Ul = i(function (t) {
      return function (e) {
        return e.map(function (r, n) {
          return t(e.slice(n))
        })
      }
    }, 'extend')
    u.extend = Ul
    u.duplicate = u.extend(j.identity)
    u.foldMap = X.foldMap
    u.foldMapWithIndex = X.foldMapWithIndex
    u.reduce = X.reduce
    u.reduceWithIndex = X.reduceWithIndex
    u.reduceRight = X.reduceRight
    u.reduceRightWithIndex = X.reduceRightWithIndex
    var Nl = i(function (t) {
      var e = u.traverseWithIndex(t)
      return function (r) {
        return e(function (n, o) {
          return r(o)
        })
      }
    }, 'traverse')
    u.traverse = Nl
    var Fl = i(function (t) {
      return function (e) {
        return At(e, t.of(u.zero()), function (r, n) {
          return t.ap(
            t.map(r, function (o) {
              return function (s) {
                return j.pipe(o, u.append(s))
              }
            }),
            n
          )
        })
      }
    }, 'sequence')
    u.sequence = Fl
    var Bl = i(function (t) {
      return function (e) {
        return u.reduceWithIndex(t.of(u.zero()), function (r, n, o) {
          return t.ap(
            t.map(n, function (s) {
              return function (h) {
                return j.pipe(s, u.append(h))
              }
            }),
            e(r, o)
          )
        })
      }
    }, 'traverseWithIndex')
    u.traverseWithIndex = Bl
    var Ll = i(function (t) {
      var e = br(t)
      return function (r) {
        return function (n) {
          return e(n, r)
        }
      }
    }, 'wither')
    u.wither = Ll
    var Tl = i(function (t) {
      var e = Mr(t)
      return function (r) {
        return function (n) {
          return e(n, r)
        }
      }
    }, 'wilt')
    u.wilt = Tl
    var zl = i(function (t, e) {
      for (var r = [], n = t; ; ) {
        var o = e(n)
        if (at.isSome(o)) {
          var s = o.value,
            h = s[0],
            y = s[1]
          r.push(h), (n = y)
        } else break
      }
      return r
    }, 'unfold')
    u.unfold = zl
    u.URI = 'Array'
    u.getShow = X.getShow
    var Pl = i(function () {
      return {
        concat: function (t, e) {
          return t.concat(e)
        },
      }
    }, 'getSemigroup')
    u.getSemigroup = Pl
    var Dl = i(function () {
      return { concat: u.getSemigroup().concat, empty: [] }
    }, 'getMonoid')
    u.getMonoid = Dl
    u.getEq = X.getEq
    u.getOrd = X.getOrd
    var Cl = i(function (t) {
      var e = dr(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getUnionSemigroup')
    u.getUnionSemigroup = Cl
    var jl = i(function (t) {
      return { concat: u.getUnionSemigroup(t).concat, empty: [] }
    }, 'getUnionMonoid')
    u.getUnionMonoid = jl
    var $l = i(function (t) {
      var e = vr(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getIntersectionSemigroup')
    u.getIntersectionSemigroup = $l
    var kl = i(function (t) {
      var e = mr(t)
      return {
        concat: function (r, n) {
          return e(n)(r)
        },
      }
    }, 'getDifferenceMagma')
    u.getDifferenceMagma = kl
    u.Functor = { URI: u.URI, map: et }
    u.flap = bn.flap(u.Functor)
    u.Pointed = { URI: u.URI, of: u.of }
    u.FunctorWithIndex = { URI: u.URI, map: et, mapWithIndex: me }
    u.Apply = { URI: u.URI, map: et, ap: wt }
    u.apFirst = lr.apFirst(u.Apply)
    u.apSecond = lr.apSecond(u.Apply)
    u.Applicative = { URI: u.URI, map: et, ap: wt, of: u.of }
    u.Chain = { URI: u.URI, map: et, ap: wt, chain: te }
    u.chainFirst = xn.chainFirst(u.Chain)
    u.Monad = { URI: u.URI, map: et, ap: wt, of: u.of, chain: te }
    u.Unfoldable = { URI: u.URI, unfold: u.unfold }
    u.Alt = { URI: u.URI, map: et, alt: gr }
    u.Zero = { URI: u.URI, zero: u.zero }
    u.guard = Ms.guard(u.Zero, u.Pointed)
    u.Alternative = { URI: u.URI, map: et, ap: wt, of: u.of, alt: gr, zero: u.zero }
    u.Extend = { URI: u.URI, map: et, extend: _n }
    u.Compactable = { URI: u.URI, compact: u.compact, separate: u.separate }
    u.Filterable = {
      URI: u.URI,
      map: et,
      compact: u.compact,
      separate: u.separate,
      filter: ge,
      filterMap: ye,
      partition: Ie,
      partitionMap: xe,
    }
    u.FilterableWithIndex = {
      URI: u.URI,
      map: et,
      mapWithIndex: me,
      compact: u.compact,
      separate: u.separate,
      filter: ge,
      filterMap: ye,
      partition: Ie,
      partitionMap: xe,
      partitionMapWithIndex: Rn,
      partitionWithIndex: Wn,
      filterMapWithIndex: An,
      filterWithIndex: En,
    }
    u.Foldable = { URI: u.URI, reduce: At, foldMap: Ft, reduceRight: Bt }
    u.FoldableWithIndex = {
      URI: u.URI,
      reduce: At,
      foldMap: Ft,
      reduceRight: Bt,
      reduceWithIndex: yr,
      foldMapWithIndex: Ir,
      reduceRightWithIndex: xr,
    }
    u.Traversable = {
      URI: u.URI,
      map: et,
      reduce: At,
      foldMap: Ft,
      reduceRight: Bt,
      traverse: be,
      sequence: u.sequence,
    }
    u.TraversableWithIndex = {
      URI: u.URI,
      map: et,
      mapWithIndex: me,
      reduce: At,
      foldMap: Ft,
      reduceRight: Bt,
      reduceWithIndex: yr,
      foldMapWithIndex: Ir,
      reduceRightWithIndex: xr,
      traverse: be,
      sequence: u.sequence,
      traverseWithIndex: qn,
    }
    var br = pr.witherDefault(u.Traversable, u.Compactable),
      Mr = pr.wiltDefault(u.Traversable, u.Compactable)
    u.Witherable = {
      URI: u.URI,
      map: et,
      compact: u.compact,
      separate: u.separate,
      filter: ge,
      filterMap: ye,
      partition: Ie,
      partitionMap: xe,
      reduce: At,
      foldMap: Ft,
      reduceRight: Bt,
      traverse: be,
      sequence: u.sequence,
      wither: br,
      wilt: Mr,
    }
    u.chainRecDepthFirst = X.chainRecDepthFirst
    u.ChainRecDepthFirst = { URI: u.URI, map: et, ap: wt, chain: te, chainRec: vl }
    u.chainRecBreadthFirst = X.chainRecBreadthFirst
    u.ChainRecBreadthFirst = { URI: u.URI, map: et, ap: wt, chain: te, chainRec: ml }
    u.filterE = pr.filterE(u.Witherable)
    u.FromEither = { URI: u.URI, fromEither: u.fromEither }
    u.fromEitherK = bs.fromEitherK(u.FromEither)
    u.unsafeInsertAt = $.unsafeInsertAt
    var Zl = i(function (t, e, r) {
      return u.isNonEmpty(r) ? $.unsafeUpdateAt(t, e, r) : []
    }, 'unsafeUpdateAt')
    u.unsafeUpdateAt = Zl
    var Kl = i(function (t, e) {
      var r = e.slice()
      return r.splice(t, 1), r
    }, 'unsafeDeleteAt')
    u.unsafeDeleteAt = Kl
    u.every = X.every
    var Hl = i(function (t) {
      return function (e) {
        return e.some(t)
      }
    }, 'some')
    u.some = Hl
    u.exists = u.some
    u.Do = u.of(at.emptyRecord)
    u.bindTo = bn.bindTo(u.Functor)
    u.bind = xn.bind(u.Chain)
    u.apS = lr.apS(u.Apply)
    u.range = $.range
    u.empty = []
    u.cons = $.cons
    u.snoc = $.snoc
    u.prependToAll = u.prependAll
    u.array = {
      URI: u.URI,
      compact: u.compact,
      separate: u.separate,
      map: et,
      ap: wt,
      of: u.of,
      chain: te,
      filter: ge,
      filterMap: ye,
      partition: Ie,
      partitionMap: xe,
      mapWithIndex: me,
      partitionMapWithIndex: Rn,
      partitionWithIndex: Wn,
      filterMapWithIndex: An,
      filterWithIndex: En,
      alt: gr,
      zero: u.zero,
      unfold: u.unfold,
      reduce: At,
      foldMap: Ft,
      reduceRight: Bt,
      traverse: be,
      sequence: u.sequence,
      reduceWithIndex: yr,
      foldMapWithIndex: Ir,
      reduceRightWithIndex: xr,
      traverseWithIndex: qn,
      extend: _n,
      wither: br,
      wilt: Mr,
    }
  })
  var Tn = J((Rr, Ln) => {
    ;(function (t) {
      'use strict'
      var e = 2e3,
        r = { s: 1, n: 0, d: 1 }
      function n(v) {
        function m() {
          var p = Error.apply(this, arguments)
          ;(p.name = this.name = v), (this.stack = p.stack), (this.message = p.message)
        }
        i(m, 'errorConstructor')
        function l() {}
        return (
          i(l, 'IntermediateInheritor'), (l.prototype = Error.prototype), (m.prototype = new l()), m
        )
      }
      i(n, 'createError')
      var o = (_.DivisionByZero = n('DivisionByZero')),
        s = (_.InvalidParameter = n('InvalidParameter'))
      function h(v, m) {
        return isNaN((v = parseInt(v, 10))) && y(), v * m
      }
      i(h, 'assign')
      function y() {
        throw new s()
      }
      i(y, 'throwInvalidParam')
      function R(v) {
        for (var m = {}, l = v, p = 2, d = 4; d <= l; ) {
          for (; l % p === 0; ) (l /= p), (m[p] = (m[p] || 0) + 1)
          d += 1 + 2 * p++
        }
        return l !== v ? l > 1 && (m[l] = (m[l] || 0) + 1) : (m[v] = (m[v] || 0) + 1), m
      }
      i(R, 'factorize')
      var E = i(function (v, m) {
        var l = 0,
          p = 1,
          d = 1,
          g = 0,
          I = 0,
          D = 0,
          N = 1,
          Y = 1,
          w = 0,
          q = 1,
          A = 1,
          W = 1,
          mt = 1e7,
          ft
        if (v != null)
          if (m !== void 0) (l = v), (p = m), (d = l * p)
          else
            switch (typeof v) {
              case 'object': {
                'd' in v && 'n' in v
                  ? ((l = v.n), (p = v.d), 's' in v && (l *= v.s))
                  : 0 in v
                  ? ((l = v[0]), 1 in v && (p = v[1]))
                  : y(),
                  (d = l * p)
                break
              }
              case 'number': {
                if ((v < 0 && ((d = v), (v = -v)), v % 1 === 0)) l = v
                else if (v > 0) {
                  for (
                    v >= 1 &&
                    ((Y = Math.pow(10, Math.floor(1 + Math.log(v) / Math.LN10))), (v /= Y));
                    q <= mt && W <= mt;

                  )
                    if (((ft = (w + A) / (q + W)), v === ft)) {
                      q + W <= mt
                        ? ((l = w + A), (p = q + W))
                        : W > q
                        ? ((l = A), (p = W))
                        : ((l = w), (p = q))
                      break
                    } else
                      v > ft ? ((w += A), (q += W)) : ((A += w), (W += q)),
                        q > mt ? ((l = A), (p = W)) : ((l = w), (p = q))
                  l *= Y
                } else (isNaN(v) || isNaN(m)) && (p = l = NaN)
                break
              }
              case 'string':
                if (
                  ((q = v.match(/\d+|./g)),
                  q === null && y(),
                  q[w] === '-' ? ((d = -1), w++) : q[w] === '+' && w++,
                  q.length === w + 1
                    ? (I = h(q[w++], d))
                    : q[w + 1] === '.' || q[w] === '.'
                    ? (q[w] !== '.' && (g = h(q[w++], d)),
                      w++,
                      (w + 1 === q.length ||
                        (q[w + 1] === '(' && q[w + 3] === ')') ||
                        (q[w + 1] === "'" && q[w + 3] === "'")) &&
                        ((I = h(q[w], d)), (N = Math.pow(10, q[w].length)), w++),
                      ((q[w] === '(' && q[w + 2] === ')') || (q[w] === "'" && q[w + 2] === "'")) &&
                        ((D = h(q[w + 1], d)), (Y = Math.pow(10, q[w + 1].length) - 1), (w += 3)))
                    : q[w + 1] === '/' || q[w + 1] === ':'
                    ? ((I = h(q[w], d)), (N = h(q[w + 2], 1)), (w += 3))
                    : q[w + 3] === '/' &&
                      q[w + 1] === ' ' &&
                      ((g = h(q[w], d)), (I = h(q[w + 2], d)), (N = h(q[w + 4], 1)), (w += 5)),
                  q.length <= w)
                ) {
                  ;(p = N * Y), (d = l = D + p * g + Y * I)
                  break
                }
              default:
                y()
            }
        if (p === 0) throw new o()
        ;(r.s = d < 0 ? -1 : 1), (r.n = Math.abs(l)), (r.d = Math.abs(p))
      }, 'parse')
      function H(v, m, l) {
        for (var p = 1; m > 0; v = (v * v) % l, m >>= 1) m & 1 && (p = (p * v) % l)
        return p
      }
      i(H, 'modpow')
      function G(v, m) {
        for (; m % 2 === 0; m /= 2);
        for (; m % 5 === 0; m /= 5);
        if (m === 1) return 0
        for (var l = 10 % m, p = 1; l !== 1; p++) if (((l = (l * 10) % m), p > e)) return 0
        return p
      }
      i(G, 'cycleLen')
      function ht(v, m, l) {
        for (var p = 1, d = H(10, l, m), g = 0; g < 300; g++) {
          if (p === d) return g
          ;(p = (p * 10) % m), (d = (d * 10) % m)
        }
        return 0
      }
      i(ht, 'cycleStart')
      function rt(v, m) {
        if (!v) return m
        if (!m) return v
        for (;;) {
          if (((v %= m), !v)) return m
          if (((m %= v), !m)) return v
        }
      }
      i(rt, 'gcd')
      function _(v, m) {
        if (!(this instanceof _)) return new _(v, m)
        E(v, m), (v = rt(r.d, r.n)), (this.s = r.s), (this.n = r.n / v), (this.d = r.d / v)
      }
      i(_, 'Fraction'),
        (_.prototype = {
          s: 1,
          n: 0,
          d: 1,
          abs: function () {
            return new _(this.n, this.d)
          },
          neg: function () {
            return new _(-this.s * this.n, this.d)
          },
          add: function (v, m) {
            return E(v, m), new _(this.s * this.n * r.d + r.s * this.d * r.n, this.d * r.d)
          },
          sub: function (v, m) {
            return E(v, m), new _(this.s * this.n * r.d - r.s * this.d * r.n, this.d * r.d)
          },
          mul: function (v, m) {
            return E(v, m), new _(this.s * r.s * this.n * r.n, this.d * r.d)
          },
          div: function (v, m) {
            return E(v, m), new _(this.s * r.s * this.n * r.d, this.d * r.n)
          },
          clone: function () {
            return new _(this)
          },
          mod: function (v, m) {
            return isNaN(this.n) || isNaN(this.d)
              ? new _(NaN)
              : v === void 0
              ? new _((this.s * this.n) % this.d, 1)
              : (E(v, m),
                r.n === 0 && this.d === 0 && _(0, 0),
                new _((this.s * (r.d * this.n)) % (r.n * this.d), r.d * this.d))
          },
          gcd: function (v, m) {
            return E(v, m), new _(rt(r.n, this.n) * rt(r.d, this.d), r.d * this.d)
          },
          lcm: function (v, m) {
            return (
              E(v, m),
              r.n === 0 && this.n === 0
                ? new _()
                : new _(r.n * this.n, rt(r.n, this.n) * rt(r.d, this.d))
            )
          },
          ceil: function (v) {
            return (
              (v = Math.pow(10, v || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new _(NaN)
                : new _(Math.ceil((v * this.s * this.n) / this.d), v)
            )
          },
          floor: function (v) {
            return (
              (v = Math.pow(10, v || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new _(NaN)
                : new _(Math.floor((v * this.s * this.n) / this.d), v)
            )
          },
          round: function (v) {
            return (
              (v = Math.pow(10, v || 0)),
              isNaN(this.n) || isNaN(this.d)
                ? new _(NaN)
                : new _(Math.round((v * this.s * this.n) / this.d), v)
            )
          },
          inverse: function () {
            return new _(this.s * this.d, this.n)
          },
          pow: function (v, m) {
            if ((E(v, m), r.d === 1))
              return r.s < 0
                ? new _(Math.pow(this.s * this.d, r.n), Math.pow(this.n, r.n))
                : new _(Math.pow(this.s * this.n, r.n), Math.pow(this.d, r.n))
            if (this.s < 0) return null
            var l = R(this.n),
              p = R(this.d),
              d = 1,
              g = 1
            for (var I in l)
              if (I !== '1') {
                if (I === '0') {
                  d = 0
                  break
                }
                if (((l[I] *= r.n), l[I] % r.d === 0)) l[I] /= r.d
                else return null
                d *= Math.pow(I, l[I])
              }
            for (var I in p)
              if (I !== '1') {
                if (((p[I] *= r.n), p[I] % r.d === 0)) p[I] /= r.d
                else return null
                g *= Math.pow(I, p[I])
              }
            return r.s < 0 ? new _(g, d) : new _(d, g)
          },
          equals: function (v, m) {
            return E(v, m), this.s * this.n * r.d === r.s * r.n * this.d
          },
          compare: function (v, m) {
            E(v, m)
            var l = this.s * this.n * r.d - r.s * r.n * this.d
            return (0 < l) - (l < 0)
          },
          simplify: function (v) {
            if (isNaN(this.n) || isNaN(this.d)) return this
            var m = this.abs().toContinued()
            v = v || 0.001
            function l(g) {
              return g.length === 1 ? new _(g[0]) : l(g.slice(1)).inverse().add(g[0])
            }
            i(l, 'rec')
            for (var p = 0; p < m.length; p++) {
              var d = l(m.slice(0, p + 1))
              if (d.sub(this.abs()).abs().valueOf() < v) return d.mul(this.s)
            }
            return this
          },
          divisible: function (v, m) {
            return E(v, m), !(!(r.n * this.d) || (this.n * r.d) % (r.n * this.d))
          },
          valueOf: function () {
            return (this.s * this.n) / this.d
          },
          toFraction: function (v) {
            var m,
              l = '',
              p = this.n,
              d = this.d
            return (
              this.s < 0 && (l += '-'),
              d === 1
                ? (l += p)
                : (v && (m = Math.floor(p / d)) > 0 && ((l += m), (l += ' '), (p %= d)),
                  (l += p),
                  (l += '/'),
                  (l += d)),
              l
            )
          },
          toLatex: function (v) {
            var m,
              l = '',
              p = this.n,
              d = this.d
            return (
              this.s < 0 && (l += '-'),
              d === 1
                ? (l += p)
                : (v && (m = Math.floor(p / d)) > 0 && ((l += m), (p %= d)),
                  (l += '\\frac{'),
                  (l += p),
                  (l += '}{'),
                  (l += d),
                  (l += '}')),
              l
            )
          },
          toContinued: function () {
            var v,
              m = this.n,
              l = this.d,
              p = []
            if (isNaN(m) || isNaN(l)) return p
            do p.push(Math.floor(m / l)), (v = m % l), (m = l), (l = v)
            while (m !== 1)
            return p
          },
          toString: function (v) {
            var m,
              l = this.n,
              p = this.d
            if (isNaN(l) || isNaN(p)) return 'NaN'
            v = v || 15
            var d = G(l, p),
              g = ht(l, p, d),
              I = this.s === -1 ? '-' : ''
            if (((I += (l / p) | 0), (l %= p), (l *= 10), l && (I += '.'), d)) {
              for (var D = g; D--; ) (I += (l / p) | 0), (l %= p), (l *= 10)
              I += '('
              for (var D = d; D--; ) (I += (l / p) | 0), (l %= p), (l *= 10)
              I += ')'
            } else for (var D = v; l && D--; ) (I += (l / p) | 0), (l %= p), (l *= 10)
            return I
          },
        }),
        typeof define == 'function' && define.amd
          ? define([], function () {
              return _
            })
          : typeof Rr == 'object'
          ? (Object.defineProperty(_, '__esModule', { value: !0 }),
            (_.default = _),
            (_.Fraction = _),
            (Ln.exports = _))
          : (t.Fraction = _)
    })(Rr)
  })
  var On = Tt(Re()),
    Un = Tt(Sn()),
    we = Tt(Ke()),
    Nn = Tt(ue()),
    Vl = Object.create,
    Wr = Object.defineProperty,
    Gl = Object.getOwnPropertyDescriptor,
    Xl = Object.getOwnPropertyNames,
    Ql = Object.getPrototypeOf,
    Yl = Object.prototype.hasOwnProperty,
    Jl = i((t) => Wr(t, '__esModule', { value: !0 }), 'pt'),
    th = i((t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), 'wt'),
    eh = i((t, e, r, n) => {
      if ((e && typeof e == 'object') || typeof e == 'function')
        for (let o of Xl(e))
          !Yl.call(t, o) &&
            (r || o !== 'default') &&
            Wr(t, o, { get: () => e[o], enumerable: !(n = Gl(e, o)) || n.enumerable })
      return t
    }, 'vt'),
    rh = i(
      (t, e) =>
        eh(
          Jl(
            Wr(
              t != null ? Vl(Ql(t)) : {},
              'default',
              !e && t && t.__esModule
                ? { get: () => t.default, enumerable: !0 }
                : { value: t, enumerable: !0 }
            )
          ),
          t
        ),
      'yt'
    ),
    nh = th((t, e) => {
      ;(function (r) {
        'use strict'
        var n = 2e3,
          o = { s: 1, n: 0, d: 1 }
        function s(l) {
          function p() {
            var g = Error.apply(this, arguments)
            ;(g.name = this.name = l), (this.stack = g.stack), (this.message = g.message)
          }
          i(p, 'u')
          function d() {}
          return i(d, 'a'), (d.prototype = Error.prototype), (p.prototype = new d()), p
        }
        i(s, 'i')
        var h = (m.DivisionByZero = s('DivisionByZero')),
          y = (m.InvalidParameter = s('InvalidParameter'))
        function R(l, p) {
          return isNaN((l = parseInt(l, 10))) && E(), l * p
        }
        i(R, 'l')
        function E() {
          throw new y()
        }
        i(E, 'f')
        function H(l) {
          for (var p = {}, d = l, g = 2, I = 4; I <= d; ) {
            for (; d % g === 0; ) (d /= g), (p[g] = (p[g] || 0) + 1)
            I += 1 + 2 * g++
          }
          return d !== l ? d > 1 && (p[d] = (p[d] || 0) + 1) : (p[l] = (p[l] || 0) + 1), p
        }
        i(H, 'M')
        var G = i(function (l, p) {
          var d = 0,
            g = 1,
            I = 1,
            D = 0,
            N = 0,
            Y = 0,
            w = 1,
            q = 1,
            A = 0,
            W = 1,
            mt = 1,
            ft = 1,
            re = 1e7,
            We
          if (l != null)
            if (p !== void 0) (d = l), (g = p), (I = d * g)
            else
              switch (typeof l) {
                case 'object': {
                  'd' in l && 'n' in l
                    ? ((d = l.n), (g = l.d), 's' in l && (d *= l.s))
                    : 0 in l
                    ? ((d = l[0]), 1 in l && (g = l[1]))
                    : E(),
                    (I = d * g)
                  break
                }
                case 'number': {
                  if ((l < 0 && ((I = l), (l = -l)), l % 1 === 0)) d = l
                  else if (l > 0) {
                    for (
                      l >= 1 &&
                      ((q = Math.pow(10, Math.floor(1 + Math.log(l) / Math.LN10))), (l /= q));
                      W <= re && ft <= re;

                    )
                      if (((We = (A + mt) / (W + ft)), l === We)) {
                        W + ft <= re
                          ? ((d = A + mt), (g = W + ft))
                          : ft > W
                          ? ((d = mt), (g = ft))
                          : ((d = A), (g = W))
                        break
                      } else
                        l > We ? ((A += mt), (W += ft)) : ((mt += A), (ft += W)),
                          W > re ? ((d = mt), (g = ft)) : ((d = A), (g = W))
                    d *= q
                  } else (isNaN(l) || isNaN(p)) && (g = d = NaN)
                  break
                }
                case 'string':
                  if (
                    ((W = l.match(/\d+|./g)),
                    W === null && E(),
                    W[A] === '-' ? ((I = -1), A++) : W[A] === '+' && A++,
                    W.length === A + 1
                      ? (N = R(W[A++], I))
                      : W[A + 1] === '.' || W[A] === '.'
                      ? (W[A] !== '.' && (D = R(W[A++], I)),
                        A++,
                        (A + 1 === W.length ||
                          (W[A + 1] === '(' && W[A + 3] === ')') ||
                          (W[A + 1] === "'" && W[A + 3] === "'")) &&
                          ((N = R(W[A], I)), (w = Math.pow(10, W[A].length)), A++),
                        ((W[A] === '(' && W[A + 2] === ')') ||
                          (W[A] === "'" && W[A + 2] === "'")) &&
                          ((Y = R(W[A + 1], I)), (q = Math.pow(10, W[A + 1].length) - 1), (A += 3)))
                      : W[A + 1] === '/' || W[A + 1] === ':'
                      ? ((N = R(W[A], I)), (w = R(W[A + 2], 1)), (A += 3))
                      : W[A + 3] === '/' &&
                        W[A + 1] === ' ' &&
                        ((D = R(W[A], I)), (N = R(W[A + 2], I)), (w = R(W[A + 4], 1)), (A += 5)),
                    W.length <= A)
                  ) {
                    ;(g = w * q), (I = d = Y + g * D + q * N)
                    break
                  }
                default:
                  E()
              }
          if (g === 0) throw new h()
          ;(o.s = I < 0 ? -1 : 1), (o.n = Math.abs(d)), (o.d = Math.abs(g))
        }, 'w')
        function ht(l, p, d) {
          for (var g = 1; p > 0; l = (l * l) % d, p >>= 1) p & 1 && (g = (g * l) % d)
          return g
        }
        i(ht, 'A')
        function rt(l, p) {
          for (; p % 2 === 0; p /= 2);
          for (; p % 5 === 0; p /= 5);
          if (p === 1) return 0
          for (var d = 10 % p, g = 1; d !== 1; g++) if (((d = (d * 10) % p), g > n)) return 0
          return g
        }
        i(rt, 'E')
        function _(l, p, d) {
          for (var g = 1, I = ht(10, d, p), D = 0; D < 300; D++) {
            if (g === I) return D
            ;(g = (g * 10) % p), (I = (I * 10) % p)
          }
          return 0
        }
        i(_, 'k')
        function v(l, p) {
          if (!l) return p
          if (!p) return l
          for (;;) {
            if (((l %= p), !l)) return p
            if (((p %= l), !p)) return l
          }
        }
        i(v, 'N')
        function m(l, p) {
          if (!(this instanceof m)) return new m(l, p)
          G(l, p), (l = v(o.d, o.n)), (this.s = o.s), (this.n = o.n / l), (this.d = o.d / l)
        }
        i(m, 'm'),
          (m.prototype = {
            s: 1,
            n: 0,
            d: 1,
            abs: function () {
              return new m(this.n, this.d)
            },
            neg: function () {
              return new m(-this.s * this.n, this.d)
            },
            add: function (l, p) {
              return G(l, p), new m(this.s * this.n * o.d + o.s * this.d * o.n, this.d * o.d)
            },
            sub: function (l, p) {
              return G(l, p), new m(this.s * this.n * o.d - o.s * this.d * o.n, this.d * o.d)
            },
            mul: function (l, p) {
              return G(l, p), new m(this.s * o.s * this.n * o.n, this.d * o.d)
            },
            div: function (l, p) {
              return G(l, p), new m(this.s * o.s * this.n * o.d, this.d * o.n)
            },
            clone: function () {
              return new m(this)
            },
            mod: function (l, p) {
              return isNaN(this.n) || isNaN(this.d)
                ? new m(NaN)
                : l === void 0
                ? new m((this.s * this.n) % this.d, 1)
                : (G(l, p),
                  o.n === 0 && this.d === 0 && m(0, 0),
                  new m((this.s * (o.d * this.n)) % (o.n * this.d), o.d * this.d))
            },
            gcd: function (l, p) {
              return G(l, p), new m(v(o.n, this.n) * v(o.d, this.d), o.d * this.d)
            },
            lcm: function (l, p) {
              return (
                G(l, p),
                o.n === 0 && this.n === 0
                  ? new m()
                  : new m(o.n * this.n, v(o.n, this.n) * v(o.d, this.d))
              )
            },
            ceil: function (l) {
              return (
                (l = Math.pow(10, l || 0)),
                isNaN(this.n) || isNaN(this.d)
                  ? new m(NaN)
                  : new m(Math.ceil((l * this.s * this.n) / this.d), l)
              )
            },
            floor: function (l) {
              return (
                (l = Math.pow(10, l || 0)),
                isNaN(this.n) || isNaN(this.d)
                  ? new m(NaN)
                  : new m(Math.floor((l * this.s * this.n) / this.d), l)
              )
            },
            round: function (l) {
              return (
                (l = Math.pow(10, l || 0)),
                isNaN(this.n) || isNaN(this.d)
                  ? new m(NaN)
                  : new m(Math.round((l * this.s * this.n) / this.d), l)
              )
            },
            inverse: function () {
              return new m(this.s * this.d, this.n)
            },
            pow: function (l, p) {
              if ((G(l, p), o.d === 1))
                return o.s < 0
                  ? new m(Math.pow(this.s * this.d, o.n), Math.pow(this.n, o.n))
                  : new m(Math.pow(this.s * this.n, o.n), Math.pow(this.d, o.n))
              if (this.s < 0) return null
              var d = H(this.n),
                g = H(this.d),
                I = 1,
                D = 1
              for (var N in d)
                if (N !== '1') {
                  if (N === '0') {
                    I = 0
                    break
                  }
                  if (((d[N] *= o.n), d[N] % o.d === 0)) d[N] /= o.d
                  else return null
                  I *= Math.pow(N, d[N])
                }
              for (var N in g)
                if (N !== '1') {
                  if (((g[N] *= o.n), g[N] % o.d === 0)) g[N] /= o.d
                  else return null
                  D *= Math.pow(N, g[N])
                }
              return o.s < 0 ? new m(D, I) : new m(I, D)
            },
            equals: function (l, p) {
              return G(l, p), this.s * this.n * o.d === o.s * o.n * this.d
            },
            compare: function (l, p) {
              G(l, p)
              var d = this.s * this.n * o.d - o.s * o.n * this.d
              return (0 < d) - (d < 0)
            },
            simplify: function (l) {
              if (isNaN(this.n) || isNaN(this.d)) return this
              var p = this.abs().toContinued()
              l = l || 0.001
              function d(D) {
                return D.length === 1 ? new m(D[0]) : d(D.slice(1)).inverse().add(D[0])
              }
              i(d, 'a')
              for (var g = 0; g < p.length; g++) {
                var I = d(p.slice(0, g + 1))
                if (I.sub(this.abs()).abs().valueOf() < l) return I.mul(this.s)
              }
              return this
            },
            divisible: function (l, p) {
              return G(l, p), !(!(o.n * this.d) || (this.n * o.d) % (o.n * this.d))
            },
            valueOf: function () {
              return (this.s * this.n) / this.d
            },
            toFraction: function (l) {
              var p,
                d = '',
                g = this.n,
                I = this.d
              return (
                this.s < 0 && (d += '-'),
                I === 1
                  ? (d += g)
                  : (l && (p = Math.floor(g / I)) > 0 && ((d += p), (d += ' '), (g %= I)),
                    (d += g),
                    (d += '/'),
                    (d += I)),
                d
              )
            },
            toLatex: function (l) {
              var p,
                d = '',
                g = this.n,
                I = this.d
              return (
                this.s < 0 && (d += '-'),
                I === 1
                  ? (d += g)
                  : (l && (p = Math.floor(g / I)) > 0 && ((d += p), (g %= I)),
                    (d += '\\frac{'),
                    (d += g),
                    (d += '}{'),
                    (d += I),
                    (d += '}')),
                d
              )
            },
            toContinued: function () {
              var l,
                p = this.n,
                d = this.d,
                g = []
              if (isNaN(p) || isNaN(d)) return g
              do g.push(Math.floor(p / d)), (l = p % d), (p = d), (d = l)
              while (p !== 1)
              return g
            },
            toString: function (l) {
              var p,
                d = this.n,
                g = this.d
              if (isNaN(d) || isNaN(g)) return 'NaN'
              l = l || 15
              var I = rt(d, g),
                D = _(d, g, I),
                N = this.s === -1 ? '-' : ''
              if (((N += (d / g) | 0), (d %= g), (d *= 10), d && (N += '.'), I)) {
                for (var Y = D; Y--; ) (N += (d / g) | 0), (d %= g), (d *= 10)
                N += '('
                for (var Y = I; Y--; ) (N += (d / g) | 0), (d %= g), (d *= 10)
                N += ')'
              } else for (var Y = l; d && Y--; ) (N += (d / g) | 0), (d %= g), (d *= 10)
              return N
            },
          }),
          typeof define == 'function' && define.amd
            ? define([], function () {
                return m
              })
            : typeof t == 'object'
            ? (Object.defineProperty(m, '__esModule', { value: !0 }),
              (m.default = m),
              (m.Fraction = m),
              (e.exports = m))
            : (r.Fraction = m)
      })(t)
    }),
    ih = rh(nh())
  function Me(t) {
    let e = ah(t)
    return new ih.default(e).valueOf() * Math.PI
  }
  i(Me, 'R')
  function ah(t) {
    return t.replace(/(\d+)π/g, '$1').replace(/π/g, '1')
  }
  i(ah, 'xt')
  var uh = Object.prototype.toString.call({}),
    oh = '!recursion-limit!',
    ch = 10
  function Et(t, e = ch) {
    return fh(t) || sh(t, e) || lh(t, e)
  }
  i(Et, 'P')
  function fh(t) {
    if (t === null) return 'null'
    if (t === void 0) return 'undefined'
    if (typeof t == 'string') return `"${t}"`
    if (typeof t == 'number') return String(t)
  }
  i(fh, 'Tt')
  function sh(t, e) {
    if (e === 0) return oh
    if (t instanceof Map) return hh(t, e)
    if (t instanceof Set) return ph(t, e)
    if (((r) => r[Symbol.iterator] !== void 0)(t)) return dh(t, e)
  }
  i(sh, 'Et')
  function lh(t, e) {
    let r = String(t)
    return r !== uh ? r : vh(t, e)
  }
  i(lh, 'kt')
  function hh(t, e) {
    let r = []
    for (let [n, o] of t.entries()) {
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      let s = Et(n, e - 1),
        h = Et(o, e - 1)
      r.push(`${s}: ${h}`)
    }
    return `Map{${r.join(', ')}}`
  }
  i(hh, 'Nt')
  function ph(t, e) {
    let r = []
    for (let n of t) {
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      r.push(Et(n, e - 1))
    }
    return `Set{${r.join(', ')}}`
  }
  i(ph, 'qt')
  function dh(t, e) {
    let r = []
    for (let n of t) {
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      r.push(Et(n, e - 1))
    }
    return `${Array.isArray(t) ? '' : t.constructor.name}[${r.join(', ')}]`
  }
  i(dh, 'zt')
  function vh(t, e) {
    let r = []
    for (let o in t) {
      if (!Object.prototype.hasOwnProperty.call(t, o)) continue
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      let s = t[o],
        h = Et(o, e - 1),
        y = Et(s, e - 1)
      r.push(`${h}: ${y}`)
    }
    let n = t.constructor.name
    return `${n === {}.constructor.name ? '' : `(Type: ${n})`}{${r.join(', ')}}`
  }
  i(vh, 'Ot')
  var wr = 0,
    ut = i(
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
            wr++
          try {
            this.details =
              wr === 1
                ? Et(this.detailsObj)
                : '(failed to describe detailsObj due to possibly re-entrancy)'
          } catch (r) {
            console.error(r),
              (this.details = '(failed to describe detailsObj, see the console for details)')
          } finally {
            wr--
          }
        }
      },
      'T'
    ),
    mh = [
      { character: '\xBD', ref: '\xBD', expanded: '1/2', value: 0.5 },
      { character: '\xBC', ref: '\xBC', expanded: '1/4', value: 0.25 },
      { character: '\xBE', ref: '\xBE', expanded: '3/4', value: 0.75 },
      { character: '\u2153', ref: '\u2153', expanded: '1/3', value: 0.3333333333333333 },
      { character: '\u2154', ref: '\u2154', expanded: '2/3', value: 0.6666666666666666 },
      { character: '\u2155', ref: '\u2155', expanded: '1/5', value: 0.2 },
      { character: '\u2156', ref: '\u2156', expanded: '2/5', value: 0.4 },
      { character: '\u2157', ref: '\u2157', expanded: '3/5', value: 0.6 },
      { character: '\u2158', ref: '\u2158', expanded: '4/5', value: 0.8 },
      { character: '\u2159', ref: '\u2159', expanded: '1/6', value: 0.16666666666666666 },
      { character: '\u215A', ref: '\u215A', expanded: '5/6', value: 0.8333333333333334 },
      { character: '\u2150', ref: '\u2150', expanded: '1/7', value: 0.14285714285714285 },
      { character: '\u215B', ref: '\u215B', expanded: '1/8', value: 0.125 },
      { character: '\u215C', ref: '\u215C', expanded: '3/8', value: 0.375 },
      { character: '\u215D', ref: '\u215D', expanded: '5/8', value: 0.625 },
      { character: '\u215E', ref: '\u215E', expanded: '7/8', value: 0.875 },
      { character: '\u2151', ref: '\u2151', expanded: '1/9', value: 0.1111111111111111 },
      { character: '\u2152', ref: '\u2152', expanded: '1/10', value: 0.1 },
    ],
    st = i(
      class {
        static parseFloat(t) {
          if (t.length === 0) throw new Error(`Not a number: '${t}'`)
          if (t[0] === '-') return -st.parseFloat(t.substr(1))
          if (t[0] === '\u221A') return Math.sqrt(st.parseFloat(t.substr(1)))
          let e = st.matchUnicodeFraction((n) => n.character === t)
          if (e !== void 0) return e.value
          let r = parseFloat(t)
          if (isNaN(r)) throw new Error(`Not a number: '${t}'`)
          return r
        }
        static simplifyByRounding(t, e) {
          if (t < 0) return -st.simplifyByRounding(-t, e)
          let r = t % 1
          if (r <= e || 1 - r <= e) return Math.round(t)
          let n = st.matchUnicodeFraction((s) => Math.abs(s.value - t) <= e)
          if (n !== void 0) return n.value
          let o = st.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= e)
          return o !== void 0 ? Math.sqrt(o.value) : t
        }
        static matchUnicodeFraction(t) {
          for (let e of mh) if (t(e)) return e
        }
        constructor(t, e, r, n) {
          ;(this.allowAbbreviation = t),
            (this.maxAbbreviationError = e),
            (this.fixedDigits = r),
            (this.itemSeparator = n)
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
          let n = st.matchUnicodeFraction((s) => Math.abs(s.value - t) <= e)
          if (n !== void 0) return n.character
          let o = st.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= e)
          return o !== void 0
            ? `\u221A${o.character}`
            : t % 1 !== 0 && r !== void 0
            ? t.toFixed(r)
            : t.toString()
        }
      },
      'z'
    ),
    Lt = st
  ;(Lt.CONSISTENT = new st(!1, 0, 2, ', ')),
    (Lt.EXACT = new st(!0, 0, void 0, ', ')),
    (Lt.MINIFIED = new st(!0, 0, void 0, ',')),
    (Lt.SIMPLIFIED = new st(!0, 5e-4, 3, ', '))
  var vt = i(
      class {
        static need(t, e, r) {
          if (t !== !0) {
            let n =
                r === void 0 ? '(not provided)' : `[${Array.prototype.slice.call(r).join(', ')}]`,
              o = `Precondition failed

Message: ${e === void 0 ? '(not provided)' : e}

Args: ${n}`
            throw new Error(o)
          }
        }
        static notNull(t) {
          vt.need(t != null, 'notNull')
        }
        static snappedCosSin(t) {
          let e = Math.PI / 4,
            r = Math.round(t / e)
          if (r * e === t) {
            let n = Math.sqrt(0.5)
            return [
              [1, 0],
              [n, n],
              [0, 1],
              [-n, n],
              [-1, 0],
              [-n, -n],
              [0, -1],
              [n, -n],
            ][r & 7]
          }
          return [Math.cos(t), Math.sin(t)]
        }
      },
      'O'
    ),
    O = i(
      class {
        static from(t) {
          if (t instanceof O) return t
          if (typeof t == 'number') return new O(t, 0)
          throw new ut('Unrecognized value type.', { v: t })
        }
        static polar(t, e) {
          let [r, n] = vt.snappedCosSin(e)
          return new O(t * r, t * n)
        }
        static realPartOf(t) {
          if (t instanceof O) return t.real
          if (typeof t == 'number') return t
          throw new ut('Unrecognized value type.', { v: t })
        }
        static imagPartOf(t) {
          if (t instanceof O) return t.imag
          if (typeof t == 'number') return 0
          throw new ut('Unrecognized value type.', { v: t })
        }
        constructor(t, e) {
          ;(this.real = t), (this.imag = e)
        }
        static rootsOfQuadratic(t, e, r) {
          if (((t = O.from(t)), (e = O.from(e)), (r = O.from(r)), t.isEqualTo(0))) {
            if (!e.isEqualTo(0)) return [r.times(-1).dividedBy(e)]
            if (!r.isEqualTo(0)) return []
            throw Error('Degenerate')
          }
          let n = e.times(e).minus(t.times(r).times(4)).sqrts(),
            o = e.times(-1),
            s = t.times(2)
          return n.map((h) => o.minus(h).dividedBy(s))
        }
        isEqualTo(t) {
          return t instanceof O
            ? this.real === t.real && this.imag === t.imag
            : typeof t == 'number'
            ? this.real === t && this.imag === 0
            : !1
        }
        isApproximatelyEqualTo(t, e) {
          if (t instanceof O || typeof t == 'number') {
            let r = this.minus(O.from(t))
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
          return t < 1e-5 ? O.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t))
        }
        plus(t) {
          let e = O.from(t)
          return new O(this.real + e.real, this.imag + e.imag)
        }
        minus(t) {
          let e = O.from(t)
          return new O(this.real - e.real, this.imag - e.imag)
        }
        times(t) {
          let e = O.from(t)
          return new O(
            this.real * e.real - this.imag * e.imag,
            this.real * e.imag + this.imag * e.real
          )
        }
        dividedBy(t) {
          let e = O.from(t),
            r = e.norm2()
          if (r === 0) throw new Error('Division by Zero')
          let n = this.times(e.conjugate())
          return new O(n.real / r, n.imag / r)
        }
        sqrts() {
          let [t, e] = [this.real, this.imag],
            r = Math.sqrt(Math.sqrt(t * t + e * e))
          if (r === 0) return [O.ZERO]
          if (e === 0 && t < 0) return [new O(0, r), new O(0, -r)]
          let n = this.phase() / 2,
            o = O.polar(r, n)
          return [o, o.times(-1)]
        }
        conjugate() {
          return new O(this.real, -this.imag)
        }
        toString(t) {
          return (
            (t = t || Lt.EXACT),
            t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t)
          )
        }
        neg() {
          return new O(-this.real, -this.imag)
        }
        raisedTo(t) {
          return t === 0.5 && this.imag === 0 && this.real >= 0
            ? new O(Math.sqrt(this.real), 0)
            : O.ZERO.isEqualTo(t)
            ? O.ONE
            : this.isEqualTo(O.ZERO)
            ? O.ZERO
            : this.ln().times(O.from(t)).exp()
        }
        exp() {
          return O.polar(Math.exp(this.real), this.imag)
        }
        cos() {
          let t = this.times(O.I)
          return t.exp().plus(t.neg().exp()).times(0.5)
        }
        sin() {
          let t = this.times(O.I)
          return t.exp().minus(t.neg().exp()).dividedBy(new O(0, 2))
        }
        tan() {
          return this.sin().dividedBy(this.cos())
        }
        ln() {
          return new O(Math.log(this.abs()), this.phase())
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
      'g'
    ),
    K = O
  ;(K.ZERO = new O(0, 0)), (K.ONE = new O(1, 0)), (K.I = new O(0, 1))
  var gh = 'H',
    yh = 'X',
    Ih = 'Y',
    xh = 'Z',
    bh = 'P',
    Mh = 'T',
    wh = 'X^\xBD',
    Wh = 'Rx',
    Rh = 'Ry',
    Ah = 'Rz',
    Eh = 'Swap',
    _h = '\u2022',
    qh = 'Bloch',
    Sh = '|0>',
    Oh = '|1>',
    Uh = 'Measure',
    k = i(
      class {
        static PHASE(t) {
          let e = Me(t),
            r = K.from(Math.E)
          return k.square(1, 0, 0, r.raisedTo(K.I.times(e)))
        }
        static get RNOT() {
          let t = K.I,
            e = t.neg()
          return k.square(t.plus(1), e.plus(1), e.plus(1), t.plus(1)).times(0.5)
        }
        static RX(t) {
          let e = Me(t),
            r = K.I.neg(),
            n = Math.cos(e / 2),
            o = Math.sin(e / 2)
          return k.square(n, r.times(o), r.times(o), n)
        }
        static RY(t) {
          let e = Me(t),
            r = Math.cos(e / 2),
            n = Math.sin(e / 2)
          return k.square(r, -n, n, r)
        }
        static RZ(t) {
          let e = Me(t),
            r = K.from(Math.E),
            n = K.I
          return k.square(r.raisedTo(n.neg().times(e / 2)), 0, 0, r.raisedTo(n.times(e / 2)))
        }
        static fromRows(t) {
          let e = t.length,
            r = t.map((y) => y.length)
          if (!(0, Un.isNonEmpty)(r)) throw new ut('Zero height', { rows: t })
          let n = (0, Nn.uniq)(On.Eq)(r)
          if (n.length !== 1) throw new ut('Inconsistent row widths.', { rows: t })
          let o = n[0],
            s = new Float64Array(o * e * 2),
            h = 0
          for (let y of t)
            for (let R of y) (s[h] = K.realPartOf(R)), (s[h + 1] = K.imagPartOf(R)), (h += 2)
          return new k(o, e, s)
        }
        static generate(t, e, r) {
          let n = new Float64Array(t * e * 2)
          for (let o = 0; o < e; o++)
            for (let s = 0; s < t; s++) {
              let h = (o * t + s) * 2,
                y = r(o, s)
              ;(n[h] = K.realPartOf(y)), (n[h + 1] = K.imagPartOf(y))
            }
          return new k(t, e, n)
        }
        static solo(t) {
          return new k(1, 1, new Float64Array([K.realPartOf(t), K.imagPartOf(t)]))
        }
        static square(...t) {
          vt.need(Array.isArray(t), 'Array.isArray(coefs)', t)
          let e = Math.round(Math.sqrt(t.length))
          return (
            vt.need(e * e === t.length, 'Matrix.square: non-square number of arguments'),
            k.generate(e, e, (r, n) => t[r * e + n])
          )
        }
        static col(...t) {
          return (
            vt.need(Array.isArray(t), 'Array.isArray(coefs)', t),
            k.generate(1, t.length, (e) => t[e])
          )
        }
        static row(...t) {
          return (
            vt.need(Array.isArray(t), 'Array.isArray(coefs)', t),
            k.generate(t.length, 1, (e, r) => t[r])
          )
        }
        static identity(t) {
          if (!Number.isInteger(t) || t <= 0) throw new ut('Bad size', { size: t })
          let e = new Float64Array(t * t * 2)
          for (let r = 0; r < t; r++) e[r * (t + 1) * 2] = 1
          return new k(t, t, e)
        }
        static zero(t, e) {
          return new k(t, e, new Float64Array(t * e * 2))
        }
        constructor(t, e, r) {
          if (t * e * 2 !== r.length)
            throw new ut('width*height*2 !== buffer.length', { width: t, height: e, len: r.length })
          ;(this.width = t), (this.height = e), (this.buffer = r)
        }
        columnAt(t) {
          vt.need(t >= 0 && t <= this.width, 'colIndex >= 0 && colIndex <= this.width')
          let e = []
          for (let r = 0; r < this.height; r++) e.push(this.cell(t, r))
          return e
        }
        adjoint() {
          let t = this.height,
            e = this.width,
            r = new Float64Array(t * e * 2)
          for (let n = 0; n < e; n++)
            for (let o = 0; o < t; o++) {
              let s = (o * this.width + n) * 2,
                h = (n * t + o) * 2
              ;(r[h] = this.buffer[s]), (r[h + 1] = -this.buffer[s + 1])
            }
          return new k(t, e, r)
        }
        times(t) {
          return t instanceof k ? this.timesMatrix(t) : this.timesScalar(t)
        }
        timesMatrix(t) {
          if (this.width !== t.height) throw new ut('Incompatible sizes.', { this: this, other: t })
          let e = t.width,
            r = this.height,
            n = this.width,
            o = new Float64Array(e * r * 2)
          for (let s = 0; s < r; s++)
            for (let h = 0; h < e; h++) {
              let y = (s * e + h) * 2
              for (let R = 0; R < n; R++) {
                let E = (s * n + R) * 2,
                  H = (R * e + h) * 2,
                  G = this.buffer[E],
                  ht = this.buffer[E + 1],
                  rt = t.buffer[H],
                  _ = t.buffer[H + 1],
                  v = G * rt - ht * _,
                  m = G * _ + rt * ht
                ;(o[y] += v), (o[y + 1] += m)
              }
            }
          return new k(e, r, o)
        }
        timesScalar(t) {
          let e = new Float64Array(this.buffer.length),
            r = K.realPartOf(t),
            n = K.imagPartOf(t)
          for (let o = 0; o < e.length; o += 2) {
            let s = this.buffer[o],
              h = this.buffer[o + 1]
            ;(e[o] = s * r - h * n), (e[o + 1] = s * n + h * r)
          }
          return new k(this.width, this.height, e)
        }
        isEqualTo(t) {
          if (this === t) return !0
          if (!(t instanceof k)) return !1
          let e = t
          return (
            this.width === e.width &&
            this.height === e.height &&
            (0, we.range)(0, this.buffer.length - 1).every((r) => this.buffer[r] === e.buffer[r])
          )
        }
        isApproximatelyEqualTo(t, e) {
          return (
            t instanceof k &&
            this.width === t.width &&
            this.height === t.height &&
            Math.sqrt(this.minus(t).norm2()) <= e
          )
        }
        minus(t) {
          let { width: e, height: r, buffer: n } = this,
            o = t.buffer
          vt.need(t.width === e && t.height === r, 'Matrix.minus: compatible sizes')
          let s = new Float64Array(this.buffer.length)
          for (let h = 0; h < s.length; h++) s[h] = n[h] - o[h]
          return new k(e, r, s)
        }
        norm2() {
          let t = 0
          for (let e of this.buffer) t += e * e
          return t
        }
        toString(t = Lt.EXACT) {
          return `{{${this.rows()
            .map((e) => e.map((r) => r.toString(t)).join(t.itemSeparator))
            .join(`}${t.itemSeparator}{`)}}}`
        }
        rows() {
          return (0, we.range)(0, this.height - 1).map((t) =>
            (0, we.range)(0, this.width - 1).map((e) => this.cell(e, t))
          )
        }
        cell(t, e) {
          if (t < 0 || e < 0 || t >= this.width || e >= this.height)
            throw new ut('Cell out of range', {
              col: t,
              row: e,
              width: this.width,
              height: this.height,
            })
          let r = (this.width * e + t) * 2
          return new K(this.buffer[r], this.buffer[r + 1])
        }
        set(t, e, r) {
          if (t < 0 || e < 0 || t >= this.width || e >= this.height)
            throw new ut('Cell out of range', {
              col: t,
              row: e,
              width: this.width,
              height: this.height,
            })
          let n = (this.width * e + t) * 2
          ;(this.buffer[n] = r.real), (this.buffer[n + 1] = r.imag)
        }
        isApproximatelyHermitian(t) {
          if (this.width !== this.height) return !1
          for (let e = 0; e < this.width; e++)
            for (let r = 0; r < this.height; r++) {
              let n = (this.width * r + e) * 2,
                o = (this.width * e + r) * 2
              if (
                Math.abs(this.buffer[n] - this.buffer[o]) > t ||
                Math.abs(this.buffer[n + 1] + this.buffer[o + 1]) > t
              )
                return !1
            }
          return !0
        }
        plus(t) {
          let { width: e, height: r, buffer: n } = this,
            o = t.buffer
          vt.need(t.width === e && t.height === r, 'Matrix.plus: compatible sizes')
          let s = new Float64Array(this.buffer.length)
          for (let h = 0; h < s.length; h++) s[h] = n[h] + o[h]
          return new k(e, r, s)
        }
        tensorProduct(t) {
          let e = this.width,
            r = this.height,
            n = t.width,
            o = t.height,
            s = e * n,
            h = r * o,
            y = new Float64Array(s * h * 2)
          for (let R = 0; R < r; R++)
            for (let E = 0; E < o; E++)
              for (let H = 0; H < e; H++)
                for (let G = 0; G < n; G++) {
                  let ht = (R * e + H) * 2,
                    rt = (E * n + G) * 2,
                    _ = ((R * o + E) * s + (H * n + G)) * 2,
                    v = this.buffer[ht],
                    m = this.buffer[ht + 1],
                    l = t.buffer[rt],
                    p = t.buffer[rt + 1],
                    d = v * l - m * p,
                    g = v * p + m * l
                  ;(y[_] = d), (y[_ + 1] = g)
                }
          return new k(s, h, y)
        }
        timesQubitOperation(t, e, r, n) {
          vt.need((r & (1 << e)) === 0, 'Matrix.timesQubitOperation: self-controlled'),
            vt.need(t.width === 2 && t.height === 2, 'Matrix.timesQubitOperation: not 2x2')
          let { width: o, height: s, buffer: h } = this,
            [y, R, E, H, G, ht, rt, _] = t.buffer
          vt.need(s >= 2 << e, 'Matrix.timesQubitOperation: qubit index out of range')
          let v = new Float64Array(h),
            m = 0
          for (let l = 0; l < s; l++) {
            let p = ((r & l) ^ n) !== 0,
              d = (l & (1 << e)) !== 0
            for (let g = 0; g < o; g++) {
              if (!p && !d) {
                let I = m + (1 << e) * 2 * o,
                  D = v[m],
                  N = v[m + 1],
                  Y = v[I],
                  w = v[I + 1]
                ;(v[m] = D * y - N * R + Y * E - w * H),
                  (v[m + 1] = D * R + N * y + Y * H + w * E),
                  (v[I] = D * G - N * ht + Y * rt - w * _),
                  (v[I + 1] = D * ht + N * G + Y * _ + w * rt)
              }
              m += 2
            }
          }
          return new k(o, s, v)
        }
        trace() {
          let t = 0,
            e = 0,
            r = this.width * 2 + 2
          for (let n = 0; n < this.buffer.length; n += r)
            (t += this.buffer[n]), (e += this.buffer[n + 1])
          return new K(t, e)
        }
        qubitDensityMatrixToBlochVector() {
          if (this.width !== 2 || this.height !== 2)
            throw new ut('Need a 2x2 density matrix.', this)
          if (!this.isApproximatelyHermitian(0.01))
            throw new ut('Density matrix should be Hermitian.', this)
          if (!this.trace().isApproximatelyEqualTo(1, 0.01))
            throw new ut('Density matrix should have unit trace.', this)
          let [t, e, r, n, o, s, h, y] = this.buffer,
            R = o + r,
            E = s - n,
            H = t - h
          return [R, E, H]
        }
      },
      'x'
    ),
    L = k
  ;(L.H = k.square(1, 1, 1, -1).times(Math.sqrt(0.5))),
    (L.PAULI_X = k.square(0, 1, 1, 0)),
    (L.PAULI_Y = k.square(0, new K(0, -1), K.I, 0)),
    (L.PAULI_Z = k.square(1, 0, 0, -1)),
    (L.T = k.square(1, 0, 0, K.from(Math.E).raisedTo(K.I.times(Math.PI / 4))))
  var Fn = i(
    class {
      get bra() {
        return this.matrix.adjoint()
      }
      get ket() {
        return this.matrix
      }
      constructor(t) {
        typeof t == 'string' ? (this.matrix = this.bitstringToMatrix(t)) : (this.matrix = t),
          (this.size = this.matrix.height),
          (this.nqubit = Math.log2(this.size))
      }
      amplifier(t) {
        return this.matrix.cell(0, t)
      }
      setAmplifier(t, e) {
        this.matrix.set(0, t, e)
      }
      blochVector(t) {
        return this.qubitDensityMatrix(t).qubitDensityMatrixToBlochVector()
      }
      isApproximatelyEqualTo(t, e) {
        return t instanceof Fn && this.matrix.isApproximatelyEqualTo(t.matrix, e)
      }
      timesQubitOperation(t, e, r) {
        this.matrix = this.matrix.timesQubitOperation(t, e, r, r)
      }
      toString() {
        return this.matrix.toString()
      }
      bitstringToMatrix(t) {
        let e = !1,
          r = '',
          n = [],
          o = new ut('Invalid StateVector bit string', t)
        for (let s of t.split(''))
          switch (s) {
            case '0': {
              if (e) throw o
              n.push(L.col(1, 0))
              break
            }
            case '1': {
              if (e) throw o
              n.push(L.col(0, 1))
              break
            }
            case '+': {
              if (e) throw o
              n.push(L.col(1, 1).times(Math.sqrt(0.5)))
              break
            }
            case '-': {
              e ? (r += '-') : n.push(L.col(1, -1).times(Math.sqrt(0.5)))
              break
            }
            case 'i': {
              e ? (r += 'i') : n.push(L.col(1, new K(0, 1)).times(Math.sqrt(0.5)))
              break
            }
            case '(': {
              if (e) throw o
              ;(e = !0), (r = '')
              break
            }
            case ')': {
              if (!e || r !== '-i') throw o
              n.push(L.col(1, new K(0, -1)).times(Math.sqrt(0.5))), (e = !1)
              break
            }
            default:
              throw o
          }
        if (n.length === 0) throw o
        return n.reduce((s, h) => s.tensorProduct(h))
      }
      qubitDensityMatrix(t) {
        if (t < 0 || t >= this.nqubit) throw new ut('Qubit index out of range', t)
        let e = [...Array(Math.log2(this.matrix.height)).keys()].filter((o) => o !== t),
          r = i(
            (o, s) =>
              s
                .sort()
                .reverse()
                .reduce((h, y) => {
                  let R = h >> (y + 1)
                  R = R << y
                  let E = ((1 << y) - 1) & h
                  return R | E
                }, o),
            'i'
          ),
          n = L.zero(2, 2)
        for (let o = 0; o < this.matrix.height; o++)
          for (let s = 0; s < this.matrix.height; s++) {
            if (!e.every((H) => ((o >> H) & 1) === ((s >> H) & 1))) continue
            let h = this.matrix.cell(0, s).times(this.matrix.cell(0, o).conjugate())
            if (h.isEqualTo(0)) continue
            let y = r(s, e) === 0 ? L.col(1, 0) : L.col(0, 1),
              R = r(o, e) === 0 ? L.row(1, 0) : L.row(0, 1),
              E = y.times(R)
            n = n.plus(E.times(h))
          }
        return n
      }
    },
    'G'
  )
  function Nh(t, e) {
    return Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
  }
  i(Nh, 'ft')
  var Bn = i(
    class {
      constructor(t) {
        typeof t == 'string' ? (this.state = new Fn(t)) : (this.state = t),
          (this.measuredBits = {}),
          (this.flags = {})
      }
      runStep(t) {
        this.blochVectors = {}
        for (let e of t)
          switch (e.type) {
            case Sh:
              this.write(0, ...e.targets)
              break
            case Oh:
              this.write(1, ...e.targets)
              break
            case qh:
              for (let r of e.targets) this.blochVectors[r] = this.state.blochVector(r)
              break
            case gh:
              if (e.if && !this.flags[e.if]) break
              e.controls && e.controls.length > 0
                ? this.ch(e.controls, ...e.targets)
                : this.h(...e.targets)
              break
            case yh:
              if (e.if && !this.flags[e.if]) break
              e.controls && e.controls.length > 0
                ? this.cnot(e.controls, ...e.targets)
                : this.x(...e.targets)
              break
            case Ih:
              if (e.if && !this.flags[e.if]) break
              e.controls && e.controls.length > 0
                ? this.cy(e.controls, ...e.targets)
                : this.y(...e.targets)
              break
            case xh:
              if (e.if && !this.flags[e.if]) break
              e.controls && e.controls.length > 0
                ? this.cz(e.controls, ...e.targets)
                : this.z(...e.targets)
              break
            case bh: {
              if (!e.angle) break
              e.controls && e.controls.length > 0
                ? this.cphase(e.controls, e.angle, e.targets[0])
                : this.cphase(e.targets.slice(1), e.angle, e.targets[0])
              break
            }
            case Mh: {
              if (e.if && !this.flags[e.if]) break
              e.controls && e.controls.length > 0
                ? this.ct(e.controls, ...e.targets)
                : this.t(...e.targets)
              break
            }
            case _h: {
              this.cz(e.targets.slice(1), e.targets[0])
              break
            }
            case Eh: {
              e.controls && e.controls.length === 1
                ? this.cswap(e.controls[0], e.targets[0], e.targets[1])
                : this.swap(e.targets[0], e.targets[1])
              break
            }
            case wh:
              if (e.if && !this.flags[e.if]) break
              e.controls && e.controls.length > 0
                ? this.crnot(e.controls, ...e.targets)
                : this.rnot(...e.targets)
              break
            case Wh:
              if ((e.if && !this.flags[e.if]) || !e.angle) break
              e.controls && e.controls.length > 0
                ? this.crx(e.controls, e.angle, ...e.targets)
                : this.rx(e.angle, ...e.targets)
              break
            case Rh:
              if ((e.if && !this.flags[e.if]) || !e.angle) break
              e.controls && e.controls.length > 0
                ? this.cry(e.controls, e.angle, ...e.targets)
                : this.ry(e.angle, ...e.targets)
              break
            case Ah:
              if ((e.if && !this.flags[e.if]) || !e.angle) break
              e.controls && e.controls.length > 0
                ? this.crz(e.controls, e.angle, ...e.targets)
                : this.rz(e.angle, ...e.targets)
              break
            case Uh:
              for (let r of e.targets)
                this.measure(r), e.flag && (this.flags[e.flag] = this.measuredBits[r] === 1)
              break
            default:
              throw new Error('Unknown instruction')
          }
        return this
      }
      write(t, ...e) {
        for (let r of e) {
          let n = Nh(this.pZero(r), 5)
          ;((t === 0 && n === 0) || (t === 1 && n === 1)) && this.x(r)
        }
        return this
      }
      h(...t) {
        return this.u(L.H, ...t), this
      }
      ch(t, ...e) {
        return this.cu(t, L.H, ...e), this
      }
      x(...t) {
        return this.u(L.PAULI_X, ...t), this
      }
      cnot(t, ...e) {
        return this.cu(t, L.PAULI_X, ...e), this
      }
      y(...t) {
        return this.u(L.PAULI_Y, ...t), this
      }
      cy(t, ...e) {
        return this.cu(t, L.PAULI_Y, ...e), this
      }
      z(...t) {
        return this.u(L.PAULI_Z, ...t), this
      }
      cz(t, ...e) {
        return this.cu(t, L.PAULI_Z, ...e), this
      }
      phase(t, ...e) {
        return this.u(L.PHASE(t), ...e), this
      }
      cphase(t, e, ...r) {
        return this.cu(t, L.PHASE(e), ...r), this
      }
      t(...t) {
        return this.u(L.T, ...t), this
      }
      ct(t, ...e) {
        return this.cu(t, L.T, ...e), this
      }
      swap(t, e) {
        return this.cnot(t, e).cnot(e, t).cnot(t, e), this
      }
      cswap(t, e, r) {
        return this.cnot([t, e], r).cnot([t, r], e).cnot([t, e], r), this
      }
      rnot(...t) {
        return this.u(L.RNOT, ...t), this
      }
      crnot(t, ...e) {
        return this.cu(t, L.RNOT, ...e), this
      }
      rx(t, ...e) {
        return this.u(L.RX(t), ...e), this
      }
      crx(t, e, ...r) {
        return this.cu(t, L.RX(e), ...r), this
      }
      ry(t, ...e) {
        return this.u(L.RY(t), ...e), this
      }
      cry(t, e, ...r) {
        return this.cu(t, L.RY(e), ...r), this
      }
      rz(t, ...e) {
        return this.u(L.RZ(t), ...e), this
      }
      crz(t, e, ...r) {
        return this.cu(t, L.RZ(e), ...r), this
      }
      measure(...t) {
        for (let e of t) {
          let r = this.pZero(e)
          if (Math.random() <= r) {
            for (let n = 0; n < 1 << this.state.nqubit; n++)
              (n & (1 << e)) !== 0 && this.state.setAmplifier(n, K.ZERO),
                this.state.setAmplifier(n, this.state.amplifier(n).dividedBy(Math.sqrt(r)))
            this.measuredBits[e] = 0
          } else {
            for (let n = 0; n < 1 << this.state.nqubit; n++)
              (n & (1 << e)) === 0 && this.state.setAmplifier(n, K.ZERO),
                this.state.setAmplifier(n, this.state.amplifier(n).dividedBy(Math.sqrt(1 - r)))
            this.measuredBits[e] = 1
          }
        }
        return this
      }
      amplitudes(t = []) {
        let e = this.state.matrix.columnAt(0)
        return t.length > 0
          ? t.reduce((r, n) => {
              let o = e[n]
              return o === void 0 ? (r[n] = [0, 0]) : (r[n] = [o.real, o.imag]), r
            }, {})
          : e.map((r) => [r.real, r.imag])
      }
      u(t, ...e) {
        for (let r of e) this.state.timesQubitOperation(t, r, 0)
      }
      cu(t, e, ...r) {
        let n = (typeof t == 'number' ? [t] : t).reduce((o, s) => o | (1 << s), 0)
        for (let o of r) this.state.timesQubitOperation(e, o, n)
      }
      pZero(t) {
        let e = 0
        for (let r = 0; r < 1 << this.state.nqubit; r++)
          (r & (1 << t)) === 0 && (e += Math.pow(this.state.amplifier(r).abs(), 2))
        return e
      }
    },
    'Pt'
  )
  var Fh = Tt(Tn())
  var Bh = Object.prototype.toString.call({}),
    Lh = '!recursion-limit!',
    Th = 10
  function _t(t, e = Th) {
    return zh(t) || Ph(t, e) || Dh(t, e)
  }
  i(_t, 'c')
  function zh(t) {
    if (t === null) return 'null'
    if (t === void 0) return 'undefined'
    if (typeof t == 'string') return `"${t}"`
    if (typeof t == 'number') return String(t)
  }
  i(zh, 'M')
  function Ph(t, e) {
    if (e === 0) return Lh
    if (t instanceof Map) return Ch(t, e)
    if (t instanceof Set) return jh(t, e)
    if (((r) => r[Symbol.iterator] !== void 0)(t)) return $h(t, e)
  }
  i(Ph, 'O')
  function Dh(t, e) {
    let r = String(t)
    return r !== Bh ? r : kh(t, e)
  }
  i(Dh, 'F')
  function Ch(t, e) {
    let r = []
    for (let [n, o] of t.entries()) {
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      let s = _t(n, e - 1),
        h = _t(o, e - 1)
      r.push(`${s}: ${h}`)
    }
    return `Map{${r.join(', ')}}`
  }
  i(Ch, 'G')
  function jh(t, e) {
    let r = []
    for (let n of t) {
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      r.push(_t(n, e - 1))
    }
    return `Set{${r.join(', ')}}`
  }
  i(jh, 'R')
  function $h(t, e) {
    let r = []
    for (let n of t) {
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      r.push(_t(n, e - 1))
    }
    return `${Array.isArray(t) ? '' : t.constructor.name}[${r.join(', ')}]`
  }
  i($h, 'N')
  function kh(t, e) {
    let r = []
    for (let o in t) {
      if (!Object.prototype.hasOwnProperty.call(t, o)) continue
      if (r.length > 1e3) {
        r.push('[...]')
        break
      }
      let s = t[o],
        h = _t(o, e - 1),
        y = _t(s, e - 1)
      r.push(`${h}: ${y}`)
    }
    let n = t.constructor.name
    return `${n === {}.constructor.name ? '' : `(Type: ${n})`}{${r.join(', ')}}`
  }
  i(kh, 'q')
  var Ar = 0,
    Er = i(
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
            Ar++
          try {
            this.details =
              Ar === 1
                ? _t(this.detailsObj)
                : '(failed to describe detailsObj due to possibly re-entrancy)'
          } catch (r) {
            console.error(r),
              (this.details = '(failed to describe detailsObj, see the console for details)')
          } finally {
            Ar--
          }
        }
      },
      'd'
    ),
    Zh = [
      { character: '\xBD', ref: '\xBD', expanded: '1/2', value: 0.5 },
      { character: '\xBC', ref: '\xBC', expanded: '1/4', value: 0.25 },
      { character: '\xBE', ref: '\xBE', expanded: '3/4', value: 0.75 },
      { character: '\u2153', ref: '\u2153', expanded: '1/3', value: 0.3333333333333333 },
      { character: '\u2154', ref: '\u2154', expanded: '2/3', value: 0.6666666666666666 },
      { character: '\u2155', ref: '\u2155', expanded: '1/5', value: 0.2 },
      { character: '\u2156', ref: '\u2156', expanded: '2/5', value: 0.4 },
      { character: '\u2157', ref: '\u2157', expanded: '3/5', value: 0.6 },
      { character: '\u2158', ref: '\u2158', expanded: '4/5', value: 0.8 },
      { character: '\u2159', ref: '\u2159', expanded: '1/6', value: 0.16666666666666666 },
      { character: '\u215A', ref: '\u215A', expanded: '5/6', value: 0.8333333333333334 },
      { character: '\u2150', ref: '\u2150', expanded: '1/7', value: 0.14285714285714285 },
      { character: '\u215B', ref: '\u215B', expanded: '1/8', value: 0.125 },
      { character: '\u215C', ref: '\u215C', expanded: '3/8', value: 0.375 },
      { character: '\u215D', ref: '\u215D', expanded: '5/8', value: 0.625 },
      { character: '\u215E', ref: '\u215E', expanded: '7/8', value: 0.875 },
      { character: '\u2151', ref: '\u2151', expanded: '1/9', value: 0.1111111111111111 },
      { character: '\u2152', ref: '\u2152', expanded: '1/10', value: 0.1 },
    ],
    lt = i(
      class {
        static parseFloat(t) {
          if (t.length === 0) throw new Error(`Not a number: '${t}'`)
          if (t[0] === '-') return -lt.parseFloat(t.substr(1))
          if (t[0] === '\u221A') return Math.sqrt(lt.parseFloat(t.substr(1)))
          let e = lt.matchUnicodeFraction((n) => n.character === t)
          if (e !== void 0) return e.value
          let r = parseFloat(t)
          if (isNaN(r)) throw new Error(`Not a number: '${t}'`)
          return r
        }
        static simplifyByRounding(t, e) {
          if (t < 0) return -lt.simplifyByRounding(-t, e)
          let r = t % 1
          if (r <= e || 1 - r <= e) return Math.round(t)
          let n = lt.matchUnicodeFraction((s) => Math.abs(s.value - t) <= e)
          if (n !== void 0) return n.value
          let o = lt.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= e)
          return o !== void 0 ? Math.sqrt(o.value) : t
        }
        static matchUnicodeFraction(t) {
          for (let e of Zh) if (t(e)) return e
        }
        constructor(t, e, r, n) {
          ;(this.allowAbbreviation = t),
            (this.maxAbbreviationError = e),
            (this.fixedDigits = r),
            (this.itemSeparator = n)
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
          let n = lt.matchUnicodeFraction((s) => Math.abs(s.value - t) <= e)
          if (n !== void 0) return n.character
          let o = lt.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= e)
          return o !== void 0
            ? `\u221A${o.character}`
            : t % 1 !== 0 && r !== void 0
            ? t.toFixed(r)
            : t.toString()
        }
      },
      'u'
    ),
    ee = lt
  ;(ee.CONSISTENT = new lt(!1, 0, 2, ', ')),
    (ee.EXACT = new lt(!0, 0, void 0, ', ')),
    (ee.MINIFIED = new lt(!0, 0, void 0, ',')),
    (ee.SIMPLIFIED = new lt(!0, 5e-4, 3, ', '))
  var qt = i(
      class {
        static need(t, e, r) {
          if (t !== !0) {
            let n =
                r === void 0 ? '(not provided)' : `[${Array.prototype.slice.call(r).join(', ')}]`,
              o = `Precondition failed

Message: ${e === void 0 ? '(not provided)' : e}

Args: ${n}`
            throw new Error(o)
          }
        }
        static notNull(t) {
          qt.need(t != null, 'notNull')
        }
        static snappedCosSin(t) {
          let e = Math.PI / 4,
            r = Math.round(t / e)
          if (r * e === t) {
            let n = Math.sqrt(0.5)
            return [
              [1, 0],
              [n, n],
              [0, 1],
              [-n, n],
              [-1, 0],
              [-n, -n],
              [0, -1],
              [n, -n],
            ][r & 7]
          }
          return [Math.cos(t), Math.sin(t)]
        }
      },
      'm'
    ),
    U = i(
      class {
        static from(t) {
          if (t instanceof U) return t
          if (typeof t == 'number') return new U(t, 0)
          throw new Er('Unrecognized value type.', { v: t })
        }
        static polar(t, e) {
          let [r, n] = qt.snappedCosSin(e)
          return new U(t * r, t * n)
        }
        static realPartOf(t) {
          if (t instanceof U) return t.real
          if (typeof t == 'number') return t
          throw new Er('Unrecognized value type.', { v: t })
        }
        static imagPartOf(t) {
          if (t instanceof U) return t.imag
          if (typeof t == 'number') return 0
          throw new Er('Unrecognized value type.', { v: t })
        }
        constructor(t, e) {
          ;(this.real = t), (this.imag = e)
        }
        static rootsOfQuadratic(t, e, r) {
          if (((t = U.from(t)), (e = U.from(e)), (r = U.from(r)), t.isEqualTo(0))) {
            if (!e.isEqualTo(0)) return [r.times(-1).dividedBy(e)]
            if (!r.isEqualTo(0)) return []
            throw Error('Degenerate')
          }
          let n = e.times(e).minus(t.times(r).times(4)).sqrts(),
            o = e.times(-1),
            s = t.times(2)
          return n.map((h) => o.minus(h).dividedBy(s))
        }
        isEqualTo(t) {
          return t instanceof U
            ? this.real === t.real && this.imag === t.imag
            : typeof t == 'number'
            ? this.real === t && this.imag === 0
            : !1
        }
        isApproximatelyEqualTo(t, e) {
          if (t instanceof U || typeof t == 'number') {
            let r = this.minus(U.from(t))
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
          return t < 1e-5 ? U.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t))
        }
        plus(t) {
          let e = U.from(t)
          return new U(this.real + e.real, this.imag + e.imag)
        }
        minus(t) {
          let e = U.from(t)
          return new U(this.real - e.real, this.imag - e.imag)
        }
        times(t) {
          let e = U.from(t)
          return new U(
            this.real * e.real - this.imag * e.imag,
            this.real * e.imag + this.imag * e.real
          )
        }
        dividedBy(t) {
          let e = U.from(t),
            r = e.norm2()
          if (r === 0) throw new Error('Division by Zero')
          let n = this.times(e.conjugate())
          return new U(n.real / r, n.imag / r)
        }
        sqrts() {
          let [t, e] = [this.real, this.imag],
            r = Math.sqrt(Math.sqrt(t * t + e * e))
          if (r === 0) return [U.ZERO]
          if (e === 0 && t < 0) return [new U(0, r), new U(0, -r)]
          let n = this.phase() / 2,
            o = U.polar(r, n)
          return [o, o.times(-1)]
        }
        conjugate() {
          return new U(this.real, -this.imag)
        }
        toString(t) {
          return (
            (t = t || ee.EXACT),
            t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t)
          )
        }
        neg() {
          return new U(-this.real, -this.imag)
        }
        raisedTo(t) {
          return t === 0.5 && this.imag === 0 && this.real >= 0
            ? new U(Math.sqrt(this.real), 0)
            : U.ZERO.isEqualTo(t)
            ? U.ONE
            : this.isEqualTo(U.ZERO)
            ? U.ZERO
            : this.ln().times(U.from(t)).exp()
        }
        exp() {
          return U.polar(Math.exp(this.real), this.imag)
        }
        cos() {
          let t = this.times(U.I)
          return t.exp().plus(t.neg().exp()).times(0.5)
        }
        sin() {
          let t = this.times(U.I)
          return t.exp().minus(t.neg().exp()).dividedBy(new U(0, 2))
        }
        tan() {
          return this.sin().dividedBy(this.cos())
        }
        ln() {
          return new U(Math.log(this.abs()), this.phase())
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
    _r = U
  ;(_r.ZERO = new U(0, 0)), (_r.ONE = new U(1, 0)), (_r.I = new U(0, 1))
  self.addEventListener(
    'message',
    function (t) {
      let e = t.data.qubitCount,
        r = t.data.stepIndex,
        n = t.data.steps,
        o = t.data.targets,
        s = new Bn('0'.repeat(e))
      qt.notNull(e),
        qt.notNull(r),
        qt.notNull(n),
        qt.notNull(o),
        n.forEach((h, y) => {
          s.runStep(h),
            self.postMessage({
              type: 'step',
              step: y,
              amplitudes: y === r ? s.amplitudes(o) : [],
              blochVectors: s.blochVectors,
              measuredBits: s.measuredBits,
              flags: s.flags,
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
