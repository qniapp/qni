import {H} from '../src/gate-matrices'

describe('H', () => {
  test('toString', () => {
    expect(H.toString()).toBe('{{√½, √½}, {√½, -√½}}')
  })

  test('isApproximatelyHermitian', () => {
    // TODO: isApproximatelyHermitian → isHermitian に名前を変更
    // TODO: isHermitian のデフォルト引数を 0 にする
    expect(H.isApproximatelyHermitian(0)).toBeTruthy()
  })
})
