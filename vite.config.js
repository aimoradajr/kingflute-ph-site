import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kingflute-ph-site/", // Add your repository name here
  plugins: [react()],
});
