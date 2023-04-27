// eslint-disable-next-line no-undef
module.exports = {
  // root: true,
  plugins: ["eslint-plugin-import", "eslint-plugin-react", "@typescript-eslint"],
  extends: [
    "next",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    // "plugin:tailwindcss/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@next/next/no-html-link-for-pages": "off",
    // "tailwindcss/no-custom-classname": "off",
    // "tailwindcss/classnames-order": ["error", { order: ["modifiers", "custom"] }],
    // "import/order": [
    //   "error",
    //   {
    //     groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
    //     "newlines-between": "always",
    //     pathGroups: [
    //       {
    //         pattern: "react",
    //         group: "builtin",
    //       },
    //       {
    //         pattern: "@/**",
    //         group: "internal",
    //         position: "after",
    //       },
    //       {
    //         pattern: "@packages/**",
    //         group: "internal",
    //       },
    //     ],
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            from: "./features/scouts",
            target: "./!(pages)/**",
            message: "Don't import from apps/web, use packages/web instead",
          },
          {
            from: "./config",
            target: "./pages/**",
            message: "Don't import from apps/web, use packages/web instead",
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
