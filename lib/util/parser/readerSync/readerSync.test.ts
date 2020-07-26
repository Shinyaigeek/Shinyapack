import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { readerSync } from "./readerSync.ts";

Deno.test("readerSync 1 ", () => {
  const txt = readerSync("lib/util/parser/reader/test.txt");
  assertEquals(
    txt,
    `asdf

hogehoge

barbar`,
  );
});
