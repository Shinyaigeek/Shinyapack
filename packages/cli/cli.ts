import { CommandOption } from "../../@types/Shinyapack/CommandOption.ts";
import { reader } from "../../lib/util/parser/reader/reader.ts";
import { renderOneFile } from "../../lib/util/render/renderOneFile/renderOneFile.ts";

export const cli = (args: CommandOption) => {
  reader(args.target).then((context) => {
    renderOneFile("dist/output.js", context).then((_) => {
      console.log("bundle is successfulled done 🎉");
    }).catch((e) => {
      console.error("bundle is failed 🤯");
      throw new Error(e);
    });
  });
};
