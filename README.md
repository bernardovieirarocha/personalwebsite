# bernardorocha.com

Site pessoal de **Bernardo Vieira Rocha**: Engenharia de Computação (CEFET-MG) e Ciência da
Computação (PUC Minas), projetista eletrônico da equipe Fórmula CEFAST.

Este repositório é a **única fonte da verdade** do site. O repositório `cv`, que servia
`bernardorocha.me`, está sendo aposentado; o `.me` passa a redirecionar (301) para cá.

## Stack

Vite 5 · React 18 · TypeScript · Tailwind CSS · shadcn/ui · React Router · deploy na Netlify.

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # build de produção em dist/
npm run preview    # serve o build
npm run lint
```

## Onde fica o conteúdo

Nenhum texto visível é escrito direto em componente `.tsx`. Para editar o site:

| O que | Onde |
|---|---|
| Dados (projetos, experiência, formação, certificações, skills) | `src/data/content.ts` |
| Textos da interface, em PT e EN | `src/i18n/locales/pt.ts` e `en.ts` |
| Metadados, Open Graph e JSON-LD | `index.html` |
| Imagens e favicons | `public/` |

`src/i18n/locales/pt.ts` é a fonte do tipo `TranslationKeys`. Adicionar uma chave em `pt.ts`
faz o TypeScript exigir a mesma chave em `en.ts`, de propósito: o site é bilíngue completo e
meio-traduzido é pior que monolíngue.

## Regras de conteúdo

Estão em [`CLAUDE.md`](./CLAUDE.md) e valem para qualquer um que edite o site, humano ou agente.
As duas principais:

1. **Nada de métrica inventada.** Sem contador de projetos, "anos de experiência", "∞ cafés"
   ou barra de proficiência. Número que não pode ser verificado não entra.
2. **Nenhuma tecnologia listada sem projeto que a use.** Se está em `skills`, existe um projeto
   no site que prova.

## Segurança

Toda variável de ambiente com prefixo `VITE_` é **embutida no JavaScript enviado ao navegador**.
Ela não é secreta. Chamada que precise de chave vai para uma Netlify Function em
`netlify/functions/`, lendo a variável **sem** o prefixo `VITE_`.

## Deploy

Netlify, automático a cada push na branch principal. Configuração em `netlify.toml`.

## TODO

- [ ] Substituir `public/og-image.png` pelo card definitivo (1200×630).
- [ ] Prerender das rotas (hoje é SPA pura: crawlers e previews de link não veem conteúdo).
- [ ] `sitemap.xml`, `robots.txt` e `lang` dinâmico sincronizado com o i18n.
- [ ] Mover a chamada da API de versículos para uma Netlify Function e rotacionar a chave antiga.
