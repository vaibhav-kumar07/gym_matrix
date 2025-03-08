module.exports = {
  parser: "@typescript-eslint/parser", // Specify TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "unused-imports"],
  rules: {
    // Rules for unused variables or components
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/jsx-uses-react": "off", // React 17 doesn't need this anymore
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error", // Catch unused imports
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
