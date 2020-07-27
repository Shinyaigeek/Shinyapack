import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse";

import traverseType from "../../../@types/@babel/traverse.d.ts";
import { insertExported } from "../insertExported/insertExported.ts";
import { insertImport } from "../insertImport/insertImport.ts";
import { insertModules } from "../insertModules/insertModules.ts";
import { genCallModule } from "../genCallModule/genCallModule.ts";

export const bundleModuleMap: (
  targetModuleMap: Map<string, CachedModuleType>,
  ast: File,
) => File = (targetModuleMap, ast) => {
  const traverse = babelTraverse.default as typeof traverseType;
  const importAddedAst = insertImport(ast);
  const exportAddedAst = insertExported(importAddedAst);
  let moduleAddedAst = insertModules(exportAddedAst);
  console.log(targetModuleMap);
  for (let i = 1; i < targetModuleMap.size; i++) {
    moduleAddedAst = genCallModule(ast, targetModuleMap.get(i.toString())!);
  }

  return moduleAddedAst;
};
