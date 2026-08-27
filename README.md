# bernardorocha.com

Meu site pessoal. Uma home e uma página de currículo, em português e inglês, servidas como
HTML estático.

**No ar:** [bernardorocha.com](https://bernardorocha.com) · currículo em
[/resume](https://bernardorocha.com/resume)

Sou Bernardo Vieira Rocha, estudante de Engenharia de Computação no CEFET-MG. Na equipe
Fórmula CEFAST projetei módulos eletrônicos em Altium Designer e depois respondi pela área
de TI, pela infraestrutura e pela plataforma de sócios.

Este repositório é a única fonte da verdade do site. O antigo repo `cv` foi arquivado.

## Stack

Vite 5 · React 18 · TypeScript · Tailwind CSS · React Router · vite-react-ssg · Netlify.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # build pré-renderizado em dist/
npm run preview
npm run verify     # o portão: lint + typecheck + paridade PT/EN + build
```

`npm run verify` é o que roda no CI a cada push. **O typecheck não é opcional:** `vite build`
não checa tipo nenhum, e foi assim que uma chave de i18n inexistente chegou ao ar renderizando
uma string vazia.

## O site é pré-renderizado

Cada rota vira um HTML estático em `dist/` via `vite-react-ssg`. Não é SPA: um crawler ou um
preview de link do WhatsApp recebe o conteúdo já montado, sem executar JavaScript.

Duas consequências práticas:

- Não existe rewrite `/* -> /index.html 200` no `netlify.toml`. Caminho inexistente cai no 404
  de verdade.
- O CI confere que o HTML estático saiu com conteúdo. Se `grep "Fórmula CEFAST" dist/index.html`
  não retornar nada, a pré-renderização parou de funcionar e o build falha.

SEO por rota vive em `src/components/Seo.tsx`, não no `index.html`.

## Onde fica o conteúdo

Nenhum texto visível é escrito direto em componente `.tsx`.

| O que | Onde |
|---|---|
| Dados: projetos, experiência, formação, certificações, skills | `src/data/content.ts` |
| Textos da interface, em PT e EN | `src/i18n/locales/pt.ts` e `en.ts` |
| Title, description, canonical, Open Graph e JSON-LD, por rota | `src/components/Seo.tsx` |
| Imagens, fontes e favicons | `public/` |

`pt.ts` é a fonte do tipo `TranslationKeys`: adicionar uma chave lá faz o TypeScript exigir a
mesma chave em `en.ts`. Isso é de propósito, e `npm run check:i18n` valida no CI. Site
meio-traduzido é pior que monolíngue.

## Regras de conteúdo

Estão em [`CLAUDE.md`](./CLAUDE.md) e valem para quem editar o site, humano ou agente. As
principais:

1. **Nada de métrica inventada.** Sem contador de projetos, "anos de experiência", "∞ cafés"
   ou barra de proficiência. Número que não pode ser verificado num repo ou documento não entra.
2. **Nenhuma tecnologia listada sem projeto que a use.** Se está em `skills`, existe um projeto
   no site que a prova.
3. **PT e EN sempre juntos.** Nenhuma mudança adiciona chave em um idioma só.
4. **Estados incompletos são ditos, não escondidos.** "Reconexão automática ainda em aberto" é
   conteúdo melhor que silêncio.

O `CLAUDE.md` existe porque parte deste site é escrita com agente de código, e agente sem
restrição escrita reintroduz exatamente o tipo de texto que essas regras proíbem.

## Sistema visual

Tokens e justificativas em `src/index.css`. A escala é fechada de propósito: seis tamanhos de
texto, três pesos, duas famílias (Archivo para texto, JetBrains Mono só para dado e rótulo). As
fontes são auto-hospedadas em `public/fonts`, com subset latin, para não abrir conexão com
terceiro no caminho crítico.

Um único efeito característico, `CircuitTraces.tsx`. Todo movimento morre sob
`prefers-reduced-motion`.

## Segurança

Toda variável com prefixo `VITE_` é **embutida no JavaScript enviado ao navegador**. Ela não é
secreta. Chamada que precise de chave vai para uma Netlify Function, lendo a variável **sem** o
prefixo.

## Deploy

Netlify, automático a cada push na `master`. Configuração em `netlify.toml`, que também define
os headers de segurança e o cache imutável de `assets/` e `fonts/`.

`bernardorocha.me` é um alias apontando para o mesmo site. O 301 para o domínio principal
depende de marcar `bernardorocha.com` como primary domain no painel; enquanto isso, o canonical
de todas as páginas já aponta para o `.com`.
