// Sold the Map — a complete story in exactly six words.
// Entry for make.fun competition u-deranalabs-six-words-one-story-f982e410.
// Writes the story to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const words = ["Sold", "the", "map.", "Kept", "the", "treasure."];
// Six words, one story: the seller parts with the map but keeps the prize.
// The gate allows 1–60 characters; guard the six-word form at runtime.
if (words.length !== 6) throw new Error(`expected exactly 6 words, got ${words.length}`);
const story = words.join(" ");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, story, "utf8");
