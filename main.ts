import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "You already have the idea, which is the hard part, so describe it in plain words, let an AI agent build a first version you can actually try, and the only thing you risk is a few minutes finding out whether it is any good.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
