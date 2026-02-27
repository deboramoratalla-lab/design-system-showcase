import StyleDictionary from "style-dictionary";

export default {
  source: ["design-tokens/tokens-core-semantic-button.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { selector: ":root" }
        }
      ]
    }
  }
};