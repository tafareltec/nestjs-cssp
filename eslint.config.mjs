import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import nextConfig from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextConfig,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/purity": "off",
    },
  },
]);
