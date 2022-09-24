// taken from:
// https://github.com/Microsoft/TypeScript/issues/15480#issuecomment-1245429783
type ArrayOfLength<N extends number, A extends any[] = []> = A['length'] extends N ? A : ArrayOfLength<N, [...A, any]>
type Inc<N extends number> = number & [...ArrayOfLength<N>, any]['length']
export type Range<Start extends number, End extends number> = number &
  (Start extends End ? never : Start | Range<Inc<Start>, End>)
