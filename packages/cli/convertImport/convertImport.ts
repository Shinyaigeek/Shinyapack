import { File } from "../../../@types/@babel/type.d.ts";
import babelTraverse from "https://jspm.dev/@babel/traverse";

import t from "https://jspm.dev/@babel/types";

import traverseType from "../../../@types/@babel/traverse.d.ts";
import { convertExport } from "../convertExport/convertExport.ts";

export const convertImport: (ast: File) => File = (ast) => {
  const traverse = babelTraverse.default as typeof traverseType;

  traverse(ast, {
    ImportDeclaration(nodePath) {
      nodePath.replaceWith();
    },
  });
};
