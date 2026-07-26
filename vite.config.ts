import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // necesario para GitHub Pages (subpath)
  server: {
    host: true, // expone en la LAN
    port: 5173,
  },
});
