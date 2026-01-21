import baseConfig from "@repo/eslint-config";

export default [
  ...baseConfig,
  {
    ignores: ["storybook-static/**"],
  },
];
