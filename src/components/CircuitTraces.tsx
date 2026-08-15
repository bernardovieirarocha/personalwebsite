import { useMemo } from "react";

/**
 * Fundo do hero: roteamento de PCB, desenhado uma vez.
 *
 * Substitui o canvas anterior, que era uma rede de pontos aleatórios ligados
 * aos dois vizinhos mais próximos, com atração ao mouse: o fundo de herói
 * mais copiado da internet, e o elemento menos característico da página.
 * Ele também rodava requestAnimationFrame para sempre e ignorava
 * prefers-reduced-motion.
 *
 * Aqui a geometria é a de uma placa de verdade: traços com dogleg de 45°,
 * snap em grade de 20 mil, vias nas mudanças de camada e um barramento de
 * traços paralelos. É SVG estático: entra no HTML pré-renderizado, não usa
 * JavaScript em runtime e não custa main-thread.
 *
 * O PRNG é semeado: servidor e cliente produzem exatamente o mesmo desenho,
 * então não há mismatch de hidratação.
 */

const W = 1440;
const H = 900;
const GRID = 20;

/** mulberry32: pequeno, determinístico, suficiente para layout. */
function makeRandom(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const snap = (v: number) => Math.round(v / GRID) * GRID;

/**
 * Traço entre dois pontos com dogleg de 45°: reto, diagonal, reto. É assim
 * que um roteador de PCB resolve um desvio, nunca uma linha torta ligando
 * dois pontos quaisquer.
 */
function route(x1: number, y1: number, x2: number, y2: number, t: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const sx = Math.sign(dx);
  const sy = Math.sign(dy);
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);

  if (adx >= ady) {
    // Dominante na horizontal: reto → 45° → reto
    const run = snap((adx - ady) * t);
    const xa = x1 + sx * run;
    const xb = xa + sx * ady;
    return `M ${x1} ${y1} L ${xa} ${y1} L ${xb} ${y2} L ${x2} ${y2}`;
  }
  const run = snap((ady - adx) * t);
  const ya = y1 + sy * run;
  const yb = ya + sy * adx;
  return `M ${x1} ${y1} L ${x1} ${ya} L ${x2} ${yb} L ${x2} ${y2}`;
}

type Trace = { d: string; width: number; live: boolean };
type Via = { x: number; y: number; r: number };

function buildBoard() {
  const rand = makeRandom(0x5eed1a);
  const traces: Trace[] = [];
  const vias: Via[] = [];

  // Traços avulsos, saindo das margens em direção ao centro-baixo.
  for (let i = 0; i < 26; i++) {
    const fromLeft = rand() < 0.5;
    const x1 = snap(fromLeft ? -40 + rand() * 200 : W + 40 - rand() * 200);
    const y1 = snap(rand() * H);
    const x2 = snap(fromLeft ? 200 + rand() * (W * 0.55) : W - 200 - rand() * (W * 0.55));
    const y2 = snap(rand() * H);

    // Descarta traços curtos demais: viram cotoco, não roteamento.
    if (Math.hypot(x2 - x1, y2 - y1) < 220) continue;

    traces.push({
      d: route(x1, y1, x2, y2, 0.25 + rand() * 0.5),
      width: rand() < 0.22 ? 2 : 1,
      live: false,
    });

    // Via na ponta interna, como quem troca de camada.
    if (rand() < 0.55) vias.push({ x: x2, y: y2, r: rand() < 0.3 ? 4 : 3 });
  }

  // Barramento: traços paralelos que correm juntos, como um bus de dados.
  // É o que faz o desenho ler como placa e não como teia.
  for (const bus of [
    { x1: -40, y1: 150, x2: 620, y2: 330, n: 5 },
    { x1: W + 40, y1: 700, x2: 880, y2: 520, n: 4 },
  ]) {
    for (let i = 0; i < bus.n; i++) {
      const off = i * GRID;
      traces.push({
        d: route(bus.x1, bus.y1 + off, bus.x2, bus.y2 + off, 0.4),
        width: 1,
        live: i === 1,
      });
    }
  }

  // Três traços "vivos": recebem um pulso lento de sinal. Único movimento
  // que sobrou na página, e some inteiro sob prefers-reduced-motion.
  traces[3].live = true;
  traces[11].live = true;

  return { traces, vias };
}

const CircuitTraces = () => {
  const { traces, vias } = useMemo(buildBoard, []);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Máscara por luminância: preto oculta, branco revela. Preto no
            centro (onde fica o texto do hero) abrindo para branco nas
            bordas. O circuito emoldura o conteúdo em vez de disputar
            leitura com ele. */}
        <radialGradient id="board-fade" cx="38%" cy="50%" r="78%">
          <stop offset="0%" stopColor="#000" />
          <stop offset="42%" stopColor="#000" />
          <stop offset="100%" stopColor="#fff" />
        </radialGradient>
        <mask id="board-mask">
          <rect width={W} height={H} fill="url(#board-fade)" />
        </mask>
      </defs>

      <g mask="url(#board-mask)" fill="none" stroke="hsl(var(--accent))">
        {traces.map((trace, i) => (
          <path
            key={i}
            d={trace.d}
            strokeWidth={trace.width}
            strokeOpacity={trace.width === 2 ? 0.55 : 0.38}
            strokeLinecap="square"
          />
        ))}

        {vias.map((via, i) => (
          <g key={i}>
            <circle cx={via.x} cy={via.y} r={via.r} strokeWidth={1} strokeOpacity={0.5} />
            <circle cx={via.x} cy={via.y} r={via.r * 0.35} fill="hsl(var(--accent))" fillOpacity={0.4} stroke="none" />
          </g>
        ))}

        {/* Pulso de sinal: stroke-dashoffset em CSS, sem JavaScript. */}
        {traces
          .filter((trace) => trace.live)
          .map((trace, i) => (
            <path
              key={`live-${i}`}
              className="circuit-pulse"
              d={trace.d}
              stroke="hsl(var(--primary))"
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{ animationDelay: `${i * 2.6}s` }}
            />
          ))}
      </g>
    </svg>
  );
};

export default CircuitTraces;
