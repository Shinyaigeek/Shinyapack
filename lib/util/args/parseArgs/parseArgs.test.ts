import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { parseArgs } from "./parseArgs.ts";

Deno.test("set target ", () => {
  assertEquals(parseArgs(["target"]).target, "target");
});
