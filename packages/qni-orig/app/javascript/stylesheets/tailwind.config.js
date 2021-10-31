// https://design.duolingo.com/identity/color#core-brand-colors
const palette = {
  // Primary Colors
  gate: "#43C000",
  magnitude: "#1CB0F6",

  // Secondary Colors
  fox: "#FF9600",
  cardinal: "#FF4B4B",
  superposition: "#CE82FF",
  flash: "#FFC800",

  // Neutrals
  snow: "#FFFFFF",
  polar: "#F7F7F7",
  swan: "#E5E5E5",
  hare: "#AFAFAF",
  wolf: "#777777",
  eel: "#4B4B4B",
}

module.exports = {
  // Purge unused TailwindCSS styles
  purge: {
    enabled: ["production"].includes(process.env.NODE_ENV),
    content: [
      "./**/*.html.erb",
      "./app/helpers/**/*.rb",
      "./app/javascript/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gate: palette.gate,
      magnitude: palette.magnitude,

      cardinal: palette.cardinal,
      superposition: palette.superposition,
      fox: palette.fox,
      flash: palette.flash,

      snow: palette.snow,
      polar: palette.polar,
      swan: palette.swan,
      hare: palette.hare,
      wolf: palette.wolf,
      eel: palette.eel,

      transparent: "transparent",
      current: "currentColor",
    },
    scale: {
      0: "0",
      10: ".10",
      20: ".20",
      30: ".30",
      40: ".40",
      50: ".50",
      60: ".60",
      70: ".70",
      75: ".75",
      80: ".80",
      90: ".90",
      100: "1",
      125: "1.25",
      150: "1.5",
    },
    rotate: {
      "-360": "-360deg",
      "-350": "-350deg",
      "-340": "-340deg",
      "-330": "-330deg",
      "-320": "-320deg",
      "-310": "-310deg",
      "-300": "-300deg",
      "-290": "-290deg",
      "-280": "-280deg",
      "-270": "-270deg",
      "-260": "-260deg",
      "-250": "-250deg",
      "-240": "-240deg",
      "-230": "-230deg",
      "-220": "-220deg",
      "-210": "-210deg",
      "-200": "-200deg",
      "-190": "-190deg",
      "-180": "-180deg",
      "-170": "-170deg",
      "-160": "-160deg",
      "-150": "-150deg",
      "-140": "-140deg",
      "-130": "-130deg",
      "-120": "-120deg",
      "-110": "-110deg",
      "-100": "-100deg",
      "-90": "-90deg",
      "-80": "-80deg",
      "-70": "-70deg",
      "-60": "-60deg",
      "-50": "-50deg",
      "-40": "-40deg",
      "-30": "-30deg",
      "-20": "-20deg",
      "-10": "-10deg",
      0: "0",
      45: "45deg",
      "-45": "-45deg",
      90: "90deg",
    },
    extend: {
      spacing: {
        9: "2.25rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        38: "9.5rem",
        68: "17rem",
        84: "21rem",
        108: "27rem",
      },
      fontSize: {
        xxs: ".5rem",
      },
      borderWidth: {
        1: "1px",
      },
      strokeWidth: {
        3: "3",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
