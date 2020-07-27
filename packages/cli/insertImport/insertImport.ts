import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse";

import t from "https://jspm.dev/@babel/types";

import traverseType from "../../../@types/@babel/traverse.d.ts";

export const insertImport: (ast: File) => File = (ast) => {
  const traverse = babelTraverse.default as typeof traverseType;
  traverse(ast, {
    Program(nodePath) {
      nodePath.get("body")[0].insertBefore(
        t.variableDeclaration("const", [t.variableDeclarator(
          t.identifier(
            "$_Shinyapack_import",
          ),
          t.arrowFunctionExpression(
            [
              t.identifier(
                "id",
              ),
            ],
            t.blockStatement(
              [
                t.ifStatement(
                  t.memberExpression(
                    t.identifier(
                      "$_Shinyapack_exports",
                    ),
                    t.identifier(
                      "id",
                    ),
                    true,
                  ),
                  t.returnStatement(
                    t.memberExpression(
                      t.identifier(
                        "$_Shinyapack_exports",
                      ),
                      t.identifier(
                        "id",
                      ),
                      true,
                    ),
                  ),
                ),
                t.returnStatement(
                  t.callExpression(
                    t.memberExpression(
                      t.identifier(
                        "$_Shinyapack_modules",
                      ),
                      t.identifier(
                        "id",
                      ),
                      true,
                    ),
                    [t.assignmentExpression(
                      "=",
                      t.memberExpression(
                        t.identifier(
                          "$_Shinyapack_exports",
                        ),
                        t.identifier(
                          "id",
                        ),
                        true,
                      ),
                      t.objectExpression([]),
                    )],
                  ),
                ),
              ],
            ),
          ),
        )]),
      );
    },
  });

  return ast;
};
