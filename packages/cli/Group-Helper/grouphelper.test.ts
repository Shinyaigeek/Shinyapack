import {
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
import { GroupHelper } from "./groupHelper.ts";

Deno.test("set target ", () => {
  const gh = new GroupHelper();
  assertThrows(gh.run, Error, "You must implement 'run' method");
});
