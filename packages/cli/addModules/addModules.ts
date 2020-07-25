//@deno-types="../../../@types/@babel/parser.d.ts"
import parser from "https://cdn.skypack.dev/@babel/parser";
import { reader } from "../../../lib/util/parser/reader/reader.ts";

import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts"

export const addModules:(modulePath: string, moduleMap: Map<string, CachedModuleType>) => Map<string, CachedModuleType> = (modulePath, moduleMap) => {
    reader(modulePath).then(txt => {

        const asdf = parser.parse(txt, {
            sourceType: "module"
        })

        console.log(asdf)
    })
}