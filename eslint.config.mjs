import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "no-undef": "error",
      "indent":[ "warn",  2],
    }
  },
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];