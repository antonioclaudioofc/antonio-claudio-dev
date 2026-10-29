import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        landing: path.resolve(__dirname, "landing.html"),
        resume: path.resolve(__dirname, "resume.html"),
      },
    },
  },
  server: {
    proxy: {
      "/notify-api": {
        target: "https://notify-me-dev.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/notify-api/, ""),
      },
    },
  },
});
