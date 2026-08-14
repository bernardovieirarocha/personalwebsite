/**
 * Cabeçalho de seção, um só lugar.
 *
 * Já teve número (`01.`), régua atravessando a linha e prefixo colado no
 * título. Saiu tudo. Numerar toda seção é gramática de landing page genérica,
 * não voz: o número só carrega informação quando a seção é mesmo uma sequência,
 * e aqui não é — Sobre, Experiência, Skills e Projetos não têm ordem
 * obrigatória. A hierarquia agora vem do tamanho e do peso do próprio título.
 */
const SectionHeading = ({ title, id }: { title: string; id?: string }) => (
  <h2 id={id} className="mb-10 text-title font-bold text-foreground sm:mb-14">
    {title}
  </h2>
);

export default SectionHeading;
