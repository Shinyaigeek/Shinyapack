import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { addModules } from "../addModules/addModules.ts";

//@deno-types="../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";

export const makeModuleMap: (
  entryPath: string,
) => Map<string, CachedModuleType> = (entryPath) => {
  let map = new Map<string, CachedModuleType>();
  map = addModules(entryPath, map);

  return map;
};
