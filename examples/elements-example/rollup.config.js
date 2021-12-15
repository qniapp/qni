import resolve from "@rollup/plugin-node-resolve"

export default [
  {
    input: "./src/application.js",
    output: [
      {
        file: "./dist/application.js",
        format: "es",
        sourcemap: true,
      }
    ],
    context: "window",
    plugins: [
      resolve(),
    ],
  },
]
