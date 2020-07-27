import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse";

import t from "https://jspm.dev/@babel/types";

import traverseType from "../../../@types/@babel/traverse.d.ts";

export const insertExported: (ast: File) => File = (ast) => {
  const traverse = babelTraverse.default as typeof traverseType;
  traverse(ast, {
    Program(nodePath) {
      nodePath.get("body")[0].insertBefore(
        t.variableDeclaration("const", [t.variableDeclarator(
          t.identifier(
            "$_Shinyapack_exports",
          ),
          t.objectExpression([]),
        )]),
      );
    },
  });

  return ast;
};
