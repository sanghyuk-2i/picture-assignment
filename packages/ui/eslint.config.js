import baseConfig from "@repo/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...baseConfig,
  {
    ignores: ["dist/**", "*.config.js"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
