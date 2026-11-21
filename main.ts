import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The newspaper image is rendered offline and shipped in this repository;
// the program only copies it to the output directory, byte for byte.
const IMAGE_NAME = "entry.png";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, IMAGE_NAME), join(outDir, IMAGE_NAME));
