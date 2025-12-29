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

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === "pt" || stored === "en") {
                return stored;
            }
            // Default to browser language if Portuguese, otherwise English
            const browserLang = navigator.language.split("-")[0];
            return browserLang === "pt" ? "pt" : "en";
        }
        return "pt";
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

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
