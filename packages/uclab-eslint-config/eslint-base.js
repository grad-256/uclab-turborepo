// eslint-disable-next-line no-undef
module.exports = {
    plugins: ["@typescript-eslint"],
    extends: [
      // "eslint:recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      // "plugin:tailwindcss/recommended",
      // "plugin:@typescript-eslint/recommended",
      // "plugin:@typescript-eslint/recommended-requiring-type-checking",
      // "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@next/next/no-html-link-for-pages": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": ["error", { order: ["modifiers", "custom"] }],
    },
  }
  