import { useEffect, useState } from "react";

/**
 * Retorna true quando o sistema do visitante pede menos movimento
 * (macOS: Acessibilidade → Exibição → Reduzir movimento).
 *
 * Começa em `false` também durante a pré-renderização, onde `window`
 * não existe — o valor real é resolvido no primeiro efeito no browser.
 */
export function useReducedMotion(): boolean {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;

        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(query.matches);

        const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, []);

    return reduced;
}

export default useReducedMotion;
