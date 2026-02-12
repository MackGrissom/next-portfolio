"use client";

import { useState, useEffect } from "react";

const MONO = "'Courier New', Courier, monospace";

export function AsciiBlogHeader({ color = "#c8ff00" }: { color?: string }) {
  const [frame, setFrame] = useState(0);
  const width = 60;
  const chars = "─═━┄┈";

  useEffect(() => {
    const id = setInterval(() => setFrame((v) => v + 1), 100);
    return () => clearInterval(id);
  }, []);

  const line = Array.from({ length: width }, (_, x) => {
    const v = Math.sin(x * 0.3 + frame * 0.08) + Math.sin(x * 0.15 - frame * 0.05);
    const idx = Math.floor(((v + 2) / 4) * chars.length) % chars.length;
    return chars[idx];
  }).join("");

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: 10,
        lineHeight: 1,
        color,
        margin: 0,
        opacity: 0.3,
        overflow: "hidden",
      }}
    >
      {line}
    </pre>
  );
}
