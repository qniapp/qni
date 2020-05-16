module.exports = {
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
};
