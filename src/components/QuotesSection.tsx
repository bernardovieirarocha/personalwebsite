import { useState, useEffect, useCallback } from 'react';
import { Quote as QuoteIcon, Book, RefreshCw } from 'lucide-react';
import { quotes, Quote } from '@/data/quotes';
import { AnimatedSection } from '@/hooks/useScrollAnimation';
import { useTranslation } from '@/i18n';

interface VerseOfDay {
    content: string;
    reference: string;
}

const YOUVERSION_API_KEY = import.meta.env.VITE_YOUVERSION_API_KEY || '';
const YOUVERSION_API_URL = 'https://api.youversion.com/v1';

// Bible IDs: 206 = NLT (English), 211 = NVI (Portuguese)
const BIBLE_IDS = {
    en: 206,
    pt: 211,
};

const QuotesSection = () => {
    const { t, language } = useTranslation();
    const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
    const [verseOfDay, setVerseOfDay] = useState<VerseOfDay | null>(null);
    const [showVerse, setShowVerse] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [quoteIndex, setQuoteIndex] = useState(0);

    // Get the day of the year (1-366)
    const getDayOfYear = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now.getTime() - start.getTime();
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor(diff / oneDay);
    };

    // Fetch verse of the day from YouVersion API
    const fetchVerseOfDay = useCallback(async () => {
        try {
            const day = getDayOfYear();
            const bibleId = BIBLE_IDS[language as keyof typeof BIBLE_IDS] || BIBLE_IDS.en;

            // Step 1: Get the passage ID for today's verse
            const vodResponse = await fetch(
                `${YOUVERSION_API_URL}/verse_of_the_days/${day}`,
                {
                    headers: {
                        'X-YouVersion-Developer-Token': YOUVERSION_API_KEY,
                        'Accept': 'application/json',
                    },
                }
            );

            if (!vodResponse.ok) throw new Error('Failed to fetch verse of the day');

            const vodData = await vodResponse.json();
            const passageId = vodData.passage_id;

            // Step 2: Get the actual passage text
            const passageResponse = await fetch(
                `${YOUVERSION_API_URL}/bibles/${bibleId}/passages/${passageId}?format=text`,
                {
                    headers: {
                        'X-YouVersion-Developer-Token': YOUVERSION_API_KEY,
                        'Accept': 'application/json',
                    },
                }
            );

            if (!passageResponse.ok) throw new Error('Failed to fetch passage');

            const passageData = await passageResponse.json();

            setVerseOfDay({
                content: passageData.content.trim(),
                reference: passageData.reference,
            });
        } catch (error) {
            console.error('Failed to fetch verse of the day:', error);
            // Fallback verse
            setVerseOfDay({
                content: language === 'pt'
                    ? 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
                    : 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
                reference: language === 'pt' ? 'João 3:16' : 'John 3:16',
            });
        }
    }, [language]);

    // Initialize quotes and fetch verse
    useEffect(() => {
        setCurrentQuote(quotes[0]);
        fetchVerseOfDay();
    }, [fetchVerseOfDay]);

    // Auto-rotate quotes/verse every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                if (showVerse) {
                    // Switch to next quote
                    setShowVerse(false);
                    setQuoteIndex((prev) => (prev + 1) % quotes.length);
                    setCurrentQuote(quotes[(quoteIndex + 1) % quotes.length]);
                } else {
                    // Every 3 quotes, show the verse
                    if ((quoteIndex + 1) % 3 === 0 && verseOfDay) {
                        setShowVerse(true);
                    } else {
                        setQuoteIndex((prev) => (prev + 1) % quotes.length);
                        setCurrentQuote(quotes[(quoteIndex + 1) % quotes.length]);
                    }
                }
                setIsTransitioning(false);
            }, 500);
        }, 10000);

        return () => clearInterval(interval);
    }, [showVerse, quoteIndex, verseOfDay]);

    const handleRefresh = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            if (showVerse) {
                setShowVerse(false);
                setQuoteIndex((prev) => (prev + 1) % quotes.length);
                setCurrentQuote(quotes[(quoteIndex + 1) % quotes.length]);
            } else {
                if (verseOfDay && Math.random() > 0.5) {
                    setShowVerse(true);
                } else {
                    setQuoteIndex((prev) => (prev + 1) % quotes.length);
                    setCurrentQuote(quotes[(quoteIndex + 1) % quotes.length]);
                }
            }
            setIsTransitioning(false);
        }, 300);
    };

    const displayContent = showVerse && verseOfDay ? verseOfDay : currentQuote;
    const isVerse = showVerse && verseOfDay;

    if (!displayContent) return null;

    return (
        <section id="quotes" className="py-24 relative">
            <div className="container px-6">
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection animation="fade-up">
                        <div className="relative p-8 md:p-12 rounded-2xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            {/* Quote icon */}
                            <div className="relative flex items-center justify-center mb-6">
                                <div className={`p-3 rounded-full border transition-all duration-300 ${isVerse
                                    ? 'border-amber-500/50 bg-amber-500/10'
                                    : 'border-primary/50 bg-primary/10'
                                    }`}>
                                    {isVerse ? (
                                        <Book className="w-6 h-6 text-amber-400" />
                                    ) : (
                                        <QuoteIcon className="w-6 h-6 text-primary" />
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`relative text-center transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                                }`}>
                                <blockquote className="text-lg md:text-xl lg:text-2xl font-light text-foreground/90 leading-relaxed mb-6 italic">
                                    "{isVerse ? (displayContent as VerseOfDay).content : (displayContent as Quote).content}"
                                </blockquote>

                                <cite className={`font-mono text-sm ${isVerse ? 'text-amber-400' : 'text-primary'}`}>
                                    — {isVerse ? (displayContent as VerseOfDay).reference : (displayContent as Quote).author}
                                </cite>
                            </div>

                            {/* Controls */}
                            <div className="relative flex items-center justify-center gap-4 mt-8">
                                <button
                                    onClick={handleRefresh}
                                    className="p-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-110"
                                    aria-label={language === 'pt' ? 'Próxima citação' : 'Next quote'}
                                >
                                    <RefreshCw className="w-4 h-4" />
                                </button>

                                {/* Indicator dots */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => {
                                            setIsTransitioning(true);
                                            setTimeout(() => {
                                                setShowVerse(false);
                                                setIsTransitioning(false);
                                            }, 300);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${!isVerse ? 'bg-primary w-6' : 'bg-border hover:bg-muted-foreground'
                                            }`}
                                        aria-label="Quotes"
                                    />
                                    <button
                                        onClick={() => {
                                            if (verseOfDay) {
                                                setIsTransitioning(true);
                                                setTimeout(() => {
                                                    setShowVerse(true);
                                                    setIsTransitioning(false);
                                                }, 300);
                                            }
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${isVerse ? 'bg-amber-400 w-6' : 'bg-border hover:bg-muted-foreground'
                                            }`}
                                        aria-label="Verse of the day"
                                    />
                                </div>
                            </div>

                            {/* Label */}
                            <div className="absolute top-4 right-4">
                                <span className={`font-mono text-xs px-2 py-1 rounded-full border ${isVerse
                                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                                    : 'border-primary/30 bg-primary/10 text-primary'
                                    }`}>
                                    {isVerse
                                        ? (language === 'pt' ? 'Versículo do Dia' : 'Verse of the Day')
                                        : (language === 'pt' ? 'Citação' : 'Quote')
                                    }
                                </span>
                            </div>

                            {/* YouVersion Credit - only shown when displaying verse */}
                            {isVerse && (
                                <div className="absolute bottom-4 right-4">
                                    <a
                                        href="https://www.bible.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 transition-all duration-300 group"
                                    >
                                        <img
                                            src="/youversion-logo.png"
                                            alt="YouVersion"
                                            className="w-4 h-4 rounded-sm"
                                        />
                                        <span className="font-mono text-xs text-amber-400/80 group-hover:text-amber-400 transition-colors">
                                            YouVersion
                                        </span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default QuotesSection;
