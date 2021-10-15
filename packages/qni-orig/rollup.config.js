import commonjs from "rollup-plugin-commonjs"
import css from "rollup-plugin-css-only"
import postcss from "rollup-plugin-postcss"
import replace from "rollup-plugin-replace"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"
import { version } from "./package.json"

const year = new Date().getFullYear()
const banner = `/*\n Qni ${version}\n Copyright © ${year} TIS Inc.\n*/`

export default [
  {
    input: "./app/javascript/index.ts",
    output: [
      {
        name: "Qni",
        file: "dist/qni.umd.js",
        format: "umd",
        sourcemap: true,
        banner
      },
      {
        name: "Qni",
        file: "docs/qni.js",
        format: "umd",
        sourcemap: true,
        banner
      },
      {
        file: "dist/qni.js",
        format: "es",
        sourcemap: true,
        banner
      }
    ],
    context: "window",
    plugins: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      resolve(),
      commonjs({
        namedExports: {
          "fraction.js": ["Fraction"],
          "nouislider": ["PipsMode"],
        }
      }),
      typescript(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".scss"],
        extract: true,
        minimize: false,
      }),
      css({ output: "qni.css" }),
      terser({
        mangle: true,
        keep_classnames: /Element$/,
        compress: true
      })
    ]
  },
  {
    input: "./app/javascript/lib/simulator.ts",
    output: {
      file: "dist/simulator.min.js",
      format: "es",
      sourcemap: true,
      banner
    },
    context: "window",
    plugins: [
      resolve(),
      typescript(),
      commonjs({
        namedExports: {
          "fraction.js": ["Fraction"],
        }
      }),
      terser({
        mangle: true,
        compress: true
      })
    ]
  }
]
