import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my_admin_web/", // 关乎部署之后的打包文件路径
  plugins: [react(), WindiCSS()],
});
