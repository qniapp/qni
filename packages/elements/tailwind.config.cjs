module.exports = {
  mode: 'jit',
  content: ['./src/*.ts'],
  safelist: ['operation-xs', 'operation-sm', 'operation-base', 'operation-lg', 'operation-xl', 'operation-2xl'],
  theme: {
    extend: {
      cursor: {
        grab: 'grab',
        grabbing: 'grabbing'
      },
      scale: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9'
      },
      rotate: {
        10: '10deg',
        20: '20deg',
        30: '30deg',
        40: '40deg',
        50: '50deg',
        60: '60deg',
        70: '70deg',
        80: '80deg',
        90: '90deg',
        100: '100deg',
        110: '110deg',
        120: '120deg',
        130: '130deg',
        140: '140deg',
        150: '150deg',
        160: '160deg',
        170: '170deg',
        180: '180deg',
        190: '190deg',
        200: '200deg',
        210: '210deg',
        220: '220deg',
        230: '230deg',
        240: '240deg',
        250: '250deg',
        260: '260deg',
        270: '270deg',
        280: '280deg',
        290: '290deg',
        300: '300deg',
        310: '310deg',
        320: '320deg',
        330: '330deg',
        340: '340deg',
        350: '350deg',
        360: '360deg'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
