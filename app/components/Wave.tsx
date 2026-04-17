"use client";

export default function Wave() {
  const DOT = 10;
  const COLS = 52;
  const ROWS = 38;

  // Generate a zigzag wave path as a set of (col, row) coordinates
  const wavePath = new Set<string>();
  const waveThickness = 3;

  for (let col = 0; col < COLS; col++) {
    // Zigzag: one full V-shape every 24 columns
    const period = 24;
    const phase = (col % period) / period;
    const centerRow = Math.round(
      ROWS * 0.2 + (ROWS * 0.6) * (phase < 0.5 ? phase * 2 : (1 - phase) * 2)
    );
    for (let t = -waveThickness; t <= waveThickness; t++) {
      const r = centerRow + t;
      if (r >= 0 && r < ROWS) wavePath.add(`${col},${r}`);
    }
  }

  return (
    <div
      aria-hidden="true"
      className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden pointer-events-none"
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${COLS * DOT} ${ROWS * DOT}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: ROWS }, (_, row) =>
          Array.from({ length: COLS }, (_, col) => {
            const key = `${col},${row}`;
            const isWave = wavePath.has(key);
            // Fade teal to blue across columns
            const progress = col / COLS;
            const fill = isWave
              ? progress < 0.6
                ? "#5eead4"
                : "#60a5fa"
              : "rgba(94,234,212,0.06)";

            return (
              <rect
                key={key}
                x={col * DOT + 1}
                y={row * DOT + 1}
                width={DOT - 2}
                height={DOT - 2}
                fill={fill}
                rx={1}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
