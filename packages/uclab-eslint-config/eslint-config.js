// eslint-disable-next-line no-undef
module.exports = {
  // root: true,
  plugins: ["@typescript-eslint"],
  extends: [
    // "next",
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  // env: {
  //   browser: true,
  // },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@next/next/no-html-link-for-pages": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": ["error", { order: ["modifiers", "custom"] }],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@packages/**",
            group: "internal",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "no-extra-boolean-cast": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    next: {
      rootDir: ["apps/*/", "packages/**/*/"],
    },
  },
}
