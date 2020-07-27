import { makeModuleMap } from "../makeModuleMap/makeModuleMap.ts";
import { bundleModuleMap } from "../bundledModuleMap/bundleModuleMap.ts";

import generator from "https://cdn.skypack.dev/@babel/generator"


export const bundle: (entryPath: string) => { code: string } = (entryPath) => {
  const moduleMap = makeModuleMap(entryPath);
  const rawAST = moduleMap.get("0")?.ast!;
  const bundledModuleMap = bundleModuleMap(moduleMap, rawAST);
  return generator(bundledModuleMap);
};
