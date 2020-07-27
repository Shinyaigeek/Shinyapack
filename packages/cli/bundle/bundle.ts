import { makeModuleMap } from "../makeModuleMap/makeModuleMap.ts";


export const bundle: (entryPath: string) => string = (entryPath) => {
  const moduleMap = makeModuleMap(entryPath);
  const rawAST = moduleMap.get("0")?.ast;
  const bundledModuleMap = ""
  return "";
};
