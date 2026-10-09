import { AbsoluteFill, useCurrentFrame } from "remotion";
import { useGsapTimeline } from "@remotion/gsap";
export type NeuralProps = { pointerX: number; pointerY: number };
const points = Array.from({ length: 88 }, (_, i) => {
  const y = 1 - (i / 87) * 2;
  const r = Math.sqrt(1 - y * y);
  const a = i * 2.399963;
  return { x: Math.cos(a) * r, y, z: Math.sin(a) * r };
});
export function NeuralComposition({ pointerX = 0, pointerY = 0 }: NeuralProps) {
  const frame = useCurrentFrame();
  const angle = (frame / 360) * Math.PI * 2;
  const scope = useGsapTimeline<HTMLDivElement>(({ timeline, selector }) => {
    timeline.to(selector("[data-orbit]"), {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 12,
      ease: "none",
    });
  });
  const projected = points.map((p) => {
    const x = p.x * Math.cos(angle) + p.z * Math.sin(angle);
    const z = -p.x * Math.sin(angle) + p.z * Math.cos(angle);
    const perspective = 2.8 / (2.8 - z * 0.35);
    return {
      x: 960 + x * 233 * perspective + pointerX * 24,
      y: 422 + p.y * 233 * perspective + pointerY * 20,
      z,
    };
  });
  return (
    <AbsoluteFill ref={scope}>
      <svg
        viewBox="0 0 1440 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="halo">
            <stop stopColor="#00dce9" stopOpacity=".18" />
            <stop offset="1" stopColor="#050510" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="core">
            <stop stopColor="#fff" />
            <stop offset=".25" stopColor="#9fffff" />
            <stop offset="1" stopColor="#00b6dc" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="star">
            <stop stopColor="#c4ffff" />
            <stop offset=".45" stopColor="#00F0FF" />
            <stop offset="1" stopColor="#7764ff" />
          </linearGradient>
        </defs>
        <circle cx="960" cy="422" r="480" fill="url(#halo)" />
        <g stroke="#2b6076" fill="none">
          <ellipse
            cx="960"
            cy="422"
            rx="330"
            ry="112"
            transform="rotate(-28 960 422)"
          />
          <ellipse
            cx="960"
            cy="422"
            rx="320"
            ry="155"
            transform="rotate(45 960 422)"
          />
          <circle
            cx="960"
            cy="422"
            r="287"
            strokeDasharray="2 12"
            opacity=".6"
          />
        </g>
        <g data-orbit>
          <ellipse
            cx="960"
            cy="422"
            rx="300"
            ry="300"
            stroke="#00F0FF"
            strokeOpacity=".17"
            fill="none"
            strokeDasharray="60 410"
          />
        </g>
        {projected.map((p, i) =>
          projected.slice(i + 1).map((q, j) => {
            const d = Math.hypot(p.x - q.x, p.y - q.y);
            return d < 95 && d > 22 ? (
              <line
                key={`${i}-${j}`}
                x1={p.x}
                y1={p.y}
                x2={q.x}
                y2={q.y}
                stroke="#3de4f7"
                strokeWidth=".65"
                opacity={0.09 + (p.z + 1) * 0.12}
              />
            ) : null;
          }),
        )}
        {projected.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r={3 + (p.z + 1)}
              fill="#00F0FF"
              opacity=".35"
              filter="url(#glow)"
            />
            <circle
              cx={p.x}
              cy={p.y}
              r={1.2 + (p.z + 1) * 0.6}
              fill="#adfaff"
              opacity={0.35 + (p.z + 1) * 0.3}
            />
          </g>
        ))}
        <g
          transform={`translate(${960 + pointerX * 16},${422 + pointerY * 16})`}
        >
          <circle
            r={110 + Math.sin(angle * 2) * 8}
            fill="url(#core)"
            opacity=".35"
          />
          <path
            d="M0 -92 C13 -25 25 -13 92 0 C25 13 13 25 0 92 C-13 25 -25 13 -92 0 C-25 -13 -13 -25 0 -92Z"
            fill="url(#star)"
          />
          <path
            d="M0 -70 C10 -18 18 -10 70 0 C18 10 10 18 0 70 C-10 18 -18 10 -70 0 C-18 -10 -10 -18 0 -70Z"
            fill="#caffff"
            opacity=".7"
          />
        </g>
      </svg>
    </AbsoluteFill>
  );
}
