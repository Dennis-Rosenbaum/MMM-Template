import css from "@eslint/css"
import { defineConfig } from "eslint/config"
import globals from "globals"
import js from "@eslint/js"
import markdown from "@eslint/markdown"
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
        Log: "readonly",
        Module: "readonly",
      },
    },
    plugins: { js, stylistic },
    extends: ["js/recommended", "stylistic/recommended"],
    rules: {
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/comma-dangle": ["error", "only-multiline"],
      "@stylistic/max-statements-per-line": ["error", { max: 2 }],
      "@stylistic/quotes": ["error", "double"]
    }
  },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
])
