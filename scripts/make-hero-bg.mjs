import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const width = 1920;
const height = 480;
const cols = 9;
const rows = 4;
const jitter = 0.55;

function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(20261019);
const points = [];

for (let row = 0; row <= rows; row += 1) {
  const line = [];
  for (let col = 0; col <= cols; col += 1) {
    const x = (col / cols) * width;
    const y = (row / rows) * height;
    const dx = col === 0 || col === cols ? 0 : (rand() - 0.5) * (width / cols) * jitter * 2;
    const dy = row === 0 || row === rows ? 0 : (rand() - 0.5) * (height / rows) * jitter * 2;
    line.push([x + dx, y + dy]);
  }
  points.push(line);
}

const fills = ["#061827", "#08233c", "#0a3356", "#0c3d66", "#11456f", "#0b2c48", "#093049"];
const triangles = [];

for (let row = 0; row < rows; row += 1) {
  for (let col = 0; col < cols; col += 1) {
    const a = points[row][col];
    const b = points[row][col + 1];
    const c = points[row + 1][col];
    const d = points[row + 1][col + 1];
    const split = rand() > 0.5;
    if (split) {
      triangles.push([a, b, d], [a, d, c]);
    } else {
      triangles.push([a, b, c], [b, d, c]);
    }
  }
}

const polys = triangles
  .map((tri) => {
    const fill = fills[Math.floor(rand() * fills.length)];
    const opacity = (0.55 + rand() * 0.45).toFixed(2);
    const pts = tri.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    return `<polygon points="${pts}" fill="${fill}" fill-opacity="${opacity}"/>`;
  })
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice">
  <rect width="100%" height="100%" fill="#07192c"/>
  ${polys}
  <rect width="100%" height="100%" fill="#07192c" fill-opacity="0.18"/>
</svg>
`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "hero", "page-hero-bg.svg");
writeFileSync(out, svg);
console.log(`wrote ${out}`);
