import tailwindConfig from "@twind/preset-tailwind";
import autoprefix from "@twind/preset-autoprefix";

export default {
  presets: [tailwindConfig(), autoprefix()],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        danger: "#ef4444",
        success: "#10b981",
        warning: "#f59e0b",
      },
    },
  },
};
