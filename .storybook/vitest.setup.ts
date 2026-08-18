import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/react-vite";
import * as projectAnnotations from "./preview";

// Apply the same preview and accessibility configuration in browser tests.
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
