/**
 * Cabeçalho de seção, um só lugar.
 *
 * Antes cada seção repetia o mesmo bloco à mão: número mono, h2 e uma régua
 * `flex-1 h-px` atravessando o resto da linha. A régua era o tique mais
 * template da página — separava nada, só preenchia. Saiu.
 *
 * O número ficou porque é par com a numeração da navegação (01..05 levam a
 * estas mesmas seções), então carrega orientação, não decoração. Ele agora
 * lê como designador de referência de esquemático, alinhado acima do
 * título, em vez de prefixo colado nele.
 */
const SectionHeading = ({
  number,
  title,
  id,
}: {
  number: string;
  title: string;
  id?: string;
}) => (
  <div className="mb-10 sm:mb-14">
    <span className="block font-mono text-xs text-primary" aria-hidden="true">
      {number}
    </span>
    <h2 id={id} className="mt-2 text-title font-bold text-foreground">
      {title}
    </h2>
  </div>
);

export default SectionHeading;
