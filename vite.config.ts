import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "/my_admin_web/",
  base: "./",
  plugins: [react(), WindiCSS()],
});
