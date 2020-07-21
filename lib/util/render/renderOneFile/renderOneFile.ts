import { checkOutputPath } from "../checkOutputPath/checkOutputPath.ts";

export const renderOneFile: (output: string, context: string) => Promise<void> =
  async (output, context) => {
    await checkOutputPath(output);
    Deno.writeTextFile(output, context).then((_) => {
      console.log(`${output}: is successfully written 🎉`);
    }).catch((e) => {
      console.error(`oops!! ${output} is failed to be written 😿`);
      throw new Error(e);
    });
  };
