import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extending the Next.js and TypeScript configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Adding custom ESLint rules
  {
    rules: {
      // Rule to catch unused variables or imports
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          ignoreRestSiblings: false,
        },
      ],
      // Using the plugin to catch unused imports
      "unused-imports/no-unused-imports": "warn", // or "error" for strictness
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", args: "after-used", ignoreRestSiblings: false },
      ],
    },
    plugins: ["unused-imports"], // Using the unused-imports plugin
  },
];

export default eslintConfig;
