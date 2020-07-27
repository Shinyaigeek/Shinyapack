import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { reader } from "./reader.ts";

Deno.test("reader 1 ", async () => {
  const txt = await reader("lib/util/parser/reader/test.txt");
  assertEquals(
    txt,
    `asdf

hogehoge

barbar`,
  );
});
