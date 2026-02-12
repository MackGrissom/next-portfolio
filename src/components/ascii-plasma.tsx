"use client";

import { useState, useEffect, useRef } from "react";

const MONO = "'Courier New', Courier, monospace";

export function AsciiPlasma({
  color = "#c8ff00",
  hoverColor,
  size = 12,
  width = 44,
  height = 16,
  chars = " ░▒▓█▓▒░",
}: {
  color?: string;
  hoverColor?: string;
  size?: number;
  width?: number;
  height?: number;
  chars?: string;
}) {
  const [frame, setFrame] = useState(0);
  const [hovered, setHovered] = useState(false);

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

  const activeColor = hoverColor && hovered ? hoverColor : color;

  return (
    <pre
      onMouseEnter={hoverColor ? () => setHovered(true) : undefined}
      onMouseLeave={hoverColor ? () => setHovered(false) : undefined}
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.1,
        color: activeColor,
        margin: 0,
        overflow: "hidden",
        transition: "color 0.4s ease",
      }}
    >
      {lines.join("\n")}
    </pre>
  );
}

export function AsciiSpinner({
  color = "#c8ff00",
  size = 14,
}: {
  color?: string;
  size?: number;
}) {
  const frames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
  const [f, setF] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setF((v) => (v + 1) % frames.length), 80);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size * 3,
        lineHeight: 1.2,
        color,
        margin: 0,
        textAlign: "center",
      }}
    >
      {frames[f]}{" "}
      <span style={{ fontSize: size }}>Loading...</span>
    </pre>
  );
}

export function AsciiProgressBar({
  color = "#c8ff00",
  size = 14,
  width = 40,
}: {
  color?: string;
  size?: number;
  width?: number;
}) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPct((v) => (v + 1) % 101), 30);
    return () => clearInterval(id);
  }, []);

  const filled = Math.round((pct / 100) * width);
  const bar = "█".repeat(filled) + "░".repeat(width - filled);

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.6,
        color,
        margin: 0,
        textAlign: "center",
      }}
    >
      {`┌${"─".repeat(width + 2)}┐\n`}
      {`│ ${bar} │\n`}
      {`└${"─".repeat(width + 2)}┘\n`}
      {`     ${pct.toString().padStart(3)}% complete`}
    </pre>
  );
}

export function AsciiGlitch({
  text = "404",
  color = "#c8ff00",
  size = 14,
  width = 30,
}: {
  text?: string;
  color?: string;
  size?: number;
  width?: number;
}) {
  const [frame, setFrame] = useState("");
  const glitchChars = "█▓▒░╔╗╚╝║═╠╣╦╩╬";

  useEffect(() => {
    const id = setInterval(() => {
      const lines: string[] = [];
      for (let row = 0; row < 3; row++) {
        let line = "";
        for (let i = 0; i < width; i++) {
          if (Math.random() < 0.08) {
            line += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            line += " ";
          }
        }
        lines.push(line);
      }

      // Center the text in the middle row area
      const pad = Math.max(0, Math.floor((width - text.length) / 2));
      let textLine = "";
      for (let i = 0; i < width; i++) {
        const ti = i - pad;
        if (ti >= 0 && ti < text.length) {
          textLine += Math.random() < 0.1
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : text[ti];
        } else {
          textLine += Math.random() < 0.05
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : " ";
        }
      }
      lines.splice(1, 0, textLine);

      for (let row = 0; row < 3; row++) {
        let line = "";
        for (let i = 0; i < width; i++) {
          if (Math.random() < 0.08) {
            line += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            line += " ";
          }
        }
        lines.push(line);
      }

      setFrame(lines.join("\n"));
    }, 80);
    return () => clearInterval(id);
  }, [text, width]);

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.3,
        color,
        margin: 0,
        textAlign: "center",
      }}
    >
      {frame}
    </pre>
  );
}

export function AsciiMatrixRain({
  color = "#c8ff00",
  size = 11,
  width = 60,
  height = 8,
}: {
  color?: string;
  size?: number;
  width?: number;
  height?: number;
}) {
  const [frame, setFrame] = useState("");
  const drops = useRef<number[]>([]);
  const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";

  useEffect(() => {
    if (drops.current.length === 0) {
      drops.current = Array.from({ length: width }, () =>
        Math.floor(Math.random() * height)
      );
    }

    const id = setInterval(() => {
      const grid = Array.from({ length: height }, () =>
        Array(width).fill(" ")
      );

      for (let x = 0; x < width; x++) {
        const y = drops.current[x];
        if (y < height) {
          grid[y][x] = chars[Math.floor(Math.random() * chars.length)];
        }
        if (y - 1 >= 0 && y - 1 < height) {
          grid[y - 1][x] = chars[Math.floor(Math.random() * chars.length)];
        }
        drops.current[x] += 1;
        if (drops.current[x] > height + Math.random() * height) {
          drops.current[x] = 0;
        }
      }

      setFrame(grid.map((row) => row.join("")).join("\n"));
    }, 70);
    return () => clearInterval(id);
  }, [width, height]);

  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.05,
        color,
        margin: 0,
        opacity: 0.6,
      }}
    >
      {frame}
    </pre>
  );
}
