// TODO: deno-typesによるtype refが聞いてない

//@deno-types="../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";

import babelTraverse from "https://jspm.dev/@babel/traverse";

import traverseType from "../../../@types/@babel/traverse.d.ts";

import { File } from "../../../@types/@babel/type.d.ts";

import { readerSync } from "../../../lib/util/parser/readerSync/readerSync.ts";

import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { isAlreadyMapped } from "../../../lib/util/map/IsAlreadyMapped/isAlreadyMapped.ts";

import { normalizeGlob } from "https://deno.land/std/path/glob.ts";
import t from "https://jspm.dev/@babel/types";

//TODO: load済みのmoduleMap扱うのに非同期は辛い, みんなどうしてるかあとで見る
export const addModules: (
  modulePath: string,
  moduleMap: Map<string, CachedModuleType>,
) => Map<string, CachedModuleType> = (modulePath, moduleMap) => {
  const txt = readerSync(modulePath);

  // TODO: 副作用なしに行いたい. gcにメモリ解放を明示するのを型安全に行いたいからあとで調べる
  const ast = parser.parse(txt, {
    sourceType: "module",
  }) as File;
  const traverse = babelTraverse.default as typeof traverseType;

  let map = new Map(moduleMap);
  map.set(moduleMap.size.toString(), {
    id: moduleMap.size.toString(),
    path: modulePath,
    ast: ast,
  });
  traverse(ast, {
    ImportDeclaration(nodePath) {
      map = addModules(
        normalizeGlob("examples/" + nodePath.node.source.value),
        map,
      );
      const name = nodePath.node.specifiers[0].local.name;
      nodePath.replaceWith(
        t.variableDeclaration(
          "const",
          [t.variableDeclarator(
            t.objectPattern(
              [t.objectProperty(
                t.identifier("default"),
                t.identifier(name),
              )],
            ),
            t.callExpression(
              t.identifier("$_Shinyapack_import"),
              [t.stringLiteral((map.size - 1).toString())],
            ),
          )],
        ),
      );
    },
  });
  // if (isAlreadyMapped(modulePath, moduleMap)) {
  //   return moduleMap;
  // }

  // traverse(ast, {
  //   ImportDeclaration(nodePath) {
  //     map = addModules(
  //       normalizeGlob("examples/" + nodePath.node.source.value),
  //       map,
  //     );
  //   },
  // });

  return map;
};
