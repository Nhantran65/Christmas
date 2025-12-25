import { useMemo } from "react";
import "./snow.css";

type Props = {
  count?: number; // số bông tuyết
};

export default function Snow({ count = 40 }: Props) {
  const flakes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;             // %
      const size = 6 + Math.random() * 10;          // px
      const duration = 6 + Math.random() * 8;       // s
      const delay = Math.random() * 6;              // s
      const blur = Math.random() * 1.2;             // px
      const opacity = 0.25 + Math.random() * 0.55;
      return { i, left, size, duration, delay, blur, opacity };
    });
  }, [count]);

  return (
    <div className="snow" aria-hidden="true">
      {flakes.map(f => (
        <span
          key={f.i}
          className="flake"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            filter: `blur(${f.blur}px)`,
            opacity: f.opacity,
          }}
        />
      ))}
    </div>
  );
}
