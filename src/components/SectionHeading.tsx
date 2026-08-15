/**
 * Cabeçalho de seção, um só lugar.
 *
 * Já teve número (`01.`), régua atravessando a linha e prefixo colado no
 * título. Saiu tudo. Numerar toda seção é gramática de landing page genérica,
 * não voz: o número só carrega informação quando a seção é mesmo uma sequência,
 * e aqui não é: Sobre, Experiência, Skills e Projetos não têm ordem
 * obrigatória.
 *
 * Depois veio o oposto: `text-title` bold, até 40px, e a palavra "Sobre" ficava
 * maior que o conteúdo que ela rotula. A correção seguinte passou do ponto:
 * 14px em mono, MENOR que os 19px da prosa logo abaixo. Os dois números saíram
 * de medição no browser, não de impressão.
 *
 * O valor final é `text-title` reafinado para 26→32px (ver index.css): acima
 * dos 19px do parágrafo de abertura e dos 19px dos títulos de projeto, que são
 * h3 e precisam ficar visivelmente abaixo deste.
 *
 * Sans e não mono: em 32px o monoespaçado fica pesado, e a JetBrains Mono é
 * auto-hospedada só nos pesos 400 a 500, e pedir bold nela rende negrito
 * sintético, borrado. Sem uppercase e sem tracking-wider, que é o eyebrow que
 * o CLAUDE.md bane.
 */
const SectionHeading = ({ title, id }: { title: string; id?: string }) => (
  <h2 id={id} className="mb-7 text-title font-bold text-foreground sm:mb-10">
    {title}
  </h2>
);

export default SectionHeading;
