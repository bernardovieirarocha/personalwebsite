import { useEffect, useRef, useState } from 'react';

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    connections: number[];
}

const CircuitAnimation = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const pointsRef = useRef<Point[]>([]);
    const animationRef = useRef<number>(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
                initPoints();
            }
        };

        const initPoints = () => {
            const points: Point[] = [];
            const numPoints = Math.floor((canvas.width * canvas.height) / 18000);

            for (let i = 0; i < numPoints; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    connections: [],
                });
            }

            // Create circuit-like connections
            points.forEach((point, i) => {
                const nearestPoints = points
                    .map((p, j) => ({ index: j, dist: Math.hypot(p.x - point.x, p.y - point.y) }))
                    .filter(p => p.index !== i && p.dist < 150)
                    .sort((a, b) => a.dist - b.dist)
                    .slice(0, 2);

                point.connections = nearestPoints.map(p => p.index);
            });

            pointsRef.current = points;
        };

        const drawCircuitPath = (
            ctx: CanvasRenderingContext2D,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            alpha: number
        ) => {
            const midX = (x1 + x2) / 2;

            ctx.beginPath();
            ctx.strokeStyle = `hsla(185, 100%, 50%, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(x1, y1);

            // Create 90-degree circuit-style paths
            if (Math.abs(x2 - x1) > Math.abs(y2 - y1)) {
                ctx.lineTo(midX, y1);
                ctx.lineTo(midX, y2);
                ctx.lineTo(x2, y2);
            } else {
                const midY = (y1 + y2) / 2;
                ctx.lineTo(x1, midY);
                ctx.lineTo(x2, midY);
                ctx.lineTo(x2, y2);
            }

            ctx.stroke();
        };

        const drawNode = (
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            size: number,
            alpha: number,
            isActive: boolean
        ) => {
            // Outer glow for active nodes
            if (isActive) {
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 3);
                gradient.addColorStop(0, `hsla(185, 100%, 50%, ${alpha * 0.5})`);
                gradient.addColorStop(1, 'hsla(185, 100%, 50%, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, size * 3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Main node
            ctx.fillStyle = `hsla(185, 100%, 50%, ${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Inner highlight
            ctx.fillStyle = `hsla(185, 100%, 70%, ${alpha * 0.8})`;
            ctx.beginPath();
            ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
            ctx.fill();
        };

        const animate = () => {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const points = pointsRef.current;
            const mouse = mouseRef.current;

            points.forEach((point, i) => {
                // Move points slowly
                point.x += point.vx;
                point.y += point.vy;

                // Mouse interaction - attract towards mouse when hovering
                if (isHovering) {
                    const dx = mouse.x - point.x;
                    const dy = mouse.y - point.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < 200 && dist > 0) {
                        const force = (200 - dist) / 200 * 0.02;
                        point.x += dx * force;
                        point.y += dy * force;
                    }
                }

                // Bounce off edges
                if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
                if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

                // Keep in bounds
                point.x = Math.max(0, Math.min(canvas.width, point.x));
                point.y = Math.max(0, Math.min(canvas.height, point.y));

                // Draw connections
                point.connections.forEach(j => {
                    if (j > i) {
                        const other = points[j];
                        const dist = Math.hypot(other.x - point.x, other.y - point.y);
                        const alpha = Math.max(0, 1 - dist / 150) * 0.3;

                        if (alpha > 0) {
                            drawCircuitPath(ctx, point.x, point.y, other.x, other.y, alpha);
                        }
                    }
                });

                // Draw node
                const mouseDist = Math.hypot(mouse.x - point.x, mouse.y - point.y);
                const isActive = isHovering && mouseDist < 100;
                const baseAlpha = 0.4 + (isActive ? 0.4 : 0);
                const size = 3 + (isActive ? 2 : 0);

                drawNode(ctx, point.x, point.y, size, baseAlpha, isActive);
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isHovering]);

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    };

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ opacity: 0.6 }}
        />
    );
};

export default CircuitAnimation;
