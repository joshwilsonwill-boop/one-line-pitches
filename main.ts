import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "If you can describe your app idea to a friend, you can describe it to make.fun, and an AI agent will build the first version while you watch. No coding, no waiting months, just your idea turned into something you can tap.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
