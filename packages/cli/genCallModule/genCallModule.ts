import { CachedModuleType } from "../../../@types/ShinyapackCli/CachedModuleType.d.ts";
import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse";

import t from "https://jspm.dev/@babel/types";

import traverseType from "../../../@types/@babel/traverse.d.ts";

export const genCallModule: (ast: File, module: CachedModuleType) => File = (
  ast,
  module,
) => {
  const traverse = babelTraverse.default as typeof traverseType;

  console.log(module.ast.program);

  traverse(ast, {
    VariableDeclaration(nodePath) {
      if (nodePath.node.declarations[0].id.hasOwnProperty("name")) {
        // TODO: ここのプロパティチェック, あるいは変数名チェックをスマートに書く
        //@ts-ignore
        if (nodePath.node.declarations[0].id.name === "$_Shinyapack_modules") {
          //@ts-ignore
          const keys = nodePath.node.declarations[0].init.properties;

          keys.push(t.objectProperty(
            t.identifier(module.id),
            t.arrowFunctionExpression(
              [
                t.identifier(
                  "exports",
                ),
              ],
              t.blockStatement(
                module.ast.program.body,
              ),
            ),
          ));
        }
      }
    },
  });

  return ast;
};
