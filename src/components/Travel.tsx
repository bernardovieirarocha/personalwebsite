import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { useTranslation } from "@/i18n";

// Travel images data - using public folder paths
const travelImages = [
    {
        img: "/travel/capitolio.jpg",
        title: { pt: "Capitólio, Brasil", en: "Capitólio, Brazil" },
    },
    {
        img: "/travel/michigan.jpeg",
        title: { pt: "Michigan, EUA", en: "Michigan, USA" },
    },
    {
        img: "/travel/saopaulo.jpg",
        title: { pt: "São Paulo, Brasil", en: "São Paulo, Brazil" },
    },
    {
        img: "/travel/argentina.jpg",
        title: { pt: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    },
    {
        img: "/travel/cataratasiguacu.png",
        title: { pt: "Cataratas do Iguaçu, Brasil", en: "Iguazu Falls, Brazil" },
    },
    {
        img: "/travel/floripa.jpg",
        title: { pt: "Florianópolis, Brasil", en: "Florianópolis, Brazil" },
    },
    {
        img: "/travel/curitiba-parquesãolourenço.jpg",
        title: { pt: "Curitiba, Brasil", en: "Curitiba, Brazil" },
    },
    {
        img: "/travel/ouropreto.jpg",
        title: { pt: "Ouro Preto, Brasil", en: "Ouro Preto, Brazil" },
    },
    {
        img: "/travel/petropolis.jpg",
        title: { pt: "Petrópolis, Brasil", en: "Petrópolis, Brazil" },
    },
    {
        img: "/travel/itaipu.jpg",
        title: { pt: "Itaipu, Brasil", en: "Itaipu, Brazil" },
    },
    {
        img: "/travel/arraialdaajuda.jpg",
        title: { pt: "Arraial d'Ajuda, Brasil", en: "Arraial d'Ajuda, Brazil" },
    },
    {
        img: "/travel/beto-carrero.jpg",
        title: { pt: "Beto Carrero World, Brasil", en: "Beto Carrero World, Brazil" },
    },
    {
        img: "/travel/marcodastresfronteiras.jpeg",
        title: { pt: "Marco das Três Fronteiras, Brasil", en: "Triple Frontier Landmark, Brazil" },
    },
    {
        img: "/travel/piracicaba.jpeg",
        title: { pt: "Piracicaba, Brasil", en: "Piracicaba, Brazil" },
    },
    {
        img: "/travel/ciudaddeleste.jpg",
        title: { pt: "Ciudad del Este, Paraguai", en: "Ciudad del Este, Paraguay" },
    },
];

const Travel = () => {
    const { t, language } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance carousel
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % travelImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + travelImages.length) % travelImages.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % travelImages.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <section id="travel" className="py-32 relative bg-secondary/20">
            <div className="container px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section header */}
                    <AnimatedSection animation="fade-up">
                        <div className="flex items-center gap-4 mb-16">
                            <span className="font-mono text-primary text-sm">{t.travel.sectionNumber}</span>
                            <h2 className="text-3xl md:text-4xl font-bold">{t.travel.title}</h2>
                            <div className="flex-1 h-px bg-border" />
                        </div>
                    </AnimatedSection>

                    {/* Carousel */}
                    <AnimatedSection animation="fade-up" delay={100}>
                        <div
                            className="relative overflow-hidden rounded-2xl border border-border bg-card/50"
                            onMouseEnter={() => setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            {/* Main image */}
                            <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-background/50">
                                {travelImages.map((image, index) => {
                                    // Only render current, previous, and next images for performance
                                    const isVisible = index === currentIndex;
                                    const isAdjacent =
                                        index === (currentIndex - 1 + travelImages.length) % travelImages.length ||
                                        index === (currentIndex + 1) % travelImages.length;

                                    if (!isVisible && !isAdjacent) return null;

                                    return (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${isVisible
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-105"
                                                }`}
                                        >
                                            {/* Blurred background for letterboxing */}
                                            <div
                                                className="absolute inset-0 scale-110"
                                                style={{
                                                    backgroundImage: `url(${image.img})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    filter: 'blur(20px) brightness(0.4)',
                                                }}
                                            />
                                            {/* Main image - object-contain to show full photo */}
                                            <img
                                                src={image.img}
                                                alt={image.title[language]}
                                                loading="lazy"
                                                decoding="async"
                                                className="relative w-full h-full object-contain z-10"
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-20" />
                                        </div>
                                    );
                                })}

                                {/* Location badge */}
                                <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span className="font-mono text-sm">{travelImages[currentIndex].title[language]}</span>
                                </div>

                                {/* Navigation arrows */}
                                <button
                                    onClick={goToPrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 hover:border-primary transition-all"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background/80 hover:border-primary transition-all"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>

                                {/* Counter */}
                                <div className="absolute top-6 right-6 z-30 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {currentIndex + 1} / {travelImages.length}
                                    </span>
                                </div>
                            </div>

                            {/* Dots indicator */}
                            <div className="flex justify-center gap-2 py-4 bg-card/50">
                                {travelImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "bg-primary w-6"
                                            : "bg-border hover:bg-muted-foreground"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Travel;
