"use client";

import { useState, useEffect } from "react";

const MONO = "'Courier New', Courier, monospace";

export function AsciiBlogHeader({ color = "#c8ff00" }: { color?: string }) {
  const [frame, setFrame] = useState(0);
  const width = 70;
  const chars = " ░▒▓█▓▒░";

  useEffect(() => {
    const id = setInterval(() => setFrame((v) => v + 1), 60);
    return () => clearInterval(id);
  }, []);

  const lines = Array.from({ length: 3 }, (_, y) =>
    Array.from({ length: width }, (_, x) => {
      const v =
        Math.sin(x * 0.12 + frame * 0.04 + y * 0.5) +
        Math.sin(x * 0.07 - frame * 0.03 + y * 0.8);
      const idx = Math.floor(((v + 2) / 4) * chars.length) % chars.length;
      return chars[idx];
    }).join("")
  );

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: 11,
        lineHeight: 1.1,
        color,
        margin: 0,
        opacity: 0.6,
        overflow: "hidden",
      }}
    >
      {lines.join("\n")}
    </pre>
  );
}

export function AsciiPageAccent({
  color = "#c8ff00",
  width = 50,
  height = 12,
}: {
  color?: string;
  width?: number;
  height?: number;
}) {
  const [frame, setFrame] = useState(0);
  const chars = " ·:;+*#";

  useEffect(() => {
    const id = setInterval(() => setFrame((v) => v + 1), 80);
    return () => clearInterval(id);
  }, []);

  const lines = Array.from({ length: height }, (_, y) =>
    Array.from({ length: width }, (_, x) => {
      const v =
        Math.sin(x * 0.2 + frame * 0.03) *
        Math.cos(y * 0.3 - frame * 0.02) +
        Math.sin(Math.sqrt(x * x + y * y) * 0.12 + frame * 0.04);
      const idx = Math.floor(((v + 2) / 4) * chars.length) % chars.length;
      return chars[idx];
    }).join("")
  );

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: 10,
        lineHeight: 1.05,
        color,
        margin: 0,
      }}
    >
      {lines.join("\n")}
    </pre>
  );
}
