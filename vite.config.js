import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/findthepair/", // фикс 404 на gh-pages (на всякий случай)
});
