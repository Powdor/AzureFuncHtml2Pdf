const path = require("path");
module.exports = {
    root: true,
    plugins: [
      "prettier"
    ],
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "prettier"
    ],
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 8,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
        spread: true,
        experimentalObjectRestSpread: true 
      }
    },
    env: {
      es6: true,
      browser: true,
      node: true,
      jest: true,
      mocha: true
    },
    rules: {
      "import/no-unresolved":  [2, {commonjs: true, amd: true}],
      "no-console": 2,
      "no-debugger": 0,
      "no-var": 1,
      "semi": [1, "always"],
      "no-trailing-spaces": 1,
      "eol-last": 0,
      "no-unused-vars": 1,
      "no-case-declarations": 0,
      "no-underscore-dangle": 0,
      "no-alert": 0,
      "no-lone-blocks": 0,
      "jsx-quotes": 0,
      "prettier/prettier": "error"
    }
  }
  
