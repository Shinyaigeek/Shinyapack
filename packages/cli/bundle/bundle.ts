import { makeModuleMap } from "../makeModuleMap/makeModuleMap.ts";


export const bundle: (entryPath: string) => string = (entryPath) => {
  makeModuleMap(entryPath)
  return "";
};
