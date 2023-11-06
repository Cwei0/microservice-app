module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["import", "prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  rules: {
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-underscore-dangle": ["error", { allow: ["_id", "_update"] }],
    "class-methods-use-this": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
