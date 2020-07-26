import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts"
import { addModules } from "../addModules/addModules.ts";

//@deno-types="../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";

export const makeModuleMap: (entryPath: string) => Promise<Map<string, CachedModuleType>> = async (entryPath) => {
    let map = new Map<string, CachedModuleType>();
    map = await addModules(entryPath, map);

    return map
}