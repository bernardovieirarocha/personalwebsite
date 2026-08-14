import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Pré-renderização (vite-react-ssg): cada caminho abaixo vira um HTML
  // estático em dist/. Sem isso o site é uma SPA vazia para crawlers e para
  // os previews de link do LinkedIn/WhatsApp.
  //
  // MANTENHA EM SINCRONIA com SSG_ROUTES em src/routes.tsx.
  // "/404" existe só para gerar a página de erro; ela não entra no sitemap.
  ssgOptions: {
    // "defer", não "async": o vite-react-ssg injeta o bundle ANTES do inline
    // <script> que define window.__VITE_REACT_SSG_HASH__. Com "async" o módulo
    // executa antes do parser chegar nesse inline, o hash sai `undefined`, o
    // fetch do manifesto cai no fallback SPA (HTML), o JSON.parse quebra e o
    // React Router pinta "Unexpected Application Error!" por cima da página
    // pré-renderizada. "defer" mantém a ordem do documento.
    script: "defer",
    formatting: "minify",
    includedRoutes: () => ["/", "/resume", "/404"],
  },
}));
