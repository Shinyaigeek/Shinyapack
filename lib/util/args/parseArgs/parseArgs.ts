import { CommandOption } from "../../../../@types/Shinyapack/CommandOption.ts";

export const parseArgs: (rawArgs: string[]) => CommandOption = (rawArgs) => {
  const res = {};

  return {
    target: rawArgs[0],
  };
};
