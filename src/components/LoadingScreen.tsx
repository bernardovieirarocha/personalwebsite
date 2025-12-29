import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("");
    const fullText = "> initializing_system...";

    useEffect(() => {
        // Typing effect
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        // Progress bar simulation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(onFinish, 500); // Wait a bit before finishing
                    return 100;
                }
                // Random increment for realistic feel
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => {
            clearInterval(typingInterval);
            clearInterval(progressInterval);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center font-mono">
            <div className="w-64 space-y-4">
                <div className="text-primary text-xl h-8 flex items-center">
                    {text}
                    <span className="animate-pulse ml-1">_</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-200 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="text-right text-muted-foreground text-xs">
                    {Math.floor(progress)}%
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
