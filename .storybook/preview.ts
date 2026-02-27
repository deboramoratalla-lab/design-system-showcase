import type { Preview } from "@storybook/react-vite";
import "../src/styles/tokens.css";
import "../src/styles/storybook.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Welcome",
          "Foundations",
          [
            "Overview",
            "Design Tokens",
            "Semantic Tokens",
            "Color",
            [
              "Brand Colors",
              "Primitives",
            ],
            "Typography",
            "Spacing",
            "Layout",
            "Elevations",
            "Focus",
            "Aspect Ratio",
            "Borders & Radius",
            "Breakpoints",
          ],
          "Brand",
          [
            "Overview",
            "Logo",
            "Wordmark",
            "Colors",
            "Typography",
            "Iconography",
            "Photography",
          ],
          "Components",
        ],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },

  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
      },
    },
  },

  decorators: [
    (Story, context) => {
      document.documentElement.setAttribute(
        "data-theme",
        context.globals.theme
      );
      return Story();
    },
  ],
};

export default preview;
