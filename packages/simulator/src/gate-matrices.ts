import {Matrix} from './matrix'

export const H = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5))
