import { addModules } from "../addModules/addModules.ts";

export const bundle: (entryPath: string) => string = (entryPath) => {
  addModules(entryPath);
  return "";
};
