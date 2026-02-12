"use client";

import { useState, useEffect } from "react";

const MONO = "'Courier New', Courier, monospace";

export function AsciiEqualizer({
  color = "#c8ff00",
  size = 11,
  bars = 20,
  height = 8,
}: {
  color?: string;
  size?: number;
  bars?: number;
  height?: number;
}) {
  const [f, setF] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setF((v) => v + 1), 80);
    return () => clearInterval(id);
  }, []);

  const lines = Array.from({ length: height }, (_, y) => {
    const ry = height - 1 - y;
    return Array.from({ length: bars }, (_, x) => {
      const h =
        ((Math.sin(x * 0.6 + f * 0.2) + 1) / 2) *
        height *
        (0.4 + 0.6 * ((Math.sin(x * 1.1 + f * 0.13) + 1) / 2));
      return ry < h ? (ry > h - 1.5 ? "█" : "▓") : " ";
    }).join(" ");
  });

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.15,
        color,
        margin: 0,
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
        overflow: "hidden",
      }}
    >
      {lines.join("\n")}
    </pre>
  );
}
