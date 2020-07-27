import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse";

import t from "https://jspm.dev/@babel/types";

import traverseType from "../../../@types/@babel/traverse.d.ts";

export const convertExport: (ast: File) => File = (ast) => {
  const traverse = babelTraverse.default as typeof traverseType;

  traverse(ast, {
    ExportDefaultDeclaration(nodePath) {
      const right = nodePath.node.declaration as any;
      const newNode = t.expressionStatement(
        t.assignmentExpression(
          "=",
          t.memberExpression(
            t.identifier("exports"),
            t.stringLiteral("default"),
            true,
          ),
          right,
        ),
      );
      nodePath.replaceWith(newNode);
    },
    Program(nodePath) {
      nodePath.get("body")[nodePath.get("body").length - 1].insertAfter(
        t.returnStatement(
          t.identifier(
            "exports",
          ),
        ),
      );
    },
  });

  return ast;
};
