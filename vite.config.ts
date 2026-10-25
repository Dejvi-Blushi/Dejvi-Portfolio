import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {defineConfig} from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
   base: 'https://github.com/Dejvi-Blushi/Dejvi-Portfolio',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./")
    }
  }
});
