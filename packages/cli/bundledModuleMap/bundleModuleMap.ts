import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse"

import traverseType from "../../../@types/@babel/traverse.d.ts"
import { insertExported } from "../insertExported/insertExported.ts";

export const bundleModuleMap:  (targetModuleMap: Map<string, CachedModuleType>, ast: File) => File = (targetModuleMap, ast) => {
    const traverse = babelTraverse.default as typeof traverseType;
    console.log("------bundleModuleMap-----")
    const exportAddedAst = insertExported(ast);

    console.log("bundleMoudleMap done")

    return exportAddedAst
}