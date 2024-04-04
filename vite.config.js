import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // eslint-disable-next-line no-undef
        target: process.env.API_URL,
        changeOrigin: true,
      },
    },
  },
});
