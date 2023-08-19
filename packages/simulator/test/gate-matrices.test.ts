import {H, X, Y, Z, S, SDagger, T, TDagger, PHASE, RNOT} from '../src/gate-matrices'

describe('H', () => {
  test('toString', () => {
    expect(H.toString()).toBe('{{√½, √½}, {√½, -√½}}')
  })

  test('isHermitian', () => {
    expect(H.isHermitian()).toBeTruthy()
  })
})

describe('X', () => {
  test('toString', () => {
    expect(X.toString()).toBe('{{0, 1}, {1, 0}}')
  })

  test('isHermitian', () => {
    expect(X.isHermitian()).toBeTruthy()
  })
})

describe('Y', () => {
  test('toString', () => {
    expect(Y.toString()).toBe('{{0, -i}, {i, 0}}')
  })

  test('isHermitian', () => {
    expect(Y.isHermitian()).toBeTruthy()
  })
})

describe('Z', () => {
  test('toString', () => {
    expect(Z.toString()).toBe('{{1, 0}, {0, -1}}')
  })

  test('isHermitian', () => {
    expect(Z.isHermitian()).toBeTruthy()
  })
})

describe('S', () => {
  test('toString', () => {
    expect(S.toString()).toBe('{{1, 0}, {0, i}}')
  })

  test('isHermitian', () => {
    expect(S.isHermitian()).toBeFalsy()
  })
})

describe('S†', () => {
  test('toString', () => {
    expect(SDagger.toString()).toBe('{{1, 0}, {0, -i}}')
  })

  test('isHermitian', () => {
    expect(SDagger.isHermitian()).toBeFalsy()
  })
})

describe('T', () => {
  test('toString', () => {
    expect(T.toString()).toBe('{{1, 0}, {0, √½+√½i}}')
  })

  test('isHermitian', () => {
    expect(T.isHermitian()).toBeFalsy()
  })
})

describe('T†', () => {
  test('toString', () => {
    expect(TDagger.toString()).toBe('{{1, 0}, {0, √½-√½i}}')
  })

  test('isHermitian', () => {
    expect(TDagger.isHermitian()).toBeFalsy()
  })
})

describe('PHASE', () => {
  test('toString', () => {
    expect(PHASE('π/4').toString()).toBe('{{1, 0}, {0, √½+√½i}}')
    expect(PHASE('-π/4').toString()).toBe('{{1, 0}, {0, √½-√½i}}')
  })

  test('isHermitian', () => {
    expect(PHASE('π/4').isHermitian()).toBeFalsy()
    expect(PHASE('-π/4').isHermitian()).toBeFalsy()
  })
})

describe('√X', () => {
  test('toString', () => {
    expect(RNOT.toString()).toBe('{{½+½i, ½-½i}, {½-½i, ½+½i}}')
  })

  test('isHermitian', () => {
    expect(RNOT.isHermitian()).toBeFalsy()
  })
})
