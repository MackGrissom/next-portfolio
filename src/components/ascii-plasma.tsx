"use client";

import { useState, useEffect } from "react";

const MONO = "'Courier New', Courier, monospace";

export function AsciiPlasma({
  color = "#c8ff00",
  size = 12,
  width = 44,
  height = 16,
  chars = " ░▒▓█▓▒░",
}: {
  color?: string;
  size?: number;
  width?: number;
  height?: number;
  chars?: string;
}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((v) => v + 1), 50);
    return () => clearInterval(id);
  }, []);

  const lines = Array.from({ length: height }, (_, y) =>
    Array.from({ length: width }, (_, x) => {
      const v =
        Math.sin(x * 0.15 + frame * 0.05) +
        Math.sin(y * 0.2 + frame * 0.07) +
        Math.sin((x + y) * 0.1 + frame * 0.06) +
        Math.sin(Math.sqrt(x * x + y * y) * 0.15 - frame * 0.04);
      const idx = Math.floor(((v + 4) / 8) * chars.length) % chars.length;
      return chars[idx];
    }).join("")
  );

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.1,
        color,
        margin: 0,
      }}
    >
      {lines.join("\n")}
    </pre>
  );
}
