import { cli } from "../packages/cli/cli.ts";
import { parseArgs } from "../lib/util/args/parseArgs/parseArgs.ts";

// TODO: false -> cli.installed
if (false) {
} else {
  const args = parseArgs(Deno.args);
  cli(args);
}
