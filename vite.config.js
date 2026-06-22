import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  publicPath: "/",
  publicRuntimeConfig: {
    baseURL: "/",
  },
  plugins: [vue(), reactRefresh()],
  css: ["bootstrap/dist/css/bootstrap.css"],
});
