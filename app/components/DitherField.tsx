"use client";

import { useEffect, useRef } from "react";

const BAYER_4 = [
  0, 8, 2, 10,
  12, 4, 14, 6,
  3, 11, 1, 9,
  15, 7, 13, 5
];

const CELL = 8;
const GAP = 1;
const FILL = CELL - GAP;
const SPEED = 0.013;
const ALPHA = 38;

const CYAN = { r: 0x40, g: 0xce, b: 0xf3 };
const PURPLE = { r: 0xff, g: 0x71, b: 0x68 };

export default function DitherField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let imageData: ImageData | null = null;
    let rafId = 0;
    let t = 0;
    let running = true;

    function resize() {
      const w = Math.max(1, window.innerWidth || document.documentElement.clientWidth || 0);
      const h = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 0);
      width = w;
      height = h;
      canvas!.width = w;
      canvas!.height = h;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      imageData = ctx!.createImageData(w, h);
    }

    function render(phase: number) {
      if (!imageData) return;
      const data = imageData.data;
      data.fill(0);

      const cols = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      const bandCenter = height * 0.5;
      const bandSpan = height * 0.55;

      for (let cy = 0; cy < rows; cy++) {
        const pyTop = cy * CELL;
        for (let cx = 0; cx < cols; cx++) {
          const pxLeft = cx * CELL;

          const s1 = Math.sin(cx * 0.035 + phase);
          const s2 = Math.sin(cx * 0.012 - phase * 0.6 + 1.3);
          const wave = (s1 + s2) * 0.5;
          const offset = wave * bandSpan * 0.25;

          const dy = (pyTop + FILL * 0.5) - (bandCenter + offset);
          const norm = Math.abs(dy) / (bandSpan * 0.5);
          let intensity = 1 - norm * norm;
          if (intensity <= 0) continue;
          if (intensity > 1) intensity = 1;

          const threshold = (BAYER_4[(cy & 3) * 4 + (cx & 3)] + 0.5) / 16;
          if (intensity <= threshold) continue;

          const u = cols > 1 ? cx / (cols - 1) : 0;
          const r = (CYAN.r + (PURPLE.r - CYAN.r) * u) | 0;
          const g = (CYAN.g + (PURPLE.g - CYAN.g) * u) | 0;
          const b = (CYAN.b + (PURPLE.b - CYAN.b) * u) | 0;

          const xMax = Math.min(pxLeft + FILL, width);
          const yMax = Math.min(pyTop + FILL, height);
          for (let y = pyTop; y < yMax; y++) {
            let idx = (y * width + pxLeft) * 4;
            for (let x = pxLeft; x < xMax; x++) {
              data[idx] = r;
              data[idx + 1] = g;
              data[idx + 2] = b;
              data[idx + 3] = ALPHA;
              idx += 4;
            }
          }
        }
      }

      ctx!.putImageData(imageData, 0, 0);
    }

    function tick() {
      if (!running) return;
      t += SPEED;
      render(t);
      rafId = window.requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) {
        running = false;
        if (rafId) window.cancelAnimationFrame(rafId);
      } else if (!reducedMotion) {
        running = true;
        rafId = window.requestAnimationFrame(tick);
      }
    }

    function onResize() {
      resize();
      render(t);
    }

    resize();
    if (reducedMotion) {
      render(0);
    } else {
      rafId = window.requestAnimationFrame(tick);
    }

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
