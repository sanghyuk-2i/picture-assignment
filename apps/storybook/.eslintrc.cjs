/** @type {import("eslint").Linter.Config} */
const storybook = require("eslint-plugin-storybook");

module.exports = {
  root: true,
  extends: ["@repo/eslint-config/index.js"],
};
