import {
  assertEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { isAlreadyMapped } from "./isAlreadyMapped.ts";

//@deno-types="../../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";

Deno.test("isAlreadyMapped 1 ", () => {
  const map = new Map();
  map.set(1, {
    id: 1,
    path: "hoge.ts",
    ast: parser.parse(""),
  });
  assertEquals(isAlreadyMapped("hoge.ts", map), true);
});

Deno.test("isAlreadyMapped 2 ", () => {
  const map = new Map();
  map.set(1, {
    id: 1,
    path: "asdf.ts",
    ast: parser.parse(""),
  });
  assertEquals(isAlreadyMapped("hoge.ts", map), false);
});
