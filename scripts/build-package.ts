import { execFileSync } from "node:child_process";
import { rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

await rm(path.join(rootDir, "dist"), { force: true, recursive: true });

execFileSync("bunx", ["tsc", "-p", "tsconfig.build.json"], {
  cwd: rootDir,
  stdio: "inherit",
});
