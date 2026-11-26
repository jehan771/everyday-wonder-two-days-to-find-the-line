import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The automatic door opened for the wind before it opened for me, and for a second the shop thought the weather was a customer.";

// Mirror the competition gate: 1-200 characters, not only whitespace,
// exactly one sentence.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry length ${trimmed.length} outside gate 1-200`);
}
if (trimmed !== LINE || (LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence with no extra whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
