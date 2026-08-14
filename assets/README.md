# assets/

Originais, **fora de `public/`** — nada aqui é copiado para `dist/` nem servido.

`fotoprojetos-originais/` guarda as capturas em tamanho cheio (JPEG ~3000px).
O que o site usa são as versões em `public/projects/`: WebP com no máximo
1800px de largura, que é o suficiente para a coluna de conteúdo (1024px) em
tela 2x. Juntas elas pesam 484 KB contra 1 MB dos originais.

Trocou uma captura? Converta antes de pôr em `public/projects/` e atualize
`width`/`height` em `src/data/content.ts` — eles reservam o espaço da imagem
antes dela carregar, então precisam bater com o arquivo.
