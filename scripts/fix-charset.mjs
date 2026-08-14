/**
 * Sobe <meta charset> para a primeira posição do <head> em cada HTML do dist.
 *
 * Por que isto existe: o react-helmet-async (via vite-react-ssg) injeta title,
 * description, canonical e as tags Open Graph/Twitter no TOPO do <head>, empurrando
 * o <meta charset> do index.html para depois do byte 1700. A especificação pede
 * que a codificação apareça nos primeiros 1024 bytes; passando disso o browser
 * precisa reparsear o documento, e o Lighthouse reprova a auditoria `charset`.
 *
 * Mexer na ordem de injeção do helmet não é possível pela API dele, então a
 * correção é aqui, depois do build.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const CHARSET = '<meta charset="UTF-8">';
const LIMIT = 1024;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith(".html") ? [full] : [];
  });
}

let fixed = 0;
let alreadyOk = 0;

for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");

  const existing = html.match(/<meta[^>]+charset[^>]*>/i);
  const position = existing ? html.indexOf(existing[0]) : -1;

  if (position !== -1 && position < LIMIT) {
    alreadyOk++;
    continue;
  }

  // Remove a declaração antiga (onde quer que esteja) e reinsere logo após <head>.
  const withoutOld = existing ? html.replace(existing[0], "") : html;
  const headIndex = withoutOld.indexOf("<head>");

  if (headIndex === -1) {
    console.warn(`  ${file}: sem <head>, ignorado`);
    continue;
  }

  const insertAt = headIndex + "<head>".length;
  const next = withoutOld.slice(0, insertAt) + CHARSET + withoutOld.slice(insertAt);
  writeFileSync(file, next);

  const check = next.indexOf(CHARSET);
  if (check >= LIMIT) {
    console.error(`  ${file}: charset ainda no byte ${check}`);
    process.exitCode = 1;
  }
  fixed++;
}

console.log(`charset: ${fixed} arquivo(s) corrigido(s), ${alreadyOk} já estava(m) no lugar.`);
