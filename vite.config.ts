import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const isGhPages = mode === "gh";
  const repoName = "Website"; // ensure this matches your GitHub repo name

  return {
    server: {
      host: "::",
      port: 8080,
    },
    base: isGhPages ? "./" : "/",
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
