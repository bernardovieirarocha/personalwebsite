# CLAUDE.md — bernardorocha.com

Contexto para o Claude Code trabalhando neste repositório. Leia antes de qualquer alteração.

## O que é este projeto

Portfólio pessoal de **Bernardo Vieira Rocha** ("berd"), em `https://bernardorocha.com`.
Este repositório (`personalwebsite`) é a **única fonte da verdade**. O antigo repo `cv`
(que servia `bernardorocha.me`) foi aposentado; `bernardorocha.me` redireciona 301 para cá.

**Stack:** Vite 5 · React 18 · TypeScript · Tailwind CSS · shadcn/ui · React Router · Netlify.

## Quem é o dono do site (fatos verificados — use estes, não invente outros)

- Cursa **Engenharia de Computação no CEFET-MG** (2024–2029, campus BH) **e Ciência da
  Computação na PUC Minas** (2024–2028), simultaneamente.
- **Fórmula CEFAST (SAE), desde 2024** — Projetista Eletrônico (Altium Designer / PCB).
  Atua tanto na eletrônica embarcada e telemetria quanto no lado de software/infra da equipe.
- **Monitor de AEDS I na PUC Minas**, 2024–2025.
- **Plano de Trabalho de Extensão (AEX PJ085-2026)** na Fórmula CEFAST — 600 h, 05/2026–12/2026.
- **Não tem estágio.** Não inventar um, nem "experiência freelance", nem preencher lacuna na
  timeline. Não está buscando estágio imediatamente; está construindo base para isso.
- Perfil-alvo: **híbrido hardware + software**, com braço de **pesquisa**.
- **Candidatura em aberto** (não publicar até ser confirmada): IC voluntária do Prof. Jeferson
  Chaves — verificação e refatoração de módulos Verilog HDL do núcleo do NES na plataforma
  MiSTer FPGA, com testbenches automatizados e ferramentas Cadence.

Projetos reais que devem aparecer (repos e contexto existem):
Plataforma de Sócios da Fórmula CEFAST · migração phpBB→NodeBB (Docker/VPS) · ponte ESP32
serial↔TCP com relay mTLS para tuning remoto de ECU MegaSquirt · datalogger MAQ, PDM com CAN,
modem LTE Cat-M1 BG95-M3 · homelab Proxmox/ZFS (docs em MkDocs) · CriptoEscape (ECC) ·
RustCraft (Rust) · site da Fórmula CEFAST (Next.js).

**Fora do site por decisão do dono:** apresentação de TLS 1.3 / handshake híbrido pós-quântico
e artigo de RSA-OAEP. Não reintroduzir.

## Regras de conteúdo — não negociáveis

1. **Nunca invente métricas.** Proibido: contadores de projetos, "anos de experiência",
   número de certificações, "∞ cafés", percentuais de proficiência, barras de skill.
   Se um número não pode ser verificado num repo ou documento, ele não entra.
2. **Nunca liste uma tecnologia sem projeto correspondente.** Se `X` está na lista de stack,
   deve existir um projeto no site que usa `X`. Ao adicionar uma skill, aponte qual projeto a prova.
3. **Sem slogan.** Frases como "transformando bits em impacto real", "building what matters",
   "clean code, robust systems, measurable impact", "apaixonado por tecnologia" são banidas.
   Toda frase da home deve conter um substantivo concreto: uma instituição, um sistema, um artefato.
4. **Texto em primeira pessoa, direto, sem superlativo.** Preferir "projetei a PCB do X" a
   "sou apaixonado por design de hardware".
5. **Estados incompletos são ditos, não escondidos.** "Reconexão automática ainda em aberto"
   é conteúdo melhor que silêncio.
6. **PT e EN sempre juntos.** Nenhum PR pode adicionar uma chave em um idioma só.
   O site é bilíngue completo — meio-traduzido é pior que monolíngue.
7. **Sem dado pessoal sensível no bundle.** Sem telefone, sem endereço. E-mail é o único canal.
8. **Nenhuma chave de API com prefixo `VITE_`.** Tudo com `VITE_` vai para o JavaScript público.
   Chamada autenticada → Netlify Function em `netlify/functions/`.

## Regras de código

- Todo conteúdo textual vive em `src/content/` (dados) e `src/i18n/locales/{pt,en}.ts` (strings).
  **Nunca** escreva texto visível direto num componente `.tsx`.
- `src/content/*` é validado por schema **Zod** — o build falha se um campo obrigatório faltar.
- i18n é **tipado**. Não reintroduzir o padrão de chave plana em string (`t('nav.about')`) do
  repo `cv` antigo; ele falha silenciosamente.
- Um único `src/lib/utils.ts`. Não recriar `src/libs/`.
- Componentes de `src/components/ui/` são shadcn — não editar à mão; regenerar quando preciso.
- Toda animação respeita `prefers-reduced-motion`.
- Toda imagem tem `alt`, `width`, `height` e `loading="lazy"` (exceto a do hero).

## Sistema visual — a escala é fechada

Tokens e justificativas ficam em `src/index.css`. Regras que não se reabrem sem motivo:

1. **Seis tamanhos de texto, três pesos.** `text-xs · sm · base · lead · title · display`.
   `text-xl` e `text-3xl`..`9xl` não são gerados de propósito. Se algo "não cabe",
   o problema é de hierarquia, não de tamanho. (`lg` e `2xl` existem só como apelido
   para código shadcn gerado — não use em componente de aplicação.)
2. **Duas famílias.** Archivo para texto, JetBrains Mono só para dado e rótulo
   (período, tecnologia, numeração de seção). Mono nunca em prosa.
3. **Fontes auto-hospedadas** em `public/fonts`, variáveis, subset latin + latin-ext.
   Não reintroduzir `@import` de Google Fonts: bloqueia o render e abre conexão com
   terceiro. Trocou a fonte, troca o nome do arquivo (o cache é `immutable`).
4. **Ritmo de seção com critério.** `py-section` abre bloco novo; `py-section-tight`
   continua o anterior. Não voltar a `py-32` em tudo.
5. **Um efeito característico só**: `CircuitTraces.tsx`. Não somar orbs, noise, grid,
   glow nem gradiente em texto. Gradiente em texto é proibido.
6. **Revelação por seção**, um `<Reveal>` por seção. Não embrulhar card a card.
   Conteúdo é visível por padrão: nunca dependa da transição para ele existir.
7. **Todo movimento morre sob `prefers-reduced-motion`** — há um bloco global no fim
   de `src/index.css`. Animação nova não precisa de guarda própria, mas confira.
8. **Foco**: um `:focus-visible` global. Não usar `focus-visible:ring` do Tailwind
   (o `ring-offset` é branco e abre halo sobre o fundo escuro).
9. **Contraste**: texto ≥4.5:1 em qualquer superfície; `--border-strong` (3:1) para
   limite que precisa ser identificável como controle, `--border` só para estrutura.
10. **`src/components/ui/` tem um arquivo** (`button.tsx`). Os outros 48 foram
    removidos: não entravam no JS, mas o Tailwind escaneia tudo e gerava CSS para
    eles. Precisou de um componente shadcn? Regenere pelo CLI, não copie de volta.

## Comandos

```bash
npm install
npm run dev        # dev server
npm run build      # build de produção
npm run preview    # preview do build
npm run lint       # eslint
```

## Antes de abrir PR

- [ ] `npm run verify` passa (lint + `tsc -b` + paridade PT/EN + build pré-renderizado).
      O typecheck não é opcional: `vite build` não checa tipo nenhum, e foi assim que
      `t.contact.locationLabel` chegou ao ar renderizando vazio.
- [ ] Chaves de i18n existem em PT **e** EN.
- [ ] Nenhum número novo sem fonte verificável.
- [ ] Nenhum texto visível hardcoded em componente.
- [ ] Lighthouse mobile ≥ 95 em Performance, A11y, Best Practices, SEO.

## O que NÃO fazer

- Não reintroduzir `lovable-tagger` nem o nome de pacote `vite_react_shadcn_ts`.
- Não adicionar uma seção nova sem cortar outra — a home tem orçamento fixo de atenção.
- Não usar `localStorage`/`sessionStorage` como única fonte de estado de idioma sem fallback
  para a preferência do navegador.
- Não commitar `.env`.
