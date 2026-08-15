/**
 * Cabeçalho de seção, um só lugar.
 *
 * Já teve número (`01.`), régua atravessando a linha e prefixo colado no
 * título. Saiu tudo. Numerar toda seção é gramática de landing page genérica,
 * não voz: o número só carrega informação quando a seção é mesmo uma sequência,
 * e aqui não é — Sobre, Experiência, Skills e Projetos não têm ordem
 * obrigatória.
 *
 * Depois veio o oposto: `text-title` bold, até 40px. A palavra "SOBRE" ficava
 * maior que o conteúdo que ela rotula — hierarquia invertida, o andaime na
 * frente do que ele sustenta. Agora é um rótulo: o mesmo tratamento que
 * "Outros projetos" já usava, um degrau acima por ser h2.
 *
 * Sem uppercase e sem tracking-wider de propósito. Rótulo mono maiúsculo e
 * espaçado acima de toda seção é o eyebrow que o CLAUDE.md bane — a forma mais
 * saturada de andaime de IA que existe. O rebaixamento é a ideia boa; o
 * uppercase é o clichê que vem de carona.
 *
 * `font-medium` e não `font-bold`: JetBrains Mono é auto-hospedada só nos pesos
 * 400–500 (ver index.css). Pedir 700 não carrega nada — o browser engrossa o
 * traço por conta, e negrito sintético em mono fica borrado.
 */
const SectionHeading = ({ title, id }: { title: string; id?: string }) => (
  <h2 id={id} className="mb-6 font-mono text-sm font-medium text-foreground sm:mb-8">
    {title}
  </h2>
);

export default SectionHeading;
