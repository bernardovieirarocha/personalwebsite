import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * useLayoutEffect avisa no console durante a pré-renderização, onde não há
 * layout para medir. No servidor cai para useEffect (que lá é no-op); no
 * browser continua sendo layout effect, que é o ponto — decidir antes da
 * pintura, para o conteúdo não piscar visível e sumir.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Revelação por SEÇÃO.
 *
 * O padrão anterior embrulhava cada card, cada parágrafo e cada chip num
 * wrapper próprio com delay escalonado — 39 wrappers e 8 delays distintos —
 * e o efeito era o de uma página que nunca termina de carregar.
 *
 * Três regras que o padrão antigo quebrava:
 *
 * 1. O conteúdo é visível por padrão. `revealed` começa em `true`, então o
 *    HTML pré-renderizado e o primeiro render do cliente são idênticos (sem
 *    mismatch de hidratação) e nenhum crawler, leitor de tela ou impressão
 *    recebe uma seção em opacity:0. O estado escondido só é assumido depois
 *    da montagem, e só para o que está fora da viewport.
 * 2. O que já está na tela na montagem não anima. Revelar o que o visitante
 *    já está olhando é ruído.
 * 3. Quem pede menos movimento nunca vê o estado escondido.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // Decide antes da pintura, para não piscar visível→oculto.
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const element = ref.current;
    if (!element) return;

    // Já visível na montagem? Então não há o que revelar.
    const box = element.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.9) return;

    setRevealed(false);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || revealed) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion, revealed]);

  return { ref, revealed };
}

/**
 * Envolve UMA seção. Não aninhe: se você está pondo um <Reveal> dentro de
 * outro, o que você quer é escalonar uma lista, e isso é trabalho do
 * `stagger` abaixo.
 */
export const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "ol" | "ul";
} & React.HTMLAttributes<HTMLElement>) => {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${className}`}
      data-revealed={revealed}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default useReveal;
