// TODO: deno-typesによるtype refが聞いてない

//@deno-types="../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";

import babelTraverse from "https://jspm.dev/@babel/traverse"

import traverseType from "../../../@types/@babel/traverse.d.ts"

import { File } from "../../../@types/@babel/type.d.ts";

import { readerSync } from "../../../lib/util/parser/readerSync/readerSync.ts";

import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { isAlreadyMapped } from "../../../lib/util/map/IsAlreadyMapped/isAlreadyMapped.ts";

import { normalizeGlob } from "https://deno.land/std/path/glob.ts";

//TODO: load済みのmoduleMap扱うのに非同期は辛い, みんなどうしてるかあとで見る
export const addModules: (
  modulePath: string,
  moduleMap: Map<string, CachedModuleType>,
) => Map<string, CachedModuleType> = (modulePath, moduleMap) => {
  console.log(modulePath)
  if (isAlreadyMapped(modulePath, moduleMap)) {
    return moduleMap;
  }
  const txt = readerSync(modulePath);

  // TODO: 副作用なしに行いたい. gcにメモリ解放を明示するのを型安全に行いたいからあとで調べる
  const ast = parser.parse(txt, {
    sourceType: "module",
  }) as File;

  // console.log(ast.program.body)

  const traverse = babelTraverse.default as typeof traverseType

  let map = new Map(moduleMap);

  map.set(moduleMap.size.toString(), {
    id: moduleMap.size.toString(),
    path: modulePath,
    ast: ast,
  });

  traverse(ast, {
    ImportDeclaration(nodePath) {
      map = addModules(normalizeGlob("examples/" + nodePath.node.source.value),  map)
    },
  });

  return map
};
