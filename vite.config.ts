import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project site: https://vellsneha.github.io/snehavel/
export default defineConfig({
  base: "/snehavel/",
  plugins: [react()],
  resolve: {
    alias: {
      "@social": path.resolve(__dirname, "social"),
    },
  },
});
