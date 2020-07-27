import { CommandOption } from "../../@types/Shinyapack/CommandOption.ts";
import { reader } from "../../lib/util/parser/reader/reader.ts";
import { renderOneFile } from "../../lib/util/render/renderOneFile/renderOneFile.ts";

import { bundle } from "./bundle/bundle.ts";

export const cli = (args: CommandOption) => {
  const output = bundle(args.target);
  console.log(output)
  renderOneFile("dist/output.js", output.code).then((_) => {
    console.log("bundle is successfulled done 🎉");
  }).catch((e) => {
    console.error("bundle is failed 🤯");
    throw new Error(e);
  });
};
