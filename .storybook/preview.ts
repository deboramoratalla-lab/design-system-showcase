import type { Preview } from "@storybook/react-vite";
import { createElement, Fragment } from "react";
import "../src/styles/tokens.css";
import "../src/styles/storybook.css";
import "../src/stories/Documentation/OnThisPageNav.css";
import { OnThisPageNav } from "../src/stories/Documentation/OnThisPageNav";

const preview: Preview = {
  parameters: {
    docs: {
      defaultName: "Docs",
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          [
            "Start Here",
            "Changelog",
          ],
          "Foundations",
          [
            "Design Tokens",
            "Color",
            [
              "Color Primitives",
            ],
            "Typography",
            "Spacing",
            "Layout",
            [
              "Layout Grids",
            ],
            "Elevations",
            "Focus",
            "Aspect Ratio",
            "Borders & Radius",
          ],
          "Brand",
          [
            "Logo",
            "Wordmark",
            "Colors",
            "Typography",
            "Iconography",
            "Photography",
          ],
          "Components",
          [
            "Avatar",
            [
              "Docs",
              "Types",
              "Shapes",
              "Fallbacks",
              "Grouped",
              "Base",
              "Object Variant",
              "Identity Variant",
              "Sizes",
            ],
            "List Item",
            [
              "Docs",
              "Base",
              "Leading",
              "Trailing",
              "Status",
              "Matrix",
            ],
            "Button",
            [
              "Docs",
              "Base",
              "Variants",
              "Destructive",
              "Sizes",
              "With Icons",
              "Loading",
              "Button Group",
            ],
          ],
        ],
      },
    },

    controls: {
      expanded: true,
      sort: "requiredFirst",
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
      const isDocsEntry = context.id.endsWith("--docs");
      const isCustomComponentDocs =
        context.id === "components-button--docs" ||
        context.id === "components-avatar--docs" ||
        context.id === "components-list-item--docs";

      const isFoundationBrandWelcomeStory =
        context.viewMode === "story" &&
        context.parameters?.layout === "fullscreen" &&
        context.id !== "welcome-start-here--start-here" &&
        (context.title.startsWith("Welcome/") ||
          context.title.startsWith("Foundations/") ||
          context.title.startsWith("Brand/"));

      const isGenericDocsEntry =
        context.viewMode === "docs" &&
        isDocsEntry &&
        !isCustomComponentDocs &&
        (context.title.startsWith("Welcome/") ||
          context.title.startsWith("Foundations/") ||
          context.title.startsWith("Brand/") ||
          context.title.startsWith("Components/"));

      const showOnThisPage =
        isFoundationBrandWelcomeStory || isGenericDocsEntry;

      if (showOnThisPage) {
        const wrapperClassName =
          context.id === "welcome-changelog--updates"
            ? "docs-with-on-this-page is-changelog"
            : "docs-with-on-this-page";

        return createElement(
          "div",
          { className: wrapperClassName },
          createElement(
            "div",
            { className: "docs-with-on-this-page-main" },
            createElement(Story)
          ),
          createElement(
            "div",
            { className: "docs-with-on-this-page-nav" },
            createElement(OnThisPageNav, { storyId: context.id })
          )
        );
      }

      return createElement(
        Fragment,
        null,
        createElement(Story)
      );
    },
  ],
};

export default preview;
