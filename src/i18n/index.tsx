import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { pt, TranslationKeys } from "./locales/pt";
import { en } from "./locales/en";

export type Language = "pt" | "en";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, TranslationKeys> = {
    pt,
    en,
};

const STORAGE_KEY = "portfolio-language";

/** Preferência do visitante: localStorage primeiro, idioma do browser depois. */
function detectLanguage(): Language {
    if (typeof window === "undefined") return "pt";

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "pt" || stored === "en") return stored;
    } catch {
        // Modo privado / storage bloqueado: cai no idioma do browser.
    }

    return navigator.language?.split("-")[0] === "pt" ? "pt" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Começa SEMPRE em "pt", que é o idioma com que as rotas são
    // pré-renderizadas. Ler localStorage/navigator aqui no inicializador
    // fazia o primeiro render do cliente divergir do HTML do servidor:
    // React descartava a árvore inteira e re-renderizava no cliente
    // (erros #418/#425), jogando fora o ganho do SSG. A preferência é
    // aplicada logo depois da montagem, num efeito.
    const [language, setLanguageState] = useState<Language>("pt");
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        setLanguageState(detectLanguage());
        setHasHydrated(true);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        // Só persiste depois que a detecção rodou, para não gravar o "pt"
        // inicial por cima de uma preferência real do visitante.
        if (!hasHydrated) return;
        try {
            localStorage.setItem(STORAGE_KEY, language);
        } catch {
            // Sem storage o site continua funcionando; só não lembra a escolha.
        }
    }, [language, hasHydrated]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useTranslation must be used within a LanguageProvider");
    }
    return context;
}
