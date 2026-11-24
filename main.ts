import { mkdirSync, writeFileSync } from "node:fs";

// Entry: grandfather paradox reframed as a cancellation policy; the
// refund is the last word and the laugh. 80 chars, inside the 120 limit.
const line =
  "NOTICE: Killing your grandfather cancels this trip, your birth, and your refund.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
