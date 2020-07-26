//@deno-types="../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";
import { reader } from "../../../lib/util/parser/reader/reader.ts";

import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { isAlreadyMapped } from "../../../lib/util/map/IsAlreadyMapped/isAlreadyMapped.ts";

//TODO: load済みのmoduleMap扱うのに非同期は辛い, みんなどうしてるかあとで見る
export const addModules: (
  modulePath: string,
  moduleMap: Map<string, CachedModuleType>,
) => Promise<Map<string, CachedModuleType>> = async (modulePath, moduleMap) => {
  if (isAlreadyMapped(modulePath, moduleMap)) {
    return moduleMap;
  }
  const txt = await reader(modulePath);

  // TODO: 副作用なしに行いたい. gcにメモリ解放を明示するのを型安全に行いたいからあとで調べる
  const ast = parser.parse(txt, {
    sourceType: "module",
  });

  return moduleMap.set(moduleMap.size.toString(), {
    id: moduleMap.size.toString(),
    path: modulePath,
    ast: ast,
  });
};