#!/usr/bin/env node
/**
 * Falha se PT e EN não tiverem exatamente as mesmas chaves de tradução.
 *
 * O TypeScript já cobre parte disso (en.ts é tipado por TranslationKeys),
 * mas este script roda no CI e dá uma mensagem legível apontando a chave
 * exata que faltou — inclusive em PRs de quem não roda o typecheck local.
 *
 * O site é bilíngue completo: meio-traduzido é pior que monolíngue.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const localesDir = resolve(here, "..", "src", "i18n", "locales");

/** Remove comentários e o conteúdo de strings, preservando o comprimento da fonte. */
function blankOutNoise(source) {
  const out = source.split("");
  let i = 0;
  while (i < out.length) {
    const char = source[i];
    const next = source[i + 1];

    if (char === "/" && next === "/") {
      while (i < out.length && source[i] !== "\n") out[i++] = " ";
      continue;
    }
    if (char === "/" && next === "*") {
      out[i++] = " ";
      out[i++] = " ";
      while (i < out.length && !(source[i] === "*" && source[i + 1] === "/")) out[i++] = " ";
      if (i < out.length) {
        out[i++] = " ";
        out[i++] = " ";
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      const quote = char;
      i++; // mantém a aspa de abertura
      while (i < out.length && source[i] !== quote) {
        if (source[i] === "\\") out[i++] = " ";
        if (i < out.length) out[i++] = " ";
      }
      i++; // mantém a aspa de fechamento
      continue;
    }
    i++;
  }
  return out.join("");
}

/** Extrai os caminhos de chave ("resume.sections.experience") de um locale. */
function extractKeys(file) {
  const raw = readFileSync(resolve(localesDir, file), "utf8");
  const source = blankOutNoise(raw);

  // recorta exatamente o objeto exportado (`export const pt = { ... }`),
  // ignorando imports acima e declarações de tipo abaixo
  const exportAt = source.search(/export\s+const\s+[A-Za-z_$][\w$]*\s*(?::[^=]+)?=\s*\{/);
  if (exportAt === -1) throw new Error(`Objeto exportado não encontrado em ${file}`);

  const open = source.indexOf("{", exportAt);
  let depth = 0;
  let close = -1;
  for (let i = open; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        close = i;
        break;
      }
    }
  }
  if (close === -1) throw new Error(`Objeto exportado não fecha em ${file}`);

  const body = source.slice(open, close + 1);

  const keys = new Set();
  const stack = [];
  const keyRe = /([A-Za-z_$][\w$]*)\s*:/y;

  for (let i = 0; i < body.length; i++) {
    const char = body[i];

    if (char === "}") {
      stack.pop();
      continue;
    }

    keyRe.lastIndex = i;
    const match = keyRe.exec(body);
    if (!match) continue;

    const name = match[1];
    let j = keyRe.lastIndex;
    while (j < body.length && /\s/.test(body[j])) j++;

    if (body[j] === "{") {
      stack.push(name);
      i = j; // entra no objeto aninhado
    } else {
      keys.add([...stack, name].join("."));
      i = keyRe.lastIndex - 1;
    }
  }

  return keys;
}

const pt = extractKeys("pt.ts");
const en = extractKeys("en.ts");

const missingInEn = [...pt].filter((key) => !en.has(key)).sort();
const missingInPt = [...en].filter((key) => !pt.has(key)).sort();

if (missingInEn.length === 0 && missingInPt.length === 0) {
  console.log(`i18n OK — ${pt.size} chaves presentes em PT e EN.`);
  process.exit(0);
}

if (missingInEn.length) {
  console.error("\nFaltando em en.ts:");
  missingInEn.forEach((key) => console.error(`  - ${key}`));
}
if (missingInPt.length) {
  console.error("\nFaltando em pt.ts:");
  missingInPt.forEach((key) => console.error(`  - ${key}`));
}
console.error("\nO site é bilíngue completo. Adicione a chave nos dois idiomas.");
process.exit(1);
