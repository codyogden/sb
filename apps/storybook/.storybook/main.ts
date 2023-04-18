import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: [
    "../../web/stories/**/*.mdx",
    "../../web/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
