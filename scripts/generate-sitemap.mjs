#!/usr/bin/env node
/**
 * Gera dist/sitemap.xml a partir da lista de rotas do site.
 * Roda depois do build (ver o script "build" em package.json).
 *
 * A lista de rotas vive em src/routes.tsx (SSG_ROUTES) — é lida como texto
 * aqui para o script não precisar de um passo de compilação de TypeScript.
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const SITE_URL = "https://bernardorocha.com";

const routesSource = readFileSync(resolve(root, "src", "routes.tsx"), "utf8");
const listMatch = /SSG_ROUTES\s*=\s*\[([\s\S]*?)\]/.exec(routesSource);
if (!listMatch) {
  console.error("Não encontrei SSG_ROUTES em src/routes.tsx.");
  process.exit(1);
}

const routes = [...listMatch[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
if (routes.length === 0) {
  console.error("SSG_ROUTES está vazio.");
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map((route) => {
    const loc = `${SITE_URL}${route === "/" ? "/" : route}`;
    const priority = route === "/" ? "1.0" : "0.8";
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>monthly</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outDir = resolve(root, "dist");
if (!existsSync(outDir)) {
  console.error("dist/ não existe. Rode o build antes de gerar o sitemap.");
  process.exit(1);
}

writeFileSync(resolve(outDir, "sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml gerado com ${routes.length} rota(s): ${routes.join(", ")}`);

// A Netlify serve automaticamente dist/404.html em caminhos inexistentes.
// Com o dirStyle padrão ("flat"), o vite-react-ssg já escreve dist/404.html
// direto. Se algum dia o dirStyle virar "nested", a rota sai em
// dist/404/index.html e este bloco faz a cópia.
if (existsSync(resolve(outDir, "404.html"))) {
  console.log("404.html OK.");
} else if (existsSync(resolve(outDir, "404", "index.html"))) {
  copyFileSync(resolve(outDir, "404", "index.html"), resolve(outDir, "404.html"));
  console.log("404.html gerado a partir de dist/404/index.html.");
} else {
  console.error("ERRO: nenhuma página 404 foi gerada — confira includedRoutes em vite.config.ts.");
  process.exit(1);
}

// Confere que as rotas do sitemap existem mesmo como HTML estático.
const faltando = routes.filter((route) => {
  const flat = route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
  const nested = route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;
  return !existsSync(resolve(outDir, flat)) && !existsSync(resolve(outDir, nested));
});

if (faltando.length) {
  console.error(`ERRO: rotas no sitemap sem HTML estático: ${faltando.join(", ")}`);
  process.exit(1);
}
console.log("Todas as rotas do sitemap têm HTML estático.");
