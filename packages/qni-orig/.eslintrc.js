module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["eslint:recommended"],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
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
  ignorePatterns: ["app/assets/javascripts/administrate/"],
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
      },
      files: ["*.ts"],
    },
  ],
}
