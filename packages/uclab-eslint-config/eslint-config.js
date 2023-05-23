// eslint-disable-next-line no-undef
module.exports = {
  // root: true,
  plugins: ["eslint-plugin-import", "eslint-plugin-react", "@typescript-eslint"],
  extends: [
    // "next",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    // "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    // "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latet",
    sourceType: "module",
    project: "tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "error",
    "@next/next/no-html-link-for-pages": "off",
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
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            from: "./src/features/**/routes/**",
            target: "./src/!(pages)/**",
            message: "routesからpagesへのimportのみ可能です",
          },
        ],
      },
    ],
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
