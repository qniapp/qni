module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["eslint:recommended"],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double", { "avoidEscape": true }],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-trailing-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 2 }],
    "prefer-const": ["error"],
    "getter-return": ["error"],
    curly: ["error", "multi-line"],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      plugins: ["github", "custom-elements"],
      extends: [
        "eslint:recommended",
        "plugin:github/recommended",
        "plugin:github/browser",
        "plugin:github/typescript",
        "plugin:custom-elements/recommended"
      ],
      rules: {
        "custom-elements/define-tag-after-class-definition": "off",
        "custom-elements/expose-class-on-global": "off",
      },
      files: ["*.ts"],
    },
  ],
}
