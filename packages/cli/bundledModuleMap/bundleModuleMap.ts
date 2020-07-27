import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.ts";
import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse"

import traverseType from "../../../@types/@babel/traverse.d.ts"

export const bundleModuleMap:  (targetModuleMap: Map<string, CachedModuleType>, ast: File) => File = (targetModuleMap) => {
    const traverse = babelTraverse.default as typeof traverseType;
    traverse(ast, {
        
    })
}